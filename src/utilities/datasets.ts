import { Parser as VtlParser } from "@making-sense/vtl-2-0-antlr-tools-ts";
import * as dfd from "danfojs";
import isEqual from "lodash.isequal";
import { BasicScalarTypes, Component, Dataset, InternalDataset } from "model";

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

export const hasSameStructure = (ds1: Dataset, ds2: Dataset): boolean => {
    const { dataStructure: dataStructureDs1 } = ds1;
    const { dataStructure: dataStructureDs2 } = ds2;
    return isEqual(dataStructureDs1, dataStructureDs2);
};

export const validateMeasuresTypes = (ds: Dataset, types: number[]): boolean =>
    ds.dataStructure.filter(({ role, type }) => role === VtlParser.MEASURE && !types.includes(type))
        .length === 0;

export const getInternalDatasetIds = (ds: InternalDataset): string[] =>
    ds.dataStructure.filter(({ role }) => role === VtlParser.IDENTIFIER).map(({ name }) => name);

export const getInternalDatasetMeasures = (ds: InternalDataset): string[] =>
    ds.dataStructure.filter(({ role }) => role === VtlParser.MEASURES).map(({ name }) => name);

export const getMeasureNames = (ds: InternalDataset): Array<string> =>
    ds.dataStructure.filter(({ role }) => role === VtlParser.MEASURE).map(({ name }) => name);

export const getMeasures = (dataStructure: Component[]): Component[] =>
    dataStructure.filter(({ role }) => role === VtlParser.MEASURE);

export const getRenameMeasuresConfig = (ds: Dataset, suffix: string): Record<string, string> =>
    ds.dataStructure.reduce((acc, component) => {
        const { role, name } = component;
        if (role === VtlParser.MEASURE) {
            return { ...acc, [name]: `${name}${suffix}` };
        }
        return acc;
    }, {});

export const buildDataStructureIndexes = (dataStructure: Component[]): Record<string, number> =>
    dataStructure.reduce((acc, c, i) => ({ ...acc, [c.name]: i }), {});

export const revertObj = (obj: Record<string, string>) =>
    Object.fromEntries(Object.entries(obj).map(a => a.reverse()));

export const transpose = (array: BasicScalarTypes[][]) =>
    Array.isArray(array[0]) ? array[0].map((_, colIndex) => array.map(row => row[colIndex])) : [];
