export type BasicScalarTypes = string | number | boolean | null;

// TODO: be more script deleting "?"
export type Component = {
    name: string;
    role: number;
    type: number;
    nullable?: boolean;
    valuedomain?: string;
};

export type Dataset = {
    dataStructure: Component[];
    dataPoints: BasicScalarTypes[][];
};
