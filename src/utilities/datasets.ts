import { Parser as VtlParser } from "@making-sense/vtl-2-0-antlr-tools-ts";
import * as U from "./array";
import { getTokenName } from "./parser";
import { BasicScalarTypes, Dataset } from "model/vtl";

const defaultDataset = {
    dataStructure: {},
    dataPoints: {}
};

export const transpose = (array: BasicScalarTypes[][]) =>
    Array.isArray(array[0]) ? array[0].map((_, colIndex) => array.map(row => row[colIndex])) : [];

const handleNullElement =
    (element: BasicScalarTypes) => (fn: (a: BasicScalarTypes) => BasicScalarTypes) => {
        if (element === null) return null;
        return fn(element);
    };

const getDatasetCastTransformation = (type: number): ((a: BasicScalarTypes) => BasicScalarTypes) => {
    switch (type) {
        case VtlParser.INTEGER:
            return (e: BasicScalarTypes): BasicScalarTypes =>
                e === null ? null : parseInt(e.toString(), 10);
        case VtlParser.NUMBER:
            return (e: BasicScalarTypes): BasicScalarTypes =>
                e === null ? null : parseFloat(e.toString());
        default:
            throw new Error(`Can't cast dataset as ${getTokenName(type)} for now`);
    }
};

export const getDatasetCast = (outputType: number) => (expr: Dataset) => {
    const { dataStructure, dataPoints } = expr;
    const transformer = getDatasetCastTransformation(outputType);

    const columnNames = Object.keys(dataStructure);
    return columnNames.reduce((acc, col) => {
        const values = dataPoints[col].map(d => handleNullElement(d)(transformer));
        return {
            dataStructure: { ...acc.dataStructure, [col]: {} },
            dataPoints: { ...acc.dataPoints, [col]: values }
        };
    }, defaultDataset);
};

const getColValues =
    (fn: (a: (BasicScalarTypes | null)[]) => BasicScalarTypes | null) =>
    (colData: (BasicScalarTypes | null)[]) =>
    (canContainNull: boolean): BasicScalarTypes | null => {
        if (!canContainNull && colData.includes(null)) return null;
        return fn(colData);
    };

const handleArithmetic =
    (expr: Dataset) =>
    (
        fn: (a: (BasicScalarTypes | null)[]) => BasicScalarTypes | null,
        canContainNull = false
    ): Dataset | null => {
        const { dataStructure, dataPoints } = expr;
        if (Object.keys(dataPoints).length === 0) return null;
        const columnNames = Object.keys(dataStructure);
        return columnNames.reduce((acc, col) => {
            const values = getColValues(fn)(dataPoints[col])(canContainNull);
            // TODO: refine the way to extract or not thanks to metadata
            return {
                dataStructure: { ...acc.dataStructure, [col]: {} },
                dataPoints: { ...acc.dataPoints, [col]: values }
            };
        }, defaultDataset);
    };

export const getCount = (expr: Dataset): Dataset | null => handleArithmetic(expr)(r => r.length, true);

export const getDatasetFirstValue = (expr: Dataset): Dataset | null =>
    handleArithmetic(expr)(r => r[0], true);

export const getDatasetLastValue = (expr: Dataset): Dataset | null =>
    handleArithmetic(expr)(r => r[r.length - 1], true);

export const getSum = (expr: Dataset): Dataset | null =>
    handleArithmetic(expr)(c => U.getArraySum(c as number[]));

export const getMin = (expr: Dataset): Dataset | null =>
    handleArithmetic(expr)(c => U.getArrayMin(c as number[]));

export const getMax = (expr: Dataset): Dataset | null =>
    handleArithmetic(expr)(c => U.getArrayMax(c as number[]));

export const getMedian = (expr: Dataset): Dataset | null =>
    handleArithmetic(expr)(c => U.getArrayMedian(c as number[]));

export const getAvg = (expr: Dataset): Dataset | null =>
    handleArithmetic(expr)(c => U.getArrayAvg(c as number[]));

export const getStdDevPop = (expr: Dataset): Dataset | null =>
    handleArithmetic(expr)(c => U.getDeviation(c as number[]));

export const getStdDevSamp = (expr: Dataset): Dataset | null =>
    handleArithmetic(expr)(c => U.getDeviation(c as number[], false));

export const getVarPop = (expr: Dataset): Dataset | null =>
    handleArithmetic(expr)(c => U.getVariance(c as number[]));

export const getVarSamp = (expr: Dataset): Dataset | null =>
    handleArithmetic(expr)(c => U.getVariance(c as number[], false));
