import { VtlVisitor } from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';

class ExpressionVisitor extends VtlVisitor {
	visitArithmeticExpr = ctx => new ArithmeticVisitor().visit(ctx);

	visitBooleanExpr = ctx => new BooleanAlgebraVisitor().visit(ctx);

	visitVarIdExpr = ctx => new VariableVisitor().visit(ctx);

	visitConstantExpr = ctx => new LiteralVisitor().visit(ctx);
}

export default ExpressionVisitor;
