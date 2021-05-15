import { VtlParser } from '@inseefr/vtl-2.0-antlr-tools';

class ComparisonVisitor {
	constructor(exprVisitor) {
		this.exprVisitor = exprVisitor;
	}

	visitIsNullAtom(ctx) {
		const expr = this.exprVisitor.visit(ctx.expr());
		return {
			resolve: (bindings) => expr.resolve(bindings) === null,
			type: VtlParser.BOOLEAN,
		};
	}
}

export default ComparisonVisitor;
