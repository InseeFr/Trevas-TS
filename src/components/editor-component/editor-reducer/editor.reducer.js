import * as actions from '../editor-actions';
import { getNewRow, getRowLength } from './reducers-tools';

/* */
const reduceCheckIndex = state => ({
	...state,
	index: Math.min(state.index, getRowLength(state)),
});

/* */
const reducer = (state, action) => {
	switch (action.type) {
		/* ERRORS */
		case actions.UPDATE_ERRORS:
			return { ...state, errors: action.payload.errors };

		/* */
		case actions.EXIT_EDITOR:
			return {
				...state,
				focusedRow: undefined,
				prefix: undefined,
				cursorRect: undefined,
				index: undefined,
			};

		/* */
		case actions.CHANGE_EDITOR_CONTENT:
			return {
				...state,
				lines: action.payload.content.map((row, i) => getNewRow(row, i)),
			};

		case actions.CHECK_INDEX:
			return reduceCheckIndex(state);

		default:
			return state;
	}
};

export default reducer;
