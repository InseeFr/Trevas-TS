import { VtlParser } from ".";
import { VtlLexer } from ".";
import antlr4 from "antlr4";
import { VtlListener } from ".";

// const old = console.error;
// console.error = function() {
// 	console.log('hoooo !');
// 	return old(...arguments);
// };

const parse = code => {
  try {
    console.log(code);
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

    return errorsListener.errors;
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
    this.errors.push({ msg, line, column, trace: e });
  }
}

export default parse;
