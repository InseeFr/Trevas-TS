import {
	VtlParser,
	VtlVisitor,
} from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';

class IfThenElseVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitIfExpr = ctx => {
		const { conditionalExpr, thenExpr, elseExpr } = ctx;
		const conditionalOperand = this.exprVisitor.visit(conditionalExpr);
		const thenOperand = this.exprVisitor.visit(thenExpr);
		const elseOperand = this.exprVisitor.visit(elseExpr);

		if (conditionalOperand.type !== VtlParser.BOOLEAN_CONSTANT) {
			throw new Error(
				`cannot evaluate condition with type ${conditionalOperand.type}`
			);
		}

		return {
			resolve: bindings =>
				conditionalOperand.resolve(bindings)
					? thenOperand.resolve(bindings)
					: elseOperand.resolve(bindings),
			type: VtlParser.BOOLEAN_CONSTANT,
		};
	};
}

export default IfThenElseVisitor;
