import KEY from '../key-bind';
import * as actions from '../editor.actions';
import { getNewRow, getRowLength } from './commons-tools';

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
		case 'change-editor-content':
			return {
				...state,
				lines: action.lines.map((row, i) => getNewRow(row, i)),
			};

		case actions.CHECK_INDEX:
			return {
				...state,
				index: Math.min(state.index, getRowLength(state)),
			};

		default:
			return state;
	}
};

export default reducer;
