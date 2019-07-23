import React, { useState, createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import Line from "./line.component";
import KEY, { isUnbindedKey } from "./key-bind";
import Suggestions from "./sugestions.component";
import createSuggester from "./suggestions-manager";

import "./editor.scss";

const initialState = {
  lines: [{ value: "", tokens: [] }],
  index: 0,
  focusedRow: undefined
};

const reducer = (state, action) => {
  const { index, focusedRow, lines } = action;
  switch (action.type) {
    case "change-cursor-position":
      return { ...state, index, focusedRow };
    case "change-editor-content":
      return { ...state, lines };
    case KEY.ARROW_LEFT:
      return reduceKeyLeft(state);
    case KEY.ARROW_RIGHT:
      return reduceKeyRight(state);
    case KEY.ARROW_UP:
      return { ...state, focusedRow: Math.max(0, state.focusedRow - 1) };
    case KEY.ARROW_DOWN:
      return {
        ...state,
        focusedRow: Math.min(state.lines.length - 1, state.focusedRow + 1)
      };
    case "check-index":
      return { ...state, index: Math.min(state.index, getRowLength(state)) };
    default:
      throw new Error(`Unbinded event ${action.type}`);
  }
};

/* */
const reduceKeyLeft = state => {
  const focusedRow =
    state.index - 1 < 0 ? Math.max(0, state.focusedRow - 1) : state.focusedRow;
  const index =
    state.index - 1 < 0
      ? state.focusedRow === 0
        ? state.focusedRow
        : getRowLength({ ...state, focusedRow })
      : state.index - 1;

  return { ...state, index, focusedRow };
};

/* */
const reduceKeyRight = state => {
  const currentLength = getRowLength(state);
  // Math.min(getRowLength(state), state.index + 1)
  const focusedRow =
    state.index + 1 > currentLength
      ? Math.min(state.lines.length - 1, state.focusedRow + 1)
      : state.focusedRow;
  const index =
    state.index + 1 > currentLength
      ? state.focusedRow === state.lines.length - 1
        ? getRowLength({ ...state, focusedRow })
        : 0
      : state.index + 1;

  return { ...state, index, focusedRow };
};

const Editor = ({ content = [{}], getTokens, dictionnary = {} }) => {
  const [{ lines, index, focusedRow }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    dispatch({
      type: "change-editor-content",
      lines: content.map(row => ({ tokens: getTokens(row), value: row }))
    });
  }, [content, getTokens]);

  return (
    <EditorContext.Provider value={{ index, dispatch }}>
      <div
        className="editor"
        onKeyDown={e => {
          e.stopPropagation();
          keyDownCallback(dispatch)(e.key);
        }}
      >
        {lines.map(({ tokens, value }, i) => (
          <Line
            key={`${i}-value`}
            tokens={tokens}
            length={value.length}
            number={i}
            index={index}
            focused={focusedRow === i}
          />
        ))}
      </div>
    </EditorContext.Provider>
  );
};

/* */
const keyDownCallback = dispatch => key => {
  if (KEY.isUnbindedKey(key)) return;
  switch (key) {
    case KEY.ARROW_UP:
    case KEY.ARROW_DOWN:
    case KEY.ARROW_LEFT:
    case KEY.ARROW_RIGHT:
      dispatch({ type: key });
      dispatch({ type: "check-index" });
      break;
    default:
      break;
  }
};

const getRow = ({ lines, focusedRow }) => lines[focusedRow];

const getRowLength = state => getRow(state).value.length;

/* */
const createHandlerClickRow = ({ setIndex, setFocusedRow }) => (
  numberRow,
  indexInRow
) => {
  setIndex(indexInRow);
  setFocusedRow(numberRow);
  return false;
};

/* */
const addRow = (tab = {}, index, start = "", end = "") =>
  tab.reduce(
    (a, o, i) =>
      i !== index ? [...a, o] : [...a, { ...o, value: start }, { value: end }],
    []
  );

/* */
const removeRow = (tab = [], index, rest) => {
  const result = tab.reduce(
    (a, o, i) =>
      i === index - 1
        ? [...a, { ...o, value: `${o.value}${rest}` }]
        : i !== index
        ? [...a, o]
        : a,
    []
  );
  return result.length === 0 ? [{}] : result;
};

/* */
const changeRow = (tab = {}, value, index) => {
  const rows = tab.reduce(
    (a, o, i) => (i !== index ? [...a, o] : [...a, { ...o, value }]),
    []
  );
  return rows;
};

/* */
Editor.proTypes = {
  getTokens: PropTypes.func.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string })),
  dictionnary: PropTypes.shape({
    variables: PropTypes.arrayOf(PropTypes.string)
  })
};

export const TokenContext = createContext({});
export const EditorContext = createContext({});
export default Editor;
