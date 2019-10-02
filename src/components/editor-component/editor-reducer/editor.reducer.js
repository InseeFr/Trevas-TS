import * as actions from '../editor-actions';
import { getNewRow, getRowLength } from './reducers-tools';

/* */
const reduceUpdateErrors = (state, { payload: { errors } }) => ({
	...state,
	errors,
});

/* */
const reduceCheckIndex = state => ({
	...state,
	index: Math.min(state.index, getRowLength(state)),
});

/* */
const reduceExitEditor = state => ({
	...state,
	focusedRow: undefined,
	prefix: undefined,
	cursorRect: undefined,
	index: undefined,
});

/* */
const reduceChangeEditorContent = (state, { payload: { content } }) => ({
	...state,
	lines: content.map((row, i) => getNewRow(row, i)),
});

/* */
const reducer = (state, action) => {
	switch (action.type) {
		case actions.UPDATE_ERRORS:
			return reduceUpdateErrors(state, action);
		case actions.EXIT_EDITOR:
			return reduceExitEditor(state);
		case actions.CHANGE_EDITOR_CONTENT:
			return reduceChangeEditorContent(state, action);
		case actions.CHECK_INDEX:
			return reduceCheckIndex(state);
		default:
			return state;
	}
};

export default reducer;
