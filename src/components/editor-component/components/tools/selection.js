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
const lastRow = row => ({
	scrollRange,
	chasse,
	rowHeight,
	selection,
	horizontalRange: hr,
}) => {
	const top = (row - scrollRange.start) * rowHeight;
	const left = 0;
	const width = (selection.stop.index - hr.start) * chasse;
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
	horizontalRange: hr,
	lines,
}) => {
	const top = (row - scrollRange.start) * rowHeight;
	const left = Math.max((selection.start.index - hr.start) * chasse, 0);
	const width =
		(lines[row].value.length - Math.max(hr.start, selection.start.index)) *
		chasse;

	return {
		top,
		left,
		width,
	};
};

/* */
const middleRow = row => ({
	scrollRange,
	rowHeight,
	lines,
	chasse,
	horizontalRange: hr,
}) => {
	const top = (row - scrollRange.start) * rowHeight;
	const left = 0;
	const width = (lines[row].value.length - hr.start) * chasse;
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
const isInScrollrange = index => ({ selection, scrollRange }) => {
	const scrStart = selection.start.row - scrollRange.start;
	const scrRow = scrStart + index;
	return scrRow >= 0 && scrRow <= scrollRange.offset - 1;
};

/* */
const isInHorizontalRange = row => ({
	horizontalRange: hr,
	selection: s,
	lines,
}) => {
	const { length } = lines[row].value;
	if (row === s.start.row && (s.start.index <= hr.stop && length > hr.start)) {
		return true;
	}
	if (
		row === s.stop.row &&
		Math.max(s.stop.index, hr.start + hr.offset) < hr.offset + s.stop.index
	) {
		return true;
	}
	if (
		row !== s.stop.row &&
		row !== s.start.row &&
		Math.max(length, hr.stop) < hr.offset + length
	) {
		return true;
	}

	return false;
};

/* */
const multiRowSelection = () => state => {
	const { selection } = state;
	const blocs = new Array(selection.stop.row - selection.start.row + 1)
		.fill({})
		.reduce((a, b, i) => {
			const row = selection.start.row + i;

			return isInScrollrange(i)(state) && isInHorizontalRange(row)(state)
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
