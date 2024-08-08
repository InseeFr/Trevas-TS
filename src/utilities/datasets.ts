import { Parser as VtlParser } from "@making-sense/vtl-2-0-antlr-tools-ts";
import * as dfd from "danfojs";
import isEqual from "lodash.isequal";
import { getTokenName } from "./parser";
import { BasicScalarTypes, CalcConfig, Component, Dataset, InternalDataset } from "model";

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

export const executeRename = (ds: Dataset, config: Record<string, string>): Dataset => {
    const { dataStructure, dataPoints } = ds;
    const newDataStructure = dataStructure.map(d => {
        const { name, ...rest } = d;
        return { ...rest, name: name in config ? config[name] : name };
    });
    return { dataStructure: newDataStructure, dataPoints };
};

const buildDataStructureIndexes = (dataStructure: Component[]): Record<string, number> =>
    dataStructure.reduce((acc, c, i) => ({ ...acc, [c.name]: i }), {});

export const executeCalc = (ds: Dataset, config: CalcConfig[]): Dataset => {
    const { dataStructure, dataPoints } = ds;
    const indexes = buildDataStructureIndexes(dataStructure);

    const newStructure = config.reduce((acc, c) => {
        const { name, type } = c;
        if (acc.find(d => d.name === name)) return acc;
        return [...acc, { name, type, role: VtlParser.MEASURE }];
    }, dataStructure);

    const newDataPoints = dataPoints.map(line => {
        const newLine = config.reduce((acc, c) => {
            const { operatorFunction, params } = c;
            const resolvedParams = params.map(({ type, value }) =>
                type === "COLUMN" ? line[indexes[value as string]] : value
            ) as number[];
            return [...acc, operatorFunction(resolvedParams)];
        }, line);
        return newLine;
    });
    return { dataStructure: newStructure, dataPoints: newDataPoints };
};

export const executeDrop = (ds: Dataset, measuresToDrop: string[]): Dataset => {
    const { dataPoints, dataStructure } = ds;
    const indexes = buildDataStructureIndexes(dataStructure);
    const measuresToDropIndexes = measuresToDrop.map(m => indexes[m]);
    const newDataStructure = dataStructure.filter(({ name }) => !measuresToDrop.includes(name));
    const newDataPoints = dataPoints.map(line =>
        line.filter((_, i) => !measuresToDropIndexes.includes(i))
    );
    return { dataPoints: newDataPoints, dataStructure: newDataStructure };
};

export const executeInnerJoin = (ds1: Dataset, ds2: Dataset): Dataset => {
    // TODO throw if common measures
    const ds1InternalDataset = getInternalDatasetFromDataset(ds1);
    const ds2InternalDataset = getInternalDatasetFromDataset(ds2);
    const mergedDs = dfd.merge({
        left: ds1InternalDataset.dataset,
        right: ds2InternalDataset.dataset,
        on: getInternalDatasetIds(ds1InternalDataset),
        how: "inner"
    });
    const newDataStructure = [...ds1.dataStructure, ...getMeasures(ds2.dataStructure)];
    return { dataPoints: mergedDs.values as BasicScalarTypes[][], dataStructure: newDataStructure };
};

const defaultDataset = {
    dataStructure: [],
    dataPoints: []
};

export const revertObj = (obj: Record<string, string>) =>
    Object.fromEntries(Object.entries(obj).map(a => a.reverse()));

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
