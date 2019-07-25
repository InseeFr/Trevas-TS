import React, { useContext } from "react";
import classnames from "classnames";
import Cursor from "./cursor.component";
import * as actions from "./editor.actions";
import { EditorContext } from "./editor.component";
import { tokenProps } from "./editor-prop-types";

/* */
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
const Focused = ({ start, numberRow, stop, value, ...rest }) => {
  const { index } = useContext(EditorContext);
  return (
    <span className="token-with-cursor">
      <Unfocused
        {...rest}
        numberRow={numberRow}
        value={value.substr(0, index - start)}
        start={start}
        stop={index - 1}
      />
      <span style={{ position: "relative" }}>
        <Unfocused
          {...rest}
          numberRow={numberRow}
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
      className={classnames("token", className)}
      onDoubleClick={e => e.stopPropagation()}
      onMouseUp={e => {
        e.stopPropagation();
        dispatch(
          actions.setCursorPosition(
            numberRow,
            window.getSelection().anchorOffset + start
          )
        );
      }}
    >
      {value}
    </span>
  );
};

/* */
const Unmapped = ({ value, focused, ...props }) => {
  const classNames = classnames("unmapped", "vtl-commons");
  const value_ = value.replace(/\s/g, " ");
  return focused ? (
    <Focused className={classNames} value={value_} {...props} />
  ) : (
    <Unfocused className={classNames} value={value_} {...props} />
  );
};

export default Token;
