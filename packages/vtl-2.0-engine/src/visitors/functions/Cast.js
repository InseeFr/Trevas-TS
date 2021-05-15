import { VtlParser } from '@inseefr/vtl-2.0-antlr-tools';
import { CastTypeError, OperatorTypeError } from '../../errors';
import { getDate, getStringFromDate } from '../../utils';

class CastVisitor {
	constructor(exprVisitor) {
		this.exprVisitor = exprVisitor;
	}

	visitCastExprDataset(ctx) {
		const opCtx = ctx.expr();
		const scalarTypeCtx = ctx.basicScalarType() || ctx.valueDomainName();
		const maskCtx = ctx.STRING_CONSTANT();

		const op = this.exprVisitor.visit(opCtx);
		const mask = maskCtx
			? maskCtx.getText().substring(1, maskCtx.getText().length - 1)
			: undefined;

		if (op.type === VtlParser.NULL_CONSTANT)
			return { resolve: () => null, type: VtlParser.NULL_CONSTANT };

		const combinations = [
			[VtlParser.INTEGER, VtlParser.INTEGER, (o) => o],
			[VtlParser.INTEGER, VtlParser.NUMBER, (o) => o],
			[VtlParser.INTEGER, VtlParser.BOOLEAN, (o) => o !== 0],
			[VtlParser.INTEGER, VtlParser.TIME, 'ERROR'],
			[VtlParser.INTEGER, VtlParser.DATE, 'ERROR'],
			[VtlParser.INTEGER, VtlParser.TIME_PERIOD, 'ERROR'],
			[VtlParser.INTEGER, VtlParser.STRING, (o) => `${o}`],
			[VtlParser.INTEGER, VtlParser.DURATION, 'ERROR'],
			[
				VtlParser.NUMBER,
				VtlParser.INTEGER,
				(o) => {
					if (!Number.isInteger(o))
						throw new CastTypeError(ctx, o, VtlParser.NUMBER);
					return parseInt(o, 10);
				},
			],
			[VtlParser.NUMBER, VtlParser.NUMBER, (o) => o],
			[VtlParser.NUMBER, VtlParser.BOOLEAN, (o) => o !== 0],
			[VtlParser.NUMBER, VtlParser.TIME, 'ERROR'],
			[VtlParser.NUMBER, VtlParser.DATE, 'ERROR'],
			[VtlParser.NUMBER, VtlParser.TIME_PERIOD, 'ERROR'],
			[VtlParser.NUMBER, VtlParser.STRING, (o) => `${o}`],
			[VtlParser.NUMBER, VtlParser.DURATION, 'ERROR'],
			[VtlParser.BOOLEAN, VtlParser.INTEGER, (o) => (o ? 1 : 0)],
			[VtlParser.BOOLEAN, VtlParser.NUMBER, (o) => (o ? 1 : 0)],
			[VtlParser.BOOLEAN, VtlParser.BOOLEAN, (o) => o],
			[VtlParser.BOOLEAN, VtlParser.TIME, 'ERROR'],
			[VtlParser.BOOLEAN, VtlParser.DATE, 'ERROR'],
			[VtlParser.BOOLEAN, VtlParser.TIME_PERIOD, 'ERROR'],
			[VtlParser.BOOLEAN, VtlParser.STRING, (o) => `${o}`],
			[VtlParser.BOOLEAN, VtlParser.DURATION, 'ERROR'],
			[VtlParser.TIME, VtlParser.INTEGER, () => 'TODO'],
			[VtlParser.TIME, VtlParser.NUMBER, () => 'TODO'],
			[VtlParser.TIME, VtlParser.BOOLEAN, () => 'TODO'],
			[VtlParser.TIME, VtlParser.TIME, () => 'TODO'],
			[VtlParser.TIME, VtlParser.DATE, () => 'TODO'],
			[VtlParser.TIME, VtlParser.TIME_PERIOD, () => 'TODO'],
			[VtlParser.TIME, VtlParser.STRING, () => 'TODO'],
			[VtlParser.TIME, VtlParser.DURATION, () => 'TODO'],
			[VtlParser.DATE, VtlParser.INTEGER, () => 'TODO'],
			[VtlParser.DATE, VtlParser.NUMBER, () => 'TODO'],
			[VtlParser.DATE, VtlParser.BOOLEAN, () => 'TODO'],
			[VtlParser.DATE, VtlParser.TIME, () => 'TODO'],
			[VtlParser.DATE, VtlParser.DATE, () => 'TODO'],
			[VtlParser.DATE, VtlParser.TIME_PERIOD, () => 'TODO'],
			[VtlParser.DATE, VtlParser.STRING, (o, m) => getStringFromDate(o, m)],
			[VtlParser.DATE, VtlParser.DURATION, () => 'TODO'],
			[VtlParser.TIME_PERIOD, VtlParser.INTEGER, () => 'TODO'],
			[VtlParser.TIME_PERIOD, VtlParser.NUMBER, () => 'TODO'],
			[VtlParser.TIME_PERIOD, VtlParser.BOOLEAN, () => 'TODO'],
			[VtlParser.TIME_PERIOD, VtlParser.TIME, () => 'TODO'],
			[VtlParser.TIME_PERIOD, VtlParser.DATE, () => 'TODO'],
			[VtlParser.TIME_PERIOD, VtlParser.TIME_PERIOD, () => 'TODO'],
			[VtlParser.TIME_PERIOD, VtlParser.STRING, () => 'TODO'],
			[VtlParser.TIME_PERIOD, VtlParser.DURATION, () => 'TODO'],
			[
				VtlParser.STRING,
				VtlParser.INTEGER,
				(o) => {
					if (!Number.isInteger(Number(o)))
						throw new CastTypeError(ctx, o, VtlParser.INTEGER);
					return parseInt(o, 10);
				},
			],
			[
				VtlParser.STRING,
				VtlParser.NUMBER,
				(o) => {
					if (!Number.isInteger(parseInt(o, 10)))
						throw new CastTypeError(ctx, o, VtlParser.NUMBER);
					return parseFloat(o);
				},
			],
			[VtlParser.STRING, VtlParser.BOOLEAN, 'ERROR'],
			[VtlParser.STRING, VtlParser.TIME, () => 'TODO'],
			[VtlParser.STRING, VtlParser.DATE, (o, m) => getDate(o, m)],
			[VtlParser.STRING, VtlParser.TIME_PERIOD, () => 'TODO'],
			[VtlParser.STRING, VtlParser.STRING, (o) => o],
			[VtlParser.STRING, VtlParser.DURATION, () => 'TODO'],
			[VtlParser.DURATION, VtlParser.INTEGER, 'ERROR'],
			[VtlParser.DURATION, VtlParser.NUMBER, 'ERROR'],
			[VtlParser.DURATION, VtlParser.BOOLEAN, 'ERROR'],
			[VtlParser.DURATION, VtlParser.TIME, 'ERROR'],
			[VtlParser.DURATION, VtlParser.DATE, 'ERROR'],
			[VtlParser.DURATION, VtlParser.TIME_PERIOD, 'ERROR'],
			[VtlParser.DURATION, VtlParser.STRING, (o) => `${o}`],
			[VtlParser.DURATION, VtlParser.DURATION, (o) => o],
		];

		const castOutputType = scalarTypeCtx.children[0].symbol.type;
		const combination = combinations.filter(
			([opType, scalarType]) =>
				opType === op.type && scalarType === castOutputType
		);

		if (combination.length !== 1)
			throw new OperatorTypeError(ctx, 'Cast', op.type, castOutputType);

		const operatorFunction = combination[0][2];

		if (typeof operatorFunction !== 'function')
			throw new CastTypeError(ctx, op.type, castOutputType);

		return {
			resolve: (bindings) => operatorFunction(op.resolve(bindings), mask),
			type: castOutputType,
		};
	}
}

export default CastVisitor;
