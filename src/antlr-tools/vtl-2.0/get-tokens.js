import antlr4 from 'antlr4';
import { VtlLexer } from './parser-vtl';

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

const tokenize = (symbolicNames, lexer) => ligne => ({ type, start, stop }) => {
	// console.log(symbolicNames[type], ligne.substr(start, stop - start + 1));
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

const getKind = type =>
	type in VTL_TYPES ? VTL_TYPES[type] : VtlClassname.common;

/* */
const getTokens = ligne => {
	const chars = new antlr4.InputStream(ligne);
	const lexer = new VtlLexer(chars);
	lexer.removeErrorListeners();

	const tokens = lexer
		.getAllTokens()
		.map(tokenize(lexer.symbolicNames, lexer)(ligne));

	// console.log(tokens, ligne);
	// console.log(fillUnmappedToken(tokens, ligne));

	return tokens;
};

export default getTokens;
