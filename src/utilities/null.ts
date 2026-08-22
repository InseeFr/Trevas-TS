import { ExprContext } from "@making-sense/vtl-2-1-antlr-tools-ts";
import { VisitorResult } from "model";
import { BasicScalarTypes } from "model/vtl";

export const hasNullArgs = (...args: BasicScalarTypes[]): boolean => args.includes(null);

export const ensureHadTypes = (...args: VisitorResult[]): void => {
    if (args.filter(({ type }) => type === undefined).length !== 0) throw new Error("Type undefined");
};

export const ensureContextAreDefined = (...args: (ExprContext | null | undefined)[]): void => {
    if (args.some(a => a == null)) throw new Error("Context undefined");
};
