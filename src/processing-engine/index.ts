import { CalcConfig, Dataset, VTLBindings } from "model";
import * as InMemory from "./in-memory";
import * as Wasm from "./wasm";

export const getDatasetImplementations = (bindings: VTLBindings): DatasetImplementations => {
    const mode = bindings["$vtl.engine.processing_engine_names"];
    if (mode === "wasm") return Wasm;
    return InMemory;
};

export type DatasetImplementations = {
    executeDrop: (ds: Dataset, measuresToDrop: string[]) => Dataset;
    executeCalc: (ds: Dataset, config: CalcConfig[]) => Dataset;
    executeRename: (ds: Dataset, config: Record<string, string>) => Dataset;
    executeInnerJoin: (ds1: Dataset, ds2: Dataset) => Dataset;
};

export const executeDrop = (ds: Dataset, measuresToDrop: string[]): Dataset => {
    throw new Error("executeDrop is not yet implemented for Wasm");
};

export const executeCalc = (ds: Dataset, config: CalcConfig[]): Dataset => {
    throw new Error("executeCalc is not yet implemented for Wasm");
};

export const executeRename = (ds: Dataset, config: Record<string, string>): Dataset => {
    throw new Error("executeRename is not yet implemented for Wasm");
};

export const executeInnerJoin = (ds1: Dataset, ds2: Dataset): Dataset => {
    throw new Error("executeInnerJoin is not yet implemented for Wasm");
};
