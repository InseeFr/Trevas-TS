import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.0-antlr-tools';

class ConcatenationVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitArithmeticExprOrConcat = (ctx) => {
		if (ctx.op.type !== VtlParser.CONCAT) {
			throw new Error('Concat visitor got arithmetic context');
		}
		const { left, right } = ctx;

		const leftOperand = this.exprVisitor.visit(left);
		const rightOperand = this.exprVisitor.visit(right);

		if (
			![VtlParser.STRING, VtlParser.NULL_CONSTANT].includes(leftOperand.type) ||
			![VtlParser.STRING, VtlParser.NULL_CONSTANT].includes(rightOperand.type)
		)
			throw new Error(
				`cannot concat ${left.getText()} with ${right.getText()}`
			);

		return {
			resolve: (bindings) =>
				`${leftOperand.resolve(bindings)}${rightOperand.resolve(bindings)}`,
			type: VtlParser.STRING, // invariant because of type check above.
		};
	};
}

export default ConcatenationVisitor;
