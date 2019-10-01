import * as actions from '../editor-actions';
import * as tools from './reducers-tools';
import { validateRange } from './common-state-validator';
import { checkSelection } from '../common-tools';

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
const initSelectionForMove = state => {
	const { index, focusedRow: row } = state;
	if (index === undefined || row === undefined) return undefined;
	return { extent: { index, row }, anchor: { index, row } };
};

/* */
const reduceShiftLeft = state => {
	const { lines } = state;
	const selection = state.selection || initSelectionForMove(state);
	if (selection && selection.extent) {
		const { index, row } =
			selection.extent.index === 0
				? {
						row: Math.max(0, selection.extent.row - 1),
						index: lines[Math.max(0, selection.extent.row - 1)].value.length,
				  }
				: {
						row: selection.extent.row,
						index: Math.max(0, selection.extent.index - 1),
				  };
		return {
			...state,
			index,
			focusedRow: row,
			selection: checkSelection({
				...selection,
				extent: {
					row,
					index,
				},
			}),
		};
	}
	return state;
};

/* */
const reduceShiftRight = state => {
	const { lines } = state;
	const selection = state.selection || initSelectionForMove(state);
	if (selection && selection.extent) {
		const { row, index } =
			selection.extent.index === lines[selection.extent.row].value.length
				? {
						index:
							selection.extent.row < lines.length - 1
								? 0
								: selection.extent.index,
						row: Math.min(lines.length - 1, selection.extent.row + 1),
				  }
				: {
						row: selection.extent.row,
						index: Math.min(
							lines[selection.extent.row].value.length,
							selection.extent.index + 1
						),
				  };
		return {
			...state,
			index,
			focusedRow: row,
			selection: checkSelection({
				...selection,
				extent: {
					row,
					index,
				},
			}),
		};
	}
	return state;
};

/* */
const reduceShiftUp = state => {
	const { lines } = state;
	const selection = state.selection || initSelectionForMove(state);
	if (selection && selection.extent) {
		const row = Math.max(0, selection.extent.row - 1);
		const index = Math.min(selection.extent.index, lines[row].value.length);
		return {
			...state,
			focusedRow: row,
			index,
			selection: checkSelection({
				...selection,
				extent: {
					row,
					index,
				},
			}),
		};
	}
	return state;
};

/* */

const reduceShiftDown = state => {
	const { lines } = state;
	const selection = state.selection || initSelectionForMove(state);
	if (selection && selection.extent) {
		const row = Math.min(lines.length - 1, selection.extent.row + 1);
		const index = Math.min(selection.extent.index, lines[row].value.length);
		return {
			...state,
			focusedRow: row,
			index,
			selection: checkSelection({
				...selection,
				extent: {
					index,
					row,
				},
			}),
		};
	}
	return state;
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.CONTROL_LEFT:
			return reduceControlLeft(state);
		case actions.CONTROL_RIGHT:
			return reduceControlRight(state);
		case actions.SHIFT_LEFT:
			return validateRange(reduceShiftLeft(state));
		case actions.SHIFT_RIGHT:
			return validateRange(reduceShiftRight(state));
		case actions.SHIFT_UP:
			return validateRange(reduceShiftUp(state));
		case actions.SHIFT_DOWN:
			return validateRange(reduceShiftDown(state));
		default:
			return state;
	}
};

export default reducer;
