import { ParserRuleContext } from "@making-sense/antlr4ng";

export const getTokenType = (ctx: ParserRuleContext): number | undefined => ctx?.start?.type;
