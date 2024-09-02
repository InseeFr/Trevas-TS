import UI from "../utils";

export default {
    title: "Interpretor/Comparison",
    component: UI
};

const ELEMENTS = {
    dataStructure: [
        { name: "col_1", type: "STRING", role: "MEASURE" },
        { name: "col_2", type: "STRING", role: "MEASURE" }
    ],
    dataPoints: [
        ["B", "BB"],
        ["C", "CC"],
        ["D", "DD"]
    ]
};

export const Between = { args: { inputScript: "between(10, 1, 100)" } };

export const EqualTo = { args: { inputScript: "100 = 1" } };

export const InNotIn = { args: { inputScript: '"1" not_in {"2", "3"}' } };

export const InNotInDataset = {
    args: { inputScript: '"A" not_in ELEMENTS', inputBindings: { ELEMENTS } }
};

export const IsNull = { args: { inputScript: "isnull(test)", inputBindings: { "test": null } } };

export const LessThan = { args: { inputScript: "100 < 1" } };

export const LessThanOrEqualTo = { args: { inputScript: "100 <= 100" } };

export const NotEqualTo = { args: { inputScript: "100 <> 1" } };

export const MatchCharacters = { args: { inputScript: 'match_characters("test", "(.*)(es)(.*)?")' } };

export const MoreThan = { args: { inputScript: "100 > 1" } };

export const MoreThanOrEqualTo = { args: { inputScript: "100 >= 100" } };
