import KEY from './key-bind';

/* */
const reducer = (state, action) => {
	const { index, focusedRow, lines } = action;
	switch (action.type) {
		case 'change-cursor-position':
			return { ...state, index, focusedRow };
		case 'change-editor-content':
			return { ...state, lines };
		case KEY.ARROW_LEFT:
			return reduceKeyLeft(state);
		case KEY.ARROW_RIGHT:
			return reduceKeyRight(state);
		case KEY.ARROW_UP:
			return { ...state, focusedRow: Math.max(0, state.focusedRow - 1) };
		case KEY.ARROW_DOWN:
			return {
				...state,
				focusedRow: Math.min(state.lines.length - 1, state.focusedRow + 1)
			};
		case 'check-index':
			return { ...state, index: Math.min(state.index, getRowLength(state)) };
		case 'pressed-char':
			return {
				...state,
				lines: appendCharAtLines(state.lines)(state.focusedRow, state.index, action.key),
				index: action.key.length + state.index
			};
		default:
			console.warn(`Unbind event ${action.type}`);
			return state;
	}
};

/* */
const reduceKeyLeft = (state) => {
	const focusedRow = state.index - 1 < 0 ? Math.max(0, state.focusedRow - 1) : state.focusedRow;
	const index =
		state.index - 1 < 0
			? state.focusedRow === 0 ? state.focusedRow : getRowLength({ ...state, focusedRow })
			: state.index - 1;

	return { ...state, index, focusedRow };
};

/* */
const reduceKeyRight = (state) => {
	const currentLength = getRowLength(state);
	const focusedRow =
		state.index + 1 > currentLength ? Math.min(state.lines.length - 1, state.focusedRow + 1) : state.focusedRow;
	const index =
		state.index + 1 > currentLength
			? state.focusedRow === state.lines.length - 1 ? getRowLength({ ...state, focusedRow }) : 0
			: state.index + 1;

	return { ...state, index, focusedRow };
};

/* */
const getRow = ({ lines, focusedRow }) => lines[focusedRow];

/* */
const getRowLength = (state) => getRow(state).value.length;

/* */
const appendCharAtLines = (lines = []) => (numberRow, index, c) => {
	return lines.reduce(
		(a, line, i) =>
			i === numberRow ? [ ...a, { ...line, value: appendCharAtValue(index, line.value, c) } ] : [ ...a, line ],
		[]
	);
};

const appendCharAtValue = (index, value, c) => `${value.substr(0, index)}${c}${value.substr(index)}`;

export default reducer;
