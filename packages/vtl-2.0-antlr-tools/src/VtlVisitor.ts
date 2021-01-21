// Generated from ../../vtl-sources/Vtl-2.0/Vtl.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `VtlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface VtlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `joinFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinFunctions?: (ctx: JoinFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `genericFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericFunctions?: (ctx: GenericFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringFunctions?: (ctx: StringFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `numericFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericFunctions?: (ctx: NumericFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparisonFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonFunctions?: (ctx: ComparisonFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeFunctions?: (ctx: TimeFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `setFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetFunctions?: (ctx: SetFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `hierarchyFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierarchyFunctions?: (ctx: HierarchyFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `validationFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidationFunctions?: (ctx: ValidationFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `conditionalFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalFunctions?: (ctx: ConditionalFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `aggregateFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregateFunctions?: (ctx: AggregateFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `analyticFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalyticFunctions?: (ctx: AnalyticFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `distanceFunctions`
	 * labeled alternative in `VtlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistanceFunctions?: (ctx: DistanceFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `aggrDataset`
	 * labeled alternative in `VtlParser.aggrOperatorsGrouping`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggrDataset?: (ctx: AggrDatasetContext) => Result;

	/**
	 * Visit a parse tree produced by the `periodAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPeriodAtom?: (ctx: PeriodAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `fillTimeAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFillTimeAtom?: (ctx: FillTimeAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `flowAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowAtom?: (ctx: FlowAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeShiftAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeShiftAtom?: (ctx: TimeShiftAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeAggAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeAggAtom?: (ctx: TimeAggAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentDateAtom`
	 * labeled alternative in `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentDateAtom?: (ctx: CurrentDateAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `callDataset`
	 * labeled alternative in `VtlParser.genericOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallDataset?: (ctx: CallDatasetContext) => Result;

	/**
	 * Visit a parse tree produced by the `evalAtom`
	 * labeled alternative in `VtlParser.genericOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvalAtom?: (ctx: EvalAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `castExprDataset`
	 * labeled alternative in `VtlParser.genericOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExprDataset?: (ctx: CastExprDatasetContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryNumeric`
	 * labeled alternative in `VtlParser.numericOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryNumeric?: (ctx: UnaryNumericContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryWithOptionalNumeric`
	 * labeled alternative in `VtlParser.numericOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryWithOptionalNumeric?: (ctx: UnaryWithOptionalNumericContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryNumeric`
	 * labeled alternative in `VtlParser.numericOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryNumeric?: (ctx: BinaryNumericContext) => Result;

	/**
	 * Visit a parse tree produced by the `anSimpleFunction`
	 * labeled alternative in `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnSimpleFunction?: (ctx: AnSimpleFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `lagOrLeadAn`
	 * labeled alternative in `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLagOrLeadAn?: (ctx: LagOrLeadAnContext) => Result;

	/**
	 * Visit a parse tree produced by the `ratioToReportAn`
	 * labeled alternative in `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRatioToReportAn?: (ctx: RatioToReportAnContext) => Result;

	/**
	 * Visit a parse tree produced by the `betweenAtom`
	 * labeled alternative in `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetweenAtom?: (ctx: BetweenAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `charsetMatchAtom`
	 * labeled alternative in `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharsetMatchAtom?: (ctx: CharsetMatchAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `isNullAtom`
	 * labeled alternative in `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsNullAtom?: (ctx: IsNullAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `existInAtom`
	 * labeled alternative in `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistInAtom?: (ctx: ExistInAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `validateDPruleset`
	 * labeled alternative in `VtlParser.validationOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidateDPruleset?: (ctx: ValidateDPrulesetContext) => Result;

	/**
	 * Visit a parse tree produced by the `validateHRruleset`
	 * labeled alternative in `VtlParser.validationOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidateHRruleset?: (ctx: ValidateHRrulesetContext) => Result;

	/**
	 * Visit a parse tree produced by the `validationSimple`
	 * labeled alternative in `VtlParser.validationOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidationSimple?: (ctx: ValidationSimpleContext) => Result;

	/**
	 * Visit a parse tree produced by the `conditionConstraint`
	 * labeled alternative in `VtlParser.scalarTypeConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionConstraint?: (ctx: ConditionConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by the `rangeConstraint`
	 * labeled alternative in `VtlParser.scalarTypeConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeConstraint?: (ctx: RangeConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by the `nvlAtom`
	 * labeled alternative in `VtlParser.conditionalOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNvlAtom?: (ctx: NvlAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `joinExpr`
	 * labeled alternative in `VtlParser.joinOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinExpr?: (ctx: JoinExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataPoint`
	 * labeled alternative in `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataPoint?: (ctx: DataPointContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataPointVd`
	 * labeled alternative in `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataPointVd?: (ctx: DataPointVdContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataPointVar`
	 * labeled alternative in `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataPointVar?: (ctx: DataPointVarContext) => Result;

	/**
	 * Visit a parse tree produced by the `groupByOrExcept`
	 * labeled alternative in `VtlParser.groupingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByOrExcept?: (ctx: GroupByOrExceptContext) => Result;

	/**
	 * Visit a parse tree produced by the `groupAll`
	 * labeled alternative in `VtlParser.groupingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupAll?: (ctx: GroupAllContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryStringFunction`
	 * labeled alternative in `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryStringFunction?: (ctx: UnaryStringFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `substrAtom`
	 * labeled alternative in `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstrAtom?: (ctx: SubstrAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `replaceAtom`
	 * labeled alternative in `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceAtom?: (ctx: ReplaceAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `instrAtom`
	 * labeled alternative in `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstrAtom?: (ctx: InstrAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `defOperator`
	 * labeled alternative in `VtlParser.defOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefOperator?: (ctx: DefOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by the `defDatapointRuleset`
	 * labeled alternative in `VtlParser.defOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefDatapointRuleset?: (ctx: DefDatapointRulesetContext) => Result;

	/**
	 * Visit a parse tree produced by the `defHierarchical`
	 * labeled alternative in `VtlParser.defOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefHierarchical?: (ctx: DefHierarchicalContext) => Result;

	/**
	 * Visit a parse tree produced by the `unionAtom`
	 * labeled alternative in `VtlParser.setOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionAtom?: (ctx: UnionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `intersectAtom`
	 * labeled alternative in `VtlParser.setOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntersectAtom?: (ctx: IntersectAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `setOrSYmDiffAtom`
	 * labeled alternative in `VtlParser.setOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOrSYmDiffAtom?: (ctx: SetOrSYmDiffAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `temporaryAssignment`
	 * labeled alternative in `VtlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemporaryAssignment?: (ctx: TemporaryAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `persistAssignment`
	 * labeled alternative in `VtlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPersistAssignment?: (ctx: PersistAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `defineExpression`
	 * labeled alternative in `VtlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefineExpression?: (ctx: DefineExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesisExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisExpr?: (ctx: ParenthesisExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionsExpression`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionsExpression?: (ctx: FunctionsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `clauseExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClauseExpr?: (ctx: ClauseExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `membershipExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMembershipExpr?: (ctx: MembershipExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpr?: (ctx: UnaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticExpr?: (ctx: ArithmeticExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticExprOrConcat`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticExprOrConcat?: (ctx: ArithmeticExprOrConcatContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparisonExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonExpr?: (ctx: ComparisonExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `inNotInExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInNotInExpr?: (ctx: InNotInExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpr?: (ctx: BooleanExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ifExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExpr?: (ctx: IfExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpr?: (ctx: ConstantExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `varIdExpr`
	 * labeled alternative in `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarIdExpr?: (ctx: VarIdExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `hrRulesetType`
	 * labeled alternative in `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHrRulesetType?: (ctx: HrRulesetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `hrRulesetVdType`
	 * labeled alternative in `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHrRulesetVdType?: (ctx: HrRulesetVdTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `hrRulesetVarType`
	 * labeled alternative in `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHrRulesetVarType?: (ctx: HrRulesetVarTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `levenshteinAtom`
	 * labeled alternative in `VtlParser.distanceOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevenshteinAtom?: (ctx: LevenshteinAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctions?: (ctx: FunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.datasetClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatasetClause?: (ctx: DatasetClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.renameClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameClause?: (ctx: RenameClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.aggrClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggrClause?: (ctx: AggrClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.filterClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilterClause?: (ctx: FilterClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.calcClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalcClause?: (ctx: CalcClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.keepOrDropClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeepOrDropClause?: (ctx: KeepOrDropClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.pivotOrUnpivotClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPivotOrUnpivotClause?: (ctx: PivotOrUnpivotClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.customPivotClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCustomPivotClause?: (ctx: CustomPivotClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.subspaceClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubspaceClause?: (ctx: SubspaceClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinOperators?: (ctx: JoinOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.defOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefOperators?: (ctx: DefOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.genericOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericOperators?: (ctx: GenericOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.stringOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringOperators?: (ctx: StringOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.numericOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericOperators?: (ctx: NumericOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperators?: (ctx: ComparisonOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.timeOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeOperators?: (ctx: TimeOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.setOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperators?: (ctx: SetOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.hierarchyOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierarchyOperators?: (ctx: HierarchyOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.validationOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidationOperators?: (ctx: ValidationOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.conditionalOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalOperators?: (ctx: ConditionalOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.aggrOperatorsGrouping`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggrOperatorsGrouping?: (ctx: AggrOperatorsGroupingContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.anFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnFunction?: (ctx: AnFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.distanceOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistanceOperators?: (ctx: DistanceOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.renameClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameClauseItem?: (ctx: RenameClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.aggregateClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregateClause?: (ctx: AggregateClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.aggrFunctionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggrFunctionClause?: (ctx: AggrFunctionClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.calcClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalcClauseItem?: (ctx: CalcClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.subspaceClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubspaceClauseItem?: (ctx: SubspaceClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinClauseWithoutUsing`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinClauseWithoutUsing?: (ctx: JoinClauseWithoutUsingContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinClause?: (ctx: JoinClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinClauseItem?: (ctx: JoinClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinBody?: (ctx: JoinBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.joinApplyClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinApplyClause?: (ctx: JoinApplyClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.partitionByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionByClause?: (ctx: PartitionByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.orderByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByClause?: (ctx: OrderByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.orderByItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByItem?: (ctx: OrderByItemContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.windowingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowingClause?: (ctx: WindowingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.signedInteger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedInteger?: (ctx: SignedIntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.limitClauseItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClauseItem?: (ctx: LimitClauseItemContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.groupingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingClause?: (ctx: GroupingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.havingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHavingClause?: (ctx: HavingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.parameterItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterItem?: (ctx: ParameterItemContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.outputParameterType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputParameterType?: (ctx: OutputParameterTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.outputParameterTypeComponent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputParameterTypeComponent?: (ctx: OutputParameterTypeComponentContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.inputParameterType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputParameterType?: (ctx: InputParameterTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.rulesetType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRulesetType?: (ctx: RulesetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.scalarType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarType?: (ctx: ScalarTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.componentType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentType?: (ctx: ComponentTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.datasetType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatasetType?: (ctx: DatasetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.scalarSetType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarSetType?: (ctx: ScalarSetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.dpRuleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDpRuleset?: (ctx: DpRulesetContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.hrRuleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHrRuleset?: (ctx: HrRulesetContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.valueDomainName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueDomainName?: (ctx: ValueDomainNameContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.rulesetID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRulesetID?: (ctx: RulesetIDContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.rulesetSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRulesetSignature?: (ctx: RulesetSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.signature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignature?: (ctx: SignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.ruleClauseDatapoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleClauseDatapoint?: (ctx: RuleClauseDatapointContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.ruleItemDatapoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleItemDatapoint?: (ctx: RuleItemDatapointContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.ruleClauseHierarchical`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleClauseHierarchical?: (ctx: RuleClauseHierarchicalContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.ruleItemHierarchical`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleItemHierarchical?: (ctx: RuleItemHierarchicalContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.hierRuleSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHierRuleSignature?: (ctx: HierRuleSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.valueDomainSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueDomainSignature?: (ctx: ValueDomainSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.codeItemRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeItemRelation?: (ctx: CodeItemRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.codeItemRelationClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeItemRelationClause?: (ctx: CodeItemRelationClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.valueDomainValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueDomainValue?: (ctx: ValueDomainValueContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.scalarTypeConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarTypeConstraint?: (ctx: ScalarTypeConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.compConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompConstraint?: (ctx: CompConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.multModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultModifier?: (ctx: MultModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.validationOutput`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidationOutput?: (ctx: ValidationOutputContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.validationMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidationMode?: (ctx: ValidationModeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.conditionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionClause?: (ctx: ConditionClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.inputMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputMode?: (ctx: InputModeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.imbalanceExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImbalanceExpr?: (ctx: ImbalanceExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.inputModeHierarchy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputModeHierarchy?: (ctx: InputModeHierarchyContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.outputModeHierarchy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputModeHierarchy?: (ctx: OutputModeHierarchyContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlias?: (ctx: AliasContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.varID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarID?: (ctx: VarIDContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.simpleComponentId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleComponentId?: (ctx: SimpleComponentIdContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.componentID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentID?: (ctx: ComponentIDContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.lists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLists?: (ctx: ListsContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.erCode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErCode?: (ctx: ErCodeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.erLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErLevel?: (ctx: ErLevelContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.comparisonOperand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperand?: (ctx: ComparisonOperandContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.optionalExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalExpr?: (ctx: OptionalExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.componentRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentRole?: (ctx: ComponentRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.viralAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViralAttribute?: (ctx: ViralAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.valueDomainID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueDomainID?: (ctx: ValueDomainIDContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.operatorID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorID?: (ctx: OperatorIDContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.routineName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutineName?: (ctx: RoutineNameContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.basicScalarType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicScalarType?: (ctx: BasicScalarTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VtlParser.retainType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRetainType?: (ctx: RetainTypeContext) => Result;
}

