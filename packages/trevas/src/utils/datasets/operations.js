import * as U from '../array';

const getRowsFromExpr = (expr) =>
	expr &&
	expr.content &&
	expr.content.values &&
	expr.content.values.rows &&
	expr.content.values.rows;

export const getDatasetFirstValue = (expr) => {
	const rows = getRowsFromExpr(expr);
	if (!rows) return null;
	return rows[0];
};

export const getDatasetLastValue = (expr) => {
	const rows = getRowsFromExpr(expr);
	if (!rows) return null;
	return rows[rows.length - 1];
};

export const getSum = (expr) => {
	const rows = getRowsFromExpr(expr);
	if (!rows) return null;
	const columns = U.transpose(rows);
	return columns.map((r) => U.getArraySum(r));
};

export const getMin = (expr) => {
	const rows = getRowsFromExpr(expr);
	if (!rows) return null;
	const columns = U.transpose(rows);
	return columns.map((r) => U.getArrayMin(r));
};

export const getMax = (expr) => {
	const rows = getRowsFromExpr(expr);
	if (!rows) return null;
	const columns = U.transpose(rows);
	return columns.map((r) => U.getArrayMax(r));
};
