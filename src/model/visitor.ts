import { Bindings } from "./bindings";
import { Component } from "./vtl";

export type VisitorResult = {
    resolve: (bindings: Bindings) => any;
    type: number;
    columns?: Component[];
};
