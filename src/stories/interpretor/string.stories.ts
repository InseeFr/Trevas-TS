import UI from "../utils";

export default {
    title: "Interpretor/String",
    component: UI
};

export const Instr = {
    args: {
        inputScript: 'instr("Hello world", "world")'
    }
};

export const Length = {
    args: {
        inputScript: 'length("Hello")'
    }
};

export const Lower = {
    args: {
        inputScript: 'lower("Hello")'
    }
};

export const Ltrim = {
    args: {
        inputScript: 'ltrim("              before")'
    }
};

export const Replace = {
    args: {
        inputScript: 'replace("Hello Edi", "Edi", "Mauro")'
    }
};

export const Rtrim = {
    args: {
        inputScript: 'rtrim("              before")'
    }
};

export const Substring = {
    args: {
        inputScript: 'substr("Hello", 1, 2)'
    }
};

export const Trim = {
    args: {
        inputScript: 'trim("              before")'
    }
};

export const Upper = {
    args: {
        inputScript: 'upper("Hello")'
    }
};
