import { VtlParser } from '@inseefr/vtl-2.0-antlr-tools';
import ArithmeticVisitor from './Arithmetic';
import BooleanVisitor from './Boolean';
import IfThenElse from './Conditional';
import VariableVisitor from './Variable';
import LiteralVisitor from './Literal';
import ComparisonVisitor from './Comparison';
import {
	CastVisitor,
	ComparisonFunctionVisitor,
	ConcatenationVisitor,
	NumericFunctionsVisitor,
	StringFunctionsVisitor,
	DatasetFunctionsVisitor,
	DateVisitor,
} from './functions';

class ExpressionVisitor {
	constructor(bindings) {
		this.bindings = bindings;
		this.arithmeticVisitor = new ArithmeticVisitor(this);
		this.booleanAlgebraVisitor = new BooleanVisitor(this);
		this.castFunctionVisitor = new CastVisitor(this);
		this.comparisonVisitor = new ComparisonVisitor(this);
		this.concatenationVisitor = new ConcatenationVisitor(this);
		this.dateFunctionVisitor = new DateVisitor(this);
		this.ifThenElseVisitor = new IfThenElse(this);
		this.literalVisitor = new LiteralVisitor();
		this.comparisonFunctionVisitor = new ComparisonFunctionVisitor(this);
		this.numericFunctionVisitor = new NumericFunctionsVisitor(this);
		this.stringFunctionVisitor = new StringFunctionsVisitor(this);
		this.variableVisitor = new VariableVisitor(this.bindings);
		this.datasetFunctionsVisitor = new DatasetFunctionsVisitor(this);
	}

	visitComparisonExpr(ctx) {
		return this.comparisonVisitor.visit(ctx);
	}

	// Since the grammar groups the binary expression we need to "route" to our
	// own visitor groups.
	visitArithmeticExpr(ctx) {
		return this.arithmeticVisitor.visit(ctx);
	}

	visitArithmeticExprOrConcat(ctx) {
		const { op } = ctx;
		if (op.type === VtlParser.CONCAT)
			return new ConcatenationVisitor(this).visit(ctx);
		return this.arithmeticVisitor.visit(ctx);
	}

	visitUnaryExpr(ctx) {
		const { op } = ctx;
		if (op.type === VtlParser.NOT) return this.booleanAlgebraVisitor.visit(ctx);
		return this.arithmeticVisitor.visit(ctx);
	}

	visitBooleanExpr(ctx) {
		return this.booleanAlgebraVisitor.visit(ctx);
	}

	visitParenthesisExpr(ctx) {
		return this.visit(ctx.expr());
	}

	visitIfExpr(ctx) {
		return this.ifThenElseVisitor.visit(ctx);
	}

	visitConditionalFunctions(ctx) {
		return this.visit(ctx.conditionalOperators());
	}

	visitNvlAtom(ctx) {
		return this.ifThenElseVisitor.visit(ctx);
	}

	// TODO: Optional expression should handle missing values.
	visitOptionalExpr(ctx) {
		return ctx.expr() === null ? null : this.visit(ctx.expr());
	}

	visitFunctionsExpression(ctx) {
		return this.visit(ctx.functions());
	}

	visitGenericFunctions(ctx) {
		return this.visit(ctx.genericOperators());
	}

	visitTimeFunctions(ctx) {
		return this.visit(ctx.timeOperators());
	}

	visitVarIdExpr(ctx) {
		return this.variableVisitor.visit(ctx);
	}

	visitConstantExpr(ctx) {
		return this.literalVisitor.visit(ctx);
	}

	// Functions
	visitCastExprDataset(ctx) {
		return this.castFunctionVisitor.visit(ctx);
	}

	visitCurrentDateAtom(ctx) {
		return this.dateFunctionVisitor.visit(ctx);
	}

	visitConcatExpr(ctx) {
		return this.concatenationVisitor.visit(ctx);
	}

	visitStringFunctions(ctx) {
		return this.stringFunctionVisitor.visit(ctx.stringOperators());
	}

	visitComparisonFunctions(ctx) {
		return this.comparisonFunctionVisitor.visit(ctx.comparisonOperators());
	}

	visitNumericFunctions(ctx) {
		return this.numericFunctionVisitor.visit(ctx.numericOperators());
	}

	visitAggregateFunctions(ctx) {
		return this.datasetFunctionsVisitor.visit(ctx.aggrOperatorsGrouping());
	}

	visitAnalyticFunctions(ctx) {
		return this.datasetFunctionsVisitor.visit(ctx.anFunction());
	}
}

export default ExpressionVisitor;
