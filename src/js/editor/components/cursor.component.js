import React, { createRef, useEffect, useContext, useState } from "react";
import { EditorContext } from "./editor-panel.component";
import { setCursorRect } from "../editor.actions";
import classnames from "classnames";
import PropTypes from "prop-types";

/* */
const Cursor = ({ endLine = false }) => {
  const spanEl = createRef();
  const { dispatch } = useContext(EditorContext);
  const [rect, setRect] = useState({ x: undefined, y: undefined });

  useEffect(() => {
    const next = spanEl.current.getBoundingClientRect();
    if (next.right !== rect.right || next.bottom !== rect.bottom) {
      setRect(next);

      dispatch(setCursorRect(next));
    }
  }, [spanEl, rect, dispatch]);

  return (
    <span
      ref={spanEl}
      className={classnames({ "cursor-end-line": endLine, cursor: !endLine })}
      onClick={e => e.stopPropagation()}
      onDoubleClick={e => e.stopPropagation()}
    />
  );
};

Cursor.propTypes = { endLine: PropTypes.bool };

export default Cursor;
