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

TOOLS.getRow = getRow;
TOOLS.getRowLength = getRowLength;
TOOLS.getNewRow = getNewRow;

export default TOOLS;
