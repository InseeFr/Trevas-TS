import {
    BinaryNumericContext,
    ExprContext,
    UnaryNumericContext,
    UnaryWithOptionalNumericContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-1-antlr-tools-ts";
import { TypeMismatchError } from "errors";
import { ensureContextAreDefined, hasNullArgs } from "utilities";
import { Bindings, VisitorResult } from "model";
import ExpressionVisitor from "visitors/Expression";
import Rand, { PRNG } from "rand-seed";

class NumericVisitor extends VtlVisitor<VisitorResult> {
    exprVisitor: ExpressionVisitor;
    constructor(exprVisitor: ExpressionVisitor) {
        super();
        this.exprVisitor = exprVisitor;
    }

    visitUnaryNumeric = (ctx: UnaryNumericContext) => {
        const { _op: op } = ctx;

        ensureContextAreDefined(ctx.expr());

        const expr = this.exprVisitor.visit(ctx.expr()) as VisitorResult;

        const expectedTypes = [VtlParser.INTEGER, VtlParser.NUMBER, VtlParser.NULL_CONSTANT];

        if (!expectedTypes.includes(expr.type)) {
            throw new TypeMismatchError(ctx.expr(), expectedTypes, op?.type);
        }

        let operatorFunction: (a: number) => number;
        let type: number;

        switch (op?.type) {
            case VtlParser.ABS:
                operatorFunction = (e: number): number => Math.abs(e);
                type = VtlParser.INTEGER;
                break;
            case VtlParser.CEIL:
                operatorFunction = (e: number): number => Math.ceil(e);
                type = VtlParser.INTEGER;
                break;
            case VtlParser.EXP:
                operatorFunction = (e: number): number => Math.exp(e);
                type = VtlParser.NUMBER;
                break;
            case VtlParser.FLOOR:
                operatorFunction = (e: number): number => Math.floor(e);
                type = VtlParser.INTEGER;
                break;
            case VtlParser.LN:
                operatorFunction = (e: number): number => Math.log(e);
                type = VtlParser.NUMBER;
                break;
            case VtlParser.SQRT:
                operatorFunction = (e: number): number => Math.sqrt(e);
                type = VtlParser.NUMBER;
                break;
            default:
                throw new Error(`unknown operator ${op?.text}`);
        }

        return {
            resolve: (bindings: Bindings) => {
                const exprValue = expr?.resolve(bindings);
                if (hasNullArgs(exprValue)) return null;
                return operatorFunction(exprValue);
            },
            type
        };
    };

    visitUnaryWithOptionalNumeric = (ctx: UnaryWithOptionalNumericContext) => {
        const { _op: op } = ctx;

        ensureContextAreDefined(ctx.expr());

        const expr = this.exprVisitor.visit(ctx.expr()) as VisitorResult;

        const optionalExpr = ctx?.optionalExpr()?.expr()
            ? this.exprVisitor.visit(ctx.optionalExpr()?.expr() as ExprContext)
            : undefined;

        const expectedTypes = [VtlParser.INTEGER, VtlParser.NUMBER, VtlParser.NULL_CONSTANT];

        if (!expectedTypes.includes(expr.type)) {
            throw new TypeMismatchError(ctx.expr(), expectedTypes, op?.type);
        }

        if (optionalExpr && optionalExpr.type !== VtlParser.INTEGER)
            throw new Error("The second operand should be an integer");

        let operatorFunction: (a: number, b: number) => number;
        let type;

        switch (op?.type) {
            case VtlParser.ROUND:
                operatorFunction = (e: number, oE: number) => {
                    if (!oE || oE === VtlParser.OPTIONAL) return Math.round(e);
                    return Math.round(e * 10 ** oE) / 10 ** oE;
                };
                type = VtlParser.NUMBER;
                break;
            case VtlParser.TRUNC:
                operatorFunction = (e: number, oE: number) => {
                    if (!oE || oE === VtlParser.OPTIONAL) return Math.trunc(e);
                    return Math.trunc(e * 10 ** oE) / 10 ** oE;
                };
                type = VtlParser.NUMBER;
                break;
            default:
                throw new Error(`unknown operator ${op?.text}`);
        }

        return {
            resolve: (bindings: Bindings) => {
                const exprValue = expr.resolve(bindings);
                const optionalValue = optionalExpr ? optionalExpr.resolve(bindings) : undefined;

                if (hasNullArgs(exprValue, optionalValue)) return null;

                return operatorFunction(exprValue, optionalValue);
            },
            type
        };
    };

    visitBinaryNumeric = (ctx: BinaryNumericContext) => {
        const { _left: left, _right: right, _op: op } = ctx;

        ensureContextAreDefined(left, right);

        const leftExpr = this.exprVisitor.visit(left as ExprContext) as VisitorResult;
        const rightExpr = this.exprVisitor.visit(right as ExprContext) as VisitorResult;

        const expectedTypes = [VtlParser.INTEGER, VtlParser.NUMBER, VtlParser.NULL_CONSTANT];

        if (!expectedTypes.includes(leftExpr.type))
            throw new TypeMismatchError(left as ExprContext, expectedTypes, leftExpr.type);
        if (!expectedTypes.includes(rightExpr.type))
            throw new TypeMismatchError(right as ExprContext, expectedTypes, rightExpr.type);

        let operatorFunction: (a: number, b: number) => number;
        let type = VtlParser.NUMBER;

        switch (op?.type) {
            case VtlParser.LOG:
                operatorFunction = (lE: number, rE: number) => Math.log(lE) / Math.log(rE);
                type = VtlParser.NUMBER;
                break;
            case VtlParser.MOD:
                operatorFunction = (lE: number, rE: number) => {
                    if (rE === 0) return lE;
                    return lE % rE;
                };
                type =
                    leftExpr.type === VtlParser.INTEGER && rightExpr.type === VtlParser.INTEGER
                        ? VtlParser.INTEGER
                        : VtlParser.NUMBER;
                break;
            case VtlParser.POWER:
                operatorFunction = (lE: number, rE: number) => lE ** rE;
                type =
                    leftExpr.type === VtlParser.INTEGER && rightExpr.type === VtlParser.INTEGER
                        ? VtlParser.INTEGER
                        : VtlParser.NUMBER;
                break;
            case VtlParser.RANDOM:
                operatorFunction = (lE: number, rE: number) => {
                    const rand = new Rand(lE.toString(), PRNG.sfc32);
                    const array = Array.from({ length: rE }, () => rand.next());
                    return array.pop() as number;
                };
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

                return operatorFunction(leftValue, rightValue);
            },
            type
        };
    };
}

export default NumericVisitor;
