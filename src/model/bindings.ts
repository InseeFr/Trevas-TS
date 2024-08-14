import * as dfd from "danfojs";
import { BasicScalarTypes, Component, Dataset } from "./vtl";

// To define
export type InternalDataset = { dataStructure: Component[]; dataset: dfd.DataFrame };

export type Bindings = Record<string, BasicScalarTypes | Dataset>;
