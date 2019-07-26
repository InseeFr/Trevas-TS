import React, { useMemo, useState, useContext } from "react";

import * as actions from "./editor.actions";
import { EditorContext } from "./editor.component";

const Suggestions = ({ suggest }) => {
  const { cursorRect, prefix, dispatch } = useContext(EditorContext);

  const Item = createItem(dispatch);
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
    >
      {suggestions.variables.map((value, i) => (
        <Item key={value} value={value} type="var" prefix={prefix} />
      ))}
    </div>
  ) : null;
};

/* */
const getState = (suggestions = {}) =>
  Object.values(suggestions).reduce(
    (a, t) => (t && Array.isArray(t) && t.length > 0) || a,
    false
  );

/* */
const createItem = dispatch => ({ value, type, prefix }) => {
  return (
    <div
      className="suggestion"
      onMouseDown={e => {
        e.stopPropagation();
        dispatch(actions.suggestToken(value));
      }}
    >
      <span className="type">{type}</span>
      <span className="valeur">
        <span className="prefix">{prefix}</span>
        {value.substr(prefix.length)}
      </span>
    </div>
  );
};

export default Suggestions;
