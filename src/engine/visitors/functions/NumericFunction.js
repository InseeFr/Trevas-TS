import { VtlParser, VtlVisitor } from '../../../antlr-tools';

class NumericVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitUnaryNumeric = ctx => {
		// Unary numeric operators are CEIL, FLOOR, ABS, EXP, LN and SQRT
		const { op: opCtx } = ctx;

		const expr = this.exprVisitor.visit(ctx.expr());

		const expectedTypes = [VtlParser.INTEGER, VtlParser.NUMBER];

		if (!expectedTypes.includes(expr.type))
			throw new Error('Operand should be a number or an integer');

		let operatorFunction;
		let type;

		switch (opCtx.type) {
			case VtlParser.CEIL:
				operatorFunction = expr => Math.ceil(expr);
				type = VtlParser.INTEGER;
				break;
			case VtlParser.FLOOR:
				operatorFunction = expr => Math.floor(expr);
				type = VtlParser.INTEGER;
				break;
			case VtlParser.ABS:
				operatorFunction = expr => Math.abs(expr);
				type = expr.type;
				break;
			case VtlParser.EXP:
				operatorFunction = expr => Math.exp(expr);
				type = VtlParser.NUMBER;
				break;
			case VtlParser.LN:
				operatorFunction = expr => Math.log(expr);
				type = VtlParser.NUMBER;
				break;
			case VtlParser.SQRT:
				operatorFunction = expr => Math.sqrt(expr);
				type = VtlParser.NUMBER;
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
