import * as actions from '../editor.actions';
import { getNewRow } from './commons-tools';

const reducer = (state, action) => {
	switch (action.type) {
		/* CURSOR POSITION */
		case actions.SET_CURSOR_POSITION:
			return {
				...state,
				prefix: undefined,
				index: action.payload.index,
				focusedRow: action.payload.numberRow,
			};
		case actions.SET_CURSOR_RECT:
			return {
				...state,
				cursorRect: action.payload.rect,
			};
		default:
			return state;
	}
};

export default reducer;
