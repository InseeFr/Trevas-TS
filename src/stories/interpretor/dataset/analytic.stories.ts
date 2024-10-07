import UI from "../../utils";

export default {
    title: "Interpretor/Dataset/Analytic",
    component: UI
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
