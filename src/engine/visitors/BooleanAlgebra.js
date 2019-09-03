import antlr4 from 'antlr4';
import {
	VtlParser,
	VtlVisitor,
} from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import { getTokenType } from '../utils/context';

class BooleanAlgebra extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitNotExpr = ctx => {
		const { right } = ctx;
		const rightOperand = this.exprVisitor.visit(right);

		if (rightOperand.type !== VtlParser.BOOLEAN_CONSTANT)
			throw new Error('Operand should be a boolean constant');

		return {
			resolve: bindings => !rightOperand.resolve(bindings),
			type: getTokenType(ctx),
		};
	};

	visitBooleanExpr = ctx => {
		const { left, right, op } = ctx;
		const leftOperand = this.exprVisitor.visit(left);
		const rightOperand = this.exprVisitor.visit(right);

		if (leftOperand.type !== VtlParser.BOOLEAN_CONSTANT)
			throw new Error('Left operand should be a boolean constant');
		if (rightOperand.type !== VtlParser.BOOLEAN_CONSTANT)
			throw new Error('Right operand should be a boolean constant');

		let operatorFunction;

		switch (op.type) {
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
