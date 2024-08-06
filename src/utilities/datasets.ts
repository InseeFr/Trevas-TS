import { Parser as VtlParser } from "@making-sense/vtl-2-0-antlr-tools-ts";
import * as dfd from "danfojs";
import isEqual from "lodash.isequal";
import * as U from "./array";
import { getTokenName } from "./parser";
import { BasicScalarTypes, Dataset, InternalDataset } from "model";

const fromVtlTypesToDTypes = (vtlType: number): string => {
    switch (vtlType) {
        case VtlParser.STRING:
            return "string";
        case VtlParser.INTEGER:
            return "int32";
        case VtlParser.NUMBER:
            return "float32";
        case VtlParser.BOOLEAN:
            return "boolean";
        default:
            throw new Error("Bad type");
    }
};

export const getInternalDatasetFromDataset = (dataset: Dataset): InternalDataset => {
    const { dataStructure, dataPoints } = dataset;
    const columns = dataStructure.map(({ name }) => name);
    const dtypes = dataStructure.map(({ type }) => fromVtlTypesToDTypes(type));
    const df: dfd.DataFrame = new dfd.DataFrame(dataPoints, { columns, dtypes });
    return { dataStructure, dataset: df };
};

export const getDatasetFromInternalDataset = (internalDataset: InternalDataset): Dataset => {
    const { dataStructure, dataset } = internalDataset;
    const dataPoints = dataset.values as BasicScalarTypes[][];
    return { dataStructure, dataPoints };
};

export const hasSameStructure = (ds1: InternalDataset, ds2: InternalDataset): boolean => {
    const { dataStructure: dataStructureDs1 } = ds1;
    const { dataStructure: dataStructureDs2 } = ds2;
    return isEqual(dataStructureDs1, dataStructureDs2);
};

export const validateMeasuresTypes = (ds: InternalDataset, types: number[]): boolean =>
    ds.dataStructure.filter(({ role, type }) => role === VtlParser.MEASURE && !types.includes(type))
        .length === 0;

export const getInternalDatasetIds = (ds: InternalDataset): string[] =>
    ds.dataStructure.filter(({ role }) => role === VtlParser.IDENTIFIER).map(({ name }) => name);

export const getInternalDatasetMeasures = (ds: InternalDataset): string[] =>
    ds.dataStructure.filter(({ role }) => role === VtlParser.MEASURES).map(({ name }) => name);

export const getMeasureNames = (ds: InternalDataset): Array<string> =>
    ds.dataStructure.filter(({ role }) => role === VtlParser.MEASURE).map(({ name }) => name);

export const getRenameMeasuresConfig = (ds: InternalDataset, dsName: string): Record<string, string> =>
    ds.dataStructure.reduce((acc, component) => {
        const { role, name } = component;
        if (role === VtlParser.MEASURE) {
            return { ...acc, [name]: `${name}#${dsName}` };
        }
        return acc;
    }, {});

const defaultDataset = {
    dataStructure: [],
    dataPoints: []
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
