export type BasicScalarTypes = string | number | boolean | null;

export type Component = {
    name: string;
    role: "IDENTIFIER" | "MEASURE" | "ATTRIBUTE";
    type: BasicScalarTypes;
};

export type Dataset = {
    dataStructure: Record<string, Component>;
    dataPoints: Record<string, BasicScalarTypes[]>;
};
