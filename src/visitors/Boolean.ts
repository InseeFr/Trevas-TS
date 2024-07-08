import {
    BooleanExprContext,
    ExprContext,
    UnaryExprContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-0-antlr-tools-ts";
import { TypeMismatchError } from "../errors";
import { ensureContextAreDefined, hasNullArgs } from "../utils";
import { Bindings, VisitorResult } from "model";
import ExpressionVisitor from "./Expression";

const handleAnd = (leftExpr: VisitorResult, rightExpr: VisitorResult) => ({
    resolve: (bindings: Bindings) => {
        const leftValue = leftExpr.resolve(bindings);
        if (leftValue !== null && !leftValue) return false;

        const rightValue = rightExpr.resolve(bindings);
        if (rightValue !== null && !rightValue) return false;

        if (hasNullArgs(leftValue, rightValue)) return null;

        return true;
    },
    type: VtlParser.BOOLEAN
});

const handleOr = (leftExpr: VisitorResult, rightExpr: VisitorResult) => ({
    resolve: (bindings: Bindings) => {
        const leftValue = leftExpr.resolve(bindings);
        if (leftValue !== null && leftValue) return true;

        const rightValue = rightExpr.resolve(bindings);
        if (rightValue !== null && rightValue) return true;

        if (hasNullArgs(leftValue, rightValue)) return null;

        return false;
    },
    type: VtlParser.BOOLEAN
});

const handleXor = (leftExpr: VisitorResult, rightExpr: VisitorResult) => ({
    resolve: (bindings: Bindings) => {
        const leftValue = leftExpr.resolve(bindings);
        if (leftValue === null) return null;

        const rightValue = rightExpr.resolve(bindings);
        if (rightValue === null) return null;

        return leftExpr.resolve(bindings) !== rightExpr.resolve(bindings);
    },
    type: VtlParser.BOOLEAN
});

class BooleanVisitor extends VtlVisitor<VisitorResult> {
    exprVisitor: ExpressionVisitor;
    constructor(exprVisitor: ExpressionVisitor) {
        super();
        this.exprVisitor = exprVisitor;
    }

    visitUnaryExpr = (ctx: UnaryExprContext) => {
        const { _right: right } = ctx;

        ensureContextAreDefined(right);

        const rightOperand = this.exprVisitor.visit(right as ExprContext) as VisitorResult;

        if (![VtlParser.BOOLEAN, VtlParser.NULL_CONSTANT].includes(rightOperand.type))
            throw new Error("Operand should be a boolean constant");
        return {
            resolve: (bindings: Bindings) => {
                const operandValue = rightOperand.resolve(bindings);
                if (operandValue === null) return null;
                return !operandValue;
            },
            type: VtlParser.BOOLEAN
        };
    };

    visitBooleanExpr = (ctx: BooleanExprContext) => {
        const { _left: left, _right: right, _op: op } = ctx;

        ensureContextAreDefined(left, right);

        const leftExpr = this.exprVisitor.visit(left as ExprContext) as VisitorResult;
        const rightExpr = this.exprVisitor.visit(right as ExprContext) as VisitorResult;

        if (![VtlParser.BOOLEAN, VtlParser.NULL_CONSTANT].includes(leftExpr?.type))
            throw new TypeMismatchError(left, VtlParser.BOOLEAN, leftExpr?.type);
        if (![VtlParser.BOOLEAN, VtlParser.NULL_CONSTANT].includes(rightExpr?.type))
            throw new TypeMismatchError(right, VtlParser.BOOLEAN, rightExpr?.type);

        if (op?.type === VtlParser.AND) return handleAnd(leftExpr, rightExpr);
        if (op?.type === VtlParser.OR) return handleOr(leftExpr, rightExpr);
        if (op?.type === VtlParser.XOR) return handleXor(leftExpr, rightExpr);
        throw new Error(`unknown operator ${op?.text}`);
    };
}

export default BooleanVisitor;
