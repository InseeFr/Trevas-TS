import { getCursorLeft } from './cursor';

const SELECTION = {};

/*
 * SELECTION
 */
const singleRowSelection = () => ({
	selection,
	scrollRange,
	rowHeight,
	horizontalRange: hr,
	chasse,
}) => {
	if (selection.start.index > hr.stop || selection.stop.index < hr.start)
		return [];
	const top = rowHeight * (selection.start.row - scrollRange.start);
	const left = Math.max(
		0,
		getCursorLeft(chasse)(selection.start.index - hr.start)
	);
	const width =
		Math.max(getCursorLeft(chasse)(selection.stop.index - hr.start), 0) - left;
	return [{ top, width, left }];
};

/* */
const lastRow = row => ({ scrollRange, chasse, rowHeight, selection }) => {
	const top = (row - scrollRange.start) * rowHeight;
	const left = 0;
	const width = selection.stop.index * chasse;
	return {
		top,
		left,
		width,
	};
};

/* */
const firstRow = row => ({
	scrollRange,
	chasse,
	rowHeight,
	selection,
	lines,
}) => {
	const top = (row - scrollRange.start) * rowHeight;
	const left = selection.start.index * chasse;
	const width = (lines[row].value.length - selection.start.index) * chasse;
	return {
		top,
		left,
		width,
	};
};

/* */
const middleRow = row => ({ scrollRange, rowHeight, lines, chasse }) => {
	const top = (row - scrollRange.start) * rowHeight;
	const left = 0;
	const width = lines[row].value.length * chasse;
	return {
		top,
		left,
		width,
	};
};

/* */
const getRow = row => state => {
	const { selection } = state;
	if (row === selection.start.row) {
		return firstRow(row)(state);
	}
	if (row === selection.stop.row) {
		return lastRow(row)(state);
	}
	return middleRow(row)(state);
};

/* */
const multiRowSelection = () => state => {
	const { selection, scrollRange } = state;
	const blocs = new Array(selection.stop.row - selection.start.row + 1)
		.fill({})
		.reduce((a, b, i) => {
			const scrStart = selection.start.row - scrollRange.start;
			const scrRow = scrStart + i;
			const row = selection.start.row + i;

			return scrRow >= 0 && scrRow <= scrollRange.offset - 1
				? [...a, getRow(row)(state)]
				: a;
		}, []);
	return blocs;
};

/* */
export const getSelectionBlocs = () => state =>
	state.selection.start.row === state.selection.stop.row
		? singleRowSelection()(state)
		: multiRowSelection()(state);

SELECTION.getSelectionBlocs = getSelectionBlocs;

export default SELECTION;
