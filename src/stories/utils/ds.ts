import { VtlParser } from "@making-sense/vtl-2-0-antlr-tools-ts";

const stringToInt = (s: string): number => {
    switch (s) {
        case "IDENTIFIER":
            return VtlParser.IDENTIFIER;
        case "MEASURE":
            return VtlParser.MEASURE;
        case "ATTRIBUTE":
            return VtlParser.ATTRIBUTE;
        case "STRING":
            return VtlParser.STRING;
        case "INTEGER":
            return VtlParser.INTEGER;
        case "NUMBER":
            return VtlParser.NUMBER;
        case "BOOLEAN":
            return VtlParser.BOOLEAN;
        default:
            throw new Error(`Unknow ${s} in VTL Parser`);
    }
};

const intToString = (i: number): string => {
    switch (i) {
        case VtlParser.IDENTIFIER:
            return "IDENTIFIER";
        case VtlParser.MEASURE:
            return "MEASURE";
        case VtlParser.ATTRIBUTE:
            return "ATTRIBUTE";
        case VtlParser.STRING:
            return "STRING";
        case VtlParser.INTEGER:
            return "INTEGER";
        case VtlParser.NUMBER:
            return "NUMBER";
        case VtlParser.BOOLEAN:
            return "BOOLEAN";
        case VtlParser.TIME:
            return "TIME";
        case VtlParser.TIME_PERIOD:
            return "TIME_PERIOD";
        case VtlParser.DURATION:
            return "DURATION";
        case VtlParser.DATE:
            return "DATE";
        default:
            throw new Error(`Unknow ${i} in VTL Parser`);
    }
};

export const buildVtlBindings = (b: Record<string, any>): Record<string, any> =>
    Object.entries(b).reduce((acc, [k, v]) => {
        if (typeof v === "object" && v !== null && "dataStructure" in v && "dataPoints" in v) {
            const { dataStructure } = v;
            const newDataStructure = dataStructure.map((c: any) => {
                const { role, type } = c;
                return { ...c, role: stringToInt(role), type: stringToInt(type) };
            });
            return { ...acc, [k]: { ...v, dataStructure: newDataStructure } };
        }
        return { ...acc, [k]: v };
    }, {});

export const buildJSONBindings = (b: Record<string, any>): Record<string, any> => {
    const { dataStructure, dataPoints } = b;
    const newDataStructure = dataStructure.map((c: any) => {
        const { role, type } = c;
        return { ...c, role: intToString(role), type: intToString(type) };
    });
    return { dataStructure: newDataStructure, dataPoints };
};
