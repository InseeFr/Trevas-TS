import antlr4 from 'antlr4';

class VtlErrorsListener {
	constructor() {
		this.errors = [];
	}

	syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
		console.debug('%csyntaxError', 'color: red;', msg, line, column);
		this.errors.push({ msg, line, column, stack: e });
	}
}

const parse = antlrTools => startRule => code => {
	const { VtlLexer, VtlListener, VtlParser } = antlrTools;
	try {
		const chars = new antlr4.InputStream(code);
		const lexer = new VtlLexer(chars);
		const tokens = new antlr4.CommonTokenStream(lexer);
		const parser = new VtlParser(tokens);
		parser.buildParseTrees = true;
		lexer.removeErrorListeners();
		parser.removeErrorListeners();
		const errorsListener = new VtlErrorsListener();
		parser.addErrorListener(errorsListener);
		const tree = parser[startRule]();
		const inspector = new VtlListener();
		antlr4.tree.ParseTreeWalker.DEFAULT.walk(inspector, tree);
		return { errors: errorsListener.errors, userIdentifiers: [] };
	} catch (e) {
		console.error(e);
		return undefined;
	}
};

export default parse;
