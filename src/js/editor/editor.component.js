import React, { useMemo, createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import Line from "./line.component";
import editorReducer, { initializer } from "./editor.reducer";
import * as actions from "./editor.actions";
import KEY from "./key-bind";
import Suggestions from "./sugestions.component";
import createSuggester from "./suggestions-manager";

import "./editor.scss";

const Editor = ({ content = [], getTokens, dictionnary = {} }) => {
  const [state, dispatch] = useReducer(editorReducer, getTokens, initializer);
  const { lines, index, focusedRow } = state;

  useEffect(() => {
    dispatch({
      type: "change-editor-content",
      lines: content
    });
  }, [content, getTokens]);

  const suggester = useMemo(() => createSuggester(dictionnary), [dictionnary]);

  return (
    <EditorContext.Provider value={{ index, dispatch }}>
      <div
        className="editor"
        onKeyDown={e => keyDownCallback(dispatch)(e)}
        onMouseDown={e => onMouseDownCallback(dispatch, state)(e)}
      >
        {lines.map(({ tokens, value }, i) => (
          <Line
            key={`${i}-line`}
            tokens={tokens}
            length={value.length}
            number={i}
            index={index}
            focused={focusedRow === i}
          />
        ))}
        <Suggestions suggest={suggester} />
      </div>
    </EditorContext.Provider>
  );
};

/* */
const getFocusedToken = lines => (focusedRow, index) =>
  focusedRow >= 0
    ? lines[focusedRow].value.length === index
      ? lines[focusedRow].tokens[lines[focusedRow].tokens.length - 1]
      : lines[focusedRow].tokens.reduce(
          (a, t) => (index >= t.start && index < t.stop ? t : a),
          undefined
        )
    : undefined;

/* */
const onMouseDownCallback = (dispatch, state) => e => {
  const { prefix } = state;
  if (prefix) dispatch(actions.resetPrefix());
};

/* */
const keyDownCallback = dispatch => e => {
  if (KEY.isUnbindedKey(e.key)) return;
  e.stopPropagation();
  e.preventDefault();
  const { key } = e;
  switch (key) {
    case KEY.ARROW_UP:
    case KEY.ARROW_DOWN:
      dispatch({ type: key });
      dispatch(actions.checkIndex());
      break;
    case KEY.CONTEXT_MENU:
    case KEY.DELETE:
    case KEY.PAGE_UP:
    case KEY.PAGE_DOWN:
    case KEY.TAB:
    case KEY.ENTER:
    case KEY.HOME:
    case KEY.END:
    case KEY.BACK_SPACE:
    case KEY.ARROW_LEFT:
    case KEY.ARROW_RIGHT:
      dispatch({ type: key });
      dispatch(actions.resetPrefix());
      break;
    default:
      if (isCharCode(key)) {
        dispatch({ type: "pressed-char", key });
        dispatch(actions.checkPrefix());
      }
      break;
  }
};

const isCharCode = c => true; //c && /[\w!@#$%^&*(),.?":{}|<>].{1}/g.test(c);

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
