import {
	VtlParser,
	VtlVisitor,
} from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import TypeMismatchError from '../errors/TypeMismatchError';

class FunctionVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitSubstrAtom = ctx => {
		const { children } = ctx;

		if (children.length === 4)
			throw new Error('Invalid number of operands for function substr');

		// Required because the grammar doesn't do it for us.
		let operandCtx = children[2];
		let startIndexCtx = children[4].children[0];
		let lengthCtx = children[6].children[0];

		const operand = this.exprVisitor.visit(operandCtx);
		const startIndex = this.exprVisitor.visit(startIndexCtx);
		const length = this.exprVisitor.visit(lengthCtx);

		if (operand.type !== VtlParser.STRING_CONSTANT) {
			throw new TypeMismatchError(
				operandCtx,
				VtlParser.STRING_CONSTANT,
				operand.type
			);
		}
		if (startIndex.type !== VtlParser.INTEGER_CONSTANT) {
			throw new TypeMismatchError(
				startIndexCtx,
				VtlParser.STRING_CONSTANT,
				startIndex.type
			);
		}
		if (length.type !== VtlParser.INTEGER_CONSTANT) {
			throw new TypeMismatchError(
				lengthCtx,
				VtlParser.STRING_CONSTANT,
				length.type
			);
		}
		return {
			resolve: bindings => {
				return operand
					.resolve(bindings)
					.substr(startIndex.resolve(bindings), length.resolve(bindings));
			},
			type: VtlParser.STRING_CONSTANT,
		};
	};

	visitCastExpr = ctx => {
		const { children } = ctx;

		let opCtx = children[2];
		let scalarTypeCtx = children[4];
		//let maskCtx = children[6];

		const op = this.exprVisitor.visit(opCtx);

		let operatorFunction, type;
		switch (scalarTypeCtx.children[0].symbol.type) {
			case VtlParser.NUMBER:
				operatorFunction = op => parseFloat(op);
				type = VtlParser.NUMBER;
				break;
			case VtlParser.INTEGER:
				operatorFunction = op => parseInt(op, 10);
				type = VtlParser.INTEGER_CONSTANT;
				break;
			default:
				throw new Error('Unsupported scalar ' + op.getText());
		}

		//const mask = this.exprVisitor.visit(mask);
		return {
			resolve: bindings => operatorFunction(op.resolve(bindings)),
			type,
		};
	};
}

export default FunctionVisitor;
