import React, { useMemo, useState, useContext } from "react";
import { EditorContext } from "./editor.component";

const Suggestions = ({ suggest }) => {
  const { cursorRect, prefix } = useContext(EditorContext);

  const suggestions = useMemo(() => (prefix ? suggest(prefix) : {}), [
    suggest,
    prefix
  ]);
  return getState(suggestions) ? (
    <div
      className="suggestions"
      style={{
        left: `${Math.round(cursorRect.right)}px`,
        top: `${Math.round(cursorRect.bottom)}px`
      }}
    />
  ) : null;
};

const getState = (suggestions = {}) =>
  Object.values(suggestions).reduce(
    (a, t) => (t && Array.isArray(t) && t.length > 0) || a,
    false
  );

export default Suggestions;
