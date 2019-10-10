import {
	VtlParser,
	VtlVisitor,
} from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import ArithmeticVisitor from './Arithmetic';
import BooleanAlgebraVisitor from './BooleanAlgebra';
import IfThenElse from './IfThenElse';
import VariableVisitor from './Variable';
import LiteralVisitor from './Literal';
import ComparisonVisitor from './Comparison';
import FunctionVisitor from './Function';

class ExpressionVisitor extends VtlVisitor {
	constructor(bindings) {
		super();
		this.bindings = bindings;
	}

	visitComparisonExpr = ctx => new ComparisonVisitor(this).visit(ctx);

	visitArithmeticExpr = ctx => new ArithmeticVisitor(this).visit(ctx);

	visitBooleanExpr = ctx => new BooleanAlgebraVisitor(this).visit(ctx);

	visitNotExpr = ctx => new BooleanAlgebraVisitor(this).visit(ctx);

	visitParenthesisExpr = ctx => this.visit(ctx.children[1]);

	visitIfExpr = ctx => new IfThenElse(this).visit(ctx);

	visitSubstrAtom = ctx => new FunctionVisitor(this).visit(ctx);
	visitCastExpr = ctx => new FunctionVisitor(this).visit(ctx);

	visitOptionalExpr = ctx => this.visit(ctx.children[0]);
	visitStringFunctions = ctx => this.visit(ctx.children[0]);
	visitFunctionsExpression = ctx => this.visit(ctx.children[0]);
	visitGenericFunctions = ctx => this.visit(ctx.children[0]);

	visitVarIdExpr = ctx => new VariableVisitor(this.bindings).visit(ctx);

	visitConstantExpr = ctx => new LiteralVisitor().visit(ctx);

	visitConcatExpr = ctx => {
		const leftOperand = this.visit(ctx.left);
		const rightOperand = this.visit(ctx.right);
		if (
			leftOperand.type !== rightOperand.type ||
			rightOperand.type !== VtlParser.STRING_CONSTANT
		) {
			throw new Error(
				`cannot concat ${ctx.left.getText()} with ${ctx.right.getText()}`
			);
		}
		return {
			resolve: bindings =>
				leftOperand.resolve(bindings) + rightOperand.resolve(bindings),
			type: leftOperand.type, // invariant because of type check above.
		};
	};
}

export default ExpressionVisitor;
