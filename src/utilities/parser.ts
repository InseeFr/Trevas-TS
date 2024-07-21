import { Parser as VtlParser } from "@making-sense/vtl-2-0-antlr-tools-ts";

export const getTokenName = (type: number | undefined): string => {
    const name = Object.entries(VtlParser).find(t => t[1] === type);
    return name ? name[0] : "[unknown]";
};
