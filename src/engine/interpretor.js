import antlr4 from 'antlr4';
import { VtlLexer, VtlParser } from '../antlr-tools/vtl-2.0-Insee/parser-vtl';
import ExpressionVisitor from './visitors/Expression';

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
	const visitor = new ExpressionVisitor();
	return visitor.visit(parser.expr()).resolve(bindings);
};

export default interpret;
