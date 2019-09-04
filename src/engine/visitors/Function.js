import {
	VtlParser,
	VtlVisitor,
} from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';

class FunctionVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitSubstrAtom = ctx => {
		const { children } = ctx;

		if (children.length === 4)
			throw new Error('Invalid number of operands for function substr');

		const operand = this.exprVisitor.visit(children[2]);
		const startIndex = this.exprVisitor.visit(children[4].children[0]);
		const length = this.exprVisitor.visit(children[6].children[0]);

		if (operand.type !== VtlParser.STRING_CONSTANT) {
			throw new Error(`cannot substr ${children[2].getText()}`);
		}
		if (
			startIndex.type !== VtlParser.INTEGER_CONSTANT ||
			length.type !== VtlParser.INTEGER_CONSTANT
		) {
			throw new Error(`cannot substr ${children[2].getText()}`);
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

export default FunctionVisitor;
