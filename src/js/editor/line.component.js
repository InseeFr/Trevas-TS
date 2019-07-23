import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Token from "./token.component";
import Cursor from "./cursor.component";
import { lineProps } from "./editor-prop-types";
import { createCheckTokens, WhiteSpace } from "./token.component";
import { TokenContext } from "./editor.component";
import { PlusType } from "./../parser-plus";
import * as KEY from "./key-bind";

// const Line = ({
//   focused,
//   num,
//   remove,
//   add,
//   change,
//   value,
//   focus,
//   getTokens
// }) => {
//   const lineEl = useRef(null);
//   const contentEl = useRef(null);
//   const [content, setContent] = useState(value || "");
//   const [index, setIndex] = useState(0);
//   const transformTokens = createCheckTokens(offset => {
//     setIndex(Math.max(0, offset));
//   }, getTokens);
//   const { setOpen, open } = useContext(TokenContext);
//   /* */
//   useEffect(() => {
//     setContent(value);
//     if (focused) {
//       lineEl.current.focus();
//     }
//   }, [value, focused, num, lineEl]);

//   return (
//     <div
//       tabIndex="0"
//       ref={lineEl}
//       className="editor-line"
//       onFocus={e => {
//         // setIndex(content.length);
//         focus(num);
//       }}
//       onBlur={e => null}
//       onKeyDown={({ key }) => {
//         if (KEY.isUnbindedKey(key)) return;
//         /* */
//         if (KEY.isHome(key)) {
//           setIndex(0);
//         } else if (KEY.isEnd(key)) {
//           setIndex(content.length);
//         } else if (KEY.isArrowUp(key)) {
//           focus(num - 1);
//         } else if (KEY.isArrowDown(key)) {
//           focus(num + 1);
//         } else if (KEY.isArrowLeft(key)) {
//           if (index - 1 < 0) {
//             focus(Math.max(0, num - 1));
//           } else {
//             setIndex(index - 1);
//           }
//         } else if (KEY.isArrowRight(key)) {
//           if (index + 1 > content.length) {
//             focus(num + 1);
//           } else {
//             setIndex(Math.min(content.length, index + 1));
//           }
//         } else if (KEY.isEnter(key)) {
//           add(num, content.substr(0, index), content.substr(index));
//         } else if (KEY.isDelete(key)) {
//           if (index - 1 < 0) {
//             remove(num, content);
//           } else {
//             const val = `${content.substr(0, index - 1)}${content.substr(
//               index
//             )}`;
//             setContent(val);
//             setIndex(index - 1);
//             change(val, num);
//           }
//         } else {
//           if (KEY.isSpace(key) && open) {
//             setOpen(false);
//           } else setOpen(true);
//           const val =
//             index === 0
//               ? `${KEY.getKeyValue(key)}${content}`
//               : `${content.substr(0, index)}${KEY.getKeyValue(
//                   key
//                 )}${content.substr(index)}`;
//           setContent(val);
//           setIndex(index + 1);
//           change(val, num);
//         }
//       }}
//     >
//       <div className={classnames("num", { "num-focused": focused })}>
//         {num + 1}
//       </div>
//       <div className={classnames("content", { "content-focused": focused })}>
//         <span ref={contentEl}>{transformTokens(content, index, focused)}</span>
//         {content.length === index && focused ? <Cursor endLine /> : null}
//       </div>
//     </div>
//   );
// };

const Line = ({ tokens = [], number }) => (
  <div className="editor-line">
    <NumberLine number={number} />
    {tokens.map((token, i) => (
      <Token key={i} {...token} />
    ))}
  </div>
);

/* */
const NumberLine = ({ focused = false, number }) => (
  <div className={classnames("num", { "num-focused": focused })}>
    {number + 1}
  </div>
);

Line.propTypes = lineProps;

export default Line;
