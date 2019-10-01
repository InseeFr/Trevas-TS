import { getCRFL } from '../env';

const getOnSingleRowSelection = ({ selection: { start, stop }, lines }) =>
	lines[start.row].value.substr(start.index, stop.index - start.index);

const getOnFirstRow = a => ({ value }, index) =>
	`${a}${value.substr(index)}${getCRFL()}`;
const getOnLastRow = a => ({ value }, index) => `${a}${value.substr(0, index)}`;
const getOnMiddleRow = a => ({ value }) => `${a}${value}${getCRFL()}`;
const getMultiRowsSelection = state => {
	const {
		selection: { start, stop },
		lines,
	} = state;
	return lines.reduce((a, line, i) => {
		if (i === start.row) {
			return getOnFirstRow(a)(line, start.index);
		}
		if (i === stop.row) {
			return getOnLastRow(a)(line, stop.index);
		}
		if (i > start.row && i < stop.row) {
			return getOnMiddleRow(a)(line);
		}
		return a;
	}, '');
};

const getSelectionText = state => {
	const {
		selection: { start, stop },
	} = state;
	return start.row === stop.row
		? getOnSingleRowSelection(state)
		: getMultiRowsSelection(state);
};

export default getSelectionText;
