import {
    AggrDatasetContext,
    AnSimpleFunctionContext,
    ExprContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-0-antlr-tools-ts";
import { Token } from "@making-sense/antlr4ng";
import * as dfd from "danfojs";
import { TypeMismatchError } from "errors";
import { ensureContextAreDefined, validateMeasuresTypes } from "utilities";
import { BasicScalarTypes, Dataset, VisitorResult, VTLBindings } from "model";
import ExpressionVisitor from "visitors/Expression";
import { InternalDataset } from "model";
import GroupVisitor from "visitors/Group";

class DatasetVisitor extends VtlVisitor<VisitorResult> {
    exprVisitor: ExpressionVisitor;
    constructor(exprVisitor: ExpressionVisitor) {
        super();
        this.exprVisitor = exprVisitor;
    }

    visitAggrDataset = (ctx: AggrDatasetContext) => {
        const { _op: opCtx } = ctx;

        const exprCtx = ctx.expr();

        ensureContextAreDefined(exprCtx);

        const expr = this.exprVisitor.visit(exprCtx as ExprContext) as VisitorResult;

        if (expr.type !== VtlParser.DATASET) {
            throw new TypeMismatchError(exprCtx, VtlParser.DATASET, opCtx?.type);
        }

        // gb has Groupby type, bad defined in danfo?
        let operatorFunction: (gb: any) => dfd.DataFrame;
        let measureColumnTypes: number | null = null;

        switch (opCtx?.type) {
            case VtlParser.COUNT: {
                operatorFunction = gb => gb.count();
                measureColumnTypes = VtlParser.INTEGER;
                break;
            }
            case VtlParser.SUM: {
                operatorFunction = gb => {
                    const danfoDs = gb.sum();
                    // rename _sum columns

                    // handle null
                    return gb.sum();
                };
                break;
            }
            case VtlParser.MIN: {
                operatorFunction = gb => gb.min();
                break;
            }
            case VtlParser.MAX: {
                operatorFunction = gb => gb.max();
                break;
            }
            case VtlParser.MEDIAN: {
                //operatorFunction = ds => U.getMedian(e);
                measureColumnTypes = VtlParser.NUMBER;
                break;
            }
            case VtlParser.AVG: {
                operatorFunction = gb => gb.mean();
                measureColumnTypes = VtlParser.NUMBER;
                break;
            }
            case VtlParser.STDDEV_POP: {
                //operatorFunction = ds => U.getStdDevPop(e);
                measureColumnTypes = VtlParser.NUMBER;
                break;
            }
            case VtlParser.STDDEV_SAMP: {
                //operatorFunction = ds => U.getStdDevSamp(e);
                measureColumnTypes = VtlParser.NUMBER;
                break;
            }
            case VtlParser.VAR_POP: {
                //operatorFunction = ds => U.getVarPop(e);
                measureColumnTypes = VtlParser.NUMBER;
                break;
            }
            case VtlParser.VAR_SAMP: {
                //operatorFunction = ds => U.getVarSamp(e);
                measureColumnTypes = VtlParser.NUMBER;
                break;
            }
            default:
                throw new Error(`unknown operator ${(opCtx as Token).text}`);
        }

        return {
            resolve: (bindings: VTLBindings) => {
                const exprInternalDataset = expr.resolve(bindings) as InternalDataset;
                if (!validateMeasuresTypes(exprInternalDataset, [VtlParser.INTEGER, VtlParser.NUMBER])) {
                    throw new Error("Measure types have to be INTEGER or NUMBER");
                }
                const groupBy = new GroupVisitor(exprInternalDataset.dataStructure).visit(ctx);
                const exprDatasetCopy = new dfd.DataFrame(dfd.toJSON(exprInternalDataset.dataset));
                const groupbyObject = exprDatasetCopy.groupby(groupBy || []);
                const res = operatorFunction(groupbyObject);

                // TODO: handle role mutation
                if (measureColumnTypes) {
                    const updatedDataStructre = exprInternalDataset.dataStructure.map(
                        ({ type, role, name, ...others }) => {
                            const newRole = groupBy?.includes(name) ? VtlParser.IDENTIFIER : role;
                            return type === VtlParser.MEASURE
                                ? { type: measureColumnTypes, role: newRole, name, ...others }
                                : { type, role: newRole, name, ...others };
                        }
                    );
                    return { dataStructure: updatedDataStructre, dataset: res };
                }

                return { dataStructure: exprInternalDataset.dataStructure, dataPoints: res };
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
            resolve: (bindings: VTLBindings) => operatorFunction(expr.resolve(bindings)),
            type: VtlParser.DATASET
        };
    };
}

export default DatasetVisitor;
