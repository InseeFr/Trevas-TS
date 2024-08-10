import { Parser as VtlParser } from "@making-sense/vtl-2-0-antlr-tools-ts";
import * as dfd from "danfojs";
import { BasicScalarTypes, Dataset, CalcConfig } from "model";
import {
    buildDataStructureIndexes,
    getInternalDatasetFromDataset,
    getInternalDatasetIds,
    getMeasures
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
