import { VtlParser } from '@inseefr/vtl-2.0-antlr-tools';
import { TypeMismatchError } from '../errors';

class ComparisonVisitor {
	constructor(exprVisitor) {
		this.exprVisitor = exprVisitor;
	}

	visitComparisonExpr(ctx) {
		const { left, right, op } = ctx;
		const leftOperand = this.exprVisitor.visit(left);
		const rightOperand = this.exprVisitor.visit(right);

		const expectedTypes = [VtlParser.INTEGER, VtlParser.NUMBER];

		if (leftOperand.type !== rightOperand.type) {
			if (!expectedTypes.includes(leftOperand.type))
				throw new TypeMismatchError(left, expectedTypes, leftOperand.type);

			if (!expectedTypes.includes(rightOperand.type))
				throw new TypeMismatchError(right, expectedTypes, rightOperand.type);
		}

		let operatorFunction;
		switch (op.children[0].symbol.type) {
			case VtlParser.MT:
				operatorFunction = (l, r) => l > r;
				break;
			case VtlParser.LT:
				operatorFunction = (l, r) => l < r;
				break;
			case VtlParser.ME:
				operatorFunction = (l, r) => l >= r;
				break;
			case VtlParser.LE:
				operatorFunction = (l, r) => l <= r;
				break;
			case VtlParser.EQ:
				operatorFunction = (l, r) => l === r;
				break;
			case VtlParser.NEQ:
				operatorFunction = (l, r) => l !== r;
				break;
			default:
				throw new Error(`Unsupported operator ${op.getText()}`);
		}

		return {
			resolve: (bindings) =>
				operatorFunction(
					leftOperand.resolve(bindings),
					rightOperand.resolve(bindings)
				),
			type: VtlParser.BOOLEAN,
		};
	}
}

export default ComparisonVisitor;
