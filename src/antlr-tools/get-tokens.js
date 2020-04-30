import antlr4 from 'antlr4';

export const VtlClassname = {};
VtlClassname.common = { className: 'vtl-common', typeName: 'common' };
VtlClassname.integer = { className: 'vtl-integer', typeName: 'int' };
VtlClassname.boolean = { className: 'vtl-boolean', typeName: 'boolean' };
VtlClassname.operator = { className: 'vtl-operator', typeName: 'ope' };
VtlClassname.identifier = { className: 'vtl-identifier', typeName: 'var' };
VtlClassname.function = { className: 'vtl-function', typeName: 'func' };
VtlClassname.keyword = { className: 'vtl-keyword', typeName: 'keyword' };
VtlClassname.string = { className: 'vtl-string', typeName: 'string' };
VtlClassname.float = { className: 'vtl-float', typeName: 'float' };
VtlClassname.mlComment = { className: 'vtl-ml-comment', typeName: 'comment' };
VtlClassname.slComment = {
	className: 'vtl-sl-comment',
	typeName: 'sl-comment',
};

const VTL_TYPES = {
	ASSIGN: VtlClassname.operator,
	EQUAL_THAN: VtlClassname.operator,
	GREATER_THAN: VtlClassname.operator,
	LESS_THAN: VtlClassname.operator,
	GREATER_OR_EQUAL_THAN: VtlClassname.operator,
	LESS_OR_EQUAL_THAN: VtlClassname.operator,
	DIFFERENT_THAN: VtlClassname.operator,
	INTEGER_CONSTANT: VtlClassname.integer,
	STRING_CONSTANT: VtlClassname.string,
	IDENTIFIER: VtlClassname.identifier,
	FLOAT_CONSTANT: VtlClassname.float,
	ML_COMMENT: VtlClassname.mlComment,
	SL_COMMENT: VtlClassname.slComment,
	BOOLEAN_CONSTANT: VtlClassname.boolean,

	IF: VtlClassname.keyword,
	THEN: VtlClassname.keyword,
	ELSE: VtlClassname.keyword,

	LEAD: VtlClassname.function,
	LAST: VtlClassname.function,

	/* exprAtom */
	CHECK: VtlClassname.function,
	CEIL: VtlClassname.function,
	FLOOR: VtlClassname.function,
	ABS: VtlClassname.function,
	EXP: VtlClassname.function,
	LN: VtlClassname.function,
	LOG: VtlClassname.function,
	TRUNC: VtlClassname.function,
	POWER: VtlClassname.function,
	SQRT: VtlClassname.function,
	LEN: VtlClassname.function,
	BETWEEN: VtlClassname.function,
	TRIM: VtlClassname.function,
	LTRIM: VtlClassname.function,
	RTRIM: VtlClassname.function,
	UCASE: VtlClassname.function,
	LCASE: VtlClassname.function,
	SUBSTR: VtlClassname.function,
	INSTR: VtlClassname.function,
	REPLACE: VtlClassname.function,
	CHARSET_MATCH: VtlClassname.function,
	ISNULL: VtlClassname.function,
	NVL: VtlClassname.function,
	MOD: VtlClassname.function,
};

const getKind = (type) =>
	type in VTL_TYPES ? VTL_TYPES[type] : VtlClassname.common;

const tokenize = (symbolicNames) => (ligne) => ({ type, start, stop }) => {
	const name = symbolicNames[type];
	return {
		lexerType: '',
		name,
		value: ligne.substr(start, stop - start + 1),
		start,
		stop,
		...getKind(name),
	};
};

/* */
const getTokens = (antlrTools) => (lines) => {
	const { VtlLexer } = antlrTools;
	const chars = new antlr4.InputStream(lines);
	const lexer = new VtlLexer(chars);

	lexer.removeErrorListeners();
	lexer.skip = () => {};
	const tokens = lexer.getAllTokens().map(tokenize(lexer.symbolicNames)(lines));
	return Promise.resolve(tokens);
};

export default getTokens;
