import KEY from '../key-bind';
import * as actions from '../editor-actions';
import * as tools from './reducers-tools';
import { validateRangeResetSelection } from './common-state-validator';

/* ARROW_LEFT */
const reduceKeyLeft = state => {
	const { lines, index, focusedRow } = state;
	if (focusedRow === undefined || index === undefined) return state;
	if (index === 0 || lines[focusedRow].value.length === 0) {
		return focusedRow === 0
			? state
			: {
					...state,
					focusedRow: focusedRow - 1,
					index: lines[focusedRow - 1].value.length,
			  };
	}
	return { ...state, index: index - 1 };
};

/* ARROW_RIGHT */
const reduceKeyRight = state => {
	const { lines, index, focusedRow } = state;
	if (focusedRow === undefined || index === undefined) return state;
	if (
		lines[focusedRow].value.length === index ||
		lines[focusedRow].value.length === 0
	) {
		return focusedRow === lines.length - 1
			? state
			: { ...state, index: 0, focusedRow: focusedRow + 1 };
	}
	return { ...state, index: index + 1 };
};

/* ARROW_UP */
const reduceKeyUp = state => {
	const { lines, index, focusedRow } = state;
	if (focusedRow === undefined || index === undefined || focusedRow === 0)
		return state;
	return {
		...state,
		focusedRow: focusedRow - 1,
		index: Math.min(lines[focusedRow - 1].value.length, index),
	};
};

/* ARROW_DOWN */
const reduceKeyDown = state => {
	const { lines, index, focusedRow } = state;
	if (
		focusedRow === undefined ||
		index === undefined ||
		focusedRow === lines.length - 1
	)
		return state;
	return {
		...state,
		focusedRow: focusedRow + 1,
		index: Math.min(lines[focusedRow + 1].value.length, index),
	};
};

/* BACK_SPACE */
const reduceKeyBackspace = state => {
	const { lines, index, focusedRow } = state;
	if (focusedRow === undefined) return state;
	if (lines[focusedRow].value.length === 0 || index === 0) {
		return focusedRow === 0
			? state
			: {
					...state,
					focusedRow: focusedRow - 1,
					index: lines[focusedRow - 1].value.length,
					lines: tools.mergeRow(lines, focusedRow - 1),
			  };
	}
	return {
		...state,
		index: Math.max(index - 1, 0),
		lines: lines.map((line, i) =>
			i === focusedRow ? tools.removeChar(line, index) : line
		),
	};
};

/* ENTER */
const reduceKeyEnter = ({ focusedRow, index, lines, ...rest }) => {
	const nextFocusedRow = focusedRow + 1;
	const nextLines = lines.reduce(
		(a, line, i) =>
			i === focusedRow
				? [
						...a,
						tools.getNewRow(line.value.substr(0, index)),
						tools.getNewRow(line.value.substr(index)),
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

/* */
const appendCharAtCursor = state => char =>
	state.lines.reduce(
		({ lines, index, focusedRow, ...rest }, line, i) =>
			i === focusedRow
				? {
						lines: [...lines, tools.insertChar(index, char, line)],
						index: index + char.length,
						focusedRow,
						...rest,
				  }
				: { lines: [...lines, line], index, focusedRow, ...rest },
		{ ...state, lines: [] }
	);

/* DELETE */
const reduceKeyDelete = state => {
	const { lines, index, focusedRow } = state;
	if (focusedRow === undefined || index === undefined) return state;
	if (
		index === lines[focusedRow].value.length ||
		lines[focusedRow].value.length === 0
	) {
		return focusedRow === lines.length - 1
			? state
			: { ...state, lines: tools.mergeRow(lines, focusedRow) };
	}
	return {
		...state,

		lines: lines.map((line, i) =>
			i === focusedRow ? tools.removeChar(line, index + 1) : line
		),
	};
};

/* */
const reduceKeyHome = state => ({ ...state, index: 0 });

/* */
const reduceKeyEnd = state => ({ ...state, index: tools.getRowLength(state) });

const reducer = (state, action) => {
	switch (action.type) {
		case KEY.ARROW_LEFT:
			return validateRangeResetSelection(reduceKeyLeft(state));
		case KEY.ARROW_RIGHT:
			return validateRangeResetSelection(reduceKeyRight(state));
		case KEY.ARROW_UP:
			return validateRangeResetSelection(reduceKeyUp(state));
		case KEY.ARROW_DOWN:
			return validateRangeResetSelection(reduceKeyDown(state));
		case KEY.BACK_SPACE:
			return validateRangeResetSelection(reduceKeyBackspace(state));
		case KEY.DELETE:
			return validateRangeResetSelection(reduceKeyDelete(state));
		case KEY.ENTER:
			return validateRangeResetSelection(reduceKeyEnter(state));
		case KEY.HOME:
			return validateRangeResetSelection(reduceKeyHome(state));
		case KEY.END:
			return validateRangeResetSelection(reduceKeyEnd(state));
		case KEY.TAB:
			return validateRangeResetSelection(
				appendCharAtCursor(state)(KEY.TABULATION)
			);
		case actions.INSERT_CHARACTER:
			return validateRangeResetSelection(
				appendCharAtCursor(state)(action.payload.char || '')
			);
		default:
			return state;
	}
};

export default reducer;
