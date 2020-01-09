import { VtlParser, VtlVisitor } from '../../../antlr-tools';

class NumericVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitMinAtom = ctx => {
		const op = this.exprVisitor.visit(ctx.expr());

		const expectedTypes = [VtlParser.INTEGER, VtlParser.FLOAT];

		if (!expectedTypes.includes(op.type))
			throw new Error('Operand should be a number');

		return {
			resolve: bindings => (op ? Math.abs(op.resolve(bindings)) : null),
			type: VtlParser.FLOAT,
		};
	};
}

export default NumericVisitor;
