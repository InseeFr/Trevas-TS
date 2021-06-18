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
		let type;

		switch (opCtx.type) {
			case VtlParser.COUNT: {
				operatorFunction = (e) => e.count();
				type = VtlParser.NUMBER;
				break;
			}
			case VtlParser.SUM: {
				operatorFunction = (e) => U.getSum(e);
				type = VtlParser.NUMBER;
				break;
			}
			case VtlParser.MIN: {
				operatorFunction = (e) => U.getMin(e);
				type = VtlParser.NUMBER;
				break;
			}
			case VtlParser.MAX: {
				operatorFunction = (e) => U.getMax(e);
				type = VtlParser.NUMBER;
				break;
			}
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}

		return {
			resolve: (bindings) => operatorFunction(expr.resolve(bindings)),
			type,
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
		let type;

		switch (opCtx.type) {
			case VtlParser.FIRST_VALUE:
				operatorFunction = (e) => U.getDatasetFirstValue(e);
				type = VtlParser.DATASET;
				break;
			case VtlParser.LAST_VALUE:
				operatorFunction = (e) => U.getDatasetLastValue(e);
				type = VtlParser.DATASET;
				break;
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}

		return {
			resolve: (bindings) => operatorFunction(expr.resolve(bindings)),
			type,
		};
	};
}

export default DatasetVisitor;
