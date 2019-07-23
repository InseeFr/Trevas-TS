import antlr4 from "antlr4";
import { VtlLexer } from ".";
import { lineProps } from "../editor/editor-prop-types";

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
    className: getKind(name)
  };
};

const getKind = type =>
  type in VTL_TYPES ? VTL_TYPES[type] : VtlClassname.common;

/* */
const getTokens = ligne => {
  const chars = new antlr4.InputStream(ligne);
  const lexer = new VtlLexer(chars);
  const tokens = lexer.getAllTokens().map(tokenize(lexer.symbolicNames)(ligne));

  // console.log(tokens, ligne);
  console.log(fillUnmappedToken(tokens, ligne));

  return fillUnmappedToken(tokens, ligne);
};

const fillUnmappedToken = (tokensOriginal, ligne) => {
  const result = tokensOriginal.reduce(
    ({ index, tokens }, token) =>
      index < token.start
        ? {
            index: token.stop + 1,
            tokens: [
              ...tokens,
              {
                start: index,
                stop: token.start - 1,
                className: "unmapped",
                value: ligne.substr(index, token.start - index)
              },
              token
            ]
          }
        : { index: token.stop + 1, tokens: [...tokens, token] },
    { index: 0, tokens: [] }
  );

  if (result.index < ligne.length) {
    return [
      ...result.tokens,
      {
        start: result.index,
        stop: ligne.length - 1,
        className: "unmapped",
        value: ligne.substr(result.index, ligne.length - result.index)
      }
    ];
  }

  return result.tokens;
};

export default getTokens;
