import { getCursorLeft } from './cursor';

const SELECTION = {};

/* */
const computeSelection = (a, e) => {
	const p = (row, index) => ({ row, index });
	const multi = () =>
		a.row > e.row
			? { start: p(e.row, e.index), stop: p(a.row, a.index) }
			: { start: p(a.row, a.index), stop: p(e.row, e.index) };
	const single = () =>
		a.index > e.index
			? { start: p(e.row, e.index), stop: p(a.row, a.index) }
			: { start: p(a.row, a.index), stop: p(e.row, e.index) };
	return a.row === e.row ? single() : multi();
};

/* */
export const checkSelection = selection => {
	if (!selection) return undefined;
	const { anchor, extent } = selection;
	if (!anchor || !extent) return selection;
	const { start, stop } = computeSelection(anchor, extent);
	return { start, stop, anchor, extent };
};

/*
 * SELECTION
 */
const singleRowSelection = ({
	selection,
	scrollRange,
	rowHeight,
	horizontalRange: hr,
	chasse,
}) => {
	const { start, stop } = selection;
	if (start.index > hr.stop || stop.index < hr.start) return [];
	const top = rowHeight * (start.row - scrollRange.start);
	const left = Math.max(0, getCursorLeft(chasse)(start.index - hr.start));
	const width =
		Math.max(getCursorLeft(chasse)(stop.index - hr.start), 0) - left;
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
	const { start, stop } = selection;
	if (row === start.row) {
		return firstRow(row)(state);
	}
	if (row === stop.row) {
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
const multiRowSelection = state => {
	const {
		selection: { stop, start },
	} = state;
	const blocs = new Array(stop.row - start.row + 1)
		.fill({})
		.reduce((a, b, i) => {
			const row = start.row + i;

			return isInScrollrange(i)(state) && isInHorizontalRange(row)(state)
				? [...a, getRow(row)(state)]
				: a;
		}, []);
	return blocs;
};

/* */
export const getSelectionBlocs = state => {
	const { selection } = state;
	const { start, stop } = selection;

	return start.row === stop.row
		? singleRowSelection(state)
		: multiRowSelection(state);
};

SELECTION.getSelectionBlocs = getSelectionBlocs;

export default SELECTION;
