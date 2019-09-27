import * as actions from '../editor-actions';
import { mergeRow } from './reducers-tools';
import { checkSelection } from '../common-tools';

/* SET SELECTION */
const setSelection = (state, selection) => ({
	...state,
	selection: checkSelection(selection),
});

/* DELETE SELECTION */
const finalizeDelete = state => {
	const { selection: s } = state;
	if (!s) return state;

	return {
		...state,
		selection: undefined,
		focusedRow: s.start.row,
		index: s.start.index,
	};
};

const deleteSingleRowSelection = state => {
	const { selection: s, lines } = state;
	const nl = lines.map((l, i) =>
		i === s.start.row
			? {
					...l,
					value: `${l.value.substr(0, s.start.index)}${l.value.substr(
						s.stop.index
					)}`,
			  }
			: l
	);
	return { ...state, lines: nl };
};

const deleteMultiRowSelection = state => {
	const { selection: s, lines } = state;
	const nl = lines.reduce((a, l, i) => {
		if (i === s.start.row) {
			return [...a, { ...l, value: l.value.substr(0, s.start.index) }];
		}
		if (i === s.stop.row) {
			return [...a, { ...l, value: l.value.substr(s.stop.index) }];
		}
		if (i > s.start.row && i < s.stop.row) {
			return a;
		}
		return [...a, l];
	}, []);

	return { ...state, lines: mergeRow(nl, s.start.row) };
};

const deleteSelection = state => {
	const { selection: s } = state;
	if (!s) return state;
	if (s.start.row === s.stop.row) {
		return finalizeDelete(deleteSingleRowSelection(state));
	}
	return finalizeDelete(deleteMultiRowSelection(state));
};

/* REDUCER */
const reducer = (state, action) => {
	switch (action.type) {
		case actions.SET_SELECTION:
			return setSelection(state, action.payload.selection);
		case actions.DELETE_SELECTION:
			return deleteSelection(state);
		default:
			return state;
	}
};

export default reducer;
