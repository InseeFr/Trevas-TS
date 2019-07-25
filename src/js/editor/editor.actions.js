/* SELECTION */
export const MOUSE_DOWN_TOKEN = "editor/mouse-down-token";
export const mouseDownToken = ({ numberRow, numberToken }) => ({
  type: MOUSE_DOWN_TOKEN,
  payload: { numberRow, numberToken }
});

export const MOUSE_UP_TOKEN = "editor/mouse-up-token";
export const mouseUpToken = args => ({
  type: MOUSE_UP_TOKEN,
  payload: { ...args }
});

/* */
export const SET_CURSOR_POSITION = "editor/set-cursor-position";
export const setCursorPosition = (numberRow, index, numberToken) => ({
  type: SET_CURSOR_POSITION,
  payload: { numberRow, index }
});

/* PREFIX */
export const CHECK_PREFIX = "editor/check-prefix";
export const checkPrefix = char => ({
  type: CHECK_PREFIX
});

export const RESET_PREFIX = "editor/reset-prefix";
export const resetPrefix = char => ({
  type: RESET_PREFIX
});

/* */
export const CHECK_INDEX = "editor/check-index";
export const checkIndex = () => ({ type: CHECK_INDEX });

/* */
export const SET_CURSOR_RECT = "editor/set-cursor-rect";
export const setCursorRect = rect => ({
  type: SET_CURSOR_RECT,
  payload: { rect }
});
