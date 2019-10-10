import {
	VtlParser,
	VtlVisitor,
} from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import TypeMismatchError from "../errors/TypeMismatchError";
import IncompatibleTypeError from "../errors/IncompatibleTypeError";

class IfThenElseVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitIfExpr = ctx => {
		const { conditionalExpr, thenExpr, elseExpr } = ctx;
		const conditionalOperand = this.exprVisitor.visit(conditionalExpr);

		if (conditionalOperand.type !== VtlParser.BOOLEAN_CONSTANT) {
			throw new TypeMismatchError(conditionalExpr, VtlParser.BOOLEAN_CONSTANT, conditionalOperand.type);
		}

		const thenOperand = this.exprVisitor.visit(thenExpr);
		const elseOperand = this.exprVisitor.visit(elseExpr);
		if (thenOperand.type !== elseOperand.type) {
			throw new IncompatibleTypeError(elseExpr, thenOperand.type, elseOperand.type);
		}

		return {
			resolve: bindings =>
				conditionalOperand.resolve(bindings)
					? thenOperand.resolve(bindings)
					: elseOperand.resolve(bindings),
			type: VtlParser.STRING_CONSTANT,
		};
	};
}

export default IfThenElseVisitor;
