import UI from "../utils";

export default {
    title: "Interpretor/Numeric",
    component: UI
};

export const Abs = {
    args: {
        inputScript: "abs(-10.5)"
    }
};

export const Ceil = {
    args: {
        inputScript: "ceil(3.75)"
    }
};

export const Exp = {
    args: {
        inputScript: "exp(-1.5)"
    }
};

export const Floor = {
    args: {
        inputScript: "floor(-1.5)"
    }
};

export const Ln = {
    args: {
        inputScript: "ln(5)"
    }
};

export const Log = {
    args: {
        inputScript: "log(2048, 2)"
    }
};

export const Mod = {
    args: {
        inputScript: "mod(7, 3)"
    }
};

export const Power = {
    args: {
        inputScript: "power(3, 2)"
    }
};

export const Random = {
    args: {
        inputScript: "random()"
    }
};

export const Round = {
    args: {
        inputScript: "round(2.618, 2)"
    }
};

export const Sqrt = {
    args: {
        inputScript: "sqrt(5)"
    }
};

export const Trunc = {
    args: {
        inputScript: "trunc(2.618, 2)"
    }
};
