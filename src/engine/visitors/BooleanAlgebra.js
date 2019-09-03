import {
	VtlParser,
	VtlVisitor,
} from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import { getTokenType } from '../utils/context';

class BooleanAlgebra extends VtlVisitor {
	constructor(exprVisitor) {
		this.exprVisitor = exprVisitor;
	}
	visitBooleanExpr = ctx => {
		const { left, right, op } = ctx;
		const leftOperand = exprVisitor.visit(left);
		const rightOperand = exprVisitor.visit(right);

		let operatorFunction;

		switch (op.type) {
			case VtlParser.AND:
				operatorFunction = (left, right) => left && right;
				break;
			case VtlParser.OR:
				operatorFunction = (left, right) => left || right;
				break;
			case VtlParser.XOR:
				operatorFunction = (left, right) => left ^ right;
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

export default BooleanAlgebra;
