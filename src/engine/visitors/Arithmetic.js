import {
	VtlParser,
	VtlVisitor,
} from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import { getTokenType } from '../utils/context';
import TypeMismatchError from '../errors/TypeMismatchError';

class ArithmeticVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitArithmeticExpr = ctx => {
		const { left: leftCtx, right: rightCtx, op: opCtx } = ctx;
		const leftExpr = this.exprVisitor.visit(leftCtx);
		const rightExpr = this.exprVisitor.visit(rightCtx);

		const expectedTypes = [
			VtlParser.INTEGER_CONSTANT,
			VtlParser.FLOAT_CONSTANT,
		];

		if (!expectedTypes.includes(leftExpr.type))
			throw new TypeMismatchError(leftCtx, expectedTypes, leftExpr.type);

		if (!expectedTypes.includes(rightExpr.type))
			throw new TypeMismatchError(rightCtx, expectedTypes, rightExpr.type);

		let operatorFunction;

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
			type: getTokenType(ctx),
		};
	}
}

export default ArithmeticVisitor;
