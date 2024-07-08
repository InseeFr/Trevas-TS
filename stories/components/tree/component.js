import React, { useState, useEffect } from "react";
import antlr4 from "antlr4";
import Tree from "./tree";
import { VtlLexer, VtlParser } from "@inseefr/vtl-2.0-antlr-tools";
import TreeVtlVisitor from "./TreeVtlVisitor";

const getTree = text => getContext => {
    const chars = new antlr4.InputStream(text);
    const lexer = new VtlLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new VtlParser(tokens);
    parser.buildParseTrees = true;
    const ctx = parser.expr();
    const visitor = new TreeVtlVisitor(getContext);
    return visitor.visitExpr(ctx);
};

const TreeView = ({ value }) => {
    const [ctx, getCtx] = useState(null);

    useEffect(() => {
        getTree(value)(getCtx);
    }, [value]);

    return ctx ? <Tree ctx={ctx} /> : null;
};

export default TreeView;
