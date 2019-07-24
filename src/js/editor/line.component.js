import React, { createRef, useEffect, useContext } from "react";
import classnames from "classnames";
import Token from "./token.component";
import Cursor from "./cursor.component";
import { lineProps } from "./editor-prop-types";
import { EditorContext } from "./editor.component";

const Line = ({ tokens = [], number, length, index, focused, selection }) => {
  const { dispatch } = useContext(EditorContext);
  const divEl = createRef();
  useEffect(() => {
    if (focused) {
      divEl.current.focus();
    }
  }, [divEl, focused]);
  return (
    <div
      className="editor-line"
      tabIndex="0"
      ref={divEl}
      onDoubleClick={e => {
        e.stopPropagation();
      }}
      onMouseUp={e => {
        e.stopPropagation();
        dispatch({
          type: "change-cursor-position",
          focusedRow: number,
          index: length
        });
      }}
    >
      <NumberLine number={number} />
      <span className="content">
        {tokens.map((token, i) => (
          <Token
            key={`${i}-${token.value}`}
            {...token}
            numberRow={number}
            numberToken={i}
            focused={focused && index >= token.start && index <= token.stop}
            selection={checkSelection(selection)(token)}
          />
        ))}
        {focused && index === length ? <Cursor endLine={true} /> : null}
      </span>
    </div>
  );
};

const checkSelection = selection => token => {
  const result =
    selection && !tokenOutoffSelection(selection)(token)
      ? {
          start: Math.max(token.start, selection.start) - token.start,
          stop: Math.min(token.stop, selection.stop) - token.start
        }
      : undefined;
  return result;
};

const tokenOutoffSelection = s => token =>
  token.start >= s.stop || token.stop < s.start;

/* */
const NumberLine = ({ focused = false, number }) => (
  <div className={classnames("num", { "num-focused": focused })}>
    {number + 1}
  </div>
);

Line.propTypes = lineProps;

export default Line;
