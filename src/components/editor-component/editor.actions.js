/* MOUSE_DOWN_TOKEN */
export const MOUSE_DOWN_TOKEN = "editor/mouse-down-token";
export const mouseDownToken = ({ numberRow, numberToken }) => ({
  type: MOUSE_DOWN_TOKEN,
  payload: { numberRow, numberToken }
});

/* MOUSE_UP_TOKEN */
export const MOUSE_UP_TOKEN = "editor/mouse-up-token";
export const mouseUpToken = args => ({
  type: MOUSE_UP_TOKEN,
  payload: { ...args }
});

/* SET_CURSOR_POSITION */
export const SET_CURSOR_POSITION = "editor/set-cursor-position";
export const setCursorPosition = (numberRow, index) => ({
  type: SET_CURSOR_POSITION,
  payload: { numberRow, index }
});

/* CHECK_PREFIX */
export const CHECK_PREFIX = "editor/check-prefix";
export const checkPrefix = char => ({
  type: CHECK_PREFIX
});

/* RESET_PREFIX */
export const RESET_PREFIX = "editor/reset-prefix";
export const resetPrefix = char => ({
  type: RESET_PREFIX
});

/* CHECK_INDEX */
export const CHECK_INDEX = "editor/check-index";
export const checkIndex = () => ({ type: CHECK_INDEX });

/* SET_CURSOR_RECT */
export const SET_CURSOR_RECT = "editor/set-cursor-rect";
export const setCursorRect = rect => ({
  type: SET_CURSOR_RECT,
  payload: { rect }
});

/* INSERT_CHARACTER */
export const INSERT_CHARACTER = "editor/insert-charactere";
export const insertCharacter = char => ({
  type: INSERT_CHARACTER,
  payload: { char }
});

/* INSERT_TEXT */
export const INSERT_TEXT = "editor/insert-text";
export const insertText = text => ({
  type: INSERT_TEXT,
  payload: { text }
});

/* EXIT_EDITOR */
export const EXIT_EDITOR = "editor/exit-editor";
export const exitEditor = () => ({ type: EXIT_EDITOR });

export const SUGGEST_TOKEN = "editor/uggest-token";
export const suggestToken = suggestion => ({
  type: SUGGEST_TOKEN,
  payload: { suggestion }
});

/* SET_SUGGESTER_STATE */
export const SET_SUGGESTER_STATE = "editor/set-suggester-state";
export const setSuggesterState = ({ open, size, value }) => ({
  type: SET_SUGGESTER_STATE,
  payload: { open, size, value }
});

/* SET_SUGGESTER_STATE */
export const RESET_SUGGESTER_INDEX = "editor/reset-suggester-index";
export const resetSuggesterIndex = () => ({
  type: RESET_SUGGESTER_INDEX
});

/* NEXT_SUGGESTION */
export const NEXT_SUGGESTION = "editor/next-suggestion";
export const nextSuggestion = () => ({
  type: NEXT_SUGGESTION
});

/* PREVIOUS_SUGGESTION */
export const PREVIOUS_SUGGESTION = "editor/previous-suggestion";
export const previousSuggestion = () => ({
  type: PREVIOUS_SUGGESTION
});

/* UPDATE_ERRORS */
export const UPDATE_ERRORS = "editor/update-errors";
export const updateErrors = (errors = []) => ({
  type: UPDATE_ERRORS,
  payload: { errors }
});

/* SET_SELECTION */
export const SET_SELECTION = "editor/set-selection";
export const setSelection = selection => ({
  type: SET_SELECTION,
  payload: { selection }
});

/* DELETE_SELECTION */
export const DELETE_SELECTION = "editor/delete-selection";
export const deleteSelection = () => ({
  type: DELETE_SELECTION
});

/* SCROLL UP */
export const SCROLL_UP = "editor/scroll-up";
export const scrollUp = () => ({
  type: SCROLL_UP
});

/* SCROLL DOWN */
export const SCROLL_DOWN = "editor/scroll-down";
export const scrollDown = () => ({
  type: SCROLL_DOWN
});

export const SET_SCROLLRANGE = "editor/set-scrollrange";
export const setScrollrange = scrollRange => ({
  type: SET_SCROLLRANGE,
  payload: { scrollRange }
});
