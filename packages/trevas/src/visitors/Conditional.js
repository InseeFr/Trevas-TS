import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.0-antlr-tools';
import { IncompatibleTypeError, TypeMismatchError } from '../errors';

class ConditionalVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitIfExpr = (ctx) => {
		const { conditionalExpr, thenExpr, elseExpr } = ctx;

		const conditionalOperand = this.exprVisitor.visit(conditionalExpr);

		if (
			![VtlParser.BOOLEAN, VtlParser.NULL_CONSTANT].includes(
				conditionalOperand.type
			)
		) {
			throw new TypeMismatchError(
				conditionalExpr,
				VtlParser.BOOLEAN,
				conditionalOperand.type
			);
		}

		const thenOperand = this.exprVisitor.visit(thenExpr);
		const elseOperand = this.exprVisitor.visit(elseExpr);

		if (
			![thenOperand.type, elseOperand.type].includes(VtlParser.NULL_CONSTANT) &&
			thenOperand.type !== elseOperand.type
		)
			throw new IncompatibleTypeError(ctx, thenOperand.type, elseOperand.type);

		const type =
			thenOperand.type === VtlParser.NULL_CONSTANT
				? elseOperand.type
				: thenOperand.type;

		return {
			resolve: (bindings) => {
				const conditionValue = conditionalOperand.resolve(bindings);
				const elseValue = elseOperand.resolve(bindings);

				if (conditionValue === null) return elseValue;

				const thenValue = thenOperand.resolve(bindings);
				return conditionValue ? thenValue : elseValue;
			},
			type,
		};
	};

	visitNvlAtom = (ctx) => {
		const { left, right } = ctx;

		const leftOperand = this.exprVisitor.visit(left);
		const rightOperand = this.exprVisitor.visit(right);

		if (
			![leftOperand.type, rightOperand.type].includes(
				VtlParser.NULL_CONSTANT
			) &&
			leftOperand.type !== rightOperand.type
		)
			throw new IncompatibleTypeError(ctx, leftOperand.type, rightOperand.type);

		return {
			resolve: (bindings) =>
				leftOperand.resolve(bindings)
					? leftOperand.resolve(bindings)
					: rightOperand.resolve(bindings),
			type: rightOperand.type,
		};
	};
}

export default ConditionalVisitor;
