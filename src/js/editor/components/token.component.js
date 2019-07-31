import React, { useContext, createRef, useEffect } from "react";
import classnames from "classnames";
import Cursor from "./cursor.component";
import * as actions from "../editor.actions";
import { EditorContext } from "./editor-panel.component";
import { tokenProps } from "../editor-prop-types";

/* */
const Token = props => {
  const {
    token: { className },
    focused
  } = props;
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
const Focused = props => {
  const {
    token: { start, value }
  } = props;
  const { index } = useContext(EditorContext);
  return (
    <span className="token-with-cursor">
      <Unfocused
        {...props}
        token={{
          ...props.token,
          value: value.substr(0, index - start),
          stop: index - 1
        }}
        cursored="left"
      />
      <span style={{ position: "relative" }}>
        <Unfocused
          {...props}
          token={{
            ...props.token,
            value: value.substr(index - start),
            start: index
          }}
          cursored="right"
        />
        <Cursor />
      </span>
    </span>
  );
};

/* */
const Unfocused = ({
  numberRow,
  numberToken,
  token: { className, typeName, value, start, stop },
  cursored
}) => {
  const { dispatch, tokensEl, index } = useContext(EditorContext);
  const spanEl = createRef();

  // errors.map(err => console.log(err));

  useEffect(() => {
    tokensEl.push({
      spanEl,
      numberRow,
      numberToken,
      start,
      stop,
      value
    });
  }, [spanEl, numberRow, numberToken, tokensEl, start, stop, index, value]);
  return (
    <span
      ref={spanEl}
      title={`${typeName} : ${value}`}
      className={classnames("token", className, {
        "cursor-left": cursored === "left",
        "cursor-right": cursored === "right"
      })}
      onClick={e => {
        e.stopPropagation();
        const selectionData = window.getSelection().anchorNode.data;
        dispatch(
          actions.setCursorPosition(
            numberRow,
            selectionData === value
              ? window.getSelection().anchorOffset + start
              : start
          )
        );
      }}
    >
      {value}
    </span>
  );
};

/* */
const Unmapped = props => {
  const {
    token: { value },
    focused
  } = props;
  const classNames = classnames("unmapped", "vtl-commons");
  return focused ? (
    <Focused className={classNames} value={value} {...props} />
  ) : (
    <Unfocused className={classNames} value={value} {...props} />
  );
};

export default Token;
