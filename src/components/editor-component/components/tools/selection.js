import { getCursorLeft } from './cursor';

const SELECTION = {};

/*
 * SELECTION
 */
const singleRowSelection = chasse => ({
	selection,
	scrollRange,
	rowHeight,
}) => {
	const top = rowHeight * (selection.start.row - scrollRange.start);
	const left = getCursorLeft(chasse)(selection.start.index);
	const width = getCursorLeft(chasse)(selection.stop.index) - left;
	return [{ top, width, left }];
};

/* */
const multiRowSelection = chasse => ({
	selection,
	lines,
	scrollRange,
	rowHeight,
}) => {
	const blocs = new Array(selection.stop.row - selection.start.row + 1)
		.fill({})
		.reduce((a, b, i) => {
			const scrStart = selection.start.row - scrollRange.start;
			const scrStop = selection.stop.row - scrollRange.start;
			const rowCurrent = scrStart + i;
			const bloc =
				rowCurrent >= 0 && rowCurrent <= scrollRange.offset - 1
					? [
							...a,
							rowCurrent === scrStart
								? {
										top: rowCurrent * rowHeight,
										left: selection.start.index * chasse,
										width:
											chasse *
											(lines[selection.start.row + i].value.length -
												selection.start.index),
								  }
								: rowCurrent === scrStop
								? {
										top: rowCurrent * rowHeight,
										left: 0,
										width: chasse * selection.stop.index,
								  }
								: {
										top: rowCurrent * rowHeight,
										left: 0,
										width: chasse * lines[selection.start.row + i].value.length,
								  },
					  ]
					: a;

			return bloc;
		}, []);

	return blocs;
};

/* */
export const getSelectionBlocs = chasse => state =>
	state.selection.start.row === state.selection.stop.row
		? singleRowSelection(chasse)(state)
		: multiRowSelection(chasse)(state);

SELECTION.getSelectionBlocs = getSelectionBlocs;

export default SELECTION;
