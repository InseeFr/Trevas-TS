/* eslint-disable no-template-curly-in-string */

import { languages as Languages } from "monaco-editor";
export const FUNCTION = Languages.CompletionItemKind.Function;
export const VARIABLE = Languages.CompletionItemKind.Variable;
export const KEYWORD = Languages.CompletionItemKind.Keyword;
export const SNIPPET = Languages.CompletionItemKind.Snippet;
export const INSERT_AS_SNIPPET = Languages.CompletionItemInsertTextRule.InsertAsSnippet;

export const getSuggestions = range => [
    {
        label: "eval",
        kind: FUNCTION,
        insertText: "eval",
        range,
        documentation: {
            value:
                "The eval operator invokes an external, non-VTL routine, and returns its result as a Data Set or a scalar. \n\n **Syntax** \n\n " +
                "   eval(externalRoutineName({argument}{,argument}*) language languageName returns outputType)"
        }
    },
    {
        label: "if",
        kind: KEYWORD,
        insertText: "if",
        range,
        documentation: {
            value: "Conditional operator  \n\n **Syntax** \n\n    if condition then thenOperand else elseOperand "
        }
    },
    {
        label: "then",
        kind: KEYWORD,
        insertText: "then",
        range,
        documentation: {
            value: "Conditional operator  \n\n **Syntax** \n\n    if condition then thenOperand else elseOperand "
        }
    },
    {
        label: "else",
        kind: KEYWORD,
        insertText: "else",
        range,
        documentation: {
            value: "Conditional operator  \n\n **Syntax** \n\n    if condition then thenOperand else elseOperand "
        }
    },
    {
        label: "using",
        kind: KEYWORD,
        insertText: "using",
        range
    },
    {
        label: "with",
        kind: KEYWORD,
        insertText: "with",
        range
    },
    {
        label: "current_date",
        kind: FUNCTION,
        insertText: "current_date()",
        range,
        documentation: {
            value: "The operator current_date returns the current time as a date type.   \n\n **Syntax** \n\n    current_date() "
        }
    },
    {
        label: "on",
        kind: KEYWORD,
        insertText: "on",
        range
    },
    {
        label: "drop",
        kind: KEYWORD,
        insertText: "drop",
        range,
        documentation: {
            value: "The operator takes as input a Data Set (op) and  some Component names of such a Data Set (comp).   \n\n **Syntax** \n\n    op [drop  comp { , comp }* ]  "
        }
    },
    {
        label: "keep",
        kind: KEYWORD,
        insertText: "keep",
        range,
        documentation: {
            value: "The operator takes as input a Data Set (op) and some Component names of such a Data Set (comp).  \n\n **Syntax** \n\n    op [ keep comp {, comp }* ] "
        }
    },
    {
        label: "calc",
        kind: KEYWORD,
        insertText: "calc",
        range,
        documentation: {
            value:
                "The operator calculates new Identifier, Measure or Attribute Components on the basis of sub-expressions at " +
                "Component level.   ***\n\n*Example*\n\n    DS_1 [ calc Me_3 := Me_1 + Me_2] "
        }
    },
    {
        label: "attrcalc",
        kind: KEYWORD,
        insertText: "attrcalc",
        range
    },
    {
        label: "rename",
        kind: KEYWORD,
        insertText: "rename",
        range,
        documentation: {
            value: "The operator assigns new names to one or more Components (Identifier, Measure or Attribute Components).    \n\n **Syntax** \n\n    op [ rename  comp_from  to  comp_to  { , comp_from  to  comp_to}*  ]   "
        }
    },
    {
        label: "as",
        kind: KEYWORD,
        insertText: "as",
        range
    },
    {
        label: "and",
        kind: KEYWORD,
        insertText: "and",
        range,
        documentation: {
            value:
                "The and operator returns TRUE if both operands are TRUE, otherwise FALSE. The two operands must be of " +
                "boolean type.  \n\n **Syntax** \n\n    op1 and op2  "
        }
    },
    {
        label: "or",
        kind: KEYWORD,
        insertText: "or",
        range,
        documentation: {
            value:
                "The or operator returns TRUE if at least one of the operands is TRUE, otherwise FALSE. The two operands must " +
                "be of boolean type.  \n\n **Syntax** \n\n    op1 or op2  "
        }
    },
    {
        label: "xor",
        kind: KEYWORD,
        insertText: "xor",
        range,
        documentation: {
            value:
                "The xor operator returns TRUE if only one of the operand is TRUE (but not both), FALSE otherwise. The two " +
                "operands must be of boolean type.   \n\n **Syntax** \n\n    op1 xor op2  "
        }
    },
    {
        label: "not",
        kind: KEYWORD,
        insertText: "not",
        range,
        documentation: {
            value: "The not operator returns TRUE if op is FALSE, otherwise TRUE. The input operand must be of boolean type.  \n\n **Syntax** \n\n    not op2  "
        }
    },
    {
        label: "between",
        kind: FUNCTION,
        insertText: "between",
        range,
        documentation: {
            value: "The operator returns TRUE if op is greater than or equal to from and lower than or equal to to.   \n\n **Syntax** \n\n    between (op, from, to)  "
        }
    },
    {
        label: "levenshtein",
        kind: FUNCTION,
        insertText: "levenshtein",
        range,
        documentation: {
            value: "The operator returns the levenshtein distance between the two inputed strings.   \n\n **Syntax** \n\n    levenshtein (left, right)  "
        }
    },
    {
        label: "in",
        kind: KEYWORD,
        insertText: "in",
        range,
        documentation: {
            value: "The in operator returns TRUE if op belongs to the collection, FALSE otherwise.    \n\n **Syntax** \n\n    op in collection  "
        }
    },
    {
        label: "not_in",
        kind: KEYWORD,
        insertText: "not_in",
        range,
        documentation: {
            value: "The not_in operator returns FALSE if op belongs to the collection, TRUE otherwise.     \n\n **Syntax** \n\n    op not_in collection  "
        }
    },
    {
        label: "isnull",
        kind: FUNCTION,
        insertText: "isnull",
        range,
        documentation: {
            value: "The operator returns TRUE if the value of the operand is NULL, FALSE otherwise.     \n\n **Syntax** \n\n    isnull(op)  "
        }
    },
    {
        label: "ex",
        kind: KEYWORD,
        insertText: "ex",
        range
    },
    {
        label: "union",
        kind: FUNCTION,
        insertText: "union",
        range,
        documentation: {
            value: "The union operator implements the union of functions (i.e., Data Sets).   \n\n **Syntax** \n\n    union ( ds { , ds }*) "
        }
    },
    {
        label: "diff",
        kind: KEYWORD,
        insertText: "diff",
        range
    },
    {
        label: "symdiff",
        kind: FUNCTION,
        insertText: "symdiff",
        range,
        documentation: {
            value:
                "The operator implements the symmetric set difference between functions (i.e. Data Sets), interpreting the Data " +
                "Points of the input Data Sets as the elements in the operand Sets.   \n\n **Syntax** \n\n    symdiff(ds1, ds) "
        }
    },
    {
        label: "intersect",
        kind: FUNCTION,
        insertText: "intersect",
        range,
        documentation: {
            value: "The intersect operator implements the intersection of functions (i.e., Data Sets).   \n\n **Syntax** \n\n    intersect ( ds { , ds }*) "
        }
    },
    {
        label: "keys",
        kind: KEYWORD,
        insertText: "KEYS",
        range
    },
    {
        label: "check",
        kind: FUNCTION,
        insertText: "check",
        range,
        documentation: {
            value: "*Syntax*\n\n    check ( op { errorcode errorcode } { errorlevel errorlevel } { imbalance imbalance } { output } )   \n\noutput ::=  invalid | all "
        }
    },
    {
        label: "exists_in",
        kind: FUNCTION,
        insertText: "exists_in",
        range,
        documentation: {
            value: "The operator returns TRUE if the value of the operand is NULL, FALSE otherwise.     \n\n **Syntax** \n\n    exists_in ( op1, op2 { , retain } )   \n\n *retain* ::= true | false | all"
        }
    },
    {
        label: "to",
        kind: KEYWORD,
        insertText: "to",
        range
    },
    {
        label: "return",
        kind: KEYWORD,
        insertText: "return",
        range
    },
    {
        label: "imbalance",
        kind: KEYWORD,
        insertText: "imbalance",
        range,
        documentation: {
            value: "Imbalance is a numeric mono-measure Data Set with the same Identifiers of op. If not specified then imbalance is NULL"
        }
    },
    {
        label: "errorcode",
        kind: KEYWORD,
        insertText: "errorcode",
        range
    },
    {
        label: "all",
        kind: KEYWORD,
        insertText: "all",
        range
    },
    {
        label: "aggr",
        kind: KEYWORD,
        insertText: "aggr",
        range,
        documentation: {
            value:
                "The operator aggr calculates aggregations of dependent Components (Measures or Attributes) on the basis of " +
                "sub-expressions at Component level.     \n\n **Syntax** \n\n    op [ aggr aggrClause { groupingClause } ]  "
        }
    },
    {
        label: "errorlevel",
        kind: KEYWORD,
        insertText: "errorlvel",
        range
    },
    {
        label: "order",
        kind: KEYWORD,
        insertText: "order",
        range
    },
    {
        label: "by",
        kind: KEYWORD,
        insertText: "by",
        range
    },
    {
        label: "rank",
        kind: FUNCTION,
        insertText: "rank",
        range,
        documentation: {
            value: "Rank (order number) of a Data Point in an ordered set of Data Points.   \n\n **Syntax** \n\n    rank( firstOperand  { , additionalOperand }* { groupingClause }  \n\n    rank( firstOperand { , additionalOperand }*  over ( analyticClause )) "
        }
    },
    {
        label: "asc",
        kind: KEYWORD,
        insertText: "asc",
        range
    },
    {
        label: "desc",
        kind: KEYWORD,
        insertText: "desc",
        range
    },
    {
        label: "min",
        kind: FUNCTION,
        insertText: "min",
        range,
        documentation: {
            value: "Minimum value of a set of values .   \n\n **Syntax** \n\n    min( firstOperand  { , additionalOperand }* { groupingClause } \n\n     min( firstOperand { , additionalOperand }*  over ( analyticClause ) "
        }
    },
    {
        label: "max",
        kind: FUNCTION,
        insertText: "max",
        range,
        documentation: {
            value: "Maximum value of a set of values .   \n\n **Syntax** \n\n    max( firstOperand  { , additionalOperand }* { groupingClause } \n\n     max( firstOperand { , additionalOperand }*  over ( analyticClause ) "
        }
    },
    {
        label: "first",
        kind: KEYWORD,
        insertText: "first",
        range
    },
    {
        label: "last",
        kind: KEYWORD,
        insertText: "last",
        range
    },
    {
        label: "indexof",
        kind: KEYWORD,
        insertText: "indexof",
        range
    },
    {
        label: "abs",
        kind: FUNCTION,
        insertText: "abs",
        range,
        documentation: {
            value: "The operator abs calculates the absolute value of a number.  \n\n For example:\n\n abs(-3.141) gives 3.141   \n\n **Syntax** \n\n    abs(op) "
        }
    },
    {
        label: "key",
        kind: KEYWORD,
        insertText: "key",
        range
    },
    {
        label: "ln",
        kind: FUNCTION,
        insertText: "ln",
        range,
        documentation: {
            value: "The operator ln calculates the natural logarithm of a number.   \n\n **Syntax** \n\n    ln(op) "
        }
    },
    {
        label: "log",
        kind: FUNCTION,
        insertText: "log",
        range,
        documentation: {
            value: "The operator log calculates the logarithm of num base op.  \n\n **Syntax** \n\n    log(op , num) "
        }
    },
    {
        label: "trunc",
        kind: FUNCTION,
        insertText: "trunc",
        range,
        documentation: {
            value:
                "The operator trunc truncates the operand to a number of positions at the right of the decimal point equal to the " +
                "numDigit parameter.   \n\n **Syntax** \n\n    trunc ( op , numDigit ) "
        }
    },
    {
        label: "round",
        kind: FUNCTION,
        insertText: "round",
        range,
        documentation: {
            value:
                "The operator round rounds the operand to a number of positions at the right of the decimal point equal to the " +
                "numDigit parameter.    \n\n **Syntax** \n\n    round( op , numDigit  )  "
        }
    },
    {
        label: "power",
        kind: FUNCTION,
        insertText: "power",
        range,
        documentation: {
            value: "The operator power raises a number (the base) to another one (the exponent).    \n\n **Syntax** \n\n    power(base , exponent) "
        }
    },
    {
        label: "mod",
        kind: FUNCTION,
        insertText: "mod",
        range,
        documentation: {
            value: "The operator mod returns the remainder of op1 divided by op2. It returns op1 if divisor op2 is 0.   \n\n **Syntax** \n\n    mod(op1, op2 ) "
        }
    },
    {
        label: "length",
        kind: FUNCTION,
        insertText: "length",
        range,
        documentation: {
            value: "Returns the length of a string.   \n\n **Syntax** \n\n    len( op ) "
        }
    },
    {
        label: "trim",
        kind: FUNCTION,
        insertText: "trim",
        range,
        documentation: {
            value: 'Removes trailing and leading whitespace from a string.  For example,    trim("Hello ") gives  "Hello".   \n\n **Syntax** \n\n    trim(operand) '
        }
    },
    {
        label: "upper",
        kind: FUNCTION,
        insertText: "upper",
        range,
        documentation: {
            value: 'Converts the character case of a string in upper case. For example,  upper("Hello") gives  "HELLO".   \n\n **Syntax** \n\n    upper(operand) '
        }
    },
    {
        label: "lower",
        kind: FUNCTION,
        insertText: "lower",
        range,
        documentation: {
            value: 'Converts the character case of a string in  lower case. For example,  lower("Hello") gives  "hello".   \n\n **Syntax** \n\n    lower(operand) '
        }
    },
    {
        label: "substr",
        kind: FUNCTION,
        insertText: "substr",
        range,
        documentation: {
            value:
                "The operator extracts a substring from op, which must be string type. The substring starts from the start" +
                " character of the input string and has a number of characters equal to the length parameter.    \n\n **Syntax** \n\n    substr ( op, start, length ) "
        }
    },
    {
        label: "sum",
        kind: FUNCTION,
        insertText: "sum",
        range,
        documentation: {
            value: "Sum of a set of numbers.   \n\n **Syntax** \n\n    sun( firstOperand  { , additionalOperand }* { groupingClause }  "
        }
    },
    {
        label: "avg",
        kind: FUNCTION,
        insertText: "avg",
        range,
        documentation: {
            value: "Average value of a set of numbers.   \n\n **Syntax** \n\n    avg( firstOperand  { , additionalOperand }* { groupingClause }  \n\n    avg( firstOperand { , additionalOperand }*  over ( analyticClause )) "
        }
    },
    {
        label: "median",
        kind: FUNCTION,
        insertText: "median",
        range,
        documentation: {
            value: "Median value of a set of values .   \n\n **Syntax** \n\n    median( firstOperand  { , additionalOperand }* { groupingClause } \n\n    median( firstOperand { , additionalOperand }*  over ( analyticClause )) "
        }
    },
    {
        label: "count",
        kind: FUNCTION,
        insertText: "count",
        range,
        documentation: {
            value: "Number of Data Points.   \n\n **Syntax** \n\n    count( firstOperand  { , additionalOperand }* { groupingClause }  \n\n    count( firstOperand { , additionalOperand }*  over ( analyticClause )) "
        }
    },
    {
        label: "identifier",
        kind: KEYWORD,
        insertText: "identifier",
        range
    },
    {
        label: "measure",
        kind: KEYWORD,
        insertText: "measure",
        range
    },
    {
        label: "attribute",
        kind: KEYWORD,
        insertText: "attribute",
        range
    },
    {
        label: "filter",
        kind: KEYWORD,
        insertText: "filter",
        range,
        documentation: {
            value:
                "The operator takes as input a Data Set (op) and a boolean Component expression (filterCondition) and filters the " +
                "input Data Points according to the evaluation of the condition.   \n\n **Syntax** \n\n    op[ filter  filterCondition ] "
        }
    },
    {
        label: "merge",
        kind: KEYWORD,
        insertText: "merge",
        range
    },
    {
        label: "exp",
        kind: FUNCTION,
        insertText: "exp",
        range,
        documentation: {
            value: "The operator exp returns e (base of the natural logarithm) raised to the op-th power.  \n\n **Syntax** \n\n    exp(op) "
        }
    },
    {
        label: "componentRole",
        kind: KEYWORD,
        insertText: "componentRole",
        range
    },
    {
        label: "viral",
        kind: KEYWORD,
        insertText: "viral",
        range
    },
    {
        label: "match_characters",
        kind: FUNCTION,
        insertText: "match_characters",
        range,
        documentation: {
            value: "match_characters returns TRUE if op matches the regular expression regexp, FALSE otherwise.   \n\n **Syntax** \n\n    match_characters ( op , pattern ) "
        }
    },
    {
        label: "type",
        kind: KEYWORD,
        insertText: "type",
        range
    },
    {
        label: "nvl",
        kind: FUNCTION,
        insertText: "nvl",
        range,
        documentation: {
            value: "The operator nvl returns op2 when op1 is null, otherwise op1.    \n\n **Syntax** \n\n    nvl ( op1 , op2 )  "
        }
    },
    {
        label: "hierarchy",
        kind: FUNCTION,
        insertText: "hierarchy",
        range,
        documentation: {
            value: "The hierarchy operator applies the rules of hr to op as specified in the parameters.   \n\n **Syntax** \n\n    hierarchy( op , hr { condition condComp { , condComp }* } { rule ruleComp } { mode } { input } { output } ) "
        }
    },
    {
        label: "invalid",
        kind: KEYWORD,
        insertText: "invalid",
        range
    },
    {
        label: "valuedomain",
        kind: KEYWORD,
        insertText: "valuedomain",
        range
    },
    {
        label: "variable",
        kind: KEYWORD,
        insertText: "variable",
        range
    },
    {
        label: "data",
        kind: KEYWORD,
        insertText: "data",
        range
    },
    {
        label: "structure",
        kind: KEYWORD,
        insertText: "structure",
        range
    },
    {
        label: "dataset",
        kind: KEYWORD,
        insertText: "dataset",
        range
    },
    {
        label: "operator",
        kind: KEYWORD,
        insertText: "operator",
        range
    },
    {
        label: "define",
        kind: KEYWORD,
        insertText: "define",
        range
    },
    {
        label: "datapoint",
        kind: KEYWORD,
        insertText: "datapoint",
        range
    },
    {
        label: "hierarchical",
        kind: KEYWORD,
        insertText: "hierarchical",
        range
    },
    {
        label: "ruleset",
        kind: KEYWORD,
        insertText: "ruleset",
        range
    },
    {
        label: "rule",
        kind: KEYWORD,
        insertText: "rule",
        range
    },
    {
        label: "end",
        kind: KEYWORD,
        insertText: "end",
        range
    },
    {
        label: "alterDataset",
        kind: KEYWORD,
        insertText: "alterDataset",
        range
    },
    {
        label: "ltrim",
        kind: FUNCTION,
        insertText: "ltrim",
        range,
        documentation: {
            value: 'Removes leading whitespace from a string.  For example,    trim(" Hello ") gives "Hello ".   \n\n **Syntax** \n\n    ltrim(operand) '
        }
    },
    {
        label: "rtrim",
        kind: FUNCTION,
        insertText: "rtrim",
        range,
        documentation: {
            value: 'Removes trailing whitespace from a string.  For example,    trim("Hello ") gives  "Hello".   \n\n **Syntax** \n\n    rtrim(operand) '
        }
    },
    {
        label: "instr",
        kind: FUNCTION,
        insertText: "instr",
        range,
        documentation: {
            value: "The operator returns the position in the input string of a specified string (pattern).   \n\n **Syntax** \n\n    instr ( op, pattern, start, occurrence ) "
        }
    },
    {
        label: "replace",
        kind: FUNCTION,
        insertText: "replace",
        range,
        documentation: {
            value:
                "Replaces all the occurrences of a specified string-pattern (pattern1) with another one (pattern2). If pattern2 is " +
                " omitted then all occurrences of pattern1 are removed   \n\n **Syntax** \n\n    replace (op , pattern1,  pattern2 ) "
        }
    },
    {
        label: "ceil",
        kind: FUNCTION,
        insertText: "ceil",
        range,
        documentation: {
            value: "The operator ceil returns the smallest integer greater than or equal to op. \n\n For example:\n\n ceil(3.14159) gives 4   \n\n **Syntax** \n\n    ceil(op) "
        }
    },
    {
        label: "floor",
        kind: FUNCTION,
        insertText: "floor",
        range,
        documentation: {
            value: "The operator floor returns the greatest integer which is smaller than or equal to op.  \n\n For example:\n\n floor(3.14159) gives 3   \n\n **Syntax** \n\n    floor(op) "
        }
    },
    {
        label: "sqrt",
        kind: FUNCTION,
        insertText: "sqrt",
        range,
        documentation: {
            value: "The operator sqrt calculates the square root of a number.  \n\n **Syntax** \n\n    sqrt(op) "
        }
    },
    {
        label: "any",
        kind: KEYWORD,
        insertText: "any",
        range
    },
    {
        label: "setdiff",
        kind: FUNCTION,
        insertText: "setdiff",
        range,
        documentation: {
            value:
                "The operator implements the set difference of functions (i.e. Data Sets), interpreting the Data Points of the input " +
                "Data Sets as the elements belonging to the operand sets, the minuend and the subtrahend, respectively.   \n\n **Syntax** \n\n    setdiff(ds1, ds2)  "
        }
    },
    {
        label: "stddev_pop",
        kind: FUNCTION,
        insertText: "stddev_pop",
        range,
        documentation: {
            value: "Population standard deviation of a set of numbers.   \n\n **Syntax** \n\n    stddev_pop( firstOperand  { , additionalOperand }* { groupingClause }  \n\n    stddev_pop( firstOperand { , additionalOperand }*  over ( analyticClause )) "
        }
    },
    {
        label: "stddev_samp",
        kind: FUNCTION,
        insertText: "stddev_samp",
        range,
        documentation: {
            value: "Sample standard deviation of a set of numbers.   \n\n **Syntax** \n\n    stddev_samp( firstOperand  { , additionalOperand }* { groupingClause }  \n\n    stddev_samp( firstOperand { , additionalOperand }*  over ( analyticClause )) "
        }
    },
    {
        label: "var_pop",
        kind: FUNCTION,
        insertText: "var_pop",
        range,
        documentation: {
            value: "Population variance of a set of numbers.   \n\n **Syntax** \n\n    var_pop( firstOperand  { , additionalOperand }* { groupingClause }  \n\n    var_pop( firstOperand { , additionalOperand }*  over ( analyticClause )) "
        }
    },
    {
        label: "var_samp",
        kind: FUNCTION,
        insertText: "var_samp",
        range,
        documentation: {
            value: "Sample variance of a set of numbers.   \n\n **Syntax** \n\n    var_samp( firstOperand  { , additionalOperand }* { groupingClause }  \n\n    var_samp( firstOperand { , additionalOperand }*  over ( analyticClause )) "
        }
    },
    {
        label: "group",
        kind: KEYWORD,
        insertText: "group",
        range
    },
    {
        label: "except",
        kind: KEYWORD,
        insertText: "except",
        range
    },
    {
        label: "having",
        kind: KEYWORD,
        insertText: "having",
        range
    },
    {
        label: "first_value",
        kind: FUNCTION,
        insertText: "first_value",
        range,
        documentation: {
            value: "First value in an ordered set of values .   \n\n **Syntax** \n\n    first_value( firstOperand  { , additionalOperand }* { groupingClause }  \n\n    first_value( firstOperand { , additionalOperand }*  over ( analyticClause )) "
        }
    },
    {
        label: "last_value",
        kind: FUNCTION,
        insertText: "last_value",
        range,
        documentation: {
            value: "Last value in an ordered set of values.   \n\n **Syntax** \n\n    last_value( firstOperand  { , additionalOperand }* { groupingClause }  \n\n    last_value( firstOperand { , additionalOperand }*  over ( analyticClause )) "
        }
    },
    {
        label: "lag",
        kind: FUNCTION,
        insertText: "lag",
        range,
        documentation: {
            value: "In an ordered set of Data Points, it returns the value(s) taken from a Data Point at a given physical offset prior to the current Data Point.   \n\n **Syntax** \n\n    lag( firstOperand  { , additionalOperand }* { groupingClause }  \n\n    lag( firstOperand { , additionalOperand }*  over ( analyticClause )) "
        }
    },
    {
        label: "lead",
        kind: FUNCTION,
        insertText: "lead",
        range,
        documentation: {
            value: "In an ordered set of Data Points, it returns the value(s) taken from a Data Point at a given physical offset beyond the current Data Point .   \n\n **Syntax** \n\n    lead( firstOperand  { , additionalOperand }* { groupingClause }  \n\n    lead( firstOperand { , additionalOperand }*  over ( analyticClause )) "
        }
    },
    {
        label: "ratio_to_report",
        kind: FUNCTION,
        insertText: "ratio_to_report",
        range,
        documentation: {
            value: "In an ordered set of Data Points, it returns the value(s) taken from a Data Point at a given physical offset beyond the current Data Point .   \n\n **Syntax** \n\n    ratio_to_report( firstOperand  { , additionalOperand }* { groupingClause }  \n\n    ratio_to_report( firstOperand { , additionalOperand }*  over ( analyticClause )) "
        }
    },
    {
        label: "over",
        kind: KEYWORD,
        insertText: "over",
        range
    },
    {
        label: "preceding",
        kind: KEYWORD,
        insertText: "preceding",
        range
    },
    {
        label: "following",
        kind: KEYWORD,
        insertText: "following",
        range
    },
    {
        label: "unbounded",
        kind: KEYWORD,
        insertText: "unbounded",
        range
    },
    {
        label: "partition",
        kind: KEYWORD,
        insertText: "partition",
        range
    },
    {
        label: "rows",
        kind: KEYWORD,
        insertText: "rows",
        range
    },
    {
        label: "range",
        kind: KEYWORD,
        insertText: "range",
        range
    },
    {
        label: "current",
        kind: KEYWORD,
        insertText: "current",
        range
    },
    {
        label: "valid",
        kind: KEYWORD,
        insertText: "valid",
        range
    },
    {
        label: "fill_time_series",
        kind: FUNCTION,
        insertText: "fill_time_series",
        range,
        documentation: {
            value:
                "The operator fills the possibly missing Data Points of all the time series belonging to the operand op within the " +
                "time limits automatically determined by applying the limit_method.       \n\n **Syntax** \n\n    fill_time_series( op { , limitsMethod})  \n\n *limitsMethod* ::= single | all"
        }
    },
    {
        label: "flow_to_stock",
        kind: FUNCTION,
        insertText: "flow_to_stock",
        range,
        documentation: {
            value:
                "This operator takes in input a Data Set which are interpreted as flows and calculates the change of the " +
                " corresponding stock since the beginning of each time series by summing the relevant flows. In other words, the " +
                " operator perform the cumulative sum from the first Data Point of each time series to each other following Data " +
                " Point of the same time series.  \n\n **Syntax** \n\n    flow_to_stock( op )  "
        }
    },
    {
        label: "stock_to_flow",
        kind: FUNCTION,
        insertText: "stock_to_flow",
        range,
        documentation: {
            value:
                "This operator takes in input a Data Set of time series which is interpreted as stock data and, for each time series, " +
                " calculates the corresponding flow data by subtracting from the measure values of each regular period the " +
                " corresponding measure values of the previous one.   \n\n **Syntax** \n\n    stock_to_flow( op )  "
        }
    },
    {
        label: "timeshift",
        kind: FUNCTION,
        insertText: "timeshift",
        range,
        documentation: {
            value:
                "This operator takes in input a Data Set of time series and, for each time series of the Data Set, shifts the reference" +
                " time Identifier of a number of periods (of the time series) equal to the shift_number parameter.  If shift_number" +
                " is negative, the shift is in the past, otherwise in the future  \n\n **Syntax** \n\n    timeshift( op ,  shiftNumber) "
        }
    },
    {
        label: "measures",
        kind: KEYWORD,
        insertText: "measures",
        range
    },
    {
        label: "no_measures",
        kind: KEYWORD,
        insertText: "no_measures",
        range
    },
    {
        label: "condition",
        kind: KEYWORD,
        insertText: "condition",
        range
    },
    {
        label: "boolean",
        kind: KEYWORD,
        insertText: "boolean",
        range
    },
    {
        label: "date",
        kind: KEYWORD,
        insertText: "date",
        range
    },
    {
        label: "time_period",
        kind: KEYWORD,
        insertText: "time_period",
        range
    },
    {
        label: "number",
        kind: KEYWORD,
        insertText: "number",
        range
    },
    {
        label: "string",
        kind: KEYWORD,
        insertText: "string",
        range
    },
    {
        label: "integer",
        kind: KEYWORD,
        insertText: "integer",
        range
    },
    {
        label: "float",
        kind: KEYWORD,
        insertText: "float",
        range
    },
    {
        label: "list",
        kind: KEYWORD,
        insertText: "list",
        range
    },
    {
        label: "record",
        kind: KEYWORD,
        insertText: "record",
        range
    },
    {
        label: "restrict",
        kind: KEYWORD,
        insertText: "restrict",
        range
    },

    {
        label: "maxLength",
        kind: KEYWORD,
        insertText: "maxLength",
        range
    },
    {
        label: "regexp",
        kind: KEYWORD,
        insertText: "regexp",
        range
    },
    {
        label: "is",
        kind: KEYWORD,
        insertText: "is",
        range
    },
    {
        label: "when",
        kind: KEYWORD,
        insertText: "when",
        range
    },
    {
        label: "from",
        kind: KEYWORD,
        insertText: "from",
        range
    },
    {
        label: "aggregates",
        kind: KEYWORD,
        insertText: "aggregates",
        range
    },
    {
        label: "points",
        kind: KEYWORD,
        insertText: "points",
        range
    },
    {
        label: "point",
        kind: KEYWORD,
        insertText: "point",
        range
    },
    {
        label: "total",
        kind: KEYWORD,
        insertText: "total",
        range
    },
    {
        label: "partial",
        kind: KEYWORD,
        insertText: "partial",
        range
    },
    {
        label: "always",
        kind: KEYWORD,
        insertText: "always",
        range
    },
    {
        label: "inner_join",
        kind: FUNCTION,
        insertText: "inner_join",
        range,
        documentation: {
            value: "Join operator, a relational join of the input operands is performed, according to SQL inner"
        }
    },
    {
        label: "left_join",
        kind: FUNCTION,
        insertText: "left_join",
        range,
        documentation: {
            value: "Join operator,  this is the left-most Data Set (left-outer sql)"
        }
    },
    {
        label: "cross_join",
        kind: FUNCTION,
        insertText: "cross_join",
        range,
        documentation: { value: "Join operator,  Cartesian product" }
    },
    {
        label: "full_join",
        kind: FUNCTION,
        insertText: "full_join",
        range,
        documentation: { value: "Join operator,  full outer (sql)" }
    },
    {
        label: "maps_from",
        kind: KEYWORD,
        insertText: "maps_from",
        range
    },
    {
        label: "maps_to",
        kind: KEYWORD,
        insertText: "maps_to",
        range
    },
    {
        label: "map_to",
        kind: KEYWORD,
        insertText: "map_to",
        range
    },
    {
        label: "map_from",
        kind: KEYWORD,
        insertText: "map_from",
        range
    },
    {
        label: "returns",
        kind: KEYWORD,
        insertText: "returns",
        range
    },
    {
        label: "pivot",
        kind: KEYWORD,
        insertText: "pivot",
        range,
        documentation: {
            value: "The operator transposes several Data Points of the operand Data Set into a single Data Point of the resulting Data Set.  \n\n **Syntax** \n\n    op [ pivot identifier , measure ]   "
        }
    },
    {
        label: "customPivot",
        kind: KEYWORD,
        insertText: "customPivot",
        range
    },
    {
        label: "unpivot",
        kind: KEYWORD,
        insertText: "unpivot",
        range,
        documentation: {
            value: "The unpivot operator transposes a single Data Point of the operand Data Set into several Data Points of the result Data set.  \n\n **Syntax** \n\n    op [ unpivot identifier , measure ]   "
        }
    },
    {
        label: "sub",
        kind: KEYWORD,
        insertText: "sub",
        range,
        documentation: {
            value: "The operator returns a Data Set in a subspace of the one of the input Dataset.  \n\n **Syntax** \n\n    op [ sub identifier = value { , identifier = value }* ]   "
        }
    },
    {
        label: "apply",
        kind: KEYWORD,
        insertText: "apply",
        range
    },
    {
        label: "conditioned",
        kind: KEYWORD,
        insertText: "conditioned",
        range
    },
    {
        label: "period_indicator",
        kind: FUNCTION,
        insertText: "period_indicator ",
        range,
        documentation: {
            value:
                "period_indicator returns the period indicator of a time_period value. The period indicator is the part of the " +
                "time_period value which denotes the duration of the time period (e.g. day, week, month …).      \n\n **Syntax** \n\n    period_indicator(op) "
        }
    },
    {
        label: "single",
        kind: KEYWORD,
        insertText: "single",
        range
    },
    {
        label: "duration",
        kind: KEYWORD,
        insertText: "duration",
        range
    },
    {
        label: "time_agg",
        kind: FUNCTION,
        insertText: "time_agg",
        range,
        documentation: {
            value: "The operator converts a time, date or time_period value from a smaller to a larger duration.   \n\n **Syntax** \n\n    time_agg(periodIndTo { ,periodIndFrom } { ,op } { ,first | last }) "
        }
    },
    {
        label: "unit",
        kind: KEYWORD,
        insertText: "unit",
        range
    },
    {
        label: "value",
        kind: KEYWORD,
        insertText: "value",
        range
    },
    {
        label: "valuedomains",
        kind: KEYWORD,
        insertText: "valuedomains",
        range
    },
    {
        label: "variables",
        kind: KEYWORD,
        insertText: "variables",
        range
    },
    {
        label: "input",
        kind: KEYWORD,
        insertText: "input",
        range
    },
    {
        label: "output",
        kind: KEYWORD,
        insertText: "output",
        range
    },
    {
        label: "cast",
        kind: FUNCTION,
        insertText: "cast",
        range,
        documentation: {
            value:
                "This operator converts the scalar type of op to the scalar type specified by scalarType." +
                "  It returns a copy of op converted to the specified scalarType.   \n\n **Syntax** \n\n    cast ( op , scalarType { , mask} ) "
        }
    },
    {
        label: "rule_priority",
        kind: KEYWORD,
        insertText: "rule_priority",
        range
    },
    {
        label: "dataset_priority",
        kind: KEYWORD,
        insertText: "dataset_priority",
        range
    },
    {
        label: "default",
        kind: KEYWORD,
        insertText: "default",
        range
    },
    {
        label: "check_datapoint",
        kind: FUNCTION,
        insertText: "check_datapoint",
        range,
        documentation: {
            value: "\n\n*Syntax*\n\n    check_datapoint( op , dpr { components listComp } { output }) "
        }
    },
    {
        label: "check_hierarchy ",
        kind: FUNCTION,
        insertText: "check_hierarchy ",
        range,
        documentation: {
            value:
                "The check_hierarchy operator applies the Rules of the Ruleset hr to check the Code Items Relations between " +
                "the Code Items present in op    \n\n **Syntax** \n\n    check_hierarchy ( op , hr { condition condComp { , condComp }* } { rule ruleComp } { mode } { input } { output } )  "
        }
    },
    {
        label: "computed",
        kind: KEYWORD,
        insertText: "computed",
        range
    },
    {
        label: "non_null",
        kind: KEYWORD,
        insertText: "non_null",
        range
    },
    {
        label: "non_zero",
        kind: KEYWORD,
        insertText: "non_zero",
        range
    },
    {
        label: "partial_null",
        kind: KEYWORD,
        insertText: "partial_null",
        range
    },
    {
        label: "partial_zero",
        kind: KEYWORD,
        insertText: "partial_zero",
        range
    },
    {
        label: "always_null",
        kind: KEYWORD,
        insertText: "always_null",
        range
    },
    {
        label: "always_zero",
        kind: KEYWORD,
        insertText: "always_zero",
        range
    },
    {
        label: "components",
        kind: KEYWORD,
        insertText: "components",
        range
    },
    {
        label: "all_measures",
        kind: KEYWORD,
        insertText: "all_measures",
        range
    },
    {
        label: "scalar",
        kind: KEYWORD,
        insertText: "scalar",
        range
    },
    {
        label: "component",
        kind: KEYWORD,
        insertText: "component",
        range
    },
    {
        label: "datapoint_on_valuedomains",
        kind: KEYWORD,
        insertText: "datapoint_on_valuedomains",
        range
    },
    {
        label: "datapoint_on_variables",
        kind: KEYWORD,
        insertText: "datapoint_on_variables",
        range
    },
    {
        label: "hierarchical_on_valuedomains",
        kind: KEYWORD,
        insertText: "hierarchical_on_valuedomains",
        range
    },
    {
        label: "hierarchical_on_variables",
        kind: KEYWORD,
        insertText: "hierarchical_on_variables",
        range
    },
    {
        label: "set",
        kind: KEYWORD,
        insertText: "set",
        range
    },
    {
        label: "language",
        kind: KEYWORD,
        insertText: "language",
        range
    },
    // SNIPPETS
    {
        label: "defdatapoint",
        kind: SNIPPET,
        insertText: [
            "define datapoint ruleset ${0:name} (${1:signature}) is",
            "\t$3",
            "end datapoint ruleset"
        ].join("\n"),
        insertTextRules: INSERT_AS_SNIPPET,
        documentation: {
            value: [
                "\tdefine datapoint ruleset ruleSetName (signature) is\n",
                "\t\trule\n",
                "\tend datapoint ruleset"
            ].join("")
        }
    },
    {
        label: "defhierarchical",
        kind: SNIPPET,
        insertText: [
            "define hierarchical ruleset ${0:name} (${1:signature}) is",
            "\t$3",
            "end hierarchical ruleset"
        ].join("\n"),
        insertTextRules: INSERT_AS_SNIPPET,
        documentation: {
            value: [
                "\tdefine hierarchical ruleset ruleSetName (signature) is\n",
                "\t\t{rule}\n",
                "\tend hierarchical ruleset"
            ].join("")
        }
    },
    {
        label: "defoperator",
        kind: SNIPPET,
        insertText: [
            "define operator ${0:name} (${1:parameter})",
            "returns ${2:returnType} is",
            "",
            "end operator"
        ].join("\n"),
        insertTextRules: INSERT_AS_SNIPPET,
        documentation: {
            value: [
                "\tdefine operator operatorName (parameter)\n",
                "\treturns {returnType} is\n",
                "\t{operatorBody}\n",
                "\tend operator"
            ].join("")
        }
    }
];
