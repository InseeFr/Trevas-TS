import { VtlParser, VtlVisitor } from '../../antlr-tools';
import { TypeMismatchError } from '../errors';

class ArithmeticVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitUnaryExpr = ctx => {
		const { op, right: rightCtx } = ctx;
		const rightExpr = this.exprVisitor.visit(rightCtx);

		const expectedTypes = [VtlParser.INTEGER, VtlParser.NUMBER];

		if (!expectedTypes.includes(rightExpr.type))
			throw new TypeMismatchError(rightCtx, expectedTypes, rightExpr.type);

		return {
			resolve: bindings => {
				const value = rightExpr.resolve(bindings);
				return op.type === VtlParser.PLUS ? value : -value;
			},
			type: rightExpr.type,
		};
	};

	visitArithmeticExprOrConcat = ctx => {
		if (ctx.op.type === VtlParser.CONCAT) {
			throw new Error('Arithmetic visitor got CONCAT context');
		}
		return this.visitArithmeticExpr(ctx);
	};

	visitArithmeticExpr = ctx => {
		const { left: leftCtx, right: rightCtx, op: opCtx } = ctx;
		const leftExpr = this.exprVisitor.visit(leftCtx);
		const rightExpr = this.exprVisitor.visit(rightCtx);

		const expectedTypes = [VtlParser.INTEGER, VtlParser.NUMBER];

		if (!expectedTypes.includes(leftExpr.type))
			throw new TypeMismatchError(leftCtx, expectedTypes, leftExpr.type);

		if (!expectedTypes.includes(rightExpr.type))
			throw new TypeMismatchError(rightCtx, expectedTypes, rightExpr.type);

		let operatorFunction;
		let type = [leftExpr.type, rightExpr.type].includes(VtlParser.NUMBER)
			? VtlParser.NUMBER
			: VtlParser.INTEGER;

		switch (opCtx.type) {
			case VtlParser.PLUS:
				operatorFunction = (left, right) => left + right;
				break;
			case VtlParser.MINUS:
				operatorFunction = (left, right) => left - right;
				break;
			case VtlParser.MUL:
				operatorFunction = (left, right) => left * right;
				break;
			case VtlParser.DIV:
				operatorFunction = (left, right) => left / right;
				type = VtlParser.NUMBER;
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

export default ArithmeticVisitor;
