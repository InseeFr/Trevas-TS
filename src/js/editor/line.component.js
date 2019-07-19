import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Cursor from "./cursor.component";
import { createCheckTokens, WhiteSpace } from "./token.component";
import { TokenContext } from "./editor.component";
import { PlusType } from "./../parser-plus";
import * as KEY from "./key-bind";

const Line = ({
  focused,
  num,
  remove,
  add,
  change,
  value,
  focus,
  getTokens
}) => {
  const lineEl = useRef(null);
  const contentEl = useRef(null);
  const [content, setContent] = useState(value || "");
  const [index, setIndex] = useState(0);
  const transformTokens = createCheckTokens(offset => {
    setIndex(Math.max(0, offset));
  }, getTokens);
  const { setOpen, open } = useContext(TokenContext);
  /* */
  useEffect(() => {
    setContent(value);
    if (focused) {
      lineEl.current.focus();
    }
  }, [value, focused, num, lineEl]);

  return (
    <div
      tabIndex="0"
      ref={lineEl}
      className="editor-line"
      onFocus={e => {
        // setIndex(content.length);
        focus(num);
      }}
      onBlur={e => null}
      onKeyDown={({ key }) => {
        if (KEY.isUnbindedKey(key)) return;
        /* */
        if (KEY.isHome(key)) {
          setIndex(0);
        } else if (KEY.isEnd(key)) {
          setIndex(content.length);
        } else if (KEY.isArrowUp(key)) {
          focus(num - 1);
        } else if (KEY.isArrowDown(key)) {
          focus(num + 1);
        } else if (KEY.isArrowLeft(key)) {
          if (index - 1 < 0) {
            focus(Math.max(0, num - 1));
          } else {
            setIndex(index - 1);
          }
        } else if (KEY.isArrowRight(key)) {
          if (index + 1 > content.length) {
            focus(num + 1);
          } else {
            setIndex(Math.min(content.length, index + 1));
          }
        } else if (KEY.isEnter(key)) {
          add(num, content.substr(0, index), content.substr(index));
        } else if (KEY.isDelete(key)) {
          if (index - 1 < 0) {
            remove(num, content);
          } else {
            const val = `${content.substr(0, index - 1)}${content.substr(
              index
            )}`;
            setContent(val);
            setIndex(index - 1);
            change(val, num);
          }
        } else {
          if (KEY.isSpace(key) && open) {
            setOpen(false);
          } else setOpen(true);
          const val =
            index === 0
              ? `${KEY.getKeyValue(key)}${content}`
              : `${content.substr(0, index)}${KEY.getKeyValue(
                  key
                )}${content.substr(index)}`;
          setContent(val);
          setIndex(index + 1);
          change(val, num);
        }
      }}
    >
      <div className={classnames("num", { "num-focused": focused })}>
        {num + 1}
      </div>
      <div className={classnames("content", { "content-focused": focused })}>
        <span ref={contentEl}>{transformTokens(content, index, focused)}</span>
        {content.length === index && focused ? <Cursor endLine /> : null}
      </div>
    </div>
  );
};

// const createCheckTokens = (select, getTokens) => (content, index, focused) => {
//   const tokens = getTokens(content);
//   return tokens.map(({ start, stop, value, kind }, idx) =>
//     kind === PlusType.whiteSpace ? (
//       <WhiteSpace
//         key={idx}
//         length={stop - start + 1}
//         start={start}
//         select={select}
//         focused={focused && index >= start && index < stop}
//         index={index}
//         className={kind}
//       />
//     ) : (
//       <Token
//         key={idx}
//         start={start}
//         value={value}
//         select={select}
//         focused={focused && index >= start && index <= stop}
//         index={index}
//         className={kind}
//       />
//     )
//   );
// };

// Array(length)
//         .fill(" ")
//         .join("")

const trimLast = (string = "") =>
  // string
  //   .split("")
  //   .reduce((a, s, i) => (i < string.length - 1 ? `${a}${s}` : a), "");

  /* */

  // const validateWords = (words = []) =>
  //   words.length > 0 ? words.reduce((a, b) => a, { value: "" }) : words;

  (Line.propTypes = {
    value: PropTypes.string.isRequired,
    focused: PropTypes.bool,
    num: PropTypes.number.isRequired,
    remove: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    focus: PropTypes.func.isRequired,
    getTokens: PropTypes.func.isRequired
  });
export default Line;
