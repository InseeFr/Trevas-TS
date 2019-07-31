import React from "react";
import ReactDOM from "react-dom";
import { Editor } from "./js/editor/components";
import { getTokens, parse } from "./js/vtl-integration";
import * as serviceWorker from "./serviceWorker";
import { LoremIpsum } from "lorem-ipsum";

import "./editor-for-js.scss";

const getWords = () => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 160,
      min: 50
    }
  });

  return Object.keys(
    lorem
      .generateWords(100)
      .split(" ")
      .reduce((a, x) => ({ ...a, [x]: null }), {})
  );
};

const dictionnary = {
  variables: getWords(),
  keywords: ["if", "then", "else"],
  operator: ["=", ">", "<", "+", "-", "*", "/"]
};

const content = [
  'toto := "toto";',
  'if toto = "toto"',
  "\tthen true",
  "\t else false;"
  /* */
  // "const fillUnmappedToken = (tokensOriginal, ligne) => {",
  // "  const result = tokensOriginal.reduce(",
  // "    ({ index, tokens }, token) =>",
  // "      index < token.start",
  // "        ? {",
  // "            index: token.stop + 1,",
  // "            tokens: [",
  // "              ...tokens,",
  // "              {",
  // "                start: index,",
  // "                stop: token.start - 1,",
  // '                className: "unmapped",',
  // "                value: ligne.substr(index, token.start - index)",
  // "              },",
  // "              token",
  // "            ]",
  // "          }",
  // "        : { index: token.stop + 1, tokens: [...tokens, token] },",
  // "    { index: 0, tokens: [] }",
  // "  );",
  // "",
  // "  if (result.index < ligne.length) {",
  // "    return [",
  // "      ...result.tokens,",
  // "      {",
  // "        start: result.index,",
  // "        stop: ligne.length - 1,",
  // '        className: "unmapped",',
  // '        typeName: "unknow",',
  // "        value: ligne.substr(result.index, ligne.length - result.index)",
  // "      }",
  // "    ];",
  // "  }",
  // "",
  // "  return result.tokens;",
  // "};"
];

ReactDOM.render(
  <React.Fragment>
    <Editor
      content={content}
      dictionnary={dictionnary}
      getTokens={getTokens}
      parse={parse}
      edit={true}
    />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
