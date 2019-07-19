import React, { useState, createContext, useEffect } from "react";
import { getTokens } from "../parser-vtl";
import Suggestions from "./sugestions.component";
import Line from "./line.component";
import "./editor.scss";

// const test = rule => {
//   //
//   const chars = new antlr4.InputStream("a=5+3\nb=a+4\nPRINT a\n");
//   const lexer = new PlusLexer(chars);
//   const tokens = new antlr4.CommonTokenStream(lexer);
//   const parser = new PlusParser(tokens);
//   parser.buildParseTrees = true;
//   var tree = parser.plus();

//   const extractor = new CustomPlusListener();
//   antlr4.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree);

//   console.log(tokens);
// };

/* */
const Editor = ({ content = [{}] }) => {
  // token suggestions
  const [pos, setPos] = useState({ x: undefined, y: undefined });
  const [token, setToken] = useState(undefined);
  const [open, setOpen] = useState(false);
  // lines
  const [lines, setLines] = useState(() => {
    return content.map((value, num) => ({ value, num, focused: num === 0 }));
  });
  const [focused, setFocused] = useState(0);
  useEffect(() => {
    console.log(pos, token);
  }, [pos, token]);

  return (
    <TokenContext.Provider value={{ setPos, setToken, setOpen, open }}>
      <div
        className="editor"
        onClick={e => {
          if (open) setOpen(false);
        }}
      >
        {lines.map(({ value }, i) => (
          <Line
            key={`${i}`}
            num={i}
            focused={i === focused}
            value={value || ""}
            focus={ix => setFocused(ix)}
            add={(ix, start, end) => {
              setLines(addRow(lines, ix, start, end));
              setFocused(ix + 1);
            }}
            remove={(ix, rest) => {
              setLines(removeRow(lines, ix, rest));
              setFocused(Math.max(0, ix - 1));
            }}
            change={(val, ix) => setLines(changeRow(lines, val, ix))}
            getTokens={getTokens}
          />
        ))}
        <Suggestions pos={pos} token={token} open={open} />
      </div>
    </TokenContext.Provider>
  );
};

/* */

const addRow = (tab = {}, index, start = "", end = "") =>
  tab.reduce(
    (a, o, i) =>
      i !== index ? [...a, o] : [...a, { ...o, value: start }, { value: end }],
    []
  );

const removeRow = (tab = [], index, rest) => {
  const result = tab.reduce(
    (a, o, i) =>
      i === index - 1
        ? [...a, { ...o, value: `${o.value}${rest}` }]
        : i !== index
        ? [...a, o]
        : a,
    []
  );
  return result.length === 0 ? [{}] : result;
};
const changeRow = (tab = {}, value, index) => {
  const rows = tab.reduce(
    (a, o, i) => (i !== index ? [...a, o] : [...a, { ...o, value }]),
    []
  );
  return rows;
};

export const TokenContext = createContext({});
export default Editor;
