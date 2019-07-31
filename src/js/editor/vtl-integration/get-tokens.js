import antlr4 from "antlr4";
import { VtlLexer } from "./parser-vtl";

export const VtlClassname = {};
VtlClassname.common = { className: "vtl-common", typeName: "common" };
VtlClassname.integer = { className: "vtl-integer", typeName: "int" };
VtlClassname.operator = { className: "vtl-operator", typeName: "ope" };
VtlClassname.identifier = { className: "vtl-identifier", typeName: "var" };
VtlClassname.function = { className: "vtl-function", typeName: "func" };
VtlClassname.keyword = { className: "vtl-keyword", typeName: "keyword" };
VtlClassname.string = { className: "vtl-string", typeName: "string" };
VtlClassname.float = { className: "vtl-float", typeName: "float" };
VtlClassname.mlComment = { className: "vtl-ml-comment", typeName: "comment" };

const VTL_TYPES = {
  INTEGER_CONSTANT: VtlClassname.integer,
  STRING_CONSTANT: VtlClassname.string,
  IDENTIFIER: VtlClassname.identifier,
  FLOAT_CONSTANT: VtlClassname.float,
  ML_COMMENT: VtlClassname.mlComment,

  IF: VtlClassname.keyword,
  THEN: VtlClassname.keyword,
  ELSE: VtlClassname.keyword,

  LEAD: VtlClassname.function,
  LAST: VtlClassname.function
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
  type in VTL_TYPES ? VTL_TYPES[type] : VtlClassname.common;

/* */
const getTokens = ligne => {
  const chars = new antlr4.InputStream(ligne);
  const lexer = new VtlLexer(chars);
  lexer.removeErrorListeners();
  const tokens = lexer
    .getAllTokens()
    .map(tokenize(lexer.symbolicNames, lexer)(ligne));

  // console.log(tokens, ligne);
  // console.log(fillUnmappedToken(tokens, ligne));

  return tokens;
};

export default getTokens;
