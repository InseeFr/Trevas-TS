import {
	VtlParser,
	VtlVisitor,
} from '../../antlr-tools/vtl-3.0-Istat/parser-vtl';
import { IncompatibleTypeError, TypeMismatchError } from '../errors';
import { replaceConstantType } from '../utils';

class ConditionalVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitIfExpr = (ctx) => {
		const { conditionalExpr, thenExpr, elseExpr } = ctx;
		const conditionalOperand = this.exprVisitor.visit(conditionalExpr);

		if (conditionalOperand.type !== VtlParser.BOOLEAN) {
			throw new TypeMismatchError(
				conditionalExpr,
				VtlParser.BOOLEAN,
				conditionalOperand.type
			);
		}

		const thenOperand = this.exprVisitor.visit(thenExpr);
		const elseOperand = this.exprVisitor.visit(elseExpr);
		if (thenOperand.type !== elseOperand.type) {
			throw new IncompatibleTypeError(ctx, thenOperand.type, elseOperand.type);
		}

		return {
			resolve: (bindings) =>
				conditionalOperand.resolve(bindings)
					? thenOperand.resolve(bindings)
					: elseOperand.resolve(bindings),
			type: replaceConstantType(thenOperand.type),
		};
	};

	visitNvlAtom = (ctx) => {
		const { left, right } = ctx;

		const leftOperand = this.exprVisitor.visit(left);
		const rightOperand = this.exprVisitor.visit(right);
		if (
			leftOperand.type !== VtlParser.NULL_CONSTANT &&
			leftOperand.type !== rightOperand.type
		) {
			throw new IncompatibleTypeError(ctx, leftOperand.type, rightOperand.type);
		}

		return {
			resolve: (bindings) =>
				leftOperand.resolve(bindings)
					? leftOperand.resolve(bindings)
					: rightOperand.resolve(bindings),
			type: replaceConstantType(leftOperand.type),
		};
	};
}

export default ConditionalVisitor;
