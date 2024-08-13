import { Dataset, CalcConfig } from "model";

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

export const executeAggr = (ds: Dataset, groupBy: string[] | null, opType: number): Dataset => {
    throw new Error("executeAggr is not yet implemented for Wasm");
};
