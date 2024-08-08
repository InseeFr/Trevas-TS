import { VTLBindings } from "./bindings";

export type VisitorResult = {
    resolve: (bindings: VTLBindings) => any;
    type: number;
};
