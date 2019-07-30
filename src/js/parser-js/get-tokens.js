import antlr4 from "antlr4";
import { JavaScriptLexer } from "./JavaScriptLexer";

export const JsClassname = {};
JsClassname.common = { className: "js-common", typeName: "common" };
JsClassname.keyword = { className: "js-keyword", typeName: "keyword" };
JsClassname.identifier = { className: "js-identifier", typeName: "var" };
JsClassname.operator = { className: "js-operator", typeName: "op" };
JsClassname.function = { className: "js-function", typeName: "func" };
JsClassname.stringLiteral = { className: "js-string", typeName: "string" };
JsClassname.decimal = { className: "js-decimal", typeName: "common" };
JsClassname.separator = typeName => ({
  className: "js-separator",
  typeName
});
JsClassname.delimitor = typeName => ({ className: "js-delimitor", typeName });
JsClassname.multiLigneComment = {
  className: "js-ml-comment",
  typeName: "comment"
};

const JS_TYPES = {
  Const: JsClassname.keyword,
  If: JsClassname.keyword,
  Else: JsClassname.keyword,
  While: JsClassname.keyword,
  For: JsClassname.keyword,
  Return: JsClassname.keyword,
  Import: JsClassname.keyword,

  OpenParen: JsClassname.delimitor("("),
  CloseParen: JsClassname.delimitor(")"),
  OpenBracket: JsClassname.delimitor("["),
  CloseBracket: JsClassname.delimitor("]"),
  OpenBrace: JsClassname.delimitor("{"),
  CloseBrace: JsClassname.delimitor("}"),

  ARROW: JsClassname.separator("=>"),
  Colon: JsClassname.separator(":"),
  SemiColon: JsClassname.separator(";"),
  Dot: JsClassname.separator("dot"),
  Comma: JsClassname.separator(","),

  DecimalLiteral: JsClassname.decimal,

  Function: JsClassname.function,
  MultiLineComment: JsClassname.multiLigneComment,
  Identifier: JsClassname.identifier,
  StringLiteral: JsClassname.stringLiteral,

  Assign: JsClassname.operator,
  Minus: JsClassname.operator,
  Plus: JsClassname.operator,
  LessThan: JsClassname.operator,
  GreaterThan: JsClassname.operator
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

  // console.log(tokens, ligne);
  // console.log(fillUnmappedToken(tokens, ligne));

  return tokens;
};

export default getTokens;
