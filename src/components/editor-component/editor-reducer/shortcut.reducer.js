import * as actions from '../editor-actions';
import * as tools from './commons-tools';
import { SET_GET_TOKENS } from '../editor-actions';

/* */
const reduceControlLeft = state => {
	const { lines, focusedRow, index } = state;
	if (focusedRow === undefined || index === undefined || index === 0)
		return state;
	const { index: idx, token } = tools.getCurrentToken(state);
	if (token) {
		return index === token.start
			? {
					...state,
					index: lines[focusedRow].tokens[Math.max(0, idx - 1)].start,
			  }
			: { ...state, index: token.start };
	}
	const { tokens } = lines[focusedRow];
	return { ...state, index: tokens[tokens.length - 1].start };
};

/* */
const reduceControlRight = state => {
	const { focusedRow, index } = state;
	if (focusedRow === undefined || index === undefined) return state;
	const { token } = tools.getCurrentToken(state);

	return token ? { ...state, index: token.stop + 1 } : state;
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.CONTROL_LEFT:
			return reduceControlLeft(state);
		case actions.CONTROL_RIGHT:
			return reduceControlRight(state);
		default:
			return state;
	}
};

export default reducer;
