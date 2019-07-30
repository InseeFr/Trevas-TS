import { JavaScriptParser } from "./JavaScriptParser";
import { JavaScriptLexer } from "./JavaScriptLexer";
import { JavaScriptParserListener } from "./JavaScriptParserListener";
import antlr4 from "antlr4";

export default code => {
  // const reader = new Reader(code);

  try {
    const chars = new antlr4.InputStream(code, true);
    const lexer = new JavaScriptLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JavaScriptParser(tokens);
    parser.buildParseTrees = true;
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    const errorsListener = new JavaScriptErrorsListener();
    parser.addErrorListener(errorsListener);
    const tree = parser.program();
    const listener = new CustomJsListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

    return { errors: errorsListener.errors, dico: listener.dico };
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

class CustomJsListener extends JavaScriptParserListener {
  dico = [];
  enterStatement(ctx) {}
  exitStatement(ctx) {}

  exitVariableStatement(ctx) {
    const vs = ctx.getText();
    if (vs.match(/^const/i)) {
      this.dico.push(vs.replace(/(const|=|"[^"]+"|;|'[^']+')|<EOF>/g, ""));
    }
  }

  enterBlock(ctx) {}
}

// class Reader {
//   cosntructor(code) {
//     this.code = code;
//   }

//   getReader() {
//     console.log("Ici");
//   }
// }

class JavaScriptErrorsListener {
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
