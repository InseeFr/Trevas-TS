import { VtlVisitor } from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import ArithmeticVisitor from './Arithmetic';
import BooleanAlgebraVisitor from './BooleanAlgebra';
import IfThenElse from './IfThenElse';
import VariableVisitor from './Variable';
import LiteralVisitor from './Literal';
import ComparisonVisitor from './Comparison';

class ExpressionVisitor extends VtlVisitor {
	visitComparisonExpr = ctx => new ComparisonVisitor(this).visit(ctx);

	visitArithmeticExpr = ctx => new ArithmeticVisitor(this).visit(ctx);

	visitBooleanExpr = ctx => new BooleanAlgebraVisitor(this).visit(ctx);

	visitNotExpr = ctx => new BooleanAlgebraVisitor(this).visit(ctx);

	visitParenthesisExpr = ctx => this.visit(ctx.children[1]);

	visitIfExpr = ctx => new IfThenElse(this).visit(ctx);

	visitVarIdExpr = ctx => new VariableVisitor(this).visit(ctx);

	visitConstantExpr = ctx => new LiteralVisitor(this).visit(ctx);
}

export default ExpressionVisitor;
