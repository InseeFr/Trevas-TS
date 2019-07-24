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
const Focused = ({ start, numberRow, stop, selection, value, ...rest }) => {
  const { index, dispatch } = useContext(EditorContext);
  return (
    <span
      className="token-with-cursor"
      onMouseDown={e => {
        e.stopPropagation();
        dispatch(actions.startSelection(numberRow, start));
      }}
    >
      <Unfocused
        {...rest}
        value={value.substr(0, index - start)}
        start={start}
        stop={index - 1}
        selection={
          selection
            ? {
                start: Math.max(0, selection.start),
                stop: Math.min(selection.stop, index - start)
              }
            : undefined
        }
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
const Unfocused = ({ className, numberRow, value, start, stop, selection }) => {
  const { dispatch } = useContext(EditorContext);
  return (
    <span
      className={classnames("token", className)}
      onDoubleClick={e => e.stopPropagation()}
      onMouseDown={e => {
        e.stopPropagation();
        dispatch(actions.startSelection(numberRow, start));
      }}
      onMouseUp={e => {
        e.stopPropagation();
        dispatch(
          actions.stopSelection(
            numberRow,
            window.getSelection().anchorOffset,
            window.getSelection().extentOffset + start
          )
        );
      }}
    >
      {selection
        ? getContentWithSelection({ value, start, stop, selection })
        : value}
    </span>
  );
};

const getContentWithSelection = ({ selection, start, stop, value }) => {
  return (
    <React.Fragment>
      {value.substr(0, Math.max(0, selection.start))}
      <span className="unfocused-token-selection">
        {value.substr(selection.start, selection.stop - selection.start + 1)}
      </span>
      {value.substr(selection.stop + 1)}
    </React.Fragment>
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
