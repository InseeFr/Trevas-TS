import * as actions from '../editor-actions';
import { getCRFL } from '../env';
import { validateRange } from './common-state-validator';

/* INSERT TEXT */
const finalizeInsert = state => {
	const { selection: s } = state;
	if (!s) return state;

	return {
		...state,
		selection: undefined,
		focusedRow: s.stop.row,
		index: s.stop.index,
	};
};

const insertSingleRow = rows => state => {
	const { focusedRow, index, lines } = state;
	if (index === undefined || focusedRow === undefined) return state;

	return {
		...state,
		index: rows[0].length + index,
		lines: lines.map((l, i) =>
			i === focusedRow
				? {
						...l,
						value: `${l.value.substr(0, index)}${rows[0]}${l.value.substr(
							index
						)}`,
				  }
				: l
		),
	};
};

const transformRows = (l, index) => ([first, ...rest]) => {
	return [
		{
			...l,
			value: `${l.value.substr(0, index)}${first}`,
		},
		...rest.map((value, i) =>
			i === rest.length - 1
				? { value: `${value}${l.value.substr(index)}`, tokens: [] }
				: { value, tokens: [] }
		),
	];
};

const insertMultiRows = rows => state => {
	const { focusedRow, index, lines } = state;
	if (index === undefined || focusedRow === undefined) return state;
	return {
		...state,
		focusedRow: focusedRow + rows.length - 1,
		index: rows[rows.length - 1].length,
		lines: lines.reduce(
			(a, l, i) =>
				i === focusedRow ? [...a, ...transformRows(l, index)(rows)] : [...a, l],
			[]
		),
	};
};

const insertText = text => state => {
	const { focusedRow, index } = state;
	if (focusedRow === undefined || index === undefined) return state;
	const rows = text.split(getCRFL());
	if (rows.length === 1) {
		return finalizeInsert(insertSingleRow(rows)(state));
	}
	return finalizeInsert(insertMultiRows(rows)(state));
};

/* REDUCER */
const reducer = (state, action) => {
	switch (action.type) {
		case actions.INSERT_TEXT:
			return validateRange(insertText(action.payload.text)(state));
		default:
			return state;
	}
};

export default reducer;
