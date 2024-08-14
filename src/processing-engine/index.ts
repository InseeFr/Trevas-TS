import { CalcConfig, Dataset, Bindings } from "model";
import * as InMemory from "./in-memory";
import * as Wasm from "./wasm";

export const getDatasetImplementations = (bindings: Bindings): DatasetImplementations => {
    const mode = bindings["$vtl.engine.processing_engine_names"];
    if (mode === "wasm") return Wasm;
    return InMemory;
};

export type DatasetImplementations = {
    executeDrop: (ds: Dataset, measuresToDrop: string[]) => Dataset;
    executeCalc: (ds: Dataset, config: CalcConfig[]) => Dataset;
    executeRename: (ds: Dataset, config: Record<string, string>) => Dataset;
    executeInnerJoin: (ds1: Dataset, ds2: Dataset) => Dataset;
    executeAggr: (ds: Dataset, groupBy: string[] | null, opType: number) => Dataset;
};
