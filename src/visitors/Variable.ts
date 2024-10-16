import {
    Parser as VtlParser,
    Visitor as VtlVisitor,
    VarIdExprContext
} from "@making-sense/vtl-2-1-antlr-tools-ts";
import { VisitorResult, Bindings } from "../model";

// TODO: Support integers here.
const types = {
    string: VtlParser.STRING,
    number: VtlParser.NUMBER,
    boolean: VtlParser.BOOLEAN
};

/** Variable duck typing and type checking */
const typeResolver = (variable: string, bindings: Bindings): number => {
    const boundVar = bindings[variable];

    if (boundVar === null) return VtlParser.NULL_CONSTANT;

    const jsType = typeof boundVar;

    if (jsType === "string" || jsType === "number" || jsType === "boolean") {
        return types[jsType];
    }
    if (jsType === "object") {
        const dsKeys = Object.keys(boundVar);
        if (dsKeys.includes("dataStructure") && dsKeys.includes("dataPoints")) {
            return VtlParser.DATASET;
        }
        throw new Error("The dataset shape is not good.");
    }
    throw new Error("Unrecognized variable type.");
};

/** Variable transformation */
const varTransformer = (variable: string, bindings: Bindings) => {
    const type = typeResolver(variable, bindings);
    if (
        [
            VtlParser.NUMBER,
            VtlParser.STRING,
            VtlParser.BOOLEAN,
            VtlParser.NULL_CONSTANT,
            VtlParser.DATASET
        ].includes(type)
    ) {
        return bindings[variable];
    }
    throw new Error(`Cannot transform variable of type ${type}`);
};

class VariableVisitor extends VtlVisitor<VisitorResult> {
    bindings: Bindings;
    constructor(bindings: Bindings) {
        super();
        this.bindings = bindings;
    }

    visitVarIdExpr = (ctx: VarIdExprContext) => {
        const variable = ctx.getText();
        return {
            resolve: (bindings: Bindings) => varTransformer(variable, bindings),
            type: typeResolver(variable, this.bindings)
        };
    };
}

export default VariableVisitor;
