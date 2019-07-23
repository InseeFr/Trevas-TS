import React, { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import Suggestions from "./sugestions.component";
import Line from "./line.component";
import "./editor.scss";
import createSuggester from "./suggestions-manager";

/* */
// const Editor = ({ content = [{}], getTokens, dictionnary = {} }) => {
//   // token suggestions
//   const [suggest, setSuggest] = useState(undefined);
//   const [pos, setPos] = useState({ x: undefined, y: undefined });
//   const [token, setToken] = useState(undefined);
//   const [open, setOpen] = useState(false);
//   // lines
//   const [lines, setLines] = useState(() => {
//     return content.map((value, num) => ({ value, num, focused: num === 0 }));
//   });
//   const [focused, setFocused] = useState(0);
//   useEffect(() => {
//     const prepareIndex = async () => {
//       const sug = await createSuggester(dictionnary);
//       setSuggest(() => sug);
//     };
//     prepareIndex();
//   }, [dictionnary]);

//   return (
//     <TokenContext.Provider value={{ setPos, setToken, setOpen, open }}>
//       <div
//         className="editor"
//         onClick={e => {
//           if (open) setOpen(false);
//         }}
//       >
//         {lines.map(({ value }, i) => (
//           <Line
//             key={`${i}`}
//             num={i}
//             focused={i === focused}
//             value={value || ""}
//             focus={ix => setFocused(ix)}
//             add={(ix, start, end) => {
//               setLines(addRow(lines, ix, start, end));
//               setFocused(ix + 1);
//             }}
//             remove={(ix, rest) => {
//               setLines(removeRow(lines, ix, rest));
//               setFocused(Math.max(0, ix - 1));
//             }}
//             change={(val, ix) => setLines(changeRow(lines, val, ix))}
//             getTokens={getTokens}
//           />
//         ))}
//         {suggest ? (
//           <Suggestions pos={pos} prefix={token} open={open} suggest={suggest} />
//         ) : null}
//       </div>
//     </TokenContext.Provider>
//   );
// };

const Editor = ({ content = [{}], getTokens, dictionnary = {} }) => {
  const [lines, setLines] = useState([{}]);
  const [index, setIndex] = useState(0);
  const [focusedRow, setFocusedRow] = useState(undefined);

  useEffect(() => {
    setLines(content.map(row => ({ tokens: getTokens(row), value: row })));
  }, [content, getTokens]);

  return (
    <div className="editor">
      {lines.map(({ tokens, value }, i) => (
        <Line key={`${i}-value`} tokens={tokens} number={i} />
      ))}
    </div>
  );
};

/* */
const addRow = (tab = {}, index, start = "", end = "") =>
  tab.reduce(
    (a, o, i) =>
      i !== index ? [...a, o] : [...a, { ...o, value: start }, { value: end }],
    []
  );

/* */
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

/* */
const changeRow = (tab = {}, value, index) => {
  const rows = tab.reduce(
    (a, o, i) => (i !== index ? [...a, o] : [...a, { ...o, value }]),
    []
  );
  return rows;
};

/* */
Editor.proTypes = {
  getTokens: PropTypes.func.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string })),
  dictionnary: PropTypes.shape({
    variables: PropTypes.arrayOf(PropTypes.string)
  })
};

export const TokenContext = createContext({});
export default Editor;
