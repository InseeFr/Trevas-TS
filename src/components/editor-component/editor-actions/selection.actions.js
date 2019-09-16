/* SET_SELECTION */
export const SET_SELECTION = 'editor/set-selection';
export const setSelection = selection => ({
	type: SET_SELECTION,
	payload: { selection },
});

/* DELETE_SELECTION */
export const DELETE_SELECTION = 'editor/delete-selection';
export const deleteSelection = () => ({
	type: DELETE_SELECTION,
});

/* INSERT_TEXT */
export const INSERT_TEXT = 'editor/insert-text';
export const insertText = text => ({
	type: INSERT_TEXT,
	payload: { text },
});
