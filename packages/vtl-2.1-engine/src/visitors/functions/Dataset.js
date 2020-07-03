import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.1-antlr-tools';
import { TypeMismatchError } from '../../errors';
import { getDatasetFirstValue, getDatasetLastValue } from '../../utils';

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

		let operatorFunction;
		let type;

		switch (opCtx.type) {
			case VtlParser.COUNT:
				operatorFunction = (expr) => {
					return expr.count();
				};
				type = VtlParser.NUMBER;
				break;
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}

		return {
			resolve: (bindings) => {
				return operatorFunction(expr.resolve(bindings));
			},
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
				operatorFunction = (expr) => getDatasetFirstValue(expr);
				type = VtlParser.DATASET;
				break;
			case VtlParser.LAST_VALUE:
				operatorFunction = (expr) => getDatasetLastValue(expr);
				type = VtlParser.DATASET;
				break;
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}

		return {
			resolve: (bindings) => {
				return operatorFunction(expr.resolve(bindings));
			},
			type,
		};
	};
}

export default DatasetVisitor;
