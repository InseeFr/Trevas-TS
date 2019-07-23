import React, { useContext, useEffect } from "react";
import classnames from "classnames";
import Cursor from "./cursor.component";
import { EditorContext } from "./editor.component";
import { tokenProps } from "./editor-prop-types";

const Token = props => {
  const { className, focused } = props;

  return className === "unmapped" ? (
    <Unmapped {...props} />
  ) : focused ? (
    <Focused {...props} />
  ) : (
    <Unfocused {...props} />
  );
};

Token.propTypes = tokenProps;

/* */
const Focused = ({ start, stop, value, ...rest }) => {
  const { index } = useContext(EditorContext);
  return (
    <span className="word">
      <Unfocused
        {...rest}
        value={value.substr(0, index - start)}
        start={start}
        stop={index - 1}
      />
      <span style={{ position: "relative" }}>
        <Unfocused
          {...rest}
          value={value.substr(index - start)}
          start={index}
          stop={stop}
        />
        <Cursor />
      </span>
    </span>
  );
};

/* */
const Unfocused = ({ className, numberRow, value, start }) => {
  const { dispatch } = useContext(EditorContext);
  return (
    <span
      className={className}
      onDoubleClick={e => e.stopPropagation()}
      onClick={e => {
        e.stopPropagation();
        dispatch({
          type: "change-cursor-position",
          focusedRow: numberRow,
          index: window.getSelection().anchorOffset + start
        });
        // handleClickRow(numberRow, window.getSelection().anchorOffset + start);
      }}
    >
      {value}
    </span>
  );
};

/* */
const Unmapped = ({ value, focused, ...props }) => {
  const classNames = classnames("unmapped", "vtl-commons");
  const value_ = value.replace(/\s/g, " ");
  return focused ? (
    <Focused className={classNames} value={value_} {...props} />
  ) : (
    <Unfocused className={classNames} value={value_} {...props} />
  );
};

// (
//   <span className={classnames("unmapped", "vtl-commons")} onClick={handleClick}>
//     {value.replace(/\s/g, " ")}
//   </span>
// );

export default Token;

// export const createCheckTokens = (select, getTokens) => (
//   content,
//   ligneIndex,
//   focused
// ) => {
//   const tokens = getTokens(content);
//   const transfo = tokens.reduce(
//     ({ result, index }, { start, stop, value, kind }, idx) => {
//       const tmp = [...result];
//       if (index !== start) {
//         tmp.push(
//           <WhiteSpace
//             key={`space-${idx}`}
//             length={start - index}
//             start={index}
//             value={content.substr(index, start - index)}
//             select={select}
//             focused={focused && ligneIndex >= index && ligneIndex < start}
//             index={ligneIndex}
//             className="whitespace"
//           />
//         );
//       }
//       tmp.push(
//         <Token
//           key={`token-${idx}`}
//           start={start}
//           value={value}
//           select={select}
//           focused={focused && ligneIndex >= start && ligneIndex <= stop}
//           index={ligneIndex}
//           className={kind}
//         />
//       );
//       return { result: tmp, index: stop + 1 };
//     },
//     { result: [], index: 0 }
//   );
//   // console.log(transfo, content.length);
//   if (transfo.index < content.length) {
//     transfo.result.push(
//       <WhiteSpace
//         key={`space-${transfo.result.length}`}
//         length={content.length - transfo.index}
//         start={transfo.index}
//         value={content.substr(transfo.index, content.length - transfo.index)}
//         select={select}
//         focused={
//           focused && ligneIndex >= transfo.index && ligneIndex < content.length
//         }
//         index={ligneIndex}
//         className="whitespace"
//       />
//     );
//   }
//   return transfo.result;
// };

// export const WhiteSpace = ({ length, value, ...props }) => {
//   return <Token {...props} value={value.replace(/\s/g, " ")} />;
// };
