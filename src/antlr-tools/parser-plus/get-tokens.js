import antlr4 from 'antlr4';
import { PlusLexer } from './../parser-plus';

const SYMBOLIC_NAMES = [
	null,
	'VAR',
	'PRINT',
	'NUMBER',
	'EOL',
	'WHITESPACE',
	'PLUS',
	'EGAL',
];

export const PlusType = {};
PlusType.symbol = 'plus-symbol';
PlusType.number = 'plus-number';
PlusType.variable = 'plus-variable';
PlusType.whiteSpace = 'plus-whithspace';
PlusType.common = 'plus-common';

const isOneOf = (type, ...args) => args.indexOf(type) !== -1;
const isSymbol = type => isOneOf(type, 'PLUS', 'EGAL');
const isNumber = type => type === 'NUMBER';
const isVariable = type => type === 'VAR';
const isWhiteSpace = type => type === 'WHITESPACE';

const tokenize = ligne => ({ type, start, stop }) => {
	const name = SYMBOLIC_NAMES[type];
	return {
		name,
		value: ligne.substr(start, stop - start + 1),
		start,
		stop,
		kind: isSymbol(name)
			? PlusType.symbol
			: isNumber(name)
			? PlusType.number
			: isVariable(name)
			? PlusType.variable
			: isWhiteSpace(name)
			? PlusType.whiteSpace
			: PlusType.common,
	};
};

/* */
const getTokens = ligne => {
	const chars = new antlr4.InputStream(ligne);
	const lexer = new PlusLexer(chars);
	const tokens = lexer.getAllTokens().map(tokenize(ligne));

	return tokens;
};

export default getTokens;
