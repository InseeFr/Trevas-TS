import {
	VtlParser,
	VtlVisitor,
} from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import { getTokenType } from '../utils/context';

class ArithmeticVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitArithmeticExpr = ctx => {
		const { left, right, op } = ctx;
		const leftOperand = this.exprVisitor.visit(left);
		const rightOperand = this.exprVisitor.visit(right);

		if (
			![VtlParser.INTEGER_CONSTANT, VtlParser.FLOAT_CONSTANT].includes(
				leftOperand.type
			)
		)
			throw new Error('Left operand should be an integer or a float constant');
		if (
			![VtlParser.INTEGER_CONSTANT, VtlParser.FLOAT_CONSTANT].includes(
				rightOperand.type
			)
		)
			throw new Error('Right operand should be an integer or a float constant');

		let operatorFunction;

		switch (op.type) {
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
				throw new Error('Bad type');
		}

		return {
			resolve: bindings =>
				operatorFunction(
					leftOperand.resolve(bindings),
					rightOperand.resolve(bindings)
				),
			type: getTokenType(ctx),
		};
	};
}

export default ArithmeticVisitor;
