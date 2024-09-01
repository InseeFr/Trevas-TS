import UI from "../../utils";

export default {
    title: "Interpretor/Dataset/Aggregate",
    component: UI
};

const DS_1 = {
    dataStructure: [
        { name: "Id_1", type: "STRING", role: "IDENTIFIER" },
        { name: "Id_2", type: "STRING", role: "IDENTIFIER" },
        { name: "Me_1", type: "INTEGER", role: "MEASURE" },
        { name: "Id_3", type: "STRING", role: "IDENTIFIER" }
    ],
    dataPoints: [
        ["2011", "A", 3, "XX"],
        ["2011", "A", 5, "YY"],
        ["2011", "B", 7, "YY"],
        ["2012", "A", 2, "XX"],
        ["2012", "B", 4, "YY"]
    ]
};

export const Average = {
    args: {
        inputScript: "avg(DS_1 group by Id_1)",
        inputBindings: {
            DS_1
        }
    }
};

export const Count = {
    args: {
        inputScript: "count(DS_1 group by Id_1)",
        inputBindings: {
            DS_1: {
                dataStructure: [
                    { name: "Id_1", type: "STRING", role: "IDENTIFIER" },
                    { name: "Id_2", type: "STRING", role: "IDENTIFIER" },
                    { name: "Id_3", type: "STRING", role: "IDENTIFIER" },
                    { name: "Me_2", type: "STRING", role: "MEASURE" }
                ],
                dataPoints: [
                    ["2011", "A", "XX", "iii"],
                    ["2011", "A", "YY", "jjj"],
                    ["2011", "B", "YY", "iii"],
                    ["2012", "A", "XX", "kkk"],
                    ["2012", "B", "YY", "iii"]
                ]
            }
        }
    }
};

export const FirstValue = {
    args: {
        inputScript: "first_value(DS_1 over())",
        inputBindings: {
            DS_1: {
                dataStructure: [{ name: "col1", type: "INTEGER", role: "MEASURE" }],
                dataPoints: [[1], [2], [3]]
            }
        }
    }
};

export const Max = {
    args: {
        inputScript: "max(DS_1 group by Id_1)",
        inputBindings: {
            DS_1
        }
    }
};

export const Median = {
    args: {
        inputScript: "median(DS_1 group by Id_1)",
        inputBindings: {
            DS_1
        }
    }
};

export const Min = {
    args: {
        inputScript: "min(DS_1 group by Id_1)",
        inputBindings: {
            DS_1
        }
    }
};

export const LastValue = {
    args: {
        inputScript: "last_value(DS_1 over())",
        inputBindings: {
            DS_1: {
                dataStructure: [{ name: "col1", type: "INTEGER", role: "MEASURE" }],
                dataPoints: [[1], [2], [3]]
            }
        }
    }
};

export const PopulationStandardDeviation = {
    args: {
        inputScript: "stddev_pop(DS_1 group by Id_1)",
        inputBindings: {
            DS_1
        }
    }
};

export const PopulationVariance = {
    args: {
        inputScript: "var_pop(DS_1 group by Id_1)",
        inputBindings: {
            DS_1
        }
    }
};

export const SampleStandardDeviation = {
    args: {
        inputScript: "stddev_samp(DS_1 group by Id_1)",
        inputBindings: {
            DS_1
        }
    }
};

export const SampleVariance = {
    args: {
        inputScript: "var_samp(DS_1 group by Id_1)",
        inputBindings: {
            DS_1
        }
    }
};

export const Sum = {
    args: {
        inputScript: "sum(DS_1 group by Id_1)",
        inputBindings: {
            DS_1
        }
    }
};
