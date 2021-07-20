import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.0-antlr-tools';
import { TypeMismatchError } from '../../errors';
import * as U from '../../utils';

// Handle meta for return, not only dataPoints
class DatasetVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitAggrDataset = (ctx) => {
		const { op: opCtx } = ctx;
		const expr = this.exprVisitor.visit(ctx.expr());

		if (expr.type !== VtlParser.DATASET) {
			throw new TypeMismatchError(ctx.expr(), VtlParser.DATASET, opCtx.type);
		}

		// TODO: has to check dataPoint content

		let operatorFunction;

		switch (opCtx.type) {
			case VtlParser.COUNT: {
				operatorFunction = (e) => U.getCount(e);
				break;
			}
			case VtlParser.SUM: {
				operatorFunction = (e) => U.getSum(e);
				break;
			}
			case VtlParser.MIN: {
				operatorFunction = (e) => U.getMin(e);
				break;
			}
			case VtlParser.MAX: {
				operatorFunction = (e) => U.getMax(e);
				break;
			}
			case VtlParser.MEDIAN: {
				operatorFunction = (e) => U.getMedian(e);
				break;
			}
			case VtlParser.AVG: {
				operatorFunction = (e) => U.getAvg(e);
				break;
			}
			case VtlParser.STDDEV_POP: {
				operatorFunction = (e) => U.getStdDevPop(e);
				break;
			}
			case VtlParser.STDDEV_SAMP: {
				operatorFunction = (e) => U.getStdDevSamp(e);
				break;
			}
			case VtlParser.VAR_POP: {
				operatorFunction = (e) => U.getVarPop(e);
				break;
			}
			case VtlParser.VAR_SAMP: {
				operatorFunction = (e) => U.getVarSamp(e);
				break;
			}
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}

		return {
			resolve: (bindings) => operatorFunction(expr.resolve(bindings)),
			type: VtlParser.DATASET,
		};
	};

	visitAnSimpleFunction = (ctx) => {
		// TODO: implement over support
		const { op: opCtx } = ctx;
		const expr = this.exprVisitor.visit(ctx.expr());

		if (expr.type !== VtlParser.DATASET) {
			throw new TypeMismatchError(ctx.expr(), VtlParser.DATASET, opCtx.type);
		}

		let operatorFunction;

		switch (opCtx.type) {
			case VtlParser.FIRST_VALUE:
				operatorFunction = (e) => U.getDatasetFirstValue(e);
				break;
			case VtlParser.LAST_VALUE:
				operatorFunction = (e) => U.getDatasetLastValue(e);
				break;
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}

		return {
			resolve: (bindings) => operatorFunction(expr.resolve(bindings)),
			type: VtlParser.DATASET,
		};
	};
}

export default DatasetVisitor;
