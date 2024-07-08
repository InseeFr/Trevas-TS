import {
    ExprContext,
    InNotInExprContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-0-antlr-tools-ts";
import { Bindings, VisitorResult } from "model";

class InNotInVisitor extends VtlVisitor<VisitorResult> {
    exprVisitor: ExprContext;
    constructor(exprVisitor: ExprContext) {
        super();
        this.exprVisitor = exprVisitor;
    }

    /**
     * Assume we only support ValueDomain in bindings as elements
     * @param {*} ctx
     * @returns
     */
    visitInNotInExpr = (ctx: InNotInExprContext) => {
        const { _left: left, _op: op } = ctx;
        const leftExpr = this.exprVisitor.visit(left);
        const listExpr = ctx.lists() ? this.exprVisitor.visit(ctx.lists().constant()) : null;
        // Add babel loader for ??
        const value = ctx.valueDomainID() ? ctx.valueDomainID().children[0].getText() : null;
        return {
            resolve: (bindings: Bindings) => {
                let list;
                if (listExpr) {
                    list = listExpr.map(a => a.resolve(bindings));
                } else if (value && bindings[value]) {
                    list = Object.values(bindings[value].dataPoints)[0];
                } else return null;
                const resolvedLeftExpr = leftExpr.resolve(bindings);
                if (resolvedLeftExpr === null) return null;
                if (op.type === VtlParser.IN) return list.includes(resolvedLeftExpr);
                if (op.type === VtlParser.NOT_IN) return !list.includes(resolvedLeftExpr);
                throw new Error(`unknown operator ${op.getText()}`);
            },
            type: VtlParser.BOOLEAN
        };
    };
}

export default InNotInVisitor;
