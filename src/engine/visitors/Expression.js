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
	SubstrAtomVisitor,
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

	visitParenthesisExpr = ctx => this.visit(ctx.children[1]);

	visitIfExpr = ctx => new IfThenElse(this).visit(ctx);

	visitOptionalExpr = ctx => this.visit(ctx.children[0]);
	visitStringFunctions = ctx => this.visit(ctx.children[0]);
	visitFunctionsExpression = ctx => this.visit(ctx.children[0]);
	visitGenericFunctions = ctx => this.visit(ctx.children[0]);

	visitVarIdExpr = ctx => new VariableVisitor(this.bindings).visit(ctx);

	visitConstantExpr = ctx => new LiteralVisitor().visit(ctx);

	// Functions
	visitCastExpr = ctx => new CastVisitor(this).visit(ctx);
	visitConcatExpr = ctx => new ConcatenationVisitor(this).visit(ctx);
	visitSubstrAtom = ctx => new SubstrAtomVisitor(this).visit(ctx);
}

export default ExpressionVisitor;
