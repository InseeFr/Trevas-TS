import UI from "../../utils";

export default {
    title: "Interpretor/Dataset/Aggregate",
    component: UI
};

const inputBindings = {
    ds1: {
        dataStructure: [
            { name: "Id_1", type: "INTEGER", role: "IDENTIFIER" },
            { name: "Id_2", type: "STRING", role: "IDENTIFIER" },
            { name: "Me_1", type: "INTEGER", role: "MEASURE" },
            { name: "Me_2", type: "NUMBER", role: "MEASURE" }
        ],
        dataPoints: [
            [10, "A", 5, 5.0],
            [10, "B", 2, 10.5],
            [11, "A", 3, 12.2],
            [11, "B", 4, 20.3]
        ]
    },
    ds2: {
        dataStructure: [
            { name: "Id_1", type: "INTEGER", role: "IDENTIFIER" },
            { name: "Id_2", type: "STRING", role: "IDENTIFIER" },
            { name: "Me_1", type: "INTEGER", role: "MEASURE" },
            { name: "Me_2", type: "NUMBER", role: "MEASURE" }
        ],
        dataPoints: [
            [10, "A", 10, 3.0],
            [10, "C", 11, 6.2],
            [11, "B", 6, 7.0]
        ]
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
