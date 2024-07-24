export type BasicScalarTypes = string | number | boolean | null;

// TODO: be more script deleting "?"
export type Component = {
    name?: string;
    role?: "IDENTIFIER" | "MEASURE" | "ATTRIBUTE";
    type?: BasicScalarTypes;
};

export type Dataset = {
    dataStructure: Record<string, Component>;
    dataPoints: Record<string, BasicScalarTypes[]>;
};
