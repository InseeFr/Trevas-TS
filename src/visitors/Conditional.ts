import {
    ExprContext,
    IfExprContext,
    NvlAtomContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-0-antlr-tools-ts";
import { IncompatibleTypeError, TypeMismatchError } from "errors";
import { ensureContextAreDefined, hasNullArgs } from "utilities";
import { Bindings, VisitorResult } from "model";
import ExpressionVisitor from "./Expression";

const handleIntegerAndNumber = (aType: any | undefined, bType: any | undefined) => {
    if (!aType || !bType) return false;
    if (
        [VtlParser.INTEGER, VtlParser.NUMBER].includes(aType) &&
        [VtlParser.INTEGER, VtlParser.NUMBER].includes(bType)
    )
        return false;
    return aType !== bType;
};

class ConditionalVisitor extends VtlVisitor<VisitorResult> {
    exprVisitor: ExpressionVisitor;
    constructor(exprVisitor: ExpressionVisitor) {
        super();
        this.exprVisitor = exprVisitor;
    }

    visitIfExpr = (ctx: IfExprContext) => {
        const { _conditionalExpr: conditionalExpr, _thenExpr: thenExpr, _elseExpr: elseExpr } = ctx;

        ensureContextAreDefined(conditionalExpr, thenExpr, elseExpr);

        const conditionalOperand = this.exprVisitor.visit(
            conditionalExpr as ExprContext
        ) as VisitorResult;
        const thenOperand = this.exprVisitor.visit(thenExpr as ExprContext) as VisitorResult;
        const elseOperand = this.exprVisitor.visit(elseExpr as ExprContext) as VisitorResult;

        if (![VtlParser.BOOLEAN, VtlParser.NULL_CONSTANT].includes(conditionalOperand.type)) {
            throw new TypeMismatchError(conditionalExpr, VtlParser.BOOLEAN, conditionalOperand?.type);
        }

        if (
            ![thenOperand?.type, elseOperand?.type].includes(VtlParser.NULL_CONSTANT) &&
            handleIntegerAndNumber(thenOperand?.type, elseOperand?.type)
        )
            throw new IncompatibleTypeError(ctx, thenOperand?.type, elseOperand?.type);

        const getType = (thenType: number | undefined, elseType: number | undefined): number => {
            if (thenType === elseType && thenType !== undefined) return thenType;
            if ([thenType, elseType].includes(VtlParser.NULL_CONSTANT))
                return thenOperand?.type === VtlParser.NULL_CONSTANT
                    ? elseOperand?.type
                    : thenOperand?.type;
            if (
                [thenType, elseType].includes(VtlParser.INTEGER) &&
                [thenType, elseType].includes(VtlParser.NUMBER)
            )
                return VtlParser.NUMBER;
            throw new TypeMismatchError(null, thenType || 0, elseType);
        };

        return {
            resolve: (bindings: Bindings) => {
                const conditionValue = conditionalOperand.resolve(bindings);
                if (hasNullArgs(conditionValue) || !conditionValue) return elseOperand.resolve(bindings);
                return thenOperand.resolve(bindings);
            },
            type: getType(thenOperand.type, elseOperand.type)
        };
    };

    visitNvlAtom = (ctx: NvlAtomContext) => {
        const { _left: left, _right: right } = ctx;

        ensureContextAreDefined(left, right);

        const leftOperand = this.exprVisitor.visit(left as ExprContext);
        const rightOperand = this.exprVisitor.visit(right as ExprContext);

        if (
            !rightOperand?.type ||
            (![leftOperand?.type, rightOperand?.type].includes(VtlParser.NULL_CONSTANT) &&
                handleIntegerAndNumber(leftOperand?.type, rightOperand?.type))
        )
            throw new IncompatibleTypeError(ctx, leftOperand?.type, rightOperand?.type);

        return {
            resolve: (bindings: Bindings) =>
                leftOperand?.resolve(bindings) !== null
                    ? leftOperand?.resolve(bindings)
                    : rightOperand?.resolve(bindings),
            type: rightOperand?.type
        };
    };
}

export default ConditionalVisitor;
