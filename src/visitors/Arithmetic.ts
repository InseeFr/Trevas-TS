import {
    ArithmeticExprContext,
    ArithmeticExprOrConcatContext,
    ExprContext,
    UnaryExprContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-0-antlr-tools-ts";
import * as dfd from "danfojs";
import { TypeMismatchError } from "errors";
import {
    validateMeasuresTypes,
    ensureContextAreDefined,
    hasNullArgs,
    hasSameStructure,
    getInternalDatasetIds,
    getMeasureNames,
    getRenameMeasuresConfig
} from "utilities";
import { Bindings, InternalDataset, VisitorResult } from "model";
import ExpressionVisitor from "./Expression";

const getType = (...args: (VisitorResult | null)[]) => {
    const types = args.map(a => a?.type);
    if (types.includes(VtlParser.NULL_CONSTANT)) return VtlParser.NUMBER;
    if (types.includes(VtlParser.DATE)) return VtlParser.INTEGER;
    return types.includes(VtlParser.NUMBER) ? VtlParser.NUMBER : VtlParser.INTEGER;
};

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
            throw new TypeMismatchError(right as ExprContext, expectedTypes, rightExpr.type);

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
            throw new TypeMismatchError(left as ExprContext, expectedTypes, leftExpr.type);

        if (!expectedTypes.includes(rightExpr.type))
            throw new TypeMismatchError(right as ExprContext, expectedTypes, rightExpr.type);

        let type = getType(leftExpr, rightExpr);

        if ([leftExpr.type, rightExpr.type].includes(VtlParser.DATASET)) {
            let operatorFunction: (left: dfd.Series, right: dfd.Series | number) => dfd.Series;
            switch (op?.type) {
                case VtlParser.PLUS:
                    operatorFunction = (left, right) => left.add(right);
                    break;
                case VtlParser.MINUS:
                    operatorFunction = (left, right) => left.sub(right);
                    break;
                case VtlParser.MUL:
                    operatorFunction = (left, right) => left.mul(right);
                    break;
                case VtlParser.DIV:
                    operatorFunction = (left, right) => left.div(right);
                    type = VtlParser.NUMBER;
                    break;
                default:
                    throw new Error(`unknown operator ${op?.text}`);
            }
            if ([VtlParser.INTEGER, VtlParser.NUMBER].includes(rightExpr.type)) {
                return {
                    type: VtlParser.DATASET,
                    resolve: (bindings: Bindings) => {
                        const leftInternalDataset = leftExpr.resolve(bindings) as InternalDataset;
                        if (
                            !validateMeasuresTypes(leftInternalDataset, [
                                VtlParser.INTEGER,
                                VtlParser.NUMBER
                            ])
                        ) {
                            throw new Error("Measure types have to be INTEGER or NUMBER");
                        }
                        const rightNumber = rightExpr.resolve(bindings) as number;
                        const res = new dfd.DataFrame(dfd.toJSON(leftInternalDataset.dataset));
                        getMeasureNames(leftInternalDataset).forEach(m => {
                            const mLeft = res.column(m);
                            res.addColumn(m, operatorFunction(mLeft, rightNumber));
                        });
                        if (rightExpr.type === VtlParser.NUMBER) {
                            const dataStructure = leftInternalDataset.dataStructure.map(
                                ({ role, type }) =>
                                    role === VtlParser.MEASURE ? VtlParser.NUMBER : type
                            );
                            return { dataStructure, dataset: res };
                        }
                        return { dataStructure: leftInternalDataset.dataStructure, dataset: res };
                    }
                };
            }
            return {
                type: VtlParser.DATASET,
                resolve: (bindings: Bindings) => {
                    const leftInternalDataset = leftExpr.resolve(bindings) as InternalDataset;
                    const rightInternalDataset = rightExpr.resolve(bindings) as InternalDataset;
                    if (!hasSameStructure(leftInternalDataset, rightInternalDataset)) {
                        throw new Error("visitArithmeticExpr requires datasets with same struture");
                    }
                    if (
                        !validateMeasuresTypes(leftInternalDataset, [
                            VtlParser.INTEGER,
                            VtlParser.NUMBER
                        ])
                    ) {
                        throw new Error("Measure types have to be INTEGER or NUMBER");
                    }
                    // rename input datasets
                    const leftMeasuresConfig = getRenameMeasuresConfig(leftInternalDataset, "left");
                    const rightMeasuresConfig = getRenameMeasuresConfig(rightInternalDataset, "right");
                    const renamedLeftDs = leftInternalDataset.dataset.rename(leftMeasuresConfig);
                    const renamedRightDs = rightInternalDataset.dataset.rename(rightMeasuresConfig);
                    // inner join ds
                    const mergedDs = dfd.merge({
                        left: renamedLeftDs,
                        right: renamedRightDs,
                        on: getInternalDatasetIds(leftInternalDataset),
                        how: "inner"
                    });
                    // apply operatorFunction

                    const calcDs = new dfd.DataFrame(dfd.toJSON(mergedDs));
                    Object.keys(leftMeasuresConfig).forEach(m => {
                        const mLeft = calcDs.column(`${m}#left`);
                        const mRight = calcDs.column(`${m}#right`);
                        calcDs.addColumn(m, operatorFunction(mLeft, mRight), { inplace: true });
                    });
                    // Drop useless measures
                    const measuresToDrop = [
                        ...Object.values(leftMeasuresConfig),
                        ...Object.values(rightMeasuresConfig)
                    ];
                    const res = calcDs.drop({ columns: measuresToDrop });
                    return { dataStructure: leftInternalDataset.dataStructure, dataset: res };
                }
            };
        }
        let operatorFunction: (left: any, right: any) => any;
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
