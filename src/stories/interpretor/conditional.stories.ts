import UI from "../utils";

export default {
    title: "Interpretor/Conditional",
    component: UI
};

export const IfThenElse = {
    args: {
        inputScript: 'if 100 > 0 then "positive" else "negative"'
    }
};

export const Nvl = {
    args: {
        inputScript: "nvl(null, 5)"
    }
};
