// Generated from ../../vtl-sources/Vtl-2.0/Vtl.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { JoinFunctionsContext } from "./VtlParser";
import { GenericFunctionsContext } from "./VtlParser";
import { StringFunctionsContext } from "./VtlParser";
import { NumericFunctionsContext } from "./VtlParser";
import { ComparisonFunctionsContext } from "./VtlParser";
import { TimeFunctionsContext } from "./VtlParser";
import { SetFunctionsContext } from "./VtlParser";
import { HierarchyFunctionsContext } from "./VtlParser";
import { ValidationFunctionsContext } from "./VtlParser";
import { ConditionalFunctionsContext } from "./VtlParser";
import { AggregateFunctionsContext } from "./VtlParser";
import { AnalyticFunctionsContext } from "./VtlParser";
import { DistanceFunctionsContext } from "./VtlParser";
import { AggrDatasetContext } from "./VtlParser";
import { PeriodAtomContext } from "./VtlParser";
import { FillTimeAtomContext } from "./VtlParser";
import { FlowAtomContext } from "./VtlParser";
import { TimeShiftAtomContext } from "./VtlParser";
import { TimeAggAtomContext } from "./VtlParser";
import { CurrentDateAtomContext } from "./VtlParser";
import { CallDatasetContext } from "./VtlParser";
import { EvalAtomContext } from "./VtlParser";
import { CastExprDatasetContext } from "./VtlParser";
import { UnaryNumericContext } from "./VtlParser";
import { UnaryWithOptionalNumericContext } from "./VtlParser";
import { BinaryNumericContext } from "./VtlParser";
import { AnSimpleFunctionContext } from "./VtlParser";
import { LagOrLeadAnContext } from "./VtlParser";
import { RatioToReportAnContext } from "./VtlParser";
import { BetweenAtomContext } from "./VtlParser";
import { CharsetMatchAtomContext } from "./VtlParser";
import { IsNullAtomContext } from "./VtlParser";
import { ExistInAtomContext } from "./VtlParser";
import { ValidateDPrulesetContext } from "./VtlParser";
import { ValidateHRrulesetContext } from "./VtlParser";
import { ValidationSimpleContext } from "./VtlParser";
import { ConditionConstraintContext } from "./VtlParser";
import { RangeConstraintContext } from "./VtlParser";
import { NvlAtomContext } from "./VtlParser";
import { JoinExprContext } from "./VtlParser";
import { DataPointContext } from "./VtlParser";
import { DataPointVdContext } from "./VtlParser";
import { DataPointVarContext } from "./VtlParser";
import { GroupByOrExceptContext } from "./VtlParser";
import { GroupAllContext } from "./VtlParser";
import { UnaryStringFunctionContext } from "./VtlParser";
import { SubstrAtomContext } from "./VtlParser";
import { ReplaceAtomContext } from "./VtlParser";
import { InstrAtomContext } from "./VtlParser";
import { DefOperatorContext } from "./VtlParser";
import { DefDatapointRulesetContext } from "./VtlParser";
import { DefHierarchicalContext } from "./VtlParser";
import { UnionAtomContext } from "./VtlParser";
import { IntersectAtomContext } from "./VtlParser";
import { SetOrSYmDiffAtomContext } from "./VtlParser";
import { TemporaryAssignmentContext } from "./VtlParser";
import { PersistAssignmentContext } from "./VtlParser";
import { DefineExpressionContext } from "./VtlParser";
import { ParenthesisExprContext } from "./VtlParser";
import { FunctionsExpressionContext } from "./VtlParser";
import { ClauseExprContext } from "./VtlParser";
import { MembershipExprContext } from "./VtlParser";
import { UnaryExprContext } from "./VtlParser";
import { ArithmeticExprContext } from "./VtlParser";
import { ArithmeticExprOrConcatContext } from "./VtlParser";
import { ComparisonExprContext } from "./VtlParser";
import { InNotInExprContext } from "./VtlParser";
import { BooleanExprContext } from "./VtlParser";
import { IfExprContext } from "./VtlParser";
import { ConstantExprContext } from "./VtlParser";
import { VarIdExprContext } from "./VtlParser";
import { HrRulesetTypeContext } from "./VtlParser";
import { HrRulesetVdTypeContext } from "./VtlParser";
import { HrRulesetVarTypeContext } from "./VtlParser";
import { LevenshteinAtomContext } from "./VtlParser";
import { StartContext } from "./VtlParser";
import { StatementContext } from "./VtlParser";
import { ExprContext } from "./VtlParser";
import { FunctionsContext } from "./VtlParser";
import { DatasetClauseContext } from "./VtlParser";
import { RenameClauseContext } from "./VtlParser";
import { AggrClauseContext } from "./VtlParser";
import { FilterClauseContext } from "./VtlParser";
import { CalcClauseContext } from "./VtlParser";
import { KeepOrDropClauseContext } from "./VtlParser";
import { PivotOrUnpivotClauseContext } from "./VtlParser";
import { CustomPivotClauseContext } from "./VtlParser";
import { SubspaceClauseContext } from "./VtlParser";
import { JoinOperatorsContext } from "./VtlParser";
import { DefOperatorsContext } from "./VtlParser";
import { GenericOperatorsContext } from "./VtlParser";
import { ParameterContext } from "./VtlParser";
import { StringOperatorsContext } from "./VtlParser";
import { NumericOperatorsContext } from "./VtlParser";
import { ComparisonOperatorsContext } from "./VtlParser";
import { TimeOperatorsContext } from "./VtlParser";
import { SetOperatorsContext } from "./VtlParser";
import { HierarchyOperatorsContext } from "./VtlParser";
import { ValidationOperatorsContext } from "./VtlParser";
import { ConditionalOperatorsContext } from "./VtlParser";
import { AggrOperatorsGroupingContext } from "./VtlParser";
import { AnFunctionContext } from "./VtlParser";
import { DistanceOperatorsContext } from "./VtlParser";
import { RenameClauseItemContext } from "./VtlParser";
import { AggregateClauseContext } from "./VtlParser";
import { AggrFunctionClauseContext } from "./VtlParser";
import { CalcClauseItemContext } from "./VtlParser";
import { SubspaceClauseItemContext } from "./VtlParser";
import { JoinClauseWithoutUsingContext } from "./VtlParser";
import { JoinClauseContext } from "./VtlParser";
import { JoinClauseItemContext } from "./VtlParser";
import { JoinBodyContext } from "./VtlParser";
import { JoinApplyClauseContext } from "./VtlParser";
import { PartitionByClauseContext } from "./VtlParser";
import { OrderByClauseContext } from "./VtlParser";
import { OrderByItemContext } from "./VtlParser";
import { WindowingClauseContext } from "./VtlParser";
import { SignedIntegerContext } from "./VtlParser";
import { LimitClauseItemContext } from "./VtlParser";
import { GroupingClauseContext } from "./VtlParser";
import { HavingClauseContext } from "./VtlParser";
import { ParameterItemContext } from "./VtlParser";
import { OutputParameterTypeContext } from "./VtlParser";
import { OutputParameterTypeComponentContext } from "./VtlParser";
import { InputParameterTypeContext } from "./VtlParser";
import { RulesetTypeContext } from "./VtlParser";
import { ScalarTypeContext } from "./VtlParser";
import { ComponentTypeContext } from "./VtlParser";
import { DatasetTypeContext } from "./VtlParser";
import { ScalarSetTypeContext } from "./VtlParser";
import { DpRulesetContext } from "./VtlParser";
import { HrRulesetContext } from "./VtlParser";
import { ValueDomainNameContext } from "./VtlParser";
import { RulesetIDContext } from "./VtlParser";
import { RulesetSignatureContext } from "./VtlParser";
import { SignatureContext } from "./VtlParser";
import { RuleClauseDatapointContext } from "./VtlParser";
import { RuleItemDatapointContext } from "./VtlParser";
import { RuleClauseHierarchicalContext } from "./VtlParser";
import { RuleItemHierarchicalContext } from "./VtlParser";
import { HierRuleSignatureContext } from "./VtlParser";
import { ValueDomainSignatureContext } from "./VtlParser";
import { CodeItemRelationContext } from "./VtlParser";
import { CodeItemRelationClauseContext } from "./VtlParser";
import { ValueDomainValueContext } from "./VtlParser";
import { ScalarTypeConstraintContext } from "./VtlParser";
import { CompConstraintContext } from "./VtlParser";
import { MultModifierContext } from "./VtlParser";
import { ValidationOutputContext } from "./VtlParser";
import { ValidationModeContext } from "./VtlParser";
import { ConditionClauseContext } from "./VtlParser";
import { InputModeContext } from "./VtlParser";
import { ImbalanceExprContext } from "./VtlParser";
import { InputModeHierarchyContext } from "./VtlParser";
import { OutputModeHierarchyContext } from "./VtlParser";
import { AliasContext } from "./VtlParser";
import { VarIDContext } from "./VtlParser";
import { SimpleComponentIdContext } from "./VtlParser";
import { ComponentIDContext } from "./VtlParser";
import { ListsContext } from "./VtlParser";
import { ErCodeContext } from "./VtlParser";
import { ErLevelContext } from "./VtlParser";
import { ComparisonOperandContext } from "./VtlParser";
import { OptionalExprContext } from "./VtlParser";
import { ComponentRoleContext } from "./VtlParser";
import { ViralAttributeContext } from "./VtlParser";
import { ValueDomainIDContext } from "./VtlParser";
import { OperatorIDContext } from "./VtlParser";
import { RoutineNameContext } from "./VtlParser";
import { ConstantContext } from "./VtlParser";
import { BasicScalarTypeContext } from "./VtlParser";
import { RetainTypeContext } from "./VtlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `VtlParser`.
 */
export interface VtlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `joinFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterJoinFunctions?: (ctx: JoinFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `joinFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitJoinFunctions?: (ctx: JoinFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `genericFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterGenericFunctions?: (ctx: GenericFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `genericFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitGenericFunctions?: (ctx: GenericFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `stringFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterStringFunctions?: (ctx: StringFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `stringFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitStringFunctions?: (ctx: StringFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `numericFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterNumericFunctions?: (ctx: NumericFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `numericFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitNumericFunctions?: (ctx: NumericFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `comparisonFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterComparisonFunctions?: (ctx: ComparisonFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `comparisonFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitComparisonFunctions?: (ctx: ComparisonFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `timeFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterTimeFunctions?: (ctx: TimeFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `timeFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitTimeFunctions?: (ctx: TimeFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `setFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterSetFunctions?: (ctx: SetFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `setFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitSetFunctions?: (ctx: SetFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `hierarchyFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterHierarchyFunctions?: (ctx: HierarchyFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `hierarchyFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitHierarchyFunctions?: (ctx: HierarchyFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `validationFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterValidationFunctions?: (ctx: ValidationFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `validationFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitValidationFunctions?: (ctx: ValidationFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `conditionalFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterConditionalFunctions?: (ctx: ConditionalFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `conditionalFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitConditionalFunctions?: (ctx: ConditionalFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `aggregateFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterAggregateFunctions?: (ctx: AggregateFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `aggregateFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitAggregateFunctions?: (ctx: AggregateFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `analyticFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterAnalyticFunctions?: (ctx: AnalyticFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `analyticFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitAnalyticFunctions?: (ctx: AnalyticFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `distanceFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterDistanceFunctions?: (ctx: DistanceFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `distanceFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitDistanceFunctions?: (ctx: DistanceFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `aggrDataset`
	 * labeled alternative in `VtlParser.aggrOperatorsGrouping`.
	 * @param ctx the parse tree
	 */
	enterAggrDataset?: (ctx: AggrDatasetContext) => void;
	/**
	 * Exit a parse tree produced by the `aggrDataset`
	 * labeled alternative in `VtlParser.aggrOperatorsGrouping`.
	 * @param ctx the parse tree
	 */
	exitAggrDataset?: (ctx: AggrDatasetContext) => void;

	/**
	 * Enter a parse tree produced by the `periodAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	enterPeriodAtom?: (ctx: PeriodAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `periodAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	exitPeriodAtom?: (ctx: PeriodAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `fillTimeAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	enterFillTimeAtom?: (ctx: FillTimeAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `fillTimeAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	exitFillTimeAtom?: (ctx: FillTimeAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `flowAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	enterFlowAtom?: (ctx: FlowAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `flowAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	exitFlowAtom?: (ctx: FlowAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `timeShiftAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	enterTimeShiftAtom?: (ctx: TimeShiftAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `timeShiftAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	exitTimeShiftAtom?: (ctx: TimeShiftAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `timeAggAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	enterTimeAggAtom?: (ctx: TimeAggAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `timeAggAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	exitTimeAggAtom?: (ctx: TimeAggAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `currentDateAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	enterCurrentDateAtom?: (ctx: CurrentDateAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `currentDateAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	exitCurrentDateAtom?: (ctx: CurrentDateAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `callDataset`
	 * labeled alternative in `VtlParser.genericOperators`.
	 * @param ctx the parse tree
	 */
	enterCallDataset?: (ctx: CallDatasetContext) => void;
	/**
	 * Exit a parse tree produced by the `callDataset`
	 * labeled alternative in `VtlParser.genericOperators`.
	 * @param ctx the parse tree
	 */
	exitCallDataset?: (ctx: CallDatasetContext) => void;

	/**
	 * Enter a parse tree produced by the `evalAtom`
	 * labeled alternative in `VtlParser.genericOperators`.
	 * @param ctx the parse tree
	 */
	enterEvalAtom?: (ctx: EvalAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `evalAtom`
	 * labeled alternative in `VtlParser.genericOperators`.
	 * @param ctx the parse tree
	 */
	exitEvalAtom?: (ctx: EvalAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `castExprDataset`
	 * labeled alternative in `VtlParser.genericOperators`.
	 * @param ctx the parse tree
	 */
	enterCastExprDataset?: (ctx: CastExprDatasetContext) => void;
	/**
	 * Exit a parse tree produced by the `castExprDataset`
	 * labeled alternative in `VtlParser.genericOperators`.
	 * @param ctx the parse tree
	 */
	exitCastExprDataset?: (ctx: CastExprDatasetContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryNumeric`
	 * labeled alternative in `VtlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	enterUnaryNumeric?: (ctx: UnaryNumericContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryNumeric`
	 * labeled alternative in `VtlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	exitUnaryNumeric?: (ctx: UnaryNumericContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryWithOptionalNumeric`
	 * labeled alternative in `VtlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	enterUnaryWithOptionalNumeric?: (ctx: UnaryWithOptionalNumericContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryWithOptionalNumeric`
	 * labeled alternative in `VtlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	exitUnaryWithOptionalNumeric?: (ctx: UnaryWithOptionalNumericContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryNumeric`
	 * labeled alternative in `VtlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	enterBinaryNumeric?: (ctx: BinaryNumericContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryNumeric`
	 * labeled alternative in `VtlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	exitBinaryNumeric?: (ctx: BinaryNumericContext) => void;

	/**
	 * Enter a parse tree produced by the `anSimpleFunction`
	 * labeled alternative in `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 */
	enterAnSimpleFunction?: (ctx: AnSimpleFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `anSimpleFunction`
	 * labeled alternative in `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 */
	exitAnSimpleFunction?: (ctx: AnSimpleFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `lagOrLeadAn`
	 * labeled alternative in `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 */
	enterLagOrLeadAn?: (ctx: LagOrLeadAnContext) => void;
	/**
	 * Exit a parse tree produced by the `lagOrLeadAn`
	 * labeled alternative in `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 */
	exitLagOrLeadAn?: (ctx: LagOrLeadAnContext) => void;

	/**
	 * Enter a parse tree produced by the `ratioToReportAn`
	 * labeled alternative in `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 */
	enterRatioToReportAn?: (ctx: RatioToReportAnContext) => void;
	/**
	 * Exit a parse tree produced by the `ratioToReportAn`
	 * labeled alternative in `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 */
	exitRatioToReportAn?: (ctx: RatioToReportAnContext) => void;

	/**
	 * Enter a parse tree produced by the `betweenAtom`
	 * labeled alternative in `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 */
	enterBetweenAtom?: (ctx: BetweenAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `betweenAtom`
	 * labeled alternative in `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 */
	exitBetweenAtom?: (ctx: BetweenAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `charsetMatchAtom`
	 * labeled alternative in `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 */
	enterCharsetMatchAtom?: (ctx: CharsetMatchAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `charsetMatchAtom`
	 * labeled alternative in `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 */
	exitCharsetMatchAtom?: (ctx: CharsetMatchAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `isNullAtom`
	 * labeled alternative in `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 */
	enterIsNullAtom?: (ctx: IsNullAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `isNullAtom`
	 * labeled alternative in `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 */
	exitIsNullAtom?: (ctx: IsNullAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `existInAtom`
	 * labeled alternative in `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 */
	enterExistInAtom?: (ctx: ExistInAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `existInAtom`
	 * labeled alternative in `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 */
	exitExistInAtom?: (ctx: ExistInAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `validateDPruleset`
	 * labeled alternative in `VtlParser.validationOperators`.
	 * @param ctx the parse tree
	 */
	enterValidateDPruleset?: (ctx: ValidateDPrulesetContext) => void;
	/**
	 * Exit a parse tree produced by the `validateDPruleset`
	 * labeled alternative in `VtlParser.validationOperators`.
	 * @param ctx the parse tree
	 */
	exitValidateDPruleset?: (ctx: ValidateDPrulesetContext) => void;

	/**
	 * Enter a parse tree produced by the `validateHRruleset`
	 * labeled alternative in `VtlParser.validationOperators`.
	 * @param ctx the parse tree
	 */
	enterValidateHRruleset?: (ctx: ValidateHRrulesetContext) => void;
	/**
	 * Exit a parse tree produced by the `validateHRruleset`
	 * labeled alternative in `VtlParser.validationOperators`.
	 * @param ctx the parse tree
	 */
	exitValidateHRruleset?: (ctx: ValidateHRrulesetContext) => void;

	/**
	 * Enter a parse tree produced by the `validationSimple`
	 * labeled alternative in `VtlParser.validationOperators`.
	 * @param ctx the parse tree
	 */
	enterValidationSimple?: (ctx: ValidationSimpleContext) => void;
	/**
	 * Exit a parse tree produced by the `validationSimple`
	 * labeled alternative in `VtlParser.validationOperators`.
	 * @param ctx the parse tree
	 */
	exitValidationSimple?: (ctx: ValidationSimpleContext) => void;

	/**
	 * Enter a parse tree produced by the `conditionConstraint`
	 * labeled alternative in `VtlParser.scalarTypeConstraint`.
	 * @param ctx the parse tree
	 */
	enterConditionConstraint?: (ctx: ConditionConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `conditionConstraint`
	 * labeled alternative in `VtlParser.scalarTypeConstraint`.
	 * @param ctx the parse tree
	 */
	exitConditionConstraint?: (ctx: ConditionConstraintContext) => void;

	/**
	 * Enter a parse tree produced by the `rangeConstraint`
	 * labeled alternative in `VtlParser.scalarTypeConstraint`.
	 * @param ctx the parse tree
	 */
	enterRangeConstraint?: (ctx: RangeConstraintContext) => void;
	/**
	 * Exit a parse tree produced by the `rangeConstraint`
	 * labeled alternative in `VtlParser.scalarTypeConstraint`.
	 * @param ctx the parse tree
	 */
	exitRangeConstraint?: (ctx: RangeConstraintContext) => void;

	/**
	 * Enter a parse tree produced by the `nvlAtom`
	 * labeled alternative in `VtlParser.conditionalOperators`.
	 * @param ctx the parse tree
	 */
	enterNvlAtom?: (ctx: NvlAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `nvlAtom`
	 * labeled alternative in `VtlParser.conditionalOperators`.
	 * @param ctx the parse tree
	 */
	exitNvlAtom?: (ctx: NvlAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `joinExpr`
	 * labeled alternative in `VtlParser.joinOperators`.
	 * @param ctx the parse tree
	 */
	enterJoinExpr?: (ctx: JoinExprContext) => void;
	/**
	 * Exit a parse tree produced by the `joinExpr`
	 * labeled alternative in `VtlParser.joinOperators`.
	 * @param ctx the parse tree
	 */
	exitJoinExpr?: (ctx: JoinExprContext) => void;

	/**
	 * Enter a parse tree produced by the `dataPoint`
	 * labeled alternative in `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 */
	enterDataPoint?: (ctx: DataPointContext) => void;
	/**
	 * Exit a parse tree produced by the `dataPoint`
	 * labeled alternative in `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 */
	exitDataPoint?: (ctx: DataPointContext) => void;

	/**
	 * Enter a parse tree produced by the `dataPointVd`
	 * labeled alternative in `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 */
	enterDataPointVd?: (ctx: DataPointVdContext) => void;
	/**
	 * Exit a parse tree produced by the `dataPointVd`
	 * labeled alternative in `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 */
	exitDataPointVd?: (ctx: DataPointVdContext) => void;

	/**
	 * Enter a parse tree produced by the `dataPointVar`
	 * labeled alternative in `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 */
	enterDataPointVar?: (ctx: DataPointVarContext) => void;
	/**
	 * Exit a parse tree produced by the `dataPointVar`
	 * labeled alternative in `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 */
	exitDataPointVar?: (ctx: DataPointVarContext) => void;

	/**
	 * Enter a parse tree produced by the `groupByOrExcept`
	 * labeled alternative in `VtlParser.groupingClause`.
	 * @param ctx the parse tree
	 */
	enterGroupByOrExcept?: (ctx: GroupByOrExceptContext) => void;
	/**
	 * Exit a parse tree produced by the `groupByOrExcept`
	 * labeled alternative in `VtlParser.groupingClause`.
	 * @param ctx the parse tree
	 */
	exitGroupByOrExcept?: (ctx: GroupByOrExceptContext) => void;

	/**
	 * Enter a parse tree produced by the `groupAll`
	 * labeled alternative in `VtlParser.groupingClause`.
	 * @param ctx the parse tree
	 */
	enterGroupAll?: (ctx: GroupAllContext) => void;
	/**
	 * Exit a parse tree produced by the `groupAll`
	 * labeled alternative in `VtlParser.groupingClause`.
	 * @param ctx the parse tree
	 */
	exitGroupAll?: (ctx: GroupAllContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryStringFunction`
	 * labeled alternative in `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 */
	enterUnaryStringFunction?: (ctx: UnaryStringFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryStringFunction`
	 * labeled alternative in `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 */
	exitUnaryStringFunction?: (ctx: UnaryStringFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `substrAtom`
	 * labeled alternative in `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 */
	enterSubstrAtom?: (ctx: SubstrAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `substrAtom`
	 * labeled alternative in `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 */
	exitSubstrAtom?: (ctx: SubstrAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `replaceAtom`
	 * labeled alternative in `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 */
	enterReplaceAtom?: (ctx: ReplaceAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `replaceAtom`
	 * labeled alternative in `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 */
	exitReplaceAtom?: (ctx: ReplaceAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `instrAtom`
	 * labeled alternative in `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 */
	enterInstrAtom?: (ctx: InstrAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `instrAtom`
	 * labeled alternative in `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 */
	exitInstrAtom?: (ctx: InstrAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `defOperator`
	 * labeled alternative in `VtlParser.defOperators`.
	 * @param ctx the parse tree
	 */
	enterDefOperator?: (ctx: DefOperatorContext) => void;
	/**
	 * Exit a parse tree produced by the `defOperator`
	 * labeled alternative in `VtlParser.defOperators`.
	 * @param ctx the parse tree
	 */
	exitDefOperator?: (ctx: DefOperatorContext) => void;

	/**
	 * Enter a parse tree produced by the `defDatapointRuleset`
	 * labeled alternative in `VtlParser.defOperators`.
	 * @param ctx the parse tree
	 */
	enterDefDatapointRuleset?: (ctx: DefDatapointRulesetContext) => void;
	/**
	 * Exit a parse tree produced by the `defDatapointRuleset`
	 * labeled alternative in `VtlParser.defOperators`.
	 * @param ctx the parse tree
	 */
	exitDefDatapointRuleset?: (ctx: DefDatapointRulesetContext) => void;

	/**
	 * Enter a parse tree produced by the `defHierarchical`
	 * labeled alternative in `VtlParser.defOperators`.
	 * @param ctx the parse tree
	 */
	enterDefHierarchical?: (ctx: DefHierarchicalContext) => void;
	/**
	 * Exit a parse tree produced by the `defHierarchical`
	 * labeled alternative in `VtlParser.defOperators`.
	 * @param ctx the parse tree
	 */
	exitDefHierarchical?: (ctx: DefHierarchicalContext) => void;

	/**
	 * Enter a parse tree produced by the `unionAtom`
	 * labeled alternative in `VtlParser.setOperators`.
	 * @param ctx the parse tree
	 */
	enterUnionAtom?: (ctx: UnionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `unionAtom`
	 * labeled alternative in `VtlParser.setOperators`.
	 * @param ctx the parse tree
	 */
	exitUnionAtom?: (ctx: UnionAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `intersectAtom`
	 * labeled alternative in `VtlParser.setOperators`.
	 * @param ctx the parse tree
	 */
	enterIntersectAtom?: (ctx: IntersectAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `intersectAtom`
	 * labeled alternative in `VtlParser.setOperators`.
	 * @param ctx the parse tree
	 */
	exitIntersectAtom?: (ctx: IntersectAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `setOrSYmDiffAtom`
	 * labeled alternative in `VtlParser.setOperators`.
	 * @param ctx the parse tree
	 */
	enterSetOrSYmDiffAtom?: (ctx: SetOrSYmDiffAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `setOrSYmDiffAtom`
	 * labeled alternative in `VtlParser.setOperators`.
	 * @param ctx the parse tree
	 */
	exitSetOrSYmDiffAtom?: (ctx: SetOrSYmDiffAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `temporaryAssignment`
	 * labeled alternative in `VtlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterTemporaryAssignment?: (ctx: TemporaryAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `temporaryAssignment`
	 * labeled alternative in `VtlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitTemporaryAssignment?: (ctx: TemporaryAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `persistAssignment`
	 * labeled alternative in `VtlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterPersistAssignment?: (ctx: PersistAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `persistAssignment`
	 * labeled alternative in `VtlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitPersistAssignment?: (ctx: PersistAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `defineExpression`
	 * labeled alternative in `VtlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDefineExpression?: (ctx: DefineExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `defineExpression`
	 * labeled alternative in `VtlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDefineExpression?: (ctx: DefineExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesisExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParenthesisExpr?: (ctx: ParenthesisExprContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesisExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParenthesisExpr?: (ctx: ParenthesisExprContext) => void;

	/**
	 * Enter a parse tree produced by the `functionsExpression`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFunctionsExpression?: (ctx: FunctionsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `functionsExpression`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFunctionsExpression?: (ctx: FunctionsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `clauseExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterClauseExpr?: (ctx: ClauseExprContext) => void;
	/**
	 * Exit a parse tree produced by the `clauseExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitClauseExpr?: (ctx: ClauseExprContext) => void;

	/**
	 * Enter a parse tree produced by the `membershipExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMembershipExpr?: (ctx: MembershipExprContext) => void;
	/**
	 * Exit a parse tree produced by the `membershipExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMembershipExpr?: (ctx: MembershipExprContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpr?: (ctx: UnaryExprContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpr?: (ctx: UnaryExprContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterArithmeticExpr?: (ctx: ArithmeticExprContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitArithmeticExpr?: (ctx: ArithmeticExprContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticExprOrConcat`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterArithmeticExprOrConcat?: (ctx: ArithmeticExprOrConcatContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticExprOrConcat`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitArithmeticExprOrConcat?: (ctx: ArithmeticExprOrConcatContext) => void;

	/**
	 * Enter a parse tree produced by the `comparisonExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterComparisonExpr?: (ctx: ComparisonExprContext) => void;
	/**
	 * Exit a parse tree produced by the `comparisonExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitComparisonExpr?: (ctx: ComparisonExprContext) => void;

	/**
	 * Enter a parse tree produced by the `inNotInExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInNotInExpr?: (ctx: InNotInExprContext) => void;
	/**
	 * Exit a parse tree produced by the `inNotInExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInNotInExpr?: (ctx: InNotInExprContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpr?: (ctx: BooleanExprContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpr?: (ctx: BooleanExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ifExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIfExpr?: (ctx: IfExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ifExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIfExpr?: (ctx: IfExprContext) => void;

	/**
	 * Enter a parse tree produced by the `constantExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterConstantExpr?: (ctx: ConstantExprContext) => void;
	/**
	 * Exit a parse tree produced by the `constantExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitConstantExpr?: (ctx: ConstantExprContext) => void;

	/**
	 * Enter a parse tree produced by the `varIdExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterVarIdExpr?: (ctx: VarIdExprContext) => void;
	/**
	 * Exit a parse tree produced by the `varIdExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitVarIdExpr?: (ctx: VarIdExprContext) => void;

	/**
	 * Enter a parse tree produced by the `hrRulesetType`
	 * labeled alternative in `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 */
	enterHrRulesetType?: (ctx: HrRulesetTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `hrRulesetType`
	 * labeled alternative in `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 */
	exitHrRulesetType?: (ctx: HrRulesetTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `hrRulesetVdType`
	 * labeled alternative in `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 */
	enterHrRulesetVdType?: (ctx: HrRulesetVdTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `hrRulesetVdType`
	 * labeled alternative in `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 */
	exitHrRulesetVdType?: (ctx: HrRulesetVdTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `hrRulesetVarType`
	 * labeled alternative in `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 */
	enterHrRulesetVarType?: (ctx: HrRulesetVarTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `hrRulesetVarType`
	 * labeled alternative in `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 */
	exitHrRulesetVarType?: (ctx: HrRulesetVarTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `levenshteinAtom`
	 * labeled alternative in `VtlParser.distanceOperators`.
	 * @param ctx the parse tree
	 */
	enterLevenshteinAtom?: (ctx: LevenshteinAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `levenshteinAtom`
	 * labeled alternative in `VtlParser.distanceOperators`.
	 * @param ctx the parse tree
	 */
	exitLevenshteinAtom?: (ctx: LevenshteinAtomContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterFunctions?: (ctx: FunctionsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitFunctions?: (ctx: FunctionsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.datasetClause`.
	 * @param ctx the parse tree
	 */
	enterDatasetClause?: (ctx: DatasetClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.datasetClause`.
	 * @param ctx the parse tree
	 */
	exitDatasetClause?: (ctx: DatasetClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.renameClause`.
	 * @param ctx the parse tree
	 */
	enterRenameClause?: (ctx: RenameClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.renameClause`.
	 * @param ctx the parse tree
	 */
	exitRenameClause?: (ctx: RenameClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.aggrClause`.
	 * @param ctx the parse tree
	 */
	enterAggrClause?: (ctx: AggrClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.aggrClause`.
	 * @param ctx the parse tree
	 */
	exitAggrClause?: (ctx: AggrClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.filterClause`.
	 * @param ctx the parse tree
	 */
	enterFilterClause?: (ctx: FilterClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.filterClause`.
	 * @param ctx the parse tree
	 */
	exitFilterClause?: (ctx: FilterClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.calcClause`.
	 * @param ctx the parse tree
	 */
	enterCalcClause?: (ctx: CalcClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.calcClause`.
	 * @param ctx the parse tree
	 */
	exitCalcClause?: (ctx: CalcClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.keepOrDropClause`.
	 * @param ctx the parse tree
	 */
	enterKeepOrDropClause?: (ctx: KeepOrDropClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.keepOrDropClause`.
	 * @param ctx the parse tree
	 */
	exitKeepOrDropClause?: (ctx: KeepOrDropClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.pivotOrUnpivotClause`.
	 * @param ctx the parse tree
	 */
	enterPivotOrUnpivotClause?: (ctx: PivotOrUnpivotClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.pivotOrUnpivotClause`.
	 * @param ctx the parse tree
	 */
	exitPivotOrUnpivotClause?: (ctx: PivotOrUnpivotClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.customPivotClause`.
	 * @param ctx the parse tree
	 */
	enterCustomPivotClause?: (ctx: CustomPivotClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.customPivotClause`.
	 * @param ctx the parse tree
	 */
	exitCustomPivotClause?: (ctx: CustomPivotClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.subspaceClause`.
	 * @param ctx the parse tree
	 */
	enterSubspaceClause?: (ctx: SubspaceClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.subspaceClause`.
	 * @param ctx the parse tree
	 */
	exitSubspaceClause?: (ctx: SubspaceClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinOperators`.
	 * @param ctx the parse tree
	 */
	enterJoinOperators?: (ctx: JoinOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinOperators`.
	 * @param ctx the parse tree
	 */
	exitJoinOperators?: (ctx: JoinOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.defOperators`.
	 * @param ctx the parse tree
	 */
	enterDefOperators?: (ctx: DefOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.defOperators`.
	 * @param ctx the parse tree
	 */
	exitDefOperators?: (ctx: DefOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.genericOperators`.
	 * @param ctx the parse tree
	 */
	enterGenericOperators?: (ctx: GenericOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.genericOperators`.
	 * @param ctx the parse tree
	 */
	exitGenericOperators?: (ctx: GenericOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 */
	enterStringOperators?: (ctx: StringOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 */
	exitStringOperators?: (ctx: StringOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	enterNumericOperators?: (ctx: NumericOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	exitNumericOperators?: (ctx: NumericOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperators?: (ctx: ComparisonOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperators?: (ctx: ComparisonOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	enterTimeOperators?: (ctx: TimeOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	exitTimeOperators?: (ctx: TimeOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.setOperators`.
	 * @param ctx the parse tree
	 */
	enterSetOperators?: (ctx: SetOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.setOperators`.
	 * @param ctx the parse tree
	 */
	exitSetOperators?: (ctx: SetOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.hierarchyOperators`.
	 * @param ctx the parse tree
	 */
	enterHierarchyOperators?: (ctx: HierarchyOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.hierarchyOperators`.
	 * @param ctx the parse tree
	 */
	exitHierarchyOperators?: (ctx: HierarchyOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.validationOperators`.
	 * @param ctx the parse tree
	 */
	enterValidationOperators?: (ctx: ValidationOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.validationOperators`.
	 * @param ctx the parse tree
	 */
	exitValidationOperators?: (ctx: ValidationOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.conditionalOperators`.
	 * @param ctx the parse tree
	 */
	enterConditionalOperators?: (ctx: ConditionalOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.conditionalOperators`.
	 * @param ctx the parse tree
	 */
	exitConditionalOperators?: (ctx: ConditionalOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.aggrOperatorsGrouping`.
	 * @param ctx the parse tree
	 */
	enterAggrOperatorsGrouping?: (ctx: AggrOperatorsGroupingContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.aggrOperatorsGrouping`.
	 * @param ctx the parse tree
	 */
	exitAggrOperatorsGrouping?: (ctx: AggrOperatorsGroupingContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 */
	enterAnFunction?: (ctx: AnFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 */
	exitAnFunction?: (ctx: AnFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.distanceOperators`.
	 * @param ctx the parse tree
	 */
	enterDistanceOperators?: (ctx: DistanceOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.distanceOperators`.
	 * @param ctx the parse tree
	 */
	exitDistanceOperators?: (ctx: DistanceOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.renameClauseItem`.
	 * @param ctx the parse tree
	 */
	enterRenameClauseItem?: (ctx: RenameClauseItemContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.renameClauseItem`.
	 * @param ctx the parse tree
	 */
	exitRenameClauseItem?: (ctx: RenameClauseItemContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.aggregateClause`.
	 * @param ctx the parse tree
	 */
	enterAggregateClause?: (ctx: AggregateClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.aggregateClause`.
	 * @param ctx the parse tree
	 */
	exitAggregateClause?: (ctx: AggregateClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.aggrFunctionClause`.
	 * @param ctx the parse tree
	 */
	enterAggrFunctionClause?: (ctx: AggrFunctionClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.aggrFunctionClause`.
	 * @param ctx the parse tree
	 */
	exitAggrFunctionClause?: (ctx: AggrFunctionClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.calcClauseItem`.
	 * @param ctx the parse tree
	 */
	enterCalcClauseItem?: (ctx: CalcClauseItemContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.calcClauseItem`.
	 * @param ctx the parse tree
	 */
	exitCalcClauseItem?: (ctx: CalcClauseItemContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.subspaceClauseItem`.
	 * @param ctx the parse tree
	 */
	enterSubspaceClauseItem?: (ctx: SubspaceClauseItemContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.subspaceClauseItem`.
	 * @param ctx the parse tree
	 */
	exitSubspaceClauseItem?: (ctx: SubspaceClauseItemContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinClauseWithoutUsing`.
	 * @param ctx the parse tree
	 */
	enterJoinClauseWithoutUsing?: (ctx: JoinClauseWithoutUsingContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinClauseWithoutUsing`.
	 * @param ctx the parse tree
	 */
	exitJoinClauseWithoutUsing?: (ctx: JoinClauseWithoutUsingContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinClause`.
	 * @param ctx the parse tree
	 */
	enterJoinClause?: (ctx: JoinClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinClause`.
	 * @param ctx the parse tree
	 */
	exitJoinClause?: (ctx: JoinClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinClauseItem`.
	 * @param ctx the parse tree
	 */
	enterJoinClauseItem?: (ctx: JoinClauseItemContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinClauseItem`.
	 * @param ctx the parse tree
	 */
	exitJoinClauseItem?: (ctx: JoinClauseItemContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinBody`.
	 * @param ctx the parse tree
	 */
	enterJoinBody?: (ctx: JoinBodyContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinBody`.
	 * @param ctx the parse tree
	 */
	exitJoinBody?: (ctx: JoinBodyContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.joinApplyClause`.
	 * @param ctx the parse tree
	 */
	enterJoinApplyClause?: (ctx: JoinApplyClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.joinApplyClause`.
	 * @param ctx the parse tree
	 */
	exitJoinApplyClause?: (ctx: JoinApplyClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.partitionByClause`.
	 * @param ctx the parse tree
	 */
	enterPartitionByClause?: (ctx: PartitionByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.partitionByClause`.
	 * @param ctx the parse tree
	 */
	exitPartitionByClause?: (ctx: PartitionByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.orderByClause`.
	 * @param ctx the parse tree
	 */
	enterOrderByClause?: (ctx: OrderByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.orderByClause`.
	 * @param ctx the parse tree
	 */
	exitOrderByClause?: (ctx: OrderByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.orderByItem`.
	 * @param ctx the parse tree
	 */
	enterOrderByItem?: (ctx: OrderByItemContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.orderByItem`.
	 * @param ctx the parse tree
	 */
	exitOrderByItem?: (ctx: OrderByItemContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.windowingClause`.
	 * @param ctx the parse tree
	 */
	enterWindowingClause?: (ctx: WindowingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.windowingClause`.
	 * @param ctx the parse tree
	 */
	exitWindowingClause?: (ctx: WindowingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.signedInteger`.
	 * @param ctx the parse tree
	 */
	enterSignedInteger?: (ctx: SignedIntegerContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.signedInteger`.
	 * @param ctx the parse tree
	 */
	exitSignedInteger?: (ctx: SignedIntegerContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.limitClauseItem`.
	 * @param ctx the parse tree
	 */
	enterLimitClauseItem?: (ctx: LimitClauseItemContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.limitClauseItem`.
	 * @param ctx the parse tree
	 */
	exitLimitClauseItem?: (ctx: LimitClauseItemContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.groupingClause`.
	 * @param ctx the parse tree
	 */
	enterGroupingClause?: (ctx: GroupingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.groupingClause`.
	 * @param ctx the parse tree
	 */
	exitGroupingClause?: (ctx: GroupingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.havingClause`.
	 * @param ctx the parse tree
	 */
	enterHavingClause?: (ctx: HavingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.havingClause`.
	 * @param ctx the parse tree
	 */
	exitHavingClause?: (ctx: HavingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.parameterItem`.
	 * @param ctx the parse tree
	 */
	enterParameterItem?: (ctx: ParameterItemContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.parameterItem`.
	 * @param ctx the parse tree
	 */
	exitParameterItem?: (ctx: ParameterItemContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.outputParameterType`.
	 * @param ctx the parse tree
	 */
	enterOutputParameterType?: (ctx: OutputParameterTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.outputParameterType`.
	 * @param ctx the parse tree
	 */
	exitOutputParameterType?: (ctx: OutputParameterTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.outputParameterTypeComponent`.
	 * @param ctx the parse tree
	 */
	enterOutputParameterTypeComponent?: (ctx: OutputParameterTypeComponentContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.outputParameterTypeComponent`.
	 * @param ctx the parse tree
	 */
	exitOutputParameterTypeComponent?: (ctx: OutputParameterTypeComponentContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.inputParameterType`.
	 * @param ctx the parse tree
	 */
	enterInputParameterType?: (ctx: InputParameterTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.inputParameterType`.
	 * @param ctx the parse tree
	 */
	exitInputParameterType?: (ctx: InputParameterTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.rulesetType`.
	 * @param ctx the parse tree
	 */
	enterRulesetType?: (ctx: RulesetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.rulesetType`.
	 * @param ctx the parse tree
	 */
	exitRulesetType?: (ctx: RulesetTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.scalarType`.
	 * @param ctx the parse tree
	 */
	enterScalarType?: (ctx: ScalarTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.scalarType`.
	 * @param ctx the parse tree
	 */
	exitScalarType?: (ctx: ScalarTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.componentType`.
	 * @param ctx the parse tree
	 */
	enterComponentType?: (ctx: ComponentTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.componentType`.
	 * @param ctx the parse tree
	 */
	exitComponentType?: (ctx: ComponentTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.datasetType`.
	 * @param ctx the parse tree
	 */
	enterDatasetType?: (ctx: DatasetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.datasetType`.
	 * @param ctx the parse tree
	 */
	exitDatasetType?: (ctx: DatasetTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.scalarSetType`.
	 * @param ctx the parse tree
	 */
	enterScalarSetType?: (ctx: ScalarSetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.scalarSetType`.
	 * @param ctx the parse tree
	 */
	exitScalarSetType?: (ctx: ScalarSetTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 */
	enterDpRuleset?: (ctx: DpRulesetContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 */
	exitDpRuleset?: (ctx: DpRulesetContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 */
	enterHrRuleset?: (ctx: HrRulesetContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 */
	exitHrRuleset?: (ctx: HrRulesetContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.valueDomainName`.
	 * @param ctx the parse tree
	 */
	enterValueDomainName?: (ctx: ValueDomainNameContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.valueDomainName`.
	 * @param ctx the parse tree
	 */
	exitValueDomainName?: (ctx: ValueDomainNameContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.rulesetID`.
	 * @param ctx the parse tree
	 */
	enterRulesetID?: (ctx: RulesetIDContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.rulesetID`.
	 * @param ctx the parse tree
	 */
	exitRulesetID?: (ctx: RulesetIDContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.rulesetSignature`.
	 * @param ctx the parse tree
	 */
	enterRulesetSignature?: (ctx: RulesetSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.rulesetSignature`.
	 * @param ctx the parse tree
	 */
	exitRulesetSignature?: (ctx: RulesetSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.signature`.
	 * @param ctx the parse tree
	 */
	enterSignature?: (ctx: SignatureContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.signature`.
	 * @param ctx the parse tree
	 */
	exitSignature?: (ctx: SignatureContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.ruleClauseDatapoint`.
	 * @param ctx the parse tree
	 */
	enterRuleClauseDatapoint?: (ctx: RuleClauseDatapointContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.ruleClauseDatapoint`.
	 * @param ctx the parse tree
	 */
	exitRuleClauseDatapoint?: (ctx: RuleClauseDatapointContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.ruleItemDatapoint`.
	 * @param ctx the parse tree
	 */
	enterRuleItemDatapoint?: (ctx: RuleItemDatapointContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.ruleItemDatapoint`.
	 * @param ctx the parse tree
	 */
	exitRuleItemDatapoint?: (ctx: RuleItemDatapointContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.ruleClauseHierarchical`.
	 * @param ctx the parse tree
	 */
	enterRuleClauseHierarchical?: (ctx: RuleClauseHierarchicalContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.ruleClauseHierarchical`.
	 * @param ctx the parse tree
	 */
	exitRuleClauseHierarchical?: (ctx: RuleClauseHierarchicalContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.ruleItemHierarchical`.
	 * @param ctx the parse tree
	 */
	enterRuleItemHierarchical?: (ctx: RuleItemHierarchicalContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.ruleItemHierarchical`.
	 * @param ctx the parse tree
	 */
	exitRuleItemHierarchical?: (ctx: RuleItemHierarchicalContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.hierRuleSignature`.
	 * @param ctx the parse tree
	 */
	enterHierRuleSignature?: (ctx: HierRuleSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.hierRuleSignature`.
	 * @param ctx the parse tree
	 */
	exitHierRuleSignature?: (ctx: HierRuleSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.valueDomainSignature`.
	 * @param ctx the parse tree
	 */
	enterValueDomainSignature?: (ctx: ValueDomainSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.valueDomainSignature`.
	 * @param ctx the parse tree
	 */
	exitValueDomainSignature?: (ctx: ValueDomainSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.codeItemRelation`.
	 * @param ctx the parse tree
	 */
	enterCodeItemRelation?: (ctx: CodeItemRelationContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.codeItemRelation`.
	 * @param ctx the parse tree
	 */
	exitCodeItemRelation?: (ctx: CodeItemRelationContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.codeItemRelationClause`.
	 * @param ctx the parse tree
	 */
	enterCodeItemRelationClause?: (ctx: CodeItemRelationClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.codeItemRelationClause`.
	 * @param ctx the parse tree
	 */
	exitCodeItemRelationClause?: (ctx: CodeItemRelationClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.valueDomainValue`.
	 * @param ctx the parse tree
	 */
	enterValueDomainValue?: (ctx: ValueDomainValueContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.valueDomainValue`.
	 * @param ctx the parse tree
	 */
	exitValueDomainValue?: (ctx: ValueDomainValueContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.scalarTypeConstraint`.
	 * @param ctx the parse tree
	 */
	enterScalarTypeConstraint?: (ctx: ScalarTypeConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.scalarTypeConstraint`.
	 * @param ctx the parse tree
	 */
	exitScalarTypeConstraint?: (ctx: ScalarTypeConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.compConstraint`.
	 * @param ctx the parse tree
	 */
	enterCompConstraint?: (ctx: CompConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.compConstraint`.
	 * @param ctx the parse tree
	 */
	exitCompConstraint?: (ctx: CompConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.multModifier`.
	 * @param ctx the parse tree
	 */
	enterMultModifier?: (ctx: MultModifierContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.multModifier`.
	 * @param ctx the parse tree
	 */
	exitMultModifier?: (ctx: MultModifierContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.validationOutput`.
	 * @param ctx the parse tree
	 */
	enterValidationOutput?: (ctx: ValidationOutputContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.validationOutput`.
	 * @param ctx the parse tree
	 */
	exitValidationOutput?: (ctx: ValidationOutputContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.validationMode`.
	 * @param ctx the parse tree
	 */
	enterValidationMode?: (ctx: ValidationModeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.validationMode`.
	 * @param ctx the parse tree
	 */
	exitValidationMode?: (ctx: ValidationModeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.conditionClause`.
	 * @param ctx the parse tree
	 */
	enterConditionClause?: (ctx: ConditionClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.conditionClause`.
	 * @param ctx the parse tree
	 */
	exitConditionClause?: (ctx: ConditionClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.inputMode`.
	 * @param ctx the parse tree
	 */
	enterInputMode?: (ctx: InputModeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.inputMode`.
	 * @param ctx the parse tree
	 */
	exitInputMode?: (ctx: InputModeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.imbalanceExpr`.
	 * @param ctx the parse tree
	 */
	enterImbalanceExpr?: (ctx: ImbalanceExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.imbalanceExpr`.
	 * @param ctx the parse tree
	 */
	exitImbalanceExpr?: (ctx: ImbalanceExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.inputModeHierarchy`.
	 * @param ctx the parse tree
	 */
	enterInputModeHierarchy?: (ctx: InputModeHierarchyContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.inputModeHierarchy`.
	 * @param ctx the parse tree
	 */
	exitInputModeHierarchy?: (ctx: InputModeHierarchyContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.outputModeHierarchy`.
	 * @param ctx the parse tree
	 */
	enterOutputModeHierarchy?: (ctx: OutputModeHierarchyContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.outputModeHierarchy`.
	 * @param ctx the parse tree
	 */
	exitOutputModeHierarchy?: (ctx: OutputModeHierarchyContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.alias`.
	 * @param ctx the parse tree
	 */
	enterAlias?: (ctx: AliasContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.alias`.
	 * @param ctx the parse tree
	 */
	exitAlias?: (ctx: AliasContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.varID`.
	 * @param ctx the parse tree
	 */
	enterVarID?: (ctx: VarIDContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.varID`.
	 * @param ctx the parse tree
	 */
	exitVarID?: (ctx: VarIDContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.simpleComponentId`.
	 * @param ctx the parse tree
	 */
	enterSimpleComponentId?: (ctx: SimpleComponentIdContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.simpleComponentId`.
	 * @param ctx the parse tree
	 */
	exitSimpleComponentId?: (ctx: SimpleComponentIdContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.componentID`.
	 * @param ctx the parse tree
	 */
	enterComponentID?: (ctx: ComponentIDContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.componentID`.
	 * @param ctx the parse tree
	 */
	exitComponentID?: (ctx: ComponentIDContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.lists`.
	 * @param ctx the parse tree
	 */
	enterLists?: (ctx: ListsContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.lists`.
	 * @param ctx the parse tree
	 */
	exitLists?: (ctx: ListsContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.erCode`.
	 * @param ctx the parse tree
	 */
	enterErCode?: (ctx: ErCodeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.erCode`.
	 * @param ctx the parse tree
	 */
	exitErCode?: (ctx: ErCodeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.erLevel`.
	 * @param ctx the parse tree
	 */
	enterErLevel?: (ctx: ErLevelContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.erLevel`.
	 * @param ctx the parse tree
	 */
	exitErLevel?: (ctx: ErLevelContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.comparisonOperand`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperand?: (ctx: ComparisonOperandContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.comparisonOperand`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperand?: (ctx: ComparisonOperandContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.optionalExpr`.
	 * @param ctx the parse tree
	 */
	enterOptionalExpr?: (ctx: OptionalExprContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.optionalExpr`.
	 * @param ctx the parse tree
	 */
	exitOptionalExpr?: (ctx: OptionalExprContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.componentRole`.
	 * @param ctx the parse tree
	 */
	enterComponentRole?: (ctx: ComponentRoleContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.componentRole`.
	 * @param ctx the parse tree
	 */
	exitComponentRole?: (ctx: ComponentRoleContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.viralAttribute`.
	 * @param ctx the parse tree
	 */
	enterViralAttribute?: (ctx: ViralAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.viralAttribute`.
	 * @param ctx the parse tree
	 */
	exitViralAttribute?: (ctx: ViralAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.valueDomainID`.
	 * @param ctx the parse tree
	 */
	enterValueDomainID?: (ctx: ValueDomainIDContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.valueDomainID`.
	 * @param ctx the parse tree
	 */
	exitValueDomainID?: (ctx: ValueDomainIDContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.operatorID`.
	 * @param ctx the parse tree
	 */
	enterOperatorID?: (ctx: OperatorIDContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.operatorID`.
	 * @param ctx the parse tree
	 */
	exitOperatorID?: (ctx: OperatorIDContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.routineName`.
	 * @param ctx the parse tree
	 */
	enterRoutineName?: (ctx: RoutineNameContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.routineName`.
	 * @param ctx the parse tree
	 */
	exitRoutineName?: (ctx: RoutineNameContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.basicScalarType`.
	 * @param ctx the parse tree
	 */
	enterBasicScalarType?: (ctx: BasicScalarTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.basicScalarType`.
	 * @param ctx the parse tree
	 */
	exitBasicScalarType?: (ctx: BasicScalarTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VtlParser.retainType`.
	 * @param ctx the parse tree
	 */
	enterRetainType?: (ctx: RetainTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VtlParser.retainType`.
	 * @param ctx the parse tree
	 */
	exitRetainType?: (ctx: RetainTypeContext) => void;
}

