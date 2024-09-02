import UI from "../utils";

export default {
    title: "Interpretor/Cast",
    component: UI
};

export const IntoBoolean = {
    args: {
        inputScript: "cast(1, boolean)"
    }
};

export const IntoDate = {
    args: {
        inputScript: 'cast("1998-07-12", date, "YYYY-MM-DD")'
    }
};

export const IntoInteger = {
    args: {
        inputScript: 'cast("10", integer)'
    }
};

export const IntoNumber = {
    args: {
        inputScript: 'cast("10.99", number)'
    }
};

export const IntoString = {
    args: {
        inputScript: 'cast("1998-07-12", string, "YYYY-MM-DD")'
    }
};
