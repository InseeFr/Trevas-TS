const TOOLS = {};

/* UTILS */
const getRow = ({ lines, focusedRow }) => lines[focusedRow];

const getRowLength = state => getRow(state).value.length;

/* */
export const getNewRow = (string, old = {}, index = -1) => ({
	value: string,
	tokens: [
		{ value: string, start: 0, stop: string.length - 1, className: 'unmapped' },
	], //getTokens_(string, index),
	...old,
});

TOOLS.getNewRow = getNewRow;

export default TOOLS;
