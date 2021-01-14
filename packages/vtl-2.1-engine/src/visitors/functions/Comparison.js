import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.1-antlr-tools';

class ComparisonVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitIsNullAtom = (ctx) => {
		const expr = this.exprVisitor.visit(ctx.expr());

		return {
			resolve: (bindings) => expr.resolve(bindings) === null,
			type: VtlParser.BOOLEAN,
		};
	};
}

export default ComparisonVisitor;
