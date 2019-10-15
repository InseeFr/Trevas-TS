// Generated from vtl-sources/Vtl-2.0-Insee/Vtl.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4');

// This class defines a complete generic visitor for a parse tree produced by VtlParser.

function VtlVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

VtlVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
VtlVisitor.prototype.constructor = VtlVisitor;

// Visit a parse tree produced by VtlParser#start.
VtlVisitor.prototype.visitStart = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#temporaryAssignment.
VtlVisitor.prototype.visitTemporaryAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#persistAssignment.
VtlVisitor.prototype.visitPersistAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#defineExpression.
VtlVisitor.prototype.visitDefineExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#varIdExpr.
VtlVisitor.prototype.visitVarIdExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#membershipExpr.
VtlVisitor.prototype.visitMembershipExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#inNotInExpr.
VtlVisitor.prototype.visitInNotInExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#booleanExpr.
VtlVisitor.prototype.visitBooleanExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#comparisonExpr.
VtlVisitor.prototype.visitComparisonExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#concatExpr.
VtlVisitor.prototype.visitConcatExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#unaryExpr.
VtlVisitor.prototype.visitUnaryExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#notExpr.
VtlVisitor.prototype.visitNotExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#functionsExpression.
VtlVisitor.prototype.visitFunctionsExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#ifExpr.
VtlVisitor.prototype.visitIfExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#clauseExpr.
VtlVisitor.prototype.visitClauseExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#arithmeticExpr.
VtlVisitor.prototype.visitArithmeticExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#parenthesisExpr.
VtlVisitor.prototype.visitParenthesisExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#constantExpr.
VtlVisitor.prototype.visitConstantExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#joinFunctions.
VtlVisitor.prototype.visitJoinFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#genericFunctions.
VtlVisitor.prototype.visitGenericFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#stringFunctions.
VtlVisitor.prototype.visitStringFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#numericFunctions.
VtlVisitor.prototype.visitNumericFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#comparisonFunctions.
VtlVisitor.prototype.visitComparisonFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#timeFunctions.
VtlVisitor.prototype.visitTimeFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#setFunctions.
VtlVisitor.prototype.visitSetFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#hierarchyFunctions.
VtlVisitor.prototype.visitHierarchyFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#validationFunctions.
VtlVisitor.prototype.visitValidationFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#conditionalFunctions.
VtlVisitor.prototype.visitConditionalFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#aggregateFunctions.
VtlVisitor.prototype.visitAggregateFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#analyticFunctions.
VtlVisitor.prototype.visitAnalyticFunctions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#datasetClause.
VtlVisitor.prototype.visitDatasetClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#renameClause.
VtlVisitor.prototype.visitRenameClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#aggrClause.
VtlVisitor.prototype.visitAggrClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#filterClause.
VtlVisitor.prototype.visitFilterClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#calcClause.
VtlVisitor.prototype.visitCalcClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#keepClause.
VtlVisitor.prototype.visitKeepClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#dropClause.
VtlVisitor.prototype.visitDropClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#pivotClause.
VtlVisitor.prototype.visitPivotClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#customPivotClause.
VtlVisitor.prototype.visitCustomPivotClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#unipivotClause.
VtlVisitor.prototype.visitUnipivotClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#subspaceClause.
VtlVisitor.prototype.visitSubspaceClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#joinExpr.
VtlVisitor.prototype.visitJoinExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#defOperator.
VtlVisitor.prototype.visitDefOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#defDatapointRuleset.
VtlVisitor.prototype.visitDefDatapointRuleset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#defHierarchical.
VtlVisitor.prototype.visitDefHierarchical = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#callFunctionAtom.
VtlVisitor.prototype.visitCallFunctionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#evalAtom.
VtlVisitor.prototype.visitEvalAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#castExpr.
VtlVisitor.prototype.visitCastExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#parameter.
VtlVisitor.prototype.visitParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#trimAtom.
VtlVisitor.prototype.visitTrimAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#ltrimAtom.
VtlVisitor.prototype.visitLtrimAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#rtrimAtom.
VtlVisitor.prototype.visitRtrimAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#ucaseAtom.
VtlVisitor.prototype.visitUcaseAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#lcaseAtom.
VtlVisitor.prototype.visitLcaseAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#substrAtom.
VtlVisitor.prototype.visitSubstrAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#replaceAtom.
VtlVisitor.prototype.visitReplaceAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#instrAtom.
VtlVisitor.prototype.visitInstrAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#lenAtom.
VtlVisitor.prototype.visitLenAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#modAtom.
VtlVisitor.prototype.visitModAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#roundAtom.
VtlVisitor.prototype.visitRoundAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#lnAtom.
VtlVisitor.prototype.visitLnAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#ceilAtom.
VtlVisitor.prototype.visitCeilAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#floorAtom.
VtlVisitor.prototype.visitFloorAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#minAtom.
VtlVisitor.prototype.visitMinAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#expAtom.
VtlVisitor.prototype.visitExpAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#powerAtom.
VtlVisitor.prototype.visitPowerAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#logAtom.
VtlVisitor.prototype.visitLogAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#sqrtAtom.
VtlVisitor.prototype.visitSqrtAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#betweenAtom.
VtlVisitor.prototype.visitBetweenAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#charsetMatchAtom.
VtlVisitor.prototype.visitCharsetMatchAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#isNullAtom.
VtlVisitor.prototype.visitIsNullAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#existInAtom.
VtlVisitor.prototype.visitExistInAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#periodAtom.
VtlVisitor.prototype.visitPeriodAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#fillTimeAtom.
VtlVisitor.prototype.visitFillTimeAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#flowToStockAtom.
VtlVisitor.prototype.visitFlowToStockAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#stockToFlowAtom.
VtlVisitor.prototype.visitStockToFlowAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#timeShiftAtom.
VtlVisitor.prototype.visitTimeShiftAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#timeAggAtom.
VtlVisitor.prototype.visitTimeAggAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#currentDateAtom.
VtlVisitor.prototype.visitCurrentDateAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#unionAtom.
VtlVisitor.prototype.visitUnionAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#intersectAtom.
VtlVisitor.prototype.visitIntersectAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#setDiffAtom.
VtlVisitor.prototype.visitSetDiffAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#symDiffAtom.
VtlVisitor.prototype.visitSymDiffAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#hierarchyOperators.
VtlVisitor.prototype.visitHierarchyOperators = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#validateDPruleset.
VtlVisitor.prototype.visitValidateDPruleset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#validateHRruleset.
VtlVisitor.prototype.visitValidateHRruleset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#validationSimple.
VtlVisitor.prototype.visitValidationSimple = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#nvlAtom.
VtlVisitor.prototype.visitNvlAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#sumAggrComp.
VtlVisitor.prototype.visitSumAggrComp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#avgAggrComp.
VtlVisitor.prototype.visitAvgAggrComp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#countAggrComp.
VtlVisitor.prototype.visitCountAggrComp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#medianAggrComp.
VtlVisitor.prototype.visitMedianAggrComp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#minAggrComp.
VtlVisitor.prototype.visitMinAggrComp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#maxAggrComp.
VtlVisitor.prototype.visitMaxAggrComp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#stddevPopAggrComp.
VtlVisitor.prototype.visitStddevPopAggrComp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#stddevSampAggrComp.
VtlVisitor.prototype.visitStddevSampAggrComp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#varPopAggrComp.
VtlVisitor.prototype.visitVarPopAggrComp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#varSampAggrComp.
VtlVisitor.prototype.visitVarSampAggrComp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#sumAggr.
VtlVisitor.prototype.visitSumAggr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#avgAggr.
VtlVisitor.prototype.visitAvgAggr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#countAggr.
VtlVisitor.prototype.visitCountAggr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#medianAggr.
VtlVisitor.prototype.visitMedianAggr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#minAggr.
VtlVisitor.prototype.visitMinAggr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#maxAggr.
VtlVisitor.prototype.visitMaxAggr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#stddevPopAggr.
VtlVisitor.prototype.visitStddevPopAggr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#stddevSampAggr.
VtlVisitor.prototype.visitStddevSampAggr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#varPopAggr.
VtlVisitor.prototype.visitVarPopAggr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#varSampAggr.
VtlVisitor.prototype.visitVarSampAggr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#sumAn.
VtlVisitor.prototype.visitSumAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#avgAn.
VtlVisitor.prototype.visitAvgAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#countAn.
VtlVisitor.prototype.visitCountAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#medianAn.
VtlVisitor.prototype.visitMedianAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#minAn.
VtlVisitor.prototype.visitMinAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#maxAn.
VtlVisitor.prototype.visitMaxAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#stddevPopAn.
VtlVisitor.prototype.visitStddevPopAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#stddevSampAn.
VtlVisitor.prototype.visitStddevSampAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#varPopAn.
VtlVisitor.prototype.visitVarPopAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#varSampAn.
VtlVisitor.prototype.visitVarSampAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#firstValueAn.
VtlVisitor.prototype.visitFirstValueAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#lastValueAn.
VtlVisitor.prototype.visitLastValueAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#lagAn.
VtlVisitor.prototype.visitLagAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#leadAn.
VtlVisitor.prototype.visitLeadAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#rankAn.
VtlVisitor.prototype.visitRankAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#ratioToReportAn.
VtlVisitor.prototype.visitRatioToReportAn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#renameClauseItem.
VtlVisitor.prototype.visitRenameClauseItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#componentMembership.
VtlVisitor.prototype.visitComponentMembership = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#component.
VtlVisitor.prototype.visitComponent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#aggregateClause.
VtlVisitor.prototype.visitAggregateClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#aggrFunctionClause.
VtlVisitor.prototype.visitAggrFunctionClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#calcClauseItem.
VtlVisitor.prototype.visitCalcClauseItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#subspaceClauseItem.
VtlVisitor.prototype.visitSubspaceClauseItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#joinClauseWithoutUsing.
VtlVisitor.prototype.visitJoinClauseWithoutUsing = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#joinClause.
VtlVisitor.prototype.visitJoinClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#joinClauseItem.
VtlVisitor.prototype.visitJoinClauseItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#joinBody.
VtlVisitor.prototype.visitJoinBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#joinApplyClause.
VtlVisitor.prototype.visitJoinApplyClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#partitionByClause.
VtlVisitor.prototype.visitPartitionByClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#orderByClause.
VtlVisitor.prototype.visitOrderByClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#orderByItem.
VtlVisitor.prototype.visitOrderByItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#windowingClause.
VtlVisitor.prototype.visitWindowingClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#limitClauseItem.
VtlVisitor.prototype.visitLimitClauseItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#groupByOrExcept.
VtlVisitor.prototype.visitGroupByOrExcept = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#groupAll.
VtlVisitor.prototype.visitGroupAll = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#havingClause.
VtlVisitor.prototype.visitHavingClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#parameterItem.
VtlVisitor.prototype.visitParameterItem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#outputParameterType.
VtlVisitor.prototype.visitOutputParameterType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#inputParameterType.
VtlVisitor.prototype.visitInputParameterType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#rulesetType.
VtlVisitor.prototype.visitRulesetType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#scalarType.
VtlVisitor.prototype.visitScalarType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#componentType.
VtlVisitor.prototype.visitComponentType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#datasetType.
VtlVisitor.prototype.visitDatasetType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#scalarSetType.
VtlVisitor.prototype.visitScalarSetType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#dataPoint.
VtlVisitor.prototype.visitDataPoint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#dataPointVd.
VtlVisitor.prototype.visitDataPointVd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#dataPointVar.
VtlVisitor.prototype.visitDataPointVar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#hrRulesetType.
VtlVisitor.prototype.visitHrRulesetType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#hrRulesetVdType.
VtlVisitor.prototype.visitHrRulesetVdType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#hrRulesetVarType.
VtlVisitor.prototype.visitHrRulesetVarType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#valueDomainName.
VtlVisitor.prototype.visitValueDomainName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#rulesetID.
VtlVisitor.prototype.visitRulesetID = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#rulesetSignature.
VtlVisitor.prototype.visitRulesetSignature = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#signature.
VtlVisitor.prototype.visitSignature = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#ruleClauseDatapoint.
VtlVisitor.prototype.visitRuleClauseDatapoint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#ruleItemDatapoint.
VtlVisitor.prototype.visitRuleItemDatapoint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#ruleClauseHierarchical.
VtlVisitor.prototype.visitRuleClauseHierarchical = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#ruleItemHierarchical.
VtlVisitor.prototype.visitRuleItemHierarchical = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#hierRuleSignature.
VtlVisitor.prototype.visitHierRuleSignature = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#valueDomainSignature.
VtlVisitor.prototype.visitValueDomainSignature = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#codeItemRelation.
VtlVisitor.prototype.visitCodeItemRelation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#codeItemRelationClause.
VtlVisitor.prototype.visitCodeItemRelationClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#conditionConstraint.
VtlVisitor.prototype.visitConditionConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#rangeConstraint.
VtlVisitor.prototype.visitRangeConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#compConstraint.
VtlVisitor.prototype.visitCompConstraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#multModifier.
VtlVisitor.prototype.visitMultModifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#validationOutput.
VtlVisitor.prototype.visitValidationOutput = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#validationMode.
VtlVisitor.prototype.visitValidationMode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#conditionClause.
VtlVisitor.prototype.visitConditionClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#inputMode.
VtlVisitor.prototype.visitInputMode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#imbalanceExpr.
VtlVisitor.prototype.visitImbalanceExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#inputModeHierarchy.
VtlVisitor.prototype.visitInputModeHierarchy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#outputModeHierarchy.
VtlVisitor.prototype.visitOutputModeHierarchy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#alias.
VtlVisitor.prototype.visitAlias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#varID.
VtlVisitor.prototype.visitVarID = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#componentID.
VtlVisitor.prototype.visitComponentID = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#lists.
VtlVisitor.prototype.visitLists = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#erCode.
VtlVisitor.prototype.visitErCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#erLevel.
VtlVisitor.prototype.visitErLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#comparisonOperand.
VtlVisitor.prototype.visitComparisonOperand = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#optionalExpr.
VtlVisitor.prototype.visitOptionalExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#componentRole.
VtlVisitor.prototype.visitComponentRole = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#viralAttribute.
VtlVisitor.prototype.visitViralAttribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#valueDomainID.
VtlVisitor.prototype.visitValueDomainID = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#operatorID.
VtlVisitor.prototype.visitOperatorID = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#routineName.
VtlVisitor.prototype.visitRoutineName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#groupKeyword.
VtlVisitor.prototype.visitGroupKeyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#constant.
VtlVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#basicScalarType.
VtlVisitor.prototype.visitBasicScalarType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VtlParser#retainType.
VtlVisitor.prototype.visitRetainType = function(ctx) {
  return this.visitChildren(ctx);
};



exports.VtlVisitor = VtlVisitor;