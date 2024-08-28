import UI from "../utils";

export default {
    title: "Interpretor/Dataset",
    component: UI
};

export const Add = {
    args: {
        inputScript: "ds1 + ds2",
        inputBindings: {
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
        }
    }
};
