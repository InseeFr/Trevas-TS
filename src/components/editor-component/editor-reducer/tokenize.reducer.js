import * as actions from '../editor-actions';

const LF = '\n';

/* */
const fillSingle = (line, { lines, pos, tokens }) => {
	const [first, ...rest] = tokens;
	if (first.value === LF || first.value.length === 0)
		return {
			pos: pos + line.value.length + LF.length,
			lines: [...lines, line],
			tokens: rest,
		};
	const rowLimit = pos + line.value.length;
	return first.stop < rowLimit
		? fillLine(
				{
					...line,
					tokens: [...line.tokens, moveToken(first, pos)],
				},
				{ pos, lines, tokens: rest }
		  )
		: first.stop === rowLimit
		? {
				lines: [
					...lines,
					{ ...line, tokens: [...line.tokens, moveToken(first, pos)] },
				],
				tokens: rest,
				pos: pos + line.value.length + LF.length,
		  }
		: null;
};

/* */
const fillMulti = (line, { lines, tokens, pos }) => {
	const [first, ...rest] = tokens;
	const rowLimit = pos + line.value.length - 1;
	return pos <= first.start
		? {
				lines: [
					...lines,
					{
						...line,
						tokens: [
							...line.tokens,
							{
								...first,
								start: first.start - pos,
								stop: line.value.length - 1,
								value: first.value.substring(0, rowLimit - first.start + 1),
							},
						],
					},
				],
				tokens,
				pos: pos + line.value.length + LF.length,
		  }
		: first.stop >= rowLimit
		? {
				lines: [
					...lines,
					{
						...line,
						tokens: [
							...line.tokens,
							{
								...first,
								start: 0,
								stop: line.value.length - 1,
								value: line.value,
							},
						],
					},
				],
				tokens: first.stop === rowLimit ? rest : tokens,
				pos: pos + line.value.length + LF.length,
		  }
		: fillLine(
				{
					...line,
					tokens: [
						...line.tokens,
						{
							...first,
							start: 0,
							stop: first.stop - pos,
							value: first.value.substring(pos - first.start),
						},
					],
				},
				{ lines, tokens: rest, pos }
		  );
};

/* */
const fillLine = (line, { pos, lines, tokens }) => {
	if (line.value.length === 0)
		return { lines: [...lines, { ...line, tokens: [] }], pos: pos + 1, tokens };
	const [first] = tokens;
	const rowLimit = pos + line.value.length;
	return first.start < pos || first.stop > rowLimit
		? fillMulti(line, { pos, lines, tokens })
		: fillSingle(line, { pos, lines, tokens });
};

/* */
export const mergeLines = lines =>
	lines.reduce((a, { value }) => `${a}${value}${LF}`, '');

/* TOKENIZE_ALL */
const reduceLaunchTokenization = tokens => state => {
	const { lines } = state;
	// const tokens = getTokens(merge(lines));
	const nl = lines.reduce((a, line) => fillLine({ ...line, tokens: [] }, a), {
		pos: 0,
		lines: [],
		tokens,
	});
	return { ...state, lines: nl.lines, tokenize: false };
};

/* */
const moveToken = (token, pos) => ({
	...token,
	start: token.start - pos,
	stop: token.stop - pos,
});

/* */
const reduceTokenizeAll = state => ({ ...state, tokenize: true });

/* */
const reducer = (state, action) => {
	switch (action.type) {
		/* SET_GET_TOKENS */
		case actions.SET_GET_TOKENS:
			return { ...state, getTokens: action.payload.getTokens };
		/* TOKENIZE_ALL */
		case actions.TOKENIZE_ALL:
			return reduceTokenizeAll(state);
		/* LAUNCH_TOKENIZATION */
		case actions.LAUNCH_TOKENIZATION:
			return reduceLaunchTokenization(action.payload.tokens)(state);
		default:
			return state;
	}
};

export default reducer;
