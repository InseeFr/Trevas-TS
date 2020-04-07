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
			// FIXME implement not using the "interface" representation but the inner
			// one using dataforge.DataFrame
			case VtlParser.COUNT:
				operatorFunction = expr => {
					const dpKeys = Object.keys(expr.dataPoints);
					if (dpKeys.length === 0) {
						return 0;
					} else {
						const firstKey = dpKeys[0];
						// every column vector of a dataset must have the same length
						// so testing on the first one is ok ?
						return expr.dataPoints[firstKey].length;
					}
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
