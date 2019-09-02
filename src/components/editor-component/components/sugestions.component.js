import React, { useMemo, useEffect, useContext } from "react";
import classnames from "classnames";
import * as actions from "../editor.actions";
import { EditorContext } from "./editor-panel.component";

const Suggestions = ({ suggest }) => {
  const {
    prefix,
    dispatch,
    cursorRect,
    suggesterState: { index }
  } = useContext(EditorContext);

  const Item = createItem(dispatch);
  const suggestions = useMemo(() => (prefix ? suggest(prefix) : {}), [
    suggest,
    prefix
  ]);
  const size = getSuggestionsLength(suggestions);
  const open = size > 0;
  useEffect(() => {
    dispatch(
      actions.setSuggesterState({
        open,
        size,
        value: index >= 0 ? getSuggestionsValue(suggestions, index) : undefined
      })
    );
  }, [open, size, dispatch, suggestions, index]);
  //
  let i = 0;
  const sections = Object.entries(suggestions).reduce(
    (a, [section, valeurs]) => [
      ...a,
      ...valeurs.map(value => (
        <Item
          key={`${section}-${value}`}
          active={index === i++}
          value={value}
          type={section.substr(0, 3)}
          prefix={prefix}
        />
      ))
    ],
    []
  );

  return open ? (
    <React.Fragment>
      <div
        className="editor-suggestions"
        style={{
          left: `${cursorRect.right}px`,
          top: `${cursorRect.bottom}px`
        }}
        onMouseOver={() => {
          if (index !== -1) dispatch(actions.resetSuggesterIndex());
        }}
      >
        {sections}
      </div>
    </React.Fragment>
  ) : null;
};

// {suggestions.variables.map((value, i) => (
//   <Item
//     key={value}
//     active={index === i}
//     value={value}
//     type="var"
//     prefix={prefix}
//   />
// ))

/* */
const getSuggestionsLength = (suggestions = {}) =>
  Object.values(suggestions).reduce(
    (a, t) => (t && Array.isArray(t) && t.length > 0 ? a + t.length : a),
    0
  );

const getSuggestionsValue = (suggestions, index) =>
  Object.values(suggestions).reduce((a, t) => [...a, ...t], [])[index];

/* */
const createItem = dispatch => ({ value, type, prefix, active }) => {
  return (
    <div
      className={classnames("suggestion", { active })}
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
