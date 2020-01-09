import { VtlParser, VtlVisitor } from '../../../antlr-tools';

class NumericVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitUnaryNumeric = ctx => {
		const { op: opCtx } = ctx;

		const expr = this.exprVisitor.visit(ctx.expr());

		const expectedTypes = [VtlParser.INTEGER, VtlParser.NUMBER];

		if (!expectedTypes.includes(expr.type))
			throw new Error('Operand should be a number or an integer');

		let operatorFunction;
		let type;

		switch (opCtx.type) {
			case VtlParser.ABS:
				operatorFunction = expr => Math.abs(expr);
				type = expr.type;
				break;
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}

		return {
			resolve: bindings => operatorFunction(expr.resolve(bindings)),
			type,
		};
	};
}

export default NumericVisitor;
