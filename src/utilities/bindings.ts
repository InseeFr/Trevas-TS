import { Bindings, Dataset, VTLBindings } from "model";
import { getInternalDatasetFromDataset } from "./datasets";

export const buildInternalBindingsFromBindings = (vtlBindings: VTLBindings): Bindings =>
    Object.entries(vtlBindings).reduce((acc, [k, v]) => {
        if (typeof v === "object" && Array.isArray(v?.dataStructure) && Array.isArray(v?.dataPoints)) {
            return { ...acc, [k]: getInternalDatasetFromDataset(v as Dataset) };
        }
        return { ...acc, [k]: v };
    }, {});
