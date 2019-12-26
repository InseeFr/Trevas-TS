import { VtlVisitor } from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import ArithmeticVisitor from './Arithmetic';
import BooleanAlgebraVisitor from './BooleanAlgebra';
import IfThenElse from './IfThenElse';
import VariableVisitor from './Variable';
import LiteralVisitor from './Literal';
import ComparisonVisitor from './Comparison';
import {
	CastVisitor,
	ConcatenationVisitor,
	StringFunctionsVisitor,
} from './functions';

class ExpressionVisitor extends VtlVisitor {
	constructor(bindings) {
		super();
		this.bindings = bindings;
	}

	visitComparisonExpr = ctx => new ComparisonVisitor(this).visit(ctx);

	visitArithmeticExpr = ctx => new ArithmeticVisitor(this).visit(ctx);

	visitBooleanExpr = ctx => new BooleanAlgebraVisitor(this).visit(ctx);

	visitNotExpr = ctx => new BooleanAlgebraVisitor(this).visit(ctx);

	visitParenthesisExpr = ctx => this.visit(ctx.expr());

	visitIfExpr = ctx => new IfThenElse(this).visit(ctx);

	// TODO: Optional expression should handle missing values.
	visitOptionalExpr = ctx =>
		ctx.expr() === null ? null : this.visit(ctx.expr());
	visitStringFunctions = ctx => this.visit(ctx.stringOperators());
	visitFunctionsExpression = ctx => this.visit(ctx.functions());
	visitGenericFunctions = ctx => this.visit(ctx.genericOperators());

	visitVarIdExpr = ctx => new VariableVisitor(this.bindings).visit(ctx);

	visitConstantExpr = ctx => new LiteralVisitor().visit(ctx);

	// Functions
	visitCastExpr = ctx => new CastVisitor(this).visit(ctx);
	visitConcatExpr = ctx => new ConcatenationVisitor(this).visit(ctx);
	visitStringFunctions = ctx =>
		new StringFunctionsVisitor(this).visit(ctx.stringOperators());
}

export default ExpressionVisitor;
