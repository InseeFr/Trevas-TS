const TOOLS = {};

/* UTILS */
export const getRow = ({ lines, focusedRow }) => lines[focusedRow];

export const getRowLength = state => getRow(state).value.length;

/* */
export const getNewRow = (string, old = {}) => ({
	value: string,
	tokens: [
		{ value: string, start: 0, stop: string.length - 1, className: 'unmapped' },
	],
	...old,
});

/* */
export const insertChar = (index, char, line) => {
	const value = `${line.value.substr(0, index)}${char}${line.value.substr(
		index
	)}`;
	if (line.tokens) {
		const result = line.tokens.reduce(
			({ find, tokens }, t) => {
				if (index >= t.start && index <= t.stop) {
					return {
						find: true,
						tokens: [
							...tokens,
							{
								...t,
								stop: t.stop + char.length,
								value: `${t.value.substr(
									0,
									index - t.start
								)}${char}${t.value.substr(index - t.start)}`,
							},
						],
					};
				}
				return {
					find,
					tokens: [
						...tokens,
						find
							? {
									...t,
									stop: t.stop + char.length,
									start: t.start + char.length,
							  }
							: t,
					],
				};
			},
			{ find: false, tokens: [] }
		);
		if (result.find) return { ...line, value, tokens: result.tokens };
	}
	return getNewRow(value);
};

export const removeChar = (line, index) => {
	const { value } = line;
	const nv = `${value.substr(0, index - 1)}${value.substr(index)}`;
	const r = line.tokens.reduce(
		({ tokens, find }, t) => {
			if (index >= t.start && index <= t.stop) {
				return {
					tokens: [
						...tokens,
						{
							...t,
							value: `${t.value.substr(0, index - t.start - 1)}${t.value.substr(
								index - t.start
							)}`,
						},
					],
					find: true,
				};
			}
			return {
				tokens: [
					...tokens,
					find ? { ...t, start: t.start - 1, stop: t.stop - 1 } : t,
				],
				find,
			};
		},
		{ find: false, tokens: [] }
	);
	return { ...line, value: nv, tokens: r.tokens };
};

/* */
const merge2Lines = (a, b) => {
	return { value: `${a.value}${b.value}`, tokens: [...a.tokens, ...b.tokens] };
};

const addOrIgnore = (a, l, index, i) => (i === index + 1 ? a : [...a, l]);

export const mergeRow = (lines, index) => {
	return lines.reduce(
		(a, l, i) =>
			i === index && i < lines.length - 1
				? [...a, merge2Lines(l, lines[i + 1])]
				: addOrIgnore(a, l, index, i),
		[]
	);
};

/* state => ({ token, index }) */
export const getCurrentToken = state => {
	const { lines, focusedRow, index } = state;
	if (focusedRow === undefined || index === undefined) return {};
	const idx = lines[focusedRow].tokens.reduce(
		(a, t, i) => (index >= t.start && index <= t.stop ? i : a),
		-1
	);
	return idx !== -1 ? { token: lines[focusedRow].tokens[idx], index: idx } : {};
};

TOOLS.getCurrentToken = getCurrentToken;
TOOLS.removeChar = removeChar;
TOOLS.mergeRow = mergeRow;
TOOLS.getRow = getRow;
TOOLS.getRowLength = getRowLength;
TOOLS.getNewRow = getNewRow;

export default TOOLS;
