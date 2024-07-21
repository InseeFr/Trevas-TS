import {
    ArithmeticExprContext,
    ArithmeticExprOrConcatContext,
    ExprContext,
    UnaryExprContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-0-antlr-tools-ts";
import { TypeMismatchError } from "errors";
import { ensureContextAreDefined, hasNullArgs } from "utilities";
import { Bindings, VisitorResult } from "model";
import ExpressionVisitor from "./Expression";
import { Component } from "model/vtl";

const getType = (...args: (VisitorResult | null)[]) => {
    const types = args.map(a => a?.type);
    if (types.includes(VtlParser.NULL_CONSTANT)) return VtlParser.NUMBER;
    if (types.includes(VtlParser.DATE)) return VtlParser.INTEGER;
    return types.includes(VtlParser.NUMBER) ? VtlParser.NUMBER : VtlParser.INTEGER;
};

/**
 * Util function that creates a key extractor for the columns.
 * @param columns columns to extract.
 * @return a key extractor function.
 */
function keyExtractorFor(columns: string[]) {
    if (columns.length < 1) {
        throw new Error("column list was empty");
    }
    return (row: string) =>
        Object.entries(row)
            .filter(([key]: any) => columns.includes(key))
            .map(([_, value]) => value)
            .reduce((a, v) => a + v, "");
}

/**
 * Creates a merger function that uses op on all measures.
 * @param identifiers the identifier columns
 * @param measures the measure columns
 * @param op the operator
 */
function rowMerger(identifiers: any, measures: any, op: any) {
    return (left: any, right: any) => {
        const result: Record<string, any> = {};
        for (const identifier of identifiers) {
            result[identifier] = left[identifier];
        }
        for (const measure of measures) {
            result[measure] = op(left[measure], right[measure]);
        }
        return result;
    };
}

function intersectColumns(leftColumns: Component[] | undefined, rightColumns: Component[] | undefined) {
    if (!leftColumns || !rightColumns) return {};
    return Object.fromEntries(
        Object.entries(leftColumns).filter(([_, l]) =>
            Object.entries(rightColumns).some(
                ([__, r]) => l.name === r.name && l.role === r.role && l.type === r.type
            )
        )
    );
}

class ArithmeticVisitor extends VtlVisitor<VisitorResult> {
    exprVisitor: ExpressionVisitor;
    constructor(exprVisitor: ExpressionVisitor) {
        super();
        this.exprVisitor = exprVisitor;
    }

    visitUnaryExpr = (ctx: UnaryExprContext) => {
        const { _op: op, _right: right } = ctx;

        ensureContextAreDefined(right);

        const rightExpr = this.exprVisitor.visit(right as ExprContext) as VisitorResult;

        const expectedTypes = [VtlParser.INTEGER, VtlParser.NUMBER, VtlParser.NULL_CONSTANT];

        if (!expectedTypes.includes(rightExpr.type))
            throw new TypeMismatchError(right, expectedTypes, rightExpr.type);

        const type = getType(rightExpr);

        return {
            resolve: (bindings: Bindings) => {
                const value = rightExpr.resolve(bindings);
                if (value === null) return null;
                return op?.type === VtlParser.PLUS ? value : -value;
            },
            type
        };
    };

    visitArithmeticExprOrConcat = (ctx: ArithmeticExprOrConcatContext) => {
        if (ctx._op?.type === VtlParser.CONCAT) {
            throw new Error("Arithmetic visitor got CONCAT context");
        }
        return this.visitArithmeticExpr(ctx as any);
    };

    visitArithmeticExpr = (ctx: ArithmeticExprContext) => {
        const { _left: left, _right: right, _op: op } = ctx;

        ensureContextAreDefined(left, right);

        const leftExpr = this.exprVisitor.visit(left as ExprContext) as VisitorResult;
        const rightExpr = this.exprVisitor.visit(right as ExprContext) as VisitorResult;

        const expectedTypes = [
            VtlParser.INTEGER,
            VtlParser.NUMBER,
            VtlParser.DATASET,
            VtlParser.NULL_CONSTANT,
            VtlParser.DATE
        ];

        if (!expectedTypes.includes(leftExpr.type))
            throw new TypeMismatchError(left, expectedTypes, leftExpr.type);

        if (!expectedTypes.includes(rightExpr.type))
            throw new TypeMismatchError(right, expectedTypes, rightExpr.type);

        let operatorFunction;

        let type = getType(leftExpr, rightExpr);

        switch (op?.type) {
            case VtlParser.PLUS:
                operatorFunction = (left: any, right: any) => left + right;
                break;
            case VtlParser.MINUS:
                operatorFunction = (left: any, right: any) => left - right;
                break;
            case VtlParser.MUL:
                operatorFunction = (left: any, right: any) => left * right;
                break;
            case VtlParser.DIV:
                operatorFunction = (left: any, right: any) => left / right;
                type = VtlParser.NUMBER;
                break;
            default:
                throw new Error(`unknown operator ${op?.text}`);
        }

        if (leftExpr.type === VtlParser.DATASET && rightExpr.type === VtlParser.DATASET) {
            const commonColumns = intersectColumns(leftExpr.columns, rightExpr.columns);

            const commonIdentifiers = Object.entries(commonColumns)
                .filter(([_, { role }]: any) => role === VtlParser.DIMENSION)
                .map(([name]) => name);
            const commonMeasures = Object.entries(commonColumns)
                .filter(([_, { role }]: any) => role === VtlParser.MEASURE)
                .map(([name]) => name);

            return {
                type: VtlParser.DATASET,
                columns: leftExpr.columns,
                resolve: (bindings: Bindings) => {
                    const leftDataset = leftExpr.resolve(bindings);
                    const rightDataset = rightExpr.resolve(bindings);
                    return leftDataset.join(
                        rightDataset,
                        keyExtractorFor(commonIdentifiers),
                        keyExtractorFor(commonIdentifiers),
                        rowMerger(commonIdentifiers, commonMeasures, operatorFunction)
                    );
                }
            };
        }
        return {
            resolve: (bindings: Bindings) => {
                const leftValue = leftExpr.resolve(bindings);
                const rightValue = rightExpr.resolve(bindings);
                if (hasNullArgs(leftValue, rightValue)) return null;
                if (leftExpr.type === VtlParser.DATE && rightExpr.type === VtlParser.DATE)
                    return operatorFunction(new Date(leftValue), new Date(rightValue));
                return operatorFunction(leftValue, rightValue);
            },
            type
        };
    };
}

export default ArithmeticVisitor;
