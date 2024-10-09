import { ParserRuleContext } from "@making-sense/antlr4ng";
import { TypeMismatchError } from "../errors";

export const getTokenType = (ctx: ParserRuleContext): number => {
    if (!ctx.start) throw new TypeMismatchError(ctx, 0, 0);
    return ctx.start.type;
};
