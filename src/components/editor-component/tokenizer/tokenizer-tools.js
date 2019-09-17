const LF = '\n';

/* */
export const mergeLines = lines =>
	lines.reduce((a, { value }) => `${a}${value}${LF}`, '');

/* */
const defaultTokenizer = (text = '') => {
	return Promise.resolve(getTokensDefault(text));
};
