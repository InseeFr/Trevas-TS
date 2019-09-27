import * as actions from '../editor-actions';
import * as tools from './reducers-tools';

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

/* */
const reduceShiftLeft = state => {
	const { focusedRow, index, selection } = state;
	if (focusedRow === undefined || index === undefined) return state;
	const newIdx = Math.max(0, index - 1);

	const sel = selection || { start: { row: focusedRow, index } };

	return {
		...state,
		index: newIdx,
		selection: tools.validateSelection({
			...sel,
			stop: { row: focusedRow, index: newIdx },
		}),
	};
};

/* */
const reduceShiftRight = state => {
	const { lines, focusedRow, index, selection } = state;
	if (focusedRow === undefined || index === undefined) return state;
	const newIdx = Math.min(lines[focusedRow].value.length, index + 1);
	const sel = selection || { start: { row: focusedRow, index } };

	return {
		...state,
		index: newIdx,
		selection: tools.validateSelection({
			...sel,
			stop: { row: focusedRow, index: newIdx },
		}),
	};
};

/* */
const reduceShiftUp = state => {
	const { focusedRow, index, selection } = state;
	if (focusedRow === undefined || index === undefined) return state;
	return state;
};

/* */
const reduceShiftDown = state => {
	const { focusedRow, index, selection } = state;
	if (focusedRow === undefined || index === undefined) return state;
	return state;
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.CONTROL_LEFT:
			return reduceControlLeft(state);
		case actions.CONTROL_RIGHT:
			return reduceControlRight(state);
		case actions.SHIFT_LEFT:
			return reduceShiftLeft(state);
		case actions.SHIFT_RIGHT:
			return reduceShiftRight(state);
		case actions.SHIFT_UP:
			return reduceShiftUp(state);
		case actions.SHIFT_DOWN:
			return reduceShiftDown(state);
		default:
			return state;
	}
};

export default reducer;
