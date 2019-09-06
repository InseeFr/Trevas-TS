import KEY from '../key-bind';
import * as actions from '../editor.actions';
import { getNewRow, getRowLength } from './commons-tools';

/* */
const reducer = (state, action) => {
	switch (action.type) {
		/* ERRORS */
		case actions.UPDATE_ERRORS:
			return { ...state, errors: action.payload.errors };

		/* */
		case actions.EXIT_EDITOR:
			return {
				...state,
				focusedRow: undefined,
				prefix: undefined,
				cursorRect: undefined,
				index: undefined,
			};

		/* */
		case 'change-editor-content':
			return {
				...state,
				lines: action.lines.map((row, i) => getNewRow(row, i)),
			};

		case actions.CHECK_INDEX:
			return {
				...state,
				index: Math.min(state.index, getRowLength(state)),
			};

		default:
			return state;
	}

	// console.debug('%cDebug', 'color: purple;', { action, state, newState });
	// return newState;
};

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

export default reducer;
