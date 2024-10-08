import {
    ArithmeticExprOrConcatContext,
    ExprContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-1-antlr-tools-ts";
import { Bindings, VisitorResult } from "../../model";
import ExpressionVisitor from "visitors/Expression";
import { ensureContextAreDefined, ensureHadTypes } from "../../utilities";

class ConcatenationVisitor extends VtlVisitor<VisitorResult> {
    exprVisitor: ExpressionVisitor;
    constructor(exprVisitor: ExpressionVisitor) {
        super();
        this.exprVisitor = exprVisitor;
    }

    visitArithmeticExprOrConcat = (ctx: ArithmeticExprOrConcatContext) => {
        if (ctx._op?.type !== VtlParser.CONCAT) {
            throw new Error("Concat visitor got arithmetic context");
        }
        const { _left: left, _right: right } = ctx;

        ensureContextAreDefined(left, right);

        const leftOperand = this.exprVisitor.visit(left as ExprContext) as VisitorResult;
        const rightOperand = this.exprVisitor.visit(right as ExprContext) as VisitorResult;

        ensureHadTypes(leftOperand, rightOperand);

        if (
            ![VtlParser.STRING, VtlParser.NULL_CONSTANT].includes(leftOperand.type) ||
            ![VtlParser.STRING, VtlParser.NULL_CONSTANT].includes(rightOperand.type)
        )
            throw new Error(`cannot concat ${left?.getText()} with ${right?.getText()}`);

        return {
            resolve: (bindings: Bindings) =>
                `${leftOperand?.resolve(bindings)}${rightOperand?.resolve(bindings)}`,
            type: VtlParser.STRING // invariant because of type check above.
        };
    };
}

export default ConcatenationVisitor;
