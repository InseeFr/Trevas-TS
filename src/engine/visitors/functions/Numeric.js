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
			case VtlParser.ABS:
				operatorFunction = expr => Math.abs(expr);
				type = expr.type;
				break;
			case VtlParser.CEIL:
				operatorFunction = expr => Math.ceil(expr);
				type = VtlParser.INTEGER;
				break;
			case VtlParser.EXP:
				operatorFunction = expr => Math.exp(expr);
				type = VtlParser.NUMBER;
				break;
			case VtlParser.FLOOR:
				operatorFunction = expr => Math.floor(expr);
				type = VtlParser.INTEGER;
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

	visitUnaryWithOptionalNumeric = ctx => {
		// Binary numeric operators with optional operand are ROUND and TRUNC
		const { op: opCtx } = ctx;

		const expr = this.exprVisitor.visit(ctx.expr());
		const optionalExpr =
			ctx.optionalExpr() && ctx.optionalExpr().expr() // optionalExpr().expr() is null when second operand is _
				? this.exprVisitor.visit(ctx.optionalExpr().expr())
				: null;

		const expectedTypes = [VtlParser.INTEGER, VtlParser.NUMBER];
		if (!expectedTypes.includes(expr.type))
			throw new Error('The first operand should be a number or an integer');
		if (optionalExpr && optionalExpr.type !== VtlParser.INTEGER)
			throw new Error('The second operand should be an integer');

		let operatorFunction;
		let type;

		switch (opCtx.type) {
			case VtlParser.ROUND:
				operatorFunction = (expr, optionalExpr) => {
					if (!optionalExpr || optionalExpr == VtlParser.OPTIONAL)
						return Math.round(expr);
					return Math.round(expr * 10 ** optionalExpr) / 10 ** optionalExpr;
				};
				type = VtlParser.NUMBER;
				break;
			case VtlParser.TRUNC:
				operatorFunction = (expr, optionalExpr) => {
					if (!optionalExpr || optionalExpr == VtlParser.OPTIONAL)
						return Math.trunc(expr);
					return Math.trunc(expr * 10 ** optionalExpr) / 10 ** optionalExpr;
				};
				type = VtlParser.NUMBER;
				break;
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}

		return {
			resolve: bindings =>
				operatorFunction(
					expr.resolve(bindings),
					optionalExpr ? optionalExpr.resolve(bindings) : null
				),
			type,
		};
	};

	visitBinaryNumeric = ctx => {
		// Binary numeric operators are MOD, POWER and LOG
		const { left: leftCtx, right: rightCtx, op: opCtx } = ctx;
		const leftExpr = this.exprVisitor.visit(leftCtx);
		const rightExpr = this.exprVisitor.visit(rightCtx);

		const expectedTypes = [VtlParser.INTEGER, VtlParser.NUMBER];

		if (
			!(
				expectedTypes.includes(leftExpr.type) &&
				expectedTypes.includes(rightExpr.type)
			)
		)
			throw new Error('Both operands should be numbers or integers');

		let operatorFunction;
		let type = VtlParser.NUMBER;

		switch (opCtx.type) {
			case VtlParser.LOG:
				operatorFunction = (leftExpr, rightExpr) =>
					Math.log(leftExpr) / Math.log(rightExpr);
				type = VtlParser.NUMBER;
				break;
			case VtlParser.MOD:
				operatorFunction = (leftExpr, rightExpr) => {
					if (rightExpr == 0) return leftExpr;
					return leftExpr % rightExpr;
				};
				type =
					leftExpr.type == VtlParser.INTEGER &&
					rightExpr.type == VtlParser.INTEGER
						? VtlParser.INTEGER
						: VtlParser.NUMBER;
				break;
			case VtlParser.POWER:
				operatorFunction = (leftExpr, rightExpr) => leftExpr ** rightExpr;
				type =
					leftExpr.type == VtlParser.INTEGER &&
					rightExpr.type == VtlParser.INTEGER
						? VtlParser.INTEGER
						: VtlParser.NUMBER;
				break;
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}

		return {
			resolve: bindings =>
				operatorFunction(
					leftExpr.resolve(bindings),
					rightExpr.resolve(bindings)
				),
			type,
		};
	};
}

export default NumericVisitor;
