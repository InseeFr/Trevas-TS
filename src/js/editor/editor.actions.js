/* SELECTION */
export const START_SELECTION = 'editor/start-selection';
export const STOP_SELECTION = 'editor/stop-selection';
export const ERASE_SELECTION = 'editor/erase-selection';

export const startSelection = (numberRow, start) => ({
	type: START_SELECTION,
	payload: { numberRow, start }
});
export const stopSelection = (rowStop, anchorOffset, extentOffset) => ({
	type: STOP_SELECTION,
	payload: { rowStop, anchorOffset, extentOffset }
});
export const eraseSelection = () => ({ type: ERASE_SELECTION });

/* */
// case 'change-cursor-position':
// 			return { ...state, index, focusedRow };
export const SET_CURSOR_POSITION = 'editor/set-cursor-position';

export const setCursorPosition = (numberRow, index) => ({ type: SET_CURSOR_POSITION, payload: { numberRow, index } });
