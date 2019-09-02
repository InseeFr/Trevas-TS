import antlr4 from 'antlr4';
import { VtlLexer, VtlParser } from '../antlr-tools/vtl-2.0-Insee/parser-vtl';
import { default as LiteralVisitor } from './visitors/Literal';

const getParser = text => {
	const chars = new antlr4.InputStream(text);
	const lexer = new VtlLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new VtlParser(tokens);
	parser.buildParseTrees = true;
	// const ctx = parser.start();
	// const visitor = new EngineVtlVisitor();
	return parser;
};

const interpret = (expr, bindings) => {
	const parser = getParser(expr);
	const visitor = new LiteralVisitor();
	visitor.visit(parser.expr());
	return true;
};

export default interpret;
