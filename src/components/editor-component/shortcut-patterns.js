import * as actions from "./editor.actions";
import { getSelection } from "./selection-tools";
import clipboard from "./clipboard";

const SHORT_CUTS = new Map();

/* */
const unmappedPattern = pattern => () => {
  console.debug(`unmapped pattern: ${pattern}`);
  return false;
};

/* cut to clipboard */
const cut = (dispatch, state) => {
  if (state.selection) {
    copy(dispatch, state);
    dispatch(actions.deleteSelection());
  }
  return true;
};

/* paste clipboard */
const paste = (dispatch, state) => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.readText().then(text => {
      if (text && text.length > 0) {
        if (state.selection) dispatch(actions.deleteSelection());
        dispatch(actions.insertText(text));
      }
    });
  } else {
    console.warn("I need to find a clipboard polyfill !");
  }
  return true;
};

/* select all */
const selectAll = (dispatch, state) => {
  dispatch(
    actions.setSelection({
      start: { row: 0, index: 0 },
      stop: {
        row: state.lines.length - 1,
        index: state.lines[state.lines.length - 1].value.length
      }
    })
  );
  return true;
};

/* copy to clipboard */
const copy = (dispatch, state) => {
  if (state.selection) {
    const content = getSelection(state);
    clipboard.copy(content);
  }
  return true;
};

/* MAPPING */
SHORT_CUTS.set("ctrl|x", cut);
SHORT_CUTS.set("ctrl|c", copy);
SHORT_CUTS.set("ctrl|v", paste);
SHORT_CUTS.set("ctrl|a", selectAll);

const getPattern = ({ altKey, shiftKey, ctrlKey, key }) =>
  `${altKey ? "alt|" : ""}${shiftKey ? "shift|" : ""}${ctrlKey ? "ctrl|" : ""}${
    key ? key : ""
  }`;

const createShortcutsProvider = shortcutsMap => ({
  get: (model = {}) => {
    const pattern = getPattern(model);
    return {
      execute: shortcutsMap.has(pattern)
        ? shortcutsMap.get(pattern)
        : unmappedPattern(pattern)
    };
  }
});

/* */
export const composeShortcuts = (patterns = {}, erase = false) => {
  const newMap = Object.entries(patterns).reduce((map, [pattern, action]) => {
    if ((erase || !map.has(pattern)) && typeof action === "function") {
      map.set(pattern, action);
    }

    return map;
  }, new Map(SHORT_CUTS));

  return createShortcutsProvider(newMap);
};

/* */
export default composeShortcuts(SHORT_CUTS);
