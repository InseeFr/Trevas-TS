import { VtlVisitor } from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import { default as ArithmeticVisitor } from './Arithmetic';
import { default as BooleanAlgebraVisitor } from './BooleanAlgebra';
import { default as VariableVisitor } from './Variable';
import { default as LiteralVisitor } from './Literal';

class ExpressionVisitor extends VtlVisitor {
	visitArithmeticExpr = ctx => new ArithmeticVisitor(this).visit(ctx);

	visitBooleanExpr = ctx => new BooleanAlgebraVisitor(this).visit(ctx);

	visitVarIdExpr = ctx => new VariableVisitor(this).visit(ctx);

	visitConstantExpr = ctx => new LiteralVisitor(this).visit(ctx);
}

export default ExpressionVisitor;
