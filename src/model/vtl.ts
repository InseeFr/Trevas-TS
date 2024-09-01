export type BasicScalarTypes = string | number | boolean | null;

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
