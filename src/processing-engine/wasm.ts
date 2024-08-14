import { Dataset, CalcConfig } from "model";

export const executeDrop = (_ds: Dataset, _measuresToDrop: string[]): Dataset => {
    throw new Error("executeDrop is not yet implemented for Wasm");
};

export const executeCalc = (_ds: Dataset, _config: CalcConfig[]): Dataset => {
    throw new Error("executeCalc is not yet implemented for Wasm");
};

export const executeRename = (_ds: Dataset, _config: Record<string, string>): Dataset => {
    throw new Error("executeRename is not yet implemented for Wasm");
};

export const executeInnerJoin = (_ds1: Dataset, _ds2: Dataset): Dataset => {
    throw new Error("executeInnerJoin is not yet implemented for Wasm");
};

export const executeAggr = (_ds: Dataset, _groupBy: string[] | null, _opType: number): Dataset => {
    throw new Error("executeAggr is not yet implemented for Wasm");
};
