import * as actions from '../editor-actions';
import { getNewRow, mergeRow } from './commons-tools';

/* INSERT_TEXT */
const insertText = (state, text) => {
	const { focusedRow, index, scrollRange: sr } = state;
	if (focusedRow !== undefined && index !== undefined) {
		const newRows = text.split(/\r\n/);
		// if (newRows[newRows.length - 1].length === 0) newRows.pop();
		const lines = state.lines.reduce(
			(a, line, row) =>
				row === focusedRow
					? [...a, ...insertInLine(index)(line, newRows)]
					: [...a, line],
			[]
		);
		const newFocusedRow = focusedRow + newRows.length - 1;
		const newIndex =
			newRows[newRows.length - 1].length + (newRows.length > 1 ? 0 : index);
		return {
			...state,
			lines,
			selection: undefined,
			focusedRow: newFocusedRow,
			index: newIndex,
			scrollRange:
				newFocusedRow >= sr.start && newFocusedRow <= sr.stop
					? sr
					: {
							...sr,
							start: Math.max(newFocusedRow - sr.offset + 1, 0),
							stop: newFocusedRow,
					  },
		};
	}

	return { ...state };
};

/* */
const insertInLine = index => (line, rows) => {
	const getRow = line => (rows, i) =>
		i === 0
			? getNewRow(
					`${line.value.substr(0, index)}${rows[i]}${line.value.substr(index)}`
			  )
			: i === rows.length - 1
			? getNewRow(`${rows[i]}${line.value.substr(index)}`)
			: getNewRow(rows[i]);
	const newRows =
		rows.length === 0 ? [rows] : rows.map((row, i) => getRow(line)(rows, i));
	return newRows;
};

const setSelection = (state, selection) => ({ ...state, selection });

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
		case actions.INSERT_TEXT:
			return insertText(state, action.payload.text);
		default:
			return state;
	}
};

export default reducer;
