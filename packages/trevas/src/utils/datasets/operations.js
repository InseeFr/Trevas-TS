import { VtlParser } from '@inseefr/vtl-2.0-antlr-tools';
import * as U from '../array';
import { getTokenName } from '../parser';

const defaultDataset = {
	dataStructure: {},
	dataPoints: {},
};

export const transpose = (array) =>
	Array.isArray(array[0])
		? array[0].map((_, colIndex) => array.map((row) => row[colIndex]))
		: [];

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
	const { dataStructure, dataPoints } = expr;
	const transformer = getDatasetCastTransformation(outputType);

	const columnNames = Object.keys(dataStructure);
	return columnNames.reduce((acc, col) => {
		const values = dataPoints[col].map((d) =>
			handleNullElement(d)(transformer)
		);
		return {
			dataStructure: { ...acc.dataStructure, [col]: {} },
			dataPoints: { ...acc.dataPoints, [col]: values },
		};
	}, defaultDataset);
};

const getColValues = (fn) => (colData) => (canContainNull) => {
	if (!canContainNull && colData.includes(null)) return null;
	return fn(colData);
};

const handleArithmetic =
	(expr) =>
	(fn, canContainNull = false) => {
		const { dataStructure, dataPoints } = expr;
		if (!Object.keys(dataPoints).length === 0) return null;
		const columnNames = Object.keys(dataStructure);
		return columnNames.reduce((acc, col) => {
			const values = getColValues(fn)(dataPoints[col])(canContainNull);
			// TODO: refine the way to extract or not thanks to metadata
			return {
				dataStructure: { ...acc.dataStructure, [col]: {} },
				dataPoints: { ...acc.dataPoints, [col]: values },
			};
		}, defaultDataset);
	};

export const getCount = (expr) => handleArithmetic(expr)((r) => r.length, true);

export const getDatasetFirstValue = (expr) =>
	handleArithmetic(expr)((r) => r[0], true);

export const getDatasetLastValue = (expr) =>
	handleArithmetic(expr)((r) => r[r.length - 1], true);

export const getSum = (expr) => handleArithmetic(expr)((c) => U.getArraySum(c));

export const getMin = (expr) => handleArithmetic(expr)((c) => U.getArrayMin(c));

export const getMax = (expr) => handleArithmetic(expr)((c) => U.getArrayMax(c));

export const getMedian = (expr) =>
	handleArithmetic(expr)((c) => U.getArrayMedian(c));

export const getAvg = (expr) => handleArithmetic(expr)((c) => U.getArrayAvg(c));

export const getStdDevPop = (expr) =>
	handleArithmetic(expr)((c) => U.getDeviation(c));

export const getStdDevSamp = (expr) =>
	handleArithmetic(expr)((c) => U.getDeviation(c, false));

export const getVarPop = (expr) =>
	handleArithmetic(expr)((c) => U.getVariance(c));

export const getVarSamp = (expr) =>
	handleArithmetic(expr)((c) => U.getVariance(c, false));
