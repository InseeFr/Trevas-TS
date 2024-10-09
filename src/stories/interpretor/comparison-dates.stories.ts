import UI from "../utils";

export default {
    title: "Interpretor/Comparison/Dates",
    component: UI
};

export const EqualTo = {
    args: {
        inputScript: 'cast("2020-01-01", date, "YYYY-MM-DD") = cast(current_date(), date, "YYYY-MM-DD")'
    }
};

export const LessThan = {
    args: {
        inputScript: 'cast("2020-01-01", date, "YYYY-MM-DD") < cast("2020-01-02", date, "YYYY-MM-DD")'
    }
};

export const LessThanOrEqualTo = {
    args: {
        inputScript: 'cast("2020-01-01", date, "YYYY-MM-DD") <= cast("2020-01-02", date, "YYYY-MM-DD")'
    }
};

export const MoreThan = {
    args: {
        inputScript: 'cast("2020-01-01", date, "YYYY-MM-DD") > cast("2020-01-02", date, "YYYY-MM-DD")'
    }
};

export const MoreThanOrEqualTo = {
    args: {
        inputScript: 'cast("2020-01-01", date, "YYYY-MM-DD") >= cast("2020-01-02", date, "YYYY-MM-DD")'
    }
};

export const NotEqualTo = {
    args: {
        inputScript: 'cast("2020-01-01", date, "YYYY-MM-DD") <> cast("2020-01-01", date, "YYYY-MM-DD")'
    }
};
