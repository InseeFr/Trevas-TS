import {
    BetweenAtomContext,
    CharsetMatchAtomContext,
    ExprContext,
    IsNullAtomContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-0-antlr-tools-ts";
import { TypeMismatchError } from "errors";
import { ensureContextAreDefined, ensureHadTypes, hasNullArgs } from "utils";
import { Bindings, VisitorResult } from "model";
import ExpressionVisitor from "visitors/Expression";

class ComparisonVisitor extends VtlVisitor<VisitorResult> {
    exprVisitor: ExpressionVisitor;
    constructor(exprVisitor: ExpressionVisitor) {
        super();
        this.exprVisitor = exprVisitor;
    }

    visitIsNullAtom = (ctx: IsNullAtomContext) => {
        const expr = this.exprVisitor.visit(ctx.expr());

        return {
            resolve: (bindings: Bindings) => expr?.resolve(bindings) === null,
            type: VtlParser.BOOLEAN
        };
    };

    visitBetweenAtom = (ctx: BetweenAtomContext) => {
        const { _op: op, _from_: from, _to_: to } = ctx;

        ensureContextAreDefined(op, from, to);

        const opOperand = this.exprVisitor.visit(op as ExprContext) as VisitorResult;
        const fromOperand = this.exprVisitor.visit(from as ExprContext) as VisitorResult;
        const toOperand = this.exprVisitor.visit(to as ExprContext) as VisitorResult;

        ensureHadTypes(opOperand, fromOperand, toOperand);

        [
            [opOperand, op],
            [fromOperand, from],
            [toOperand, to]
        ].forEach(el => {
            const o = el[0] as VisitorResult;
            const c = el[1];
            if (![VtlParser.INTEGER, VtlParser.NUMBER, VtlParser.NULL_CONSTANT].includes(o?.type)) {
                throw new TypeMismatchError(c, [VtlParser.INTEGER, VtlParser.NUMBER], o?.type);
            }
        });

        return {
            resolve: (bindings: Bindings) => {
                const fromValue = fromOperand?.resolve(bindings);
                const toValue = toOperand?.resolve(bindings);
                const opValue = opOperand?.resolve(bindings);
                if (hasNullArgs(fromValue, toValue, opValue)) return null;
                return fromValue <= opValue && opValue <= toValue;
            },
            type: VtlParser.BOOLEAN
        };
    };

    visitCharsetMatchAtom = (ctx: CharsetMatchAtomContext) => {
        const { _op: op, _pattern: pattern } = ctx;

        ensureContextAreDefined(op, pattern);

        const opOperand = this.exprVisitor.visit(op as ExprContext) as VisitorResult;
        const patternOperand = this.exprVisitor.visit(pattern as ExprContext) as VisitorResult;

        ensureHadTypes(opOperand, patternOperand);

        [
            [opOperand, op],
            [patternOperand, pattern]
        ].forEach(el => {
            const o = el[0] as VisitorResult;
            const c = el[1];
            if (![VtlParser.STRING, VtlParser.NULL_CONSTANT].includes(o?.type)) {
                throw new TypeMismatchError(c, VtlParser.STRING, o?.type);
            }
        });

        return {
            resolve: (bindings: Bindings) => {
                const opValue = opOperand?.resolve(bindings);
                const patternValue = patternOperand?.resolve(bindings);
                if (hasNullArgs(opValue, patternValue)) return null;
                const regex = new RegExp(patternValue);
                const match = opValue.match(regex);
                if (!match) return false;
                return match && opValue === match[0];
            },
            type: VtlParser.BOOLEAN
        };
    };
}

export default ComparisonVisitor;
