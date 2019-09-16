/* MOUSE_DOWN_TOKEN */
export const MOUSE_DOWN_TOKEN = 'editor/mouse-down-token';
export const mouseDownToken = ({ numberRow, numberToken }) => ({
	type: MOUSE_DOWN_TOKEN,
	payload: { numberRow, numberToken },
});

/* MOUSE_UP_TOKEN */
export const MOUSE_UP_TOKEN = 'editor/mouse-up-token';
export const mouseUpToken = args => ({
	type: MOUSE_UP_TOKEN,
	payload: { ...args },
});

/* CHECK_INDEX */
export const CHECK_INDEX = 'editor/check-index';
export const checkIndex = () => ({ type: CHECK_INDEX });

/* EXIT_EDITOR */
export const EXIT_EDITOR = 'editor/exit-editor';
export const exitEditor = () => ({ type: EXIT_EDITOR });

/* UPDATE_ERRORS */
export const UPDATE_ERRORS = 'editor/update-errors';
export const updateErrors = (errors = []) => ({
	type: UPDATE_ERRORS,
	payload: { errors },
});

/* */
export const CHANGE_EDITOR_CONTENT = 'editor/change-editor-content';
export const changeEditorContent = content => ({
	type: CHANGE_EDITOR_CONTENT,
	payload: { content },
});
