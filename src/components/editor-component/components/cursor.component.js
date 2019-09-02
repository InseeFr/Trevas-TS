import React, { createRef, useEffect, useContext, useState } from "react";
import { EditorContext } from "./editor-panel.component";
import { setCursorRect } from "../editor.actions";

/* */
const Cursor = ({ top, left }) => {
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
      className="cursor"
      onClick={e => e.stopPropagation()}
      onDoubleClick={e => e.stopPropagation()}
      style={{
        left: `${left}px`,
        top: `${top}px`
      }}
    />
  );
};

export default Cursor;
