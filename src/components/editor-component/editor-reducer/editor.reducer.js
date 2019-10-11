import * as actions from '../editor-actions';
import { getNewRow, getRowLength, getCurrentToken } from './reducers-tools';
import { checkSelection } from '../common-tools';

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
const reduceSelectTokenOnCursor = state => {
	const { token } = getCurrentToken(state);
	if (token) {
		const { focusedRow: row } = state;
		const selection = checkSelection({
			anchor: { row, index: token.start },
			extent: { row, index: token.stop + 1 },
		});
		return { ...state, selection, index: selection.extent.index };
	}
	return state;
};

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
		case actions.SELECT_TOKEN_ON_CURSOR:
			return reduceSelectTokenOnCursor(state);
		default:
			return state;
	}
};

export default reducer;
