import {
    InstrAtomContext,
    ReplaceAtomContext,
    SubstrAtomContext,
    UnaryStringFunctionContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-0-antlr-tools-ts";
import { TypeMismatchError, hasNullArgs } from "errors";
import { VisitorResult, Bindings } from "model";
import ExpressionVisitor from "visitors/Expression";

class StringVisitor extends VtlVisitor<VisitorResult> {
    exprVisitor: ExpressionVisitor;
    constructor(exprVisitor: ExpressionVisitor) {
        super();
        this.exprVisitor = exprVisitor;
    }

    visitUnaryStringFunction = (ctx: UnaryStringFunctionContext) => {
        const { _op: op } = ctx;

        const expr = this.exprVisitor.visit(ctx.expr()) as VisitorResult;

        if (![VtlParser.STRING, VtlParser.NULL_CONSTANT].includes(expr.type)) {
            throw new TypeMismatchError(ctx.expr(), VtlParser.STRING, op?.type);
        }

        let operatorFunction;
        let type = VtlParser.STRING;

        switch (op?.type) {
            case VtlParser.TRIM:
                operatorFunction = (e: string): string => e.trim();
                break;
            case VtlParser.LTRIM:
                operatorFunction = (e: string): string => e.trimStart();
                break;
            case VtlParser.RTRIM:
                operatorFunction = (e: string): string => e.trimEnd();
                break;
            case VtlParser.UCASE:
                operatorFunction = (e: string): string => e.toUpperCase();
                break;
            case VtlParser.LCASE:
                operatorFunction = (e: string): string => e.toLowerCase();
                break;
            case VtlParser.LEN:
                operatorFunction = (e: string): number => e.length;
                type = VtlParser.INTEGER;
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

    checkTypes = (exprCtx: any, expectedTypes: number | number[]) => {
        const operand = this.exprVisitor.visit(exprCtx) as VisitorResult;
        const condition = Array.isArray(expectedTypes)
            ? !expectedTypes.includes(operand.type)
            : expectedTypes !== operand.type;
        if (condition) {
            throw new TypeMismatchError(exprCtx, expectedTypes, operand.type);
        }
        return operand;
    };

    visitReplaceAtom = (ctx: ReplaceAtomContext) => {
        const [strCtx, oldCtx] = ctx.expr();
        const operand = this.checkTypes(strCtx, [VtlParser.STRING, VtlParser.NULL_CONSTANT]);
        const oldStr = this.checkTypes(oldCtx, [VtlParser.STRING, VtlParser.NULL_CONSTANT]);
        const newCtx = ctx.optionalExpr()
            ? ctx.optionalExpr()
            : { resolve: () => "", type: VtlParser.STRING };
        const newStr = this.checkTypes(newCtx, [VtlParser.STRING, VtlParser.NULL_CONSTANT]);
        return {
            resolve: (bindings: Bindings) => {
                const operandValue = operand.resolve(bindings);
                const oldStrValue = oldStr.resolve(bindings);
                const newStrValue = newStr.resolve(bindings);
                if (hasNullArgs(operandValue, oldStrValue, newStrValue)) return null;
                const regexp = new RegExp(oldStrValue, "g");
                return operandValue.replace(regexp, newStrValue);
            },
            type: VtlParser.STRING
        };
    };

    visitInstrAtom = (ctx: InstrAtomContext) => {
        const [operandCtx, patternCtx] = ctx.expr();
        const [startCtx, occurrenceCtx] = ctx.optionalExpr();

        const operand = this.checkTypes(operandCtx, [VtlParser.STRING, VtlParser.NULL_CONSTANT]);
        const pattern = this.checkTypes(patternCtx, [VtlParser.STRING, VtlParser.NULL_CONSTANT]);

        const start =
            startCtx && startCtx.expr()
                ? this.checkTypes(startCtx, [VtlParser.INTEGER, VtlParser.NULL_CONSTANT])
                : { resolve: () => 0, type: VtlParser.INTEGER };
        const occurrence =
            occurrenceCtx && occurrenceCtx.expr()
                ? this.checkTypes(occurrenceCtx, [VtlParser.INTEGER, VtlParser.NULL_CONSTANT])
                : { resolve: () => 1, type: VtlParser.INTEGER };

        return {
            resolve: (bindings: Bindings) => {
                const operandValue = operand.resolve(bindings);
                const patternValue = pattern.resolve(bindings);
                let startValue = start.resolve(bindings);

                // Not in the spec.
                if (startValue < 0) {
                    throw new Error("start cannot be negative");
                }
                let occurenceValue = occurrence.resolve(bindings);

                // Not in the spec.
                if (occurenceValue < 0) {
                    throw new Error("occurrence cannot be negative");
                }

                if (hasNullArgs(operandValue, patternValue, startValue, occurenceValue)) return null;

                let result = 0;
                while (occurenceValue > 0) {
                    occurenceValue -= 1;
                    result = operandValue.indexOf(patternValue, startValue);
                    if (result === -1) {
                        return 0;
                    }
                    startValue = result + 1;
                }
                return result + 1;
            },
            type: VtlParser.INTEGER
        };
    };

    visitSubstrAtom = (ctx: SubstrAtomContext) => {
        const { children } = ctx;

        if (children.length === 4) throw new Error("Invalid number of operands for function substr");

        // TODO Grammar defines this as an unbounded array of expressions. Should be changed IMO
        const [startIndexCtx, lengthCtx] = ctx.optionalExpr();

        const operand = this.checkTypes(ctx.expr(), [VtlParser.STRING, VtlParser.NULL_CONSTANT]);
        const startIndex = this.checkTypes(startIndexCtx, [VtlParser.INTEGER, VtlParser.NULL_CONSTANT]);
        const length = this.checkTypes(lengthCtx, [VtlParser.INTEGER, VtlParser.NULL_CONSTANT]);

        return {
            resolve: (bindings: Bindings) => {
                const operandValue = operand.resolve(bindings);
                const startValue = startIndex.resolve(bindings);
                const lengthValue = length.resolve(bindings);

                if (hasNullArgs(operandValue, startValue, lengthValue)) return null;

                return operandValue.substring(startValue - 1, startValue - 1 + lengthValue);
            },
            type: VtlParser.STRING
        };
    };
}

export default StringVisitor;
