import UI from "../utils";

export default {
    title: "Interpretor/Boolean",
    component: UI
};

export const And = {
    args: {
        inputScript: "false and true"
    }
};

export const Not = {
    args: {
        inputScript: "not true"
    }
};

export const Or = {
    args: {
        inputScript: "false or true"
    }
};
