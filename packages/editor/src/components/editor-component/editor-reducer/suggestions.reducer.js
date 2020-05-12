import * as actions from '../editor-actions';
import { getNewRow } from './reducers-tools';

/* SUGGEST_TOKEN */
const replaceToken = (state, suggestion) => {
	const { lines, focusedRow, index, prefix } = state;

	const newLines = lines.reduce(
		(a, line, i) =>
			i === focusedRow
				? [
						...a,
						getNewRow(
							`${line.value.substr(0, index)}${suggestion.substr(
								prefix.length
							)}${line.value.substr(index)}`,
							i
						),
				  ]
				: [...a, line],
		[]
	);
	const nextIndex = newLines[focusedRow].tokens.reduce(
		(a, { start, stop }) => (index >= start && index <= stop ? stop : a),
		index
	);
	return { ...state, lines: newLines, index: nextIndex + 1 };
};

const getFocusedToken = lines => (focusedRow, index) =>
	focusedRow >= 0
		? lines[focusedRow].value.length === index
			? lines[focusedRow].tokens[lines[focusedRow].tokens.length - 1]
			: lines[focusedRow].tokens.reduce(
					(a, t) => (index - 1 >= t.start && index - 1 <= t.stop ? t : a),
					undefined
			  )
		: undefined;

/* CHECK_PREFIX */
const checkPrefix = ({ lines, focusedRow, index }) => {
	const token = getFocusedToken(lines)(focusedRow, index);
	return token ? token.value.trim().substr(0, index - token.start) : undefined;
};

const reducer = (state, action) => {
	switch (action.type) {
		/* PREFIX */
		case actions.RESET_PREFIX:
			return { ...state, prefix: undefined };
		case actions.CHECK_PREFIX:
			return { ...state, prefix: checkPrefix(state) };
		/* SUGGESTIONS */
		case actions.RESET_SUGGESTER_INDEX:
			return {
				...state,
				suggesterState: { ...state.suggesterState, index: -1 },
			};
		case actions.NEXT_SUGGESTION: {
			const { index, size } = state.suggesterState;
			return {
				...state,
				suggesterState: {
					...state.suggesterState,
					index: Math.min(size - 1, index + 1),
				},
			};
		}
		case actions.PREVIOUS_SUGGESTION: {
			const { index } = state.suggesterState;
			return {
				...state,
				suggesterState: {
					...state.suggesterState,
					index: Math.max(0, index - 1),
				},
			};
		}
		case actions.SET_SUGGESTER_STATE: {
			return {
				...state,
				suggesterState: { ...state.suggesterState, ...action.payload },
			};
		}
		case actions.SUGGEST_TOKEN:
			return {
				...replaceToken(state, action.payload.suggestion),
				prefix: undefined,
			};
		default:
			return state;
	}
};

export default reducer;
