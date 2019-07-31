import { VtlParser } from "./parser-vtl";
import { VtlLexer } from "./parser-vtl";
import antlr4 from "antlr4";

// const old = console.error;
// console.error = function() {
// 	console.log('hoooo !');
// 	return old(...arguments);
// };

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
    // antlr4.tree.ParseTreeWalker.DEFAULT.walk(new VtlListener(), tree);

    return { errors: errorsListener.errors, dico: [] };
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
    console.debug("%csyntaxError", "color: red;", msg, line, column);
    this.errors.push({ msg, line, column, stack: e });
  }
}

export default parse;
