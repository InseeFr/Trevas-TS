import { BasicScalarTypes } from "./vtl";

export type CalcConfig = {
    name: string;
    params: Param[];
    operatorFunction: (args: number[]) => number;
    type: number;
};

export type Param = { type: "COLUMN" | "VALUE"; value: BasicScalarTypes };
