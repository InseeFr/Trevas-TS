import { DataFrame } from "danfojs/dist/danfojs-browser/src";
import { BasicScalarTypes, Component, Dataset } from "./vtl";

export type InternalDataset = { dataStructure: Component[]; dataset: DataFrame };

export type Bindings = Record<string, BasicScalarTypes | Dataset>;
