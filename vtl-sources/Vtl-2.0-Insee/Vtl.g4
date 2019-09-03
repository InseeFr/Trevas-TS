grammar Vtl;
import VtlTokens;

start:
    (statement  EOL)* EOF
;

/* statement */
statement:
    varID ASSIGN expr                # temporaryAssignment
    | varID PUT_SYMBOL expr          # persistAssignment
    | defOperators                   # defineExpression
;

/* expression */
expr:
    LPAREN expr RPAREN													                                    # parenthesisExpr
    | expr MEMBERSHIP componentID                                                                           # membershipExpr
    | dataset=expr  QLPAREN  clause=datasetClause  QRPAREN                                                  # clauseExpr
    | functions                                                                                             # functionsExpression
    | op=(PLUS|MINUS) right=expr                                                                            # unaryExpr
    | op=NOT right=expr                                                                                     # notExpr
    | left=expr op=(MUL|DIV) right=expr                                                                     # arithmeticExpr
    | left=expr op=(PLUS|MINUS) right=expr                                                                  # arithmeticExpr
    | left=expr op=MINUS right=expr                                                                         # arithmeticExpr
    | left=expr CONCAT right=expr                                                                           # concatExpr
    | left=expr op=comparisonOperand  right=expr                                                            # comparisonExpr
    | left=expr op=(IN|NOT_IN)(lists|valueDomainID)                                                         # inNotInExpr
    | left=expr op=AND right=expr                                                                           # booleanExpr
    | left=expr op=(OR|XOR) right=expr									                            	    # booleanExpr
    | IF  conditionalExpr=expr  THEN thenExpr=expr ELSE elseExpr=expr                                       # ifExpr
    | varID															                                        # varIdExpr
    | constant														                                        # constantExpr
;

/* functions */
functions:
    joinOperators                       # joinFunctions
    | genericOperators                  # genericFunctions
    | stringOperators                   # stringFunctions
    | numericOperators                  # numericFunctions
    | comparisonOperators               # comparisonFunctions
    | timeOperators                     # timeFunctions
    | setOperators                      # setFunctions
    | hierarchyOperators                # hierarchyFunctions
    | validationOperators               # validationFunctions
    | conditionalOperators              # conditionalFunctions
    | aggrOperatorsGrouping             # aggregateFunctions
    | anFunction                        # analyticFunctions
;


/*------------------------------------------------------ Clauses----------------------------------------------- */
datasetClause:
    renameClause
    | aggrClause
    | filterClause
    | calcClause
    | keepClause
    | dropClause
    | pivotClause
    | customPivotClause
    | unipivotClause
    | subspaceClause
;

renameClause:
    RENAME renameClauseItem (COMMA renameClauseItem)*
;

aggrClause:
    AGGREGATE aggregateClause (groupingClause havingClause?)?
;

filterClause:
    FILTER expr
;

calcClause:
    CALC calcClauseItem (COMMA calcClauseItem)*
;

keepClause:
    KEEP componentClause (COMMA componentClause)*
;

dropClause:
    DROP componentClause (COMMA componentClause)*
;

pivotClause:
    PIVOT id=componentID COMMA mea=componentID
;

customPivotClause:
    CUSTOMPIVOT id=componentID COMMA mea=componentID IN constant (COMMA constant)*
;

unipivotClause:
    UNPIVOT id=componentID COMMA mea=componentID
;

subspaceClause:
    SUBSPACE subspaceClauseItem (COMMA subspaceClauseItem)*
;

/*------------------------------------------------------End Clauses----------------------------------------------- */

/************************************************** JOIN FUNCITONS -------------------------------------------*/

joinOperators:
     joinKeyword=(INNER_JOIN | LEFT_JOIN) LPAREN joinClause joinBody RPAREN                                     # joinExpr
     | joinKeyword=(FULL_JOIN | CROSS_JOIN) LPAREN joinClauseWithoutUsing joinBody RPAREN                       # joinExpr
;

/************************************************** END JOIN FUNCITONS -------------------------------------------*/
/* --------------------------------------------Define Functions------------------------------------------------- */
defOperators:
    DEFINE OPERATOR operatorID LPAREN (parameterItem (COMMA parameterItem)*)? RPAREN (RETURNS outputParameterType)? IS expr END OPERATOR        # defOperator
    | DEFINE DATAPOINT RULESET rulesetID LPAREN rulesetSignature RPAREN IS ruleClauseDatapoint END DATAPOINT RULESET                            # defDatapointRuleset
    | DEFINE HIERARCHICAL RULESET rulesetID LPAREN hierRuleSignature RPAREN IS ruleClauseHierarchical  END HIERARCHICAL RULESET                 # defHierarchical
;

/* --------------------------------------------END DEFINE FUNCTIONS------------------------------------------------- */

/*---------------------------------------------------FUNCTIONS-------------------------------------------------*/
genericOperators:
    operatorID LPAREN (parameter (COMMA parameter)*)? RPAREN                                                                                                                    # callFunctionAtom
    | EVAL LPAREN routineName LPAREN (componentID|constant)? (COMMA (componentID|constant))* RPAREN (LANGUAGE STRING_CONSTANT)? (RETURNS outputParameterType)? RPAREN           # evalAtom
    | CAST LPAREN expr COMMA (basicScalarType|valueDomainName) (COMMA STRING_CONSTANT)? RPAREN                                                                                  # castExpr
;

parameter:
    varID
    | constant
    | OPTIONAL
;

stringOperators:
    TRIM LPAREN expr RPAREN												                        # trimAtom
    | LTRIM LPAREN expr RPAREN												                    # ltrimAtom
    | RTRIM LPAREN expr RPAREN												                    # rtrimAtom
    | UCASE LPAREN expr RPAREN												                    # ucaseAtom
    | LCASE LPAREN expr RPAREN												                    # lcaseAtom
    | SUBSTR LPAREN expr (COMMA optionalExpr)* RPAREN		                                    # substrAtom
    | REPLACE LPAREN expr COMMA param=expr ( COMMA optionalExpr)? RPAREN				        # replaceAtom
    | INSTR LPAREN expr COMMA param=expr ( COMMA optionalExpr)? (COMMA optionalExpr)? RPAREN	# instrAtom
    | LEN LPAREN expr RPAREN												                    # lenAtom
;

numericOperators:
    MOD LPAREN left = expr COMMA right = expr RPAREN										    # modAtom
    | ROUND LPAREN expr (COMMA optionalExpr)? RPAREN							                # roundAtom
    | TRUNC LPAREN expr (COMMA optionalExpr)? RPAREN							                # lnAtom
    | CEIL LPAREN expr RPAREN												                    # ceilAtom
    | FLOOR LPAREN expr RPAREN												                    # floorAtom
    | ABS LPAREN expr RPAREN												                    # minAtom
    | EXP LPAREN expr RPAREN												                    # expAtom
    | LN LPAREN expr RPAREN													                    # lnAtom
    | POWER LPAREN left=expr COMMA right=expr RPAREN										    # powerAtom
    | LOG LPAREN left=expr COMMA right=expr RPAREN										        # logAtom
    | SQRT LPAREN expr RPAREN												                    # sqrtAtom
;

comparisonOperators:
     BETWEEN LPAREN element=expr COMMA from=expr COMMA to=expr RPAREN	                    # betweenAtom
    | CHARSET_MATCH LPAREN left=expr COMMA  right=expr RPAREN							    # charsetMatchAtom
    | ISNULL LPAREN expr RPAREN												                # isNullAtom
    | EXISTS_IN LPAREN left=expr COMMA right=expr (COMMA retainType)? RPAREN                # existInAtom
;

timeOperators:
    PERIOD_INDICATOR LPAREN expr? RPAREN                                                                                                # periodAtom
    | FILL_TIME_SERIES LPAREN expr (COMMA (SINGLE|ALL))? RPAREN                                                                         # fillTimeAtom
    | FLOW_TO_STOCK LPAREN expr RPAREN										                                                            # flowToStockAtom
    | STOCK_TO_FLOW LPAREN expr RPAREN										                                                            # stockToFlowAtom
    | TIMESHIFT LPAREN expr COMMA INTEGER_CONSTANT RPAREN                                                                               # timeShiftAtom
    | TIME_AGG LPAREN STRING_CONSTANT (COMMA (STRING_CONSTANT| OPTIONAL ))? (COMMA (expr| OPTIONAL ))? (COMMA (FIRST|LAST))? RPAREN     # timeAggAtom
    | CURRENT_DATE LPAREN RPAREN                                                                                                        # currentDateAtom
;

setOperators:
    UNION LPAREN left=expr (COMMA expr)+ RPAREN                             # unionAtom
    | INTERSECT LPAREN left=expr (COMMA expr)+ RPAREN                       # intersectAtom
    | SETDIFF LPAREN left=expr COMMA right=expr RPAREN                      # setDiffAtom
    | SYMDIFF LPAREN left=expr COMMA right=expr RPAREN                      # symDiffAtom
;
/* hierarchy */
hierarchyOperators:
    HIERARCHY LPAREN op=expr COMMA hrName=IDENTIFIER (conditionClause)? (RULE ruleComponent=componentID)? (validationMode)? (inputModeHierarchy)? outputModeHierarchy? RPAREN
;

validationOperators:
  CHECK_DATAPOINT LPAREN op=expr COMMA dpName=IDENTIFIER (COMPONENTS componentID (COMMA componentID)*)? validationOutput? RPAREN										# validateDPruleset
  | CHECK_HIERARCHY LPAREN op=expr COMMA hrName=IDENTIFIER conditionClause? (RULE componentID)? validationMode? inputMode? validationOutput? RPAREN 	                # validateHRruleset
  | CHECK LPAREN op=expr (codeErr=erCode)? (levelCode=erLevel)? imbalanceExpr?  output=(INVALID|ALL)? RPAREN													        # validationSimple
;

conditionalOperators:
    NVL LPAREN left=expr COMMA right = expr RPAREN							# nvlAtom
;

aggrOperators:
    SUM LPAREN expr RPAREN                    # sumAggrComp
    | AVG LPAREN expr RPAREN                  # avgAggrComp
    | COUNT LPAREN expr? RPAREN               # countAggrComp
    | MEDIAN LPAREN expr RPAREN               # medianAggrComp
    | MIN LPAREN expr RPAREN                  # minAggrComp
    | MAX LPAREN expr RPAREN                  # maxAggrComp
    | STDDEV_POP LPAREN expr RPAREN           # stddevPopAggrComp
    | STDDEV_SAMP LPAREN expr RPAREN          # stddevSampAggrComp
    | VAR_POP LPAREN expr RPAREN              # varPopAggrComp
    | VAR_SAMP LPAREN expr RPAREN             # varSampAggrComp
;

aggrOperatorsGrouping:
    SUM LPAREN expr (groupingClause havingClause?)? RPAREN                      # sumAggr
    | AVG LPAREN expr (groupingClause havingClause?)? RPAREN                    # avgAggr
    | COUNT LPAREN (expr (groupingClause havingClause?)?)? RPAREN               # countAggr
    | MEDIAN LPAREN expr (groupingClause havingClause?)? RPAREN                 # medianAggr
    | MIN LPAREN expr (groupingClause havingClause?)? RPAREN                    # minAggr
    | MAX LPAREN expr (groupingClause havingClause?)? RPAREN                    # maxAggr
    | STDDEV_POP LPAREN expr (groupingClause havingClause?)? RPAREN             # stddevPopAggr
    | STDDEV_SAMP LPAREN expr (groupingClause havingClause?)? RPAREN            # stddevSampAggr
    | VAR_POP LPAREN expr (groupingClause havingClause?)? RPAREN                # varPopAggr
    | VAR_SAMP LPAREN expr (groupingClause havingClause?)? RPAREN               # varSampAggr
;

 anFunction:
    SUM LPAREN expr OVER  LPAREN (partiton=partitionByClause? orderBy=orderByClause? windowing=windowingClause?)RPAREN RPAREN                                       # sumAn
    | AVG LPAREN expr OVER  LPAREN (partiton=partitionByClause? orderBy=orderByClause? windowing=windowingClause?)RPAREN RPAREN                                     # avgAn
    | COUNT LPAREN expr? OVER LPAREN (partiton=partitionByClause? orderBy=orderByClause? windowing=windowingClause?) RPAREN RPAREN                                  # countAn
    | MEDIAN LPAREN expr OVER LPAREN (partiton=partitionByClause? orderBy=orderByClause? windowing=windowingClause?)RPAREN RPAREN                                   # medianAn
    | MIN LPAREN expr OVER LPAREN (partiton=partitionByClause? orderBy=orderByClause? windowing=windowingClause?)RPAREN RPAREN                                      # minAn
    | MAX LPAREN expr OVER  LPAREN (partiton=partitionByClause? orderBy=orderByClause? windowing=windowingClause?)RPAREN RPAREN                                     # maxAn
    | STDDEV_POP LPAREN expr OVER  LPAREN (partiton=partitionByClause? orderBy=orderByClause? windowing=windowingClause?)RPAREN RPAREN                              # stddevPopAn
    | STDDEV_SAMP LPAREN expr OVER  LPAREN (partiton=partitionByClause? orderBy=orderByClause? windowing=windowingClause?)RPAREN RPAREN                             # stddevSampAn
    | VAR_POP LPAREN expr OVER  LPAREN (partiton=partitionByClause? orderBy=orderByClause? windowing=windowingClause?)RPAREN RPAREN                                 # varPopAn
    | VAR_SAMP LPAREN expr OVER  LPAREN (partiton=partitionByClause? orderBy=orderByClause? windowing=windowingClause?)RPAREN RPAREN                                # varSampAn
    | FIRST_VALUE LPAREN expr OVER  LPAREN (partiton=partitionByClause? orderBy=orderByClause? windowing=windowingClause?)RPAREN RPAREN                             # firstValueAn
    | LAST_VALUE LPAREN expr OVER  LPAREN (partiton=partitionByClause? orderBy=orderByClause? windowing=windowingClause?)RPAREN RPAREN                              # lastValueAn
    | LAG  LPAREN expr (COMMA offet=INTEGER_CONSTANT(defaultValue=constant)?)?  OVER  LPAREN (partiton=partitionByClause? orderBy=orderByClause)   RPAREN RPAREN    # lagAn
    | LEAD  LPAREN expr (COMMA offet=INTEGER_CONSTANT(defaultValue=constant)?)?    OVER  LPAREN (partiton=partitionByClause? orderBy=orderByClause)RPAREN RPAREN    # leadAn
    | RANK LPAREN  OVER  LPAREN (partiton=partitionByClause? orderBy=orderByClause) RPAREN RPAREN                                                                   # rankAn
    | RATIO_TO_REPORT LPAREN expr OVER  LPAREN (partiton=partitionByClause) RPAREN RPAREN                                                                           # ratioToReportAn
;
/*---------------------------------------------------END FUNCTIONS-------------------------------------------------*/

/*-------------------------------------------------CLAUSE EXPRESSION------------------------------------------------*/
/*RENAME CLAUSE */
renameClauseItem:
    fromName=componentClause TO toName=componentClause
;

componentClause:
    varID MEMBERSHIP componentID    # componentMembership
    | componentID                   # component
    ;
/*END RENAME CLAUSE*/

/*AGGR CLAUSE*/
aggregateClause:
    aggrFunctionClause (COMMA aggrFunctionClause)*
;

aggrFunctionClause:
    (componentRole)? componentID  ASSIGN  aggrOperators
;
/*END AGGR CLAUSE*/

/*CALC CLAUSE*/
calcClauseItem:
    (componentRole)? componentID  ASSIGN  expr
;
/*END CALC CLAUSE*/

/*SUBSPACE CLAUSE*/
subspaceClauseItem
  :
  componentID  EQ  constant
  ;
/*END SUBSPACE CLAUSE*/
/*----------------------------------------------END CLAUSE EXPRESSION--------------------------------------*/

/*---------------------------------------------JOIN CLAUSE EXPRESSION---------------------------------------*/

joinClauseWithoutUsing:
    joinClauseItem (COMMA joinClauseItem)*
;

joinClause:
    joinClauseItem (COMMA joinClauseItem)* (USING componentID (COMMA componentID)*)?
;

joinClauseItem:
    expr (AS alias)?
;

joinBody:
    filterClause? (calcClause|joinApplyClause|aggrClause)? (keepClause|dropClause)? renameClause?
;

/* JOIN APPLY CLAUSE*/
joinApplyClause:
    APPLY expr
;
/* END JOIN APPLY CLAUSE*/

/*---------------------------------------------END JOIN CLAUSE EXPRESSION---------------------------------------*/

/*-----------------------------------------ANALYTIC CLAUSE -----------------------------------------------*/

partitionByClause:
    PARTITION BY componentID (COMMA componentID)*
;

orderByClause:
    ORDER BY orderByItem (COMMA orderByItem)*
;

orderByItem:
    componentID (ASC|DESC)?
;

windowingClause:
    ((DATA POINTS)|RANGE) BETWEEN from=limitClauseItem AND to=limitClauseItem
;

limitClauseItem:
    INTEGER_CONSTANT PRECEDING
    | INTEGER_CONSTANT FOLLOWING
    | CURRENT DATA POINT
    | UNBOUNDED PRECEDING
    | UNBOUNDED FOLLOWING
;

/*--------------------------------------------END ANALYTIC CLAUSE -----------------------------------------------*/
/* ------------------------------------------------------------ GROUPING CLAUSE ------------------------------------*/
groupingClause:
    groupKeyword componentID (COMMA componentID)*   # groupByOrExcept
    | GROUP ALL expr                              # groupAll
  ;

havingClause:
  HAVING expr
  ;
/*-------------------------------------------END GROUPING CLAUSE-----------------------------------------------------*/

/*------------------------------------------------DEFINE OPERATOR ---------------------------------------------------*/

parameterItem:
    varID inputParameterType (DEFAULT constant)?
;

outputParameterType:
    scalarType
    | datasetType
    | componentType
;

inputParameterType:
    scalarType
    | datasetType
    | scalarSetType
    | rulesetType
    | componentType
;

rulesetType:
    RULESET
    | dpRuleset
    | hrRuleset
;

scalarType:
    (basicScalarType|valueDomainName)scalarTypeConstraint?((NOT)? NULL_CONSTANT)?
;

componentType:
    componentRole ( LT   scalarType  MT  )?
;

datasetType:
    DATASET ( GLPAREN compConstraint (COMMA compConstraint)*  GRPAREN  )?
;


scalarSetType:
    SET ( LT   scalarType  MT  )?
;

dpRuleset:
    DATAPOINT                                                                               # dataPoint
    | DATAPOINT_ON_VD  (GLPAREN  valueDomainName (MUL valueDomainName)*  GRPAREN )?         # dataPointVd
    | DATAPOINT_ON_VAR  (GLPAREN  varID (MUL varID)*  GRPAREN )?                            # dataPointVar
;

hrRuleset:
    HIERARCHICAL                                                                                                            # hrRulesetType
    | HIERARCHICAL_ON_VD ( GLPAREN  vdName=IDENTIFIER (LPAREN valueDomainName (MUL valueDomainName)* RPAREN)?  GRPAREN )?   # hrRulesetVdType
    | HIERARCHICAL_ON_VAR ( GLPAREN  varName=varID (LPAREN  varID (MUL varID)* RPAREN)?  GRPAREN )?                         # hrRulesetVarType
;

valueDomainName:
    IDENTIFIER
;

rulesetID:
    IDENTIFIER
;

rulesetSignature:
    (VALUE_DOMAIN|VARIABLE) signature (COMMA signature)*
;

signature:
    varID (AS alias)?
;

ruleClauseDatapoint:
    ruleItemDatapoint ( EOL  ruleItemDatapoint)*
;

ruleItemDatapoint:
    (ruleName=IDENTIFIER  ':' )? ( WHEN antecedentContiditon=expr THEN )? consequentCondition=expr (erCode)? (erLevel)?
;

ruleClauseHierarchical:
    ruleItemHierarchical ( EOL  ruleItemHierarchical)*
 ;

ruleItemHierarchical:
    (ruleName=IDENTIFIER  ':' )? codeItemRelation (erCode)? (erLevel)?
 ;

 hierRuleSignature:
    (VALUE_DOMAIN|VARIABLE) (CONDITION valueDomainSignature)? RULE IDENTIFIER
 ;

 valueDomainSignature:
    signature (COMMA signature)*
 ;

codeItemRelation:
    ( WHEN expr THEN )? codeItemRef=IDENTIFIER comparisonOperand? codeItemRelationClause (codeItemRelationClause)*
;

codeItemRelationClause:
    (opAdd=( PLUS | MINUS  ))? rightCodeItem=IDENTIFIER ( QLPAREN  rightCondition=expr  QRPAREN )?
;



scalarTypeConstraint:
    QLPAREN  expr  QRPAREN                              # conditionConstraint
    | GLPAREN  constant (COMMA constant)*  GRPAREN      # rangeConstraint
;


compConstraint:
    componentType (componentID|multModifier)
;

multModifier:
    OPTIONAL  ( PLUS | MUL )?
;

/*--------------------------------------------END DEFINE OPERATOR ---------------------------------------------------*/


/*------------------------------------------VALIDATION OPERATOR ---------------------------------------------------*/
validationOutput:
    INVALID|ALL_MEASURES|ALL
;

validationMode:
    NON_NULL|NON_ZERO|PARTIAL_NULL|PARTIAL_ZERO|ALWAYS_NULL|ALWAYS_ZERO
;

conditionClause:
    CONDITION componentID (COMMA componentID)*
;

inputMode:
    DATASET|DATASET_PRIORITY
;

imbalanceExpr:
    IMBALANCE expr
;

inputModeHierarchy:
    RULE|DATASET|RULE_PRIORITY
;

outputModeHierarchy:
    COMPUTED|ALL
;
/*--------------------------------------END VALIDATION OPERATOR ---------------------------------------------------*/
alias:
    IDENTIFIER
;

varID:
    IDENTIFIER
;

componentID:
    IDENTIFIER
;

lists:
    GLPAREN  constant (COMMA constant)*  GRPAREN
;

erCode:
    ERRORCODE  constant
;

erLevel:
    ERRORLEVEL  constant
;

comparisonOperand:
    MT
    | ME
    | LE
    | LT
    | EQ
    | NEQ
;

/* Conditional */
optionalExpr:
    expr
    | OPTIONAL
;

/* Role name*/
componentRole:
    MEASURE
    | COMPONENT
    | DIMENSION
    | ATTRIBUTE
    | viralAttribute
;

viralAttribute:
    VIRAL ATTRIBUTE
;

valueDomainID:
    IDENTIFIER
    ;

operatorID:
    IDENTIFIER
;

routineName:
    IDENTIFIER
;

groupKeyword:
    (GROUP BY)
    | (GROUP EXCEPT)
;

constant:
    INTEGER_CONSTANT
    | FLOAT_CONSTANT
    | BOOLEAN_CONSTANT
    | STRING_CONSTANT
    | NULL_CONSTANT
;

basicScalarType:
    STRING
    | INTEGER
    | NUMBER
    | BOOLEAN
    | DATE
    | TIME_PERIOD
    | DURATION
    | SCALAR
    | TIME
;

retainType:
    BOOLEAN_CONSTANT
    | ALL
;

