import { Parser as VtlParser } from "@making-sense/vtl-2-0-antlr-tools-ts";
import * as dfd from "danfojs";
import { BasicScalarTypes, Dataset, CalcConfig } from "model";
import {
    buildDataStructureIndexes,
    getDeviation,
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
    let dsWithoutUselessIds = ds;
    if (Array.isArray(groupBy) && groupBy.length > 0) {
        const uselessIds = ds.dataStructure
            .filter(c => c.role === VtlParser.IDENTIFIER && !groupBy.includes(c.name))
            .map(c => c.name);
        dsWithoutUselessIds = executeDrop(ds, uselessIds);
    }

    const { dataPoints, dataStructure } = dsWithoutUselessIds;

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
    const operatorFunctionWithNull = (component: BasicScalarTypes[]): BasicScalarTypes => {
        // TODO exclude count?
        if (component.includes(null)) return null;
        return operatorFunction(component);
    };
    // Update role fn(groupBy) & type fn(opType)
    // Sort by role, IDENTIFIER first
    const newDataStructure = dataStructure
        .map(c => {
            const { name, type } = c;
            const newType = measureColumnTypes || type;
            if (groupBy?.includes(name)) return { ...c, role: VtlParser.IDENTIFIER };
            return { ...c, type: newType };
        })
        .sort((a, b) => {
            if (b.role !== VtlParser.IDENTIFIER && a.role === VtlParser.IDENTIFIER) return -1;
            return 1;
        });
    if (groupBy?.length === 0) {
        const transposedDataPoints = transpose(dataPoints);
        const transformedDataPoints = transposedDataPoints.map(d =>
            opType === VtlParser.COUNT ? operatorFunction(d) : operatorFunctionWithNull(d)
        ) as BasicScalarTypes[];
        return { dataStructure: newDataStructure, dataPoints: [transformedDataPoints] };
    } else {
        const idPositions = dataStructure.reduce<Array<number>>((acc, component, index) => {
            if (component.role === VtlParser.IDENTIFIER) return [...acc, index];
            return acc;
        }, []);
        const groupedDataPoints = dataPoints.reduce<Record<string, BasicScalarTypes[][]>>(
            (acc, line) => {
                const id = idPositions.map(p => line[p]).join("-");
                const measureLine = line.filter((_, i) => !idPositions.includes(i));
                if (!(id in acc)) return { ...acc, [id]: [measureLine] };
                return { ...acc, [id]: [...acc[id], measureLine] };
            },
            {}
        );
        const aggregatedDataPoints = Object.entries(groupedDataPoints).reduce<
            Record<string, (BasicScalarTypes | null)[]>
        >((acc, entry) => {
            const [key, value] = entry;
            const columns = transpose(value);
            const aggregatedColumns = columns.map(c => operatorFunctionWithNull(c));
            return { ...acc, [key]: aggregatedColumns };
        }, {});
        const idTuples = dataPoints.reduce<Record<string, BasicScalarTypes[]>>((acc, line) => {
            const id = idPositions.map(p => line[p]).join("-");
            if (id in acc) return acc;
            return { ...acc, [id]: idPositions.map(i => line[i]) };
        }, {});
        const newDataPoints = Object.entries(aggregatedDataPoints).map(([id, values]) => {
            const idValues = idTuples[id];
            return [...idValues, ...values];
        });
        return { dataStructure: newDataStructure, dataPoints: newDataPoints };
    }
};
