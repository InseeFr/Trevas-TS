import {
    ConstantContext,
    ExprContext,
    InNotInExprContext,
    ListsContext,
    ValueDomainIDContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-0-antlr-tools-ts";
import { VisitorResult, Bindings } from "model";
import { Dataset } from "model/vtl";
import { ensureContextAreDefined } from "utilities";
import ExpressionVisitor from "./Expression";

class InNotInVisitor extends VtlVisitor<VisitorResult> {
    exprVisitor: ExpressionVisitor;
    constructor(exprVisitor: ExpressionVisitor) {
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

        ensureContextAreDefined(left);

        const leftExpr = this.exprVisitor.visit(left as ExprContext);
        const listConstants = (ctx.lists() as ListsContext)?.constant();
        // Add babel loader for ??
        const value = ctx.valueDomainID()
            ? (ctx.valueDomainID() as ValueDomainIDContext).children[0].getText()
            : null;
        return {
            resolve: (bindings: Bindings) => {
                let list;
                if (listConstants) {
                    list = listConstants.map((a: ConstantContext) => this.exprVisitor.visit(a));
                } else if (value && bindings[value]) {
                    const ds = bindings[value] as Dataset;
                    list = Object.values(ds.dataPoints)[0];
                } else return null;
                const resolvedLeftExpr = leftExpr?.resolve(bindings);
                if (resolvedLeftExpr === null) return null;
                if (op?.type === VtlParser.IN) return list.includes(resolvedLeftExpr);
                if (op?.type === VtlParser.NOT_IN) return !list.includes(resolvedLeftExpr);
                throw new Error(`unknown operator ${op?.text}`);
            },
            type: VtlParser.BOOLEAN
        };
    };
}

export default InNotInVisitor;
