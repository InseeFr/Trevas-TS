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
const Focused = props => {
  const { start, value } = props;
  const { index } = useContext(EditorContext);
  return (
    <span className="token-with-cursor">
      <Unfocused
        {...props}
        value={value.substr(0, index - start)}
        stop={index - 1}
      />
      <span style={{ position: "relative" }}>
        <Unfocused
          {...props}
          value={value.substr(index - start)}
          start={index}
        />
        <Cursor />
      </span>
    </span>
  );
};

/* */
const Unfocused = ({ className, numberRow, numberToken, value, start }) => {
  const { dispatch } = useContext(EditorContext);
  return (
    <span
      className={classnames("token", className)}
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
      {value.replace(/\s/g, " ")}
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

export default Token;
