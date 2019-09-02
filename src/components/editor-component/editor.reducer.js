import KEY from './key-bind';
import * as actions from './editor.actions';

let getTokens_ = undefined;
/* */
const initialState = {
	rowHeight: 22,
	scrollRange: { start: 0, stop: 20, offset: 21 },
	lines: [ { value: '', tokens: [] } ],
	index: 0,
	focusedRow: undefined,
	prefix: undefined,
	suggesterState: { open: false, index: -1, value: undefined, size: 0 },
	selection: undefined,
	cursorRect: undefined,
	errors: []
};

/* */
export const initializer = (getTokens) => {
	getTokens_ = getTokens;
	return initialState;
};

/* */
const reducer = (state, action) => {
	const newState = (() => {
		switch (action.type) {
			/* SCROLL */
			case actions.SCROLL_DOWN: {
				return reduceScrollDown(state);
			}
			case actions.SCROLL_UP:
				return reduceScrollUp(state);
			case actions.SET_SCROLLRANGE:
				return {
					...state,
					scrollRange: action.payload.scrollRange
				};
			/* SELECTION */
			case actions.SET_SELECTION:
				return setSelection(state, action.payload.selection);
			case actions.DELETE_SELECTION:
				return deleteSelection(state);
			case actions.INSERT_TEXT:
				return insertText(state, action.payload.text);
			/* ERRORS */
			case actions.UPDATE_ERRORS:
				return { ...state, errors: action.payload.errors };
			/* SUGGESTIONS */
			case actions.RESET_SUGGESTER_INDEX:
				return {
					...state,
					suggesterState: { ...state.suggesterState, index: -1 }
				};
			case actions.NEXT_SUGGESTION: {
				const { index, size } = state.suggesterState;
				return {
					...state,
					suggesterState: {
						...state.suggesterState,
						index: Math.min(size - 1, index + 1)
					}
				};
			}
			case actions.PREVIOUS_SUGGESTION: {
				const { index } = state.suggesterState;
				return {
					...state,
					suggesterState: {
						...state.suggesterState,
						index: Math.max(0, index - 1)
					}
				};
			}
			case actions.SET_SUGGESTER_STATE: {
				return {
					...state,
					suggesterState: { ...state.suggesterState, ...action.payload }
				};
			}
			case actions.SUGGEST_TOKEN:
				return {
					...replaceToken(state, action.payload.suggestion),
					prefix: undefined
				};

			/* */
			case actions.EXIT_EDITOR:
				return {
					...state,
					focusedRow: undefined,
					prefix: undefined,
					cursorRect: undefined,
					index: undefined
				};

			case actions.RESET_PREFIX:
				return { ...state, prefix: undefined };
			case actions.CHECK_PREFIX:
				return { ...state, prefix: checkPrefix(state) };

			/* CURSOR POSITION */
			case actions.SET_CURSOR_POSITION:
				return {
					...state,
					prefix: undefined,
					index: action.payload.index,
					focusedRow: action.payload.numberRow
				};
			case actions.SET_CURSOR_RECT:
				return {
					...state,
					cursorRect: action.payload.rect
				};
			/* */
			case 'change-editor-content':
				return { ...state, lines: action.lines.map((row) => getNewRow(row)) };
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
					prefix: undefined
				};
			case actions.CHECK_INDEX:
				return { ...state, index: Math.min(state.index, getRowLength(state)) };
			case KEY.TAB:
				return appendCharAtCursor(state)(KEY._TABULATION);
			case actions.INSERT_CHARACTER:
				return appendCharAtCursor(state)(action.payload.char || '');
			default:
				console.warn(`Unbind event ${action.type}`);
				return state;
		}
	})();
	// console.debug("%cDebug", "color: purple;", { action, state, newState });
	return newState;
};

/* SUGGEST_TOKEN */
const replaceToken = (state, suggestion) => {
	const { lines, focusedRow, index, prefix } = state;

	const newLines = lines.reduce(
		(a, line, i) =>
			i === focusedRow
				? [
						...a,
						getNewRow(
							`${line.value.substr(0, index)}${suggestion.substr(prefix.length)}${line.value.substr(index)}`
						)
					]
				: [ ...a, line ],
		[]
	);
	const nextIndex = newLines[focusedRow].tokens.reduce(
		(a, { start, stop }) => (index >= start && index <= stop ? stop : a),
		index
	);
	return { ...state, lines: newLines, index: nextIndex + 1 };
};

/* CHECK_PREFIX */
const checkPrefix = ({ lines, focusedRow, index }) => {
	const token = getFocusedToken(lines)(focusedRow, index);
	return token ? token.value.trim().substr(0, index - token.start) : undefined;
};

const getFocusedToken = (lines) => (focusedRow, index) =>
	focusedRow >= 0
		? lines[focusedRow].value.length === index
			? lines[focusedRow].tokens[lines[focusedRow].tokens.length - 1]
			: lines[focusedRow].tokens.reduce((a, t) => (index - 1 >= t.start && index - 1 <= t.stop ? t : a), undefined)
		: undefined;

/* ARROW_LEFT */
const reduceKeyLeft = (state) => {
	const { scrollRange: sr, lines } = state;
	const focusedRow = state.index - 1 < 0 ? Math.max(0, state.focusedRow - 1) : state.focusedRow;
	const index =
		state.index - 1 < 0
			? state.focusedRow === 0 ? state.focusedRow : getRowLength({ ...state, focusedRow })
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
			stop: Math.min(start + sr.offset - 1, lines.length - 1)
		}
	};
};

/* ARROW_RIGHT */
const reduceKeyRight = (state) => {
	const { scrollRange: sr } = state;
	const currentLength = getRowLength(state);
	const focusedRow =
		state.index + 1 > currentLength ? Math.min(state.lines.length - 1, state.focusedRow + 1) : state.focusedRow;
	const index =
		state.index + 1 > currentLength
			? state.focusedRow === state.lines.length - 1 ? getRowLength({ ...state, focusedRow }) : 0
			: state.index + 1;
	const stop = focusedRow <= sr.stop ? sr.stop : focusedRow;
	return {
		...state,
		selection: undefined,
		index,
		focusedRow,
		scrollRange: { ...sr, start: Math.max(stop - sr.offset + 1, 0), stop }
	};
};

/* ARROW_UP */
const reduceKeyUp = (state) => {
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
			stop: Math.min(start + sr.offset - 1, lines.length - 1)
		}
	};
};

/* ARROW_DOWN */
const reduceKeyDown = (state) => {
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
			stop
		}
	};
};

/* DELETE */
const reduceKeyDelete = ({ lines, index, focusedRow, ...rest }) => {
	const rowSize = getRowLength({ lines, focusedRow });
	const isMerging = (rowSize - 1 < 0 || index === rowSize) && focusedRow !== lines.length - 1;
	const nextLines = lines.reduce(
		(a, line, i) =>
			i === focusedRow
				? isMerging
					? mergeRow({
							lines: [ ...a, line, { ...lines[focusedRow + 1] } ],
							focusedRow: focusedRow + 1
						})
					: [ ...a, getNewRow(`${line.value.substr(0, index)}${line.value.substr(index + 1)}`) ]
				: i === focusedRow + 1 && isMerging ? a : [ ...a, line ],
		[]
	);

	return { lines: nextLines, selection: undefined, index, focusedRow, ...rest };
};

/* BACK_SPACE */
const reduceKeyBackspace = ({ lines, index, focusedRow, ...rest }) => {
	const newFocusedRow = index === 0 ? (focusedRow === 0 ? 0 : focusedRow - 1) : focusedRow;
	const newIndex =
		index === 0 ? (focusedRow === 0 ? 0 : getRowLength({ lines, focusedRow: newFocusedRow })) : index - 1;
	const newLines =
		index === 0
			? focusedRow === 0 ? lines : mergeRow({ lines, index, focusedRow })
			: removeCharFromRow({ lines, index, focusedRow });

	return {
		...rest,
		lines: newLines,
		selection: undefined,
		focusedRow: newFocusedRow,
		index: newIndex
	};
};

const mergeRow = ({ lines, focusedRow }) =>
	lines.reduce(
		(a, line, i) =>
			i === focusedRow - 1
				? [ ...a, getNewRow(line.value.concat(lines[focusedRow].value)) ]
				: i === focusedRow ? a : [ ...a, line ],
		[]
	);

const removeCharFromRow = ({ lines, focusedRow, index }) =>
	lines.reduce(
		(a, line, i) =>
			i === focusedRow
				? [ ...a, getNewRow(`${line.value.substr(0, index - 1)}${line.value.substr(index)}`) ]
				: [ ...a, line ],
		[]
	);

/* ENTER */
const reduceKeyEnter = ({ focusedRow, index, lines, ...rest }) => {
	const nextFocusedRow = focusedRow + 1;
	const nextLines = lines.reduce(
		(a, line, i) =>
			i === focusedRow
				? [ ...a, getNewRow(line.value.substr(0, index)), getNewRow(line.value.substr(index)) ]
				: [ ...a, line ],
		[]
	);
	return {
		focusedRow: nextFocusedRow,
		selection: undefined,
		index: 0,
		lines: nextLines,
		// scrollRange,
		...rest
	};
};

/* UTILS */
const getRow = ({ lines, focusedRow }) => lines[focusedRow];

const getRowLength = (state) => getRow(state).value.length;

const appendCharAtCursor = (state) => (char) =>
	state.lines.reduce(
		({ lines, index, focusedRow, ...rest }, line, i) =>
			i === focusedRow
				? {
						lines: [
							...lines,
							getNewRow(`${line.value.substr(0, index)}${char}${line.value.substr(index)}`)
						],
						index: index + char.length,
						focusedRow,
						...rest
					}
				: { lines: [ ...lines, line ], index, focusedRow, ...rest },
		{ ...state, lines: [] }
	);

const getNewRow = (string, old = {}) => ({
	value: string,
	tokens: getTokens_(string),
	...old
});

/* DELETE_SELECTION */
const deleteSelection = (state) => {
	const { selection, scrollRange: sr } = state;
	const lines = state.lines
		.reduce(
			(a, line, i) =>
				i >= selection.start.row && i <= selection.stop.row
					? [ ...a, deleteOnRow(selection)(line, i) ]
					: [ ...a, line ],
			[]
		)
		.filter(({ value }, i) => value.length > 0 || i < selection.start.row || i > selection.stop.row);
	const focusedRow = selection.start.row;
	return {
		...state,
		lines: lines.length > 0 ? lines : [ { value: '', tokens: [] } ],
		focusedRow,
		index: selection.start.index,
		selection: undefined,
		scrollRange:
			focusedRow >= sr.start && focusedRow <= sr.stop
				? sr
				: {
						...sr,
						start: focusedRow,
						stop: Math.min(focusedRow + sr.offset - 1, lines.length - 1)
					}
	};
};

const deleteOnRow = ({ start, stop }) => ({ value }, row) => {
	const next =
		row === start.row
			? `${value.substr(0, start.index)}${row === stop.row ? value.substr(stop.index) : ''}`
			: row === stop.row ? value.substr(stop.index) : '';
	return getNewRow(next);
};

/* INSERT_TEXT */
const insertText = (state, text) => {
	const { focusedRow, index, scrollRange: sr } = state;
	if (focusedRow !== undefined && index !== undefined) {
		const newRows = text.split(/\n/);
		// if (newRows[newRows.length - 1].length === 0) newRows.pop();
		const lines = state.lines.reduce(
			(a, line, row) => (row === focusedRow ? [ ...a, ...insertInLine(index)(line, newRows) ] : [ ...a, line ]),
			[]
		);
		const newFocusedRow = focusedRow + newRows.length - 1;
		const newIndex = newRows[newRows.length - 1].length + (newRows.length > 1 ? 0 : index);
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
							stop: newFocusedRow
						}
		};
	}

	return { ...state };
};

const insertInLine = (index) => (line, rows) => {
	const getRow = (line) => (rows, i) =>
		i === 0
			? getNewRow(`${line.value.substr(0, index)}${rows[i]}${line.value.substr(index)}`)
			: i === rows.length - 1 ? getNewRow(`${rows[i]}${line.value.substr(index)}`) : getNewRow(rows[i]);
	const newRows = rows.length === 0 ? [ rows ] : rows.map((row, i) => getRow(line)(rows, i));
	return newRows;
};

const setSelection = (state, selection) => ({ ...state, selection });

/* SCROLL */
const reduceScrollDown = (state) => {
	const { scrollRange: { start, stop, offset }, lines } = state;

	return lines.length < offset
		? state
		: {
				...state,
				scrollRange: {
					offset,
					start: Math.min(start + 2, lines.length - offset),
					stop: Math.min(stop + 2, lines.length - 1)
				}
			};
};

const reduceScrollUp = (state) => {
	const { scrollRange: { start, stop, offset } } = state;

	return {
		...state,
		scrollRange: {
			offset,
			start: Math.max(start - 2, 0),
			stop: Math.max(stop - 2, offset - 1)
		}
	};
};

export default reducer;
