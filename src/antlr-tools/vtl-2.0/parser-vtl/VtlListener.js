// Generated from Vtl.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4');

// This class defines a complete listener for a parse tree produced by VtlParser.
function VtlListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

VtlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
VtlListener.prototype.constructor = VtlListener;

// Enter a parse tree produced by VtlParser#start.
VtlListener.prototype.enterStart = function(ctx) {};

// Exit a parse tree produced by VtlParser#start.
VtlListener.prototype.exitStart = function(ctx) {};

// Enter a parse tree produced by VtlParser#statement.
VtlListener.prototype.enterStatement = function(ctx) {};

// Exit a parse tree produced by VtlParser#statement.
VtlListener.prototype.exitStatement = function(ctx) {};

// Enter a parse tree produced by VtlParser#persistentAssignment.
VtlListener.prototype.enterPersistentAssignment = function(ctx) {};

// Exit a parse tree produced by VtlParser#persistentAssignment.
VtlListener.prototype.exitPersistentAssignment = function(ctx) {};

// Enter a parse tree produced by VtlParser#optionalExpr.
VtlListener.prototype.enterOptionalExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#optionalExpr.
VtlListener.prototype.exitOptionalExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#expr.
VtlListener.prototype.enterExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#expr.
VtlListener.prototype.exitExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#exprValidationExpr.
VtlListener.prototype.enterExprValidationExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#exprValidationExpr.
VtlListener.prototype.exitExprValidationExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#definitionExpressions.
VtlListener.prototype.enterDefinitionExpressions = function(ctx) {};

// Exit a parse tree produced by VtlParser#definitionExpressions.
VtlListener.prototype.exitDefinitionExpressions = function(ctx) {};

// Enter a parse tree produced by VtlParser#standaloneAggregateFunction.
VtlListener.prototype.enterStandaloneAggregateFunction = function(ctx) {};

// Exit a parse tree produced by VtlParser#standaloneAggregateFunction.
VtlListener.prototype.exitStandaloneAggregateFunction = function(ctx) {};

// Enter a parse tree produced by VtlParser#componentExpressionwithAggrClause.
VtlListener.prototype.enterComponentExpressionwithAggrClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#componentExpressionwithAggrClause.
VtlListener.prototype.exitComponentExpressionwithAggrClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#standaloneAnalyticFunction.
VtlListener.prototype.enterStandaloneAnalyticFunction = function(ctx) {};

// Exit a parse tree produced by VtlParser#standaloneAnalyticFunction.
VtlListener.prototype.exitStandaloneAnalyticFunction = function(ctx) {};

// Enter a parse tree produced by VtlParser#simpleaggregateFunctions.
VtlListener.prototype.enterSimpleaggregateFunctions = function(ctx) {};

// Exit a parse tree produced by VtlParser#simpleaggregateFunctions.
VtlListener.prototype.exitSimpleaggregateFunctions = function(ctx) {};

// Enter a parse tree produced by VtlParser#timeexpressions.
VtlListener.prototype.enterTimeexpressions = function(ctx) {};

// Exit a parse tree produced by VtlParser#timeexpressions.
VtlListener.prototype.exitTimeexpressions = function(ctx) {};

// Enter a parse tree produced by VtlParser#setExpressions.
VtlListener.prototype.enterSetExpressions = function(ctx) {};

// Exit a parse tree produced by VtlParser#setExpressions.
VtlListener.prototype.exitSetExpressions = function(ctx) {};

// Enter a parse tree produced by VtlParser#callFunctionExpression.
VtlListener.prototype.enterCallFunctionExpression = function(ctx) {};

// Exit a parse tree produced by VtlParser#callFunctionExpression.
VtlListener.prototype.exitCallFunctionExpression = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinExpression.
VtlListener.prototype.enterJoinExpression = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinExpression.
VtlListener.prototype.exitJoinExpression = function(ctx) {};

// Enter a parse tree produced by VtlParser#timeExpr.
VtlListener.prototype.enterTimeExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#timeExpr.
VtlListener.prototype.exitTimeExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#defHierarchical.
VtlListener.prototype.enterDefHierarchical = function(ctx) {};

// Exit a parse tree produced by VtlParser#defHierarchical.
VtlListener.prototype.exitDefHierarchical = function(ctx) {};

// Enter a parse tree produced by VtlParser#ruleClauseHierarchical.
VtlListener.prototype.enterRuleClauseHierarchical = function(ctx) {};

// Exit a parse tree produced by VtlParser#ruleClauseHierarchical.
VtlListener.prototype.exitRuleClauseHierarchical = function(ctx) {};

// Enter a parse tree produced by VtlParser#ruleItemHierarchical.
VtlListener.prototype.enterRuleItemHierarchical = function(ctx) {};

// Exit a parse tree produced by VtlParser#ruleItemHierarchical.
VtlListener.prototype.exitRuleItemHierarchical = function(ctx) {};

// Enter a parse tree produced by VtlParser#hierRuleSignature.
VtlListener.prototype.enterHierRuleSignature = function(ctx) {};

// Exit a parse tree produced by VtlParser#hierRuleSignature.
VtlListener.prototype.exitHierRuleSignature = function(ctx) {};

// Enter a parse tree produced by VtlParser#valueDomainSignature.
VtlListener.prototype.enterValueDomainSignature = function(ctx) {};

// Exit a parse tree produced by VtlParser#valueDomainSignature.
VtlListener.prototype.exitValueDomainSignature = function(ctx) {};

// Enter a parse tree produced by VtlParser#codeItemRelation.
VtlListener.prototype.enterCodeItemRelation = function(ctx) {};

// Exit a parse tree produced by VtlParser#codeItemRelation.
VtlListener.prototype.exitCodeItemRelation = function(ctx) {};

// Enter a parse tree produced by VtlParser#codeItemRelationClause.
VtlListener.prototype.enterCodeItemRelationClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#codeItemRelationClause.
VtlListener.prototype.exitCodeItemRelationClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#codeItemRef.
VtlListener.prototype.enterCodeItemRef = function(ctx) {};

// Exit a parse tree produced by VtlParser#codeItemRef.
VtlListener.prototype.exitCodeItemRef = function(ctx) {};

// Enter a parse tree produced by VtlParser#defDatapoint.
VtlListener.prototype.enterDefDatapoint = function(ctx) {};

// Exit a parse tree produced by VtlParser#defDatapoint.
VtlListener.prototype.exitDefDatapoint = function(ctx) {};

// Enter a parse tree produced by VtlParser#ruleClauseDatapoint.
VtlListener.prototype.enterRuleClauseDatapoint = function(ctx) {};

// Exit a parse tree produced by VtlParser#ruleClauseDatapoint.
VtlListener.prototype.exitRuleClauseDatapoint = function(ctx) {};

// Enter a parse tree produced by VtlParser#ruleItemDatapoint.
VtlListener.prototype.enterRuleItemDatapoint = function(ctx) {};

// Exit a parse tree produced by VtlParser#ruleItemDatapoint.
VtlListener.prototype.exitRuleItemDatapoint = function(ctx) {};

// Enter a parse tree produced by VtlParser#rulesetSignature.
VtlListener.prototype.enterRulesetSignature = function(ctx) {};

// Exit a parse tree produced by VtlParser#rulesetSignature.
VtlListener.prototype.exitRulesetSignature = function(ctx) {};

// Enter a parse tree produced by VtlParser#varSignature.
VtlListener.prototype.enterVarSignature = function(ctx) {};

// Exit a parse tree produced by VtlParser#varSignature.
VtlListener.prototype.exitVarSignature = function(ctx) {};

// Enter a parse tree produced by VtlParser#defExpr.
VtlListener.prototype.enterDefExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#defExpr.
VtlListener.prototype.exitDefExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#defOperator.
VtlListener.prototype.enterDefOperator = function(ctx) {};

// Exit a parse tree produced by VtlParser#defOperator.
VtlListener.prototype.exitDefOperator = function(ctx) {};

// Enter a parse tree produced by VtlParser#parameterItem.
VtlListener.prototype.enterParameterItem = function(ctx) {};

// Exit a parse tree produced by VtlParser#parameterItem.
VtlListener.prototype.exitParameterItem = function(ctx) {};

// Enter a parse tree produced by VtlParser#callFunction.
VtlListener.prototype.enterCallFunction = function(ctx) {};

// Exit a parse tree produced by VtlParser#callFunction.
VtlListener.prototype.exitCallFunction = function(ctx) {};

// Enter a parse tree produced by VtlParser#roundAtom.
VtlListener.prototype.enterRoundAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#roundAtom.
VtlListener.prototype.exitRoundAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#ceilAtom.
VtlListener.prototype.enterCeilAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#ceilAtom.
VtlListener.prototype.exitCeilAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#floorAtom.
VtlListener.prototype.enterFloorAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#floorAtom.
VtlListener.prototype.exitFloorAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#minAtom.
VtlListener.prototype.enterMinAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#minAtom.
VtlListener.prototype.exitMinAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#expAtom.
VtlListener.prototype.enterExpAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#expAtom.
VtlListener.prototype.exitExpAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#lnAtom.
VtlListener.prototype.enterLnAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#lnAtom.
VtlListener.prototype.exitLnAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#logAtom.
VtlListener.prototype.enterLogAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#logAtom.
VtlListener.prototype.exitLogAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#powerAtom.
VtlListener.prototype.enterPowerAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#powerAtom.
VtlListener.prototype.exitPowerAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#sqrtAtom.
VtlListener.prototype.enterSqrtAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#sqrtAtom.
VtlListener.prototype.exitSqrtAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#lenAtom.
VtlListener.prototype.enterLenAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#lenAtom.
VtlListener.prototype.exitLenAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#betweenAtom.
VtlListener.prototype.enterBetweenAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#betweenAtom.
VtlListener.prototype.exitBetweenAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#trimAtom.
VtlListener.prototype.enterTrimAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#trimAtom.
VtlListener.prototype.exitTrimAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#ltrimAtom.
VtlListener.prototype.enterLtrimAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#ltrimAtom.
VtlListener.prototype.exitLtrimAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#rtrimAtom.
VtlListener.prototype.enterRtrimAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#rtrimAtom.
VtlListener.prototype.exitRtrimAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#ucaseAtom.
VtlListener.prototype.enterUcaseAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#ucaseAtom.
VtlListener.prototype.exitUcaseAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#lcaseAtom.
VtlListener.prototype.enterLcaseAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#lcaseAtom.
VtlListener.prototype.exitLcaseAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#substrAtom.
VtlListener.prototype.enterSubstrAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#substrAtom.
VtlListener.prototype.exitSubstrAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#instrAtom.
VtlListener.prototype.enterInstrAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#instrAtom.
VtlListener.prototype.exitInstrAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#replaceAtom.
VtlListener.prototype.enterReplaceAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#replaceAtom.
VtlListener.prototype.exitReplaceAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#charsetMatchAtom.
VtlListener.prototype.enterCharsetMatchAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#charsetMatchAtom.
VtlListener.prototype.exitCharsetMatchAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#isNullAtom.
VtlListener.prototype.enterIsNullAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#isNullAtom.
VtlListener.prototype.exitIsNullAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#nvlAtom.
VtlListener.prototype.enterNvlAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#nvlAtom.
VtlListener.prototype.exitNvlAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#modAtom.
VtlListener.prototype.enterModAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#modAtom.
VtlListener.prototype.exitModAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#refAtom.
VtlListener.prototype.enterRefAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#refAtom.
VtlListener.prototype.exitRefAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#evalExprAtom.
VtlListener.prototype.enterEvalExprAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#evalExprAtom.
VtlListener.prototype.exitEvalExprAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#castExprAtom.
VtlListener.prototype.enterCastExprAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#castExprAtom.
VtlListener.prototype.exitCastExprAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#hierarchyExprAtom.
VtlListener.prototype.enterHierarchyExprAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#hierarchyExprAtom.
VtlListener.prototype.exitHierarchyExprAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#flowToStockAtom.
VtlListener.prototype.enterFlowToStockAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#flowToStockAtom.
VtlListener.prototype.exitFlowToStockAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#stockToFlowAtom.
VtlListener.prototype.enterStockToFlowAtom = function(ctx) {};

// Exit a parse tree produced by VtlParser#stockToFlowAtom.
VtlListener.prototype.exitStockToFlowAtom = function(ctx) {};

// Enter a parse tree produced by VtlParser#validateDPruleset.
VtlListener.prototype.enterValidateDPruleset = function(ctx) {};

// Exit a parse tree produced by VtlParser#validateDPruleset.
VtlListener.prototype.exitValidateDPruleset = function(ctx) {};

// Enter a parse tree produced by VtlParser#validateHRruleset.
VtlListener.prototype.enterValidateHRruleset = function(ctx) {};

// Exit a parse tree produced by VtlParser#validateHRruleset.
VtlListener.prototype.exitValidateHRruleset = function(ctx) {};

// Enter a parse tree produced by VtlParser#validationSimple.
VtlListener.prototype.enterValidationSimple = function(ctx) {};

// Exit a parse tree produced by VtlParser#validationSimple.
VtlListener.prototype.exitValidationSimple = function(ctx) {};

// Enter a parse tree produced by VtlParser#parenthesisExprRef.
VtlListener.prototype.enterParenthesisExprRef = function(ctx) {};

// Exit a parse tree produced by VtlParser#parenthesisExprRef.
VtlListener.prototype.exitParenthesisExprRef = function(ctx) {};

// Enter a parse tree produced by VtlParser#varIdRef.
VtlListener.prototype.enterVarIdRef = function(ctx) {};

// Exit a parse tree produced by VtlParser#varIdRef.
VtlListener.prototype.exitVarIdRef = function(ctx) {};

// Enter a parse tree produced by VtlParser#constantRef.
VtlListener.prototype.enterConstantRef = function(ctx) {};

// Exit a parse tree produced by VtlParser#constantRef.
VtlListener.prototype.exitConstantRef = function(ctx) {};

// Enter a parse tree produced by VtlParser#identifierList.
VtlListener.prototype.enterIdentifierList = function(ctx) {};

// Exit a parse tree produced by VtlParser#identifierList.
VtlListener.prototype.exitIdentifierList = function(ctx) {};

// Enter a parse tree produced by VtlParser#lists.
VtlListener.prototype.enterLists = function(ctx) {};

// Exit a parse tree produced by VtlParser#lists.
VtlListener.prototype.exitLists = function(ctx) {};

// Enter a parse tree produced by VtlParser#evalExpr.
VtlListener.prototype.enterEvalExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#evalExpr.
VtlListener.prototype.exitEvalExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#castExpr.
VtlListener.prototype.enterCastExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#castExpr.
VtlListener.prototype.exitCastExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#periodExpr.
VtlListener.prototype.enterPeriodExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#periodExpr.
VtlListener.prototype.exitPeriodExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#timeShiftExpr.
VtlListener.prototype.enterTimeShiftExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#timeShiftExpr.
VtlListener.prototype.exitTimeShiftExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#timeSeriesExpr.
VtlListener.prototype.enterTimeSeriesExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#timeSeriesExpr.
VtlListener.prototype.exitTimeSeriesExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#timeAggExpr.
VtlListener.prototype.enterTimeAggExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#timeAggExpr.
VtlListener.prototype.exitTimeAggExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#validationExpr.
VtlListener.prototype.enterValidationExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#validationExpr.
VtlListener.prototype.exitValidationExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#validationDatapoint.
VtlListener.prototype.enterValidationDatapoint = function(ctx) {};

// Exit a parse tree produced by VtlParser#validationDatapoint.
VtlListener.prototype.exitValidationDatapoint = function(ctx) {};

// Enter a parse tree produced by VtlParser#validationHierarchical.
VtlListener.prototype.enterValidationHierarchical = function(ctx) {};

// Exit a parse tree produced by VtlParser#validationHierarchical.
VtlListener.prototype.exitValidationHierarchical = function(ctx) {};

// Enter a parse tree produced by VtlParser#erCode.
VtlListener.prototype.enterErCode = function(ctx) {};

// Exit a parse tree produced by VtlParser#erCode.
VtlListener.prototype.exitErCode = function(ctx) {};

// Enter a parse tree produced by VtlParser#erLevel.
VtlListener.prototype.enterErLevel = function(ctx) {};

// Exit a parse tree produced by VtlParser#erLevel.
VtlListener.prototype.exitErLevel = function(ctx) {};

// Enter a parse tree produced by VtlParser#hierarchyExpr.
VtlListener.prototype.enterHierarchyExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#hierarchyExpr.
VtlListener.prototype.exitHierarchyExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#datasetClause.
VtlListener.prototype.enterDatasetClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#datasetClause.
VtlListener.prototype.exitDatasetClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#anFunctionClause.
VtlListener.prototype.enterAnFunctionClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#anFunctionClause.
VtlListener.prototype.exitAnFunctionClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#partitionByClause.
VtlListener.prototype.enterPartitionByClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#partitionByClause.
VtlListener.prototype.exitPartitionByClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#orderByClause.
VtlListener.prototype.enterOrderByClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#orderByClause.
VtlListener.prototype.exitOrderByClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#windowingClause.
VtlListener.prototype.enterWindowingClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#windowingClause.
VtlListener.prototype.exitWindowingClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#limitClauseItem.
VtlListener.prototype.enterLimitClauseItem = function(ctx) {};

// Exit a parse tree produced by VtlParser#limitClauseItem.
VtlListener.prototype.exitLimitClauseItem = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinExpr.
VtlListener.prototype.enterJoinExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinExpr.
VtlListener.prototype.exitJoinExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinClause.
VtlListener.prototype.enterJoinClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinClause.
VtlListener.prototype.exitJoinClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinBody.
VtlListener.prototype.enterJoinBody = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinBody.
VtlListener.prototype.exitJoinBody = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinCalcClause.
VtlListener.prototype.enterJoinCalcClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinCalcClause.
VtlListener.prototype.exitJoinCalcClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinCalcClauseItem.
VtlListener.prototype.enterJoinCalcClauseItem = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinCalcClauseItem.
VtlListener.prototype.exitJoinCalcClauseItem = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinCalcExpr.
VtlListener.prototype.enterJoinCalcExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinCalcExpr.
VtlListener.prototype.exitJoinCalcExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinAggClause.
VtlListener.prototype.enterJoinAggClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinAggClause.
VtlListener.prototype.exitJoinAggClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinAggClauseItem.
VtlListener.prototype.enterJoinAggClauseItem = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinAggClauseItem.
VtlListener.prototype.exitJoinAggClauseItem = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinAggExpr.
VtlListener.prototype.enterJoinAggExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinAggExpr.
VtlListener.prototype.exitJoinAggExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinKeepClause.
VtlListener.prototype.enterJoinKeepClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinKeepClause.
VtlListener.prototype.exitJoinKeepClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinDropClause.
VtlListener.prototype.enterJoinDropClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinDropClause.
VtlListener.prototype.exitJoinDropClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinFilterClause.
VtlListener.prototype.enterJoinFilterClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinFilterClause.
VtlListener.prototype.exitJoinFilterClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinRenameClause.
VtlListener.prototype.enterJoinRenameClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinRenameClause.
VtlListener.prototype.exitJoinRenameClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinApplyClause.
VtlListener.prototype.enterJoinApplyClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinApplyClause.
VtlListener.prototype.exitJoinApplyClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#anFunction.
VtlListener.prototype.enterAnFunction = function(ctx) {};

// Exit a parse tree produced by VtlParser#anFunction.
VtlListener.prototype.exitAnFunction = function(ctx) {};

// Enter a parse tree produced by VtlParser#aggregateClause.
VtlListener.prototype.enterAggregateClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#aggregateClause.
VtlListener.prototype.exitAggregateClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#aggrFunctionClause.
VtlListener.prototype.enterAggrFunctionClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#aggrFunctionClause.
VtlListener.prototype.exitAggrFunctionClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#getFiltersClause.
VtlListener.prototype.enterGetFiltersClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#getFiltersClause.
VtlListener.prototype.exitGetFiltersClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#getFilterClause.
VtlListener.prototype.enterGetFilterClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#getFilterClause.
VtlListener.prototype.exitGetFilterClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#aggrClause.
VtlListener.prototype.enterAggrClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#aggrClause.
VtlListener.prototype.exitAggrClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#filterClause.
VtlListener.prototype.enterFilterClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#filterClause.
VtlListener.prototype.exitFilterClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#renameClause.
VtlListener.prototype.enterRenameClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#renameClause.
VtlListener.prototype.exitRenameClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#aggrFunction.
VtlListener.prototype.enterAggrFunction = function(ctx) {};

// Exit a parse tree produced by VtlParser#aggrFunction.
VtlListener.prototype.exitAggrFunction = function(ctx) {};

// Enter a parse tree produced by VtlParser#calcClause.
VtlListener.prototype.enterCalcClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#calcClause.
VtlListener.prototype.exitCalcClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#calcClauseItem.
VtlListener.prototype.enterCalcClauseItem = function(ctx) {};

// Exit a parse tree produced by VtlParser#calcClauseItem.
VtlListener.prototype.exitCalcClauseItem = function(ctx) {};

// Enter a parse tree produced by VtlParser#calcExpr.
VtlListener.prototype.enterCalcExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#calcExpr.
VtlListener.prototype.exitCalcExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#dropClause.
VtlListener.prototype.enterDropClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#dropClause.
VtlListener.prototype.exitDropClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#dropClauseItem.
VtlListener.prototype.enterDropClauseItem = function(ctx) {};

// Exit a parse tree produced by VtlParser#dropClauseItem.
VtlListener.prototype.exitDropClauseItem = function(ctx) {};

// Enter a parse tree produced by VtlParser#keepClause.
VtlListener.prototype.enterKeepClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#keepClause.
VtlListener.prototype.exitKeepClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#keepClauseItem.
VtlListener.prototype.enterKeepClauseItem = function(ctx) {};

// Exit a parse tree produced by VtlParser#keepClauseItem.
VtlListener.prototype.exitKeepClauseItem = function(ctx) {};

// Enter a parse tree produced by VtlParser#unpivotExpr.
VtlListener.prototype.enterUnpivotExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#unpivotExpr.
VtlListener.prototype.exitUnpivotExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#pivotExpr.
VtlListener.prototype.enterPivotExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#pivotExpr.
VtlListener.prototype.exitPivotExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#subspaceExpr.
VtlListener.prototype.enterSubspaceExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#subspaceExpr.
VtlListener.prototype.exitSubspaceExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#inBetweenClause.
VtlListener.prototype.enterInBetweenClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#inBetweenClause.
VtlListener.prototype.exitInBetweenClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#setExpr.
VtlListener.prototype.enterSetExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#setExpr.
VtlListener.prototype.exitSetExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#subscriptExpr.
VtlListener.prototype.enterSubscriptExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#subscriptExpr.
VtlListener.prototype.exitSubscriptExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#aggrInvocation.
VtlListener.prototype.enterAggrInvocation = function(ctx) {};

// Exit a parse tree produced by VtlParser#aggrInvocation.
VtlListener.prototype.exitAggrInvocation = function(ctx) {};

// Enter a parse tree produced by VtlParser#aggrInvocationCompExpr.
VtlListener.prototype.enterAggrInvocationCompExpr = function(ctx) {};

// Exit a parse tree produced by VtlParser#aggrInvocationCompExpr.
VtlListener.prototype.exitAggrInvocationCompExpr = function(ctx) {};

// Enter a parse tree produced by VtlParser#aggrFunctionName.
VtlListener.prototype.enterAggrFunctionName = function(ctx) {};

// Exit a parse tree produced by VtlParser#aggrFunctionName.
VtlListener.prototype.exitAggrFunctionName = function(ctx) {};

// Enter a parse tree produced by VtlParser#groupingClause.
VtlListener.prototype.enterGroupingClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#groupingClause.
VtlListener.prototype.exitGroupingClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#havingClause.
VtlListener.prototype.enterHavingClause = function(ctx) {};

// Exit a parse tree produced by VtlParser#havingClause.
VtlListener.prototype.exitHavingClause = function(ctx) {};

// Enter a parse tree produced by VtlParser#returnAll.
VtlListener.prototype.enterReturnAll = function(ctx) {};

// Exit a parse tree produced by VtlParser#returnAll.
VtlListener.prototype.exitReturnAll = function(ctx) {};

// Enter a parse tree produced by VtlParser#componentRole.
VtlListener.prototype.enterComponentRole = function(ctx) {};

// Exit a parse tree produced by VtlParser#componentRole.
VtlListener.prototype.exitComponentRole = function(ctx) {};

// Enter a parse tree produced by VtlParser#viralAttribute.
VtlListener.prototype.enterViralAttribute = function(ctx) {};

// Exit a parse tree produced by VtlParser#viralAttribute.
VtlListener.prototype.exitViralAttribute = function(ctx) {};

// Enter a parse tree produced by VtlParser#logBase.
VtlListener.prototype.enterLogBase = function(ctx) {};

// Exit a parse tree produced by VtlParser#logBase.
VtlListener.prototype.exitLogBase = function(ctx) {};

// Enter a parse tree produced by VtlParser#exponent.
VtlListener.prototype.enterExponent = function(ctx) {};

// Exit a parse tree produced by VtlParser#exponent.
VtlListener.prototype.exitExponent = function(ctx) {};

// Enter a parse tree produced by VtlParser#persistentDatasetID.
VtlListener.prototype.enterPersistentDatasetID = function(ctx) {};

// Exit a parse tree produced by VtlParser#persistentDatasetID.
VtlListener.prototype.exitPersistentDatasetID = function(ctx) {};

// Enter a parse tree produced by VtlParser#datasetID.
VtlListener.prototype.enterDatasetID = function(ctx) {};

// Exit a parse tree produced by VtlParser#datasetID.
VtlListener.prototype.exitDatasetID = function(ctx) {};

// Enter a parse tree produced by VtlParser#rulesetID.
VtlListener.prototype.enterRulesetID = function(ctx) {};

// Exit a parse tree produced by VtlParser#rulesetID.
VtlListener.prototype.exitRulesetID = function(ctx) {};

// Enter a parse tree produced by VtlParser#varID.
VtlListener.prototype.enterVarID = function(ctx) {};

// Exit a parse tree produced by VtlParser#varID.
VtlListener.prototype.exitVarID = function(ctx) {};

// Enter a parse tree produced by VtlParser#componentID.
VtlListener.prototype.enterComponentID = function(ctx) {};

// Exit a parse tree produced by VtlParser#componentID.
VtlListener.prototype.exitComponentID = function(ctx) {};

// Enter a parse tree produced by VtlParser#operatorID.
VtlListener.prototype.enterOperatorID = function(ctx) {};

// Exit a parse tree produced by VtlParser#operatorID.
VtlListener.prototype.exitOperatorID = function(ctx) {};

// Enter a parse tree produced by VtlParser#routineName.
VtlListener.prototype.enterRoutineName = function(ctx) {};

// Exit a parse tree produced by VtlParser#routineName.
VtlListener.prototype.exitRoutineName = function(ctx) {};

// Enter a parse tree produced by VtlParser#joinKeyword.
VtlListener.prototype.enterJoinKeyword = function(ctx) {};

// Exit a parse tree produced by VtlParser#joinKeyword.
VtlListener.prototype.exitJoinKeyword = function(ctx) {};

// Enter a parse tree produced by VtlParser#groupKeyword.
VtlListener.prototype.enterGroupKeyword = function(ctx) {};

// Exit a parse tree produced by VtlParser#groupKeyword.
VtlListener.prototype.exitGroupKeyword = function(ctx) {};

// Enter a parse tree produced by VtlParser#constant.
VtlListener.prototype.enterConstant = function(ctx) {};

// Exit a parse tree produced by VtlParser#constant.
VtlListener.prototype.exitConstant = function(ctx) {};

// Enter a parse tree produced by VtlParser#componentType2.
VtlListener.prototype.enterComponentType2 = function(ctx) {};

// Exit a parse tree produced by VtlParser#componentType2.
VtlListener.prototype.exitComponentType2 = function(ctx) {};

// Enter a parse tree produced by VtlParser#scalarType.
VtlListener.prototype.enterScalarType = function(ctx) {};

// Exit a parse tree produced by VtlParser#scalarType.
VtlListener.prototype.exitScalarType = function(ctx) {};

// Enter a parse tree produced by VtlParser#basicScalarType.
VtlListener.prototype.enterBasicScalarType = function(ctx) {};

// Exit a parse tree produced by VtlParser#basicScalarType.
VtlListener.prototype.exitBasicScalarType = function(ctx) {};

// Enter a parse tree produced by VtlParser#valueDomainName.
VtlListener.prototype.enterValueDomainName = function(ctx) {};

// Exit a parse tree produced by VtlParser#valueDomainName.
VtlListener.prototype.exitValueDomainName = function(ctx) {};

// Enter a parse tree produced by VtlParser#setName.
VtlListener.prototype.enterSetName = function(ctx) {};

// Exit a parse tree produced by VtlParser#setName.
VtlListener.prototype.exitSetName = function(ctx) {};

// Enter a parse tree produced by VtlParser#scalarTypeConstraint.
VtlListener.prototype.enterScalarTypeConstraint = function(ctx) {};

// Exit a parse tree produced by VtlParser#scalarTypeConstraint.
VtlListener.prototype.exitScalarTypeConstraint = function(ctx) {};

// Enter a parse tree produced by VtlParser#dataType.
VtlListener.prototype.enterDataType = function(ctx) {};

// Exit a parse tree produced by VtlParser#dataType.
VtlListener.prototype.exitDataType = function(ctx) {};

// Enter a parse tree produced by VtlParser#componentType.
VtlListener.prototype.enterComponentType = function(ctx) {};

// Exit a parse tree produced by VtlParser#componentType.
VtlListener.prototype.exitComponentType = function(ctx) {};

// Enter a parse tree produced by VtlParser#datasetType.
VtlListener.prototype.enterDatasetType = function(ctx) {};

// Exit a parse tree produced by VtlParser#datasetType.
VtlListener.prototype.exitDatasetType = function(ctx) {};

// Enter a parse tree produced by VtlParser#compConstraint.
VtlListener.prototype.enterCompConstraint = function(ctx) {};

// Exit a parse tree produced by VtlParser#compConstraint.
VtlListener.prototype.exitCompConstraint = function(ctx) {};

// Enter a parse tree produced by VtlParser#multModifier.
VtlListener.prototype.enterMultModifier = function(ctx) {};

// Exit a parse tree produced by VtlParser#multModifier.
VtlListener.prototype.exitMultModifier = function(ctx) {};

// Enter a parse tree produced by VtlParser#rulesetType.
VtlListener.prototype.enterRulesetType = function(ctx) {};

// Exit a parse tree produced by VtlParser#rulesetType.
VtlListener.prototype.exitRulesetType = function(ctx) {};

// Enter a parse tree produced by VtlParser#dpRuleset.
VtlListener.prototype.enterDpRuleset = function(ctx) {};

// Exit a parse tree produced by VtlParser#dpRuleset.
VtlListener.prototype.exitDpRuleset = function(ctx) {};

// Enter a parse tree produced by VtlParser#hrRuleset.
VtlListener.prototype.enterHrRuleset = function(ctx) {};

// Exit a parse tree produced by VtlParser#hrRuleset.
VtlListener.prototype.exitHrRuleset = function(ctx) {};

// Enter a parse tree produced by VtlParser#prodValueDomains.
VtlListener.prototype.enterProdValueDomains = function(ctx) {};

// Exit a parse tree produced by VtlParser#prodValueDomains.
VtlListener.prototype.exitProdValueDomains = function(ctx) {};

// Enter a parse tree produced by VtlParser#prodVariables.
VtlListener.prototype.enterProdVariables = function(ctx) {};

// Exit a parse tree produced by VtlParser#prodVariables.
VtlListener.prototype.exitProdVariables = function(ctx) {};

// Enter a parse tree produced by VtlParser#operatorType.
VtlListener.prototype.enterOperatorType = function(ctx) {};

// Exit a parse tree produced by VtlParser#operatorType.
VtlListener.prototype.exitOperatorType = function(ctx) {};

// Enter a parse tree produced by VtlParser#inputParameterType.
VtlListener.prototype.enterInputParameterType = function(ctx) {};

// Exit a parse tree produced by VtlParser#inputParameterType.
VtlListener.prototype.exitInputParameterType = function(ctx) {};

// Enter a parse tree produced by VtlParser#outputParameterType.
VtlListener.prototype.enterOutputParameterType = function(ctx) {};

// Exit a parse tree produced by VtlParser#outputParameterType.
VtlListener.prototype.exitOutputParameterType = function(ctx) {};

// Enter a parse tree produced by VtlParser#scalarSetType.
VtlListener.prototype.enterScalarSetType = function(ctx) {};

// Exit a parse tree produced by VtlParser#scalarSetType.
VtlListener.prototype.exitScalarSetType = function(ctx) {};

// Enter a parse tree produced by VtlParser#retainType.
VtlListener.prototype.enterRetainType = function(ctx) {};

// Exit a parse tree produced by VtlParser#retainType.
VtlListener.prototype.exitRetainType = function(ctx) {};

// Enter a parse tree produced by VtlParser#defineDatapointRuleset.
VtlListener.prototype.enterDefineDatapointRuleset = function(ctx) {};

// Exit a parse tree produced by VtlParser#defineDatapointRuleset.
VtlListener.prototype.exitDefineDatapointRuleset = function(ctx) {};

// Enter a parse tree produced by VtlParser#defineHierarchicalRuleset.
VtlListener.prototype.enterDefineHierarchicalRuleset = function(ctx) {};

// Exit a parse tree produced by VtlParser#defineHierarchicalRuleset.
VtlListener.prototype.exitDefineHierarchicalRuleset = function(ctx) {};

// Enter a parse tree produced by VtlParser#endDatapointRuleset.
VtlListener.prototype.enterEndDatapointRuleset = function(ctx) {};

// Exit a parse tree produced by VtlParser#endDatapointRuleset.
VtlListener.prototype.exitEndDatapointRuleset = function(ctx) {};

// Enter a parse tree produced by VtlParser#endHierarchicalRuleset.
VtlListener.prototype.enterEndHierarchicalRuleset = function(ctx) {};

// Exit a parse tree produced by VtlParser#endHierarchicalRuleset.
VtlListener.prototype.exitEndHierarchicalRuleset = function(ctx) {};

// Enter a parse tree produced by VtlParser#defineDataStructure.
VtlListener.prototype.enterDefineDataStructure = function(ctx) {};

// Exit a parse tree produced by VtlParser#defineDataStructure.
VtlListener.prototype.exitDefineDataStructure = function(ctx) {};

export default VtlListener;
