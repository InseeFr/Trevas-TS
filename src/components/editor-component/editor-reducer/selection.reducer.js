import * as actions from '../editor.actions';
import { getNewRow } from './commons-tools';

const reducer = (state, action) => {
	switch (action.type) {
		/* SELECTION */
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

/* DELETE_SELECTION */
const deleteSelection = state => {
	const { selection, scrollRange: sr } = state;
	const lines = state.lines
		.reduce(
			(a, line, i) =>
				i >= selection.start.row && i <= selection.stop.row
					? [...a, deleteOnRow(selection)(line, i)]
					: [...a, line],
			[]
		)
		.filter(
			({ value }, i) =>
				value.length > 0 || i < selection.start.row || i > selection.stop.row
		);
	const focusedRow = selection.start.row;
	return {
		...state,
		lines: lines.length > 0 ? lines : [{ value: '', tokens: [] }],
		focusedRow,
		index: selection.start.index,
		selection: undefined,
		scrollRange:
			focusedRow >= sr.start && focusedRow <= sr.stop
				? sr
				: {
						...sr,
						start: focusedRow,
						stop: Math.min(focusedRow + sr.offset - 1, lines.length - 1),
				  },
	};
};

const deleteOnRow = ({ start, stop }) => ({ value }, row) => {
	const next =
		row === start.row
			? `${value.substr(0, start.index)}${
					row === stop.row ? value.substr(stop.index) : ''
			  }`
			: row === stop.row
			? value.substr(stop.index)
			: '';
	return getNewRow(next);
};

/* INSERT_TEXT */
const insertText = (state, text) => {
	const { focusedRow, index, scrollRange: sr } = state;
	if (focusedRow !== undefined && index !== undefined) {
		const newRows = text.split(/\n/);
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

export default reducer;
