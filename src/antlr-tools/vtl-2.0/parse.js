import antlr4 from 'antlr4';
import { VtlParser, VtlLexer, VtlListener } from './parser-vtl';

const parse = code => {
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
		const tree = parser.start();
		const inspector = new VtlInspector();
		antlr4.tree.ParseTreeWalker.DEFAULT.walk(inspector, tree);

		return { errors: errorsListener.errors, userIdentifiers: [] };
	} catch (e) {
		console.error(e);
		return undefined;
	}
};

class VtlErrorsListener {
	// reportAmbiguity: ƒ (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs)
	// reportAttemptingFullContext: ƒ (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs)
	// reportContextSensitivity: ƒ (recognizer, dfa, startIndex, stopIndex, prediction, configs)
	// syntaxError: ƒ (recognizer, offendingSymbol, line, column, msg, e)
	// constructor: ƒ ErrorListener()
	errors = [];
	reportAmbiguity() {}
	reportAttemptingFullContext() {}
	reportContextSensitivity() {}
	syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
		console.debug('%csyntaxError', 'color: red;', msg, line, column);
		this.errors.push({ msg, line, column, stack: e });
	}
}

class VtlInspector extends VtlListener {
	exitExpr(ctx) {
		// console.log("exp", ctx.getText());
	}

	exitCeilAtom(ctx) {
		// console.log(ctx);
		// console.log("ceil", ctx.getText());
		// console.log("ceil", ctx.CEIL());
		// const [args] = ctx.getText().match(/\(.*\)/);
		// console.log(args);
	}
}

export default parse;
