import { VtlParser, VtlVisitor } from '../../antlr-tools';
import { TypeMismatchError } from '../errors';

class BooleanAlgebra extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitNotExpr = ctx => {
		const { right } = ctx;
		const rightOperand = this.exprVisitor.visit(right);

		if (rightOperand.type !== VtlParser.BOOLEAN)
			throw new Error('Operand should be a boolean constant');

		return {
			resolve: bindings => !rightOperand.resolve(bindings),
			type: VtlParser.BOOLEAN,
		};
	};

	visitBooleanExpr = ctx => {
		const { left: leftCtx, right: rightCtx, op: opCtx } = ctx;
		const leftExpr = this.exprVisitor.visit(leftCtx);
		const rightExpr = this.exprVisitor.visit(rightCtx);

		if (leftExpr.type !== VtlParser.BOOLEAN)
			throw new TypeMismatchError(leftCtx, VtlParser.BOOLEAN, leftExpr.type);
		if (rightExpr.type !== VtlParser.BOOLEAN)
			throw new TypeMismatchError(rightCtx, VtlParser.BOOLEAN, rightExpr.type);

		let operatorFunction;

		switch (opCtx.type) {
			case VtlParser.AND:
				operatorFunction = (left, right) => left && right;
				break;
			case VtlParser.OR:
				operatorFunction = (left, right) => left || right;
				break;
			case VtlParser.XOR:
				operatorFunction = (left, right) => left !== right;
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
			type: VtlParser.BOOLEAN,
		};
	};
}

export default BooleanAlgebra;
