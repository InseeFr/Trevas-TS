import { DataFrame } from "danfojs";
import { BasicScalarTypes, Component, Dataset } from "./vtl";

export type InternalDataset = { dataStructure: Component[]; dataset: DataFrame };

export type Bindings = Record<string, BasicScalarTypes | Dataset>;
