const TOOLS = {};

/* UTILS */
export const getRow = ({ lines, focusedRow }) => lines[focusedRow];

export const getRowLength = state => getRow(state).value.length;

/* */
export const getNewRow = (string, old = {}, index = -1) => ({
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

export const removeChar = (index, char, line) => {};

TOOLS.getRow = getRow;
TOOLS.getRowLength = getRowLength;
TOOLS.getNewRow = getNewRow;

export default TOOLS;
