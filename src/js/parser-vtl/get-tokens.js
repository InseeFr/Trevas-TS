import antlr4 from "antlr4";
import { VtlLexer } from ".";

// const isOneOf = (type, ...args) => args.indexOf(type) !== -1;

export const VtlClassname = {};
VtlClassname.common = "vtl-common";
VtlClassname.integer = "vtl-integer";
VtlClassname.identifier = "vtl-identifier";
VtlClassname.function = "vtl-function";
VtlClassname.keyword = "vtl-keyword";
VtlClassname.string = "vtl-string";

const VTL_TYPES = {
  INTEGER_CONSTANT: VtlClassname.integer,
  STRING_CONSTANT: VtlClassname.string,
  IDENTIFIER: VtlClassname.identifier,
  IF: VtlClassname.keyword,
  THEN: VtlClassname.keyword,
  ELSE: VtlClassname.keyword,
  LEAD: VtlClassname.function
};

const tokenize = symbolicNames => ligne => ({ type, start, stop }) => {
  const name = symbolicNames[type];
  return {
    name,
    value: ligne.substr(start, stop - start + 1),
    start,
    stop,
    kind: getKind(name)
  };
};

const getKind = type =>
  type in VTL_TYPES ? VTL_TYPES[type] : VtlClassname.common;

/* */
const getTokens = ligne => {
  const chars = new antlr4.InputStream(ligne);
  const lexer = new VtlLexer(chars);
  const tokens = lexer.getAllTokens().map(tokenize(lexer.symbolicNames)(ligne));

  // console.log(tokens);

  return tokens;
};

export default getTokens;
