import KEY from '../key-bind';
import * as actions from '../editor-actions';
import { getNewRow, getRowLength, insertChar } from './commons-tools';

/* ARROW_LEFT */
const reduceKeyLeft = state => {
	const { scrollRange: sr, lines } = state;
	const focusedRow =
		state.index - 1 < 0 ? Math.max(0, state.focusedRow - 1) : state.focusedRow;
	const index =
		state.index - 1 < 0
			? state.focusedRow === 0
				? state.focusedRow
				: getRowLength({ ...state, focusedRow })
			: state.index - 1;
	const start = focusedRow >= sr.start ? sr.start : focusedRow;
	return {
		...state,
		selection: undefined,
		index,
		focusedRow,
		scrollRange: {
			...sr,
			start,
			stop: Math.min(start + sr.offset - 1, lines.length - 1),
		},
	};
};

/* ARROW_RIGHT */
const reduceKeyRight = state => {
	const { scrollRange: sr } = state;
	const currentLength = getRowLength(state);
	const focusedRow =
		state.index + 1 > currentLength
			? Math.min(state.lines.length - 1, state.focusedRow + 1)
			: state.focusedRow;
	const index =
		state.index + 1 > currentLength
			? state.focusedRow === state.lines.length - 1
				? getRowLength({ ...state, focusedRow })
				: 0
			: state.index + 1;
	const stop = focusedRow <= sr.stop ? sr.stop : focusedRow;
	return {
		...state,
		selection: undefined,
		index,
		focusedRow,
		scrollRange: { ...sr, start: Math.max(stop - sr.offset + 1, 0), stop },
	};
};

/* ARROW_UP */
const reduceKeyUp = state => {
	if (!state.focusedRow) return state;
	const { scrollRange: sr, lines } = state;
	const focusedRow = Math.max(0, state.focusedRow - 1);
	const start = focusedRow >= sr.start ? sr.start : focusedRow;
	return {
		...state,
		selection: undefined,
		focusedRow,
		scrollRange: {
			...sr,
			start,
			stop: Math.min(start + sr.offset - 1, lines.length - 1),
		},
	};
};

/* ARROW_DOWN */
const reduceKeyDown = state => {
	if (!state.focusedRow) return state;
	const { scrollRange: sr, lines } = state;
	const focusedRow = Math.min(lines.length - 1, state.focusedRow + 1);
	const stop = focusedRow <= sr.stop ? sr.stop : focusedRow;
	return {
		...state,
		selection: undefined,
		focusedRow,
		scrollRange: {
			...sr,
			start: Math.max(stop - sr.offset + 1, 0),
			stop,
		},
	};
};

/* BACK_SPACE */
const reduceKeyBackspace = ({ lines, index, focusedRow, ...rest }) => {
	const newFocusedRow =
		index === 0 ? (focusedRow === 0 ? 0 : focusedRow - 1) : focusedRow;
	const newIndex =
		index === 0
			? focusedRow === 0
				? 0
				: getRowLength({ lines, focusedRow: newFocusedRow })
			: index - 1;
	const newLines =
		index === 0
			? focusedRow === 0
				? lines
				: mergeRow({ lines, index, focusedRow })
			: removeCharFromRow({ lines, index, focusedRow });

	return {
		...rest,
		lines: newLines,
		selection: undefined,
		focusedRow: newFocusedRow,
		index: newIndex,
	};
};

const mergeRow = ({ lines, focusedRow }) =>
	lines.reduce(
		(a, line, i) =>
			i === focusedRow - 1
				? [
						...a,
						getNewRow(line.value.concat(lines[focusedRow].value), a.length),
				  ]
				: i === focusedRow
				? a
				: [...a, line],
		[]
	);

const removeCharFromRow = ({ lines, focusedRow, index }) =>
	lines.reduce(
		(a, line, i) =>
			i === focusedRow
				? [
						...a,
						getNewRow(
							`${line.value.substr(0, index - 1)}${line.value.substr(index)}`,
							a.length
						),
				  ]
				: [...a, line],
		[]
	);

/* ENTER */
const reduceKeyEnter = ({ focusedRow, index, lines, ...rest }) => {
	const nextFocusedRow = focusedRow + 1;
	const nextLines = lines.reduce(
		(a, line, i) =>
			i === focusedRow
				? [
						...a,
						getNewRow(line.value.substr(0, index), i),
						getNewRow(line.value.substr(index), i + 1),
				  ]
				: [...a, line],
		[]
	);
	return {
		focusedRow: nextFocusedRow,
		selection: undefined,
		index: 0,
		lines: nextLines,
		...rest,
	};
};

const appendCharAtCursor = state => char =>
	state.lines.reduce(
		({ lines, index, focusedRow, ...rest }, line, i) =>
			i === focusedRow
				? {
						lines: [
							...lines, //
							insertChar(index, char, line),
						],
						index: index + char.length,
						focusedRow,
						...rest,
				  }
				: { lines: [...lines, line], index, focusedRow, ...rest },
		{ ...state, lines: [] }
	);

/* DELETE */
const reduceKeyDelete = ({ lines, index, focusedRow, ...rest }) => {
	const rowSize = getRowLength({ lines, focusedRow });
	const isMerging =
		(rowSize - 1 < 0 || index === rowSize) && focusedRow !== lines.length - 1;
	const nextLines = lines.reduce(
		(a, line, i) =>
			i === focusedRow
				? isMerging
					? mergeRow({
							lines: [...a, line, { ...lines[focusedRow + 1] }],
							focusedRow: focusedRow + 1,
					  })
					: [
							...a,
							getNewRow(
								`${line.value.substr(0, index)}${line.value.substr(index + 1)}`,
								a.length
							),
					  ]
				: i === focusedRow + 1 && isMerging
				? a
				: [...a, line],
		[]
	);

	return { lines: nextLines, selection: undefined, index, focusedRow, ...rest };
};

const reducer = (state, action) => {
	switch (action.type) {
		case KEY.ARROW_LEFT:
			return reduceKeyLeft(state);
		case KEY.ARROW_RIGHT:
			return reduceKeyRight(state);
		case KEY.ARROW_UP:
			return reduceKeyUp(state);
		case KEY.ARROW_DOWN:
			return reduceKeyDown(state);
		case KEY.BACK_SPACE:
			return reduceKeyBackspace(state);
		case KEY.DELETE:
			return reduceKeyDelete(state);
		case KEY.ENTER:
			return reduceKeyEnter(state);
		case KEY.HOME:
			return { ...state, index: 0, selection: undefined, prefix: undefined };
		case KEY.END:
			return {
				...state,
				index: getRowLength(state),
				selection: undefined,
				prefix: undefined,
			};
		case KEY.TAB:
			return appendCharAtCursor(state)(KEY._TABULATION);
		case actions.INSERT_CHARACTER:
			return appendCharAtCursor(state)(action.payload.char || '');
		default:
			return state;
	}
};

export default reducer;
