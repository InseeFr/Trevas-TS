import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.0-antlr-tools';
import { TypeMismatchError } from '../errors';
import { hasNullArgs } from '../utils';

const handleAnd = (leftExpr, rightExpr) => ({
	resolve: (bindings) => {
		const leftValue = leftExpr.resolve(bindings);
		if (leftValue !== null && !leftValue) return false;

		const rightValue = rightExpr.resolve(bindings);
		if (rightValue !== null && !rightValue) return false;

		if (hasNullArgs(leftValue, rightValue)) return null;

		return true;
	},
	type: VtlParser.BOOLEAN,
});

const handleOr = (leftExpr, rightExpr) => ({
	resolve: (bindings) => {
		const leftValue = leftExpr.resolve(bindings);
		if (leftValue !== null && leftValue) return true;

		const rightValue = rightExpr.resolve(bindings);
		if (rightValue !== null && rightValue) return true;

		if (hasNullArgs(leftValue, rightValue)) return null;

		return false;
	},
	type: VtlParser.BOOLEAN,
});

const handleXor = (leftExpr, rightExpr) => ({
	resolve: (bindings) => {
		const leftValue = leftExpr.resolve(bindings);
		if (leftValue === null) return null;

		const rightValue = rightExpr.resolve(bindings);
		if (rightValue === null) return null;

		return leftExpr.resolve(bindings) !== rightExpr.resolve(bindings);
	},
	type: VtlParser.BOOLEAN,
});

class BooleanVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitUnaryExpr = (ctx) => {
		const { right } = ctx;
		const rightOperand = this.exprVisitor.visit(right);

		if (
			![VtlParser.BOOLEAN, VtlParser.NULL_CONSTANT].includes(rightOperand.type)
		)
			throw new Error('Operand should be a boolean constant');
		return {
			resolve: (bindings) => {
				const operandValue = rightOperand.resolve(bindings);
				if (operandValue === null) return null;
				return !operandValue;
			},
			type: VtlParser.BOOLEAN,
		};
	};

	visitBooleanExpr = (ctx) => {
		const { left: leftCtx, right: rightCtx, op: opCtx } = ctx;
		const leftExpr = this.exprVisitor.visit(leftCtx);
		const rightExpr = this.exprVisitor.visit(rightCtx);

		if (![VtlParser.BOOLEAN, VtlParser.NULL_CONSTANT].includes(leftExpr.type))
			throw new TypeMismatchError(leftCtx, VtlParser.BOOLEAN, leftExpr.type);
		if (![VtlParser.BOOLEAN, VtlParser.NULL_CONSTANT].includes(rightExpr.type))
			throw new TypeMismatchError(rightCtx, VtlParser.BOOLEAN, rightExpr.type);

		if (opCtx.type === VtlParser.AND) return handleAnd(leftExpr, rightExpr);
		if (opCtx.type === VtlParser.OR) return handleOr(leftExpr, rightExpr);
		if (opCtx.type === VtlParser.XOR) return handleXor(leftExpr, rightExpr);
		throw new Error(`unknown operator ${opCtx.getText()}`);
	};
}

export default BooleanVisitor;
