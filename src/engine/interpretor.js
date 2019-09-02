import antlr4 from 'antlr4';
import { VtlLexer, VtlParser } from '../antlr-tools/vtl-2.0-Insee/parser-vtl';
import { default as ArithmeticVisitor } from './visitors/Arithmetic';

const getParser = text => {
	const chars = new antlr4.InputStream(text);
	const lexer = new VtlLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new VtlParser(tokens);
	parser.buildParseTrees = true;
	return parser;
};

const interpret = (expr, bindings) => {
	const parser = getParser(expr);
	const visitor = new ArithmeticVisitor();
	console.log(visitor.visit(parser.expr()).resolve(bindings));
	return true;
};

export default interpret;
