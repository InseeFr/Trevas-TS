import antlr4 from "antlr4";
import { JavaScriptLexer } from "./JavaScriptLexer";

export const JsClassname = {};
JsClassname.common = { className: "js-common", typeName: "common" };
JsClassname.keyword = { className: "js-keyword", typeName: "keyword" };

const JS_TYPES = {
  Const: JsClassname.keyword
};

const tokenize = (symbolicNames, lexer) => ligne => ({ type, start, stop }) => {
  const name = symbolicNames[type];
  return {
    lexerType: "",
    name,
    value: ligne.substr(start, stop - start + 1),
    start,
    stop,

    ...getKind(name)
  };
};

const getKind = type =>
  type in JS_TYPES ? JS_TYPES[type] : JsClassname.common;

/* */
const getTokens = ligne => {
  const chars = new antlr4.InputStream(ligne);
  const lexer = new JavaScriptLexer(chars);
  lexer.removeErrorListeners();
  const tokens = lexer
    .getAllTokens()
    .map(tokenize(lexer.symbolicNames, lexer)(ligne));

  console.log(tokens, ligne);
  // console.log(fillUnmappedToken(tokens, ligne));

  return tokens;
};

export default getTokens;
