import UI from "../utils";

export default {
    title: "Interpretor",
    component: UI
};

export const Default = { args: { inputScript: '"default"', inputBindings: {} } };

export const Bindings = {
    args: {
        inputScript:
            '"Welcome " || NAME || ", you are " || (if cast(AGE, integer) >= 18 then "major" else "minor") || "."',
        inputBindings: { "NAME": "Mauro", "AGE": 26 }
    }
};
