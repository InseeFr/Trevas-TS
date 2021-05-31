import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.0-antlr-tools';
import { TypeMismatchError } from '../errors';

const resolve = (operand, leftExpr, rightExpr) => {
	let operatorFunction;
	switch (operand.children[0].symbol.type) {
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
			throw new Error(`Unsupported operator ' + ${operand.getText()}`);
	}
	return (bindings) => {
		const leftValue = leftExpr.resolve(bindings);
		const rightValue = rightExpr.resolve(bindings);
		if ([leftValue, rightValue].includes(null)) return null;
		return operatorFunction(leftValue, rightValue);
	};
};

class ComparisonVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitComparisonExpr = (ctx) => {
		const { left, right, op } = ctx;
		const leftExpr = this.exprVisitor.visit(left);
		const rightExpr = this.exprVisitor.visit(right);

		const expectedTypes = [
			VtlParser.INTEGER,
			VtlParser.NUMBER,
			VtlParser.STRING,
			VtlParser.NULL_CONSTANT,
		];

		if (!expectedTypes.includes(leftExpr.type))
			throw new TypeMismatchError(left, expectedTypes, leftExpr.type);

		if (!expectedTypes.includes(rightExpr.type))
			throw new TypeMismatchError(right, expectedTypes, rightExpr.type);

		return {
			resolve: resolve(op, leftExpr, rightExpr),
			type: VtlParser.BOOLEAN,
		};
	};
}

export default ComparisonVisitor;
