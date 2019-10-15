// Generated from fr\insee\vtl\Vtl.g4 by ANTLR 4.7.2
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

// Visit a parse tree produced by VtlParser#statement.
VtlVisitor.prototype.visitStatement = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#persistentAssignment.
VtlVisitor.prototype.visitPersistentAssignment = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#optionalExpr.
VtlVisitor.prototype.visitOptionalExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#expr.
VtlVisitor.prototype.visitExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#exprValidationExpr.
VtlVisitor.prototype.visitExprValidationExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#definitionExpressions.
VtlVisitor.prototype.visitDefinitionExpressions = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#standaloneAggregateFunction.
VtlVisitor.prototype.visitStandaloneAggregateFunction = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#componentExpressionwithAggrClause.
VtlVisitor.prototype.visitComponentExpressionwithAggrClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#standaloneAnalyticFunction.
VtlVisitor.prototype.visitStandaloneAnalyticFunction = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#simpleaggregateFunctions.
VtlVisitor.prototype.visitSimpleaggregateFunctions = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#timeexpressions.
VtlVisitor.prototype.visitTimeexpressions = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#setExpressions.
VtlVisitor.prototype.visitSetExpressions = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#callFunctionExpression.
VtlVisitor.prototype.visitCallFunctionExpression = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinExpression.
VtlVisitor.prototype.visitJoinExpression = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#timeExpr.
VtlVisitor.prototype.visitTimeExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#defHierarchical.
VtlVisitor.prototype.visitDefHierarchical = function(ctx) {
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

// Visit a parse tree produced by VtlParser#codeItemRef.
VtlVisitor.prototype.visitCodeItemRef = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#defDatapoint.
VtlVisitor.prototype.visitDefDatapoint = function(ctx) {
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

// Visit a parse tree produced by VtlParser#rulesetSignature.
VtlVisitor.prototype.visitRulesetSignature = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#varSignature.
VtlVisitor.prototype.visitVarSignature = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#defExpr.
VtlVisitor.prototype.visitDefExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#defOperator.
VtlVisitor.prototype.visitDefOperator = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#parameterItem.
VtlVisitor.prototype.visitParameterItem = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#callFunction.
VtlVisitor.prototype.visitCallFunction = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#roundAtom.
VtlVisitor.prototype.visitRoundAtom = function(ctx) {
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

// Visit a parse tree produced by VtlParser#lnAtom.
VtlVisitor.prototype.visitLnAtom = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#logAtom.
VtlVisitor.prototype.visitLogAtom = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#powerAtom.
VtlVisitor.prototype.visitPowerAtom = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#sqrtAtom.
VtlVisitor.prototype.visitSqrtAtom = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#lenAtom.
VtlVisitor.prototype.visitLenAtom = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#betweenAtom.
VtlVisitor.prototype.visitBetweenAtom = function(ctx) {
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

// Visit a parse tree produced by VtlParser#instrAtom.
VtlVisitor.prototype.visitInstrAtom = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#replaceAtom.
VtlVisitor.prototype.visitReplaceAtom = function(ctx) {
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

// Visit a parse tree produced by VtlParser#nvlAtom.
VtlVisitor.prototype.visitNvlAtom = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#modAtom.
VtlVisitor.prototype.visitModAtom = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#refAtom.
VtlVisitor.prototype.visitRefAtom = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#evalExprAtom.
VtlVisitor.prototype.visitEvalExprAtom = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#castExprAtom.
VtlVisitor.prototype.visitCastExprAtom = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#hierarchyExprAtom.
VtlVisitor.prototype.visitHierarchyExprAtom = function(ctx) {
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

// Visit a parse tree produced by VtlParser#parenthesisExprRef.
VtlVisitor.prototype.visitParenthesisExprRef = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#varIdRef.
VtlVisitor.prototype.visitVarIdRef = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#constantRef.
VtlVisitor.prototype.visitConstantRef = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#identifierList.
VtlVisitor.prototype.visitIdentifierList = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#lists.
VtlVisitor.prototype.visitLists = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#evalExpr.
VtlVisitor.prototype.visitEvalExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#castExpr.
VtlVisitor.prototype.visitCastExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#periodExpr.
VtlVisitor.prototype.visitPeriodExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#timeShiftExpr.
VtlVisitor.prototype.visitTimeShiftExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#timeSeriesExpr.
VtlVisitor.prototype.visitTimeSeriesExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#timeAggExpr.
VtlVisitor.prototype.visitTimeAggExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#validationExpr.
VtlVisitor.prototype.visitValidationExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#validationDatapoint.
VtlVisitor.prototype.visitValidationDatapoint = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#validationHierarchical.
VtlVisitor.prototype.visitValidationHierarchical = function(ctx) {
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

// Visit a parse tree produced by VtlParser#hierarchyExpr.
VtlVisitor.prototype.visitHierarchyExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#datasetClause.
VtlVisitor.prototype.visitDatasetClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#anFunctionClause.
VtlVisitor.prototype.visitAnFunctionClause = function(ctx) {
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

// Visit a parse tree produced by VtlParser#windowingClause.
VtlVisitor.prototype.visitWindowingClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#limitClauseItem.
VtlVisitor.prototype.visitLimitClauseItem = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinExpr.
VtlVisitor.prototype.visitJoinExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinClause.
VtlVisitor.prototype.visitJoinClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinBody.
VtlVisitor.prototype.visitJoinBody = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinCalcClause.
VtlVisitor.prototype.visitJoinCalcClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinCalcClauseItem.
VtlVisitor.prototype.visitJoinCalcClauseItem = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinCalcExpr.
VtlVisitor.prototype.visitJoinCalcExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinAggClause.
VtlVisitor.prototype.visitJoinAggClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinAggClauseItem.
VtlVisitor.prototype.visitJoinAggClauseItem = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinAggExpr.
VtlVisitor.prototype.visitJoinAggExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinKeepClause.
VtlVisitor.prototype.visitJoinKeepClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinDropClause.
VtlVisitor.prototype.visitJoinDropClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinFilterClause.
VtlVisitor.prototype.visitJoinFilterClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinRenameClause.
VtlVisitor.prototype.visitJoinRenameClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinApplyClause.
VtlVisitor.prototype.visitJoinApplyClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#anFunction.
VtlVisitor.prototype.visitAnFunction = function(ctx) {
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

// Visit a parse tree produced by VtlParser#getFiltersClause.
VtlVisitor.prototype.visitGetFiltersClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#getFilterClause.
VtlVisitor.prototype.visitGetFilterClause = function(ctx) {
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

// Visit a parse tree produced by VtlParser#renameClause.
VtlVisitor.prototype.visitRenameClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#aggrFunction.
VtlVisitor.prototype.visitAggrFunction = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#calcClause.
VtlVisitor.prototype.visitCalcClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#calcClauseItem.
VtlVisitor.prototype.visitCalcClauseItem = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#calcExpr.
VtlVisitor.prototype.visitCalcExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#dropClause.
VtlVisitor.prototype.visitDropClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#dropClauseItem.
VtlVisitor.prototype.visitDropClauseItem = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#keepClause.
VtlVisitor.prototype.visitKeepClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#keepClauseItem.
VtlVisitor.prototype.visitKeepClauseItem = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#unpivotExpr.
VtlVisitor.prototype.visitUnpivotExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#pivotExpr.
VtlVisitor.prototype.visitPivotExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#subspaceExpr.
VtlVisitor.prototype.visitSubspaceExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#inBetweenClause.
VtlVisitor.prototype.visitInBetweenClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#setExpr.
VtlVisitor.prototype.visitSetExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#subscriptExpr.
VtlVisitor.prototype.visitSubscriptExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#aggrInvocation.
VtlVisitor.prototype.visitAggrInvocation = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#aggrInvocationCompExpr.
VtlVisitor.prototype.visitAggrInvocationCompExpr = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#aggrFunctionName.
VtlVisitor.prototype.visitAggrFunctionName = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#groupingClause.
VtlVisitor.prototype.visitGroupingClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#havingClause.
VtlVisitor.prototype.visitHavingClause = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#returnAll.
VtlVisitor.prototype.visitReturnAll = function(ctx) {
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

// Visit a parse tree produced by VtlParser#logBase.
VtlVisitor.prototype.visitLogBase = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#exponent.
VtlVisitor.prototype.visitExponent = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#persistentDatasetID.
VtlVisitor.prototype.visitPersistentDatasetID = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#datasetID.
VtlVisitor.prototype.visitDatasetID = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#rulesetID.
VtlVisitor.prototype.visitRulesetID = function(ctx) {
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

// Visit a parse tree produced by VtlParser#operatorID.
VtlVisitor.prototype.visitOperatorID = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#routineName.
VtlVisitor.prototype.visitRoutineName = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#joinKeyword.
VtlVisitor.prototype.visitJoinKeyword = function(ctx) {
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

// Visit a parse tree produced by VtlParser#componentType2.
VtlVisitor.prototype.visitComponentType2 = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#scalarType.
VtlVisitor.prototype.visitScalarType = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#basicScalarType.
VtlVisitor.prototype.visitBasicScalarType = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#valueDomainName.
VtlVisitor.prototype.visitValueDomainName = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#setName.
VtlVisitor.prototype.visitSetName = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#scalarTypeConstraint.
VtlVisitor.prototype.visitScalarTypeConstraint = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#dataType.
VtlVisitor.prototype.visitDataType = function(ctx) {
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

// Visit a parse tree produced by VtlParser#compConstraint.
VtlVisitor.prototype.visitCompConstraint = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#multModifier.
VtlVisitor.prototype.visitMultModifier = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#rulesetType.
VtlVisitor.prototype.visitRulesetType = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#dpRuleset.
VtlVisitor.prototype.visitDpRuleset = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#hrRuleset.
VtlVisitor.prototype.visitHrRuleset = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#prodValueDomains.
VtlVisitor.prototype.visitProdValueDomains = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#prodVariables.
VtlVisitor.prototype.visitProdVariables = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#operatorType.
VtlVisitor.prototype.visitOperatorType = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#inputParameterType.
VtlVisitor.prototype.visitInputParameterType = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#outputParameterType.
VtlVisitor.prototype.visitOutputParameterType = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#scalarSetType.
VtlVisitor.prototype.visitScalarSetType = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#retainType.
VtlVisitor.prototype.visitRetainType = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#defineDatapointRuleset.
VtlVisitor.prototype.visitDefineDatapointRuleset = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#defineHierarchicalRuleset.
VtlVisitor.prototype.visitDefineHierarchicalRuleset = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#endDatapointRuleset.
VtlVisitor.prototype.visitEndDatapointRuleset = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#endHierarchicalRuleset.
VtlVisitor.prototype.visitEndHierarchicalRuleset = function(ctx) {
	return this.visitChildren(ctx);
};

// Visit a parse tree produced by VtlParser#defineDataStructure.
VtlVisitor.prototype.visitDefineDataStructure = function(ctx) {
	return this.visitChildren(ctx);
};

export default VtlVisitor;
