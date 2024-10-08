import {
    CastExprDatasetContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-1-antlr-tools-ts";
import ExpressionVisitor from "visitors/Expression";
import { CastTypeError, OperatorTypeError } from "../../errors";
import { Bindings, VisitorResult } from "../../model";
import { getDate, getStringFromDate, hasNullArgs } from "../../utilities";

class CastVisitor extends VtlVisitor<VisitorResult> {
    exprVisitor: ExpressionVisitor;
    constructor(exprVisitor: ExpressionVisitor) {
        super();
        this.exprVisitor = exprVisitor;
    }

    visitCastExprDataset = (ctx: CastExprDatasetContext) => {
        const expr = this.exprVisitor.visit(ctx.expr()) as VisitorResult;

        const scalarTypeCtx = ctx.basicScalarType() || ctx.valueDomainName();
        const maskCtx = ctx.STRING_CONSTANT();

        const mask = maskCtx ? maskCtx.getText().substring(1, maskCtx.getText().length - 1) : undefined;

        // @ts-ignore:next-line
        const castOutputType = scalarTypeCtx?.children[0]?.symbol.type;

        const combinations = [
            [VtlParser.INTEGER, VtlParser.INTEGER, (op: number) => op],
            [VtlParser.INTEGER, VtlParser.NUMBER, (op: number) => op],
            [VtlParser.INTEGER, VtlParser.BOOLEAN, (op: number) => op !== 0],
            [
                VtlParser.INTEGER,
                VtlParser.TIME,
                () => {
                    throw new CastTypeError(ctx, VtlParser.INTEGER, VtlParser.TIME);
                }
            ],
            [
                VtlParser.INTEGER,
                VtlParser.DATE,
                () => {
                    throw new CastTypeError(ctx, VtlParser.INTEGER, VtlParser.DATE);
                }
            ],
            [
                VtlParser.INTEGER,
                VtlParser.TIME_PERIOD,
                () => {
                    throw new CastTypeError(ctx, VtlParser.INTEGER, VtlParser.TIME_PERIOD);
                }
            ],
            [VtlParser.INTEGER, VtlParser.STRING, (op: number) => `${op}`],
            [
                VtlParser.INTEGER,
                VtlParser.DURATION,
                () => {
                    throw new CastTypeError(ctx, VtlParser.INTEGER, VtlParser.DURATION);
                }
            ],
            [
                VtlParser.NUMBER,
                VtlParser.INTEGER,
                (op: number) => {
                    if (!Number.isInteger(op)) throw new CastTypeError(ctx, op, VtlParser.NUMBER);
                    return parseInt(op.toString(), 10);
                }
            ],
            [VtlParser.NUMBER, VtlParser.NUMBER, (op: number) => op],
            [VtlParser.NUMBER, VtlParser.BOOLEAN, (op: number) => op !== 0],
            [
                VtlParser.NUMBER,
                VtlParser.TIME,
                () => {
                    throw new CastTypeError(ctx, VtlParser.NUMBER, VtlParser.TIME);
                }
            ],
            [
                VtlParser.NUMBER,
                VtlParser.DATE,
                () => {
                    throw new CastTypeError(ctx, VtlParser.NUMBER, VtlParser.DATE);
                }
            ],
            [
                VtlParser.NUMBER,
                VtlParser.TIME_PERIOD,
                () => {
                    throw new CastTypeError(ctx, VtlParser.NUMBER, VtlParser.TIME_PERIOD);
                }
            ],
            [VtlParser.NUMBER, VtlParser.STRING, (op: number) => `${op}`],
            [
                VtlParser.NUMBER,
                VtlParser.DURATION,
                () => {
                    throw new CastTypeError(ctx, VtlParser.NUMBER, VtlParser.DURATION);
                }
            ],
            [VtlParser.BOOLEAN, VtlParser.INTEGER, (op: boolean) => (op ? 1 : 0)],
            [VtlParser.BOOLEAN, VtlParser.NUMBER, (op: boolean) => (op ? 1 : 0)],
            [VtlParser.BOOLEAN, VtlParser.BOOLEAN, (op: boolean) => op],
            [
                VtlParser.BOOLEAN,
                VtlParser.TIME,
                () => {
                    throw new CastTypeError(ctx, VtlParser.BOOLEAN, VtlParser.TIME);
                }
            ],
            [
                VtlParser.BOOLEAN,
                VtlParser.DATE,
                () => {
                    throw new CastTypeError(ctx, VtlParser.BOOLEAN, VtlParser.DATE);
                }
            ],
            [
                VtlParser.BOOLEAN,
                VtlParser.TIME_PERIOD,
                () => {
                    throw new CastTypeError(ctx, VtlParser.BOOLEAN, VtlParser.TIME_PERIOD);
                }
            ],
            [VtlParser.BOOLEAN, VtlParser.STRING, (op: boolean) => `${op}`],
            [
                VtlParser.BOOLEAN,
                VtlParser.DURATION,
                () => {
                    throw new CastTypeError(ctx, VtlParser.BOOLEAN, VtlParser.DURATION);
                }
            ],
            [VtlParser.TIME, VtlParser.INTEGER, () => "TODO"],
            [VtlParser.TIME, VtlParser.NUMBER, () => "TODO"],
            [VtlParser.TIME, VtlParser.BOOLEAN, () => "TODO"],
            [VtlParser.TIME, VtlParser.TIME, () => "TODO"],
            [VtlParser.TIME, VtlParser.DATE, () => "TODO"],
            [VtlParser.TIME, VtlParser.TIME_PERIOD, () => "TODO"],
            [VtlParser.TIME, VtlParser.STRING, () => "TODO"],
            [VtlParser.TIME, VtlParser.DURATION, () => "TODO"],
            [VtlParser.DATE, VtlParser.INTEGER, () => "TODO"],
            [VtlParser.DATE, VtlParser.NUMBER, () => "TODO"],
            [VtlParser.DATE, VtlParser.BOOLEAN, () => "TODO"],
            [VtlParser.DATE, VtlParser.TIME, () => "TODO"],
            [VtlParser.DATE, VtlParser.DATE, (op: string, m: string) => getDate(`${op}`, m)],
            [VtlParser.DATE, VtlParser.TIME_PERIOD, () => "TODO"],
            [VtlParser.DATE, VtlParser.STRING, (op: string, m: string) => getStringFromDate(op, m)],
            [VtlParser.DATE, VtlParser.DURATION, () => "TODO"],
            [VtlParser.TIME_PERIOD, VtlParser.INTEGER, () => "TODO"],
            [VtlParser.TIME_PERIOD, VtlParser.NUMBER, () => "TODO"],
            [VtlParser.TIME_PERIOD, VtlParser.BOOLEAN, () => "TODO"],
            [VtlParser.TIME_PERIOD, VtlParser.TIME, () => "TODO"],
            [VtlParser.TIME_PERIOD, VtlParser.DATE, () => "TODO"],
            [VtlParser.TIME_PERIOD, VtlParser.TIME_PERIOD, () => "TODO"],
            [VtlParser.TIME_PERIOD, VtlParser.STRING, () => "TODO"],
            [VtlParser.TIME_PERIOD, VtlParser.DURATION, () => "TODO"],
            [
                VtlParser.STRING,
                VtlParser.INTEGER,
                (op: number) => {
                    if (!Number.isInteger(Number(op)))
                        throw new CastTypeError(ctx, op, VtlParser.INTEGER);
                    return parseInt(op.toString(), 10);
                }
            ],
            [
                VtlParser.STRING,
                VtlParser.NUMBER,
                (op: string) => {
                    if (!Number.isInteger(parseInt(op, 10)))
                        throw new CastTypeError(ctx, parseFloat(op), VtlParser.NUMBER);
                    return parseFloat(op);
                }
            ],
            [
                VtlParser.STRING,
                VtlParser.BOOLEAN,
                () => {
                    throw new CastTypeError(ctx, VtlParser.STRING, VtlParser.BOOLEAN);
                }
            ],
            [VtlParser.STRING, VtlParser.TIME, () => "TODO"],
            [VtlParser.STRING, VtlParser.DATE, (op: string, m: string) => getDate(op, m)],
            [VtlParser.STRING, VtlParser.TIME_PERIOD, () => "TODO"],
            [VtlParser.STRING, VtlParser.STRING, (op: string) => op],
            [VtlParser.STRING, VtlParser.DURATION, () => "TODO"],
            [
                VtlParser.DURATION,
                VtlParser.INTEGER,
                () => {
                    throw new CastTypeError(ctx, VtlParser.DURATION, VtlParser.INTEGER);
                }
            ],
            [
                VtlParser.DURATION,
                VtlParser.NUMBER,
                () => {
                    throw new CastTypeError(ctx, VtlParser.DURATION, VtlParser.NUMBER);
                }
            ],
            [
                VtlParser.DURATION,
                VtlParser.BOOLEAN,
                () => {
                    throw new CastTypeError(ctx, VtlParser.DURATION, VtlParser.BOOLEAN);
                }
            ],
            [
                VtlParser.DURATION,
                VtlParser.TIME,
                () => {
                    throw new CastTypeError(ctx, VtlParser.DURATION, VtlParser.TIME);
                }
            ],
            [
                VtlParser.DURATION,
                VtlParser.DATE,
                () => {
                    throw new CastTypeError(ctx, VtlParser.DURATION, VtlParser.DATE);
                }
            ],
            [
                VtlParser.DURATION,
                VtlParser.TIME_PERIOD,
                () => {
                    throw new CastTypeError(ctx, VtlParser.DURATION, VtlParser.TIME_PERIOD);
                }
            ],
            [VtlParser.DURATION, VtlParser.STRING, (op: string) => `${op}`],
            [VtlParser.DURATION, VtlParser.DURATION, (op: string) => op]
        ];

        const combination = combinations.filter(([opType, scalarTypes]) => {
            if (Array.isArray(scalarTypes))
                return opType === expr?.type && scalarTypes.includes(castOutputType);
            return opType === expr?.type && scalarTypes === castOutputType;
        });

        let operatorFunction: any;

        if (expr.type !== VtlParser.NULL_CONSTANT) {
            if (combination.length !== 1)
                throw new OperatorTypeError(ctx, VtlParser.CAST, expr?.type, castOutputType);

            operatorFunction = combination[0][2];
        }

        return {
            resolve: (bindings: Bindings) => {
                const opValue = expr.resolve(bindings);

                if (hasNullArgs(opValue)) return null;

                return operatorFunction(opValue, mask);
            },
            type:
                combination[0] && combination[0][0] === VtlParser.DATASET
                    ? VtlParser.DATASET
                    : castOutputType
        };
    };
}

export default CastVisitor;
