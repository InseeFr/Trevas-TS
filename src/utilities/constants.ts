import { Parser as VtlParser } from "@making-sense/vtl-2-1-antlr-tools-ts";

export const replaceConstantType = (type: number): number => {
    switch (type) {
        case VtlParser.STRING_CONSTANT:
            return VtlParser.STRING;
        case VtlParser.INTEGER_CONSTANT:
            return VtlParser.INTEGER;
        case VtlParser.NUMBER_CONSTANT:
            return VtlParser.NUMBER;
        case VtlParser.BOOLEAN_CONSTANT:
            return VtlParser.BOOLEAN;
        case VtlParser.NULL_CONSTANT:
            return VtlParser.NULL_CONSTANT;
        default:
            return type;
    }
};
