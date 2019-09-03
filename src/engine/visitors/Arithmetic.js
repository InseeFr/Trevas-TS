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

		let operatorFunction;

		switch (op.type) {
			case VtlParser.PLUS:
				operatorFunction = (left, right) => left + right;
				break;
			case VtlParser.MINUS:
				operatorFunction = (left, right) => left - right;
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
