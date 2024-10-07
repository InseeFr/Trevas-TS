import { Bindings } from "./bindings";

export type VisitorResult = {
    resolve: (bindings: Bindings) => any;
    type: number;
};
