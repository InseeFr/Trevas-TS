import { VtlParser } from '@inseefr/vtl-2.0-antlr-tools';
import { getTokenName } from '../parser';
import * as U from '../array';

// TODO: handle better dataStructure thanks to roles & types

export const getPairs = (expr) => {
	const ds =
		expr &&
		expr.content &&
		expr.content.pairs &&
		expr.content.pairs.iterables &&
		expr.content.pairs.iterables[1];
	if (!ds) throw new Error('Malformed dataset into bindings');
	const { columnNames, rows } = ds;
	return { columnNames, data: U.transpose(rows) };
};

const handleNullForArithmetic = (expr) => (fn) => {
	const [dataStructure, data] = getPairs(expr);
	if (!data) return null;
	return { dataStructure, dataPoints: fn(data) };
};

const handleNullElement = (element) => (fn) => {
	if (element === null) return null;
	return fn(element);
};

const getDatasetCastTransformation = (type) => {
	switch (type) {
		case VtlParser.INTEGER:
			return (e) => parseInt(e, 10);
		case VtlParser.NUMBER:
			return (e) => parseFloat(e, 10);
		default:
			throw new Error(`Can't cast dataset as ${getTokenName(type)} for now`);
	}
};

export const getDatasetCast = (outputType) => (expr) => {
	const { columnNames, data } = getPairs(expr);
	const transformer = getDatasetCastTransformation(outputType);
	return columnNames.reduce(
		(acc, col, i) => {
			const values = data[i].map((d) => handleNullElement(d)(transformer));
			return {
				dataStructure: { ...acc.dataStructure, [col]: {} },
				dataPoints: { ...acc.dataPoints, [col]: values },
			};
		},
		{
			dataStructure: {},
			dataPoints: {},
		}
	);

	// const transformer = getDatasetCastTransformation(outputType);
	// return {
	// 	dataStructure: {},
	// 	dataPoints: rows.map((r) =>
	// 		r.map((e) => handleNullElement(e)(transformer))
	// 	),
	// };
};

export const getDatasetFirstValue = (expr) =>
	handleNullForArithmetic(expr)((r) => r[0]);

export const getDatasetLastValue = (expr) =>
	handleNullForArithmetic(expr)((r) => r[r.length - 1]);

export const getSum = (expr) =>
	handleNullForArithmetic(expr)((r) =>
		U.transpose(r).map((c) => U.getArraySum(c))
	);

export const getMin = (expr) =>
	handleNullForArithmetic(expr)((r) =>
		U.transpose(r).map((c) => U.getArrayMin(c))
	);

export const getMax = (expr) =>
	handleNullForArithmetic(expr)((r) =>
		U.transpose(r).map((c) => U.getArrayMax(c))
	);

export const getMedian = (expr) =>
	handleNullForArithmetic(expr)((r) =>
		U.transpose(r).map((c) => U.getArrayMedian(c))
	);

export const getAvg = (expr) => {
	const sumArray = getSum(expr);
	return sumArray.map((a) => {
		if (a === 0) return 0;
		if (a === null) return null;
		return a / handleNullForArithmetic(expr)((r) => r.length);
	});
};

export const getStdDevPop = (expr) =>
	handleNullForArithmetic(expr)((r) =>
		U.transpose(r).map((c) => U.getDeviation(c))
	);

export const getStdDevSamp = (expr) =>
	handleNullForArithmetic(expr)((r) =>
		U.transpose(r).map((c) => U.getDeviation(c, false))
	);

export const getVarPop = (expr) =>
	handleNullForArithmetic(expr)((r) =>
		U.transpose(r).map((c) => U.getVariance(c))
	);

export const getVarSamp = (expr) =>
	handleNullForArithmetic(expr)((r) =>
		U.transpose(r).map((c) => U.getVariance(c, false))
	);
