import {
	VtlParser,
	VtlVisitor,
} from '../../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import TypeMismatchError from '../../errors/TypeMismatchError';

class SubstrAtomVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitSubstrAtom = ctx => {
		const { children } = ctx;

		if (children.length === 4)
			throw new Error('Invalid number of operands for function substr');

		// Required because the grammar doesn't do it for us.
		let operandCtx = ctx.expr();

		// TODO Grammar defines this as an unbounded array of expressions. Should be changed IMO
		const [startIndexCtx, lengthCtx] = ctx.optionalExpr();

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
}

export default SubstrAtomVisitor;
