// Generated from ../../vtl-sources/Vtl-2.0/Vtl.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { VtlListener } from "./VtlListener";
import { VtlVisitor } from "./VtlVisitor";


export class VtlParser extends Parser {
	public static readonly LPAREN = 1;
	public static readonly RPAREN = 2;
	public static readonly QLPAREN = 3;
	public static readonly QRPAREN = 4;
	public static readonly GLPAREN = 5;
	public static readonly GRPAREN = 6;
	public static readonly EQ = 7;
	public static readonly LT = 8;
	public static readonly MT = 9;
	public static readonly ME = 10;
	public static readonly NEQ = 11;
	public static readonly LE = 12;
	public static readonly PLUS = 13;
	public static readonly MINUS = 14;
	public static readonly MUL = 15;
	public static readonly DIV = 16;
	public static readonly COMMA = 17;
	public static readonly POINTER = 18;
	public static readonly COLON = 19;
	public static readonly ASSIGN = 20;
	public static readonly MEMBERSHIP = 21;
	public static readonly EVAL = 22;
	public static readonly IF = 23;
	public static readonly THEN = 24;
	public static readonly ELSE = 25;
	public static readonly USING = 26;
	public static readonly WITH = 27;
	public static readonly CURRENT_DATE = 28;
	public static readonly ON = 29;
	public static readonly DROP = 30;
	public static readonly KEEP = 31;
	public static readonly CALC = 32;
	public static readonly ATTRCALC = 33;
	public static readonly RENAME = 34;
	public static readonly AS = 35;
	public static readonly AND = 36;
	public static readonly OR = 37;
	public static readonly XOR = 38;
	public static readonly NOT = 39;
	public static readonly BETWEEN = 40;
	public static readonly IN = 41;
	public static readonly NOT_IN = 42;
	public static readonly NULL_CONSTANT = 43;
	public static readonly ISNULL = 44;
	public static readonly EX = 45;
	public static readonly UNION = 46;
	public static readonly DIFF = 47;
	public static readonly SYMDIFF = 48;
	public static readonly INTERSECT = 49;
	public static readonly KEYS = 50;
	public static readonly INTYEAR = 51;
	public static readonly INTMONTH = 52;
	public static readonly INTDAY = 53;
	public static readonly CHECK = 54;
	public static readonly EXISTS_IN = 55;
	public static readonly TO = 56;
	public static readonly RETURN = 57;
	public static readonly IMBALANCE = 58;
	public static readonly ERRORCODE = 59;
	public static readonly ALL = 60;
	public static readonly AGGREGATE = 61;
	public static readonly ERRORLEVEL = 62;
	public static readonly ORDER = 63;
	public static readonly BY = 64;
	public static readonly RANK = 65;
	public static readonly ASC = 66;
	public static readonly DESC = 67;
	public static readonly MIN = 68;
	public static readonly MAX = 69;
	public static readonly FIRST = 70;
	public static readonly LAST = 71;
	public static readonly INDEXOF = 72;
	public static readonly ABS = 73;
	public static readonly KEY = 74;
	public static readonly LN = 75;
	public static readonly LOG = 76;
	public static readonly TRUNC = 77;
	public static readonly ROUND = 78;
	public static readonly POWER = 79;
	public static readonly MOD = 80;
	public static readonly LEN = 81;
	public static readonly CONCAT = 82;
	public static readonly TRIM = 83;
	public static readonly UCASE = 84;
	public static readonly LCASE = 85;
	public static readonly SUBSTR = 86;
	public static readonly SUM = 87;
	public static readonly AVG = 88;
	public static readonly MEDIAN = 89;
	public static readonly COUNT = 90;
	public static readonly DIMENSION = 91;
	public static readonly MEASURE = 92;
	public static readonly ATTRIBUTE = 93;
	public static readonly FILTER = 94;
	public static readonly MERGE = 95;
	public static readonly EXP = 96;
	public static readonly ROLE = 97;
	public static readonly VIRAL = 98;
	public static readonly CHARSET_MATCH = 99;
	public static readonly TYPE = 100;
	public static readonly NVL = 101;
	public static readonly HIERARCHY = 102;
	public static readonly OPTIONAL = 103;
	public static readonly INVALID = 104;
	public static readonly LEVENSHTEIN = 105;
	public static readonly VALUE_DOMAIN = 106;
	public static readonly VARIABLE = 107;
	public static readonly DATA = 108;
	public static readonly STRUCTURE = 109;
	public static readonly DATASET = 110;
	public static readonly OPERATOR = 111;
	public static readonly DEFINE = 112;
	public static readonly PUT_SYMBOL = 113;
	public static readonly DATAPOINT = 114;
	public static readonly HIERARCHICAL = 115;
	public static readonly RULESET = 116;
	public static readonly RULE = 117;
	public static readonly END = 118;
	public static readonly ALTER_DATASET = 119;
	public static readonly LTRIM = 120;
	public static readonly RTRIM = 121;
	public static readonly INSTR = 122;
	public static readonly REPLACE = 123;
	public static readonly CEIL = 124;
	public static readonly FLOOR = 125;
	public static readonly SQRT = 126;
	public static readonly ANY = 127;
	public static readonly SETDIFF = 128;
	public static readonly STDDEV_POP = 129;
	public static readonly STDDEV_SAMP = 130;
	public static readonly VAR_POP = 131;
	public static readonly VAR_SAMP = 132;
	public static readonly GROUP = 133;
	public static readonly EXCEPT = 134;
	public static readonly HAVING = 135;
	public static readonly FIRST_VALUE = 136;
	public static readonly LAST_VALUE = 137;
	public static readonly LAG = 138;
	public static readonly LEAD = 139;
	public static readonly RATIO_TO_REPORT = 140;
	public static readonly OVER = 141;
	public static readonly PRECEDING = 142;
	public static readonly FOLLOWING = 143;
	public static readonly UNBOUNDED = 144;
	public static readonly PARTITION = 145;
	public static readonly ROWS = 146;
	public static readonly RANGE = 147;
	public static readonly CURRENT = 148;
	public static readonly VALID = 149;
	public static readonly FILL_TIME_SERIES = 150;
	public static readonly FLOW_TO_STOCK = 151;
	public static readonly STOCK_TO_FLOW = 152;
	public static readonly TIMESHIFT = 153;
	public static readonly MEASURES = 154;
	public static readonly NO_MEASURES = 155;
	public static readonly CONDITION = 156;
	public static readonly BOOLEAN = 157;
	public static readonly DATE = 158;
	public static readonly TIME_PERIOD = 159;
	public static readonly NUMBER = 160;
	public static readonly STRING = 161;
	public static readonly TIME = 162;
	public static readonly INTEGER = 163;
	public static readonly FLOAT = 164;
	public static readonly LIST = 165;
	public static readonly RECORD = 166;
	public static readonly RESTRICT = 167;
	public static readonly YYYY = 168;
	public static readonly MM = 169;
	public static readonly DD = 170;
	public static readonly MAX_LENGTH = 171;
	public static readonly REGEXP = 172;
	public static readonly IS = 173;
	public static readonly WHEN = 174;
	public static readonly FROM = 175;
	public static readonly AGGREGATES = 176;
	public static readonly POINTS = 177;
	public static readonly POINT = 178;
	public static readonly TOTAL = 179;
	public static readonly PARTIAL = 180;
	public static readonly ALWAYS = 181;
	public static readonly INNER_JOIN = 182;
	public static readonly LEFT_JOIN = 183;
	public static readonly CROSS_JOIN = 184;
	public static readonly FULL_JOIN = 185;
	public static readonly MAPS_FROM = 186;
	public static readonly MAPS_TO = 187;
	public static readonly MAP_TO = 188;
	public static readonly MAP_FROM = 189;
	public static readonly RETURNS = 190;
	public static readonly PIVOT = 191;
	public static readonly CUSTOMPIVOT = 192;
	public static readonly UNPIVOT = 193;
	public static readonly SUBSPACE = 194;
	public static readonly APPLY = 195;
	public static readonly CONDITIONED = 196;
	public static readonly PERIOD_INDICATOR = 197;
	public static readonly SINGLE = 198;
	public static readonly DURATION = 199;
	public static readonly TIME_AGG = 200;
	public static readonly UNIT = 201;
	public static readonly VALUE = 202;
	public static readonly VALUEDOMAINS = 203;
	public static readonly VARIABLES = 204;
	public static readonly INPUT = 205;
	public static readonly OUTPUT = 206;
	public static readonly CAST = 207;
	public static readonly RULE_PRIORITY = 208;
	public static readonly DATASET_PRIORITY = 209;
	public static readonly DEFAULT = 210;
	public static readonly CHECK_DATAPOINT = 211;
	public static readonly CHECK_HIERARCHY = 212;
	public static readonly COMPUTED = 213;
	public static readonly NON_NULL = 214;
	public static readonly NON_ZERO = 215;
	public static readonly PARTIAL_NULL = 216;
	public static readonly PARTIAL_ZERO = 217;
	public static readonly ALWAYS_NULL = 218;
	public static readonly ALWAYS_ZERO = 219;
	public static readonly COMPONENTS = 220;
	public static readonly ALL_MEASURES = 221;
	public static readonly SCALAR = 222;
	public static readonly COMPONENT = 223;
	public static readonly DATAPOINT_ON_VD = 224;
	public static readonly DATAPOINT_ON_VAR = 225;
	public static readonly HIERARCHICAL_ON_VD = 226;
	public static readonly HIERARCHICAL_ON_VAR = 227;
	public static readonly SET = 228;
	public static readonly LANGUAGE = 229;
	public static readonly INTEGER_CONSTANT = 230;
	public static readonly NUMBER_CONSTANT = 231;
	public static readonly BOOLEAN_CONSTANT = 232;
	public static readonly STRING_CONSTANT = 233;
	public static readonly IDENTIFIER = 234;
	public static readonly WS = 235;
	public static readonly EOL = 236;
	public static readonly ML_COMMENT = 237;
	public static readonly SL_COMMENT = 238;
	public static readonly RULE_start = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expr = 2;
	public static readonly RULE_functions = 3;
	public static readonly RULE_datasetClause = 4;
	public static readonly RULE_renameClause = 5;
	public static readonly RULE_aggrClause = 6;
	public static readonly RULE_filterClause = 7;
	public static readonly RULE_calcClause = 8;
	public static readonly RULE_keepOrDropClause = 9;
	public static readonly RULE_pivotOrUnpivotClause = 10;
	public static readonly RULE_customPivotClause = 11;
	public static readonly RULE_subspaceClause = 12;
	public static readonly RULE_joinOperators = 13;
	public static readonly RULE_defOperators = 14;
	public static readonly RULE_genericOperators = 15;
	public static readonly RULE_parameter = 16;
	public static readonly RULE_stringOperators = 17;
	public static readonly RULE_numericOperators = 18;
	public static readonly RULE_comparisonOperators = 19;
	public static readonly RULE_timeOperators = 20;
	public static readonly RULE_setOperators = 21;
	public static readonly RULE_hierarchyOperators = 22;
	public static readonly RULE_validationOperators = 23;
	public static readonly RULE_conditionalOperators = 24;
	public static readonly RULE_aggrOperatorsGrouping = 25;
	public static readonly RULE_anFunction = 26;
	public static readonly RULE_distanceOperators = 27;
	public static readonly RULE_renameClauseItem = 28;
	public static readonly RULE_aggregateClause = 29;
	public static readonly RULE_aggrFunctionClause = 30;
	public static readonly RULE_calcClauseItem = 31;
	public static readonly RULE_subspaceClauseItem = 32;
	public static readonly RULE_joinClauseWithoutUsing = 33;
	public static readonly RULE_joinClause = 34;
	public static readonly RULE_joinClauseItem = 35;
	public static readonly RULE_joinBody = 36;
	public static readonly RULE_joinApplyClause = 37;
	public static readonly RULE_partitionByClause = 38;
	public static readonly RULE_orderByClause = 39;
	public static readonly RULE_orderByItem = 40;
	public static readonly RULE_windowingClause = 41;
	public static readonly RULE_signedInteger = 42;
	public static readonly RULE_limitClauseItem = 43;
	public static readonly RULE_groupingClause = 44;
	public static readonly RULE_havingClause = 45;
	public static readonly RULE_parameterItem = 46;
	public static readonly RULE_outputParameterType = 47;
	public static readonly RULE_outputParameterTypeComponent = 48;
	public static readonly RULE_inputParameterType = 49;
	public static readonly RULE_rulesetType = 50;
	public static readonly RULE_scalarType = 51;
	public static readonly RULE_componentType = 52;
	public static readonly RULE_datasetType = 53;
	public static readonly RULE_scalarSetType = 54;
	public static readonly RULE_dpRuleset = 55;
	public static readonly RULE_hrRuleset = 56;
	public static readonly RULE_valueDomainName = 57;
	public static readonly RULE_rulesetID = 58;
	public static readonly RULE_rulesetSignature = 59;
	public static readonly RULE_signature = 60;
	public static readonly RULE_ruleClauseDatapoint = 61;
	public static readonly RULE_ruleItemDatapoint = 62;
	public static readonly RULE_ruleClauseHierarchical = 63;
	public static readonly RULE_ruleItemHierarchical = 64;
	public static readonly RULE_hierRuleSignature = 65;
	public static readonly RULE_valueDomainSignature = 66;
	public static readonly RULE_codeItemRelation = 67;
	public static readonly RULE_codeItemRelationClause = 68;
	public static readonly RULE_valueDomainValue = 69;
	public static readonly RULE_scalarTypeConstraint = 70;
	public static readonly RULE_compConstraint = 71;
	public static readonly RULE_multModifier = 72;
	public static readonly RULE_validationOutput = 73;
	public static readonly RULE_validationMode = 74;
	public static readonly RULE_conditionClause = 75;
	public static readonly RULE_inputMode = 76;
	public static readonly RULE_imbalanceExpr = 77;
	public static readonly RULE_inputModeHierarchy = 78;
	public static readonly RULE_outputModeHierarchy = 79;
	public static readonly RULE_alias = 80;
	public static readonly RULE_varID = 81;
	public static readonly RULE_simpleComponentId = 82;
	public static readonly RULE_componentID = 83;
	public static readonly RULE_lists = 84;
	public static readonly RULE_erCode = 85;
	public static readonly RULE_erLevel = 86;
	public static readonly RULE_comparisonOperand = 87;
	public static readonly RULE_optionalExpr = 88;
	public static readonly RULE_componentRole = 89;
	public static readonly RULE_viralAttribute = 90;
	public static readonly RULE_valueDomainID = 91;
	public static readonly RULE_operatorID = 92;
	public static readonly RULE_routineName = 93;
	public static readonly RULE_constant = 94;
	public static readonly RULE_basicScalarType = 95;
	public static readonly RULE_retainType = 96;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "statement", "expr", "functions", "datasetClause", "renameClause", 
		"aggrClause", "filterClause", "calcClause", "keepOrDropClause", "pivotOrUnpivotClause", 
		"customPivotClause", "subspaceClause", "joinOperators", "defOperators", 
		"genericOperators", "parameter", "stringOperators", "numericOperators", 
		"comparisonOperators", "timeOperators", "setOperators", "hierarchyOperators", 
		"validationOperators", "conditionalOperators", "aggrOperatorsGrouping", 
		"anFunction", "distanceOperators", "renameClauseItem", "aggregateClause", 
		"aggrFunctionClause", "calcClauseItem", "subspaceClauseItem", "joinClauseWithoutUsing", 
		"joinClause", "joinClauseItem", "joinBody", "joinApplyClause", "partitionByClause", 
		"orderByClause", "orderByItem", "windowingClause", "signedInteger", "limitClauseItem", 
		"groupingClause", "havingClause", "parameterItem", "outputParameterType", 
		"outputParameterTypeComponent", "inputParameterType", "rulesetType", "scalarType", 
		"componentType", "datasetType", "scalarSetType", "dpRuleset", "hrRuleset", 
		"valueDomainName", "rulesetID", "rulesetSignature", "signature", "ruleClauseDatapoint", 
		"ruleItemDatapoint", "ruleClauseHierarchical", "ruleItemHierarchical", 
		"hierRuleSignature", "valueDomainSignature", "codeItemRelation", "codeItemRelationClause", 
		"valueDomainValue", "scalarTypeConstraint", "compConstraint", "multModifier", 
		"validationOutput", "validationMode", "conditionClause", "inputMode", 
		"imbalanceExpr", "inputModeHierarchy", "outputModeHierarchy", "alias", 
		"varID", "simpleComponentId", "componentID", "lists", "erCode", "erLevel", 
		"comparisonOperand", "optionalExpr", "componentRole", "viralAttribute", 
		"valueDomainID", "operatorID", "routineName", "constant", "basicScalarType", 
		"retainType",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'['", "']'", "'{'", "'}'", "'='", "'<'", "'>'", 
		"'>='", "'<>'", "'<='", "'+'", "'-'", "'*'", "'/'", "','", "'->'", "':'", 
		"':='", "'#'", "'eval'", "'if'", "'then'", "'else'", "'using'", "'with'", 
		"'current_date'", "'on'", "'drop'", "'keep'", "'calc'", "'attrcalc'", 
		"'rename'", "'as'", "'and'", "'or'", "'xor'", "'not'", "'between'", "'in'", 
		"'not_in'", "'null'", "'isnull'", "'ex'", "'union'", "'diff'", "'symdiff'", 
		"'intersect'", "'keys'", "'intyear'", "'intmonth'", "'intday'", "'check'", 
		"'exists_in'", "'to'", "'return'", "'imbalance'", "'errorcode'", "'all'", 
		"'aggr'", "'errorlevel'", "'order'", "'by'", "'rank'", "'asc'", "'desc'", 
		"'min'", "'max'", "'first'", "'last'", "'indexof'", "'abs'", "'key'", 
		"'ln'", "'log'", "'trunc'", "'round'", "'power'", "'mod'", "'length'", 
		"'||'", "'trim'", "'upper'", "'lower'", "'substr'", "'sum'", "'avg'", 
		"'median'", "'count'", "'identifier'", "'measure'", "'attribute'", "'filter'", 
		"'merge'", "'exp'", "'componentRole'", "'viral'", "'match_characters'", 
		"'type'", "'nvl'", "'hierarchy'", "'_'", "'invalid'", "'levenshtein'", 
		"'valuedomain'", "'variable'", "'data'", "'structure'", "'dataset'", "'operator'", 
		"'define'", "'<-'", "'datapoint'", "'hierarchical'", "'ruleset'", "'rule'", 
		"'end'", "'alterDataset'", "'ltrim'", "'rtrim'", "'instr'", "'replace'", 
		"'ceil'", "'floor'", "'sqrt'", "'any'", "'setdiff'", "'stddev_pop'", "'stddev_samp'", 
		"'var_pop'", "'var_samp'", "'group'", "'except'", "'having'", "'first_value'", 
		"'last_value'", "'lag'", "'lead'", "'ratio_to_report'", "'over'", "'preceding'", 
		"'following'", "'unbounded'", "'partition'", "'rows'", "'range'", "'current'", 
		"'valid'", "'fill_time_series'", "'flow_to_stock'", "'stock_to_flow'", 
		"'timeshift'", "'measures'", "'no_measures'", "'condition'", "'boolean'", 
		"'date'", "'time_period'", "'number'", "'string'", "'time'", "'integer'", 
		"'float'", "'list'", "'record'", "'restrict'", "'yyyy'", "'mm'", "'dd'", 
		"'maxLength'", "'regexp'", "'is'", "'when'", "'from'", "'aggregates'", 
		"'points'", "'point'", "'total'", "'partial'", "'always'", "'inner_join'", 
		"'left_join'", "'cross_join'", "'full_join'", "'maps_from'", "'maps_to'", 
		"'map_to'", "'map_from'", "'returns'", "'pivot'", "'customPivot'", "'unpivot'", 
		"'sub'", "'apply'", "'conditioned'", "'period_indicator'", "'single'", 
		"'duration'", "'time_agg'", "'unit'", "'Value'", "'valuedomains'", "'variables'", 
		"'input'", "'output'", "'cast'", "'rule_priority'", "'dataset_priority'", 
		"'default'", "'check_datapoint'", "'check_hierarchy'", "'computed'", "'non_null'", 
		"'non_zero'", "'partial_null'", "'partial_zero'", "'always_null'", "'always_zero'", 
		"'components'", "'all_measures'", "'scalar'", "'component'", "'datapoint_on_valuedomains'", 
		"'datapoint_on_variables'", "'hierarchical_on_valuedomains'", "'hierarchical_on_variables'", 
		"'set'", "'language'", undefined, undefined, undefined, undefined, undefined, 
		undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LPAREN", "RPAREN", "QLPAREN", "QRPAREN", "GLPAREN", "GRPAREN", 
		"EQ", "LT", "MT", "ME", "NEQ", "LE", "PLUS", "MINUS", "MUL", "DIV", "COMMA", 
		"POINTER", "COLON", "ASSIGN", "MEMBERSHIP", "EVAL", "IF", "THEN", "ELSE", 
		"USING", "WITH", "CURRENT_DATE", "ON", "DROP", "KEEP", "CALC", "ATTRCALC", 
		"RENAME", "AS", "AND", "OR", "XOR", "NOT", "BETWEEN", "IN", "NOT_IN", 
		"NULL_CONSTANT", "ISNULL", "EX", "UNION", "DIFF", "SYMDIFF", "INTERSECT", 
		"KEYS", "INTYEAR", "INTMONTH", "INTDAY", "CHECK", "EXISTS_IN", "TO", "RETURN", 
		"IMBALANCE", "ERRORCODE", "ALL", "AGGREGATE", "ERRORLEVEL", "ORDER", "BY", 
		"RANK", "ASC", "DESC", "MIN", "MAX", "FIRST", "LAST", "INDEXOF", "ABS", 
		"KEY", "LN", "LOG", "TRUNC", "ROUND", "POWER", "MOD", "LEN", "CONCAT", 
		"TRIM", "UCASE", "LCASE", "SUBSTR", "SUM", "AVG", "MEDIAN", "COUNT", "DIMENSION", 
		"MEASURE", "ATTRIBUTE", "FILTER", "MERGE", "EXP", "ROLE", "VIRAL", "CHARSET_MATCH", 
		"TYPE", "NVL", "HIERARCHY", "OPTIONAL", "INVALID", "LEVENSHTEIN", "VALUE_DOMAIN", 
		"VARIABLE", "DATA", "STRUCTURE", "DATASET", "OPERATOR", "DEFINE", "PUT_SYMBOL", 
		"DATAPOINT", "HIERARCHICAL", "RULESET", "RULE", "END", "ALTER_DATASET", 
		"LTRIM", "RTRIM", "INSTR", "REPLACE", "CEIL", "FLOOR", "SQRT", "ANY", 
		"SETDIFF", "STDDEV_POP", "STDDEV_SAMP", "VAR_POP", "VAR_SAMP", "GROUP", 
		"EXCEPT", "HAVING", "FIRST_VALUE", "LAST_VALUE", "LAG", "LEAD", "RATIO_TO_REPORT", 
		"OVER", "PRECEDING", "FOLLOWING", "UNBOUNDED", "PARTITION", "ROWS", "RANGE", 
		"CURRENT", "VALID", "FILL_TIME_SERIES", "FLOW_TO_STOCK", "STOCK_TO_FLOW", 
		"TIMESHIFT", "MEASURES", "NO_MEASURES", "CONDITION", "BOOLEAN", "DATE", 
		"TIME_PERIOD", "NUMBER", "STRING", "TIME", "INTEGER", "FLOAT", "LIST", 
		"RECORD", "RESTRICT", "YYYY", "MM", "DD", "MAX_LENGTH", "REGEXP", "IS", 
		"WHEN", "FROM", "AGGREGATES", "POINTS", "POINT", "TOTAL", "PARTIAL", "ALWAYS", 
		"INNER_JOIN", "LEFT_JOIN", "CROSS_JOIN", "FULL_JOIN", "MAPS_FROM", "MAPS_TO", 
		"MAP_TO", "MAP_FROM", "RETURNS", "PIVOT", "CUSTOMPIVOT", "UNPIVOT", "SUBSPACE", 
		"APPLY", "CONDITIONED", "PERIOD_INDICATOR", "SINGLE", "DURATION", "TIME_AGG", 
		"UNIT", "VALUE", "VALUEDOMAINS", "VARIABLES", "INPUT", "OUTPUT", "CAST", 
		"RULE_PRIORITY", "DATASET_PRIORITY", "DEFAULT", "CHECK_DATAPOINT", "CHECK_HIERARCHY", 
		"COMPUTED", "NON_NULL", "NON_ZERO", "PARTIAL_NULL", "PARTIAL_ZERO", "ALWAYS_NULL", 
		"ALWAYS_ZERO", "COMPONENTS", "ALL_MEASURES", "SCALAR", "COMPONENT", "DATAPOINT_ON_VD", 
		"DATAPOINT_ON_VAR", "HIERARCHICAL_ON_VD", "HIERARCHICAL_ON_VAR", "SET", 
		"LANGUAGE", "INTEGER_CONSTANT", "NUMBER_CONSTANT", "BOOLEAN_CONSTANT", 
		"STRING_CONSTANT", "IDENTIFIER", "WS", "EOL", "ML_COMMENT", "SL_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(VtlParser._LITERAL_NAMES, VtlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return VtlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Vtl.g4"; }

	// @Override
	public get ruleNames(): string[] { return VtlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return VtlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(VtlParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, VtlParser.RULE_start);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.DEFINE || _la === VtlParser.IDENTIFIER) {
				{
				{
				this.state = 194;
				this.statement();
				this.state = 195;
				this.match(VtlParser.EOL);
				}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 202;
			this.match(VtlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, VtlParser.RULE_statement);
		try {
			this.state = 213;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				_localctx = new TemporaryAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 204;
				this.varID();
				this.state = 205;
				this.match(VtlParser.ASSIGN);
				this.state = 206;
				this.expr(0);
				}
				break;

			case 2:
				_localctx = new PersistAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 208;
				this.varID();
				this.state = 209;
				this.match(VtlParser.PUT_SYMBOL);
				this.state = 210;
				this.expr(0);
				}
				break;

			case 3:
				_localctx = new DefineExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 212;
				this.defOperators();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, VtlParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				_localctx = new ParenthesisExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 216;
				this.match(VtlParser.LPAREN);
				this.state = 217;
				this.expr(0);
				this.state = 218;
				this.match(VtlParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new FunctionsExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 220;
				this.functions();
				}
				break;

			case 3:
				{
				_localctx = new UnaryExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 221;
				(_localctx as UnaryExprContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (VtlParser.PLUS - 13)) | (1 << (VtlParser.MINUS - 13)) | (1 << (VtlParser.NOT - 13)))) !== 0))) {
					(_localctx as UnaryExprContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 222;
				(_localctx as UnaryExprContext)._right = this.expr(10);
				}
				break;

			case 4:
				{
				_localctx = new IfExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 223;
				this.match(VtlParser.IF);
				this.state = 224;
				(_localctx as IfExprContext)._conditionalExpr = this.expr(0);
				this.state = 225;
				this.match(VtlParser.THEN);
				this.state = 226;
				(_localctx as IfExprContext)._thenExpr = this.expr(0);
				this.state = 227;
				this.match(VtlParser.ELSE);
				this.state = 228;
				(_localctx as IfExprContext)._elseExpr = this.expr(3);
				}
				break;

			case 5:
				{
				_localctx = new ConstantExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 230;
				this.constant();
				}
				break;

			case 6:
				{
				_localctx = new VarIdExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 231;
				this.varID();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 266;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 264;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ArithmeticExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
						this.state = 234;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 235;
						(_localctx as ArithmeticExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === VtlParser.MUL || _la === VtlParser.DIV)) {
							(_localctx as ArithmeticExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 236;
						(_localctx as ArithmeticExprContext)._right = this.expr(10);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticExprOrConcatContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ArithmeticExprOrConcatContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
						this.state = 237;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 238;
						(_localctx as ArithmeticExprOrConcatContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === VtlParser.PLUS || _la === VtlParser.MINUS || _la === VtlParser.CONCAT)) {
							(_localctx as ArithmeticExprOrConcatContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 239;
						(_localctx as ArithmeticExprOrConcatContext)._right = this.expr(9);
						}
						break;

					case 3:
						{
						_localctx = new ComparisonExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ComparisonExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
						this.state = 240;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 241;
						(_localctx as ComparisonExprContext)._op = this.comparisonOperand();
						this.state = 242;
						(_localctx as ComparisonExprContext)._right = this.expr(8);
						}
						break;

					case 4:
						{
						_localctx = new BooleanExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as BooleanExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
						this.state = 244;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 245;
						(_localctx as BooleanExprContext)._op = this.match(VtlParser.AND);
						this.state = 246;
						(_localctx as BooleanExprContext)._right = this.expr(6);
						}
						break;

					case 5:
						{
						_localctx = new BooleanExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as BooleanExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
						this.state = 247;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 248;
						(_localctx as BooleanExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === VtlParser.OR || _la === VtlParser.XOR)) {
							(_localctx as BooleanExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 249;
						(_localctx as BooleanExprContext)._right = this.expr(5);
						}
						break;

					case 6:
						{
						_localctx = new ClauseExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ClauseExprContext)._dataset = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
						this.state = 250;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 251;
						this.match(VtlParser.QLPAREN);
						this.state = 252;
						(_localctx as ClauseExprContext)._clause = this.datasetClause();
						this.state = 253;
						this.match(VtlParser.QRPAREN);
						}
						break;

					case 7:
						{
						_localctx = new MembershipExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
						this.state = 255;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 256;
						this.match(VtlParser.MEMBERSHIP);
						this.state = 257;
						this.simpleComponentId();
						}
						break;

					case 8:
						{
						_localctx = new InNotInExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InNotInExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, VtlParser.RULE_expr);
						this.state = 258;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 259;
						(_localctx as InNotInExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === VtlParser.IN || _la === VtlParser.NOT_IN)) {
							(_localctx as InNotInExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 262;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case VtlParser.GLPAREN:
							{
							this.state = 260;
							this.lists();
							}
							break;
						case VtlParser.IDENTIFIER:
							{
							this.state = 261;
							this.valueDomainID();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					}
					}
				}
				this.state = 268;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functions(): FunctionsContext {
		let _localctx: FunctionsContext = new FunctionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, VtlParser.RULE_functions);
		try {
			this.state = 282;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				_localctx = new JoinFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 269;
				this.joinOperators();
				}
				break;

			case 2:
				_localctx = new GenericFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 270;
				this.genericOperators();
				}
				break;

			case 3:
				_localctx = new StringFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 271;
				this.stringOperators();
				}
				break;

			case 4:
				_localctx = new NumericFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 272;
				this.numericOperators();
				}
				break;

			case 5:
				_localctx = new ComparisonFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 273;
				this.comparisonOperators();
				}
				break;

			case 6:
				_localctx = new TimeFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 274;
				this.timeOperators();
				}
				break;

			case 7:
				_localctx = new SetFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 275;
				this.setOperators();
				}
				break;

			case 8:
				_localctx = new HierarchyFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 276;
				this.hierarchyOperators();
				}
				break;

			case 9:
				_localctx = new ValidationFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 277;
				this.validationOperators();
				}
				break;

			case 10:
				_localctx = new ConditionalFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 278;
				this.conditionalOperators();
				}
				break;

			case 11:
				_localctx = new AggregateFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 279;
				this.aggrOperatorsGrouping();
				}
				break;

			case 12:
				_localctx = new AnalyticFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 280;
				this.anFunction();
				}
				break;

			case 13:
				_localctx = new DistanceFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 281;
				this.distanceOperators();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datasetClause(): DatasetClauseContext {
		let _localctx: DatasetClauseContext = new DatasetClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, VtlParser.RULE_datasetClause);
		try {
			this.state = 292;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.RENAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 284;
				this.renameClause();
				}
				break;
			case VtlParser.AGGREGATE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 285;
				this.aggrClause();
				}
				break;
			case VtlParser.FILTER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 286;
				this.filterClause();
				}
				break;
			case VtlParser.CALC:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 287;
				this.calcClause();
				}
				break;
			case VtlParser.DROP:
			case VtlParser.KEEP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 288;
				this.keepOrDropClause();
				}
				break;
			case VtlParser.PIVOT:
			case VtlParser.UNPIVOT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 289;
				this.pivotOrUnpivotClause();
				}
				break;
			case VtlParser.CUSTOMPIVOT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 290;
				this.customPivotClause();
				}
				break;
			case VtlParser.SUBSPACE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 291;
				this.subspaceClause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public renameClause(): RenameClauseContext {
		let _localctx: RenameClauseContext = new RenameClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, VtlParser.RULE_renameClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this.match(VtlParser.RENAME);
			this.state = 295;
			this.renameClauseItem();
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.COMMA) {
				{
				{
				this.state = 296;
				this.match(VtlParser.COMMA);
				this.state = 297;
				this.renameClauseItem();
				}
				}
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggrClause(): AggrClauseContext {
		let _localctx: AggrClauseContext = new AggrClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, VtlParser.RULE_aggrClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this.match(VtlParser.AGGREGATE);
			this.state = 304;
			this.aggregateClause();
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.GROUP) {
				{
				this.state = 305;
				this.groupingClause();
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.HAVING) {
					{
					this.state = 306;
					this.havingClause();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filterClause(): FilterClauseContext {
		let _localctx: FilterClauseContext = new FilterClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, VtlParser.RULE_filterClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.match(VtlParser.FILTER);
			this.state = 312;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calcClause(): CalcClauseContext {
		let _localctx: CalcClauseContext = new CalcClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, VtlParser.RULE_calcClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.match(VtlParser.CALC);
			this.state = 315;
			this.calcClauseItem();
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.COMMA) {
				{
				{
				this.state = 316;
				this.match(VtlParser.COMMA);
				this.state = 317;
				this.calcClauseItem();
				}
				}
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keepOrDropClause(): KeepOrDropClauseContext {
		let _localctx: KeepOrDropClauseContext = new KeepOrDropClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, VtlParser.RULE_keepOrDropClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === VtlParser.DROP || _la === VtlParser.KEEP)) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 324;
			this.componentID();
			this.state = 329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.COMMA) {
				{
				{
				this.state = 325;
				this.match(VtlParser.COMMA);
				this.state = 326;
				this.componentID();
				}
				}
				this.state = 331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pivotOrUnpivotClause(): PivotOrUnpivotClauseContext {
		let _localctx: PivotOrUnpivotClauseContext = new PivotOrUnpivotClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, VtlParser.RULE_pivotOrUnpivotClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === VtlParser.PIVOT || _la === VtlParser.UNPIVOT)) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 333;
			_localctx._id_ = this.componentID();
			this.state = 334;
			this.match(VtlParser.COMMA);
			this.state = 335;
			_localctx._mea = this.componentID();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public customPivotClause(): CustomPivotClauseContext {
		let _localctx: CustomPivotClauseContext = new CustomPivotClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, VtlParser.RULE_customPivotClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(VtlParser.CUSTOMPIVOT);
			this.state = 338;
			_localctx._id_ = this.componentID();
			this.state = 339;
			this.match(VtlParser.COMMA);
			this.state = 340;
			_localctx._mea = this.componentID();
			this.state = 341;
			this.match(VtlParser.IN);
			this.state = 342;
			this.constant();
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.COMMA) {
				{
				{
				this.state = 343;
				this.match(VtlParser.COMMA);
				this.state = 344;
				this.constant();
				}
				}
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subspaceClause(): SubspaceClauseContext {
		let _localctx: SubspaceClauseContext = new SubspaceClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, VtlParser.RULE_subspaceClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this.match(VtlParser.SUBSPACE);
			this.state = 351;
			this.subspaceClauseItem();
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.COMMA) {
				{
				{
				this.state = 352;
				this.match(VtlParser.COMMA);
				this.state = 353;
				this.subspaceClauseItem();
				}
				}
				this.state = 358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinOperators(): JoinOperatorsContext {
		let _localctx: JoinOperatorsContext = new JoinOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, VtlParser.RULE_joinOperators);
		let _la: number;
		try {
			this.state = 371;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.INNER_JOIN:
			case VtlParser.LEFT_JOIN:
				_localctx = new JoinExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 359;
				(_localctx as JoinExprContext)._joinKeyword = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === VtlParser.INNER_JOIN || _la === VtlParser.LEFT_JOIN)) {
					(_localctx as JoinExprContext)._joinKeyword = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 360;
				this.match(VtlParser.LPAREN);
				this.state = 361;
				this.joinClause();
				this.state = 362;
				this.joinBody();
				this.state = 363;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.CROSS_JOIN:
			case VtlParser.FULL_JOIN:
				_localctx = new JoinExprContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 365;
				(_localctx as JoinExprContext)._joinKeyword = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === VtlParser.CROSS_JOIN || _la === VtlParser.FULL_JOIN)) {
					(_localctx as JoinExprContext)._joinKeyword = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 366;
				this.match(VtlParser.LPAREN);
				this.state = 367;
				this.joinClauseWithoutUsing();
				this.state = 368;
				this.joinBody();
				this.state = 369;
				this.match(VtlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defOperators(): DefOperatorsContext {
		let _localctx: DefOperatorsContext = new DefOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, VtlParser.RULE_defOperators);
		let _la: number;
		try {
			this.state = 423;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				_localctx = new DefOperatorContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 373;
				this.match(VtlParser.DEFINE);
				this.state = 374;
				this.match(VtlParser.OPERATOR);
				this.state = 375;
				this.operatorID();
				this.state = 376;
				this.match(VtlParser.LPAREN);
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.IDENTIFIER) {
					{
					this.state = 377;
					this.parameterItem();
					this.state = 382;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === VtlParser.COMMA) {
						{
						{
						this.state = 378;
						this.match(VtlParser.COMMA);
						this.state = 379;
						this.parameterItem();
						}
						}
						this.state = 384;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 387;
				this.match(VtlParser.RPAREN);
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.RETURNS) {
					{
					this.state = 388;
					this.match(VtlParser.RETURNS);
					this.state = 389;
					this.outputParameterType();
					}
				}

				this.state = 392;
				this.match(VtlParser.IS);
				{
				this.state = 393;
				this.expr(0);
				}
				this.state = 394;
				this.match(VtlParser.END);
				this.state = 395;
				this.match(VtlParser.OPERATOR);
				}
				break;

			case 2:
				_localctx = new DefDatapointRulesetContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 397;
				this.match(VtlParser.DEFINE);
				this.state = 398;
				this.match(VtlParser.DATAPOINT);
				this.state = 399;
				this.match(VtlParser.RULESET);
				this.state = 400;
				this.rulesetID();
				this.state = 401;
				this.match(VtlParser.LPAREN);
				this.state = 402;
				this.rulesetSignature();
				this.state = 403;
				this.match(VtlParser.RPAREN);
				this.state = 404;
				this.match(VtlParser.IS);
				this.state = 405;
				this.ruleClauseDatapoint();
				this.state = 406;
				this.match(VtlParser.END);
				this.state = 407;
				this.match(VtlParser.DATAPOINT);
				this.state = 408;
				this.match(VtlParser.RULESET);
				}
				break;

			case 3:
				_localctx = new DefHierarchicalContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 410;
				this.match(VtlParser.DEFINE);
				this.state = 411;
				this.match(VtlParser.HIERARCHICAL);
				this.state = 412;
				this.match(VtlParser.RULESET);
				this.state = 413;
				this.rulesetID();
				this.state = 414;
				this.match(VtlParser.LPAREN);
				this.state = 415;
				this.hierRuleSignature();
				this.state = 416;
				this.match(VtlParser.RPAREN);
				this.state = 417;
				this.match(VtlParser.IS);
				this.state = 418;
				this.ruleClauseHierarchical();
				this.state = 419;
				this.match(VtlParser.END);
				this.state = 420;
				this.match(VtlParser.HIERARCHICAL);
				this.state = 421;
				this.match(VtlParser.RULESET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericOperators(): GenericOperatorsContext {
		let _localctx: GenericOperatorsContext = new GenericOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, VtlParser.RULE_genericOperators);
		let _la: number;
		try {
			this.state = 482;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.IDENTIFIER:
				_localctx = new CallDatasetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 425;
				this.operatorID();
				this.state = 426;
				this.match(VtlParser.LPAREN);
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.NULL_CONSTANT || _la === VtlParser.OPTIONAL || ((((_la - 230)) & ~0x1F) === 0 && ((1 << (_la - 230)) & ((1 << (VtlParser.INTEGER_CONSTANT - 230)) | (1 << (VtlParser.NUMBER_CONSTANT - 230)) | (1 << (VtlParser.BOOLEAN_CONSTANT - 230)) | (1 << (VtlParser.STRING_CONSTANT - 230)) | (1 << (VtlParser.IDENTIFIER - 230)))) !== 0)) {
					{
					this.state = 427;
					this.parameter();
					this.state = 432;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === VtlParser.COMMA) {
						{
						{
						this.state = 428;
						this.match(VtlParser.COMMA);
						this.state = 429;
						this.parameter();
						}
						}
						this.state = 434;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 437;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.EVAL:
				_localctx = new EvalAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 439;
				this.match(VtlParser.EVAL);
				this.state = 440;
				this.match(VtlParser.LPAREN);
				this.state = 441;
				this.routineName();
				this.state = 442;
				this.match(VtlParser.LPAREN);
				this.state = 445;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case VtlParser.IDENTIFIER:
					{
					this.state = 443;
					this.varID();
					}
					break;
				case VtlParser.NULL_CONSTANT:
				case VtlParser.INTEGER_CONSTANT:
				case VtlParser.NUMBER_CONSTANT:
				case VtlParser.BOOLEAN_CONSTANT:
				case VtlParser.STRING_CONSTANT:
					{
					this.state = 444;
					this.constant();
					}
					break;
				case VtlParser.RPAREN:
				case VtlParser.COMMA:
					break;
				default:
					break;
				}
				this.state = 454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
					{
					this.state = 447;
					this.match(VtlParser.COMMA);
					this.state = 450;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case VtlParser.IDENTIFIER:
						{
						this.state = 448;
						this.varID();
						}
						break;
					case VtlParser.NULL_CONSTANT:
					case VtlParser.INTEGER_CONSTANT:
					case VtlParser.NUMBER_CONSTANT:
					case VtlParser.BOOLEAN_CONSTANT:
					case VtlParser.STRING_CONSTANT:
						{
						this.state = 449;
						this.constant();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					this.state = 456;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 457;
				this.match(VtlParser.RPAREN);
				this.state = 460;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.LANGUAGE) {
					{
					this.state = 458;
					this.match(VtlParser.LANGUAGE);
					this.state = 459;
					this.match(VtlParser.STRING_CONSTANT);
					}
				}

				this.state = 464;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.RETURNS) {
					{
					this.state = 462;
					this.match(VtlParser.RETURNS);
					this.state = 463;
					this.datasetType();
					}
				}

				this.state = 466;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.CAST:
				_localctx = new CastExprDatasetContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 468;
				this.match(VtlParser.CAST);
				this.state = 469;
				this.match(VtlParser.LPAREN);
				this.state = 470;
				this.expr(0);
				this.state = 471;
				this.match(VtlParser.COMMA);
				this.state = 474;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case VtlParser.BOOLEAN:
				case VtlParser.DATE:
				case VtlParser.TIME_PERIOD:
				case VtlParser.NUMBER:
				case VtlParser.STRING:
				case VtlParser.TIME:
				case VtlParser.INTEGER:
				case VtlParser.DURATION:
				case VtlParser.SCALAR:
					{
					this.state = 472;
					this.basicScalarType();
					}
					break;
				case VtlParser.IDENTIFIER:
					{
					this.state = 473;
					this.valueDomainName();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.COMMA) {
					{
					this.state = 476;
					this.match(VtlParser.COMMA);
					this.state = 477;
					this.match(VtlParser.STRING_CONSTANT);
					}
				}

				this.state = 480;
				this.match(VtlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, VtlParser.RULE_parameter);
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 484;
				this.varID();
				}
				break;
			case VtlParser.NULL_CONSTANT:
			case VtlParser.INTEGER_CONSTANT:
			case VtlParser.NUMBER_CONSTANT:
			case VtlParser.BOOLEAN_CONSTANT:
			case VtlParser.STRING_CONSTANT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 485;
				this.constant();
				}
				break;
			case VtlParser.OPTIONAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 486;
				this.match(VtlParser.OPTIONAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringOperators(): StringOperatorsContext {
		let _localctx: StringOperatorsContext = new StringOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, VtlParser.RULE_stringOperators);
		let _la: number;
		try {
			this.state = 537;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.LEN:
			case VtlParser.TRIM:
			case VtlParser.UCASE:
			case VtlParser.LCASE:
			case VtlParser.LTRIM:
			case VtlParser.RTRIM:
				_localctx = new UnaryStringFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 489;
				(_localctx as UnaryStringFunctionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (VtlParser.LEN - 81)) | (1 << (VtlParser.TRIM - 81)) | (1 << (VtlParser.UCASE - 81)) | (1 << (VtlParser.LCASE - 81)))) !== 0) || _la === VtlParser.LTRIM || _la === VtlParser.RTRIM)) {
					(_localctx as UnaryStringFunctionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 490;
				this.match(VtlParser.LPAREN);
				this.state = 491;
				this.expr(0);
				this.state = 492;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.SUBSTR:
				_localctx = new SubstrAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 494;
				this.match(VtlParser.SUBSTR);
				this.state = 495;
				this.match(VtlParser.LPAREN);
				this.state = 496;
				this.expr(0);
				this.state = 507;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 503;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VtlParser.COMMA) {
						{
						{
						this.state = 497;
						this.match(VtlParser.COMMA);
						this.state = 498;
						(_localctx as SubstrAtomContext)._startParameter = this.optionalExpr();
						}
						{
						this.state = 500;
						this.match(VtlParser.COMMA);
						this.state = 501;
						(_localctx as SubstrAtomContext)._endParameter = this.optionalExpr();
						}
						}
					}

					}
					break;

				case 2:
					{
					this.state = 505;
					this.match(VtlParser.COMMA);
					this.state = 506;
					(_localctx as SubstrAtomContext)._startParameter = this.optionalExpr();
					}
					break;
				}
				this.state = 509;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.REPLACE:
				_localctx = new ReplaceAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 511;
				this.match(VtlParser.REPLACE);
				this.state = 512;
				this.match(VtlParser.LPAREN);
				this.state = 513;
				this.expr(0);
				this.state = 514;
				this.match(VtlParser.COMMA);
				this.state = 515;
				(_localctx as ReplaceAtomContext)._param = this.expr(0);
				this.state = 518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.COMMA) {
					{
					this.state = 516;
					this.match(VtlParser.COMMA);
					this.state = 517;
					this.optionalExpr();
					}
				}

				this.state = 520;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.INSTR:
				_localctx = new InstrAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 522;
				this.match(VtlParser.INSTR);
				this.state = 523;
				this.match(VtlParser.LPAREN);
				this.state = 524;
				this.expr(0);
				this.state = 525;
				this.match(VtlParser.COMMA);
				this.state = 526;
				(_localctx as InstrAtomContext)._pattern = this.expr(0);
				this.state = 529;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 527;
					this.match(VtlParser.COMMA);
					this.state = 528;
					(_localctx as InstrAtomContext)._startParameter = this.optionalExpr();
					}
					break;
				}
				this.state = 533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.COMMA) {
					{
					this.state = 531;
					this.match(VtlParser.COMMA);
					this.state = 532;
					(_localctx as InstrAtomContext)._occurrenceParameter = this.optionalExpr();
					}
				}

				this.state = 535;
				this.match(VtlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericOperators(): NumericOperatorsContext {
		let _localctx: NumericOperatorsContext = new NumericOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, VtlParser.RULE_numericOperators);
		let _la: number;
		try {
			this.state = 560;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.ABS:
			case VtlParser.LN:
			case VtlParser.EXP:
			case VtlParser.CEIL:
			case VtlParser.FLOOR:
			case VtlParser.SQRT:
				_localctx = new UnaryNumericContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 539;
				(_localctx as UnaryNumericContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (VtlParser.ABS - 73)) | (1 << (VtlParser.LN - 73)) | (1 << (VtlParser.EXP - 73)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (VtlParser.CEIL - 124)) | (1 << (VtlParser.FLOOR - 124)) | (1 << (VtlParser.SQRT - 124)))) !== 0))) {
					(_localctx as UnaryNumericContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 540;
				this.match(VtlParser.LPAREN);
				this.state = 541;
				this.expr(0);
				this.state = 542;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.TRUNC:
			case VtlParser.ROUND:
				_localctx = new UnaryWithOptionalNumericContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 544;
				(_localctx as UnaryWithOptionalNumericContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === VtlParser.TRUNC || _la === VtlParser.ROUND)) {
					(_localctx as UnaryWithOptionalNumericContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 545;
				this.match(VtlParser.LPAREN);
				this.state = 546;
				this.expr(0);
				this.state = 549;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.COMMA) {
					{
					this.state = 547;
					this.match(VtlParser.COMMA);
					this.state = 548;
					this.optionalExpr();
					}
				}

				this.state = 551;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.LOG:
			case VtlParser.POWER:
			case VtlParser.MOD:
				_localctx = new BinaryNumericContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 553;
				(_localctx as BinaryNumericContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (VtlParser.LOG - 76)) | (1 << (VtlParser.POWER - 76)) | (1 << (VtlParser.MOD - 76)))) !== 0))) {
					(_localctx as BinaryNumericContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 554;
				this.match(VtlParser.LPAREN);
				this.state = 555;
				(_localctx as BinaryNumericContext)._left = this.expr(0);
				this.state = 556;
				this.match(VtlParser.COMMA);
				this.state = 557;
				(_localctx as BinaryNumericContext)._right = this.expr(0);
				this.state = 558;
				this.match(VtlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperators(): ComparisonOperatorsContext {
		let _localctx: ComparisonOperatorsContext = new ComparisonOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, VtlParser.RULE_comparisonOperators);
		let _la: number;
		try {
			this.state = 594;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.BETWEEN:
				_localctx = new BetweenAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 562;
				this.match(VtlParser.BETWEEN);
				this.state = 563;
				this.match(VtlParser.LPAREN);
				this.state = 564;
				(_localctx as BetweenAtomContext)._op = this.expr(0);
				this.state = 565;
				this.match(VtlParser.COMMA);
				this.state = 566;
				(_localctx as BetweenAtomContext)._from_ = this.expr(0);
				this.state = 567;
				this.match(VtlParser.COMMA);
				this.state = 568;
				(_localctx as BetweenAtomContext)._to_ = this.expr(0);
				this.state = 569;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.CHARSET_MATCH:
				_localctx = new CharsetMatchAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 571;
				this.match(VtlParser.CHARSET_MATCH);
				this.state = 572;
				this.match(VtlParser.LPAREN);
				this.state = 573;
				(_localctx as CharsetMatchAtomContext)._op = this.expr(0);
				this.state = 574;
				this.match(VtlParser.COMMA);
				this.state = 575;
				(_localctx as CharsetMatchAtomContext)._pattern = this.expr(0);
				this.state = 576;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.ISNULL:
				_localctx = new IsNullAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 578;
				this.match(VtlParser.ISNULL);
				this.state = 579;
				this.match(VtlParser.LPAREN);
				this.state = 580;
				this.expr(0);
				this.state = 581;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.EXISTS_IN:
				_localctx = new ExistInAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 583;
				this.match(VtlParser.EXISTS_IN);
				this.state = 584;
				this.match(VtlParser.LPAREN);
				this.state = 585;
				(_localctx as ExistInAtomContext)._left = this.expr(0);
				this.state = 586;
				this.match(VtlParser.COMMA);
				this.state = 587;
				(_localctx as ExistInAtomContext)._right = this.expr(0);
				this.state = 590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.COMMA) {
					{
					this.state = 588;
					this.match(VtlParser.COMMA);
					this.state = 589;
					this.retainType();
					}
				}

				this.state = 592;
				this.match(VtlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeOperators(): TimeOperatorsContext {
		let _localctx: TimeOperatorsContext = new TimeOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, VtlParser.RULE_timeOperators);
		let _la: number;
		try {
			this.state = 642;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.PERIOD_INDICATOR:
				_localctx = new PeriodAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 596;
				this.match(VtlParser.PERIOD_INDICATOR);
				this.state = 597;
				this.match(VtlParser.LPAREN);
				this.state = 599;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VtlParser.LPAREN) | (1 << VtlParser.PLUS) | (1 << VtlParser.MINUS) | (1 << VtlParser.EVAL) | (1 << VtlParser.IF) | (1 << VtlParser.CURRENT_DATE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (VtlParser.NOT - 39)) | (1 << (VtlParser.BETWEEN - 39)) | (1 << (VtlParser.NULL_CONSTANT - 39)) | (1 << (VtlParser.ISNULL - 39)) | (1 << (VtlParser.UNION - 39)) | (1 << (VtlParser.SYMDIFF - 39)) | (1 << (VtlParser.INTERSECT - 39)) | (1 << (VtlParser.CHECK - 39)) | (1 << (VtlParser.EXISTS_IN - 39)) | (1 << (VtlParser.MIN - 39)) | (1 << (VtlParser.MAX - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (VtlParser.ABS - 73)) | (1 << (VtlParser.LN - 73)) | (1 << (VtlParser.LOG - 73)) | (1 << (VtlParser.TRUNC - 73)) | (1 << (VtlParser.ROUND - 73)) | (1 << (VtlParser.POWER - 73)) | (1 << (VtlParser.MOD - 73)) | (1 << (VtlParser.LEN - 73)) | (1 << (VtlParser.TRIM - 73)) | (1 << (VtlParser.UCASE - 73)) | (1 << (VtlParser.LCASE - 73)) | (1 << (VtlParser.SUBSTR - 73)) | (1 << (VtlParser.SUM - 73)) | (1 << (VtlParser.AVG - 73)) | (1 << (VtlParser.MEDIAN - 73)) | (1 << (VtlParser.COUNT - 73)) | (1 << (VtlParser.EXP - 73)) | (1 << (VtlParser.CHARSET_MATCH - 73)) | (1 << (VtlParser.NVL - 73)) | (1 << (VtlParser.HIERARCHY - 73)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (VtlParser.LEVENSHTEIN - 105)) | (1 << (VtlParser.LTRIM - 105)) | (1 << (VtlParser.RTRIM - 105)) | (1 << (VtlParser.INSTR - 105)) | (1 << (VtlParser.REPLACE - 105)) | (1 << (VtlParser.CEIL - 105)) | (1 << (VtlParser.FLOOR - 105)) | (1 << (VtlParser.SQRT - 105)) | (1 << (VtlParser.SETDIFF - 105)) | (1 << (VtlParser.STDDEV_POP - 105)) | (1 << (VtlParser.STDDEV_SAMP - 105)) | (1 << (VtlParser.VAR_POP - 105)) | (1 << (VtlParser.VAR_SAMP - 105)) | (1 << (VtlParser.FIRST_VALUE - 105)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (VtlParser.LAST_VALUE - 137)) | (1 << (VtlParser.LAG - 137)) | (1 << (VtlParser.LEAD - 137)) | (1 << (VtlParser.RATIO_TO_REPORT - 137)) | (1 << (VtlParser.FILL_TIME_SERIES - 137)) | (1 << (VtlParser.FLOW_TO_STOCK - 137)) | (1 << (VtlParser.STOCK_TO_FLOW - 137)) | (1 << (VtlParser.TIMESHIFT - 137)))) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & ((1 << (VtlParser.INNER_JOIN - 182)) | (1 << (VtlParser.LEFT_JOIN - 182)) | (1 << (VtlParser.CROSS_JOIN - 182)) | (1 << (VtlParser.FULL_JOIN - 182)) | (1 << (VtlParser.PERIOD_INDICATOR - 182)) | (1 << (VtlParser.TIME_AGG - 182)) | (1 << (VtlParser.CAST - 182)) | (1 << (VtlParser.CHECK_DATAPOINT - 182)) | (1 << (VtlParser.CHECK_HIERARCHY - 182)))) !== 0) || ((((_la - 230)) & ~0x1F) === 0 && ((1 << (_la - 230)) & ((1 << (VtlParser.INTEGER_CONSTANT - 230)) | (1 << (VtlParser.NUMBER_CONSTANT - 230)) | (1 << (VtlParser.BOOLEAN_CONSTANT - 230)) | (1 << (VtlParser.STRING_CONSTANT - 230)) | (1 << (VtlParser.IDENTIFIER - 230)))) !== 0)) {
					{
					this.state = 598;
					this.expr(0);
					}
				}

				this.state = 601;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.FILL_TIME_SERIES:
				_localctx = new FillTimeAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 602;
				this.match(VtlParser.FILL_TIME_SERIES);
				this.state = 603;
				this.match(VtlParser.LPAREN);
				this.state = 604;
				this.expr(0);
				this.state = 607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.COMMA) {
					{
					this.state = 605;
					this.match(VtlParser.COMMA);
					this.state = 606;
					_la = this._input.LA(1);
					if (!(_la === VtlParser.ALL || _la === VtlParser.SINGLE)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 609;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.FLOW_TO_STOCK:
			case VtlParser.STOCK_TO_FLOW:
				_localctx = new FlowAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 611;
				(_localctx as FlowAtomContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === VtlParser.FLOW_TO_STOCK || _la === VtlParser.STOCK_TO_FLOW)) {
					(_localctx as FlowAtomContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 612;
				this.match(VtlParser.LPAREN);
				this.state = 613;
				this.expr(0);
				this.state = 614;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.TIMESHIFT:
				_localctx = new TimeShiftAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 616;
				this.match(VtlParser.TIMESHIFT);
				this.state = 617;
				this.match(VtlParser.LPAREN);
				this.state = 618;
				this.expr(0);
				this.state = 619;
				this.match(VtlParser.COMMA);
				this.state = 620;
				this.signedInteger();
				this.state = 621;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.TIME_AGG:
				_localctx = new TimeAggAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 623;
				this.match(VtlParser.TIME_AGG);
				this.state = 624;
				this.match(VtlParser.LPAREN);
				this.state = 625;
				(_localctx as TimeAggAtomContext)._periodIndTo = this.match(VtlParser.STRING_CONSTANT);
				this.state = 628;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 626;
					this.match(VtlParser.COMMA);
					this.state = 627;
					(_localctx as TimeAggAtomContext)._periodIndFrom = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === VtlParser.OPTIONAL || _la === VtlParser.STRING_CONSTANT)) {
						(_localctx as TimeAggAtomContext)._periodIndFrom = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				this.state = 632;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 630;
					this.match(VtlParser.COMMA);
					this.state = 631;
					(_localctx as TimeAggAtomContext)._op = this.optionalExpr();
					}
					break;
				}
				this.state = 636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.COMMA) {
					{
					this.state = 634;
					this.match(VtlParser.COMMA);
					this.state = 635;
					_la = this._input.LA(1);
					if (!(_la === VtlParser.FIRST || _la === VtlParser.LAST)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 638;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.CURRENT_DATE:
				_localctx = new CurrentDateAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 639;
				this.match(VtlParser.CURRENT_DATE);
				this.state = 640;
				this.match(VtlParser.LPAREN);
				this.state = 641;
				this.match(VtlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setOperators(): SetOperatorsContext {
		let _localctx: SetOperatorsContext = new SetOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, VtlParser.RULE_setOperators);
		let _la: number;
		try {
			this.state = 673;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.UNION:
				_localctx = new UnionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 644;
				this.match(VtlParser.UNION);
				this.state = 645;
				this.match(VtlParser.LPAREN);
				this.state = 646;
				(_localctx as UnionAtomContext)._left = this.expr(0);
				this.state = 649;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 647;
					this.match(VtlParser.COMMA);
					this.state = 648;
					this.expr(0);
					}
					}
					this.state = 651;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VtlParser.COMMA);
				this.state = 653;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.INTERSECT:
				_localctx = new IntersectAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 655;
				this.match(VtlParser.INTERSECT);
				this.state = 656;
				this.match(VtlParser.LPAREN);
				this.state = 657;
				(_localctx as IntersectAtomContext)._left = this.expr(0);
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 658;
					this.match(VtlParser.COMMA);
					this.state = 659;
					this.expr(0);
					}
					}
					this.state = 662;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VtlParser.COMMA);
				this.state = 664;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.SYMDIFF:
			case VtlParser.SETDIFF:
				_localctx = new SetOrSYmDiffAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 666;
				(_localctx as SetOrSYmDiffAtomContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === VtlParser.SYMDIFF || _la === VtlParser.SETDIFF)) {
					(_localctx as SetOrSYmDiffAtomContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 667;
				this.match(VtlParser.LPAREN);
				this.state = 668;
				(_localctx as SetOrSYmDiffAtomContext)._left = this.expr(0);
				this.state = 669;
				this.match(VtlParser.COMMA);
				this.state = 670;
				(_localctx as SetOrSYmDiffAtomContext)._right = this.expr(0);
				this.state = 671;
				this.match(VtlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hierarchyOperators(): HierarchyOperatorsContext {
		let _localctx: HierarchyOperatorsContext = new HierarchyOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, VtlParser.RULE_hierarchyOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 675;
			this.match(VtlParser.HIERARCHY);
			this.state = 676;
			this.match(VtlParser.LPAREN);
			this.state = 677;
			_localctx._op = this.expr(0);
			this.state = 678;
			this.match(VtlParser.COMMA);
			this.state = 679;
			_localctx._hrName = this.match(VtlParser.IDENTIFIER);
			this.state = 681;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.CONDITION) {
				{
				this.state = 680;
				this.conditionClause();
				}
			}

			this.state = 685;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 683;
				this.match(VtlParser.RULE);
				this.state = 684;
				_localctx._ruleComponent = this.componentID();
				}
				break;
			}
			this.state = 688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 214)) & ~0x1F) === 0 && ((1 << (_la - 214)) & ((1 << (VtlParser.NON_NULL - 214)) | (1 << (VtlParser.NON_ZERO - 214)) | (1 << (VtlParser.PARTIAL_NULL - 214)) | (1 << (VtlParser.PARTIAL_ZERO - 214)) | (1 << (VtlParser.ALWAYS_NULL - 214)) | (1 << (VtlParser.ALWAYS_ZERO - 214)))) !== 0)) {
				{
				this.state = 687;
				this.validationMode();
				}
			}

			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.DATASET || _la === VtlParser.RULE || _la === VtlParser.RULE_PRIORITY) {
				{
				this.state = 690;
				this.inputModeHierarchy();
				}
			}

			this.state = 694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.ALL || _la === VtlParser.COMPUTED) {
				{
				this.state = 693;
				this.outputModeHierarchy();
				}
			}

			this.state = 696;
			this.match(VtlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public validationOperators(): ValidationOperatorsContext {
		let _localctx: ValidationOperatorsContext = new ValidationOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, VtlParser.RULE_validationOperators);
		let _la: number;
		try {
			this.state = 759;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.CHECK_DATAPOINT:
				_localctx = new ValidateDPrulesetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 698;
				this.match(VtlParser.CHECK_DATAPOINT);
				this.state = 699;
				this.match(VtlParser.LPAREN);
				this.state = 700;
				(_localctx as ValidateDPrulesetContext)._op = this.expr(0);
				this.state = 701;
				this.match(VtlParser.COMMA);
				this.state = 702;
				(_localctx as ValidateDPrulesetContext)._dpName = this.match(VtlParser.IDENTIFIER);
				this.state = 712;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.COMPONENTS) {
					{
					this.state = 703;
					this.match(VtlParser.COMPONENTS);
					this.state = 704;
					this.componentID();
					this.state = 709;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === VtlParser.COMMA) {
						{
						{
						this.state = 705;
						this.match(VtlParser.COMMA);
						this.state = 706;
						this.componentID();
						}
						}
						this.state = 711;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ALL || _la === VtlParser.INVALID || _la === VtlParser.ALL_MEASURES) {
					{
					this.state = 714;
					this.validationOutput();
					}
				}

				this.state = 717;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.CHECK_HIERARCHY:
				_localctx = new ValidateHRrulesetContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 719;
				this.match(VtlParser.CHECK_HIERARCHY);
				this.state = 720;
				this.match(VtlParser.LPAREN);
				this.state = 721;
				(_localctx as ValidateHRrulesetContext)._op = this.expr(0);
				this.state = 722;
				this.match(VtlParser.COMMA);
				this.state = 723;
				(_localctx as ValidateHRrulesetContext)._hrName = this.match(VtlParser.IDENTIFIER);
				this.state = 725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.CONDITION) {
					{
					this.state = 724;
					this.conditionClause();
					}
				}

				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.RULE) {
					{
					this.state = 727;
					this.match(VtlParser.RULE);
					this.state = 728;
					this.componentID();
					}
				}

				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 214)) & ~0x1F) === 0 && ((1 << (_la - 214)) & ((1 << (VtlParser.NON_NULL - 214)) | (1 << (VtlParser.NON_ZERO - 214)) | (1 << (VtlParser.PARTIAL_NULL - 214)) | (1 << (VtlParser.PARTIAL_ZERO - 214)) | (1 << (VtlParser.ALWAYS_NULL - 214)) | (1 << (VtlParser.ALWAYS_ZERO - 214)))) !== 0)) {
					{
					this.state = 731;
					this.validationMode();
					}
				}

				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.DATASET || _la === VtlParser.DATASET_PRIORITY) {
					{
					this.state = 734;
					this.inputMode();
					}
				}

				this.state = 738;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ALL || _la === VtlParser.INVALID || _la === VtlParser.ALL_MEASURES) {
					{
					this.state = 737;
					this.validationOutput();
					}
				}

				this.state = 740;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.CHECK:
				_localctx = new ValidationSimpleContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 742;
				this.match(VtlParser.CHECK);
				this.state = 743;
				this.match(VtlParser.LPAREN);
				this.state = 744;
				(_localctx as ValidationSimpleContext)._op = this.expr(0);
				this.state = 746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ERRORCODE) {
					{
					this.state = 745;
					(_localctx as ValidationSimpleContext)._codeErr = this.erCode();
					}
				}

				this.state = 749;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ERRORLEVEL) {
					{
					this.state = 748;
					(_localctx as ValidationSimpleContext)._levelCode = this.erLevel();
					}
				}

				this.state = 752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.IMBALANCE) {
					{
					this.state = 751;
					this.imbalanceExpr();
					}
				}

				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ALL || _la === VtlParser.INVALID) {
					{
					this.state = 754;
					(_localctx as ValidationSimpleContext)._output = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === VtlParser.ALL || _la === VtlParser.INVALID)) {
						(_localctx as ValidationSimpleContext)._output = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 757;
				this.match(VtlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalOperators(): ConditionalOperatorsContext {
		let _localctx: ConditionalOperatorsContext = new ConditionalOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, VtlParser.RULE_conditionalOperators);
		try {
			_localctx = new NvlAtomContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.match(VtlParser.NVL);
			this.state = 762;
			this.match(VtlParser.LPAREN);
			this.state = 763;
			(_localctx as NvlAtomContext)._left = this.expr(0);
			this.state = 764;
			this.match(VtlParser.COMMA);
			this.state = 765;
			(_localctx as NvlAtomContext)._right = this.expr(0);
			this.state = 766;
			this.match(VtlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggrOperatorsGrouping(): AggrOperatorsGroupingContext {
		let _localctx: AggrOperatorsGroupingContext = new AggrOperatorsGroupingContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, VtlParser.RULE_aggrOperatorsGrouping);
		let _la: number;
		try {
			_localctx = new AggrDatasetContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			(_localctx as AggrDatasetContext)._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (VtlParser.MIN - 68)) | (1 << (VtlParser.MAX - 68)) | (1 << (VtlParser.SUM - 68)) | (1 << (VtlParser.AVG - 68)) | (1 << (VtlParser.MEDIAN - 68)) | (1 << (VtlParser.COUNT - 68)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (VtlParser.STDDEV_POP - 129)) | (1 << (VtlParser.STDDEV_SAMP - 129)) | (1 << (VtlParser.VAR_POP - 129)) | (1 << (VtlParser.VAR_SAMP - 129)))) !== 0))) {
				(_localctx as AggrDatasetContext)._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 769;
			this.match(VtlParser.LPAREN);
			this.state = 770;
			this.expr(0);
			this.state = 775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.GROUP) {
				{
				this.state = 771;
				this.groupingClause();
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.HAVING) {
					{
					this.state = 772;
					this.havingClause();
					}
				}

				}
			}

			this.state = 777;
			this.match(VtlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anFunction(): AnFunctionContext {
		let _localctx: AnFunctionContext = new AnFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, VtlParser.RULE_anFunction);
		let _la: number;
		try {
			this.state = 825;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.MIN:
			case VtlParser.MAX:
			case VtlParser.SUM:
			case VtlParser.AVG:
			case VtlParser.MEDIAN:
			case VtlParser.COUNT:
			case VtlParser.STDDEV_POP:
			case VtlParser.STDDEV_SAMP:
			case VtlParser.VAR_POP:
			case VtlParser.VAR_SAMP:
			case VtlParser.FIRST_VALUE:
			case VtlParser.LAST_VALUE:
				_localctx = new AnSimpleFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 779;
				(_localctx as AnSimpleFunctionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (VtlParser.MIN - 68)) | (1 << (VtlParser.MAX - 68)) | (1 << (VtlParser.SUM - 68)) | (1 << (VtlParser.AVG - 68)) | (1 << (VtlParser.MEDIAN - 68)) | (1 << (VtlParser.COUNT - 68)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (VtlParser.STDDEV_POP - 129)) | (1 << (VtlParser.STDDEV_SAMP - 129)) | (1 << (VtlParser.VAR_POP - 129)) | (1 << (VtlParser.VAR_SAMP - 129)) | (1 << (VtlParser.FIRST_VALUE - 129)) | (1 << (VtlParser.LAST_VALUE - 129)))) !== 0))) {
					(_localctx as AnSimpleFunctionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 780;
				this.match(VtlParser.LPAREN);
				this.state = 781;
				this.expr(0);
				this.state = 782;
				this.match(VtlParser.OVER);
				this.state = 783;
				this.match(VtlParser.LPAREN);
				{
				this.state = 785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.PARTITION) {
					{
					this.state = 784;
					(_localctx as AnSimpleFunctionContext)._partition = this.partitionByClause();
					}
				}

				this.state = 788;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.ORDER) {
					{
					this.state = 787;
					(_localctx as AnSimpleFunctionContext)._orderBy = this.orderByClause();
					}
				}

				this.state = 791;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.DATA || _la === VtlParser.RANGE) {
					{
					this.state = 790;
					(_localctx as AnSimpleFunctionContext)._windowing = this.windowingClause();
					}
				}

				}
				this.state = 793;
				this.match(VtlParser.RPAREN);
				this.state = 794;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.LAG:
			case VtlParser.LEAD:
				_localctx = new LagOrLeadAnContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 796;
				(_localctx as LagOrLeadAnContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === VtlParser.LAG || _la === VtlParser.LEAD)) {
					(_localctx as LagOrLeadAnContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 797;
				this.match(VtlParser.LPAREN);
				this.state = 798;
				this.expr(0);
				this.state = 804;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.COMMA) {
					{
					this.state = 799;
					this.match(VtlParser.COMMA);
					this.state = 800;
					(_localctx as LagOrLeadAnContext)._offet = this.signedInteger();
					this.state = 802;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VtlParser.NULL_CONSTANT || ((((_la - 230)) & ~0x1F) === 0 && ((1 << (_la - 230)) & ((1 << (VtlParser.INTEGER_CONSTANT - 230)) | (1 << (VtlParser.NUMBER_CONSTANT - 230)) | (1 << (VtlParser.BOOLEAN_CONSTANT - 230)) | (1 << (VtlParser.STRING_CONSTANT - 230)))) !== 0)) {
						{
						this.state = 801;
						(_localctx as LagOrLeadAnContext)._defaultValue = this.constant();
						}
					}

					}
				}

				this.state = 806;
				this.match(VtlParser.OVER);
				this.state = 807;
				this.match(VtlParser.LPAREN);
				{
				this.state = 809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.PARTITION) {
					{
					this.state = 808;
					(_localctx as LagOrLeadAnContext)._partition = this.partitionByClause();
					}
				}

				this.state = 811;
				(_localctx as LagOrLeadAnContext)._orderBy = this.orderByClause();
				}
				this.state = 813;
				this.match(VtlParser.RPAREN);
				this.state = 814;
				this.match(VtlParser.RPAREN);
				}
				break;
			case VtlParser.RATIO_TO_REPORT:
				_localctx = new RatioToReportAnContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 816;
				(_localctx as RatioToReportAnContext)._op = this.match(VtlParser.RATIO_TO_REPORT);
				this.state = 817;
				this.match(VtlParser.LPAREN);
				this.state = 818;
				this.expr(0);
				this.state = 819;
				this.match(VtlParser.OVER);
				this.state = 820;
				this.match(VtlParser.LPAREN);
				{
				this.state = 821;
				(_localctx as RatioToReportAnContext)._partition = this.partitionByClause();
				}
				this.state = 822;
				this.match(VtlParser.RPAREN);
				this.state = 823;
				this.match(VtlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public distanceOperators(): DistanceOperatorsContext {
		let _localctx: DistanceOperatorsContext = new DistanceOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, VtlParser.RULE_distanceOperators);
		try {
			_localctx = new LevenshteinAtomContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 827;
			this.match(VtlParser.LEVENSHTEIN);
			this.state = 828;
			this.match(VtlParser.LPAREN);
			this.state = 829;
			(_localctx as LevenshteinAtomContext)._left = this.expr(0);
			this.state = 830;
			this.match(VtlParser.COMMA);
			this.state = 831;
			(_localctx as LevenshteinAtomContext)._right = this.expr(0);
			this.state = 832;
			this.match(VtlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public renameClauseItem(): RenameClauseItemContext {
		let _localctx: RenameClauseItemContext = new RenameClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, VtlParser.RULE_renameClauseItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 834;
			_localctx._fromName = this.componentID();
			this.state = 835;
			this.match(VtlParser.TO);
			this.state = 836;
			_localctx._toName = this.componentID();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregateClause(): AggregateClauseContext {
		let _localctx: AggregateClauseContext = new AggregateClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, VtlParser.RULE_aggregateClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 838;
			this.aggrFunctionClause();
			this.state = 843;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.COMMA) {
				{
				{
				this.state = 839;
				this.match(VtlParser.COMMA);
				this.state = 840;
				this.aggrFunctionClause();
				}
				}
				this.state = 845;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggrFunctionClause(): AggrFunctionClauseContext {
		let _localctx: AggrFunctionClauseContext = new AggrFunctionClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, VtlParser.RULE_aggrFunctionClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 847;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (VtlParser.DIMENSION - 91)) | (1 << (VtlParser.MEASURE - 91)) | (1 << (VtlParser.ATTRIBUTE - 91)) | (1 << (VtlParser.VIRAL - 91)))) !== 0) || _la === VtlParser.COMPONENT) {
				{
				this.state = 846;
				this.componentRole();
				}
			}

			this.state = 849;
			this.componentID();
			this.state = 850;
			this.match(VtlParser.ASSIGN);
			this.state = 851;
			this.aggrOperatorsGrouping();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calcClauseItem(): CalcClauseItemContext {
		let _localctx: CalcClauseItemContext = new CalcClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, VtlParser.RULE_calcClauseItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (VtlParser.DIMENSION - 91)) | (1 << (VtlParser.MEASURE - 91)) | (1 << (VtlParser.ATTRIBUTE - 91)) | (1 << (VtlParser.VIRAL - 91)))) !== 0) || _la === VtlParser.COMPONENT) {
				{
				this.state = 853;
				this.componentRole();
				}
			}

			this.state = 856;
			this.componentID();
			this.state = 857;
			this.match(VtlParser.ASSIGN);
			this.state = 858;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subspaceClauseItem(): SubspaceClauseItemContext {
		let _localctx: SubspaceClauseItemContext = new SubspaceClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, VtlParser.RULE_subspaceClauseItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 860;
			this.componentID();
			this.state = 861;
			this.match(VtlParser.EQ);
			this.state = 862;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinClauseWithoutUsing(): JoinClauseWithoutUsingContext {
		let _localctx: JoinClauseWithoutUsingContext = new JoinClauseWithoutUsingContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, VtlParser.RULE_joinClauseWithoutUsing);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 864;
			this.joinClauseItem();
			this.state = 869;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.COMMA) {
				{
				{
				this.state = 865;
				this.match(VtlParser.COMMA);
				this.state = 866;
				this.joinClauseItem();
				}
				}
				this.state = 871;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinClause(): JoinClauseContext {
		let _localctx: JoinClauseContext = new JoinClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, VtlParser.RULE_joinClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 872;
			this.joinClauseItem();
			this.state = 877;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.COMMA) {
				{
				{
				this.state = 873;
				this.match(VtlParser.COMMA);
				this.state = 874;
				this.joinClauseItem();
				}
				}
				this.state = 879;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 889;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.USING) {
				{
				this.state = 880;
				this.match(VtlParser.USING);
				this.state = 881;
				this.componentID();
				this.state = 886;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
					{
					this.state = 882;
					this.match(VtlParser.COMMA);
					this.state = 883;
					this.componentID();
					}
					}
					this.state = 888;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinClauseItem(): JoinClauseItemContext {
		let _localctx: JoinClauseItemContext = new JoinClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, VtlParser.RULE_joinClauseItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 891;
			this.expr(0);
			this.state = 894;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.AS) {
				{
				this.state = 892;
				this.match(VtlParser.AS);
				this.state = 893;
				this.alias();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinBody(): JoinBodyContext {
		let _localctx: JoinBodyContext = new JoinBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, VtlParser.RULE_joinBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 897;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.FILTER) {
				{
				this.state = 896;
				this.filterClause();
				}
			}

			this.state = 902;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.CALC:
				{
				this.state = 899;
				this.calcClause();
				}
				break;
			case VtlParser.APPLY:
				{
				this.state = 900;
				this.joinApplyClause();
				}
				break;
			case VtlParser.AGGREGATE:
				{
				this.state = 901;
				this.aggrClause();
				}
				break;
			case VtlParser.RPAREN:
			case VtlParser.DROP:
			case VtlParser.KEEP:
			case VtlParser.RENAME:
				break;
			default:
				break;
			}
			this.state = 905;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.DROP || _la === VtlParser.KEEP) {
				{
				this.state = 904;
				this.keepOrDropClause();
				}
			}

			this.state = 908;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.RENAME) {
				{
				this.state = 907;
				this.renameClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinApplyClause(): JoinApplyClauseContext {
		let _localctx: JoinApplyClauseContext = new JoinApplyClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, VtlParser.RULE_joinApplyClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 910;
			this.match(VtlParser.APPLY);
			this.state = 911;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partitionByClause(): PartitionByClauseContext {
		let _localctx: PartitionByClauseContext = new PartitionByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, VtlParser.RULE_partitionByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 913;
			this.match(VtlParser.PARTITION);
			this.state = 914;
			this.match(VtlParser.BY);
			this.state = 915;
			this.componentID();
			this.state = 920;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.COMMA) {
				{
				{
				this.state = 916;
				this.match(VtlParser.COMMA);
				this.state = 917;
				this.componentID();
				}
				}
				this.state = 922;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByClause(): OrderByClauseContext {
		let _localctx: OrderByClauseContext = new OrderByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, VtlParser.RULE_orderByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 923;
			this.match(VtlParser.ORDER);
			this.state = 924;
			this.match(VtlParser.BY);
			this.state = 925;
			this.orderByItem();
			this.state = 930;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.COMMA) {
				{
				{
				this.state = 926;
				this.match(VtlParser.COMMA);
				this.state = 927;
				this.orderByItem();
				}
				}
				this.state = 932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByItem(): OrderByItemContext {
		let _localctx: OrderByItemContext = new OrderByItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, VtlParser.RULE_orderByItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 933;
			this.componentID();
			this.state = 935;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.ASC || _la === VtlParser.DESC) {
				{
				this.state = 934;
				_la = this._input.LA(1);
				if (!(_la === VtlParser.ASC || _la === VtlParser.DESC)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowingClause(): WindowingClauseContext {
		let _localctx: WindowingClauseContext = new WindowingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, VtlParser.RULE_windowingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 940;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.DATA:
				{
				{
				this.state = 937;
				this.match(VtlParser.DATA);
				this.state = 938;
				this.match(VtlParser.POINTS);
				}
				}
				break;
			case VtlParser.RANGE:
				{
				this.state = 939;
				this.match(VtlParser.RANGE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 942;
			this.match(VtlParser.BETWEEN);
			this.state = 943;
			_localctx._from_ = this.limitClauseItem();
			this.state = 944;
			this.match(VtlParser.AND);
			this.state = 945;
			_localctx._to_ = this.limitClauseItem();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signedInteger(): SignedIntegerContext {
		let _localctx: SignedIntegerContext = new SignedIntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, VtlParser.RULE_signedInteger);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 947;
			this.match(VtlParser.INTEGER_CONSTANT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limitClauseItem(): LimitClauseItemContext {
		let _localctx: LimitClauseItemContext = new LimitClauseItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, VtlParser.RULE_limitClauseItem);
		try {
			this.state = 960;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 949;
				this.match(VtlParser.INTEGER_CONSTANT);
				this.state = 950;
				this.match(VtlParser.PRECEDING);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 951;
				this.match(VtlParser.INTEGER_CONSTANT);
				this.state = 952;
				this.match(VtlParser.FOLLOWING);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 953;
				this.match(VtlParser.CURRENT);
				this.state = 954;
				this.match(VtlParser.DATA);
				this.state = 955;
				this.match(VtlParser.POINT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 956;
				this.match(VtlParser.UNBOUNDED);
				this.state = 957;
				this.match(VtlParser.PRECEDING);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 958;
				this.match(VtlParser.UNBOUNDED);
				this.state = 959;
				this.match(VtlParser.FOLLOWING);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingClause(): GroupingClauseContext {
		let _localctx: GroupingClauseContext = new GroupingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, VtlParser.RULE_groupingClause);
		let _la: number;
		try {
			this.state = 975;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				_localctx = new GroupByOrExceptContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 962;
				this.match(VtlParser.GROUP);
				this.state = 963;
				(_localctx as GroupByOrExceptContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === VtlParser.BY || _la === VtlParser.EXCEPT)) {
					(_localctx as GroupByOrExceptContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 964;
				this.componentID();
				this.state = 969;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
					{
					this.state = 965;
					this.match(VtlParser.COMMA);
					this.state = 966;
					this.componentID();
					}
					}
					this.state = 971;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				_localctx = new GroupAllContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 972;
				this.match(VtlParser.GROUP);
				this.state = 973;
				this.match(VtlParser.ALL);
				this.state = 974;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public havingClause(): HavingClauseContext {
		let _localctx: HavingClauseContext = new HavingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, VtlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 977;
			this.match(VtlParser.HAVING);
			this.state = 978;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterItem(): ParameterItemContext {
		let _localctx: ParameterItemContext = new ParameterItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, VtlParser.RULE_parameterItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 980;
			this.varID();
			this.state = 981;
			this.inputParameterType();
			this.state = 984;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.DEFAULT) {
				{
				this.state = 982;
				this.match(VtlParser.DEFAULT);
				this.state = 983;
				this.constant();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public outputParameterType(): OutputParameterTypeContext {
		let _localctx: OutputParameterTypeContext = new OutputParameterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, VtlParser.RULE_outputParameterType);
		try {
			this.state = 989;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.BOOLEAN:
			case VtlParser.DATE:
			case VtlParser.TIME_PERIOD:
			case VtlParser.NUMBER:
			case VtlParser.STRING:
			case VtlParser.TIME:
			case VtlParser.INTEGER:
			case VtlParser.DURATION:
			case VtlParser.SCALAR:
			case VtlParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 986;
				this.scalarType();
				}
				break;
			case VtlParser.DATASET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 987;
				this.datasetType();
				}
				break;
			case VtlParser.DIMENSION:
			case VtlParser.MEASURE:
			case VtlParser.ATTRIBUTE:
			case VtlParser.VIRAL:
			case VtlParser.COMPONENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 988;
				this.componentType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public outputParameterTypeComponent(): OutputParameterTypeComponentContext {
		let _localctx: OutputParameterTypeComponentContext = new OutputParameterTypeComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, VtlParser.RULE_outputParameterTypeComponent);
		try {
			this.state = 993;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.DIMENSION:
			case VtlParser.MEASURE:
			case VtlParser.ATTRIBUTE:
			case VtlParser.VIRAL:
			case VtlParser.COMPONENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 991;
				this.componentType();
				}
				break;
			case VtlParser.BOOLEAN:
			case VtlParser.DATE:
			case VtlParser.TIME_PERIOD:
			case VtlParser.NUMBER:
			case VtlParser.STRING:
			case VtlParser.TIME:
			case VtlParser.INTEGER:
			case VtlParser.DURATION:
			case VtlParser.SCALAR:
			case VtlParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 992;
				this.scalarType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inputParameterType(): InputParameterTypeContext {
		let _localctx: InputParameterTypeContext = new InputParameterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, VtlParser.RULE_inputParameterType);
		try {
			this.state = 1000;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.BOOLEAN:
			case VtlParser.DATE:
			case VtlParser.TIME_PERIOD:
			case VtlParser.NUMBER:
			case VtlParser.STRING:
			case VtlParser.TIME:
			case VtlParser.INTEGER:
			case VtlParser.DURATION:
			case VtlParser.SCALAR:
			case VtlParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 995;
				this.scalarType();
				}
				break;
			case VtlParser.DATASET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 996;
				this.datasetType();
				}
				break;
			case VtlParser.SET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 997;
				this.scalarSetType();
				}
				break;
			case VtlParser.DATAPOINT:
			case VtlParser.HIERARCHICAL:
			case VtlParser.RULESET:
			case VtlParser.DATAPOINT_ON_VD:
			case VtlParser.DATAPOINT_ON_VAR:
			case VtlParser.HIERARCHICAL_ON_VD:
			case VtlParser.HIERARCHICAL_ON_VAR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 998;
				this.rulesetType();
				}
				break;
			case VtlParser.DIMENSION:
			case VtlParser.MEASURE:
			case VtlParser.ATTRIBUTE:
			case VtlParser.VIRAL:
			case VtlParser.COMPONENT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 999;
				this.componentType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rulesetType(): RulesetTypeContext {
		let _localctx: RulesetTypeContext = new RulesetTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, VtlParser.RULE_rulesetType);
		try {
			this.state = 1005;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.RULESET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1002;
				this.match(VtlParser.RULESET);
				}
				break;
			case VtlParser.DATAPOINT:
			case VtlParser.DATAPOINT_ON_VD:
			case VtlParser.DATAPOINT_ON_VAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1003;
				this.dpRuleset();
				}
				break;
			case VtlParser.HIERARCHICAL:
			case VtlParser.HIERARCHICAL_ON_VD:
			case VtlParser.HIERARCHICAL_ON_VAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1004;
				this.hrRuleset();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scalarType(): ScalarTypeContext {
		let _localctx: ScalarTypeContext = new ScalarTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, VtlParser.RULE_scalarType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1009;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.BOOLEAN:
			case VtlParser.DATE:
			case VtlParser.TIME_PERIOD:
			case VtlParser.NUMBER:
			case VtlParser.STRING:
			case VtlParser.TIME:
			case VtlParser.INTEGER:
			case VtlParser.DURATION:
			case VtlParser.SCALAR:
				{
				this.state = 1007;
				this.basicScalarType();
				}
				break;
			case VtlParser.IDENTIFIER:
				{
				this.state = 1008;
				this.valueDomainName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1012;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.QLPAREN || _la === VtlParser.GLPAREN) {
				{
				this.state = 1011;
				this.scalarTypeConstraint();
				}
			}

			this.state = 1018;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.NOT || _la === VtlParser.NULL_CONSTANT) {
				{
				this.state = 1015;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.NOT) {
					{
					this.state = 1014;
					this.match(VtlParser.NOT);
					}
				}

				this.state = 1017;
				this.match(VtlParser.NULL_CONSTANT);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentType(): ComponentTypeContext {
		let _localctx: ComponentTypeContext = new ComponentTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, VtlParser.RULE_componentType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1020;
			this.componentRole();
			this.state = 1025;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.LT) {
				{
				this.state = 1021;
				this.match(VtlParser.LT);
				this.state = 1022;
				this.scalarType();
				this.state = 1023;
				this.match(VtlParser.MT);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datasetType(): DatasetTypeContext {
		let _localctx: DatasetTypeContext = new DatasetTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, VtlParser.RULE_datasetType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1027;
			this.match(VtlParser.DATASET);
			this.state = 1039;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.GLPAREN) {
				{
				this.state = 1028;
				this.match(VtlParser.GLPAREN);
				this.state = 1029;
				this.compConstraint();
				this.state = 1034;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
					{
					this.state = 1030;
					this.match(VtlParser.COMMA);
					this.state = 1031;
					this.compConstraint();
					}
					}
					this.state = 1036;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1037;
				this.match(VtlParser.GRPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scalarSetType(): ScalarSetTypeContext {
		let _localctx: ScalarSetTypeContext = new ScalarSetTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, VtlParser.RULE_scalarSetType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1041;
			this.match(VtlParser.SET);
			this.state = 1046;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.LT) {
				{
				this.state = 1042;
				this.match(VtlParser.LT);
				this.state = 1043;
				this.scalarType();
				this.state = 1044;
				this.match(VtlParser.MT);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dpRuleset(): DpRulesetContext {
		let _localctx: DpRulesetContext = new DpRulesetContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, VtlParser.RULE_dpRuleset);
		let _la: number;
		try {
			this.state = 1077;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.DATAPOINT:
				_localctx = new DataPointContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1048;
				this.match(VtlParser.DATAPOINT);
				}
				break;
			case VtlParser.DATAPOINT_ON_VD:
				_localctx = new DataPointVdContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1049;
				this.match(VtlParser.DATAPOINT_ON_VD);
				this.state = 1061;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.GLPAREN) {
					{
					this.state = 1050;
					this.match(VtlParser.GLPAREN);
					this.state = 1051;
					this.valueDomainName();
					this.state = 1056;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === VtlParser.MUL) {
						{
						{
						this.state = 1052;
						this.match(VtlParser.MUL);
						this.state = 1053;
						this.valueDomainName();
						}
						}
						this.state = 1058;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1059;
					this.match(VtlParser.GRPAREN);
					}
				}

				}
				break;
			case VtlParser.DATAPOINT_ON_VAR:
				_localctx = new DataPointVarContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1063;
				this.match(VtlParser.DATAPOINT_ON_VAR);
				this.state = 1075;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.GLPAREN) {
					{
					this.state = 1064;
					this.match(VtlParser.GLPAREN);
					this.state = 1065;
					this.varID();
					this.state = 1070;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === VtlParser.MUL) {
						{
						{
						this.state = 1066;
						this.match(VtlParser.MUL);
						this.state = 1067;
						this.varID();
						}
						}
						this.state = 1072;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1073;
					this.match(VtlParser.GRPAREN);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hrRuleset(): HrRulesetContext {
		let _localctx: HrRulesetContext = new HrRulesetContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, VtlParser.RULE_hrRuleset);
		let _la: number;
		try {
			this.state = 1119;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.HIERARCHICAL:
				_localctx = new HrRulesetTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1079;
				this.match(VtlParser.HIERARCHICAL);
				}
				break;
			case VtlParser.HIERARCHICAL_ON_VD:
				_localctx = new HrRulesetVdTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1080;
				this.match(VtlParser.HIERARCHICAL_ON_VD);
				this.state = 1097;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.GLPAREN) {
					{
					this.state = 1081;
					this.match(VtlParser.GLPAREN);
					this.state = 1082;
					(_localctx as HrRulesetVdTypeContext)._vdName = this.match(VtlParser.IDENTIFIER);
					this.state = 1094;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VtlParser.LPAREN) {
						{
						this.state = 1083;
						this.match(VtlParser.LPAREN);
						this.state = 1084;
						this.valueDomainName();
						this.state = 1089;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.MUL) {
							{
							{
							this.state = 1085;
							this.match(VtlParser.MUL);
							this.state = 1086;
							this.valueDomainName();
							}
							}
							this.state = 1091;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1092;
						this.match(VtlParser.RPAREN);
						}
					}

					this.state = 1096;
					this.match(VtlParser.GRPAREN);
					}
				}

				}
				break;
			case VtlParser.HIERARCHICAL_ON_VAR:
				_localctx = new HrRulesetVarTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1099;
				this.match(VtlParser.HIERARCHICAL_ON_VAR);
				this.state = 1117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VtlParser.GLPAREN) {
					{
					this.state = 1100;
					this.match(VtlParser.GLPAREN);
					this.state = 1101;
					(_localctx as HrRulesetVarTypeContext)._varName = this.varID();
					this.state = 1113;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VtlParser.LPAREN) {
						{
						this.state = 1102;
						this.match(VtlParser.LPAREN);
						this.state = 1103;
						this.varID();
						this.state = 1108;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === VtlParser.MUL) {
							{
							{
							this.state = 1104;
							this.match(VtlParser.MUL);
							this.state = 1105;
							this.varID();
							}
							}
							this.state = 1110;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1111;
						this.match(VtlParser.RPAREN);
						}
					}

					this.state = 1115;
					this.match(VtlParser.GRPAREN);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueDomainName(): ValueDomainNameContext {
		let _localctx: ValueDomainNameContext = new ValueDomainNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, VtlParser.RULE_valueDomainName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1121;
			this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rulesetID(): RulesetIDContext {
		let _localctx: RulesetIDContext = new RulesetIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, VtlParser.RULE_rulesetID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1123;
			this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rulesetSignature(): RulesetSignatureContext {
		let _localctx: RulesetSignatureContext = new RulesetSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, VtlParser.RULE_rulesetSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1125;
			_la = this._input.LA(1);
			if (!(_la === VtlParser.VALUE_DOMAIN || _la === VtlParser.VARIABLE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1126;
			this.signature();
			this.state = 1131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.COMMA) {
				{
				{
				this.state = 1127;
				this.match(VtlParser.COMMA);
				this.state = 1128;
				this.signature();
				}
				}
				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signature(): SignatureContext {
		let _localctx: SignatureContext = new SignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, VtlParser.RULE_signature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1134;
			this.varID();
			this.state = 1137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.AS) {
				{
				this.state = 1135;
				this.match(VtlParser.AS);
				this.state = 1136;
				this.alias();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleClauseDatapoint(): RuleClauseDatapointContext {
		let _localctx: RuleClauseDatapointContext = new RuleClauseDatapointContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, VtlParser.RULE_ruleClauseDatapoint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1139;
			this.ruleItemDatapoint();
			this.state = 1144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.EOL) {
				{
				{
				this.state = 1140;
				this.match(VtlParser.EOL);
				this.state = 1141;
				this.ruleItemDatapoint();
				}
				}
				this.state = 1146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleItemDatapoint(): RuleItemDatapointContext {
		let _localctx: RuleItemDatapointContext = new RuleItemDatapointContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, VtlParser.RULE_ruleItemDatapoint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				{
				this.state = 1147;
				_localctx._ruleName = this.match(VtlParser.IDENTIFIER);
				this.state = 1148;
				this.match(VtlParser.COLON);
				}
				break;
			}
			this.state = 1155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.WHEN) {
				{
				this.state = 1151;
				this.match(VtlParser.WHEN);
				this.state = 1152;
				_localctx._antecedentContiditon = this.expr(0);
				this.state = 1153;
				this.match(VtlParser.THEN);
				}
			}

			this.state = 1157;
			_localctx._consequentCondition = this.expr(0);
			this.state = 1159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.ERRORCODE) {
				{
				this.state = 1158;
				this.erCode();
				}
			}

			this.state = 1162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.ERRORLEVEL) {
				{
				this.state = 1161;
				this.erLevel();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleClauseHierarchical(): RuleClauseHierarchicalContext {
		let _localctx: RuleClauseHierarchicalContext = new RuleClauseHierarchicalContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, VtlParser.RULE_ruleClauseHierarchical);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1164;
			this.ruleItemHierarchical();
			this.state = 1169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.EOL) {
				{
				{
				this.state = 1165;
				this.match(VtlParser.EOL);
				this.state = 1166;
				this.ruleItemHierarchical();
				}
				}
				this.state = 1171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleItemHierarchical(): RuleItemHierarchicalContext {
		let _localctx: RuleItemHierarchicalContext = new RuleItemHierarchicalContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, VtlParser.RULE_ruleItemHierarchical);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1174;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				{
				this.state = 1172;
				_localctx._ruleName = this.match(VtlParser.IDENTIFIER);
				this.state = 1173;
				this.match(VtlParser.COLON);
				}
				break;
			}
			this.state = 1176;
			this.codeItemRelation();
			this.state = 1178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.ERRORCODE) {
				{
				this.state = 1177;
				this.erCode();
				}
			}

			this.state = 1181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.ERRORLEVEL) {
				{
				this.state = 1180;
				this.erLevel();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hierRuleSignature(): HierRuleSignatureContext {
		let _localctx: HierRuleSignatureContext = new HierRuleSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, VtlParser.RULE_hierRuleSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1183;
			_la = this._input.LA(1);
			if (!(_la === VtlParser.VALUE_DOMAIN || _la === VtlParser.VARIABLE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.CONDITION) {
				{
				this.state = 1184;
				this.match(VtlParser.CONDITION);
				this.state = 1185;
				this.valueDomainSignature();
				}
			}

			this.state = 1188;
			this.match(VtlParser.RULE);
			this.state = 1189;
			this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueDomainSignature(): ValueDomainSignatureContext {
		let _localctx: ValueDomainSignatureContext = new ValueDomainSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, VtlParser.RULE_valueDomainSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1191;
			this.signature();
			this.state = 1196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.COMMA) {
				{
				{
				this.state = 1192;
				this.match(VtlParser.COMMA);
				this.state = 1193;
				this.signature();
				}
				}
				this.state = 1198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codeItemRelation(): CodeItemRelationContext {
		let _localctx: CodeItemRelationContext = new CodeItemRelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, VtlParser.RULE_codeItemRelation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.WHEN) {
				{
				this.state = 1199;
				this.match(VtlParser.WHEN);
				this.state = 1200;
				this.expr(0);
				this.state = 1201;
				this.match(VtlParser.THEN);
				}
			}

			this.state = 1205;
			_localctx._codetemRef = this.valueDomainValue();
			this.state = 1207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VtlParser.EQ) | (1 << VtlParser.LT) | (1 << VtlParser.MT) | (1 << VtlParser.ME) | (1 << VtlParser.NEQ) | (1 << VtlParser.LE))) !== 0)) {
				{
				this.state = 1206;
				this.comparisonOperand();
				}
			}

			this.state = 1209;
			this.codeItemRelationClause();
			this.state = 1213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.PLUS || _la === VtlParser.MINUS || ((((_la - 230)) & ~0x1F) === 0 && ((1 << (_la - 230)) & ((1 << (VtlParser.INTEGER_CONSTANT - 230)) | (1 << (VtlParser.NUMBER_CONSTANT - 230)) | (1 << (VtlParser.IDENTIFIER - 230)))) !== 0)) {
				{
				{
				this.state = 1210;
				this.codeItemRelationClause();
				}
				}
				this.state = 1215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codeItemRelationClause(): CodeItemRelationClauseContext {
		let _localctx: CodeItemRelationClauseContext = new CodeItemRelationClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, VtlParser.RULE_codeItemRelationClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.PLUS || _la === VtlParser.MINUS) {
				{
				this.state = 1216;
				_localctx._opAdd = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === VtlParser.PLUS || _la === VtlParser.MINUS)) {
					_localctx._opAdd = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1219;
			_localctx._rightCodeItem = this.valueDomainValue();
			this.state = 1224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.QLPAREN) {
				{
				this.state = 1220;
				this.match(VtlParser.QLPAREN);
				this.state = 1221;
				_localctx._rightCondition = this.expr(0);
				this.state = 1222;
				this.match(VtlParser.QRPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueDomainValue(): ValueDomainValueContext {
		let _localctx: ValueDomainValueContext = new ValueDomainValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, VtlParser.RULE_valueDomainValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1226;
			_la = this._input.LA(1);
			if (!(((((_la - 230)) & ~0x1F) === 0 && ((1 << (_la - 230)) & ((1 << (VtlParser.INTEGER_CONSTANT - 230)) | (1 << (VtlParser.NUMBER_CONSTANT - 230)) | (1 << (VtlParser.IDENTIFIER - 230)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scalarTypeConstraint(): ScalarTypeConstraintContext {
		let _localctx: ScalarTypeConstraintContext = new ScalarTypeConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, VtlParser.RULE_scalarTypeConstraint);
		let _la: number;
		try {
			this.state = 1243;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.QLPAREN:
				_localctx = new ConditionConstraintContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1228;
				this.match(VtlParser.QLPAREN);
				this.state = 1229;
				this.expr(0);
				this.state = 1230;
				this.match(VtlParser.QRPAREN);
				}
				break;
			case VtlParser.GLPAREN:
				_localctx = new RangeConstraintContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1232;
				this.match(VtlParser.GLPAREN);
				this.state = 1233;
				this.constant();
				this.state = 1238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VtlParser.COMMA) {
					{
					{
					this.state = 1234;
					this.match(VtlParser.COMMA);
					this.state = 1235;
					this.constant();
					}
					}
					this.state = 1240;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1241;
				this.match(VtlParser.GRPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compConstraint(): CompConstraintContext {
		let _localctx: CompConstraintContext = new CompConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, VtlParser.RULE_compConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1245;
			this.componentType();
			this.state = 1248;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.IDENTIFIER:
				{
				this.state = 1246;
				this.componentID();
				}
				break;
			case VtlParser.OPTIONAL:
				{
				this.state = 1247;
				this.multModifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multModifier(): MultModifierContext {
		let _localctx: MultModifierContext = new MultModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, VtlParser.RULE_multModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1250;
			this.match(VtlParser.OPTIONAL);
			this.state = 1252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.PLUS || _la === VtlParser.MUL) {
				{
				this.state = 1251;
				_la = this._input.LA(1);
				if (!(_la === VtlParser.PLUS || _la === VtlParser.MUL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public validationOutput(): ValidationOutputContext {
		let _localctx: ValidationOutputContext = new ValidationOutputContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, VtlParser.RULE_validationOutput);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1254;
			_la = this._input.LA(1);
			if (!(_la === VtlParser.ALL || _la === VtlParser.INVALID || _la === VtlParser.ALL_MEASURES)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public validationMode(): ValidationModeContext {
		let _localctx: ValidationModeContext = new ValidationModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, VtlParser.RULE_validationMode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1256;
			_la = this._input.LA(1);
			if (!(((((_la - 214)) & ~0x1F) === 0 && ((1 << (_la - 214)) & ((1 << (VtlParser.NON_NULL - 214)) | (1 << (VtlParser.NON_ZERO - 214)) | (1 << (VtlParser.PARTIAL_NULL - 214)) | (1 << (VtlParser.PARTIAL_ZERO - 214)) | (1 << (VtlParser.ALWAYS_NULL - 214)) | (1 << (VtlParser.ALWAYS_ZERO - 214)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionClause(): ConditionClauseContext {
		let _localctx: ConditionClauseContext = new ConditionClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, VtlParser.RULE_conditionClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1258;
			this.match(VtlParser.CONDITION);
			this.state = 1259;
			this.componentID();
			this.state = 1264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.COMMA) {
				{
				{
				this.state = 1260;
				this.match(VtlParser.COMMA);
				this.state = 1261;
				this.componentID();
				}
				}
				this.state = 1266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inputMode(): InputModeContext {
		let _localctx: InputModeContext = new InputModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, VtlParser.RULE_inputMode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1267;
			_la = this._input.LA(1);
			if (!(_la === VtlParser.DATASET || _la === VtlParser.DATASET_PRIORITY)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imbalanceExpr(): ImbalanceExprContext {
		let _localctx: ImbalanceExprContext = new ImbalanceExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, VtlParser.RULE_imbalanceExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1269;
			this.match(VtlParser.IMBALANCE);
			this.state = 1270;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inputModeHierarchy(): InputModeHierarchyContext {
		let _localctx: InputModeHierarchyContext = new InputModeHierarchyContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, VtlParser.RULE_inputModeHierarchy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1272;
			_la = this._input.LA(1);
			if (!(_la === VtlParser.DATASET || _la === VtlParser.RULE || _la === VtlParser.RULE_PRIORITY)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public outputModeHierarchy(): OutputModeHierarchyContext {
		let _localctx: OutputModeHierarchyContext = new OutputModeHierarchyContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, VtlParser.RULE_outputModeHierarchy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1274;
			_la = this._input.LA(1);
			if (!(_la === VtlParser.ALL || _la === VtlParser.COMPUTED)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alias(): AliasContext {
		let _localctx: AliasContext = new AliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, VtlParser.RULE_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1276;
			this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varID(): VarIDContext {
		let _localctx: VarIDContext = new VarIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, VtlParser.RULE_varID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1278;
			this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleComponentId(): SimpleComponentIdContext {
		let _localctx: SimpleComponentIdContext = new SimpleComponentIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, VtlParser.RULE_simpleComponentId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1280;
			this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentID(): ComponentIDContext {
		let _localctx: ComponentIDContext = new ComponentIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, VtlParser.RULE_componentID);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1282;
			this.match(VtlParser.IDENTIFIER);
			this.state = 1285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VtlParser.MEMBERSHIP) {
				{
				this.state = 1283;
				this.match(VtlParser.MEMBERSHIP);
				this.state = 1284;
				this.match(VtlParser.IDENTIFIER);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lists(): ListsContext {
		let _localctx: ListsContext = new ListsContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, VtlParser.RULE_lists);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1287;
			this.match(VtlParser.GLPAREN);
			this.state = 1288;
			this.constant();
			this.state = 1293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VtlParser.COMMA) {
				{
				{
				this.state = 1289;
				this.match(VtlParser.COMMA);
				this.state = 1290;
				this.constant();
				}
				}
				this.state = 1295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1296;
			this.match(VtlParser.GRPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public erCode(): ErCodeContext {
		let _localctx: ErCodeContext = new ErCodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, VtlParser.RULE_erCode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1298;
			this.match(VtlParser.ERRORCODE);
			this.state = 1299;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public erLevel(): ErLevelContext {
		let _localctx: ErLevelContext = new ErLevelContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, VtlParser.RULE_erLevel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1301;
			this.match(VtlParser.ERRORLEVEL);
			this.state = 1302;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperand(): ComparisonOperandContext {
		let _localctx: ComparisonOperandContext = new ComparisonOperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, VtlParser.RULE_comparisonOperand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1304;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VtlParser.EQ) | (1 << VtlParser.LT) | (1 << VtlParser.MT) | (1 << VtlParser.ME) | (1 << VtlParser.NEQ) | (1 << VtlParser.LE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalExpr(): OptionalExprContext {
		let _localctx: OptionalExprContext = new OptionalExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, VtlParser.RULE_optionalExpr);
		try {
			this.state = 1308;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.LPAREN:
			case VtlParser.PLUS:
			case VtlParser.MINUS:
			case VtlParser.EVAL:
			case VtlParser.IF:
			case VtlParser.CURRENT_DATE:
			case VtlParser.NOT:
			case VtlParser.BETWEEN:
			case VtlParser.NULL_CONSTANT:
			case VtlParser.ISNULL:
			case VtlParser.UNION:
			case VtlParser.SYMDIFF:
			case VtlParser.INTERSECT:
			case VtlParser.CHECK:
			case VtlParser.EXISTS_IN:
			case VtlParser.MIN:
			case VtlParser.MAX:
			case VtlParser.ABS:
			case VtlParser.LN:
			case VtlParser.LOG:
			case VtlParser.TRUNC:
			case VtlParser.ROUND:
			case VtlParser.POWER:
			case VtlParser.MOD:
			case VtlParser.LEN:
			case VtlParser.TRIM:
			case VtlParser.UCASE:
			case VtlParser.LCASE:
			case VtlParser.SUBSTR:
			case VtlParser.SUM:
			case VtlParser.AVG:
			case VtlParser.MEDIAN:
			case VtlParser.COUNT:
			case VtlParser.EXP:
			case VtlParser.CHARSET_MATCH:
			case VtlParser.NVL:
			case VtlParser.HIERARCHY:
			case VtlParser.LEVENSHTEIN:
			case VtlParser.LTRIM:
			case VtlParser.RTRIM:
			case VtlParser.INSTR:
			case VtlParser.REPLACE:
			case VtlParser.CEIL:
			case VtlParser.FLOOR:
			case VtlParser.SQRT:
			case VtlParser.SETDIFF:
			case VtlParser.STDDEV_POP:
			case VtlParser.STDDEV_SAMP:
			case VtlParser.VAR_POP:
			case VtlParser.VAR_SAMP:
			case VtlParser.FIRST_VALUE:
			case VtlParser.LAST_VALUE:
			case VtlParser.LAG:
			case VtlParser.LEAD:
			case VtlParser.RATIO_TO_REPORT:
			case VtlParser.FILL_TIME_SERIES:
			case VtlParser.FLOW_TO_STOCK:
			case VtlParser.STOCK_TO_FLOW:
			case VtlParser.TIMESHIFT:
			case VtlParser.INNER_JOIN:
			case VtlParser.LEFT_JOIN:
			case VtlParser.CROSS_JOIN:
			case VtlParser.FULL_JOIN:
			case VtlParser.PERIOD_INDICATOR:
			case VtlParser.TIME_AGG:
			case VtlParser.CAST:
			case VtlParser.CHECK_DATAPOINT:
			case VtlParser.CHECK_HIERARCHY:
			case VtlParser.INTEGER_CONSTANT:
			case VtlParser.NUMBER_CONSTANT:
			case VtlParser.BOOLEAN_CONSTANT:
			case VtlParser.STRING_CONSTANT:
			case VtlParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1306;
				this.expr(0);
				}
				break;
			case VtlParser.OPTIONAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1307;
				this.match(VtlParser.OPTIONAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentRole(): ComponentRoleContext {
		let _localctx: ComponentRoleContext = new ComponentRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, VtlParser.RULE_componentRole);
		try {
			this.state = 1315;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VtlParser.MEASURE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1310;
				this.match(VtlParser.MEASURE);
				}
				break;
			case VtlParser.COMPONENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1311;
				this.match(VtlParser.COMPONENT);
				}
				break;
			case VtlParser.DIMENSION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1312;
				this.match(VtlParser.DIMENSION);
				}
				break;
			case VtlParser.ATTRIBUTE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1313;
				this.match(VtlParser.ATTRIBUTE);
				}
				break;
			case VtlParser.VIRAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1314;
				this.viralAttribute();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public viralAttribute(): ViralAttributeContext {
		let _localctx: ViralAttributeContext = new ViralAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, VtlParser.RULE_viralAttribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1317;
			this.match(VtlParser.VIRAL);
			this.state = 1318;
			this.match(VtlParser.ATTRIBUTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueDomainID(): ValueDomainIDContext {
		let _localctx: ValueDomainIDContext = new ValueDomainIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, VtlParser.RULE_valueDomainID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1320;
			this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorID(): OperatorIDContext {
		let _localctx: OperatorIDContext = new OperatorIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, VtlParser.RULE_operatorID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1322;
			this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public routineName(): RoutineNameContext {
		let _localctx: RoutineNameContext = new RoutineNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, VtlParser.RULE_routineName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1324;
			this.match(VtlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, VtlParser.RULE_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1326;
			_la = this._input.LA(1);
			if (!(_la === VtlParser.NULL_CONSTANT || ((((_la - 230)) & ~0x1F) === 0 && ((1 << (_la - 230)) & ((1 << (VtlParser.INTEGER_CONSTANT - 230)) | (1 << (VtlParser.NUMBER_CONSTANT - 230)) | (1 << (VtlParser.BOOLEAN_CONSTANT - 230)) | (1 << (VtlParser.STRING_CONSTANT - 230)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicScalarType(): BasicScalarTypeContext {
		let _localctx: BasicScalarTypeContext = new BasicScalarTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, VtlParser.RULE_basicScalarType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1328;
			_la = this._input.LA(1);
			if (!(((((_la - 157)) & ~0x1F) === 0 && ((1 << (_la - 157)) & ((1 << (VtlParser.BOOLEAN - 157)) | (1 << (VtlParser.DATE - 157)) | (1 << (VtlParser.TIME_PERIOD - 157)) | (1 << (VtlParser.NUMBER - 157)) | (1 << (VtlParser.STRING - 157)) | (1 << (VtlParser.TIME - 157)) | (1 << (VtlParser.INTEGER - 157)))) !== 0) || _la === VtlParser.DURATION || _la === VtlParser.SCALAR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public retainType(): RetainTypeContext {
		let _localctx: RetainTypeContext = new RetainTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, VtlParser.RULE_retainType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1330;
			_la = this._input.LA(1);
			if (!(_la === VtlParser.ALL || _la === VtlParser.BOOLEAN_CONSTANT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);

		case 1:
			return this.precpred(this._ctx, 8);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 5);

		case 4:
			return this.precpred(this._ctx, 4);

		case 5:
			return this.precpred(this._ctx, 12);

		case 6:
			return this.precpred(this._ctx, 11);

		case 7:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xF0\u0537\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x03\x02\x03\x02\x03\x02\x07\x02\xC8\n\x02\f\x02\x0E" +
		"\x02\xCB\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xD8\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xEB\n\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x05\x04\u0109\n\x04\x07\x04\u010B\n\x04\f\x04\x0E\x04\u010E\v\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05\u011D\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0127\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x07\x07\u012D\n\x07\f\x07\x0E\x07\u0130\v\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x05\b\u0136\n\b\x05\b\u0138\n\b\x03\t\x03\t\x03\t" +
		"\x03\n\x03\n\x03\n\x03\n\x07\n\u0141\n\n\f\n\x0E\n\u0144\v\n\x03\v\x03" +
		"\v\x03\v\x03\v\x07\v\u014A\n\v\f\v\x0E\v\u014D\v\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u015C\n" +
		"\r\f\r\x0E\r\u015F\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0165\n" +
		"\x0E\f\x0E\x0E\x0E\u0168\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0176" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10" +
		"\u017F\n\x10\f\x10\x0E\x10\u0182\v\x10\x05\x10\u0184\n\x10\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\u0189\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\u01AA\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u01B1\n\x11" +
		"\f\x11\x0E\x11\u01B4\v\x11\x05\x11\u01B6\n\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01C0\n\x11\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\u01C5\n\x11\x07\x11\u01C7\n\x11\f\x11\x0E\x11\u01CA" +
		"\v\x11\x03\x11\x03\x11\x03\x11\x05\x11\u01CF\n\x11\x03\x11\x03\x11\x05" +
		"\x11\u01D3\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x05\x11\u01DD\n\x11\x03\x11\x03\x11\x05\x11\u01E1\n\x11\x03\x11" +
		"\x03\x11\x05\x11\u01E5\n\x11\x03\x12\x03\x12\x03\x12\x05\x12\u01EA\n\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01FA\n\x13\x03\x13\x03" +
		"\x13\x05\x13\u01FE\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\u0209\n\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0214\n\x13\x03\x13" +
		"\x03\x13\x05\x13\u0218\n\x13\x03\x13\x03\x13\x05\x13\u021C\n\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x05\x14\u0228\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x05\x14\u0233\n\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0251\n\x15\x03" +
		"\x15\x03\x15\x05\x15\u0255\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u025A" +
		"\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0262\n" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x05\x16\u0277\n\x16\x03\x16\x03\x16\x05\x16\u027B\n\x16\x03" +
		"\x16\x03\x16\x05\x16\u027F\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16" +
		"\u0285\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x06\x17\u028C\n\x17" +
		"\r\x17\x0E\x17\u028D\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x06\x17\u0297\n\x17\r\x17\x0E\x17\u0298\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u02A4\n\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u02AC\n\x18\x03\x18\x03" +
		"\x18\x05\x18\u02B0\n\x18\x03\x18\x05\x18\u02B3\n\x18\x03\x18\x05\x18\u02B6" +
		"\n\x18\x03\x18\x05\x18\u02B9\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u02C6\n\x19" +
		"\f\x19\x0E\x19\u02C9\v\x19\x05\x19\u02CB\n\x19\x03\x19\x05\x19\u02CE\n" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05" +
		"\x19\u02D8\n\x19\x03\x19\x03\x19\x05\x19\u02DC\n\x19\x03\x19\x05\x19\u02DF" +
		"\n\x19\x03\x19\x05\x19\u02E2\n\x19\x03\x19\x05\x19\u02E5\n\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u02ED\n\x19\x03\x19\x05" +
		"\x19\u02F0\n\x19\x03\x19\x05\x19\u02F3\n\x19\x03\x19\x05\x19\u02F6\n\x19" +
		"\x03\x19\x03\x19\x05\x19\u02FA\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0308" +
		"\n\x1B\x05\x1B\u030A\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x05\x1C\u0314\n\x1C\x03\x1C\x05\x1C\u0317\n\x1C\x03" +
		"\x1C\x05\x1C\u031A\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0325\n\x1C\x05\x1C\u0327\n\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\u032C\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x05\x1C\u033C\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F" +
		"\u034C\n\x1F\f\x1F\x0E\x1F\u034F\v\x1F\x03 \x05 \u0352\n \x03 \x03 \x03" +
		" \x03 \x03!\x05!\u0359\n!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"" +
		"\x03#\x03#\x03#\x07#\u0366\n#\f#\x0E#\u0369\v#\x03$\x03$\x03$\x07$\u036E" +
		"\n$\f$\x0E$\u0371\v$\x03$\x03$\x03$\x03$\x07$\u0377\n$\f$\x0E$\u037A\v" +
		"$\x05$\u037C\n$\x03%\x03%\x03%\x05%\u0381\n%\x03&\x05&\u0384\n&\x03&\x03" +
		"&\x03&\x05&\u0389\n&\x03&\x05&\u038C\n&\x03&\x05&\u038F\n&\x03\'\x03\'" +
		"\x03\'\x03(\x03(\x03(\x03(\x03(\x07(\u0399\n(\f(\x0E(\u039C\v(\x03)\x03" +
		")\x03)\x03)\x03)\x07)\u03A3\n)\f)\x0E)\u03A6\v)\x03*\x03*\x05*\u03AA\n" +
		"*\x03+\x03+\x03+\x05+\u03AF\n+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u03C3\n-\x03" +
		".\x03.\x03.\x03.\x03.\x07.\u03CA\n.\f.\x0E.\u03CD\v.\x03.\x03.\x03.\x05" +
		".\u03D2\n.\x03/\x03/\x03/\x030\x030\x030\x030\x050\u03DB\n0\x031\x031" +
		"\x031\x051\u03E0\n1\x032\x032\x052\u03E4\n2\x033\x033\x033\x033\x033\x05" +
		"3\u03EB\n3\x034\x034\x034\x054\u03F0\n4\x035\x035\x055\u03F4\n5\x035\x05" +
		"5\u03F7\n5\x035\x055\u03FA\n5\x035\x055\u03FD\n5\x036\x036\x036\x036\x03" +
		"6\x056\u0404\n6\x037\x037\x037\x037\x037\x077\u040B\n7\f7\x0E7\u040E\v" +
		"7\x037\x037\x057\u0412\n7\x038\x038\x038\x038\x038\x058\u0419\n8\x039" +
		"\x039\x039\x039\x039\x039\x079\u0421\n9\f9\x0E9\u0424\v9\x039\x039\x05" +
		"9\u0428\n9\x039\x039\x039\x039\x039\x079\u042F\n9\f9\x0E9\u0432\v9\x03" +
		"9\x039\x059\u0436\n9\x059\u0438\n9\x03:\x03:\x03:\x03:\x03:\x03:\x03:" +
		"\x03:\x07:\u0442\n:\f:\x0E:\u0445\v:\x03:\x03:\x05:\u0449\n:\x03:\x05" +
		":\u044C\n:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u0455\n:\f:\x0E:\u0458" +
		"\v:\x03:\x03:\x05:\u045C\n:\x03:\x03:\x05:\u0460\n:\x05:\u0462\n:\x03" +
		";\x03;\x03<\x03<\x03=\x03=\x03=\x03=\x07=\u046C\n=\f=\x0E=\u046F\v=\x03" +
		">\x03>\x03>\x05>\u0474\n>\x03?\x03?\x03?\x07?\u0479\n?\f?\x0E?\u047C\v" +
		"?\x03@\x03@\x05@\u0480\n@\x03@\x03@\x03@\x03@\x05@\u0486\n@\x03@\x03@" +
		"\x05@\u048A\n@\x03@\x05@\u048D\n@\x03A\x03A\x03A\x07A\u0492\nA\fA\x0E" +
		"A\u0495\vA\x03B\x03B\x05B\u0499\nB\x03B\x03B\x05B\u049D\nB\x03B\x05B\u04A0" +
		"\nB\x03C\x03C\x03C\x05C\u04A5\nC\x03C\x03C\x03C\x03D\x03D\x03D\x07D\u04AD" +
		"\nD\fD\x0ED\u04B0\vD\x03E\x03E\x03E\x03E\x05E\u04B6\nE\x03E\x03E\x05E" +
		"\u04BA\nE\x03E\x03E\x07E\u04BE\nE\fE\x0EE\u04C1\vE\x03F\x05F\u04C4\nF" +
		"\x03F\x03F\x03F\x03F\x03F\x05F\u04CB\nF\x03G\x03G\x03H\x03H\x03H\x03H" +
		"\x03H\x03H\x03H\x03H\x07H\u04D7\nH\fH\x0EH\u04DA\vH\x03H\x03H\x05H\u04DE" +
		"\nH\x03I\x03I\x03I\x05I\u04E3\nI\x03J\x03J\x05J\u04E7\nJ\x03K\x03K\x03" +
		"L\x03L\x03M\x03M\x03M\x03M\x07M\u04F1\nM\fM\x0EM\u04F4\vM\x03N\x03N\x03" +
		"O\x03O\x03O\x03P\x03P\x03Q\x03Q\x03R\x03R\x03S\x03S\x03T\x03T\x03U\x03" +
		"U\x03U\x05U\u0508\nU\x03V\x03V\x03V\x03V\x07V\u050E\nV\fV\x0EV\u0511\v" +
		"V\x03V\x03V\x03W\x03W\x03W\x03X\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x05Z\u051F" +
		"\nZ\x03[\x03[\x03[\x03[\x03[\x05[\u0526\n[\x03\\\x03\\\x03\\\x03]\x03" +
		"]\x03^\x03^\x03_\x03_\x03`\x03`\x03a\x03a\x03b\x03b\x03b\x02\x02\x03\x06" +
		"c\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
		"\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02" +
		"\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02" +
		"\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\x02\'" +
		"\x04\x02\x0F\x10))\x03\x02\x11\x12\x04\x02\x0F\x10TT\x03\x02\'(\x03\x02" +
		"+,\x03\x02 !\x04\x02\xC1\xC1\xC3\xC3\x03\x02\xB8\xB9\x03\x02\xBA\xBB\x05" +
		"\x02SSUWz{\x06\x02KKMMbb~\x80\x03\x02OP\x04\x02NNQR\x04\x02>>\xC8\xC8" +
		"\x03\x02\x99\x9A\x04\x02ii\xEB\xEB\x03\x02HI\x04\x0222\x82\x82\x04\x02" +
		">>jj\x05\x02FGY\\\x83\x86\x06\x02FGY\\\x83\x86\x8A\x8B\x03\x02\x8C\x8D" +
		"\x03\x02DE\x04\x02BB\x88\x88\x03\x02lm\x03\x02\x0F\x10\x04\x02\xE8\xE9" +
		"\xEC\xEC\x04\x02\x0F\x0F\x11\x11\x05\x02>>jj\xDF\xDF\x03\x02\xD8\xDD\x04" +
		"\x02pp\xD3\xD3\x05\x02ppww\xD2\xD2\x04\x02>>\xD7\xD7\x03\x02\t\x0E\x04" +
		"\x02--\xE8\xEB\x05\x02\x9F\xA5\xC9\xC9\xE0\xE0\x04\x02>>\xEA\xEA\x02\u05A4" +
		"\x02\xC9\x03\x02\x02\x02\x04\xD7\x03\x02\x02\x02\x06\xEA\x03\x02\x02\x02" +
		"\b\u011C\x03\x02\x02\x02\n\u0126\x03\x02\x02\x02\f\u0128\x03\x02\x02\x02" +
		"\x0E\u0131\x03\x02\x02\x02\x10\u0139\x03\x02\x02\x02\x12\u013C\x03\x02" +
		"\x02\x02\x14\u0145\x03\x02\x02\x02\x16\u014E\x03\x02\x02\x02\x18\u0153" +
		"\x03\x02\x02\x02\x1A\u0160\x03\x02\x02\x02\x1C\u0175\x03\x02\x02\x02\x1E" +
		"\u01A9\x03\x02\x02\x02 \u01E4\x03\x02\x02\x02\"\u01E9\x03\x02\x02\x02" +
		"$\u021B\x03\x02\x02\x02&\u0232\x03\x02\x02\x02(\u0254\x03\x02\x02\x02" +
		"*\u0284\x03\x02\x02\x02,\u02A3\x03\x02\x02\x02.\u02A5\x03\x02\x02\x02" +
		"0\u02F9\x03\x02\x02\x022\u02FB\x03\x02\x02\x024\u0302\x03\x02\x02\x02" +
		"6\u033B\x03\x02\x02\x028\u033D\x03\x02\x02\x02:\u0344\x03\x02\x02\x02" +
		"<\u0348\x03\x02\x02\x02>\u0351\x03\x02\x02\x02@\u0358\x03\x02\x02\x02" +
		"B\u035E\x03\x02\x02\x02D\u0362\x03\x02\x02\x02F\u036A\x03\x02\x02\x02" +
		"H\u037D\x03\x02\x02\x02J\u0383\x03\x02\x02\x02L\u0390\x03\x02\x02\x02" +
		"N\u0393\x03\x02\x02\x02P\u039D\x03\x02\x02\x02R\u03A7\x03\x02\x02\x02" +
		"T\u03AE\x03\x02\x02\x02V\u03B5\x03\x02\x02\x02X\u03C2\x03\x02\x02\x02" +
		"Z\u03D1\x03\x02\x02\x02\\\u03D3\x03\x02\x02\x02^\u03D6\x03\x02\x02\x02" +
		"`\u03DF\x03\x02\x02\x02b\u03E3\x03\x02\x02\x02d\u03EA\x03\x02\x02\x02" +
		"f\u03EF\x03\x02\x02\x02h\u03F3\x03\x02\x02\x02j\u03FE\x03\x02\x02\x02" +
		"l\u0405\x03\x02\x02\x02n\u0413\x03\x02\x02\x02p\u0437\x03\x02\x02\x02" +
		"r\u0461\x03\x02\x02\x02t\u0463\x03\x02\x02\x02v\u0465\x03\x02\x02\x02" +
		"x\u0467\x03\x02\x02\x02z\u0470\x03\x02\x02\x02|\u0475\x03\x02\x02\x02" +
		"~\u047F\x03\x02\x02\x02\x80\u048E\x03\x02\x02\x02\x82\u0498\x03\x02\x02" +
		"\x02\x84\u04A1\x03\x02\x02\x02\x86\u04A9\x03\x02\x02\x02\x88\u04B5\x03" +
		"\x02\x02\x02\x8A\u04C3\x03\x02\x02\x02\x8C\u04CC\x03\x02\x02\x02\x8E\u04DD" +
		"\x03\x02\x02\x02\x90\u04DF\x03\x02\x02\x02\x92\u04E4\x03\x02\x02\x02\x94" +
		"\u04E8\x03\x02\x02\x02\x96\u04EA\x03\x02\x02\x02\x98\u04EC\x03\x02\x02" +
		"\x02\x9A\u04F5\x03\x02\x02\x02\x9C\u04F7\x03\x02\x02\x02\x9E\u04FA\x03" +
		"\x02\x02\x02\xA0\u04FC\x03\x02\x02\x02\xA2\u04FE\x03\x02\x02\x02\xA4\u0500" +
		"\x03\x02\x02\x02\xA6\u0502\x03\x02\x02\x02\xA8\u0504\x03\x02\x02\x02\xAA" +
		"\u0509\x03\x02\x02\x02\xAC\u0514\x03\x02\x02\x02\xAE\u0517\x03\x02\x02" +
		"\x02\xB0\u051A\x03\x02\x02\x02\xB2\u051E\x03\x02\x02\x02\xB4\u0525\x03" +
		"\x02\x02\x02\xB6\u0527\x03\x02\x02\x02\xB8\u052A\x03\x02\x02\x02\xBA\u052C" +
		"\x03\x02\x02\x02\xBC\u052E\x03\x02\x02\x02\xBE\u0530\x03\x02\x02\x02\xC0" +
		"\u0532\x03\x02\x02\x02\xC2\u0534\x03\x02\x02\x02\xC4\xC5\x05\x04\x03\x02" +
		"\xC5\xC6\x07\xEE\x02\x02\xC6\xC8\x03\x02\x02\x02\xC7\xC4\x03\x02\x02\x02" +
		"\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02" +
		"\xCA\xCC\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCC\xCD\x07\x02\x02\x03" +
		"\xCD\x03\x03\x02\x02\x02\xCE\xCF\x05\xA4S\x02\xCF\xD0\x07\x16\x02\x02" +
		"\xD0\xD1\x05\x06\x04\x02\xD1\xD8\x03\x02\x02\x02\xD2\xD3\x05\xA4S\x02" +
		"\xD3\xD4\x07s\x02\x02\xD4\xD5\x05\x06\x04\x02\xD5\xD8\x03\x02\x02\x02" +
		"\xD6\xD8\x05\x1E\x10\x02\xD7\xCE\x03\x02\x02\x02\xD7\xD2\x03\x02\x02\x02" +
		"\xD7\xD6\x03\x02\x02\x02\xD8\x05\x03\x02\x02\x02\xD9\xDA\b\x04\x01\x02" +
		"\xDA\xDB\x07\x03\x02\x02\xDB\xDC\x05\x06\x04\x02\xDC\xDD\x07\x04\x02\x02" +
		"\xDD\xEB\x03\x02\x02\x02\xDE\xEB\x05\b\x05\x02\xDF\xE0\t\x02\x02\x02\xE0" +
		"\xEB\x05\x06\x04\f\xE1\xE2\x07\x19\x02\x02\xE2\xE3\x05\x06\x04\x02\xE3" +
		"\xE4\x07\x1A\x02\x02\xE4\xE5\x05\x06\x04\x02\xE5\xE6\x07\x1B\x02\x02\xE6" +
		"\xE7\x05\x06\x04\x05\xE7\xEB\x03\x02\x02\x02\xE8\xEB\x05\xBE`\x02\xE9" +
		"\xEB\x05\xA4S\x02\xEA\xD9\x03\x02\x02\x02\xEA\xDE\x03\x02\x02\x02\xEA" +
		"\xDF\x03\x02\x02\x02\xEA\xE1\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA" +
		"\xE9\x03\x02\x02\x02\xEB\u010C\x03\x02\x02\x02\xEC\xED\f\v\x02\x02\xED" +
		"\xEE\t\x03\x02\x02\xEE\u010B\x05\x06\x04\f\xEF\xF0\f\n\x02\x02\xF0\xF1" +
		"\t\x04\x02\x02\xF1\u010B\x05\x06\x04\v\xF2\xF3\f\t\x02\x02\xF3\xF4\x05" +
		"\xB0Y\x02\xF4\xF5\x05\x06\x04\n\xF5\u010B\x03\x02\x02\x02\xF6\xF7\f\x07" +
		"\x02\x02\xF7\xF8\x07&\x02\x02\xF8\u010B\x05\x06\x04\b\xF9\xFA\f\x06\x02" +
		"\x02\xFA\xFB\t\x05\x02\x02\xFB\u010B\x05\x06\x04\x07\xFC\xFD\f\x0E\x02" +
		"\x02\xFD\xFE\x07\x05\x02\x02\xFE\xFF\x05\n\x06\x02\xFF\u0100\x07\x06\x02" +
		"\x02\u0100\u010B\x03\x02\x02\x02\u0101\u0102\f\r\x02\x02\u0102\u0103\x07" +
		"\x17\x02\x02\u0103\u010B\x05\xA6T\x02\u0104\u0105\f\b\x02\x02\u0105\u0108" +
		"\t\x06\x02\x02\u0106\u0109\x05\xAAV\x02\u0107\u0109\x05\xB8]\x02\u0108" +
		"\u0106\x03\x02\x02\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010B\x03\x02" +
		"\x02\x02\u010A\xEC\x03\x02\x02\x02\u010A\xEF\x03\x02\x02\x02\u010A\xF2" +
		"\x03\x02\x02\x02\u010A\xF6\x03\x02\x02\x02\u010A\xF9\x03\x02\x02\x02\u010A" +
		"\xFC\x03\x02\x02\x02\u010A\u0101\x03\x02\x02\x02\u010A\u0104\x03\x02\x02" +
		"\x02\u010B\u010E\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010D" +
		"\x03\x02\x02\x02\u010D\x07\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02" +
		"\u010F\u011D\x05\x1C\x0F\x02\u0110\u011D\x05 \x11\x02\u0111\u011D\x05" +
		"$\x13\x02\u0112\u011D\x05&\x14\x02\u0113\u011D\x05(\x15\x02\u0114\u011D" +
		"\x05*\x16\x02\u0115\u011D\x05,\x17\x02\u0116\u011D\x05.\x18\x02\u0117" +
		"\u011D\x050\x19\x02\u0118\u011D\x052\x1A\x02\u0119\u011D\x054\x1B\x02" +
		"\u011A\u011D\x056\x1C\x02\u011B\u011D\x058\x1D\x02\u011C\u010F\x03\x02" +
		"\x02\x02\u011C\u0110\x03\x02\x02\x02\u011C\u0111\x03\x02\x02\x02\u011C" +
		"\u0112\x03\x02\x02\x02\u011C\u0113\x03\x02\x02\x02\u011C\u0114\x03\x02" +
		"\x02\x02\u011C\u0115\x03\x02\x02\x02\u011C\u0116\x03\x02\x02\x02\u011C" +
		"\u0117\x03\x02\x02\x02\u011C\u0118\x03\x02\x02\x02\u011C\u0119\x03\x02" +
		"\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011B\x03\x02\x02\x02\u011D" +
		"\t\x03\x02\x02\x02\u011E\u0127\x05\f\x07\x02\u011F\u0127\x05\x0E\b\x02" +
		"\u0120\u0127\x05\x10\t\x02\u0121\u0127\x05\x12\n\x02\u0122\u0127\x05\x14" +
		"\v\x02\u0123\u0127\x05\x16\f\x02\u0124\u0127\x05\x18\r\x02\u0125\u0127" +
		"\x05\x1A\x0E\x02\u0126\u011E\x03\x02\x02\x02\u0126\u011F\x03\x02\x02\x02" +
		"\u0126\u0120\x03\x02\x02\x02\u0126\u0121\x03\x02\x02\x02\u0126\u0122\x03" +
		"\x02\x02\x02\u0126\u0123\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0126" +
		"\u0125\x03\x02\x02\x02\u0127\v\x03\x02\x02\x02\u0128\u0129\x07$\x02\x02" +
		"\u0129\u012E\x05:\x1E\x02\u012A\u012B\x07\x13\x02\x02\u012B\u012D\x05" +
		":\x1E\x02\u012C\u012A\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E" +
		"\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\r\x03\x02\x02" +
		"\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0132\x07?\x02\x02\u0132\u0137" +
		"\x05<\x1F\x02\u0133\u0135\x05Z.\x02\u0134\u0136\x05\\/\x02\u0135\u0134" +
		"\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0138\x03\x02\x02\x02" +
		"\u0137\u0133\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\x0F\x03" +
		"\x02\x02\x02\u0139\u013A\x07`\x02\x02\u013A\u013B\x05\x06\x04\x02\u013B" +
		"\x11\x03\x02\x02\x02\u013C\u013D\x07\"\x02\x02\u013D\u0142\x05@!\x02\u013E" +
		"\u013F\x07\x13\x02\x02\u013F\u0141\x05@!\x02\u0140\u013E\x03\x02\x02\x02" +
		"\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0143\x03" +
		"\x02\x02\x02\u0143\x13\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0145" +
		"\u0146\t\x07\x02\x02\u0146\u014B\x05\xA8U\x02\u0147\u0148\x07\x13\x02" +
		"\x02\u0148\u014A\x05\xA8U\x02\u0149\u0147\x03\x02\x02\x02\u014A\u014D" +
		"\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02" +
		"\u014C\x15\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014E\u014F\t\b" +
		"\x02\x02\u014F\u0150\x05\xA8U\x02\u0150\u0151\x07\x13\x02\x02\u0151\u0152" +
		"\x05\xA8U\x02\u0152\x17\x03\x02\x02\x02\u0153\u0154\x07\xC2\x02\x02\u0154" +
		"\u0155\x05\xA8U\x02\u0155\u0156\x07\x13\x02\x02\u0156\u0157\x05\xA8U\x02" +
		"\u0157\u0158\x07+\x02\x02\u0158\u015D\x05\xBE`\x02\u0159\u015A\x07\x13" +
		"\x02\x02\u015A";
	private static readonly _serializedATNSegment1: string =
		"\u015C\x05\xBE`\x02\u015B\u0159\x03\x02\x02\x02\u015C\u015F\x03\x02\x02" +
		"\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\x19" +
		"\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160\u0161\x07\xC4\x02\x02" +
		"\u0161\u0166\x05B\"\x02\u0162\u0163\x07\x13\x02\x02\u0163\u0165\x05B\"" +
		"\x02\u0164\u0162\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164" +
		"\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\x1B\x03\x02\x02\x02" +
		"\u0168\u0166\x03\x02\x02\x02\u0169\u016A\t\t\x02\x02\u016A\u016B\x07\x03" +
		"\x02\x02\u016B\u016C\x05F$\x02\u016C\u016D\x05J&\x02\u016D\u016E\x07\x04" +
		"\x02\x02\u016E\u0176\x03\x02\x02\x02\u016F\u0170\t\n\x02\x02\u0170\u0171" +
		"\x07\x03\x02\x02\u0171\u0172\x05D#\x02\u0172\u0173\x05J&\x02\u0173\u0174" +
		"\x07\x04\x02\x02\u0174\u0176\x03\x02\x02\x02\u0175\u0169\x03\x02\x02\x02" +
		"\u0175\u016F\x03\x02\x02\x02\u0176\x1D\x03\x02\x02\x02\u0177\u0178\x07" +
		"r\x02\x02\u0178\u0179\x07q\x02\x02\u0179\u017A\x05\xBA^\x02\u017A\u0183" +
		"\x07\x03\x02\x02\u017B\u0180\x05^0\x02\u017C\u017D\x07\x13\x02\x02\u017D" +
		"\u017F\x05^0\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0182\x03\x02\x02\x02" +
		"\u0180\u017E\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0184\x03" +
		"\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0183\u017B\x03\x02\x02\x02\u0183" +
		"\u0184\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0188\x07\x04" +
		"\x02\x02\u0186\u0187\x07\xC0\x02\x02\u0187\u0189\x05`1\x02\u0188\u0186" +
		"\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02" +
		"\u018A\u018B\x07\xAF\x02\x02\u018B\u018C\x05\x06\x04\x02\u018C\u018D\x07" +
		"x\x02\x02\u018D\u018E\x07q\x02\x02\u018E\u01AA\x03\x02\x02\x02\u018F\u0190" +
		"\x07r\x02\x02\u0190\u0191\x07t\x02\x02\u0191\u0192\x07v\x02\x02\u0192" +
		"\u0193\x05v<\x02\u0193\u0194\x07\x03\x02\x02\u0194\u0195\x05x=\x02\u0195" +
		"\u0196\x07\x04\x02\x02\u0196\u0197\x07\xAF\x02\x02\u0197\u0198\x05|?\x02" +
		"\u0198\u0199\x07x\x02\x02\u0199\u019A\x07t\x02\x02\u019A\u019B\x07v\x02" +
		"\x02\u019B\u01AA\x03\x02\x02\x02\u019C\u019D\x07r\x02\x02\u019D\u019E" +
		"\x07u\x02\x02\u019E\u019F\x07v\x02\x02\u019F\u01A0\x05v<\x02\u01A0\u01A1" +
		"\x07\x03\x02\x02\u01A1\u01A2\x05\x84C\x02\u01A2\u01A3\x07\x04\x02\x02" +
		"\u01A3\u01A4\x07\xAF\x02\x02\u01A4\u01A5\x05\x80A\x02\u01A5\u01A6\x07" +
		"x\x02\x02\u01A6\u01A7\x07u\x02\x02\u01A7\u01A8\x07v\x02\x02\u01A8\u01AA" +
		"\x03\x02\x02\x02\u01A9\u0177\x03\x02\x02\x02\u01A9\u018F\x03\x02\x02\x02" +
		"\u01A9\u019C\x03\x02\x02\x02\u01AA\x1F\x03\x02\x02\x02\u01AB\u01AC\x05" +
		"\xBA^\x02\u01AC\u01B5\x07\x03\x02\x02\u01AD\u01B2\x05\"\x12\x02\u01AE" +
		"\u01AF\x07\x13\x02\x02\u01AF\u01B1\x05\"\x12\x02\u01B0\u01AE\x03\x02\x02" +
		"\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B3" +
		"\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02" +
		"\u01B5\u01AD\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03" +
		"\x02\x02\x02\u01B7\u01B8\x07\x04\x02\x02\u01B8\u01E5\x03\x02\x02\x02\u01B9" +
		"\u01BA\x07\x18\x02\x02\u01BA\u01BB\x07\x03\x02\x02\u01BB\u01BC\x05\xBC" +
		"_\x02\u01BC\u01BF\x07\x03\x02\x02\u01BD\u01C0\x05\xA4S\x02\u01BE\u01C0" +
		"\x05\xBE`\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01BE\x03\x02\x02\x02" +
		"\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C8\x03\x02\x02\x02\u01C1\u01C4\x07" +
		"\x13\x02\x02\u01C2\u01C5\x05\xA4S\x02\u01C3\u01C5\x05\xBE`\x02\u01C4\u01C2" +
		"\x03\x02\x02\x02\u01C4\u01C3\x03\x02\x02\x02\u01C5\u01C7\x03\x02\x02\x02" +
		"\u01C6\u01C1\x03\x02\x02\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01C6\x03" +
		"\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CB\x03\x02\x02\x02\u01CA" +
		"\u01C8\x03\x02\x02\x02\u01CB\u01CE\x07\x04\x02\x02\u01CC\u01CD\x07\xE7" +
		"\x02\x02\u01CD\u01CF\x07\xEB\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE" +
		"\u01CF\x03\x02\x02\x02\u01CF\u01D2\x03\x02\x02\x02\u01D0\u01D1\x07\xC0" +
		"\x02\x02\u01D1\u01D3\x05l7\x02\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D3" +
		"\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x07\x04\x02\x02" +
		"\u01D5\u01E5\x03\x02\x02\x02\u01D6\u01D7\x07\xD1\x02\x02\u01D7\u01D8\x07" +
		"\x03\x02\x02\u01D8\u01D9\x05\x06\x04\x02\u01D9\u01DC\x07\x13\x02\x02\u01DA" +
		"\u01DD\x05\xC0a\x02\u01DB\u01DD\x05t;\x02\u01DC\u01DA\x03\x02\x02\x02" +
		"\u01DC\u01DB\x03\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01DF\x07" +
		"\x13\x02\x02\u01DF\u01E1\x07\xEB\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E0" +
		"\u01E1\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x07\x04" +
		"\x02\x02\u01E3\u01E5\x03\x02\x02\x02\u01E4\u01AB\x03\x02\x02\x02\u01E4" +
		"\u01B9\x03\x02\x02\x02\u01E4\u01D6\x03\x02\x02\x02\u01E5!\x03\x02\x02" +
		"\x02\u01E6\u01EA\x05\xA4S\x02\u01E7\u01EA\x05\xBE`\x02\u01E8\u01EA\x07" +
		"i\x02\x02\u01E9\u01E6\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9" +
		"\u01E8\x03\x02\x02\x02\u01EA#\x03\x02\x02\x02\u01EB\u01EC\t\v\x02\x02" +
		"\u01EC\u01ED\x07\x03\x02\x02\u01ED\u01EE\x05\x06\x04\x02\u01EE\u01EF\x07" +
		"\x04\x02\x02\u01EF\u021C\x03\x02\x02\x02\u01F0\u01F1\x07X\x02\x02\u01F1" +
		"\u01F2\x07\x03\x02\x02\u01F2\u01FD\x05\x06\x04\x02\u01F3\u01F4\x07\x13" +
		"\x02\x02\u01F4\u01F5\x05\xB2Z\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F7" +
		"\x07\x13\x02\x02\u01F7\u01F8\x05\xB2Z\x02\u01F8\u01FA\x03\x02\x02\x02" +
		"\u01F9\u01F3\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FE\x03" +
		"\x02\x02\x02\u01FB\u01FC\x07\x13\x02\x02\u01FC\u01FE\x05\xB2Z\x02\u01FD" +
		"\u01F9\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FE\u01FF\x03\x02" +
		"\x02\x02\u01FF\u0200\x07\x04\x02\x02\u0200\u021C\x03\x02\x02\x02\u0201" +
		"\u0202\x07}\x02\x02\u0202\u0203\x07\x03\x02\x02\u0203\u0204\x05\x06\x04" +
		"\x02\u0204\u0205\x07\x13\x02\x02\u0205\u0208\x05\x06\x04\x02\u0206\u0207" +
		"\x07\x13\x02\x02\u0207\u0209\x05\xB2Z\x02\u0208\u0206\x03\x02\x02\x02" +
		"\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020B\x07" +
		"\x04\x02\x02\u020B\u021C\x03\x02\x02\x02\u020C\u020D\x07|\x02\x02\u020D" +
		"\u020E\x07\x03\x02\x02\u020E\u020F\x05\x06\x04\x02\u020F\u0210\x07\x13" +
		"\x02\x02\u0210\u0213\x05\x06\x04\x02\u0211\u0212\x07\x13\x02\x02\u0212" +
		"\u0214\x05\xB2Z\x02\u0213\u0211\x03\x02\x02\x02\u0213\u0214\x03\x02\x02" +
		"\x02\u0214\u0217\x03\x02\x02\x02\u0215\u0216\x07\x13\x02\x02\u0216\u0218" +
		"\x05\xB2Z\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02" +
		"\u0218\u0219\x03\x02\x02\x02\u0219\u021A\x07\x04\x02\x02\u021A\u021C\x03" +
		"\x02\x02\x02\u021B\u01EB\x03\x02\x02\x02\u021B\u01F0\x03\x02\x02\x02\u021B" +
		"\u0201\x03\x02\x02\x02\u021B\u020C\x03\x02\x02\x02\u021C%\x03\x02\x02" +
		"\x02\u021D\u021E\t\f\x02\x02\u021E\u021F\x07\x03\x02\x02\u021F\u0220\x05" +
		"\x06\x04\x02\u0220\u0221\x07\x04\x02\x02\u0221\u0233\x03\x02\x02\x02\u0222" +
		"\u0223\t\r\x02\x02\u0223\u0224\x07\x03\x02\x02\u0224\u0227\x05\x06\x04" +
		"\x02\u0225\u0226\x07\x13\x02\x02\u0226\u0228\x05\xB2Z\x02\u0227\u0225" +
		"\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02" +
		"\u0229\u022A\x07\x04\x02\x02\u022A\u0233\x03\x02\x02\x02\u022B\u022C\t" +
		"\x0E\x02\x02\u022C\u022D\x07\x03\x02\x02\u022D\u022E\x05\x06\x04\x02\u022E" +
		"\u022F\x07\x13\x02\x02\u022F\u0230\x05\x06\x04\x02\u0230\u0231\x07\x04" +
		"\x02\x02\u0231\u0233\x03\x02\x02\x02\u0232\u021D\x03\x02\x02\x02\u0232" +
		"\u0222\x03\x02\x02\x02\u0232\u022B\x03\x02\x02\x02\u0233\'\x03\x02\x02" +
		"\x02\u0234\u0235\x07*\x02\x02\u0235\u0236\x07\x03\x02\x02\u0236\u0237" +
		"\x05\x06\x04\x02\u0237\u0238\x07\x13\x02\x02\u0238\u0239\x05\x06\x04\x02" +
		"\u0239\u023A\x07\x13\x02\x02\u023A\u023B\x05\x06\x04\x02\u023B\u023C\x07" +
		"\x04\x02\x02\u023C\u0255\x03\x02\x02\x02\u023D\u023E\x07e\x02\x02\u023E" +
		"\u023F\x07\x03\x02\x02\u023F\u0240\x05\x06\x04\x02\u0240\u0241\x07\x13" +
		"\x02\x02\u0241\u0242\x05\x06\x04\x02\u0242\u0243\x07\x04\x02\x02\u0243" +
		"\u0255\x03\x02\x02\x02\u0244\u0245\x07.\x02\x02\u0245\u0246\x07\x03\x02" +
		"\x02\u0246\u0247\x05\x06\x04\x02\u0247\u0248\x07\x04\x02\x02\u0248\u0255" +
		"\x03\x02\x02\x02\u0249\u024A\x079\x02\x02\u024A\u024B\x07\x03\x02\x02" +
		"\u024B\u024C\x05\x06\x04\x02\u024C\u024D\x07\x13\x02\x02\u024D\u0250\x05" +
		"\x06\x04\x02\u024E\u024F\x07\x13\x02\x02\u024F\u0251\x05\xC2b\x02\u0250" +
		"\u024E\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\u0252\x03\x02" +
		"\x02\x02\u0252\u0253\x07\x04\x02\x02\u0253\u0255\x03\x02\x02\x02\u0254" +
		"\u0234\x03\x02\x02\x02\u0254\u023D\x03\x02\x02\x02\u0254\u0244\x03\x02" +
		"\x02\x02\u0254\u0249\x03\x02\x02\x02\u0255)\x03\x02\x02\x02\u0256\u0257" +
		"\x07\xC7\x02\x02\u0257\u0259\x07\x03\x02\x02\u0258\u025A\x05\x06\x04\x02" +
		"\u0259\u0258\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u025B\x03" +
		"\x02\x02\x02\u025B\u0285\x07\x04\x02\x02\u025C\u025D\x07\x98\x02\x02\u025D" +
		"\u025E\x07\x03\x02\x02\u025E\u0261\x05\x06\x04\x02\u025F\u0260\x07\x13" +
		"\x02\x02\u0260\u0262\t\x0F\x02\x02\u0261\u025F\x03\x02\x02\x02\u0261\u0262" +
		"\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0264\x07\x04\x02\x02" +
		"\u0264\u0285\x03\x02\x02\x02\u0265\u0266\t\x10\x02\x02\u0266\u0267\x07" +
		"\x03\x02\x02\u0267\u0268\x05\x06\x04\x02\u0268\u0269\x07\x04\x02\x02\u0269" +
		"\u0285\x03\x02\x02\x02\u026A\u026B\x07\x9B\x02\x02\u026B\u026C\x07\x03" +
		"\x02\x02\u026C\u026D\x05\x06\x04\x02\u026D\u026E\x07\x13\x02\x02\u026E" +
		"\u026F\x05V,\x02\u026F\u0270\x07\x04\x02\x02\u0270\u0285\x03\x02\x02\x02" +
		"\u0271\u0272\x07\xCA\x02\x02\u0272\u0273\x07\x03\x02\x02\u0273\u0276\x07" +
		"\xEB\x02\x02\u0274\u0275\x07\x13\x02\x02\u0275\u0277\t\x11\x02\x02\u0276" +
		"\u0274\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u027A\x03\x02" +
		"\x02\x02\u0278\u0279\x07\x13\x02\x02\u0279\u027B\x05\xB2Z\x02\u027A\u0278" +
		"\x03\x02\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B\u027E\x03\x02\x02\x02" +
		"\u027C\u027D\x07\x13\x02\x02\u027D\u027F\t\x12\x02\x02\u027E\u027C\x03" +
		"\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280" +
		"\u0285\x07\x04\x02\x02\u0281\u0282\x07\x1E\x02\x02\u0282\u0283\x07\x03" +
		"\x02\x02\u0283\u0285\x07\x04\x02\x02\u0284\u0256\x03\x02\x02\x02\u0284" +
		"\u025C\x03\x02\x02\x02\u0284\u0265\x03\x02\x02\x02\u0284\u026A\x03\x02" +
		"\x02\x02\u0284\u0271\x03\x02\x02\x02\u0284\u0281\x03\x02\x02\x02\u0285" +
		"+\x03\x02\x02\x02\u0286\u0287\x070\x02\x02\u0287\u0288\x07\x03\x02\x02" +
		"\u0288\u028B\x05\x06\x04\x02\u0289\u028A\x07\x13\x02\x02\u028A\u028C\x05" +
		"\x06\x04\x02\u028B\u0289\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D" +
		"\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u028F\x03\x02" +
		"\x02\x02\u028F\u0290\x07\x04\x02\x02\u0290\u02A4\x03\x02\x02\x02\u0291" +
		"\u0292\x073\x02\x02\u0292\u0293\x07\x03\x02\x02\u0293\u0296\x05\x06\x04" +
		"\x02\u0294\u0295\x07\x13\x02\x02\u0295\u0297\x05\x06\x04\x02\u0296\u0294" +
		"\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u0296\x03\x02\x02\x02" +
		"\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029B\x07" +
		"\x04\x02\x02\u029B\u02A4\x03\x02\x02\x02\u029C\u029D\t\x13\x02\x02\u029D" +
		"\u029E\x07\x03\x02\x02\u029E\u029F\x05\x06\x04\x02\u029F\u02A0\x07\x13" +
		"\x02\x02\u02A0\u02A1\x05\x06\x04\x02\u02A1\u02A2\x07\x04\x02\x02\u02A2" +
		"\u02A4\x03\x02\x02\x02\u02A3\u0286\x03\x02\x02\x02\u02A3\u0291\x03\x02" +
		"\x02\x02\u02A3\u029C\x03\x02\x02\x02\u02A4-\x03\x02\x02\x02\u02A5\u02A6" +
		"\x07h\x02\x02\u02A6\u02A7\x07\x03\x02\x02\u02A7\u02A8\x05\x06\x04\x02" +
		"\u02A8\u02A9\x07\x13\x02\x02\u02A9\u02AB\x07\xEC\x02\x02\u02AA\u02AC\x05" +
		"\x98M\x02\u02AB\u02AA\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC" +
		"\u02AF\x03\x02\x02\x02\u02AD\u02AE\x07w\x02\x02\u02AE\u02B0\x05\xA8U\x02" +
		"\u02AF\u02AD\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B2\x03" +
		"\x02\x02\x02\u02B1\u02B3\x05\x96L\x02\u02B2\u02B1\x03\x02\x02\x02\u02B2" +
		"\u02B3\x03\x02\x02\x02\u02B3\u02B5\x03\x02\x02\x02\u02B4\u02B6\x05\x9E" +
		"P\x02\u02B5\u02B4\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B8" +
		"\x03\x02\x02\x02\u02B7\u02B9\x05\xA0Q\x02\u02B8\u02B7\x03\x02\x02\x02" +
		"\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BB\x07" +
		"\x04\x02\x02\u02BB/\x03\x02\x02\x02\u02BC\u02BD\x07\xD5\x02\x02\u02BD" +
		"\u02BE\x07\x03\x02\x02\u02BE\u02BF\x05\x06\x04\x02\u02BF\u02C0\x07\x13" +
		"\x02\x02\u02C0\u02CA\x07\xEC\x02\x02\u02C1\u02C2\x07\xDE\x02\x02\u02C2" +
		"\u02C7\x05\xA8U\x02\u02C3\u02C4\x07\x13\x02\x02\u02C4\u02C6\x05\xA8U\x02" +
		"\u02C5\u02C3\x03\x02\x02\x02\u02C6\u02C9\x03\x02\x02\x02\u02C7\u02C5\x03" +
		"\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02CB\x03\x02\x02\x02\u02C9" +
		"\u02C7\x03\x02\x02\x02\u02CA\u02C1\x03\x02\x02\x02\u02CA\u02CB\x03\x02" +
		"\x02\x02\u02CB\u02CD\x03\x02\x02\x02\u02CC\u02CE\x05\x94K\x02\u02CD\u02CC" +
		"\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02" +
		"\u02CF\u02D0\x07\x04\x02\x02\u02D0\u02FA\x03\x02\x02\x02\u02D1\u02D2\x07" +
		"\xD6\x02\x02\u02D2\u02D3\x07\x03\x02\x02\u02D3\u02D4\x05\x06\x04\x02\u02D4" +
		"\u02D5\x07\x13\x02\x02\u02D5\u02D7\x07\xEC\x02\x02\u02D6\u02D8\x05\x98" +
		"M\x02\u02D7\u02D6\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02DB" +
		"\x03\x02\x02\x02\u02D9\u02DA\x07w\x02\x02\u02DA\u02DC\x05\xA8U\x02\u02DB" +
		"\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DE\x03\x02" +
		"\x02\x02\u02DD\u02DF\x05\x96L\x02\u02DE\u02DD\x03\x02\x02\x02\u02DE\u02DF" +
		"\x03\x02\x02\x02\u02DF\u02E1\x03\x02\x02\x02\u02E0\u02E2\x05\x9AN\x02" +
		"\u02E1\u02E0\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02E4\x03" +
		"\x02\x02\x02\u02E3\u02E5\x05\x94K\x02\u02E4\u02E3\x03\x02\x02\x02\u02E4" +
		"\u02E5\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E7\x07\x04" +
		"\x02\x02\u02E7\u02FA\x03\x02\x02\x02\u02E8\u02E9\x078\x02\x02\u02E9\u02EA" +
		"\x07\x03\x02\x02\u02EA\u02EC\x05\x06\x04\x02\u02EB\u02ED\x05\xACW\x02" +
		"\u02EC\u02EB\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EF\x03" +
		"\x02\x02\x02\u02EE\u02F0\x05\xAEX\x02\u02EF\u02EE\x03\x02\x02\x02\u02EF" +
		"\u02F0\x03\x02\x02\x02\u02F0\u02F2\x03\x02\x02\x02\u02F1\u02F3\x05\x9C" +
		"O\x02\u02F2\u02F1\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3\u02F5" +
		"\x03\x02\x02\x02\u02F4\u02F6\t\x14\x02\x02\u02F5\u02F4\x03\x02\x02\x02" +
		"\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02F8\x07" +
		"\x04\x02\x02\u02F8\u02FA\x03\x02\x02\x02\u02F9\u02BC\x03\x02\x02\x02\u02F9" +
		"\u02D1\x03\x02\x02\x02\u02F9\u02E8\x03\x02\x02\x02\u02FA1\x03\x02\x02" +
		"\x02\u02FB\u02FC\x07g\x02\x02\u02FC\u02FD\x07\x03\x02\x02\u02FD\u02FE" +
		"\x05\x06\x04\x02\u02FE\u02FF\x07\x13\x02\x02\u02FF\u0300\x05\x06\x04\x02" +
		"\u0300\u0301\x07\x04\x02\x02\u03013\x03\x02\x02\x02\u0302\u0303\t\x15" +
		"\x02\x02\u0303\u0304\x07\x03\x02\x02\u0304\u0309\x05\x06\x04\x02\u0305" +
		"\u0307\x05Z.\x02\u0306\u0308\x05\\/\x02\u0307\u0306\x03\x02\x02\x02\u0307" +
		"\u0308\x03\x02\x02\x02\u0308\u030A\x03\x02\x02\x02\u0309\u0305\x03\x02" +
		"\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B" +
		"\u030C\x07\x04\x02\x02\u030C5\x03\x02\x02\x02\u030D\u030E\t\x16\x02\x02" +
		"\u030E\u030F\x07\x03\x02\x02\u030F\u0310\x05\x06\x04\x02\u0310\u0311\x07" +
		"\x8F\x02\x02\u0311\u0313\x07\x03\x02\x02\u0312\u0314\x05N(\x02\u0313\u0312" +
		"\x03\x02\x02\x02\u0313\u0314\x03\x02\x02\x02\u0314\u0316\x03\x02\x02\x02" +
		"\u0315\u0317\x05P)\x02\u0316\u0315\x03\x02\x02\x02\u0316\u0317\x03\x02" +
		"\x02\x02\u0317\u0319\x03\x02\x02\x02\u0318\u031A\x05T+\x02\u0319\u0318" +
		"\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02" +
		"\u031B\u031C\x07\x04\x02\x02\u031C\u031D\x07\x04\x02\x02\u031D\u033C\x03" +
		"\x02\x02\x02\u031E\u031F\t\x17\x02\x02\u031F\u0320\x07\x03\x02\x02\u0320" +
		"\u0326\x05\x06\x04\x02\u0321\u0322\x07\x13\x02\x02\u0322\u0324\x05V,\x02" +
		"\u0323\u0325\x05\xBE`\x02\u0324\u0323\x03\x02\x02\x02\u0324\u0325\x03" +
		"\x02\x02\x02\u0325\u0327\x03\x02\x02\x02\u0326\u0321\x03\x02\x02\x02\u0326" +
		"\u0327\x03\x02\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328\u0329\x07\x8F" +
		"\x02\x02\u0329\u032B\x07\x03\x02\x02\u032A\u032C\x05N(\x02\u032B\u032A" +
		"\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02\u032C\u032D\x03\x02\x02\x02" +
		"\u032D\u032E\x05P)\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0330\x07\x04" +
		"\x02\x02\u0330\u0331\x07\x04\x02\x02\u0331\u033C\x03\x02\x02\x02\u0332" +
		"\u0333\x07\x8E\x02\x02\u0333\u0334\x07\x03\x02\x02\u0334\u0335\x05\x06" +
		"\x04\x02\u0335\u0336\x07\x8F\x02\x02\u0336\u0337\x07\x03\x02\x02\u0337" +
		"\u0338\x05N(\x02\u0338\u0339\x07\x04\x02\x02\u0339\u033A\x07\x04\x02\x02" +
		"\u033A\u033C\x03\x02\x02\x02\u033B\u030D\x03\x02\x02\x02\u033B\u031E\x03" +
		"\x02\x02\x02\u033B\u0332\x03\x02\x02\x02\u033C7\x03\x02\x02\x02\u033D" +
		"\u033E\x07k\x02\x02\u033E\u033F\x07\x03\x02\x02\u033F\u0340\x05\x06\x04" +
		"\x02\u0340\u0341\x07\x13\x02\x02\u0341\u0342\x05\x06\x04\x02\u0342\u0343" +
		"\x07\x04\x02\x02\u03439\x03\x02\x02\x02\u0344\u0345\x05\xA8U\x02\u0345" +
		"\u0346\x07:\x02\x02\u0346\u0347\x05\xA8U\x02\u0347;\x03\x02\x02\x02\u0348" +
		"\u034D\x05> \x02\u0349\u034A\x07\x13\x02\x02\u034A\u034C\x05> \x02\u034B" +
		"\u0349\x03\x02\x02\x02\u034C\u034F\x03\x02\x02\x02\u034D\u034B\x03\x02" +
		"\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E=\x03\x02\x02\x02\u034F\u034D" +
		"\x03\x02\x02\x02\u0350\u0352\x05\xB4[\x02\u0351\u0350\x03\x02\x02\x02" +
		"\u0351\u0352\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\u0354\x05" +
		"\xA8U\x02\u0354\u0355\x07\x16\x02\x02\u0355\u0356\x054\x1B\x02\u0356?" +
		"\x03\x02\x02\x02\u0357\u0359\x05\xB4[\x02\u0358\u0357\x03\x02\x02\x02" +
		"\u0358\u0359\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u035B\x05" +
		"\xA8U\x02\u035B\u035C\x07\x16\x02\x02\u035C\u035D\x05\x06\x04\x02\u035D" +
		"A\x03\x02\x02\x02\u035E\u035F\x05\xA8U\x02\u035F\u0360\x07\t\x02\x02\u0360" +
		"\u0361\x05\xBE`\x02\u0361C\x03\x02\x02\x02\u0362\u0367\x05H%\x02\u0363" +
		"\u0364\x07\x13\x02\x02\u0364\u0366\x05H%\x02\u0365\u0363\x03\x02\x02\x02" +
		"\u0366\u0369\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0367\u0368\x03" +
		"\x02\x02\x02\u0368E\x03\x02\x02\x02\u0369\u0367\x03\x02\x02\x02\u036A" +
		"\u036F\x05H%\x02\u036B\u036C\x07\x13\x02\x02\u036C\u036E\x05H%\x02\u036D" +
		"\u036B\x03\x02\x02\x02\u036E\u0371\x03\x02\x02\x02\u036F\u036D\x03\x02" +
		"\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u037B\x03\x02\x02\x02\u0371" +
		"\u036F\x03\x02\x02\x02\u0372\u0373\x07\x1C\x02\x02\u0373\u0378\x05\xA8" +
		"U\x02\u0374\u0375\x07\x13\x02\x02\u0375\u0377\x05\xA8U\x02\u0376\u0374" +
		"\x03\x02\x02\x02\u0377\u037A\x03\x02\x02\x02\u0378\u0376\x03\x02\x02\x02" +
		"\u0378\u0379\x03\x02\x02\x02\u0379\u037C\x03\x02\x02\x02\u037A\u0378\x03" +
		"\x02\x02\x02\u037B\u0372\x03\x02\x02\x02\u037B\u037C\x03\x02\x02\x02\u037C" +
		"G\x03\x02\x02\x02\u037D\u0380\x05\x06\x04\x02\u037E\u037F\x07%\x02\x02" +
		"\u037F\u0381\x05\xA2R\x02\u0380\u037E\x03\x02\x02\x02\u0380\u0381\x03" +
		"\x02\x02\x02\u0381I\x03\x02\x02\x02\u0382\u0384\x05\x10\t\x02\u0383\u0382" +
		"\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02\u0384\u0388\x03\x02\x02\x02" +
		"\u0385\u0389\x05\x12\n\x02\u0386\u0389\x05L\'\x02\u0387\u0389\x05\x0E" +
		"\b\x02\u0388\u0385\x03\x02\x02\x02\u0388\u0386\x03\x02\x02\x02\u0388\u0387" +
		"\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389\u038B\x03\x02\x02\x02" +
		"\u038A\u038C\x05\x14\v\x02\u038B\u038A\x03\x02\x02\x02\u038B\u038C\x03" +
		"\x02\x02\x02\u038C\u038E\x03\x02\x02\x02\u038D\u038F\x05\f\x07\x02\u038E" +
		"\u038D\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038FK\x03\x02\x02" +
		"\x02\u0390\u0391\x07\xC5\x02\x02\u0391\u0392\x05\x06\x04\x02\u0392M\x03" +
		"\x02\x02\x02\u0393\u0394\x07\x93\x02\x02\u0394\u0395\x07B\x02\x02\u0395" +
		"\u039A\x05\xA8U\x02\u0396\u0397\x07\x13\x02\x02\u0397\u0399\x05\xA8U\x02" +
		"\u0398\u0396\x03\x02\x02\x02\u0399\u039C\x03\x02\x02\x02\u039A\u0398\x03" +
		"\x02\x02\x02\u039A\u039B\x03\x02\x02\x02\u039BO\x03\x02\x02\x02\u039C" +
		"\u039A\x03\x02\x02\x02\u039D\u039E\x07A\x02\x02\u039E\u039F\x07B\x02\x02" +
		"\u039F\u03A4\x05R*\x02\u03A0\u03A1\x07\x13\x02\x02\u03A1\u03A3\x05R*\x02" +
		"\u03A2\u03A0\x03\x02\x02\x02\u03A3\u03A6\x03\x02\x02\x02\u03A4\u03A2\x03" +
		"\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5Q\x03\x02\x02\x02\u03A6" +
		"\u03A4\x03\x02\x02\x02\u03A7\u03A9\x05\xA8U\x02\u03A8\u03AA\t\x18\x02" +
		"\x02\u03A9\u03A8\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AAS\x03" +
		"\x02\x02\x02\u03AB\u03AC\x07n\x02\x02\u03AC\u03AF\x07\xB3\x02\x02\u03AD" +
		"\u03AF\x07\x95\x02\x02\u03AE\u03AB\x03\x02\x02\x02\u03AE\u03AD\x03\x02" +
		"\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03B1\x07*\x02\x02\u03B1\u03B2" +
		"\x05X-\x02\u03B2\u03B3\x07&\x02\x02\u03B3\u03B4\x05X-\x02\u03B4U\x03\x02" +
		"\x02\x02\u03B5\u03B6\x07\xE8\x02\x02\u03B6W\x03\x02\x02\x02\u03B7\u03B8" +
		"\x07\xE8\x02\x02\u03B8\u03C3\x07\x90\x02\x02\u03B9\u03BA\x07\xE8\x02\x02" +
		"\u03BA\u03C3\x07\x91\x02\x02\u03BB\u03BC\x07\x96\x02\x02\u03BC\u03BD\x07" +
		"n\x02\x02\u03BD\u03C3\x07\xB4\x02\x02\u03BE\u03BF\x07\x92\x02\x02\u03BF" +
		"\u03C3\x07\x90\x02\x02\u03C0\u03C1\x07\x92\x02\x02\u03C1\u03C3\x07\x91" +
		"\x02\x02\u03C2\u03B7\x03\x02\x02\x02\u03C2\u03B9\x03\x02\x02\x02\u03C2" +
		"\u03BB\x03\x02\x02\x02\u03C2\u03BE\x03\x02\x02\x02\u03C2\u03C0\x03\x02" +
		"\x02\x02\u03C3Y\x03\x02\x02\x02\u03C4\u03C5\x07\x87\x02\x02\u03C5\u03C6" +
		"\t\x19\x02\x02\u03C6\u03CB\x05\xA8U\x02\u03C7\u03C8\x07\x13\x02\x02\u03C8" +
		"\u03CA\x05\xA8U\x02\u03C9\u03C7\x03\x02\x02\x02\u03CA\u03CD\x03\x02\x02" +
		"\x02\u03CB\u03C9\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02\u03CC\u03D2" +
		"\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CE\u03CF\x07\x87\x02\x02" +
		"\u03CF\u03D0\x07>\x02\x02\u03D0\u03D2\x05\x06\x04\x02\u03D1\u03C4\x03" +
		"\x02\x02\x02\u03D1\u03CE\x03\x02\x02\x02\u03D2[\x03\x02\x02\x02\u03D3" +
		"\u03D4\x07\x89\x02\x02\u03D4\u03D5\x05\x06\x04\x02\u03D5]\x03\x02\x02" +
		"\x02\u03D6\u03D7\x05\xA4S\x02\u03D7\u03DA\x05d3\x02\u03D8\u03D9\x07\xD4" +
		"\x02\x02\u03D9\u03DB\x05\xBE`\x02\u03DA\u03D8\x03\x02\x02\x02\u03DA\u03DB" +
		"\x03\x02\x02\x02\u03DB_\x03\x02\x02\x02\u03DC\u03E0\x05h5\x02\u03DD\u03E0" +
		"\x05l7\x02\u03DE\u03E0\x05j6\x02\u03DF\u03DC\x03\x02\x02\x02\u03DF\u03DD" +
		"\x03\x02\x02\x02\u03DF\u03DE\x03\x02\x02\x02\u03E0a\x03\x02\x02\x02\u03E1" +
		"\u03E4\x05j6\x02\u03E2\u03E4\x05h5\x02\u03E3\u03E1\x03\x02\x02\x02\u03E3" +
		"\u03E2\x03\x02\x02\x02\u03E4c\x03\x02\x02\x02\u03E5\u03EB\x05h5\x02\u03E6" +
		"\u03EB\x05l7\x02\u03E7\u03EB\x05n8\x02\u03E8\u03EB\x05f4\x02\u03E9\u03EB" +
		"\x05j6\x02\u03EA\u03E5\x03\x02\x02\x02\u03EA\u03E6\x03\x02\x02\x02\u03EA" +
		"\u03E7\x03\x02\x02\x02\u03EA\u03E8\x03\x02\x02\x02\u03EA\u03E9\x03\x02" +
		"\x02\x02\u03EBe\x03\x02\x02\x02\u03EC\u03F0\x07v\x02\x02\u03ED\u03F0\x05" +
		"p9\x02\u03EE\u03F0\x05r:\x02\u03EF\u03EC\x03\x02\x02\x02\u03EF\u03ED\x03" +
		"\x02\x02\x02\u03EF\u03EE\x03\x02\x02\x02\u03F0g\x03\x02\x02\x02\u03F1" +
		"\u03F4\x05\xC0a\x02\u03F2\u03F4\x05t;\x02\u03F3\u03F1\x03\x02\x02\x02" +
		"\u03F3\u03F2\x03\x02\x02\x02\u03F4\u03F6\x03\x02\x02\x02\u03F5\u03F7\x05" +
		"\x8EH\x02\u03F6\u03F5\x03\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7" +
		"\u03FC\x03\x02\x02\x02\u03F8\u03FA\x07)\x02\x02\u03F9\u03F8\x03\x02\x02" +
		"\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB\u03FD" +
		"\x07-\x02\x02\u03FC\u03F9\x03\x02\x02\x02\u03FC\u03FD\x03\x02\x02\x02" +
		"\u03FDi\x03\x02\x02\x02\u03FE\u0403\x05\xB4[\x02\u03FF\u0400\x07\n\x02" +
		"\x02\u0400\u0401\x05h5\x02\u0401\u0402\x07\v\x02\x02\u0402\u0404\x03\x02" +
		"\x02\x02\u0403\u03FF\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404" +
		"k\x03\x02\x02\x02\u0405\u0411\x07p\x02\x02\u0406\u0407\x07\x07\x02\x02" +
		"\u0407\u040C\x05\x90I\x02\u0408\u0409\x07\x13\x02\x02\u0409\u040B\x05" +
		"\x90I\x02\u040A\u0408\x03\x02\x02\x02\u040B\u040E\x03\x02\x02\x02\u040C" +
		"\u040A\x03\x02\x02\x02\u040C\u040D\x03\x02\x02\x02\u040D\u040F\x03\x02" +
		"\x02\x02\u040E\u040C\x03\x02\x02\x02\u040F\u0410\x07\b\x02\x02\u0410\u0412" +
		"\x03\x02\x02\x02\u0411\u0406\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02" +
		"\u0412m\x03\x02\x02\x02\u0413\u0418\x07\xE6\x02\x02\u0414\u0415\x07\n" +
		"\x02\x02\u0415\u0416\x05h5\x02\u0416\u0417\x07\v\x02\x02\u0417\u0419\x03" +
		"\x02\x02\x02\u0418\u0414\x03\x02\x02\x02\u0418\u0419\x03\x02\x02\x02\u0419" +
		"o\x03\x02\x02\x02\u041A\u0438\x07t\x02\x02\u041B\u0427\x07\xE2\x02\x02" +
		"\u041C\u041D\x07\x07\x02\x02\u041D\u0422\x05t;\x02\u041E\u041F\x07\x11" +
		"\x02\x02\u041F\u0421\x05t;\x02\u0420\u041E\x03\x02\x02\x02\u0421\u0424" +
		"\x03";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423" +
		"\u0425\x03\x02\x02\x02\u0424\u0422\x03\x02\x02\x02\u0425\u0426\x07\b\x02" +
		"\x02\u0426\u0428\x03\x02\x02\x02\u0427\u041C\x03\x02\x02\x02\u0427\u0428" +
		"\x03\x02\x02\x02\u0428\u0438\x03\x02\x02\x02\u0429\u0435\x07\xE3\x02\x02" +
		"\u042A\u042B\x07\x07\x02\x02\u042B\u0430\x05\xA4S\x02\u042C\u042D\x07" +
		"\x11\x02\x02\u042D\u042F\x05\xA4S\x02\u042E\u042C\x03\x02\x02\x02\u042F" +
		"\u0432\x03\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0430\u0431\x03\x02" +
		"\x02\x02\u0431\u0433\x03\x02\x02\x02\u0432\u0430\x03\x02\x02\x02\u0433" +
		"\u0434\x07\b\x02\x02\u0434\u0436\x03\x02\x02\x02\u0435\u042A\x03\x02\x02" +
		"\x02\u0435\u0436\x03\x02\x02\x02\u0436\u0438\x03\x02\x02\x02\u0437\u041A" +
		"\x03\x02\x02\x02\u0437\u041B\x03\x02\x02\x02\u0437\u0429\x03\x02\x02\x02" +
		"\u0438q\x03\x02\x02\x02\u0439\u0462\x07u\x02\x02\u043A\u044B\x07\xE4\x02" +
		"\x02\u043B\u043C\x07\x07\x02\x02\u043C\u0448\x07\xEC\x02\x02\u043D\u043E" +
		"\x07\x03\x02\x02\u043E\u0443\x05t;\x02\u043F\u0440\x07\x11\x02\x02\u0440" +
		"\u0442\x05t;\x02\u0441\u043F\x03\x02\x02\x02\u0442\u0445\x03\x02\x02\x02" +
		"\u0443\u0441\x03\x02\x02\x02\u0443\u0444\x03\x02\x02\x02\u0444\u0446\x03" +
		"\x02\x02\x02\u0445\u0443\x03\x02\x02\x02\u0446\u0447\x07\x04\x02\x02\u0447" +
		"\u0449\x03\x02\x02\x02\u0448\u043D\x03\x02\x02\x02\u0448\u0449\x03\x02" +
		"\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\u044C\x07\b\x02\x02\u044B\u043B" +
		"\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C\u0462\x03\x02\x02\x02" +
		"\u044D\u045F\x07\xE5\x02\x02\u044E\u044F\x07\x07\x02\x02\u044F\u045B\x05" +
		"\xA4S\x02\u0450\u0451\x07\x03\x02\x02\u0451\u0456\x05\xA4S\x02\u0452\u0453" +
		"\x07\x11\x02\x02\u0453\u0455\x05\xA4S\x02\u0454\u0452\x03\x02\x02\x02" +
		"\u0455\u0458\x03\x02\x02\x02\u0456\u0454\x03\x02\x02\x02\u0456\u0457\x03" +
		"\x02\x02\x02\u0457\u0459\x03\x02\x02\x02\u0458\u0456\x03\x02\x02\x02\u0459" +
		"\u045A\x07\x04\x02\x02\u045A\u045C\x03\x02\x02\x02\u045B\u0450\x03\x02" +
		"\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D" +
		"\u045E\x07\b\x02\x02\u045E\u0460\x03\x02\x02\x02\u045F\u044E\x03\x02\x02" +
		"\x02\u045F\u0460\x03\x02\x02\x02\u0460\u0462\x03\x02\x02\x02\u0461\u0439" +
		"\x03\x02\x02\x02\u0461\u043A\x03\x02\x02\x02\u0461\u044D\x03\x02\x02\x02" +
		"\u0462s\x03\x02\x02\x02\u0463\u0464\x07\xEC\x02\x02\u0464u\x03\x02\x02" +
		"\x02\u0465\u0466\x07\xEC\x02\x02\u0466w\x03\x02\x02\x02\u0467\u0468\t" +
		"\x1A\x02\x02\u0468\u046D\x05z>\x02\u0469\u046A\x07\x13\x02\x02\u046A\u046C" +
		"\x05z>\x02\u046B\u0469\x03\x02\x02\x02\u046C\u046F\x03\x02\x02\x02\u046D" +
		"\u046B\x03\x02\x02\x02\u046D\u046E\x03\x02\x02\x02\u046Ey\x03\x02\x02" +
		"\x02\u046F\u046D\x03\x02\x02\x02\u0470\u0473\x05\xA4S\x02\u0471\u0472" +
		"\x07%\x02\x02\u0472\u0474\x05\xA2R\x02\u0473\u0471\x03\x02\x02\x02\u0473" +
		"\u0474\x03\x02\x02\x02\u0474{\x03\x02\x02\x02\u0475\u047A\x05~@\x02\u0476" +
		"\u0477\x07\xEE\x02\x02\u0477\u0479\x05~@\x02\u0478\u0476\x03\x02\x02\x02" +
		"\u0479\u047C\x03\x02\x02\x02\u047A\u0478\x03\x02\x02\x02\u047A\u047B\x03" +
		"\x02\x02\x02\u047B}\x03\x02\x02\x02\u047C\u047A\x03\x02\x02\x02\u047D" +
		"\u047E\x07\xEC\x02\x02\u047E\u0480\x07\x15\x02\x02\u047F\u047D\x03\x02" +
		"\x02\x02\u047F\u0480\x03\x02\x02\x02\u0480\u0485\x03\x02\x02\x02\u0481" +
		"\u0482\x07\xB0\x02\x02\u0482\u0483\x05\x06\x04\x02\u0483\u0484\x07\x1A" +
		"\x02\x02\u0484\u0486\x03\x02\x02\x02\u0485\u0481\x03\x02\x02\x02\u0485" +
		"\u0486\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\u0489\x05\x06" +
		"\x04\x02\u0488\u048A\x05\xACW\x02\u0489\u0488\x03\x02\x02\x02\u0489\u048A" +
		"\x03\x02\x02\x02\u048A\u048C\x03\x02\x02\x02\u048B\u048D\x05\xAEX\x02" +
		"\u048C\u048B\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D\x7F\x03" +
		"\x02\x02\x02\u048E\u0493\x05\x82B\x02\u048F\u0490\x07\xEE\x02\x02\u0490" +
		"\u0492\x05\x82B\x02\u0491\u048F\x03\x02\x02\x02\u0492\u0495\x03\x02\x02" +
		"\x02\u0493\u0491\x03\x02\x02\x02\u0493\u0494\x03\x02\x02\x02\u0494\x81" +
		"\x03\x02\x02\x02\u0495\u0493\x03\x02\x02\x02\u0496\u0497\x07\xEC\x02\x02" +
		"\u0497\u0499\x07\x15\x02\x02\u0498\u0496\x03\x02\x02\x02\u0498\u0499\x03" +
		"\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A\u049C\x05\x88E\x02\u049B" +
		"\u049D\x05\xACW\x02\u049C\u049B\x03\x02\x02\x02\u049C\u049D\x03\x02\x02" +
		"\x02\u049D\u049F\x03\x02\x02\x02\u049E\u04A0\x05\xAEX\x02\u049F\u049E" +
		"\x03\x02\x02\x02\u049F\u04A0\x03\x02\x02\x02\u04A0\x83\x03\x02\x02\x02" +
		"\u04A1\u04A4\t\x1A\x02\x02\u04A2\u04A3\x07\x9E\x02\x02\u04A3\u04A5\x05" +
		"\x86D\x02\u04A4\u04A2\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5" +
		"\u04A6\x03\x02\x02\x02\u04A6\u04A7\x07w\x02\x02\u04A7\u04A8\x07\xEC\x02" +
		"\x02\u04A8\x85\x03\x02\x02\x02\u04A9\u04AE\x05z>\x02\u04AA\u04AB\x07\x13" +
		"\x02\x02\u04AB\u04AD\x05z>\x02\u04AC\u04AA\x03\x02\x02\x02\u04AD\u04B0" +
		"\x03\x02\x02\x02\u04AE\u04AC\x03\x02\x02\x02\u04AE\u04AF\x03\x02\x02\x02" +
		"\u04AF\x87\x03\x02\x02\x02\u04B0\u04AE\x03\x02\x02\x02\u04B1\u04B2\x07" +
		"\xB0\x02\x02\u04B2\u04B3\x05\x06\x04\x02\u04B3\u04B4\x07\x1A\x02\x02\u04B4" +
		"\u04B6\x03\x02\x02\x02\u04B5\u04B1\x03\x02\x02\x02\u04B5\u04B6\x03\x02" +
		"\x02\x02\u04B6\u04B7\x03\x02\x02\x02\u04B7\u04B9\x05\x8CG\x02\u04B8\u04BA" +
		"\x05\xB0Y\x02\u04B9\u04B8\x03\x02\x02\x02\u04B9\u04BA\x03\x02\x02\x02" +
		"\u04BA\u04BB\x03\x02\x02\x02\u04BB\u04BF\x05\x8AF\x02\u04BC\u04BE\x05" +
		"\x8AF\x02\u04BD\u04BC\x03\x02\x02\x02\u04BE\u04C1\x03\x02\x02\x02\u04BF" +
		"\u04BD\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\x89\x03\x02\x02" +
		"\x02\u04C1\u04BF\x03\x02\x02\x02\u04C2\u04C4\t\x1B\x02\x02\u04C3\u04C2" +
		"\x03\x02\x02\x02\u04C3\u04C4\x03\x02\x02\x02\u04C4\u04C5\x03\x02\x02\x02" +
		"\u04C5\u04CA\x05\x8CG\x02\u04C6\u04C7\x07\x05\x02\x02\u04C7\u04C8\x05" +
		"\x06\x04\x02\u04C8\u04C9\x07\x06\x02\x02\u04C9\u04CB\x03\x02\x02\x02\u04CA" +
		"\u04C6\x03\x02\x02\x02\u04CA\u04CB\x03\x02\x02\x02\u04CB\x8B\x03\x02\x02" +
		"\x02\u04CC\u04CD\t\x1C\x02\x02\u04CD\x8D\x03\x02\x02\x02\u04CE\u04CF\x07" +
		"\x05\x02\x02\u04CF\u04D0\x05\x06\x04\x02\u04D0\u04D1\x07\x06\x02\x02\u04D1" +
		"\u04DE\x03\x02\x02\x02\u04D2\u04D3\x07\x07\x02\x02\u04D3\u04D8\x05\xBE" +
		"`\x02\u04D4\u04D5\x07\x13\x02\x02\u04D5\u04D7\x05\xBE`\x02\u04D6\u04D4" +
		"\x03\x02\x02\x02\u04D7\u04DA\x03\x02\x02\x02\u04D8\u04D6\x03\x02\x02\x02" +
		"\u04D8\u04D9\x03\x02\x02\x02\u04D9\u04DB\x03\x02\x02\x02\u04DA\u04D8\x03" +
		"\x02\x02\x02\u04DB\u04DC\x07\b\x02\x02\u04DC\u04DE\x03\x02\x02\x02\u04DD" +
		"\u04CE\x03\x02\x02\x02\u04DD\u04D2\x03\x02\x02\x02\u04DE\x8F\x03\x02\x02" +
		"\x02\u04DF\u04E2\x05j6\x02\u04E0\u04E3\x05\xA8U\x02\u04E1\u04E3\x05\x92" +
		"J\x02\u04E2\u04E0\x03\x02\x02\x02\u04E2\u04E1\x03\x02\x02\x02\u04E3\x91" +
		"\x03\x02\x02\x02\u04E4\u04E6\x07i\x02\x02\u04E5\u04E7\t\x1D\x02\x02\u04E6" +
		"\u04E5\x03\x02\x02\x02\u04E6\u04E7\x03\x02\x02\x02\u04E7\x93\x03\x02\x02" +
		"\x02\u04E8\u04E9\t\x1E\x02\x02\u04E9\x95\x03\x02\x02\x02\u04EA\u04EB\t" +
		"\x1F\x02\x02\u04EB\x97\x03\x02\x02\x02\u04EC\u04ED\x07\x9E\x02\x02\u04ED" +
		"\u04F2\x05\xA8U\x02\u04EE\u04EF\x07\x13\x02\x02\u04EF\u04F1\x05\xA8U\x02" +
		"\u04F0\u04EE\x03\x02\x02\x02\u04F1\u04F4\x03\x02\x02\x02\u04F2\u04F0\x03" +
		"\x02\x02\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3\x99\x03\x02\x02\x02\u04F4" +
		"\u04F2\x03\x02\x02\x02\u04F5\u04F6\t \x02\x02\u04F6\x9B\x03\x02\x02\x02" +
		"\u04F7\u04F8\x07<\x02\x02\u04F8\u04F9\x05\x06\x04\x02\u04F9\x9D\x03\x02" +
		"\x02\x02\u04FA\u04FB\t!\x02\x02\u04FB\x9F\x03\x02\x02\x02\u04FC\u04FD" +
		"\t\"\x02\x02\u04FD\xA1\x03\x02\x02\x02\u04FE\u04FF\x07\xEC\x02\x02\u04FF" +
		"\xA3\x03\x02\x02\x02\u0500\u0501\x07\xEC\x02\x02\u0501\xA5\x03\x02\x02" +
		"\x02\u0502\u0503\x07\xEC\x02\x02\u0503\xA7\x03\x02\x02\x02\u0504\u0507" +
		"\x07\xEC\x02\x02\u0505\u0506\x07\x17\x02\x02\u0506\u0508\x07\xEC\x02\x02" +
		"\u0507\u0505\x03\x02\x02\x02\u0507\u0508\x03\x02\x02\x02\u0508\xA9\x03" +
		"\x02\x02\x02\u0509\u050A\x07\x07\x02\x02\u050A\u050F\x05\xBE`\x02\u050B" +
		"\u050C\x07\x13\x02\x02\u050C\u050E\x05\xBE`\x02\u050D\u050B\x03\x02\x02" +
		"\x02\u050E\u0511\x03\x02\x02\x02\u050F\u050D\x03\x02\x02\x02\u050F\u0510" +
		"\x03\x02\x02\x02\u0510\u0512\x03\x02\x02\x02\u0511\u050F\x03\x02\x02\x02" +
		"\u0512\u0513\x07\b\x02\x02\u0513\xAB\x03\x02\x02\x02\u0514\u0515\x07=" +
		"\x02\x02\u0515\u0516\x05\xBE`\x02\u0516\xAD\x03\x02\x02\x02\u0517\u0518" +
		"\x07@\x02\x02\u0518\u0519\x05\xBE`\x02\u0519\xAF\x03\x02\x02\x02\u051A" +
		"\u051B\t#\x02\x02\u051B\xB1\x03\x02\x02\x02\u051C\u051F\x05\x06\x04\x02" +
		"\u051D\u051F\x07i\x02\x02\u051E\u051C\x03\x02\x02\x02\u051E\u051D\x03" +
		"\x02\x02\x02\u051F\xB3\x03\x02\x02\x02\u0520\u0526\x07^\x02\x02\u0521" +
		"\u0526\x07\xE1\x02\x02\u0522\u0526\x07]\x02\x02\u0523\u0526\x07_\x02\x02" +
		"\u0524\u0526\x05\xB6\\\x02\u0525\u0520\x03\x02\x02\x02\u0525\u0521\x03" +
		"\x02\x02\x02\u0525\u0522\x03\x02\x02\x02\u0525\u0523\x03\x02\x02\x02\u0525" +
		"\u0524\x03\x02\x02\x02\u0526\xB5\x03\x02\x02\x02\u0527\u0528\x07d\x02" +
		"\x02\u0528\u0529\x07_\x02\x02\u0529\xB7\x03\x02\x02\x02\u052A\u052B\x07" +
		"\xEC\x02\x02\u052B\xB9\x03\x02\x02\x02\u052C\u052D\x07\xEC\x02\x02\u052D" +
		"\xBB\x03\x02\x02\x02\u052E\u052F\x07\xEC\x02\x02\u052F\xBD\x03\x02\x02" +
		"\x02\u0530\u0531\t$\x02\x02\u0531\xBF\x03\x02\x02\x02\u0532\u0533\t%\x02" +
		"\x02\u0533\xC1\x03\x02\x02\x02\u0534\u0535\t&\x02\x02\u0535\xC3\x03\x02" +
		"\x02\x02\x96\xC9\xD7\xEA\u0108\u010A\u010C\u011C\u0126\u012E\u0135\u0137" +
		"\u0142\u014B\u015D\u0166\u0175\u0180\u0183\u0188\u01A9\u01B2\u01B5\u01BF" +
		"\u01C4\u01C8\u01CE\u01D2\u01DC\u01E0\u01E4\u01E9\u01F9\u01FD\u0208\u0213" +
		"\u0217\u021B\u0227\u0232\u0250\u0254\u0259\u0261\u0276\u027A\u027E\u0284" +
		"\u028D\u0298\u02A3\u02AB\u02AF\u02B2\u02B5\u02B8\u02C7\u02CA\u02CD\u02D7" +
		"\u02DB\u02DE\u02E1\u02E4\u02EC\u02EF\u02F2\u02F5\u02F9\u0307\u0309\u0313" +
		"\u0316\u0319\u0324\u0326\u032B\u033B\u034D\u0351\u0358\u0367\u036F\u0378" +
		"\u037B\u0380\u0383\u0388\u038B\u038E\u039A\u03A4\u03A9\u03AE\u03C2\u03CB" +
		"\u03D1\u03DA\u03DF\u03E3\u03EA\u03EF\u03F3\u03F6\u03F9\u03FC\u0403\u040C" +
		"\u0411\u0418\u0422\u0427\u0430\u0435\u0437\u0443\u0448\u044B\u0456\u045B" +
		"\u045F\u0461\u046D\u0473\u047A\u047F\u0485\u0489\u048C\u0493\u0498\u049C" +
		"\u049F\u04A4\u04AE\u04B5\u04B9\u04BF\u04C3\u04CA\u04D8\u04DD\u04E2\u04E6" +
		"\u04F2\u0507\u050F\u051E\u0525";
	public static readonly _serializedATN: string = Utils.join(
		[
			VtlParser._serializedATNSegment0,
			VtlParser._serializedATNSegment1,
			VtlParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VtlParser.__ATN) {
			VtlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(VtlParser._serializedATN));
		}

		return VtlParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(VtlParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.EOL);
		} else {
			return this.getToken(VtlParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_start; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class TemporaryAssignmentContext extends StatementContext {
	public varID(): VarIDContext {
		return this.getRuleContext(0, VarIDContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(VtlParser.ASSIGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTemporaryAssignment) {
			listener.enterTemporaryAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTemporaryAssignment) {
			listener.exitTemporaryAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTemporaryAssignment) {
			return visitor.visitTemporaryAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PersistAssignmentContext extends StatementContext {
	public varID(): VarIDContext {
		return this.getRuleContext(0, VarIDContext);
	}
	public PUT_SYMBOL(): TerminalNode { return this.getToken(VtlParser.PUT_SYMBOL, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterPersistAssignment) {
			listener.enterPersistAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitPersistAssignment) {
			listener.exitPersistAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitPersistAssignment) {
			return visitor.visitPersistAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DefineExpressionContext extends StatementContext {
	public defOperators(): DefOperatorsContext {
		return this.getRuleContext(0, DefOperatorsContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDefineExpression) {
			listener.enterDefineExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDefineExpression) {
			listener.exitDefineExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDefineExpression) {
			return visitor.visitDefineExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class ParenthesisExprContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterParenthesisExpr) {
			listener.enterParenthesisExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitParenthesisExpr) {
			listener.exitParenthesisExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitParenthesisExpr) {
			return visitor.visitParenthesisExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionsExpressionContext extends ExprContext {
	public functions(): FunctionsContext {
		return this.getRuleContext(0, FunctionsContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterFunctionsExpression) {
			listener.enterFunctionsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitFunctionsExpression) {
			listener.exitFunctionsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitFunctionsExpression) {
			return visitor.visitFunctionsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClauseExprContext extends ExprContext {
	public _dataset!: ExprContext;
	public _clause!: DatasetClauseContext;
	public QLPAREN(): TerminalNode { return this.getToken(VtlParser.QLPAREN, 0); }
	public QRPAREN(): TerminalNode { return this.getToken(VtlParser.QRPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public datasetClause(): DatasetClauseContext {
		return this.getRuleContext(0, DatasetClauseContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterClauseExpr) {
			listener.enterClauseExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitClauseExpr) {
			listener.exitClauseExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitClauseExpr) {
			return visitor.visitClauseExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MembershipExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public MEMBERSHIP(): TerminalNode { return this.getToken(VtlParser.MEMBERSHIP, 0); }
	public simpleComponentId(): SimpleComponentIdContext {
		return this.getRuleContext(0, SimpleComponentIdContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterMembershipExpr) {
			listener.enterMembershipExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitMembershipExpr) {
			listener.exitMembershipExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitMembershipExpr) {
			return visitor.visitMembershipExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryExprContext extends ExprContext {
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MINUS, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NOT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnaryExpr) {
			listener.enterUnaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnaryExpr) {
			listener.exitUnaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnaryExpr) {
			return visitor.visitUnaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticExprContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DIV, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterArithmeticExpr) {
			listener.enterArithmeticExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitArithmeticExpr) {
			listener.exitArithmeticExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitArithmeticExpr) {
			return visitor.visitArithmeticExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticExprOrConcatContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MINUS, 0); }
	public CONCAT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CONCAT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterArithmeticExprOrConcat) {
			listener.enterArithmeticExprOrConcat(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitArithmeticExprOrConcat) {
			listener.exitArithmeticExprOrConcat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitArithmeticExprOrConcat) {
			return visitor.visitArithmeticExprOrConcat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonExprContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: ComparisonOperandContext;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public comparisonOperand(): ComparisonOperandContext {
		return this.getRuleContext(0, ComparisonOperandContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComparisonExpr) {
			listener.enterComparisonExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComparisonExpr) {
			listener.exitComparisonExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComparisonExpr) {
			return visitor.visitComparisonExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InNotInExprContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IN, 0); }
	public NOT_IN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NOT_IN, 0); }
	public lists(): ListsContext | undefined {
		return this.tryGetRuleContext(0, ListsContext);
	}
	public valueDomainID(): ValueDomainIDContext | undefined {
		return this.tryGetRuleContext(0, ValueDomainIDContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterInNotInExpr) {
			listener.enterInNotInExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitInNotInExpr) {
			listener.exitInNotInExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitInNotInExpr) {
			return visitor.visitInNotInExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanExprContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(VtlParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(VtlParser.OR, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(VtlParser.XOR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterBooleanExpr) {
			listener.enterBooleanExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitBooleanExpr) {
			listener.exitBooleanExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitBooleanExpr) {
			return visitor.visitBooleanExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfExprContext extends ExprContext {
	public _conditionalExpr!: ExprContext;
	public _thenExpr!: ExprContext;
	public _elseExpr!: ExprContext;
	public IF(): TerminalNode { return this.getToken(VtlParser.IF, 0); }
	public THEN(): TerminalNode { return this.getToken(VtlParser.THEN, 0); }
	public ELSE(): TerminalNode { return this.getToken(VtlParser.ELSE, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterIfExpr) {
			listener.enterIfExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitIfExpr) {
			listener.exitIfExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitIfExpr) {
			return visitor.visitIfExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantExprContext extends ExprContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterConstantExpr) {
			listener.enterConstantExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitConstantExpr) {
			listener.exitConstantExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitConstantExpr) {
			return visitor.visitConstantExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarIdExprContext extends ExprContext {
	public varID(): VarIDContext {
		return this.getRuleContext(0, VarIDContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterVarIdExpr) {
			listener.enterVarIdExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitVarIdExpr) {
			listener.exitVarIdExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitVarIdExpr) {
			return visitor.visitVarIdExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_functions; }
	public copyFrom(ctx: FunctionsContext): void {
		super.copyFrom(ctx);
	}
}
export class JoinFunctionsContext extends FunctionsContext {
	public joinOperators(): JoinOperatorsContext {
		return this.getRuleContext(0, JoinOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinFunctions) {
			listener.enterJoinFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinFunctions) {
			listener.exitJoinFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinFunctions) {
			return visitor.visitJoinFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GenericFunctionsContext extends FunctionsContext {
	public genericOperators(): GenericOperatorsContext {
		return this.getRuleContext(0, GenericOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterGenericFunctions) {
			listener.enterGenericFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitGenericFunctions) {
			listener.exitGenericFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitGenericFunctions) {
			return visitor.visitGenericFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringFunctionsContext extends FunctionsContext {
	public stringOperators(): StringOperatorsContext {
		return this.getRuleContext(0, StringOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterStringFunctions) {
			listener.enterStringFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitStringFunctions) {
			listener.exitStringFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitStringFunctions) {
			return visitor.visitStringFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericFunctionsContext extends FunctionsContext {
	public numericOperators(): NumericOperatorsContext {
		return this.getRuleContext(0, NumericOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterNumericFunctions) {
			listener.enterNumericFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitNumericFunctions) {
			listener.exitNumericFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitNumericFunctions) {
			return visitor.visitNumericFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonFunctionsContext extends FunctionsContext {
	public comparisonOperators(): ComparisonOperatorsContext {
		return this.getRuleContext(0, ComparisonOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComparisonFunctions) {
			listener.enterComparisonFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComparisonFunctions) {
			listener.exitComparisonFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComparisonFunctions) {
			return visitor.visitComparisonFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeFunctionsContext extends FunctionsContext {
	public timeOperators(): TimeOperatorsContext {
		return this.getRuleContext(0, TimeOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTimeFunctions) {
			listener.enterTimeFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTimeFunctions) {
			listener.exitTimeFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTimeFunctions) {
			return visitor.visitTimeFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetFunctionsContext extends FunctionsContext {
	public setOperators(): SetOperatorsContext {
		return this.getRuleContext(0, SetOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSetFunctions) {
			listener.enterSetFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSetFunctions) {
			listener.exitSetFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSetFunctions) {
			return visitor.visitSetFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HierarchyFunctionsContext extends FunctionsContext {
	public hierarchyOperators(): HierarchyOperatorsContext {
		return this.getRuleContext(0, HierarchyOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHierarchyFunctions) {
			listener.enterHierarchyFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHierarchyFunctions) {
			listener.exitHierarchyFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHierarchyFunctions) {
			return visitor.visitHierarchyFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValidationFunctionsContext extends FunctionsContext {
	public validationOperators(): ValidationOperatorsContext {
		return this.getRuleContext(0, ValidationOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidationFunctions) {
			listener.enterValidationFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidationFunctions) {
			listener.exitValidationFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidationFunctions) {
			return visitor.visitValidationFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConditionalFunctionsContext extends FunctionsContext {
	public conditionalOperators(): ConditionalOperatorsContext {
		return this.getRuleContext(0, ConditionalOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterConditionalFunctions) {
			listener.enterConditionalFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitConditionalFunctions) {
			listener.exitConditionalFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitConditionalFunctions) {
			return visitor.visitConditionalFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AggregateFunctionsContext extends FunctionsContext {
	public aggrOperatorsGrouping(): AggrOperatorsGroupingContext {
		return this.getRuleContext(0, AggrOperatorsGroupingContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggregateFunctions) {
			listener.enterAggregateFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggregateFunctions) {
			listener.exitAggregateFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggregateFunctions) {
			return visitor.visitAggregateFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AnalyticFunctionsContext extends FunctionsContext {
	public anFunction(): AnFunctionContext {
		return this.getRuleContext(0, AnFunctionContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAnalyticFunctions) {
			listener.enterAnalyticFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAnalyticFunctions) {
			listener.exitAnalyticFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAnalyticFunctions) {
			return visitor.visitAnalyticFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DistanceFunctionsContext extends FunctionsContext {
	public distanceOperators(): DistanceOperatorsContext {
		return this.getRuleContext(0, DistanceOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDistanceFunctions) {
			listener.enterDistanceFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDistanceFunctions) {
			listener.exitDistanceFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDistanceFunctions) {
			return visitor.visitDistanceFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatasetClauseContext extends ParserRuleContext {
	public renameClause(): RenameClauseContext | undefined {
		return this.tryGetRuleContext(0, RenameClauseContext);
	}
	public aggrClause(): AggrClauseContext | undefined {
		return this.tryGetRuleContext(0, AggrClauseContext);
	}
	public filterClause(): FilterClauseContext | undefined {
		return this.tryGetRuleContext(0, FilterClauseContext);
	}
	public calcClause(): CalcClauseContext | undefined {
		return this.tryGetRuleContext(0, CalcClauseContext);
	}
	public keepOrDropClause(): KeepOrDropClauseContext | undefined {
		return this.tryGetRuleContext(0, KeepOrDropClauseContext);
	}
	public pivotOrUnpivotClause(): PivotOrUnpivotClauseContext | undefined {
		return this.tryGetRuleContext(0, PivotOrUnpivotClauseContext);
	}
	public customPivotClause(): CustomPivotClauseContext | undefined {
		return this.tryGetRuleContext(0, CustomPivotClauseContext);
	}
	public subspaceClause(): SubspaceClauseContext | undefined {
		return this.tryGetRuleContext(0, SubspaceClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_datasetClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDatasetClause) {
			listener.enterDatasetClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDatasetClause) {
			listener.exitDatasetClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDatasetClause) {
			return visitor.visitDatasetClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RenameClauseContext extends ParserRuleContext {
	public RENAME(): TerminalNode { return this.getToken(VtlParser.RENAME, 0); }
	public renameClauseItem(): RenameClauseItemContext[];
	public renameClauseItem(i: number): RenameClauseItemContext;
	public renameClauseItem(i?: number): RenameClauseItemContext | RenameClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RenameClauseItemContext);
		} else {
			return this.getRuleContext(i, RenameClauseItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_renameClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRenameClause) {
			listener.enterRenameClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRenameClause) {
			listener.exitRenameClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRenameClause) {
			return visitor.visitRenameClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggrClauseContext extends ParserRuleContext {
	public AGGREGATE(): TerminalNode { return this.getToken(VtlParser.AGGREGATE, 0); }
	public aggregateClause(): AggregateClauseContext {
		return this.getRuleContext(0, AggregateClauseContext);
	}
	public groupingClause(): GroupingClauseContext | undefined {
		return this.tryGetRuleContext(0, GroupingClauseContext);
	}
	public havingClause(): HavingClauseContext | undefined {
		return this.tryGetRuleContext(0, HavingClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_aggrClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggrClause) {
			listener.enterAggrClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggrClause) {
			listener.exitAggrClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggrClause) {
			return visitor.visitAggrClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterClauseContext extends ParserRuleContext {
	public FILTER(): TerminalNode { return this.getToken(VtlParser.FILTER, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_filterClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterFilterClause) {
			listener.enterFilterClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitFilterClause) {
			listener.exitFilterClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitFilterClause) {
			return visitor.visitFilterClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalcClauseContext extends ParserRuleContext {
	public CALC(): TerminalNode { return this.getToken(VtlParser.CALC, 0); }
	public calcClauseItem(): CalcClauseItemContext[];
	public calcClauseItem(i: number): CalcClauseItemContext;
	public calcClauseItem(i?: number): CalcClauseItemContext | CalcClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CalcClauseItemContext);
		} else {
			return this.getRuleContext(i, CalcClauseItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_calcClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCalcClause) {
			listener.enterCalcClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCalcClause) {
			listener.exitCalcClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCalcClause) {
			return visitor.visitCalcClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeepOrDropClauseContext extends ParserRuleContext {
	public _op!: Token;
	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}
	public KEEP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.KEEP, 0); }
	public DROP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DROP, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_keepOrDropClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterKeepOrDropClause) {
			listener.enterKeepOrDropClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitKeepOrDropClause) {
			listener.exitKeepOrDropClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitKeepOrDropClause) {
			return visitor.visitKeepOrDropClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PivotOrUnpivotClauseContext extends ParserRuleContext {
	public _op!: Token;
	public _id_!: ComponentIDContext;
	public _mea!: ComponentIDContext;
	public COMMA(): TerminalNode { return this.getToken(VtlParser.COMMA, 0); }
	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}
	public PIVOT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.PIVOT, 0); }
	public UNPIVOT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.UNPIVOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_pivotOrUnpivotClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterPivotOrUnpivotClause) {
			listener.enterPivotOrUnpivotClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitPivotOrUnpivotClause) {
			listener.exitPivotOrUnpivotClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitPivotOrUnpivotClause) {
			return visitor.visitPivotOrUnpivotClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CustomPivotClauseContext extends ParserRuleContext {
	public _id_!: ComponentIDContext;
	public _mea!: ComponentIDContext;
	public CUSTOMPIVOT(): TerminalNode { return this.getToken(VtlParser.CUSTOMPIVOT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	public IN(): TerminalNode { return this.getToken(VtlParser.IN, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_customPivotClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCustomPivotClause) {
			listener.enterCustomPivotClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCustomPivotClause) {
			listener.exitCustomPivotClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCustomPivotClause) {
			return visitor.visitCustomPivotClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubspaceClauseContext extends ParserRuleContext {
	public SUBSPACE(): TerminalNode { return this.getToken(VtlParser.SUBSPACE, 0); }
	public subspaceClauseItem(): SubspaceClauseItemContext[];
	public subspaceClauseItem(i: number): SubspaceClauseItemContext;
	public subspaceClauseItem(i?: number): SubspaceClauseItemContext | SubspaceClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubspaceClauseItemContext);
		} else {
			return this.getRuleContext(i, SubspaceClauseItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_subspaceClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSubspaceClause) {
			listener.enterSubspaceClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSubspaceClause) {
			listener.exitSubspaceClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSubspaceClause) {
			return visitor.visitSubspaceClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinOperators; }
	public copyFrom(ctx: JoinOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class JoinExprContext extends JoinOperatorsContext {
	public _joinKeyword!: Token;
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public joinClause(): JoinClauseContext | undefined {
		return this.tryGetRuleContext(0, JoinClauseContext);
	}
	public joinBody(): JoinBodyContext {
		return this.getRuleContext(0, JoinBodyContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public INNER_JOIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INNER_JOIN, 0); }
	public LEFT_JOIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LEFT_JOIN, 0); }
	public joinClauseWithoutUsing(): JoinClauseWithoutUsingContext | undefined {
		return this.tryGetRuleContext(0, JoinClauseWithoutUsingContext);
	}
	public FULL_JOIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FULL_JOIN, 0); }
	public CROSS_JOIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CROSS_JOIN, 0); }
	constructor(ctx: JoinOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinExpr) {
			listener.enterJoinExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinExpr) {
			listener.exitJoinExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinExpr) {
			return visitor.visitJoinExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_defOperators; }
	public copyFrom(ctx: DefOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class DefOperatorContext extends DefOperatorsContext {
	public DEFINE(): TerminalNode { return this.getToken(VtlParser.DEFINE, 0); }
	public OPERATOR(): TerminalNode[];
	public OPERATOR(i: number): TerminalNode;
	public OPERATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.OPERATOR);
		} else {
			return this.getToken(VtlParser.OPERATOR, i);
		}
	}
	public operatorID(): OperatorIDContext {
		return this.getRuleContext(0, OperatorIDContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public IS(): TerminalNode { return this.getToken(VtlParser.IS, 0); }
	public END(): TerminalNode { return this.getToken(VtlParser.END, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public parameterItem(): ParameterItemContext[];
	public parameterItem(i: number): ParameterItemContext;
	public parameterItem(i?: number): ParameterItemContext | ParameterItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterItemContext);
		} else {
			return this.getRuleContext(i, ParameterItemContext);
		}
	}
	public RETURNS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RETURNS, 0); }
	public outputParameterType(): OutputParameterTypeContext | undefined {
		return this.tryGetRuleContext(0, OutputParameterTypeContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(ctx: DefOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDefOperator) {
			listener.enterDefOperator(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDefOperator) {
			listener.exitDefOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDefOperator) {
			return visitor.visitDefOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DefDatapointRulesetContext extends DefOperatorsContext {
	public DEFINE(): TerminalNode { return this.getToken(VtlParser.DEFINE, 0); }
	public DATAPOINT(): TerminalNode[];
	public DATAPOINT(i: number): TerminalNode;
	public DATAPOINT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.DATAPOINT);
		} else {
			return this.getToken(VtlParser.DATAPOINT, i);
		}
	}
	public RULESET(): TerminalNode[];
	public RULESET(i: number): TerminalNode;
	public RULESET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RULESET);
		} else {
			return this.getToken(VtlParser.RULESET, i);
		}
	}
	public rulesetID(): RulesetIDContext {
		return this.getRuleContext(0, RulesetIDContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public rulesetSignature(): RulesetSignatureContext {
		return this.getRuleContext(0, RulesetSignatureContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public IS(): TerminalNode { return this.getToken(VtlParser.IS, 0); }
	public ruleClauseDatapoint(): RuleClauseDatapointContext {
		return this.getRuleContext(0, RuleClauseDatapointContext);
	}
	public END(): TerminalNode { return this.getToken(VtlParser.END, 0); }
	constructor(ctx: DefOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDefDatapointRuleset) {
			listener.enterDefDatapointRuleset(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDefDatapointRuleset) {
			listener.exitDefDatapointRuleset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDefDatapointRuleset) {
			return visitor.visitDefDatapointRuleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DefHierarchicalContext extends DefOperatorsContext {
	public DEFINE(): TerminalNode { return this.getToken(VtlParser.DEFINE, 0); }
	public HIERARCHICAL(): TerminalNode[];
	public HIERARCHICAL(i: number): TerminalNode;
	public HIERARCHICAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.HIERARCHICAL);
		} else {
			return this.getToken(VtlParser.HIERARCHICAL, i);
		}
	}
	public RULESET(): TerminalNode[];
	public RULESET(i: number): TerminalNode;
	public RULESET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RULESET);
		} else {
			return this.getToken(VtlParser.RULESET, i);
		}
	}
	public rulesetID(): RulesetIDContext {
		return this.getRuleContext(0, RulesetIDContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public hierRuleSignature(): HierRuleSignatureContext {
		return this.getRuleContext(0, HierRuleSignatureContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public IS(): TerminalNode { return this.getToken(VtlParser.IS, 0); }
	public ruleClauseHierarchical(): RuleClauseHierarchicalContext {
		return this.getRuleContext(0, RuleClauseHierarchicalContext);
	}
	public END(): TerminalNode { return this.getToken(VtlParser.END, 0); }
	constructor(ctx: DefOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDefHierarchical) {
			listener.enterDefHierarchical(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDefHierarchical) {
			listener.exitDefHierarchical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDefHierarchical) {
			return visitor.visitDefHierarchical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_genericOperators; }
	public copyFrom(ctx: GenericOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class CallDatasetContext extends GenericOperatorsContext {
	public operatorID(): OperatorIDContext {
		return this.getRuleContext(0, OperatorIDContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(ctx: GenericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCallDataset) {
			listener.enterCallDataset(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCallDataset) {
			listener.exitCallDataset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCallDataset) {
			return visitor.visitCallDataset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EvalAtomContext extends GenericOperatorsContext {
	public EVAL(): TerminalNode { return this.getToken(VtlParser.EVAL, 0); }
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.LPAREN);
		} else {
			return this.getToken(VtlParser.LPAREN, i);
		}
	}
	public routineName(): RoutineNameContext {
		return this.getRuleContext(0, RoutineNameContext);
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RPAREN);
		} else {
			return this.getToken(VtlParser.RPAREN, i);
		}
	}
	public varID(): VarIDContext[];
	public varID(i: number): VarIDContext;
	public varID(i?: number): VarIDContext | VarIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarIDContext);
		} else {
			return this.getRuleContext(i, VarIDContext);
		}
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	public LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LANGUAGE, 0); }
	public STRING_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STRING_CONSTANT, 0); }
	public RETURNS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RETURNS, 0); }
	public datasetType(): DatasetTypeContext | undefined {
		return this.tryGetRuleContext(0, DatasetTypeContext);
	}
	constructor(ctx: GenericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterEvalAtom) {
			listener.enterEvalAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitEvalAtom) {
			listener.exitEvalAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitEvalAtom) {
			return visitor.visitEvalAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastExprDatasetContext extends GenericOperatorsContext {
	public CAST(): TerminalNode { return this.getToken(VtlParser.CAST, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public basicScalarType(): BasicScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, BasicScalarTypeContext);
	}
	public valueDomainName(): ValueDomainNameContext | undefined {
		return this.tryGetRuleContext(0, ValueDomainNameContext);
	}
	public STRING_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STRING_CONSTANT, 0); }
	constructor(ctx: GenericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCastExprDataset) {
			listener.enterCastExprDataset(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCastExprDataset) {
			listener.exitCastExprDataset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCastExprDataset) {
			return visitor.visitCastExprDataset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public varID(): VarIDContext | undefined {
		return this.tryGetRuleContext(0, VarIDContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.OPTIONAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_parameter; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_stringOperators; }
	public copyFrom(ctx: StringOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryStringFunctionContext extends StringOperatorsContext {
	public _op!: Token;
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public TRIM(): TerminalNode | undefined { return this.tryGetToken(VtlParser.TRIM, 0); }
	public LTRIM(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LTRIM, 0); }
	public RTRIM(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RTRIM, 0); }
	public UCASE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.UCASE, 0); }
	public LCASE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LCASE, 0); }
	public LEN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LEN, 0); }
	constructor(ctx: StringOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnaryStringFunction) {
			listener.enterUnaryStringFunction(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnaryStringFunction) {
			listener.exitUnaryStringFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnaryStringFunction) {
			return visitor.visitUnaryStringFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubstrAtomContext extends StringOperatorsContext {
	public _startParameter!: OptionalExprContext;
	public _endParameter!: OptionalExprContext;
	public SUBSTR(): TerminalNode { return this.getToken(VtlParser.SUBSTR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	public optionalExpr(): OptionalExprContext[];
	public optionalExpr(i: number): OptionalExprContext;
	public optionalExpr(i?: number): OptionalExprContext | OptionalExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalExprContext);
		} else {
			return this.getRuleContext(i, OptionalExprContext);
		}
	}
	constructor(ctx: StringOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSubstrAtom) {
			listener.enterSubstrAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSubstrAtom) {
			listener.exitSubstrAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSubstrAtom) {
			return visitor.visitSubstrAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReplaceAtomContext extends StringOperatorsContext {
	public _param!: ExprContext;
	public REPLACE(): TerminalNode { return this.getToken(VtlParser.REPLACE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public optionalExpr(): OptionalExprContext | undefined {
		return this.tryGetRuleContext(0, OptionalExprContext);
	}
	constructor(ctx: StringOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterReplaceAtom) {
			listener.enterReplaceAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitReplaceAtom) {
			listener.exitReplaceAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitReplaceAtom) {
			return visitor.visitReplaceAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstrAtomContext extends StringOperatorsContext {
	public _pattern!: ExprContext;
	public _startParameter!: OptionalExprContext;
	public _occurrenceParameter!: OptionalExprContext;
	public INSTR(): TerminalNode { return this.getToken(VtlParser.INSTR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public optionalExpr(): OptionalExprContext[];
	public optionalExpr(i: number): OptionalExprContext;
	public optionalExpr(i?: number): OptionalExprContext | OptionalExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalExprContext);
		} else {
			return this.getRuleContext(i, OptionalExprContext);
		}
	}
	constructor(ctx: StringOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterInstrAtom) {
			listener.enterInstrAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitInstrAtom) {
			listener.exitInstrAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitInstrAtom) {
			return visitor.visitInstrAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_numericOperators; }
	public copyFrom(ctx: NumericOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryNumericContext extends NumericOperatorsContext {
	public _op!: Token;
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public CEIL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CEIL, 0); }
	public FLOOR(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FLOOR, 0); }
	public ABS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ABS, 0); }
	public EXP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.EXP, 0); }
	public LN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LN, 0); }
	public SQRT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.SQRT, 0); }
	constructor(ctx: NumericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnaryNumeric) {
			listener.enterUnaryNumeric(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnaryNumeric) {
			listener.exitUnaryNumeric(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnaryNumeric) {
			return visitor.visitUnaryNumeric(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryWithOptionalNumericContext extends NumericOperatorsContext {
	public _op!: Token;
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public ROUND(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ROUND, 0); }
	public TRUNC(): TerminalNode | undefined { return this.tryGetToken(VtlParser.TRUNC, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COMMA, 0); }
	public optionalExpr(): OptionalExprContext | undefined {
		return this.tryGetRuleContext(0, OptionalExprContext);
	}
	constructor(ctx: NumericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnaryWithOptionalNumeric) {
			listener.enterUnaryWithOptionalNumeric(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnaryWithOptionalNumeric) {
			listener.exitUnaryWithOptionalNumeric(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnaryWithOptionalNumeric) {
			return visitor.visitUnaryWithOptionalNumeric(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryNumericContext extends NumericOperatorsContext {
	public _op!: Token;
	public _left!: ExprContext;
	public _right!: ExprContext;
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public COMMA(): TerminalNode { return this.getToken(VtlParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MOD(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MOD, 0); }
	public POWER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.POWER, 0); }
	public LOG(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LOG, 0); }
	constructor(ctx: NumericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterBinaryNumeric) {
			listener.enterBinaryNumeric(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitBinaryNumeric) {
			listener.exitBinaryNumeric(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitBinaryNumeric) {
			return visitor.visitBinaryNumeric(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_comparisonOperators; }
	public copyFrom(ctx: ComparisonOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class BetweenAtomContext extends ComparisonOperatorsContext {
	public _op!: ExprContext;
	public _from_!: ExprContext;
	public _to_!: ExprContext;
	public BETWEEN(): TerminalNode { return this.getToken(VtlParser.BETWEEN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ComparisonOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterBetweenAtom) {
			listener.enterBetweenAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitBetweenAtom) {
			listener.exitBetweenAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitBetweenAtom) {
			return visitor.visitBetweenAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CharsetMatchAtomContext extends ComparisonOperatorsContext {
	public _op!: ExprContext;
	public _pattern!: ExprContext;
	public CHARSET_MATCH(): TerminalNode { return this.getToken(VtlParser.CHARSET_MATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public COMMA(): TerminalNode { return this.getToken(VtlParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ComparisonOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCharsetMatchAtom) {
			listener.enterCharsetMatchAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCharsetMatchAtom) {
			listener.exitCharsetMatchAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCharsetMatchAtom) {
			return visitor.visitCharsetMatchAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsNullAtomContext extends ComparisonOperatorsContext {
	public ISNULL(): TerminalNode { return this.getToken(VtlParser.ISNULL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	constructor(ctx: ComparisonOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterIsNullAtom) {
			listener.enterIsNullAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitIsNullAtom) {
			listener.exitIsNullAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitIsNullAtom) {
			return visitor.visitIsNullAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistInAtomContext extends ComparisonOperatorsContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	public EXISTS_IN(): TerminalNode { return this.getToken(VtlParser.EXISTS_IN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public retainType(): RetainTypeContext | undefined {
		return this.tryGetRuleContext(0, RetainTypeContext);
	}
	constructor(ctx: ComparisonOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterExistInAtom) {
			listener.enterExistInAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitExistInAtom) {
			listener.exitExistInAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitExistInAtom) {
			return visitor.visitExistInAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_timeOperators; }
	public copyFrom(ctx: TimeOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class PeriodAtomContext extends TimeOperatorsContext {
	public PERIOD_INDICATOR(): TerminalNode { return this.getToken(VtlParser.PERIOD_INDICATOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: TimeOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterPeriodAtom) {
			listener.enterPeriodAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitPeriodAtom) {
			listener.exitPeriodAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitPeriodAtom) {
			return visitor.visitPeriodAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FillTimeAtomContext extends TimeOperatorsContext {
	public FILL_TIME_SERIES(): TerminalNode { return this.getToken(VtlParser.FILL_TIME_SERIES, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COMMA, 0); }
	public SINGLE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.SINGLE, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL, 0); }
	constructor(ctx: TimeOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterFillTimeAtom) {
			listener.enterFillTimeAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitFillTimeAtom) {
			listener.exitFillTimeAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitFillTimeAtom) {
			return visitor.visitFillTimeAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FlowAtomContext extends TimeOperatorsContext {
	public _op!: Token;
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public FLOW_TO_STOCK(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FLOW_TO_STOCK, 0); }
	public STOCK_TO_FLOW(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STOCK_TO_FLOW, 0); }
	constructor(ctx: TimeOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterFlowAtom) {
			listener.enterFlowAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitFlowAtom) {
			listener.exitFlowAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitFlowAtom) {
			return visitor.visitFlowAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeShiftAtomContext extends TimeOperatorsContext {
	public TIMESHIFT(): TerminalNode { return this.getToken(VtlParser.TIMESHIFT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public COMMA(): TerminalNode { return this.getToken(VtlParser.COMMA, 0); }
	public signedInteger(): SignedIntegerContext {
		return this.getRuleContext(0, SignedIntegerContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	constructor(ctx: TimeOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTimeShiftAtom) {
			listener.enterTimeShiftAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTimeShiftAtom) {
			listener.exitTimeShiftAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTimeShiftAtom) {
			return visitor.visitTimeShiftAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeAggAtomContext extends TimeOperatorsContext {
	public _periodIndTo!: Token;
	public _periodIndFrom!: Token;
	public _op!: OptionalExprContext;
	public TIME_AGG(): TerminalNode { return this.getToken(VtlParser.TIME_AGG, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public STRING_CONSTANT(): TerminalNode[];
	public STRING_CONSTANT(i: number): TerminalNode;
	public STRING_CONSTANT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.STRING_CONSTANT);
		} else {
			return this.getToken(VtlParser.STRING_CONSTANT, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	public optionalExpr(): OptionalExprContext | undefined {
		return this.tryGetRuleContext(0, OptionalExprContext);
	}
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FIRST, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LAST, 0); }
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.OPTIONAL, 0); }
	constructor(ctx: TimeOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterTimeAggAtom) {
			listener.enterTimeAggAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitTimeAggAtom) {
			listener.exitTimeAggAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitTimeAggAtom) {
			return visitor.visitTimeAggAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentDateAtomContext extends TimeOperatorsContext {
	public CURRENT_DATE(): TerminalNode { return this.getToken(VtlParser.CURRENT_DATE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	constructor(ctx: TimeOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCurrentDateAtom) {
			listener.enterCurrentDateAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCurrentDateAtom) {
			listener.exitCurrentDateAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCurrentDateAtom) {
			return visitor.visitCurrentDateAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_setOperators; }
	public copyFrom(ctx: SetOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class UnionAtomContext extends SetOperatorsContext {
	public _left!: ExprContext;
	public UNION(): TerminalNode { return this.getToken(VtlParser.UNION, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(ctx: SetOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterUnionAtom) {
			listener.enterUnionAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitUnionAtom) {
			listener.exitUnionAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitUnionAtom) {
			return visitor.visitUnionAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntersectAtomContext extends SetOperatorsContext {
	public _left!: ExprContext;
	public INTERSECT(): TerminalNode { return this.getToken(VtlParser.INTERSECT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(ctx: SetOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterIntersectAtom) {
			listener.enterIntersectAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitIntersectAtom) {
			listener.exitIntersectAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitIntersectAtom) {
			return visitor.visitIntersectAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetOrSYmDiffAtomContext extends SetOperatorsContext {
	public _op!: Token;
	public _left!: ExprContext;
	public _right!: ExprContext;
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public COMMA(): TerminalNode { return this.getToken(VtlParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public SETDIFF(): TerminalNode | undefined { return this.tryGetToken(VtlParser.SETDIFF, 0); }
	public SYMDIFF(): TerminalNode | undefined { return this.tryGetToken(VtlParser.SYMDIFF, 0); }
	constructor(ctx: SetOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSetOrSYmDiffAtom) {
			listener.enterSetOrSYmDiffAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSetOrSYmDiffAtom) {
			listener.exitSetOrSYmDiffAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSetOrSYmDiffAtom) {
			return visitor.visitSetOrSYmDiffAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HierarchyOperatorsContext extends ParserRuleContext {
	public _op!: ExprContext;
	public _hrName!: Token;
	public _ruleComponent!: ComponentIDContext;
	public HIERARCHY(): TerminalNode { return this.getToken(VtlParser.HIERARCHY, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public COMMA(): TerminalNode { return this.getToken(VtlParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	public conditionClause(): ConditionClauseContext | undefined {
		return this.tryGetRuleContext(0, ConditionClauseContext);
	}
	public RULE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RULE, 0); }
	public validationMode(): ValidationModeContext | undefined {
		return this.tryGetRuleContext(0, ValidationModeContext);
	}
	public inputModeHierarchy(): InputModeHierarchyContext | undefined {
		return this.tryGetRuleContext(0, InputModeHierarchyContext);
	}
	public outputModeHierarchy(): OutputModeHierarchyContext | undefined {
		return this.tryGetRuleContext(0, OutputModeHierarchyContext);
	}
	public componentID(): ComponentIDContext | undefined {
		return this.tryGetRuleContext(0, ComponentIDContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_hierarchyOperators; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHierarchyOperators) {
			listener.enterHierarchyOperators(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHierarchyOperators) {
			listener.exitHierarchyOperators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHierarchyOperators) {
			return visitor.visitHierarchyOperators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValidationOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_validationOperators; }
	public copyFrom(ctx: ValidationOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class ValidateDPrulesetContext extends ValidationOperatorsContext {
	public _op!: ExprContext;
	public _dpName!: Token;
	public CHECK_DATAPOINT(): TerminalNode { return this.getToken(VtlParser.CHECK_DATAPOINT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	public COMPONENTS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COMPONENTS, 0); }
	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}
	public validationOutput(): ValidationOutputContext | undefined {
		return this.tryGetRuleContext(0, ValidationOutputContext);
	}
	constructor(ctx: ValidationOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidateDPruleset) {
			listener.enterValidateDPruleset(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidateDPruleset) {
			listener.exitValidateDPruleset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidateDPruleset) {
			return visitor.visitValidateDPruleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValidateHRrulesetContext extends ValidationOperatorsContext {
	public _op!: ExprContext;
	public _hrName!: Token;
	public CHECK_HIERARCHY(): TerminalNode { return this.getToken(VtlParser.CHECK_HIERARCHY, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public COMMA(): TerminalNode { return this.getToken(VtlParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	public conditionClause(): ConditionClauseContext | undefined {
		return this.tryGetRuleContext(0, ConditionClauseContext);
	}
	public RULE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RULE, 0); }
	public componentID(): ComponentIDContext | undefined {
		return this.tryGetRuleContext(0, ComponentIDContext);
	}
	public validationMode(): ValidationModeContext | undefined {
		return this.tryGetRuleContext(0, ValidationModeContext);
	}
	public inputMode(): InputModeContext | undefined {
		return this.tryGetRuleContext(0, InputModeContext);
	}
	public validationOutput(): ValidationOutputContext | undefined {
		return this.tryGetRuleContext(0, ValidationOutputContext);
	}
	constructor(ctx: ValidationOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidateHRruleset) {
			listener.enterValidateHRruleset(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidateHRruleset) {
			listener.exitValidateHRruleset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidateHRruleset) {
			return visitor.visitValidateHRruleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValidationSimpleContext extends ValidationOperatorsContext {
	public _op!: ExprContext;
	public _codeErr!: ErCodeContext;
	public _levelCode!: ErLevelContext;
	public _output!: Token;
	public CHECK(): TerminalNode { return this.getToken(VtlParser.CHECK, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public imbalanceExpr(): ImbalanceExprContext | undefined {
		return this.tryGetRuleContext(0, ImbalanceExprContext);
	}
	public erCode(): ErCodeContext | undefined {
		return this.tryGetRuleContext(0, ErCodeContext);
	}
	public erLevel(): ErLevelContext | undefined {
		return this.tryGetRuleContext(0, ErLevelContext);
	}
	public INVALID(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INVALID, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL, 0); }
	constructor(ctx: ValidationOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidationSimple) {
			listener.enterValidationSimple(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidationSimple) {
			listener.exitValidationSimple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidationSimple) {
			return visitor.visitValidationSimple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_conditionalOperators; }
	public copyFrom(ctx: ConditionalOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class NvlAtomContext extends ConditionalOperatorsContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	public NVL(): TerminalNode { return this.getToken(VtlParser.NVL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public COMMA(): TerminalNode { return this.getToken(VtlParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ConditionalOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterNvlAtom) {
			listener.enterNvlAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitNvlAtom) {
			listener.exitNvlAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitNvlAtom) {
			return visitor.visitNvlAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggrOperatorsGroupingContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_aggrOperatorsGrouping; }
	public copyFrom(ctx: AggrOperatorsGroupingContext): void {
		super.copyFrom(ctx);
	}
}
export class AggrDatasetContext extends AggrOperatorsGroupingContext {
	public _op!: Token;
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(VtlParser.SUM, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(VtlParser.AVG, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COUNT, 0); }
	public MEDIAN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MEDIAN, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MAX, 0); }
	public STDDEV_POP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STDDEV_POP, 0); }
	public STDDEV_SAMP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STDDEV_SAMP, 0); }
	public VAR_POP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VAR_POP, 0); }
	public VAR_SAMP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VAR_SAMP, 0); }
	public groupingClause(): GroupingClauseContext | undefined {
		return this.tryGetRuleContext(0, GroupingClauseContext);
	}
	public havingClause(): HavingClauseContext | undefined {
		return this.tryGetRuleContext(0, HavingClauseContext);
	}
	constructor(ctx: AggrOperatorsGroupingContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggrDataset) {
			listener.enterAggrDataset(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggrDataset) {
			listener.exitAggrDataset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggrDataset) {
			return visitor.visitAggrDataset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnFunctionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_anFunction; }
	public copyFrom(ctx: AnFunctionContext): void {
		super.copyFrom(ctx);
	}
}
export class AnSimpleFunctionContext extends AnFunctionContext {
	public _op!: Token;
	public _partition!: PartitionByClauseContext;
	public _orderBy!: OrderByClauseContext;
	public _windowing!: WindowingClauseContext;
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.LPAREN);
		} else {
			return this.getToken(VtlParser.LPAREN, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public OVER(): TerminalNode { return this.getToken(VtlParser.OVER, 0); }
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RPAREN);
		} else {
			return this.getToken(VtlParser.RPAREN, i);
		}
	}
	public SUM(): TerminalNode | undefined { return this.tryGetToken(VtlParser.SUM, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(VtlParser.AVG, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COUNT, 0); }
	public MEDIAN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MEDIAN, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MAX, 0); }
	public STDDEV_POP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STDDEV_POP, 0); }
	public STDDEV_SAMP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STDDEV_SAMP, 0); }
	public VAR_POP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VAR_POP, 0); }
	public VAR_SAMP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VAR_SAMP, 0); }
	public FIRST_VALUE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FIRST_VALUE, 0); }
	public LAST_VALUE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LAST_VALUE, 0); }
	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}
	public orderByClause(): OrderByClauseContext | undefined {
		return this.tryGetRuleContext(0, OrderByClauseContext);
	}
	public windowingClause(): WindowingClauseContext | undefined {
		return this.tryGetRuleContext(0, WindowingClauseContext);
	}
	constructor(ctx: AnFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAnSimpleFunction) {
			listener.enterAnSimpleFunction(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAnSimpleFunction) {
			listener.exitAnSimpleFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAnSimpleFunction) {
			return visitor.visitAnSimpleFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LagOrLeadAnContext extends AnFunctionContext {
	public _op!: Token;
	public _offet!: SignedIntegerContext;
	public _defaultValue!: ConstantContext;
	public _partition!: PartitionByClauseContext;
	public _orderBy!: OrderByClauseContext;
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.LPAREN);
		} else {
			return this.getToken(VtlParser.LPAREN, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public OVER(): TerminalNode { return this.getToken(VtlParser.OVER, 0); }
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RPAREN);
		} else {
			return this.getToken(VtlParser.RPAREN, i);
		}
	}
	public LAG(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LAG, 0); }
	public LEAD(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LEAD, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COMMA, 0); }
	public orderByClause(): OrderByClauseContext | undefined {
		return this.tryGetRuleContext(0, OrderByClauseContext);
	}
	public signedInteger(): SignedIntegerContext | undefined {
		return this.tryGetRuleContext(0, SignedIntegerContext);
	}
	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	constructor(ctx: AnFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterLagOrLeadAn) {
			listener.enterLagOrLeadAn(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitLagOrLeadAn) {
			listener.exitLagOrLeadAn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitLagOrLeadAn) {
			return visitor.visitLagOrLeadAn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RatioToReportAnContext extends AnFunctionContext {
	public _op!: Token;
	public _partition!: PartitionByClauseContext;
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.LPAREN);
		} else {
			return this.getToken(VtlParser.LPAREN, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public OVER(): TerminalNode { return this.getToken(VtlParser.OVER, 0); }
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.RPAREN);
		} else {
			return this.getToken(VtlParser.RPAREN, i);
		}
	}
	public RATIO_TO_REPORT(): TerminalNode { return this.getToken(VtlParser.RATIO_TO_REPORT, 0); }
	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}
	constructor(ctx: AnFunctionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRatioToReportAn) {
			listener.enterRatioToReportAn(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRatioToReportAn) {
			listener.exitRatioToReportAn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRatioToReportAn) {
			return visitor.visitRatioToReportAn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DistanceOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_distanceOperators; }
	public copyFrom(ctx: DistanceOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class LevenshteinAtomContext extends DistanceOperatorsContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	public LEVENSHTEIN(): TerminalNode { return this.getToken(VtlParser.LEVENSHTEIN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VtlParser.LPAREN, 0); }
	public COMMA(): TerminalNode { return this.getToken(VtlParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VtlParser.RPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: DistanceOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterLevenshteinAtom) {
			listener.enterLevenshteinAtom(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitLevenshteinAtom) {
			listener.exitLevenshteinAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitLevenshteinAtom) {
			return visitor.visitLevenshteinAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RenameClauseItemContext extends ParserRuleContext {
	public _fromName!: ComponentIDContext;
	public _toName!: ComponentIDContext;
	public TO(): TerminalNode { return this.getToken(VtlParser.TO, 0); }
	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_renameClauseItem; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRenameClauseItem) {
			listener.enterRenameClauseItem(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRenameClauseItem) {
			listener.exitRenameClauseItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRenameClauseItem) {
			return visitor.visitRenameClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregateClauseContext extends ParserRuleContext {
	public aggrFunctionClause(): AggrFunctionClauseContext[];
	public aggrFunctionClause(i: number): AggrFunctionClauseContext;
	public aggrFunctionClause(i?: number): AggrFunctionClauseContext | AggrFunctionClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AggrFunctionClauseContext);
		} else {
			return this.getRuleContext(i, AggrFunctionClauseContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_aggregateClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggregateClause) {
			listener.enterAggregateClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggregateClause) {
			listener.exitAggregateClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggregateClause) {
			return visitor.visitAggregateClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggrFunctionClauseContext extends ParserRuleContext {
	public componentID(): ComponentIDContext {
		return this.getRuleContext(0, ComponentIDContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(VtlParser.ASSIGN, 0); }
	public aggrOperatorsGrouping(): AggrOperatorsGroupingContext {
		return this.getRuleContext(0, AggrOperatorsGroupingContext);
	}
	public componentRole(): ComponentRoleContext | undefined {
		return this.tryGetRuleContext(0, ComponentRoleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_aggrFunctionClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAggrFunctionClause) {
			listener.enterAggrFunctionClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAggrFunctionClause) {
			listener.exitAggrFunctionClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAggrFunctionClause) {
			return visitor.visitAggrFunctionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalcClauseItemContext extends ParserRuleContext {
	public componentID(): ComponentIDContext {
		return this.getRuleContext(0, ComponentIDContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(VtlParser.ASSIGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public componentRole(): ComponentRoleContext | undefined {
		return this.tryGetRuleContext(0, ComponentRoleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_calcClauseItem; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCalcClauseItem) {
			listener.enterCalcClauseItem(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCalcClauseItem) {
			listener.exitCalcClauseItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCalcClauseItem) {
			return visitor.visitCalcClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubspaceClauseItemContext extends ParserRuleContext {
	public componentID(): ComponentIDContext {
		return this.getRuleContext(0, ComponentIDContext);
	}
	public EQ(): TerminalNode { return this.getToken(VtlParser.EQ, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_subspaceClauseItem; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSubspaceClauseItem) {
			listener.enterSubspaceClauseItem(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSubspaceClauseItem) {
			listener.exitSubspaceClauseItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSubspaceClauseItem) {
			return visitor.visitSubspaceClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinClauseWithoutUsingContext extends ParserRuleContext {
	public joinClauseItem(): JoinClauseItemContext[];
	public joinClauseItem(i: number): JoinClauseItemContext;
	public joinClauseItem(i?: number): JoinClauseItemContext | JoinClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JoinClauseItemContext);
		} else {
			return this.getRuleContext(i, JoinClauseItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinClauseWithoutUsing; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinClauseWithoutUsing) {
			listener.enterJoinClauseWithoutUsing(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinClauseWithoutUsing) {
			listener.exitJoinClauseWithoutUsing(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinClauseWithoutUsing) {
			return visitor.visitJoinClauseWithoutUsing(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinClauseContext extends ParserRuleContext {
	public joinClauseItem(): JoinClauseItemContext[];
	public joinClauseItem(i: number): JoinClauseItemContext;
	public joinClauseItem(i?: number): JoinClauseItemContext | JoinClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JoinClauseItemContext);
		} else {
			return this.getRuleContext(i, JoinClauseItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	public USING(): TerminalNode | undefined { return this.tryGetToken(VtlParser.USING, 0); }
	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinClause) {
			listener.enterJoinClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinClause) {
			listener.exitJoinClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinClause) {
			return visitor.visitJoinClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinClauseItemContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.AS, 0); }
	public alias(): AliasContext | undefined {
		return this.tryGetRuleContext(0, AliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinClauseItem; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinClauseItem) {
			listener.enterJoinClauseItem(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinClauseItem) {
			listener.exitJoinClauseItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinClauseItem) {
			return visitor.visitJoinClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinBodyContext extends ParserRuleContext {
	public filterClause(): FilterClauseContext | undefined {
		return this.tryGetRuleContext(0, FilterClauseContext);
	}
	public calcClause(): CalcClauseContext | undefined {
		return this.tryGetRuleContext(0, CalcClauseContext);
	}
	public joinApplyClause(): JoinApplyClauseContext | undefined {
		return this.tryGetRuleContext(0, JoinApplyClauseContext);
	}
	public aggrClause(): AggrClauseContext | undefined {
		return this.tryGetRuleContext(0, AggrClauseContext);
	}
	public keepOrDropClause(): KeepOrDropClauseContext | undefined {
		return this.tryGetRuleContext(0, KeepOrDropClauseContext);
	}
	public renameClause(): RenameClauseContext | undefined {
		return this.tryGetRuleContext(0, RenameClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinBody; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinBody) {
			listener.enterJoinBody(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinBody) {
			listener.exitJoinBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinBody) {
			return visitor.visitJoinBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinApplyClauseContext extends ParserRuleContext {
	public APPLY(): TerminalNode { return this.getToken(VtlParser.APPLY, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_joinApplyClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterJoinApplyClause) {
			listener.enterJoinApplyClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitJoinApplyClause) {
			listener.exitJoinApplyClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitJoinApplyClause) {
			return visitor.visitJoinApplyClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionByClauseContext extends ParserRuleContext {
	public PARTITION(): TerminalNode { return this.getToken(VtlParser.PARTITION, 0); }
	public BY(): TerminalNode { return this.getToken(VtlParser.BY, 0); }
	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_partitionByClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterPartitionByClause) {
			listener.enterPartitionByClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitPartitionByClause) {
			listener.exitPartitionByClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitPartitionByClause) {
			return visitor.visitPartitionByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByClauseContext extends ParserRuleContext {
	public ORDER(): TerminalNode { return this.getToken(VtlParser.ORDER, 0); }
	public BY(): TerminalNode { return this.getToken(VtlParser.BY, 0); }
	public orderByItem(): OrderByItemContext[];
	public orderByItem(i: number): OrderByItemContext;
	public orderByItem(i?: number): OrderByItemContext | OrderByItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderByItemContext);
		} else {
			return this.getRuleContext(i, OrderByItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_orderByClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOrderByClause) {
			listener.enterOrderByClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOrderByClause) {
			listener.exitOrderByClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOrderByClause) {
			return visitor.visitOrderByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByItemContext extends ParserRuleContext {
	public componentID(): ComponentIDContext {
		return this.getRuleContext(0, ComponentIDContext);
	}
	public ASC(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_orderByItem; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOrderByItem) {
			listener.enterOrderByItem(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOrderByItem) {
			listener.exitOrderByItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOrderByItem) {
			return visitor.visitOrderByItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowingClauseContext extends ParserRuleContext {
	public _from_!: LimitClauseItemContext;
	public _to_!: LimitClauseItemContext;
	public BETWEEN(): TerminalNode { return this.getToken(VtlParser.BETWEEN, 0); }
	public AND(): TerminalNode { return this.getToken(VtlParser.AND, 0); }
	public limitClauseItem(): LimitClauseItemContext[];
	public limitClauseItem(i: number): LimitClauseItemContext;
	public limitClauseItem(i?: number): LimitClauseItemContext | LimitClauseItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LimitClauseItemContext);
		} else {
			return this.getRuleContext(i, LimitClauseItemContext);
		}
	}
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RANGE, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATA, 0); }
	public POINTS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.POINTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_windowingClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterWindowingClause) {
			listener.enterWindowingClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitWindowingClause) {
			listener.exitWindowingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitWindowingClause) {
			return visitor.visitWindowingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedIntegerContext extends ParserRuleContext {
	public INTEGER_CONSTANT(): TerminalNode { return this.getToken(VtlParser.INTEGER_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_signedInteger; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSignedInteger) {
			listener.enterSignedInteger(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSignedInteger) {
			listener.exitSignedInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSignedInteger) {
			return visitor.visitSignedInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitClauseItemContext extends ParserRuleContext {
	public INTEGER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INTEGER_CONSTANT, 0); }
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(VtlParser.PRECEDING, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(VtlParser.FOLLOWING, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CURRENT, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATA, 0); }
	public POINT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.POINT, 0); }
	public UNBOUNDED(): TerminalNode | undefined { return this.tryGetToken(VtlParser.UNBOUNDED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_limitClauseItem; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterLimitClauseItem) {
			listener.enterLimitClauseItem(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitLimitClauseItem) {
			listener.exitLimitClauseItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitLimitClauseItem) {
			return visitor.visitLimitClauseItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingClauseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_groupingClause; }
	public copyFrom(ctx: GroupingClauseContext): void {
		super.copyFrom(ctx);
	}
}
export class GroupByOrExceptContext extends GroupingClauseContext {
	public _op!: Token;
	public GROUP(): TerminalNode { return this.getToken(VtlParser.GROUP, 0); }
	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}
	public BY(): TerminalNode | undefined { return this.tryGetToken(VtlParser.BY, 0); }
	public EXCEPT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.EXCEPT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(ctx: GroupingClauseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterGroupByOrExcept) {
			listener.enterGroupByOrExcept(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitGroupByOrExcept) {
			listener.exitGroupByOrExcept(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitGroupByOrExcept) {
			return visitor.visitGroupByOrExcept(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupAllContext extends GroupingClauseContext {
	public GROUP(): TerminalNode { return this.getToken(VtlParser.GROUP, 0); }
	public ALL(): TerminalNode { return this.getToken(VtlParser.ALL, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: GroupingClauseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterGroupAll) {
			listener.enterGroupAll(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitGroupAll) {
			listener.exitGroupAll(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitGroupAll) {
			return visitor.visitGroupAll(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HavingClauseContext extends ParserRuleContext {
	public HAVING(): TerminalNode { return this.getToken(VtlParser.HAVING, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_havingClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHavingClause) {
			listener.enterHavingClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHavingClause) {
			listener.exitHavingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHavingClause) {
			return visitor.visitHavingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterItemContext extends ParserRuleContext {
	public varID(): VarIDContext {
		return this.getRuleContext(0, VarIDContext);
	}
	public inputParameterType(): InputParameterTypeContext {
		return this.getRuleContext(0, InputParameterTypeContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DEFAULT, 0); }
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_parameterItem; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterParameterItem) {
			listener.enterParameterItem(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitParameterItem) {
			listener.exitParameterItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitParameterItem) {
			return visitor.visitParameterItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputParameterTypeContext extends ParserRuleContext {
	public scalarType(): ScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeContext);
	}
	public datasetType(): DatasetTypeContext | undefined {
		return this.tryGetRuleContext(0, DatasetTypeContext);
	}
	public componentType(): ComponentTypeContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_outputParameterType; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOutputParameterType) {
			listener.enterOutputParameterType(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOutputParameterType) {
			listener.exitOutputParameterType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOutputParameterType) {
			return visitor.visitOutputParameterType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputParameterTypeComponentContext extends ParserRuleContext {
	public componentType(): ComponentTypeContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeContext);
	}
	public scalarType(): ScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_outputParameterTypeComponent; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOutputParameterTypeComponent) {
			listener.enterOutputParameterTypeComponent(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOutputParameterTypeComponent) {
			listener.exitOutputParameterTypeComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOutputParameterTypeComponent) {
			return visitor.visitOutputParameterTypeComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputParameterTypeContext extends ParserRuleContext {
	public scalarType(): ScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeContext);
	}
	public datasetType(): DatasetTypeContext | undefined {
		return this.tryGetRuleContext(0, DatasetTypeContext);
	}
	public scalarSetType(): ScalarSetTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarSetTypeContext);
	}
	public rulesetType(): RulesetTypeContext | undefined {
		return this.tryGetRuleContext(0, RulesetTypeContext);
	}
	public componentType(): ComponentTypeContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_inputParameterType; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterInputParameterType) {
			listener.enterInputParameterType(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitInputParameterType) {
			listener.exitInputParameterType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitInputParameterType) {
			return visitor.visitInputParameterType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulesetTypeContext extends ParserRuleContext {
	public RULESET(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RULESET, 0); }
	public dpRuleset(): DpRulesetContext | undefined {
		return this.tryGetRuleContext(0, DpRulesetContext);
	}
	public hrRuleset(): HrRulesetContext | undefined {
		return this.tryGetRuleContext(0, HrRulesetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_rulesetType; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRulesetType) {
			listener.enterRulesetType(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRulesetType) {
			listener.exitRulesetType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRulesetType) {
			return visitor.visitRulesetType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScalarTypeContext extends ParserRuleContext {
	public basicScalarType(): BasicScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, BasicScalarTypeContext);
	}
	public valueDomainName(): ValueDomainNameContext | undefined {
		return this.tryGetRuleContext(0, ValueDomainNameContext);
	}
	public scalarTypeConstraint(): ScalarTypeConstraintContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeConstraintContext);
	}
	public NULL_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NULL_CONSTANT, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_scalarType; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterScalarType) {
			listener.enterScalarType(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitScalarType) {
			listener.exitScalarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitScalarType) {
			return visitor.visitScalarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentTypeContext extends ParserRuleContext {
	public componentRole(): ComponentRoleContext {
		return this.getRuleContext(0, ComponentRoleContext);
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LT, 0); }
	public scalarType(): ScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeContext);
	}
	public MT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_componentType; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComponentType) {
			listener.enterComponentType(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComponentType) {
			listener.exitComponentType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComponentType) {
			return visitor.visitComponentType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatasetTypeContext extends ParserRuleContext {
	public DATASET(): TerminalNode { return this.getToken(VtlParser.DATASET, 0); }
	public GLPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.GLPAREN, 0); }
	public compConstraint(): CompConstraintContext[];
	public compConstraint(i: number): CompConstraintContext;
	public compConstraint(i?: number): CompConstraintContext | CompConstraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CompConstraintContext);
		} else {
			return this.getRuleContext(i, CompConstraintContext);
		}
	}
	public GRPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.GRPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_datasetType; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDatasetType) {
			listener.enterDatasetType(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDatasetType) {
			listener.exitDatasetType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDatasetType) {
			return visitor.visitDatasetType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScalarSetTypeContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(VtlParser.SET, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LT, 0); }
	public scalarType(): ScalarTypeContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeContext);
	}
	public MT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_scalarSetType; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterScalarSetType) {
			listener.enterScalarSetType(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitScalarSetType) {
			listener.exitScalarSetType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitScalarSetType) {
			return visitor.visitScalarSetType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DpRulesetContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_dpRuleset; }
	public copyFrom(ctx: DpRulesetContext): void {
		super.copyFrom(ctx);
	}
}
export class DataPointContext extends DpRulesetContext {
	public DATAPOINT(): TerminalNode { return this.getToken(VtlParser.DATAPOINT, 0); }
	constructor(ctx: DpRulesetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDataPoint) {
			listener.enterDataPoint(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDataPoint) {
			listener.exitDataPoint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDataPoint) {
			return visitor.visitDataPoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataPointVdContext extends DpRulesetContext {
	public DATAPOINT_ON_VD(): TerminalNode { return this.getToken(VtlParser.DATAPOINT_ON_VD, 0); }
	public GLPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.GLPAREN, 0); }
	public valueDomainName(): ValueDomainNameContext[];
	public valueDomainName(i: number): ValueDomainNameContext;
	public valueDomainName(i?: number): ValueDomainNameContext | ValueDomainNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueDomainNameContext);
		} else {
			return this.getRuleContext(i, ValueDomainNameContext);
		}
	}
	public GRPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.GRPAREN, 0); }
	public MUL(): TerminalNode[];
	public MUL(i: number): TerminalNode;
	public MUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.MUL);
		} else {
			return this.getToken(VtlParser.MUL, i);
		}
	}
	constructor(ctx: DpRulesetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDataPointVd) {
			listener.enterDataPointVd(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDataPointVd) {
			listener.exitDataPointVd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDataPointVd) {
			return visitor.visitDataPointVd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DataPointVarContext extends DpRulesetContext {
	public DATAPOINT_ON_VAR(): TerminalNode { return this.getToken(VtlParser.DATAPOINT_ON_VAR, 0); }
	public GLPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.GLPAREN, 0); }
	public varID(): VarIDContext[];
	public varID(i: number): VarIDContext;
	public varID(i?: number): VarIDContext | VarIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarIDContext);
		} else {
			return this.getRuleContext(i, VarIDContext);
		}
	}
	public GRPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.GRPAREN, 0); }
	public MUL(): TerminalNode[];
	public MUL(i: number): TerminalNode;
	public MUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.MUL);
		} else {
			return this.getToken(VtlParser.MUL, i);
		}
	}
	constructor(ctx: DpRulesetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterDataPointVar) {
			listener.enterDataPointVar(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitDataPointVar) {
			listener.exitDataPointVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitDataPointVar) {
			return visitor.visitDataPointVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HrRulesetContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_hrRuleset; }
	public copyFrom(ctx: HrRulesetContext): void {
		super.copyFrom(ctx);
	}
}
export class HrRulesetTypeContext extends HrRulesetContext {
	public HIERARCHICAL(): TerminalNode { return this.getToken(VtlParser.HIERARCHICAL, 0); }
	constructor(ctx: HrRulesetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHrRulesetType) {
			listener.enterHrRulesetType(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHrRulesetType) {
			listener.exitHrRulesetType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHrRulesetType) {
			return visitor.visitHrRulesetType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HrRulesetVdTypeContext extends HrRulesetContext {
	public _vdName!: Token;
	public HIERARCHICAL_ON_VD(): TerminalNode { return this.getToken(VtlParser.HIERARCHICAL_ON_VD, 0); }
	public GLPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.GLPAREN, 0); }
	public GRPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.GRPAREN, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LPAREN, 0); }
	public valueDomainName(): ValueDomainNameContext[];
	public valueDomainName(i: number): ValueDomainNameContext;
	public valueDomainName(i?: number): ValueDomainNameContext | ValueDomainNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueDomainNameContext);
		} else {
			return this.getRuleContext(i, ValueDomainNameContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RPAREN, 0); }
	public MUL(): TerminalNode[];
	public MUL(i: number): TerminalNode;
	public MUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.MUL);
		} else {
			return this.getToken(VtlParser.MUL, i);
		}
	}
	constructor(ctx: HrRulesetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHrRulesetVdType) {
			listener.enterHrRulesetVdType(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHrRulesetVdType) {
			listener.exitHrRulesetVdType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHrRulesetVdType) {
			return visitor.visitHrRulesetVdType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HrRulesetVarTypeContext extends HrRulesetContext {
	public _varName!: VarIDContext;
	public HIERARCHICAL_ON_VAR(): TerminalNode { return this.getToken(VtlParser.HIERARCHICAL_ON_VAR, 0); }
	public GLPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.GLPAREN, 0); }
	public GRPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.GRPAREN, 0); }
	public varID(): VarIDContext[];
	public varID(i: number): VarIDContext;
	public varID(i?: number): VarIDContext | VarIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarIDContext);
		} else {
			return this.getRuleContext(i, VarIDContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RPAREN, 0); }
	public MUL(): TerminalNode[];
	public MUL(i: number): TerminalNode;
	public MUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.MUL);
		} else {
			return this.getToken(VtlParser.MUL, i);
		}
	}
	constructor(ctx: HrRulesetContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHrRulesetVarType) {
			listener.enterHrRulesetVarType(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHrRulesetVarType) {
			listener.exitHrRulesetVarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHrRulesetVarType) {
			return visitor.visitHrRulesetVarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueDomainNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_valueDomainName; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValueDomainName) {
			listener.enterValueDomainName(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValueDomainName) {
			listener.exitValueDomainName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValueDomainName) {
			return visitor.visitValueDomainName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulesetIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_rulesetID; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRulesetID) {
			listener.enterRulesetID(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRulesetID) {
			listener.exitRulesetID(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRulesetID) {
			return visitor.visitRulesetID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulesetSignatureContext extends ParserRuleContext {
	public signature(): SignatureContext[];
	public signature(i: number): SignatureContext;
	public signature(i?: number): SignatureContext | SignatureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SignatureContext);
		} else {
			return this.getRuleContext(i, SignatureContext);
		}
	}
	public VALUE_DOMAIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VALUE_DOMAIN, 0); }
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VARIABLE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_rulesetSignature; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRulesetSignature) {
			listener.enterRulesetSignature(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRulesetSignature) {
			listener.exitRulesetSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRulesetSignature) {
			return visitor.visitRulesetSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignatureContext extends ParserRuleContext {
	public varID(): VarIDContext {
		return this.getRuleContext(0, VarIDContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.AS, 0); }
	public alias(): AliasContext | undefined {
		return this.tryGetRuleContext(0, AliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_signature; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSignature) {
			listener.enterSignature(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSignature) {
			listener.exitSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSignature) {
			return visitor.visitSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleClauseDatapointContext extends ParserRuleContext {
	public ruleItemDatapoint(): RuleItemDatapointContext[];
	public ruleItemDatapoint(i: number): RuleItemDatapointContext;
	public ruleItemDatapoint(i?: number): RuleItemDatapointContext | RuleItemDatapointContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleItemDatapointContext);
		} else {
			return this.getRuleContext(i, RuleItemDatapointContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.EOL);
		} else {
			return this.getToken(VtlParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_ruleClauseDatapoint; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRuleClauseDatapoint) {
			listener.enterRuleClauseDatapoint(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRuleClauseDatapoint) {
			listener.exitRuleClauseDatapoint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRuleClauseDatapoint) {
			return visitor.visitRuleClauseDatapoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleItemDatapointContext extends ParserRuleContext {
	public _ruleName!: Token;
	public _antecedentContiditon!: ExprContext;
	public _consequentCondition!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COLON, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.WHEN, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.THEN, 0); }
	public erCode(): ErCodeContext | undefined {
		return this.tryGetRuleContext(0, ErCodeContext);
	}
	public erLevel(): ErLevelContext | undefined {
		return this.tryGetRuleContext(0, ErLevelContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_ruleItemDatapoint; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRuleItemDatapoint) {
			listener.enterRuleItemDatapoint(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRuleItemDatapoint) {
			listener.exitRuleItemDatapoint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRuleItemDatapoint) {
			return visitor.visitRuleItemDatapoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleClauseHierarchicalContext extends ParserRuleContext {
	public ruleItemHierarchical(): RuleItemHierarchicalContext[];
	public ruleItemHierarchical(i: number): RuleItemHierarchicalContext;
	public ruleItemHierarchical(i?: number): RuleItemHierarchicalContext | RuleItemHierarchicalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleItemHierarchicalContext);
		} else {
			return this.getRuleContext(i, RuleItemHierarchicalContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.EOL);
		} else {
			return this.getToken(VtlParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_ruleClauseHierarchical; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRuleClauseHierarchical) {
			listener.enterRuleClauseHierarchical(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRuleClauseHierarchical) {
			listener.exitRuleClauseHierarchical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRuleClauseHierarchical) {
			return visitor.visitRuleClauseHierarchical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleItemHierarchicalContext extends ParserRuleContext {
	public _ruleName!: Token;
	public codeItemRelation(): CodeItemRelationContext {
		return this.getRuleContext(0, CodeItemRelationContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COLON, 0); }
	public erCode(): ErCodeContext | undefined {
		return this.tryGetRuleContext(0, ErCodeContext);
	}
	public erLevel(): ErLevelContext | undefined {
		return this.tryGetRuleContext(0, ErLevelContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_ruleItemHierarchical; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRuleItemHierarchical) {
			listener.enterRuleItemHierarchical(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRuleItemHierarchical) {
			listener.exitRuleItemHierarchical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRuleItemHierarchical) {
			return visitor.visitRuleItemHierarchical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HierRuleSignatureContext extends ParserRuleContext {
	public RULE(): TerminalNode { return this.getToken(VtlParser.RULE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	public VALUE_DOMAIN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VALUE_DOMAIN, 0); }
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.VARIABLE, 0); }
	public CONDITION(): TerminalNode | undefined { return this.tryGetToken(VtlParser.CONDITION, 0); }
	public valueDomainSignature(): ValueDomainSignatureContext | undefined {
		return this.tryGetRuleContext(0, ValueDomainSignatureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_hierRuleSignature; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterHierRuleSignature) {
			listener.enterHierRuleSignature(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitHierRuleSignature) {
			listener.exitHierRuleSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitHierRuleSignature) {
			return visitor.visitHierRuleSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueDomainSignatureContext extends ParserRuleContext {
	public signature(): SignatureContext[];
	public signature(i: number): SignatureContext;
	public signature(i?: number): SignatureContext | SignatureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SignatureContext);
		} else {
			return this.getRuleContext(i, SignatureContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_valueDomainSignature; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValueDomainSignature) {
			listener.enterValueDomainSignature(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValueDomainSignature) {
			listener.exitValueDomainSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValueDomainSignature) {
			return visitor.visitValueDomainSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CodeItemRelationContext extends ParserRuleContext {
	public _codetemRef!: ValueDomainValueContext;
	public codeItemRelationClause(): CodeItemRelationClauseContext[];
	public codeItemRelationClause(i: number): CodeItemRelationClauseContext;
	public codeItemRelationClause(i?: number): CodeItemRelationClauseContext | CodeItemRelationClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeItemRelationClauseContext);
		} else {
			return this.getRuleContext(i, CodeItemRelationClauseContext);
		}
	}
	public valueDomainValue(): ValueDomainValueContext {
		return this.getRuleContext(0, ValueDomainValueContext);
	}
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.WHEN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public THEN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.THEN, 0); }
	public comparisonOperand(): ComparisonOperandContext | undefined {
		return this.tryGetRuleContext(0, ComparisonOperandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_codeItemRelation; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCodeItemRelation) {
			listener.enterCodeItemRelation(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCodeItemRelation) {
			listener.exitCodeItemRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCodeItemRelation) {
			return visitor.visitCodeItemRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CodeItemRelationClauseContext extends ParserRuleContext {
	public _opAdd!: Token;
	public _rightCodeItem!: ValueDomainValueContext;
	public _rightCondition!: ExprContext;
	public valueDomainValue(): ValueDomainValueContext {
		return this.getRuleContext(0, ValueDomainValueContext);
	}
	public QLPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.QLPAREN, 0); }
	public QRPAREN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.QRPAREN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_codeItemRelationClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCodeItemRelationClause) {
			listener.enterCodeItemRelationClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCodeItemRelationClause) {
			listener.exitCodeItemRelationClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCodeItemRelationClause) {
			return visitor.visitCodeItemRelationClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueDomainValueContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.IDENTIFIER, 0); }
	public INTEGER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INTEGER_CONSTANT, 0); }
	public NUMBER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NUMBER_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_valueDomainValue; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValueDomainValue) {
			listener.enterValueDomainValue(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValueDomainValue) {
			listener.exitValueDomainValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValueDomainValue) {
			return visitor.visitValueDomainValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScalarTypeConstraintContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_scalarTypeConstraint; }
	public copyFrom(ctx: ScalarTypeConstraintContext): void {
		super.copyFrom(ctx);
	}
}
export class ConditionConstraintContext extends ScalarTypeConstraintContext {
	public QLPAREN(): TerminalNode { return this.getToken(VtlParser.QLPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public QRPAREN(): TerminalNode { return this.getToken(VtlParser.QRPAREN, 0); }
	constructor(ctx: ScalarTypeConstraintContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterConditionConstraint) {
			listener.enterConditionConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitConditionConstraint) {
			listener.exitConditionConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitConditionConstraint) {
			return visitor.visitConditionConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RangeConstraintContext extends ScalarTypeConstraintContext {
	public GLPAREN(): TerminalNode { return this.getToken(VtlParser.GLPAREN, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public GRPAREN(): TerminalNode { return this.getToken(VtlParser.GRPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(ctx: ScalarTypeConstraintContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRangeConstraint) {
			listener.enterRangeConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRangeConstraint) {
			listener.exitRangeConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRangeConstraint) {
			return visitor.visitRangeConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompConstraintContext extends ParserRuleContext {
	public componentType(): ComponentTypeContext {
		return this.getRuleContext(0, ComponentTypeContext);
	}
	public componentID(): ComponentIDContext | undefined {
		return this.tryGetRuleContext(0, ComponentIDContext);
	}
	public multModifier(): MultModifierContext | undefined {
		return this.tryGetRuleContext(0, MultModifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_compConstraint; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterCompConstraint) {
			listener.enterCompConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitCompConstraint) {
			listener.exitCompConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitCompConstraint) {
			return visitor.visitCompConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultModifierContext extends ParserRuleContext {
	public OPTIONAL(): TerminalNode { return this.getToken(VtlParser.OPTIONAL, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(VtlParser.PLUS, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_multModifier; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterMultModifier) {
			listener.enterMultModifier(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitMultModifier) {
			listener.exitMultModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitMultModifier) {
			return visitor.visitMultModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValidationOutputContext extends ParserRuleContext {
	public INVALID(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INVALID, 0); }
	public ALL_MEASURES(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL_MEASURES, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_validationOutput; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidationOutput) {
			listener.enterValidationOutput(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidationOutput) {
			listener.exitValidationOutput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidationOutput) {
			return visitor.visitValidationOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValidationModeContext extends ParserRuleContext {
	public NON_NULL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NON_NULL, 0); }
	public NON_ZERO(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NON_ZERO, 0); }
	public PARTIAL_NULL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.PARTIAL_NULL, 0); }
	public PARTIAL_ZERO(): TerminalNode | undefined { return this.tryGetToken(VtlParser.PARTIAL_ZERO, 0); }
	public ALWAYS_NULL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALWAYS_NULL, 0); }
	public ALWAYS_ZERO(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALWAYS_ZERO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_validationMode; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValidationMode) {
			listener.enterValidationMode(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValidationMode) {
			listener.exitValidationMode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValidationMode) {
			return visitor.visitValidationMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionClauseContext extends ParserRuleContext {
	public CONDITION(): TerminalNode { return this.getToken(VtlParser.CONDITION, 0); }
	public componentID(): ComponentIDContext[];
	public componentID(i: number): ComponentIDContext;
	public componentID(i?: number): ComponentIDContext | ComponentIDContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentIDContext);
		} else {
			return this.getRuleContext(i, ComponentIDContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_conditionClause; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterConditionClause) {
			listener.enterConditionClause(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitConditionClause) {
			listener.exitConditionClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitConditionClause) {
			return visitor.visitConditionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputModeContext extends ParserRuleContext {
	public DATASET(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATASET, 0); }
	public DATASET_PRIORITY(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATASET_PRIORITY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_inputMode; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterInputMode) {
			listener.enterInputMode(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitInputMode) {
			listener.exitInputMode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitInputMode) {
			return visitor.visitInputMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImbalanceExprContext extends ParserRuleContext {
	public IMBALANCE(): TerminalNode { return this.getToken(VtlParser.IMBALANCE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_imbalanceExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterImbalanceExpr) {
			listener.enterImbalanceExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitImbalanceExpr) {
			listener.exitImbalanceExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitImbalanceExpr) {
			return visitor.visitImbalanceExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputModeHierarchyContext extends ParserRuleContext {
	public RULE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RULE, 0); }
	public DATASET(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATASET, 0); }
	public RULE_PRIORITY(): TerminalNode | undefined { return this.tryGetToken(VtlParser.RULE_PRIORITY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_inputModeHierarchy; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterInputModeHierarchy) {
			listener.enterInputModeHierarchy(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitInputModeHierarchy) {
			listener.exitInputModeHierarchy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitInputModeHierarchy) {
			return visitor.visitInputModeHierarchy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputModeHierarchyContext extends ParserRuleContext {
	public COMPUTED(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COMPUTED, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_outputModeHierarchy; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOutputModeHierarchy) {
			listener.enterOutputModeHierarchy(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOutputModeHierarchy) {
			listener.exitOutputModeHierarchy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOutputModeHierarchy) {
			return visitor.visitOutputModeHierarchy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_alias; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterAlias) {
			listener.enterAlias(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitAlias) {
			listener.exitAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitAlias) {
			return visitor.visitAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_varID; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterVarID) {
			listener.enterVarID(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitVarID) {
			listener.exitVarID(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitVarID) {
			return visitor.visitVarID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleComponentIdContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_simpleComponentId; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterSimpleComponentId) {
			listener.enterSimpleComponentId(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitSimpleComponentId) {
			listener.exitSimpleComponentId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitSimpleComponentId) {
			return visitor.visitSimpleComponentId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.IDENTIFIER);
		} else {
			return this.getToken(VtlParser.IDENTIFIER, i);
		}
	}
	public MEMBERSHIP(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MEMBERSHIP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_componentID; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComponentID) {
			listener.enterComponentID(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComponentID) {
			listener.exitComponentID(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComponentID) {
			return visitor.visitComponentID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListsContext extends ParserRuleContext {
	public GLPAREN(): TerminalNode { return this.getToken(VtlParser.GLPAREN, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public GRPAREN(): TerminalNode { return this.getToken(VtlParser.GRPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VtlParser.COMMA);
		} else {
			return this.getToken(VtlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_lists; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterLists) {
			listener.enterLists(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitLists) {
			listener.exitLists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitLists) {
			return visitor.visitLists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErCodeContext extends ParserRuleContext {
	public ERRORCODE(): TerminalNode { return this.getToken(VtlParser.ERRORCODE, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_erCode; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterErCode) {
			listener.enterErCode(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitErCode) {
			listener.exitErCode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitErCode) {
			return visitor.visitErCode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErLevelContext extends ParserRuleContext {
	public ERRORLEVEL(): TerminalNode { return this.getToken(VtlParser.ERRORLEVEL, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_erLevel; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterErLevel) {
			listener.enterErLevel(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitErLevel) {
			listener.exitErLevel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitErLevel) {
			return visitor.visitErLevel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperandContext extends ParserRuleContext {
	public MT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MT, 0); }
	public ME(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ME, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.LT, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(VtlParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_comparisonOperand; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComparisonOperand) {
			listener.enterComparisonOperand(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComparisonOperand) {
			listener.exitComparisonOperand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComparisonOperand) {
			return visitor.visitComparisonOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalExprContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.OPTIONAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_optionalExpr; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOptionalExpr) {
			listener.enterOptionalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOptionalExpr) {
			listener.exitOptionalExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOptionalExpr) {
			return visitor.visitOptionalExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentRoleContext extends ParserRuleContext {
	public MEASURE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.MEASURE, 0); }
	public COMPONENT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.COMPONENT, 0); }
	public DIMENSION(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DIMENSION, 0); }
	public ATTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ATTRIBUTE, 0); }
	public viralAttribute(): ViralAttributeContext | undefined {
		return this.tryGetRuleContext(0, ViralAttributeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_componentRole; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterComponentRole) {
			listener.enterComponentRole(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitComponentRole) {
			listener.exitComponentRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitComponentRole) {
			return visitor.visitComponentRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ViralAttributeContext extends ParserRuleContext {
	public VIRAL(): TerminalNode { return this.getToken(VtlParser.VIRAL, 0); }
	public ATTRIBUTE(): TerminalNode { return this.getToken(VtlParser.ATTRIBUTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_viralAttribute; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterViralAttribute) {
			listener.enterViralAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitViralAttribute) {
			listener.exitViralAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitViralAttribute) {
			return visitor.visitViralAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueDomainIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_valueDomainID; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterValueDomainID) {
			listener.enterValueDomainID(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitValueDomainID) {
			listener.exitValueDomainID(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitValueDomainID) {
			return visitor.visitValueDomainID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorIDContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_operatorID; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterOperatorID) {
			listener.enterOperatorID(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitOperatorID) {
			listener.exitOperatorID(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitOperatorID) {
			return visitor.visitOperatorID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RoutineNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(VtlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_routineName; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRoutineName) {
			listener.enterRoutineName(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRoutineName) {
			listener.exitRoutineName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRoutineName) {
			return visitor.visitRoutineName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public INTEGER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INTEGER_CONSTANT, 0); }
	public NUMBER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NUMBER_CONSTANT, 0); }
	public BOOLEAN_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.BOOLEAN_CONSTANT, 0); }
	public STRING_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STRING_CONSTANT, 0); }
	public NULL_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NULL_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_constant; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicScalarTypeContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(VtlParser.STRING, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.INTEGER, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(VtlParser.NUMBER, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(VtlParser.BOOLEAN, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DATE, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(VtlParser.TIME, 0); }
	public TIME_PERIOD(): TerminalNode | undefined { return this.tryGetToken(VtlParser.TIME_PERIOD, 0); }
	public DURATION(): TerminalNode | undefined { return this.tryGetToken(VtlParser.DURATION, 0); }
	public SCALAR(): TerminalNode | undefined { return this.tryGetToken(VtlParser.SCALAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_basicScalarType; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterBasicScalarType) {
			listener.enterBasicScalarType(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitBasicScalarType) {
			listener.exitBasicScalarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitBasicScalarType) {
			return visitor.visitBasicScalarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RetainTypeContext extends ParserRuleContext {
	public BOOLEAN_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(VtlParser.BOOLEAN_CONSTANT, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(VtlParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VtlParser.RULE_retainType; }
	// @Override
	public enterRule(listener: VtlListener): void {
		if (listener.enterRetainType) {
			listener.enterRetainType(this);
		}
	}
	// @Override
	public exitRule(listener: VtlListener): void {
		if (listener.exitRetainType) {
			listener.exitRetainType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VtlVisitor<Result>): Result {
		if (visitor.visitRetainType) {
			return visitor.visitRetainType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


