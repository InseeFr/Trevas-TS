import React, { useContext, useEffect } from "react";
import KEY from "../key-bind";
import { EditorContext } from "./editor-panel.component";
import Line from "./line.component";
import * as actions from "../editor.actions";

const Editor = ({ parse }) => {
  const state = useContext(EditorContext);
  const { lines, focusedRow, index, dispatch, tokensEl } = state;

  useEffect(() => {
    const code = lines.reduce(
      (a, { value }) => (value.length > 0 ? `${a}${value}\n` : a),
      ""
    );
    const { errors, dico } = parse(code);

    dispatch(actions.updateErrors(errors));
  }, [lines, parse, dispatch]);

  return (
    <div className="panel-editor">
      <div
        className="editor"
        onKeyDown={suggesterKeyDownProxy(keyDownCallback)(
          dispatch,
          state,
          tokensEl
        )}
        onMouseDown={onMouseDownCallback(dispatch, state)}
        onBlur={onBlurCallback(dispatch, state)}
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
      </div>
    </div>
  );
};

/* */
const suggesterKeyDownProxy = callback => (dispatch, state, tokensEl) => {
  const callee = callback(dispatch, state, tokensEl);

  return e => {
    const { open, index } = state.suggesterState;
    if (open) {
      switch (e.key) {
        case KEY.ARROW_UP:
          dispatch(actions.previousSuggestion());
          return false;
        case KEY.ARROW_DOWN:
          dispatch(actions.nextSuggestion());
          return false;
        case KEY.ENTER:
          if (index > -1) {
            dispatch(actions.suggestToken(state.suggesterState.value));
            return false;
          }
          return callee(e);
        default:
          dispatch(actions.resetSuggesterIndex());
          return callee(e);
      }
    }
    return callee(e);
  };
};

/* */
const keyDownCallback = (dispatch, state, tokensEl) => e => {
  if (KEY.isUnbindedKey(e.key)) return;
  e.stopPropagation();
  e.preventDefault();
  const { key } = e;
  switch (key) {
    case KEY.ARROW_UP:
    case KEY.ARROW_DOWN:
      dispatch({ type: key });
      dispatch(actions.checkIndex());
      dispatch(actions.resetPrefix());
      break;
    case KEY.DELETE:
    case KEY.ENTER:
    case KEY.BACK_SPACE:
      if (isSelection()) {
        checkForDeleteSelection(dispatch, tokensEl);
        break;
      }
      dispatch({ type: key });
      dispatch(actions.checkPrefix());
      break;
    case KEY.PAGE_UP:
    case KEY.PAGE_DOWN:
    case KEY.TAB:
    case KEY.HOME:
    case KEY.END:
    case KEY.CONTEXT_MENU:
    case KEY.ARROW_LEFT:
    case KEY.ARROW_RIGHT:
      dispatch({ type: key });
      dispatch(actions.resetPrefix());
      break;
    default:
      if (isCharCode(key)) {
        dispatch(actions.insertCharacter(key));
        dispatch(actions.checkPrefix());
      }
      break;
  }
};

const isCharCode = c => true; //c && /[\w!@#$%^&*(),.?":{}|<>].{1}/g.test(c);

/* */
const onBlurCallback = dispatch => e => {
  e.stopPropagation();
  e.preventDefault();
  dispatch(actions.exitEditor());
};

/* */
const onMouseDownCallback = (dispatch, state) => e => {
  const { prefix } = state;
  if (prefix) dispatch(actions.resetPrefix());
};

/* */
const isSelection = () => {
  const {
    anchorOffset,
    focusOffset,
    anchorNode,
    focusNode
  } = window.getSelection();
  return (
    (focusNode && !focusNode.isEqualNode(anchorNode)) ||
    anchorOffset !== focusOffset
  );
};

/* */
const isInSelection = node =>
  window.getSelection().containsNode(node.firstChild || node);

const isAnchorNode = (anchor, node) =>
  anchor.isSameNode(node.firstChild || node) ? true : false;

const deleteOnLine = (line, token) => `${line.substr(0)}`;

const checkForDeleteSelection = (dispatch, tokensEl) => {
  const selection = window.getSelection();
  const { anchor, extent, tokens } = tokensEl.reduce(
    (
      { tokens, anchor, extent },
      { spanEl, numberRow, numberToken, start, stop, value }
    ) =>
      isInSelection(spanEl.current)
        ? {
            tokens:
              isAnchorNode(selection.extentNode, spanEl.current) ||
              isAnchorNode(selection.anchorNode, spanEl.current)
                ? tokens
                : [...tokens, { numberRow, numberToken, start, stop, value }],
            anchor: isAnchorNode(selection.anchorNode, spanEl.current)
              ? { numberRow, numberToken, start, stop, value }
              : anchor,
            extent: isAnchorNode(selection.extentNode, spanEl.current)
              ? { numberRow, numberToken, start, stop, value }
              : extent
          }
        : { tokens, anchor, extent },
    {
      tokens: [],
      anchor: undefined,
      extent: undefined
    }
  );

  // const tokensFinalized =
  // 	anchor.numberRow < extent.numberRow || anchor.numberToken < extent.numberToken
  // 		? [
  // 				...tokens,
  // 				{ ...anchor, start: anchor.start + selection.anchorOffset, stop: anchor.stop },
  // 				{ ...extent, start: extent.start, stop: extent.start + selection.extentOffset - 1 }
  // 			]
  // 		: [
  // 				...tokens,
  // 				{ ...anchor, start: anchor.start, stop: anchor.start + selection.anchorOffset },
  // 				{ ...extent, start: extent.start + selection.extentOffset, stop: extent.stop }
  // 			];

  // const sel = window.getSelection();
  // dispatch(actions.deleteSelection(selection));
  // sel.extend(sel.anchorNode, 0);
};

// const getNodeInformation = ({ node, numberToken, start, stop }) => {
//   const {
//     anchorOffset,
//     focusOffset,
//     anchorNode,
//     focusNode
//   } = window.getSelection();

//   if (anchorNode.isEqualNode(node))
//     return { numberToken, start: start + anchorOffset, stop };
//   else if (focusNode.isEqualNode(node))
//     return { numberToken, start, stop: start + focusOffset - 1 };
//   return { numberToken, start, stop };
// };

export default Editor;
