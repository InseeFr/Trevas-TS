import { VtlParser } from '@inseefr/vtl-2.0-antlr-tools';
import { getTokenName } from '../parser';
import { fromDatasetToDataframe } from './dataframe-builder';
import * as U from '../array';

const defaultDataset = {
	dataStructure: {},
	dataPoints: {},
};

// TODO: handle better dataStructure thanks to roles & types

/**
 * Binding datasets are already transformed as DataFrame
 * Calculated datasets have the following shape: {dataStructure: {...}, dataPoints:{...}}
 */
const getExprAsDataFrame = (expr) => {
	if (expr.dataStructure) return fromDatasetToDataframe(expr);
	return expr;
};

export const transpose = (array) =>
	Array.isArray(array[0])
		? array[0].map((_, colIndex) => array.map((row) => row[colIndex]))
		: [];

export const getDFContent = (expr) => {
	const df = getExprAsDataFrame(expr);
	const dfElements = df && df.content && df.content.values && df.content.values;
	if (!dfElements) throw new Error('Malformed dataset into bindings');
	const { columnNames, rows } = dfElements;
	return { columnNames, data: transpose(rows) };
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
	const { columnNames, data } = getDFContent(expr);
	const transformer = getDatasetCastTransformation(outputType);
	return columnNames.reduce((acc, col, i) => {
		const values = data[i].map((d) => handleNullElement(d)(transformer));
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
		const { columnNames, data } = getDFContent(expr);
		if (!data) return null;
		return columnNames.reduce((acc, col, i) => {
			const values = getColValues(fn)(data[i])(canContainNull);
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
