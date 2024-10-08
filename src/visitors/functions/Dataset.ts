import {
    AggrDatasetContext,
    AnSimpleFunctionContext,
    ExprContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-1-antlr-tools-ts";
import { TypeMismatchError } from "../../errors";
import { ensureContextAreDefined, validateMeasuresTypes } from "../../utilities";
import { BasicScalarTypes, Dataset, VisitorResult, Bindings } from "../../model";
import ExpressionVisitor from "visitors/Expression";
import GroupVisitor from "visitors/Group";
import { DatasetImplementations } from "processing-engine";

class DatasetVisitor extends VtlVisitor<VisitorResult> {
    exprVisitor: ExpressionVisitor;
    datasetImplementations: DatasetImplementations;
    constructor(exprVisitor: ExpressionVisitor, datasetImplementations: DatasetImplementations) {
        super();
        this.exprVisitor = exprVisitor;
        this.datasetImplementations = datasetImplementations;
    }

    visitAggrDataset = (ctx: AggrDatasetContext) => {
        const { _op: opCtx } = ctx;

        const exprCtx = ctx.expr();

        ensureContextAreDefined(exprCtx);

        const expr = this.exprVisitor.visit(exprCtx as ExprContext) as VisitorResult;

        if (expr.type !== VtlParser.DATASET) {
            throw new TypeMismatchError(exprCtx, VtlParser.DATASET, opCtx?.type);
        }
        if (!opCtx) {
            throw new Error("Unknow operator for aggregation");
        }

        return {
            resolve: (bindings: Bindings) => {
                const exprDataset = expr.resolve(bindings) as Dataset;
                if (
                    !validateMeasuresTypes(exprDataset, [VtlParser.INTEGER, VtlParser.NUMBER]) &&
                    opCtx.type !== VtlParser.COUNT
                ) {
                    throw new Error("Measure types have to be INTEGER or NUMBER");
                }
                const groupBy = new GroupVisitor(exprDataset.dataStructure).visit(ctx);
                const res = this.datasetImplementations.executeAggr(exprDataset, groupBy, opCtx.type);
                return res;
            },
            type: VtlParser.DATASET
        };
    };

    // support only null analyticClause for now
    visitAnSimpleFunction = (ctx: AnSimpleFunctionContext) => {
        // TODO: implement over support
        const { _op: opCtx } = ctx;

        const exprCtx = ctx.expr();

        ensureContextAreDefined(exprCtx);

        const expr = this.exprVisitor.visit(exprCtx as ExprContext) as VisitorResult;

        if (expr.type !== VtlParser.DATASET) {
            throw new TypeMismatchError(exprCtx, VtlParser.DATASET, opCtx?.type);
        }

        let operatorFunction: (ds: Dataset) => Dataset;

        switch (opCtx?.type) {
            case VtlParser.FIRST_VALUE:
                operatorFunction = ds => {
                    const { dataPoints, dataStructure } = ds;
                    const [firstRow] = dataPoints;
                    return { dataStructure, dataPoints: [firstRow] };
                };
                break;
            case VtlParser.LAST_VALUE:
                operatorFunction = ds => {
                    const { dataPoints, dataStructure } = ds;
                    const lastRow = [...dataPoints].pop() as BasicScalarTypes[];
                    return { dataStructure, dataPoints: [lastRow] };
                };
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
