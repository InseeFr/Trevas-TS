// Generated from vtl-sources/Vtl-2.0-Insee/Vtl.g4 by ANTLR 4.7.2
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
VtlListener.prototype.enterStart = function(ctx) {
};

// Exit a parse tree produced by VtlParser#start.
VtlListener.prototype.exitStart = function(ctx) {
};


// Enter a parse tree produced by VtlParser#temporaryAssignment.
VtlListener.prototype.enterTemporaryAssignment = function(ctx) {
};

// Exit a parse tree produced by VtlParser#temporaryAssignment.
VtlListener.prototype.exitTemporaryAssignment = function(ctx) {
};


// Enter a parse tree produced by VtlParser#persistAssignment.
VtlListener.prototype.enterPersistAssignment = function(ctx) {
};

// Exit a parse tree produced by VtlParser#persistAssignment.
VtlListener.prototype.exitPersistAssignment = function(ctx) {
};


// Enter a parse tree produced by VtlParser#defineExpression.
VtlListener.prototype.enterDefineExpression = function(ctx) {
};

// Exit a parse tree produced by VtlParser#defineExpression.
VtlListener.prototype.exitDefineExpression = function(ctx) {
};


// Enter a parse tree produced by VtlParser#varIdExpr.
VtlListener.prototype.enterVarIdExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#varIdExpr.
VtlListener.prototype.exitVarIdExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#membershipExpr.
VtlListener.prototype.enterMembershipExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#membershipExpr.
VtlListener.prototype.exitMembershipExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#inNotInExpr.
VtlListener.prototype.enterInNotInExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#inNotInExpr.
VtlListener.prototype.exitInNotInExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#booleanExpr.
VtlListener.prototype.enterBooleanExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#booleanExpr.
VtlListener.prototype.exitBooleanExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#comparisonExpr.
VtlListener.prototype.enterComparisonExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#comparisonExpr.
VtlListener.prototype.exitComparisonExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#concatExpr.
VtlListener.prototype.enterConcatExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#concatExpr.
VtlListener.prototype.exitConcatExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#unaryExpr.
VtlListener.prototype.enterUnaryExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#unaryExpr.
VtlListener.prototype.exitUnaryExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#notExpr.
VtlListener.prototype.enterNotExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#notExpr.
VtlListener.prototype.exitNotExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#functionsExpression.
VtlListener.prototype.enterFunctionsExpression = function(ctx) {
};

// Exit a parse tree produced by VtlParser#functionsExpression.
VtlListener.prototype.exitFunctionsExpression = function(ctx) {
};


// Enter a parse tree produced by VtlParser#ifExpr.
VtlListener.prototype.enterIfExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#ifExpr.
VtlListener.prototype.exitIfExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#clauseExpr.
VtlListener.prototype.enterClauseExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#clauseExpr.
VtlListener.prototype.exitClauseExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#arithmeticExpr.
VtlListener.prototype.enterArithmeticExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#arithmeticExpr.
VtlListener.prototype.exitArithmeticExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#parenthesisExpr.
VtlListener.prototype.enterParenthesisExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#parenthesisExpr.
VtlListener.prototype.exitParenthesisExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#constantExpr.
VtlListener.prototype.enterConstantExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#constantExpr.
VtlListener.prototype.exitConstantExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#joinFunctions.
VtlListener.prototype.enterJoinFunctions = function(ctx) {
};

// Exit a parse tree produced by VtlParser#joinFunctions.
VtlListener.prototype.exitJoinFunctions = function(ctx) {
};


// Enter a parse tree produced by VtlParser#genericFunctions.
VtlListener.prototype.enterGenericFunctions = function(ctx) {
};

// Exit a parse tree produced by VtlParser#genericFunctions.
VtlListener.prototype.exitGenericFunctions = function(ctx) {
};


// Enter a parse tree produced by VtlParser#stringFunctions.
VtlListener.prototype.enterStringFunctions = function(ctx) {
};

// Exit a parse tree produced by VtlParser#stringFunctions.
VtlListener.prototype.exitStringFunctions = function(ctx) {
};


// Enter a parse tree produced by VtlParser#numericFunctions.
VtlListener.prototype.enterNumericFunctions = function(ctx) {
};

// Exit a parse tree produced by VtlParser#numericFunctions.
VtlListener.prototype.exitNumericFunctions = function(ctx) {
};


// Enter a parse tree produced by VtlParser#comparisonFunctions.
VtlListener.prototype.enterComparisonFunctions = function(ctx) {
};

// Exit a parse tree produced by VtlParser#comparisonFunctions.
VtlListener.prototype.exitComparisonFunctions = function(ctx) {
};


// Enter a parse tree produced by VtlParser#timeFunctions.
VtlListener.prototype.enterTimeFunctions = function(ctx) {
};

// Exit a parse tree produced by VtlParser#timeFunctions.
VtlListener.prototype.exitTimeFunctions = function(ctx) {
};


// Enter a parse tree produced by VtlParser#setFunctions.
VtlListener.prototype.enterSetFunctions = function(ctx) {
};

// Exit a parse tree produced by VtlParser#setFunctions.
VtlListener.prototype.exitSetFunctions = function(ctx) {
};


// Enter a parse tree produced by VtlParser#hierarchyFunctions.
VtlListener.prototype.enterHierarchyFunctions = function(ctx) {
};

// Exit a parse tree produced by VtlParser#hierarchyFunctions.
VtlListener.prototype.exitHierarchyFunctions = function(ctx) {
};


// Enter a parse tree produced by VtlParser#validationFunctions.
VtlListener.prototype.enterValidationFunctions = function(ctx) {
};

// Exit a parse tree produced by VtlParser#validationFunctions.
VtlListener.prototype.exitValidationFunctions = function(ctx) {
};


// Enter a parse tree produced by VtlParser#conditionalFunctions.
VtlListener.prototype.enterConditionalFunctions = function(ctx) {
};

// Exit a parse tree produced by VtlParser#conditionalFunctions.
VtlListener.prototype.exitConditionalFunctions = function(ctx) {
};


// Enter a parse tree produced by VtlParser#aggregateFunctions.
VtlListener.prototype.enterAggregateFunctions = function(ctx) {
};

// Exit a parse tree produced by VtlParser#aggregateFunctions.
VtlListener.prototype.exitAggregateFunctions = function(ctx) {
};


// Enter a parse tree produced by VtlParser#analyticFunctions.
VtlListener.prototype.enterAnalyticFunctions = function(ctx) {
};

// Exit a parse tree produced by VtlParser#analyticFunctions.
VtlListener.prototype.exitAnalyticFunctions = function(ctx) {
};


// Enter a parse tree produced by VtlParser#datasetClause.
VtlListener.prototype.enterDatasetClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#datasetClause.
VtlListener.prototype.exitDatasetClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#renameClause.
VtlListener.prototype.enterRenameClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#renameClause.
VtlListener.prototype.exitRenameClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#aggrClause.
VtlListener.prototype.enterAggrClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#aggrClause.
VtlListener.prototype.exitAggrClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#filterClause.
VtlListener.prototype.enterFilterClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#filterClause.
VtlListener.prototype.exitFilterClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#calcClause.
VtlListener.prototype.enterCalcClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#calcClause.
VtlListener.prototype.exitCalcClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#keepClause.
VtlListener.prototype.enterKeepClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#keepClause.
VtlListener.prototype.exitKeepClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#dropClause.
VtlListener.prototype.enterDropClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#dropClause.
VtlListener.prototype.exitDropClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#pivotClause.
VtlListener.prototype.enterPivotClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#pivotClause.
VtlListener.prototype.exitPivotClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#customPivotClause.
VtlListener.prototype.enterCustomPivotClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#customPivotClause.
VtlListener.prototype.exitCustomPivotClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#unipivotClause.
VtlListener.prototype.enterUnipivotClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#unipivotClause.
VtlListener.prototype.exitUnipivotClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#subspaceClause.
VtlListener.prototype.enterSubspaceClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#subspaceClause.
VtlListener.prototype.exitSubspaceClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#joinExpr.
VtlListener.prototype.enterJoinExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#joinExpr.
VtlListener.prototype.exitJoinExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#defOperator.
VtlListener.prototype.enterDefOperator = function(ctx) {
};

// Exit a parse tree produced by VtlParser#defOperator.
VtlListener.prototype.exitDefOperator = function(ctx) {
};


// Enter a parse tree produced by VtlParser#defDatapointRuleset.
VtlListener.prototype.enterDefDatapointRuleset = function(ctx) {
};

// Exit a parse tree produced by VtlParser#defDatapointRuleset.
VtlListener.prototype.exitDefDatapointRuleset = function(ctx) {
};


// Enter a parse tree produced by VtlParser#defHierarchical.
VtlListener.prototype.enterDefHierarchical = function(ctx) {
};

// Exit a parse tree produced by VtlParser#defHierarchical.
VtlListener.prototype.exitDefHierarchical = function(ctx) {
};


// Enter a parse tree produced by VtlParser#callFunctionAtom.
VtlListener.prototype.enterCallFunctionAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#callFunctionAtom.
VtlListener.prototype.exitCallFunctionAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#evalAtom.
VtlListener.prototype.enterEvalAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#evalAtom.
VtlListener.prototype.exitEvalAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#castExpr.
VtlListener.prototype.enterCastExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#castExpr.
VtlListener.prototype.exitCastExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#parameter.
VtlListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by VtlParser#parameter.
VtlListener.prototype.exitParameter = function(ctx) {
};


// Enter a parse tree produced by VtlParser#trimAtom.
VtlListener.prototype.enterTrimAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#trimAtom.
VtlListener.prototype.exitTrimAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#ltrimAtom.
VtlListener.prototype.enterLtrimAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#ltrimAtom.
VtlListener.prototype.exitLtrimAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#rtrimAtom.
VtlListener.prototype.enterRtrimAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#rtrimAtom.
VtlListener.prototype.exitRtrimAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#ucaseAtom.
VtlListener.prototype.enterUcaseAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#ucaseAtom.
VtlListener.prototype.exitUcaseAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#lcaseAtom.
VtlListener.prototype.enterLcaseAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#lcaseAtom.
VtlListener.prototype.exitLcaseAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#substrAtom.
VtlListener.prototype.enterSubstrAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#substrAtom.
VtlListener.prototype.exitSubstrAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#replaceAtom.
VtlListener.prototype.enterReplaceAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#replaceAtom.
VtlListener.prototype.exitReplaceAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#instrAtom.
VtlListener.prototype.enterInstrAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#instrAtom.
VtlListener.prototype.exitInstrAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#lenAtom.
VtlListener.prototype.enterLenAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#lenAtom.
VtlListener.prototype.exitLenAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#modAtom.
VtlListener.prototype.enterModAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#modAtom.
VtlListener.prototype.exitModAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#roundAtom.
VtlListener.prototype.enterRoundAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#roundAtom.
VtlListener.prototype.exitRoundAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#lnAtom.
VtlListener.prototype.enterLnAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#lnAtom.
VtlListener.prototype.exitLnAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#ceilAtom.
VtlListener.prototype.enterCeilAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#ceilAtom.
VtlListener.prototype.exitCeilAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#floorAtom.
VtlListener.prototype.enterFloorAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#floorAtom.
VtlListener.prototype.exitFloorAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#minAtom.
VtlListener.prototype.enterMinAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#minAtom.
VtlListener.prototype.exitMinAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#expAtom.
VtlListener.prototype.enterExpAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#expAtom.
VtlListener.prototype.exitExpAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#powerAtom.
VtlListener.prototype.enterPowerAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#powerAtom.
VtlListener.prototype.exitPowerAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#logAtom.
VtlListener.prototype.enterLogAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#logAtom.
VtlListener.prototype.exitLogAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#sqrtAtom.
VtlListener.prototype.enterSqrtAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#sqrtAtom.
VtlListener.prototype.exitSqrtAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#betweenAtom.
VtlListener.prototype.enterBetweenAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#betweenAtom.
VtlListener.prototype.exitBetweenAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#charsetMatchAtom.
VtlListener.prototype.enterCharsetMatchAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#charsetMatchAtom.
VtlListener.prototype.exitCharsetMatchAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#isNullAtom.
VtlListener.prototype.enterIsNullAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#isNullAtom.
VtlListener.prototype.exitIsNullAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#existInAtom.
VtlListener.prototype.enterExistInAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#existInAtom.
VtlListener.prototype.exitExistInAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#periodAtom.
VtlListener.prototype.enterPeriodAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#periodAtom.
VtlListener.prototype.exitPeriodAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#fillTimeAtom.
VtlListener.prototype.enterFillTimeAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#fillTimeAtom.
VtlListener.prototype.exitFillTimeAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#flowToStockAtom.
VtlListener.prototype.enterFlowToStockAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#flowToStockAtom.
VtlListener.prototype.exitFlowToStockAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#stockToFlowAtom.
VtlListener.prototype.enterStockToFlowAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#stockToFlowAtom.
VtlListener.prototype.exitStockToFlowAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#timeShiftAtom.
VtlListener.prototype.enterTimeShiftAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#timeShiftAtom.
VtlListener.prototype.exitTimeShiftAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#timeAggAtom.
VtlListener.prototype.enterTimeAggAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#timeAggAtom.
VtlListener.prototype.exitTimeAggAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#currentDateAtom.
VtlListener.prototype.enterCurrentDateAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#currentDateAtom.
VtlListener.prototype.exitCurrentDateAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#unionAtom.
VtlListener.prototype.enterUnionAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#unionAtom.
VtlListener.prototype.exitUnionAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#intersectAtom.
VtlListener.prototype.enterIntersectAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#intersectAtom.
VtlListener.prototype.exitIntersectAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#setDiffAtom.
VtlListener.prototype.enterSetDiffAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#setDiffAtom.
VtlListener.prototype.exitSetDiffAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#symDiffAtom.
VtlListener.prototype.enterSymDiffAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#symDiffAtom.
VtlListener.prototype.exitSymDiffAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#hierarchyOperators.
VtlListener.prototype.enterHierarchyOperators = function(ctx) {
};

// Exit a parse tree produced by VtlParser#hierarchyOperators.
VtlListener.prototype.exitHierarchyOperators = function(ctx) {
};


// Enter a parse tree produced by VtlParser#validateDPruleset.
VtlListener.prototype.enterValidateDPruleset = function(ctx) {
};

// Exit a parse tree produced by VtlParser#validateDPruleset.
VtlListener.prototype.exitValidateDPruleset = function(ctx) {
};


// Enter a parse tree produced by VtlParser#validateHRruleset.
VtlListener.prototype.enterValidateHRruleset = function(ctx) {
};

// Exit a parse tree produced by VtlParser#validateHRruleset.
VtlListener.prototype.exitValidateHRruleset = function(ctx) {
};


// Enter a parse tree produced by VtlParser#validationSimple.
VtlListener.prototype.enterValidationSimple = function(ctx) {
};

// Exit a parse tree produced by VtlParser#validationSimple.
VtlListener.prototype.exitValidationSimple = function(ctx) {
};


// Enter a parse tree produced by VtlParser#nvlAtom.
VtlListener.prototype.enterNvlAtom = function(ctx) {
};

// Exit a parse tree produced by VtlParser#nvlAtom.
VtlListener.prototype.exitNvlAtom = function(ctx) {
};


// Enter a parse tree produced by VtlParser#sumAggrComp.
VtlListener.prototype.enterSumAggrComp = function(ctx) {
};

// Exit a parse tree produced by VtlParser#sumAggrComp.
VtlListener.prototype.exitSumAggrComp = function(ctx) {
};


// Enter a parse tree produced by VtlParser#avgAggrComp.
VtlListener.prototype.enterAvgAggrComp = function(ctx) {
};

// Exit a parse tree produced by VtlParser#avgAggrComp.
VtlListener.prototype.exitAvgAggrComp = function(ctx) {
};


// Enter a parse tree produced by VtlParser#countAggrComp.
VtlListener.prototype.enterCountAggrComp = function(ctx) {
};

// Exit a parse tree produced by VtlParser#countAggrComp.
VtlListener.prototype.exitCountAggrComp = function(ctx) {
};


// Enter a parse tree produced by VtlParser#medianAggrComp.
VtlListener.prototype.enterMedianAggrComp = function(ctx) {
};

// Exit a parse tree produced by VtlParser#medianAggrComp.
VtlListener.prototype.exitMedianAggrComp = function(ctx) {
};


// Enter a parse tree produced by VtlParser#minAggrComp.
VtlListener.prototype.enterMinAggrComp = function(ctx) {
};

// Exit a parse tree produced by VtlParser#minAggrComp.
VtlListener.prototype.exitMinAggrComp = function(ctx) {
};


// Enter a parse tree produced by VtlParser#maxAggrComp.
VtlListener.prototype.enterMaxAggrComp = function(ctx) {
};

// Exit a parse tree produced by VtlParser#maxAggrComp.
VtlListener.prototype.exitMaxAggrComp = function(ctx) {
};


// Enter a parse tree produced by VtlParser#stddevPopAggrComp.
VtlListener.prototype.enterStddevPopAggrComp = function(ctx) {
};

// Exit a parse tree produced by VtlParser#stddevPopAggrComp.
VtlListener.prototype.exitStddevPopAggrComp = function(ctx) {
};


// Enter a parse tree produced by VtlParser#stddevSampAggrComp.
VtlListener.prototype.enterStddevSampAggrComp = function(ctx) {
};

// Exit a parse tree produced by VtlParser#stddevSampAggrComp.
VtlListener.prototype.exitStddevSampAggrComp = function(ctx) {
};


// Enter a parse tree produced by VtlParser#varPopAggrComp.
VtlListener.prototype.enterVarPopAggrComp = function(ctx) {
};

// Exit a parse tree produced by VtlParser#varPopAggrComp.
VtlListener.prototype.exitVarPopAggrComp = function(ctx) {
};


// Enter a parse tree produced by VtlParser#varSampAggrComp.
VtlListener.prototype.enterVarSampAggrComp = function(ctx) {
};

// Exit a parse tree produced by VtlParser#varSampAggrComp.
VtlListener.prototype.exitVarSampAggrComp = function(ctx) {
};


// Enter a parse tree produced by VtlParser#sumAggr.
VtlListener.prototype.enterSumAggr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#sumAggr.
VtlListener.prototype.exitSumAggr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#avgAggr.
VtlListener.prototype.enterAvgAggr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#avgAggr.
VtlListener.prototype.exitAvgAggr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#countAggr.
VtlListener.prototype.enterCountAggr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#countAggr.
VtlListener.prototype.exitCountAggr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#medianAggr.
VtlListener.prototype.enterMedianAggr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#medianAggr.
VtlListener.prototype.exitMedianAggr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#minAggr.
VtlListener.prototype.enterMinAggr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#minAggr.
VtlListener.prototype.exitMinAggr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#maxAggr.
VtlListener.prototype.enterMaxAggr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#maxAggr.
VtlListener.prototype.exitMaxAggr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#stddevPopAggr.
VtlListener.prototype.enterStddevPopAggr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#stddevPopAggr.
VtlListener.prototype.exitStddevPopAggr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#stddevSampAggr.
VtlListener.prototype.enterStddevSampAggr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#stddevSampAggr.
VtlListener.prototype.exitStddevSampAggr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#varPopAggr.
VtlListener.prototype.enterVarPopAggr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#varPopAggr.
VtlListener.prototype.exitVarPopAggr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#varSampAggr.
VtlListener.prototype.enterVarSampAggr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#varSampAggr.
VtlListener.prototype.exitVarSampAggr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#sumAn.
VtlListener.prototype.enterSumAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#sumAn.
VtlListener.prototype.exitSumAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#avgAn.
VtlListener.prototype.enterAvgAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#avgAn.
VtlListener.prototype.exitAvgAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#countAn.
VtlListener.prototype.enterCountAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#countAn.
VtlListener.prototype.exitCountAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#medianAn.
VtlListener.prototype.enterMedianAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#medianAn.
VtlListener.prototype.exitMedianAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#minAn.
VtlListener.prototype.enterMinAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#minAn.
VtlListener.prototype.exitMinAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#maxAn.
VtlListener.prototype.enterMaxAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#maxAn.
VtlListener.prototype.exitMaxAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#stddevPopAn.
VtlListener.prototype.enterStddevPopAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#stddevPopAn.
VtlListener.prototype.exitStddevPopAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#stddevSampAn.
VtlListener.prototype.enterStddevSampAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#stddevSampAn.
VtlListener.prototype.exitStddevSampAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#varPopAn.
VtlListener.prototype.enterVarPopAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#varPopAn.
VtlListener.prototype.exitVarPopAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#varSampAn.
VtlListener.prototype.enterVarSampAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#varSampAn.
VtlListener.prototype.exitVarSampAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#firstValueAn.
VtlListener.prototype.enterFirstValueAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#firstValueAn.
VtlListener.prototype.exitFirstValueAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#lastValueAn.
VtlListener.prototype.enterLastValueAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#lastValueAn.
VtlListener.prototype.exitLastValueAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#lagAn.
VtlListener.prototype.enterLagAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#lagAn.
VtlListener.prototype.exitLagAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#leadAn.
VtlListener.prototype.enterLeadAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#leadAn.
VtlListener.prototype.exitLeadAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#rankAn.
VtlListener.prototype.enterRankAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#rankAn.
VtlListener.prototype.exitRankAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#ratioToReportAn.
VtlListener.prototype.enterRatioToReportAn = function(ctx) {
};

// Exit a parse tree produced by VtlParser#ratioToReportAn.
VtlListener.prototype.exitRatioToReportAn = function(ctx) {
};


// Enter a parse tree produced by VtlParser#renameClauseItem.
VtlListener.prototype.enterRenameClauseItem = function(ctx) {
};

// Exit a parse tree produced by VtlParser#renameClauseItem.
VtlListener.prototype.exitRenameClauseItem = function(ctx) {
};


// Enter a parse tree produced by VtlParser#componentMembership.
VtlListener.prototype.enterComponentMembership = function(ctx) {
};

// Exit a parse tree produced by VtlParser#componentMembership.
VtlListener.prototype.exitComponentMembership = function(ctx) {
};


// Enter a parse tree produced by VtlParser#component.
VtlListener.prototype.enterComponent = function(ctx) {
};

// Exit a parse tree produced by VtlParser#component.
VtlListener.prototype.exitComponent = function(ctx) {
};


// Enter a parse tree produced by VtlParser#aggregateClause.
VtlListener.prototype.enterAggregateClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#aggregateClause.
VtlListener.prototype.exitAggregateClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#aggrFunctionClause.
VtlListener.prototype.enterAggrFunctionClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#aggrFunctionClause.
VtlListener.prototype.exitAggrFunctionClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#calcClauseItem.
VtlListener.prototype.enterCalcClauseItem = function(ctx) {
};

// Exit a parse tree produced by VtlParser#calcClauseItem.
VtlListener.prototype.exitCalcClauseItem = function(ctx) {
};


// Enter a parse tree produced by VtlParser#subspaceClauseItem.
VtlListener.prototype.enterSubspaceClauseItem = function(ctx) {
};

// Exit a parse tree produced by VtlParser#subspaceClauseItem.
VtlListener.prototype.exitSubspaceClauseItem = function(ctx) {
};


// Enter a parse tree produced by VtlParser#joinClauseWithoutUsing.
VtlListener.prototype.enterJoinClauseWithoutUsing = function(ctx) {
};

// Exit a parse tree produced by VtlParser#joinClauseWithoutUsing.
VtlListener.prototype.exitJoinClauseWithoutUsing = function(ctx) {
};


// Enter a parse tree produced by VtlParser#joinClause.
VtlListener.prototype.enterJoinClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#joinClause.
VtlListener.prototype.exitJoinClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#joinClauseItem.
VtlListener.prototype.enterJoinClauseItem = function(ctx) {
};

// Exit a parse tree produced by VtlParser#joinClauseItem.
VtlListener.prototype.exitJoinClauseItem = function(ctx) {
};


// Enter a parse tree produced by VtlParser#joinBody.
VtlListener.prototype.enterJoinBody = function(ctx) {
};

// Exit a parse tree produced by VtlParser#joinBody.
VtlListener.prototype.exitJoinBody = function(ctx) {
};


// Enter a parse tree produced by VtlParser#joinApplyClause.
VtlListener.prototype.enterJoinApplyClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#joinApplyClause.
VtlListener.prototype.exitJoinApplyClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#partitionByClause.
VtlListener.prototype.enterPartitionByClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#partitionByClause.
VtlListener.prototype.exitPartitionByClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#orderByClause.
VtlListener.prototype.enterOrderByClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#orderByClause.
VtlListener.prototype.exitOrderByClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#orderByItem.
VtlListener.prototype.enterOrderByItem = function(ctx) {
};

// Exit a parse tree produced by VtlParser#orderByItem.
VtlListener.prototype.exitOrderByItem = function(ctx) {
};


// Enter a parse tree produced by VtlParser#windowingClause.
VtlListener.prototype.enterWindowingClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#windowingClause.
VtlListener.prototype.exitWindowingClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#limitClauseItem.
VtlListener.prototype.enterLimitClauseItem = function(ctx) {
};

// Exit a parse tree produced by VtlParser#limitClauseItem.
VtlListener.prototype.exitLimitClauseItem = function(ctx) {
};


// Enter a parse tree produced by VtlParser#groupByOrExcept.
VtlListener.prototype.enterGroupByOrExcept = function(ctx) {
};

// Exit a parse tree produced by VtlParser#groupByOrExcept.
VtlListener.prototype.exitGroupByOrExcept = function(ctx) {
};


// Enter a parse tree produced by VtlParser#groupAll.
VtlListener.prototype.enterGroupAll = function(ctx) {
};

// Exit a parse tree produced by VtlParser#groupAll.
VtlListener.prototype.exitGroupAll = function(ctx) {
};


// Enter a parse tree produced by VtlParser#havingClause.
VtlListener.prototype.enterHavingClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#havingClause.
VtlListener.prototype.exitHavingClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#parameterItem.
VtlListener.prototype.enterParameterItem = function(ctx) {
};

// Exit a parse tree produced by VtlParser#parameterItem.
VtlListener.prototype.exitParameterItem = function(ctx) {
};


// Enter a parse tree produced by VtlParser#outputParameterType.
VtlListener.prototype.enterOutputParameterType = function(ctx) {
};

// Exit a parse tree produced by VtlParser#outputParameterType.
VtlListener.prototype.exitOutputParameterType = function(ctx) {
};


// Enter a parse tree produced by VtlParser#inputParameterType.
VtlListener.prototype.enterInputParameterType = function(ctx) {
};

// Exit a parse tree produced by VtlParser#inputParameterType.
VtlListener.prototype.exitInputParameterType = function(ctx) {
};


// Enter a parse tree produced by VtlParser#rulesetType.
VtlListener.prototype.enterRulesetType = function(ctx) {
};

// Exit a parse tree produced by VtlParser#rulesetType.
VtlListener.prototype.exitRulesetType = function(ctx) {
};


// Enter a parse tree produced by VtlParser#scalarType.
VtlListener.prototype.enterScalarType = function(ctx) {
};

// Exit a parse tree produced by VtlParser#scalarType.
VtlListener.prototype.exitScalarType = function(ctx) {
};


// Enter a parse tree produced by VtlParser#componentType.
VtlListener.prototype.enterComponentType = function(ctx) {
};

// Exit a parse tree produced by VtlParser#componentType.
VtlListener.prototype.exitComponentType = function(ctx) {
};


// Enter a parse tree produced by VtlParser#datasetType.
VtlListener.prototype.enterDatasetType = function(ctx) {
};

// Exit a parse tree produced by VtlParser#datasetType.
VtlListener.prototype.exitDatasetType = function(ctx) {
};


// Enter a parse tree produced by VtlParser#scalarSetType.
VtlListener.prototype.enterScalarSetType = function(ctx) {
};

// Exit a parse tree produced by VtlParser#scalarSetType.
VtlListener.prototype.exitScalarSetType = function(ctx) {
};


// Enter a parse tree produced by VtlParser#dataPoint.
VtlListener.prototype.enterDataPoint = function(ctx) {
};

// Exit a parse tree produced by VtlParser#dataPoint.
VtlListener.prototype.exitDataPoint = function(ctx) {
};


// Enter a parse tree produced by VtlParser#dataPointVd.
VtlListener.prototype.enterDataPointVd = function(ctx) {
};

// Exit a parse tree produced by VtlParser#dataPointVd.
VtlListener.prototype.exitDataPointVd = function(ctx) {
};


// Enter a parse tree produced by VtlParser#dataPointVar.
VtlListener.prototype.enterDataPointVar = function(ctx) {
};

// Exit a parse tree produced by VtlParser#dataPointVar.
VtlListener.prototype.exitDataPointVar = function(ctx) {
};


// Enter a parse tree produced by VtlParser#hrRulesetType.
VtlListener.prototype.enterHrRulesetType = function(ctx) {
};

// Exit a parse tree produced by VtlParser#hrRulesetType.
VtlListener.prototype.exitHrRulesetType = function(ctx) {
};


// Enter a parse tree produced by VtlParser#hrRulesetVdType.
VtlListener.prototype.enterHrRulesetVdType = function(ctx) {
};

// Exit a parse tree produced by VtlParser#hrRulesetVdType.
VtlListener.prototype.exitHrRulesetVdType = function(ctx) {
};


// Enter a parse tree produced by VtlParser#hrRulesetVarType.
VtlListener.prototype.enterHrRulesetVarType = function(ctx) {
};

// Exit a parse tree produced by VtlParser#hrRulesetVarType.
VtlListener.prototype.exitHrRulesetVarType = function(ctx) {
};


// Enter a parse tree produced by VtlParser#valueDomainName.
VtlListener.prototype.enterValueDomainName = function(ctx) {
};

// Exit a parse tree produced by VtlParser#valueDomainName.
VtlListener.prototype.exitValueDomainName = function(ctx) {
};


// Enter a parse tree produced by VtlParser#rulesetID.
VtlListener.prototype.enterRulesetID = function(ctx) {
};

// Exit a parse tree produced by VtlParser#rulesetID.
VtlListener.prototype.exitRulesetID = function(ctx) {
};


// Enter a parse tree produced by VtlParser#rulesetSignature.
VtlListener.prototype.enterRulesetSignature = function(ctx) {
};

// Exit a parse tree produced by VtlParser#rulesetSignature.
VtlListener.prototype.exitRulesetSignature = function(ctx) {
};


// Enter a parse tree produced by VtlParser#signature.
VtlListener.prototype.enterSignature = function(ctx) {
};

// Exit a parse tree produced by VtlParser#signature.
VtlListener.prototype.exitSignature = function(ctx) {
};


// Enter a parse tree produced by VtlParser#ruleClauseDatapoint.
VtlListener.prototype.enterRuleClauseDatapoint = function(ctx) {
};

// Exit a parse tree produced by VtlParser#ruleClauseDatapoint.
VtlListener.prototype.exitRuleClauseDatapoint = function(ctx) {
};


// Enter a parse tree produced by VtlParser#ruleItemDatapoint.
VtlListener.prototype.enterRuleItemDatapoint = function(ctx) {
};

// Exit a parse tree produced by VtlParser#ruleItemDatapoint.
VtlListener.prototype.exitRuleItemDatapoint = function(ctx) {
};


// Enter a parse tree produced by VtlParser#ruleClauseHierarchical.
VtlListener.prototype.enterRuleClauseHierarchical = function(ctx) {
};

// Exit a parse tree produced by VtlParser#ruleClauseHierarchical.
VtlListener.prototype.exitRuleClauseHierarchical = function(ctx) {
};


// Enter a parse tree produced by VtlParser#ruleItemHierarchical.
VtlListener.prototype.enterRuleItemHierarchical = function(ctx) {
};

// Exit a parse tree produced by VtlParser#ruleItemHierarchical.
VtlListener.prototype.exitRuleItemHierarchical = function(ctx) {
};


// Enter a parse tree produced by VtlParser#hierRuleSignature.
VtlListener.prototype.enterHierRuleSignature = function(ctx) {
};

// Exit a parse tree produced by VtlParser#hierRuleSignature.
VtlListener.prototype.exitHierRuleSignature = function(ctx) {
};


// Enter a parse tree produced by VtlParser#valueDomainSignature.
VtlListener.prototype.enterValueDomainSignature = function(ctx) {
};

// Exit a parse tree produced by VtlParser#valueDomainSignature.
VtlListener.prototype.exitValueDomainSignature = function(ctx) {
};


// Enter a parse tree produced by VtlParser#codeItemRelation.
VtlListener.prototype.enterCodeItemRelation = function(ctx) {
};

// Exit a parse tree produced by VtlParser#codeItemRelation.
VtlListener.prototype.exitCodeItemRelation = function(ctx) {
};


// Enter a parse tree produced by VtlParser#codeItemRelationClause.
VtlListener.prototype.enterCodeItemRelationClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#codeItemRelationClause.
VtlListener.prototype.exitCodeItemRelationClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#conditionConstraint.
VtlListener.prototype.enterConditionConstraint = function(ctx) {
};

// Exit a parse tree produced by VtlParser#conditionConstraint.
VtlListener.prototype.exitConditionConstraint = function(ctx) {
};


// Enter a parse tree produced by VtlParser#rangeConstraint.
VtlListener.prototype.enterRangeConstraint = function(ctx) {
};

// Exit a parse tree produced by VtlParser#rangeConstraint.
VtlListener.prototype.exitRangeConstraint = function(ctx) {
};


// Enter a parse tree produced by VtlParser#compConstraint.
VtlListener.prototype.enterCompConstraint = function(ctx) {
};

// Exit a parse tree produced by VtlParser#compConstraint.
VtlListener.prototype.exitCompConstraint = function(ctx) {
};


// Enter a parse tree produced by VtlParser#multModifier.
VtlListener.prototype.enterMultModifier = function(ctx) {
};

// Exit a parse tree produced by VtlParser#multModifier.
VtlListener.prototype.exitMultModifier = function(ctx) {
};


// Enter a parse tree produced by VtlParser#validationOutput.
VtlListener.prototype.enterValidationOutput = function(ctx) {
};

// Exit a parse tree produced by VtlParser#validationOutput.
VtlListener.prototype.exitValidationOutput = function(ctx) {
};


// Enter a parse tree produced by VtlParser#validationMode.
VtlListener.prototype.enterValidationMode = function(ctx) {
};

// Exit a parse tree produced by VtlParser#validationMode.
VtlListener.prototype.exitValidationMode = function(ctx) {
};


// Enter a parse tree produced by VtlParser#conditionClause.
VtlListener.prototype.enterConditionClause = function(ctx) {
};

// Exit a parse tree produced by VtlParser#conditionClause.
VtlListener.prototype.exitConditionClause = function(ctx) {
};


// Enter a parse tree produced by VtlParser#inputMode.
VtlListener.prototype.enterInputMode = function(ctx) {
};

// Exit a parse tree produced by VtlParser#inputMode.
VtlListener.prototype.exitInputMode = function(ctx) {
};


// Enter a parse tree produced by VtlParser#imbalanceExpr.
VtlListener.prototype.enterImbalanceExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#imbalanceExpr.
VtlListener.prototype.exitImbalanceExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#inputModeHierarchy.
VtlListener.prototype.enterInputModeHierarchy = function(ctx) {
};

// Exit a parse tree produced by VtlParser#inputModeHierarchy.
VtlListener.prototype.exitInputModeHierarchy = function(ctx) {
};


// Enter a parse tree produced by VtlParser#outputModeHierarchy.
VtlListener.prototype.enterOutputModeHierarchy = function(ctx) {
};

// Exit a parse tree produced by VtlParser#outputModeHierarchy.
VtlListener.prototype.exitOutputModeHierarchy = function(ctx) {
};


// Enter a parse tree produced by VtlParser#alias.
VtlListener.prototype.enterAlias = function(ctx) {
};

// Exit a parse tree produced by VtlParser#alias.
VtlListener.prototype.exitAlias = function(ctx) {
};


// Enter a parse tree produced by VtlParser#varID.
VtlListener.prototype.enterVarID = function(ctx) {
};

// Exit a parse tree produced by VtlParser#varID.
VtlListener.prototype.exitVarID = function(ctx) {
};


// Enter a parse tree produced by VtlParser#componentID.
VtlListener.prototype.enterComponentID = function(ctx) {
};

// Exit a parse tree produced by VtlParser#componentID.
VtlListener.prototype.exitComponentID = function(ctx) {
};


// Enter a parse tree produced by VtlParser#lists.
VtlListener.prototype.enterLists = function(ctx) {
};

// Exit a parse tree produced by VtlParser#lists.
VtlListener.prototype.exitLists = function(ctx) {
};


// Enter a parse tree produced by VtlParser#erCode.
VtlListener.prototype.enterErCode = function(ctx) {
};

// Exit a parse tree produced by VtlParser#erCode.
VtlListener.prototype.exitErCode = function(ctx) {
};


// Enter a parse tree produced by VtlParser#erLevel.
VtlListener.prototype.enterErLevel = function(ctx) {
};

// Exit a parse tree produced by VtlParser#erLevel.
VtlListener.prototype.exitErLevel = function(ctx) {
};


// Enter a parse tree produced by VtlParser#comparisonOperand.
VtlListener.prototype.enterComparisonOperand = function(ctx) {
};

// Exit a parse tree produced by VtlParser#comparisonOperand.
VtlListener.prototype.exitComparisonOperand = function(ctx) {
};


// Enter a parse tree produced by VtlParser#optionalExpr.
VtlListener.prototype.enterOptionalExpr = function(ctx) {
};

// Exit a parse tree produced by VtlParser#optionalExpr.
VtlListener.prototype.exitOptionalExpr = function(ctx) {
};


// Enter a parse tree produced by VtlParser#componentRole.
VtlListener.prototype.enterComponentRole = function(ctx) {
};

// Exit a parse tree produced by VtlParser#componentRole.
VtlListener.prototype.exitComponentRole = function(ctx) {
};


// Enter a parse tree produced by VtlParser#viralAttribute.
VtlListener.prototype.enterViralAttribute = function(ctx) {
};

// Exit a parse tree produced by VtlParser#viralAttribute.
VtlListener.prototype.exitViralAttribute = function(ctx) {
};


// Enter a parse tree produced by VtlParser#valueDomainID.
VtlListener.prototype.enterValueDomainID = function(ctx) {
};

// Exit a parse tree produced by VtlParser#valueDomainID.
VtlListener.prototype.exitValueDomainID = function(ctx) {
};


// Enter a parse tree produced by VtlParser#operatorID.
VtlListener.prototype.enterOperatorID = function(ctx) {
};

// Exit a parse tree produced by VtlParser#operatorID.
VtlListener.prototype.exitOperatorID = function(ctx) {
};


// Enter a parse tree produced by VtlParser#routineName.
VtlListener.prototype.enterRoutineName = function(ctx) {
};

// Exit a parse tree produced by VtlParser#routineName.
VtlListener.prototype.exitRoutineName = function(ctx) {
};


// Enter a parse tree produced by VtlParser#groupKeyword.
VtlListener.prototype.enterGroupKeyword = function(ctx) {
};

// Exit a parse tree produced by VtlParser#groupKeyword.
VtlListener.prototype.exitGroupKeyword = function(ctx) {
};


// Enter a parse tree produced by VtlParser#constant.
VtlListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by VtlParser#constant.
VtlListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by VtlParser#basicScalarType.
VtlListener.prototype.enterBasicScalarType = function(ctx) {
};

// Exit a parse tree produced by VtlParser#basicScalarType.
VtlListener.prototype.exitBasicScalarType = function(ctx) {
};


// Enter a parse tree produced by VtlParser#retainType.
VtlListener.prototype.enterRetainType = function(ctx) {
};

// Exit a parse tree produced by VtlParser#retainType.
VtlListener.prototype.exitRetainType = function(ctx) {
};



exports.VtlListener = VtlListener;