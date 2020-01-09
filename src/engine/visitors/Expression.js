import { VtlVisitor, VtlParser } from '../../antlr-tools';
import ArithmeticVisitor from './Arithmetic';
import BooleanAlgebraVisitor from './BooleanAlgebra';
import IfThenElse from './IfThenElse';
import VariableVisitor from './Variable';
import LiteralVisitor from './Literal';
import ComparisonVisitor from './Comparison';
import {
	CastVisitor,
	ConcatenationVisitor,
	NumericFunctionsVisitor,
	StringFunctionsVisitor,
} from './functions';

class ExpressionVisitor extends VtlVisitor {
	constructor(bindings) {
		super();
		this.bindings = bindings;
		this.arithmeticVisitor = new ArithmeticVisitor(this);
	}

	visitComparisonExpr = ctx => new ComparisonVisitor(this).visit(ctx);

	visitArithmeticExpr = ctx => this.arithmeticVisitor.visit(ctx);
	visitArithmeticExprOrConcat = ctx => this.arithmeticVisitor.visit(ctx);

	visitUnaryExpr = ctx => {
		const { op } = ctx;
		if (op.type === VtlParser.NOT)
			return new BooleanAlgebraVisitor(this).visit(ctx);
		else return new ArithmeticVisitor(this).visit(ctx);
	};

	visitBooleanExpr = ctx => new BooleanAlgebraVisitor(this).visit(ctx);

	visitParenthesisExpr = ctx => this.visit(ctx.expr());

	visitIfExpr = ctx => new IfThenElse(this).visit(ctx);

	// TODO: Optional expression should handle missing values.
	visitOptionalExpr = ctx =>
		ctx.expr() === null ? null : this.visit(ctx.expr());
	visitFunctionsExpression = ctx => this.visit(ctx.functions());
	visitGenericFunctions = ctx => this.visit(ctx.genericOperators());

	visitVarIdExpr = ctx => new VariableVisitor(this.bindings).visit(ctx);

	visitConstantExpr = ctx => new LiteralVisitor().visit(ctx);

	// Functions
	visitCastExpr = ctx => new CastVisitor(this).visit(ctx);
	visitConcatExpr = ctx => new ConcatenationVisitor(this).visit(ctx);
	visitStringFunctions = ctx =>
		new StringFunctionsVisitor(this).visit(ctx.stringOperators());
	visitNumericFunctions = ctx =>
		new NumericFunctionsVisitor(this).visit(ctx.numericOperators());
}

export default ExpressionVisitor;
