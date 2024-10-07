import {
    Visitor as VtlVisitor,
    Parser as VtlParser,
    ComparisonExprContext,
    ArithmeticExprContext,
    ArithmeticExprOrConcatContext,
    UnaryExprContext,
    BooleanExprContext,
    ParenthesisExprContext,
    IfExprContext,
    NvlAtomContext,
    ConstantContext,
    ConstantExprContext,
    InNotInExprContext,
    CastExprDatasetContext,
    CurrentDateAtomContext,
    StringFunctionsContext,
    ConditionalFunctionsContext,
    OptionalExprContext,
    FunctionsExpressionContext,
    GenericFunctionsContext,
    TimeFunctionsContext,
    VarIdExprContext,
    ComparisonFunctionsContext,
    NumericFunctionsContext,
    AggregateFunctionsContext,
    AnalyticFunctionsContext,
    ExprContext
} from "@making-sense/vtl-2-1-antlr-tools-ts";
import ArithmeticVisitor from "./Arithmetic";
import BooleanVisitor from "./Boolean";
import IfThenElse from "./Conditional";
import VariableVisitor from "./Variable";
import LiteralVisitor from "./Literal";
import ComparisonVisitor from "./Comparison";
import InNotInVisitor from "./InNotInVisitor";
import {
    CastVisitor,
    ComparisonFunctionVisitor,
    ConcatenationVisitor,
    NumericFunctionsVisitor,
    StringFunctionsVisitor,
    DatasetFunctionsVisitor,
    DateVisitor
} from "./functions";
import { VisitorResult, Bindings } from "model";
import { DatasetImplementations, getDatasetImplementations } from "processing-engine";

class ExpressionVisitor extends VtlVisitor<VisitorResult | null> {
    bindings: Bindings;
    datasetImplementations: DatasetImplementations;
    arithmeticVisitor: ArithmeticVisitor;
    booleanAlgebraVisitor: BooleanVisitor;
    castFunctionVisitor: CastVisitor;
    comparisonVisitor: ComparisonVisitor;
    concatenationVisitor: ConcatenationVisitor;
    dateFunctionVisitor: DateVisitor;
    ifThenElseVisitor: IfThenElse;
    literalVisitor: LiteralVisitor;
    comparisonFunctionVisitor: ComparisonFunctionVisitor;
    numericFunctionsVisitor: NumericFunctionsVisitor;
    stringFunctionVisitor: StringFunctionsVisitor;
    variableVisitor: VariableVisitor;
    inNotInVisitor: InNotInVisitor;
    datasetFunctionsVisitor: DatasetFunctionsVisitor;
    constructor(bindings: Bindings) {
        super();
        this.bindings = bindings;
        this.datasetImplementations = getDatasetImplementations(bindings);
        this.arithmeticVisitor = new ArithmeticVisitor(this, this.datasetImplementations);
        this.booleanAlgebraVisitor = new BooleanVisitor(this);
        this.castFunctionVisitor = new CastVisitor(this);
        this.comparisonVisitor = new ComparisonVisitor(this);
        this.concatenationVisitor = new ConcatenationVisitor(this);
        this.dateFunctionVisitor = new DateVisitor();
        this.ifThenElseVisitor = new IfThenElse(this);
        this.literalVisitor = new LiteralVisitor();
        this.comparisonFunctionVisitor = new ComparisonFunctionVisitor(this);
        this.numericFunctionsVisitor = new NumericFunctionsVisitor(this);
        this.stringFunctionVisitor = new StringFunctionsVisitor(this);
        this.variableVisitor = new VariableVisitor(this.bindings);
        this.inNotInVisitor = new InNotInVisitor(this);
        this.datasetFunctionsVisitor = new DatasetFunctionsVisitor(this, this.datasetImplementations);
    }

    visitComparisonExpr = (ctx: ComparisonExprContext) => this.comparisonVisitor.visit(ctx);

    // Since the grammar groups the binary expression we need to "route" to our
    // own visitor groups.
    visitArithmeticExpr = (ctx: ArithmeticExprContext) => this.arithmeticVisitor.visit(ctx);

    visitArithmeticExprOrConcat = (ctx: ArithmeticExprOrConcatContext) => {
        const { _op } = ctx;
        if (_op?.type === VtlParser.CONCAT) return new ConcatenationVisitor(this).visit(ctx);
        return this.arithmeticVisitor.visit(ctx);
    };

    visitUnaryExpr = (ctx: UnaryExprContext) => {
        const { _op } = ctx;
        if (_op?.type === VtlParser.NOT) return this.booleanAlgebraVisitor.visit(ctx);
        return this.arithmeticVisitor.visit(ctx);
    };

    visitBooleanExpr = (ctx: BooleanExprContext) => this.booleanAlgebraVisitor.visit(ctx);

    visitParenthesisExpr = (ctx: ParenthesisExprContext) => this.visit(ctx.expr());

    visitIfExpr = (ctx: IfExprContext) => this.ifThenElseVisitor.visit(ctx);

    visitConditionalFunctions = (ctx: ConditionalFunctionsContext) => {
        const o = ctx.conditionalOperators();
        return o === null ? null : this.visit(o);
    };

    visitNvlAtom = (ctx: NvlAtomContext) => this.ifThenElseVisitor.visit(ctx);

    // TODO: Optional expression should handle missing values.
    visitOptionalExpr = (ctx: OptionalExprContext) =>
        ctx.expr() === null ? null : this.visit(ctx.expr() as ExprContext);

    visitFunctionsExpression = (ctx: FunctionsExpressionContext) => this.visit(ctx.functions());

    visitGenericFunctions = (ctx: GenericFunctionsContext) => this.visit(ctx.genericOperators());

    visitTimeFunctions = (ctx: TimeFunctionsContext) => this.visit(ctx.timeOperators());

    visitVarIdExpr = (ctx: VarIdExprContext) => this.variableVisitor.visit(ctx);

    visitConstant = (ctx: ConstantContext) => this.literalVisitor.visit(ctx);

    visitConstantExpr = (ctx: ConstantExprContext) => this.literalVisitor.visit(ctx);

    visitInNotInExpr = (ctx: InNotInExprContext) => this.inNotInVisitor.visit(ctx);

    // Functions
    visitCastExprDataset = (ctx: CastExprDatasetContext) => this.castFunctionVisitor.visit(ctx);

    visitCurrentDateAtom = (ctx: CurrentDateAtomContext) => this.dateFunctionVisitor.visit(ctx);

    visitStringFunctions = (ctx: StringFunctionsContext) =>
        this.stringFunctionVisitor.visit(ctx.stringOperators());

    visitComparisonFunctions = (ctx: ComparisonFunctionsContext) =>
        this.comparisonFunctionVisitor.visit(ctx.comparisonOperators());

    visitNumericFunctions = (ctx: NumericFunctionsContext) =>
        this.numericFunctionsVisitor.visit(ctx.numericOperators());

    visitAggregateFunctions = (ctx: AggregateFunctionsContext) =>
        this.datasetFunctionsVisitor.visit(ctx.aggrOperatorsGrouping());

    visitAnalyticFunctions = (ctx: AnalyticFunctionsContext) =>
        this.datasetFunctionsVisitor.visit(ctx.anFunction());
}

export default ExpressionVisitor;
