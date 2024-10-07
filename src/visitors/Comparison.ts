import {
    ComparisonExprContext,
    ComparisonOperandContext,
    ExprContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-1-antlr-tools-ts";
import { TypeMismatchError } from "errors";
import { Bindings, VisitorResult } from "model";
import ExpressionVisitor from "./Expression";
import { ensureContextAreDefined } from "utilities";

const resolve = (
    operand: ComparisonOperandContext | undefined,
    leftExpr: VisitorResult | null,
    rightExpr: VisitorResult | null
) => {
    let operatorFunction: (l: any, r: any) => boolean;
    // @ts-ignore:next-line
    switch (operand?.children[0].symbol.type) {
        case VtlParser.MT:
            operatorFunction = (l: any, r: any) => l > r;
            break;
        case VtlParser.LT:
            operatorFunction = (l: any, r: any) => l < r;
            break;
        case VtlParser.ME:
            operatorFunction = (l: any, r: any) => l >= r;
            break;
        case VtlParser.LE:
            operatorFunction = (l: any, r: any) => l <= r;
            break;
        case VtlParser.EQ:
            operatorFunction = (l: any, r: any) => l === r;
            break;
        case VtlParser.NEQ:
            operatorFunction = (l: any, r: any) => l !== r;
            break;
        default:
            throw new Error(`Unsupported operator ' + ${operand?.getText()}`);
    }
    return (bindings: Bindings) => {
        const leftValue = leftExpr?.resolve(bindings);
        const rightValue = rightExpr?.resolve(bindings);
        if ([leftValue, rightValue].includes(null)) return null;
        return operatorFunction(leftValue, rightValue);
    };
};

class ComparisonVisitor extends VtlVisitor<VisitorResult | null> {
    exprVisitor: ExpressionVisitor;
    constructor(exprVisitor: ExpressionVisitor) {
        super();
        this.exprVisitor = exprVisitor;
    }

    visitComparisonExpr = (ctx: ComparisonExprContext) => {
        const { _left: left, _right: right, _op: op } = ctx;

        ensureContextAreDefined(left, right);

        const leftExpr = this.exprVisitor.visit(left as ExprContext) as VisitorResult;
        const rightExpr = this.exprVisitor.visit(right as ExprContext) as VisitorResult;

        const expectedTypes = [
            VtlParser.INTEGER,
            VtlParser.NUMBER,
            VtlParser.STRING,
            VtlParser.BOOLEAN,
            VtlParser.NULL_CONSTANT,
            VtlParser.DATE
        ];

        if (!expectedTypes.includes(leftExpr.type))
            throw new TypeMismatchError(left as ExprContext, expectedTypes, leftExpr.type);

        if (!expectedTypes.includes(rightExpr.type))
            throw new TypeMismatchError(right as ExprContext, expectedTypes, rightExpr.type);

        const handleIntegerAndNumber = (leftType: number | undefined, rightType: number | undefined) => {
            if (!leftType || !rightType) return false;
            if (
                [VtlParser.INTEGER, VtlParser.NUMBER].includes(leftType) &&
                [VtlParser.INTEGER, VtlParser.NUMBER].includes(rightType)
            )
                return false;
            return leftType !== rightType;
        };

        if (
            ![leftExpr?.type, rightExpr?.type].includes(VtlParser.NULL_CONSTANT) &&
            handleIntegerAndNumber(leftExpr?.type, rightExpr?.type)
        )
            throw new TypeMismatchError(left as ExprContext, expectedTypes, rightExpr?.type);

        return {
            resolve: resolve(op, leftExpr, rightExpr),
            type: VtlParser.BOOLEAN
        };
    };
}

export default ComparisonVisitor;
