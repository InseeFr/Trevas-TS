import { VtlParser, VtlVisitor } from '../../../antlr-tools';
import { TypeMismatchError } from '../../errors';

class DatasetVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitAggrDataset = ctx => {
		const { op: opCtx } = ctx;
		const expr = this.exprVisitor.visit(ctx.expr());

		if (expr.type !== VtlParser.DATASET) {
			throw new TypeMismatchError(ctx.expr(), VtlParser.DATASET, opCtx.type);
		}

		let operatorFunction;
		let type;

		switch (opCtx.type) {
			case VtlParser.COUNT:
				operatorFunction = expr => {
					return expr.count();
				};
				type = VtlParser.NUMBER;
				break;
		}

		return {
			resolve: bindings => {
				return operatorFunction(expr.resolve(bindings));
			},
			type,
		};
	};
}

export default DatasetVisitor;
