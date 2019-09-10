const CURSOR = {};

/* */
export const getCursorLeft = chasse => index => chasse * index;

/*
 * CURSOR
 */
export const getCursorPosition = (e, parentEl, chasse) => ({
	lines,
	scrollRange,
	rowHeight,
}) => {
	const { clientX, clientY } = e;
	const { top, left } = parentEl.current.getBoundingClientRect();
	const posY = clientY - top;
	const screenRow = Math.trunc(posY / rowHeight); // top
	const newFocusedRow = Math.min(
		screenRow + scrollRange.start,
		lines.length - 1
	);
	if (screenRow < scrollRange.offset && screenRow < lines.length) {
		const newIndex = Math.trunc((clientX - left) / chasse);
		return {
			newFocusedRow,
			newIndex: Math.min(lines[newFocusedRow].value.length, newIndex),
		};
	}
	return {};
};

CURSOR.getCursorPosition = getCursorPosition;
CURSOR.getCursorLeft = getCursorLeft;

export default CURSOR;
