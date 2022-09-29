import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.0-antlr-tools';
import { IncompatibleTypeError, TypeMismatchError } from '../errors';
import { hasNullArgs } from '../utils';

class InNotInVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	/**
	 * Assume we only support ValueDomain in bindings as elements
	 * @param {*} ctx
	 * @returns
	 */
	visitInNotInExpr = (ctx) => {
		const { left, op } = ctx;
		const leftExpr = this.exprVisitor.visit(left);
		// Add babel loader for ??
		const value = ctx.valueDomainID()
			? ctx.valueDomainID().children[0].getText()
			: null;
		return {
			resolve: (bindings) => {
				const list = bindings[value];
				if (!list) return null;
				const listData = Object.values(list.dataPoints)[0];
				const resolvedLeftExpr = leftExpr.resolve(bindings);
				if (resolvedLeftExpr === null) return null;
				if (op.type === VtlParser.IN)
					return listData.includes(resolvedLeftExpr);
				if (op.type === VtlParser.NOT_IN)
					return !listData.includes(resolvedLeftExpr);
				throw new Error(`unknown operator ${op.getText()}`);
			},
			type: VtlParser.BOOLEAN,
		};
	};
}

export default InNotInVisitor;
