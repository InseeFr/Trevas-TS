import React from "react";
import ReactDOM from "react-dom";
import { Editor } from "./js/editor/components";
import { getTokens, parse } from "./js/parser-js";
import * as serviceWorker from "./serviceWorker";
import { LoremIpsum } from "lorem-ipsum";

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

const content = [
  "/* COMMENTAIRES */",
  'const toto = function(){";',
  '\tconsole.log("coucou");',
  "}"
];

ReactDOM.render(
  <React.Fragment>
    <Editor
      content={content}
      dictionnary={{ variables: getWords() }}
      getTokens={getTokens}
      parse={parse}
    />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
