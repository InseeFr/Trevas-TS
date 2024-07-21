import {
    AggrDatasetContext,
    AnSimpleFunctionContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-0-antlr-tools-ts";
import { TypeMismatchError } from "errors";
import * as U from "utilities";
import { Bindings, VisitorResult } from "model";
import ExpressionVisitor from "visitors/Expression";
import { Dataset } from "model/vtl";
import { Token } from "@making-sense/antlr4ng";

// Handle meta for return, not only dataPoints
class DatasetVisitor extends VtlVisitor<VisitorResult> {
    exprVisitor: ExpressionVisitor;
    constructor(exprVisitor: ExpressionVisitor) {
        super();
        this.exprVisitor = exprVisitor;
    }

    visitAggrDataset = (ctx: AggrDatasetContext) => {
        const opCtx = ctx._op as Token;
        const expr = this.exprVisitor.visit(ctx.expr());

        if (expr?.type !== VtlParser.DATASET) {
            throw new TypeMismatchError(ctx.expr(), VtlParser.DATASET, opCtx.type);
        }

        // TODO: has to check dataPoint content

        let operatorFunction;

        switch (opCtx?.type) {
            case VtlParser.COUNT: {
                operatorFunction = (e: Dataset) => U.getCount(e);
                break;
            }
            case VtlParser.SUM: {
                operatorFunction = (e: Dataset) => U.getSum(e);
                break;
            }
            case VtlParser.MIN: {
                operatorFunction = (e: Dataset) => U.getMin(e);
                break;
            }
            case VtlParser.MAX: {
                operatorFunction = (e: Dataset) => U.getMax(e);
                break;
            }
            case VtlParser.MEDIAN: {
                operatorFunction = (e: Dataset) => U.getMedian(e);
                break;
            }
            case VtlParser.AVG: {
                operatorFunction = (e: Dataset) => U.getAvg(e);
                break;
            }
            case VtlParser.STDDEV_POP: {
                operatorFunction = (e: Dataset) => U.getStdDevPop(e);
                break;
            }
            case VtlParser.STDDEV_SAMP: {
                operatorFunction = (e: Dataset) => U.getStdDevSamp(e);
                break;
            }
            case VtlParser.VAR_POP: {
                operatorFunction = (e: Dataset) => U.getVarPop(e);
                break;
            }
            case VtlParser.VAR_SAMP: {
                operatorFunction = (e: Dataset) => U.getVarSamp(e);
                break;
            }
            default:
                throw new Error(`unknown operator ${opCtx.text}`);
        }

        return {
            resolve: (bindings: Bindings) => operatorFunction(expr.resolve(bindings)),
            type: VtlParser.DATASET
        };
    };

    visitAnSimpleFunction = (ctx: AnSimpleFunctionContext) => {
        // TODO: implement over support
        const { _op: opCtx } = ctx;
        const expr = this.exprVisitor.visit(ctx.expr());

        if (expr?.type !== VtlParser.DATASET) {
            throw new TypeMismatchError(ctx.expr(), VtlParser.DATASET, opCtx?.type);
        }

        let operatorFunction;

        switch (opCtx?.type) {
            case VtlParser.FIRST_VALUE:
                operatorFunction = (e: Dataset) => U.getDatasetFirstValue(e);
                break;
            case VtlParser.LAST_VALUE:
                operatorFunction = (e: Dataset) => U.getDatasetLastValue(e);
                break;
            default:
                throw new Error(`unknown operator ${opCtx?.text}`);
        }

        return {
            resolve: (bindings: Bindings) => operatorFunction(expr.resolve(bindings)),
            type: VtlParser.DATASET
        };
    };
}

export default DatasetVisitor;
