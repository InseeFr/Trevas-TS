import {
    ConstantContext,
    ConstantExprContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-0-antlr-tools-ts";
import { getTokenType, replaceConstantType } from "../utils";
import { VisitorResult } from "model";

class LiteralVisitor extends VtlVisitor<VisitorResult> {
    visitConstant = (ctx: ConstantContext) => {
        let value;
        switch (getTokenType(ctx)) {
            case VtlParser.STRING_CONSTANT: {
                const text = ctx.getText();
                value = text.substring(1, text.length - 1);
                break;
            }
            case VtlParser.INTEGER_CONSTANT:
                value = parseInt(ctx.getText(), 10);
                break;
            case VtlParser.NUMBER_CONSTANT:
                value = parseFloat(ctx.getText());
                break;
            case VtlParser.BOOLEAN_CONSTANT:
                value = JSON.parse(ctx.getText());
                break;
            case VtlParser.DATE:
                value = ctx.getText();
                break;
            case VtlParser.NULL_CONSTANT:
                value = null;
                break;
            default:
                throw new Error("Bad type");
        }

        // Unused bindings param
        return {
            resolve: () => value,
            type: replaceConstantType(getTokenType(ctx))
        };
    };

    visitConstantExpr = (ctx: ConstantExprContext) => {
        let value;
        switch (getTokenType(ctx)) {
            case VtlParser.STRING_CONSTANT: {
                const text = ctx.getText();
                value = text.substring(1, text.length - 1);
                break;
            }
            case VtlParser.INTEGER_CONSTANT:
                value = parseInt(ctx.getText(), 10);
                break;
            case VtlParser.NUMBER_CONSTANT:
                value = parseFloat(ctx.getText());
                break;
            case VtlParser.BOOLEAN_CONSTANT:
                value = JSON.parse(ctx.getText());
                break;
            case VtlParser.DATE:
                value = ctx.getText();
                break;
            case VtlParser.NULL_CONSTANT:
                value = null;
                break;
            default:
                throw new Error("Bad type");
        }

        // Unused bindings param
        return {
            resolve: () => value,
            type: replaceConstantType(getTokenType(ctx))
        };
    };
}

export default LiteralVisitor;
