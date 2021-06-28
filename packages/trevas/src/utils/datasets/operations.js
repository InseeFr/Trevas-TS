import * as U from '../array';

const getRowsFromExpr = (expr) =>
	expr &&
	expr.content &&
	expr.content.values &&
	expr.content.values.rows &&
	expr.content.values.rows;

const getHandlingNull = (expr) => (fn) => {
	const rows = getRowsFromExpr(expr);
	if (!rows) return null;
	return fn(rows);
};

export const getDatasetFirstValue = (expr) =>
	getHandlingNull(expr)((r) => r[0]);

export const getDatasetLastValue = (expr) =>
	getHandlingNull(expr)((r) => r[r.length - 1]);

export const getSum = (expr) =>
	getHandlingNull(expr)((r) => U.transpose(r).map((c) => U.getArraySum(c)));

export const getMin = (expr) =>
	getHandlingNull(expr)((r) => U.transpose(r).map((c) => U.getArrayMin(c)));

export const getMax = (expr) =>
	getHandlingNull(expr)((r) => U.transpose(r).map((c) => U.getArrayMax(c)));

export const getMedian = (expr) =>
	getHandlingNull(expr)((r) => U.transpose(r).map((c) => U.getArrayMedian(c)));

export const getAvg = (expr) => {
	const sumArray = getSum(expr);
	return sumArray.map((a) => {
		if (a === 0) return 0;
		if (a === null) return null;
		return a / getHandlingNull(expr)((r) => r.length);
	});
};

export const getStdDevPop = (expr) =>
	getHandlingNull(expr)((r) => U.transpose(r).map((c) => U.getDeviation(c)));

export const getStdDevSamp = (expr) =>
	getHandlingNull(expr)((r) =>
		U.transpose(r).map((c) => U.getDeviation(c, false))
	);

export const getVarPop = (expr) =>
	getHandlingNull(expr)((r) => U.transpose(r).map((c) => U.getVariance(c)));

export const getVarSamp = (expr) =>
	getHandlingNull(expr)((r) =>
		U.transpose(r).map((c) => U.getVariance(c, false))
	);
