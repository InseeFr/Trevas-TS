import {
    GroupByOrExceptContext,
    VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-1-antlr-tools-ts";
import { Component } from "model";

class GroupVisitor extends VtlVisitor<string[]> {
    dataStructure;
    groupBy: Array<string>;
    constructor(dataStructure: Component[]) {
        super();
        this.dataStructure = dataStructure;
        this.groupBy = [];
    }

    defaultResult = (): string[] => {
        return this.groupBy;
    };

    visitGroupByOrExcept = (ctx: GroupByOrExceptContext): string[] => {
        const groupIds = ctx.componentID().map(c => c.getText());
        const allIds = this.dataStructure
            .filter(({ role }) => role === VtlParser.IDENTIFIER)
            .map(({ name }) => name);
        if (ctx.BY()) {
            this.groupBy = groupIds;
            return groupIds;
        }
        if (ctx.EXCEPT()) {
            const exceptGroupBy = groupIds.filter(s => allIds.includes(s));
            this.groupBy = exceptGroupBy;
            return exceptGroupBy;
        }
        throw new Error("Unknown operation for grouping");
    };
}

export default GroupVisitor;
