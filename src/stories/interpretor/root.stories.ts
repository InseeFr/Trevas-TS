import UI from "../utils";

export default {
    title: "Interpretor",
    component: UI
};

export const Default = { args: { inputScript: '"default"' } };

export const Bindings = {
    args: {
        inputScript:
            '"Welcome " || NAME || ", you are " || (if cast(AGE, integer) >= 18 then "major" else "minor") || "."',
        inputBindings: { "NAME": "Mauro", "AGE": 26 }
    }
};

export const CurrentDate = { args: { inputScript: "current_date()" } };

export const Parenthesis = { args: { inputScript: "(10 + 2) * 123456" } };
