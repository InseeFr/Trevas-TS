/* SELECTION */
export const MOUSE_DOWN_TOKEN = "editor/mouse-down-token";
export const MOUSE_UP_TOKEN = "editor/mouse-up-token";

export const mouseDownToken = ({ numberRow, numberToken }) => ({
  type: MOUSE_DOWN_TOKEN,
  payload: { numberRow, numberToken }
});
export const mouseUpToken = args => ({
  type: MOUSE_UP_TOKEN,
  payload: { ...args }
});

/* */
export const SET_CURSOR_POSITION = "editor/set-cursor-position";

export const setCursorPosition = (numberRow, index) => ({
  type: SET_CURSOR_POSITION,
  payload: { numberRow, index }
});
