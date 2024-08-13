import { Parser as VtlParser } from "@making-sense/vtl-2-0-antlr-tools-ts";
import * as dfd from "danfojs";
import { BasicScalarTypes, Dataset, CalcConfig } from "model";
import {
    buildDataStructureIndexes,
    getDeviation,
    getIdTuples,
    getInternalDatasetFromDataset,
    getInternalDatasetIds,
    getMeasures,
    getVariance,
    transpose
} from "utilities";

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

export const executeRename = (ds: Dataset, config: Record<string, string>): Dataset => {
    const { dataStructure, dataPoints } = ds;
    const newDataStructure = dataStructure.map(d => {
        const { name, ...rest } = d;
        return { ...rest, name: name in config ? config[name] : name };
    });
    return { dataStructure: newDataStructure, dataPoints };
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

export const executeAggr = (ds: Dataset, groupBy: string[] | null, opType: number): Dataset => {
    const { dataPoints, dataStructure } = ds;

    let operatorFunction: (component: BasicScalarTypes[]) => BasicScalarTypes;
    let measureColumnTypes: number | null = null;

    switch (opType) {
        case VtlParser.COUNT: {
            operatorFunction = component => {
                return component.length;
            };
            measureColumnTypes = VtlParser.INTEGER;
            break;
        }
        case VtlParser.SUM: {
            operatorFunction = component => {
                return (component as number[]).reduce((acc, a) => acc + a, 0);
            };
            break;
        }
        case VtlParser.MIN: {
            operatorFunction = component => {
                const typedComponent = component as number[];
                return typedComponent.reduce((acc, a) => (acc < a ? acc : a), typedComponent[0]);
            };
            break;
        }
        case VtlParser.MAX: {
            operatorFunction = component => {
                const typedComponent = component as number[];
                return typedComponent.reduce((acc, a) => (acc > a ? acc : a), typedComponent[0]);
            };
            break;
        }
        case VtlParser.MEDIAN: {
            operatorFunction = component => {
                const typedComponent = component as number[];
                const mid = Math.floor(typedComponent.length / 2);
                const sortedArray = [...typedComponent].sort((a, b) => a - b);
                return typedComponent.length % 2 !== 0
                    ? sortedArray[mid]
                    : (sortedArray[mid - 1] + sortedArray[mid]) / 2;
            };
            measureColumnTypes = VtlParser.NUMBER;
            break;
        }
        case VtlParser.AVG: {
            operatorFunction = component => {
                const typedComponent = component as number[];
                return typedComponent.reduce((acc, a) => acc + a, 0) / typedComponent.length;
            };
            measureColumnTypes = VtlParser.NUMBER;
            break;
        }
        case VtlParser.STDDEV_POP: {
            operatorFunction = component => {
                const typedComponent = component as number[];
                return getDeviation(typedComponent);
            };
            measureColumnTypes = VtlParser.NUMBER;
            break;
        }
        case VtlParser.STDDEV_SAMP: {
            operatorFunction = component => {
                const typedComponent = component as number[];
                return getDeviation(typedComponent, false);
            };
            measureColumnTypes = VtlParser.NUMBER;
            break;
        }
        case VtlParser.VAR_POP: {
            operatorFunction = component => {
                const typedComponent = component as number[];
                return getVariance(typedComponent);
            };
            measureColumnTypes = VtlParser.NUMBER;
            break;
        }
        case VtlParser.VAR_SAMP: {
            operatorFunction = component => {
                const typedComponent = component as number[];
                return getVariance(typedComponent, false);
            };
            measureColumnTypes = VtlParser.NUMBER;
            break;
        }
    }
    const operatorFunctionWithNull = (component: BasicScalarTypes[]) => {
        if (component.includes(null)) return [null];
        return [operatorFunction(component)];
    };
    // Update role fn(groupBy) & type fn(opType)
    const newDataStructure = dataStructure.map(c => {
        const { name, type } = c;
        const newType = measureColumnTypes || type;
        if (groupBy?.includes(name)) return { ...c, type: newType, role: VtlParser.IDENTIFIER };
        return { ...c, type: newType, role: VtlParser.MEASURE };
    });
    if (groupBy?.length === 0) {
        const transposedDataPoints = transpose(dataPoints);
        const transformedDataPoints = transposedDataPoints.map(d =>
            operatorFunctionWithNull(d)
        ) as BasicScalarTypes[][];
        const newDataPoints = transpose(transformedDataPoints);
        return { dataStructure: newDataStructure, dataPoints: newDataPoints };
    } else {
        // TODO
        const idTuples = getIdTuples();
    }
    return { dataStructure: newDataStructure, dataPoints };
};
