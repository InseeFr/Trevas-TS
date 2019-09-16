/* SET_CURSOR_RECT */
export const SET_CURSOR_RECT = 'editor/set-cursor-rect';
export const setCursorRect = rect => ({
	type: SET_CURSOR_RECT,
	payload: { rect },
});

/* SET_CURSOR_POSITION */
export const SET_CURSOR_POSITION = 'editor/set-cursor-position';
export const setCursorPosition = (numberRow, index) => ({
	type: SET_CURSOR_POSITION,
	payload: { numberRow, index },
});
