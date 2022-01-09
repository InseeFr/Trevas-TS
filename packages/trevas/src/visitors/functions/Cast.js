import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.0-antlr-tools';
import { CastTypeError, OperatorTypeError } from '../../errors';
import {
	getDate,
	getStringFromDate,
	hasNullArgs,
	getDatasetCast,
} from '../../utils';

class CastVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitCastExprDataset = (ctx) => {
		const expr = this.exprVisitor.visit(ctx.expr());

		const scalarTypeCtx = ctx.basicScalarType() || ctx.valueDomainName();
		const maskCtx = ctx.STRING_CONSTANT();

		const mask = maskCtx
			? maskCtx.getText().substring(1, maskCtx.getText().length - 1)
			: undefined;

		const castOutputType = scalarTypeCtx.children[0].symbol.type;

		const combinations = [
			// Dataset: temp hack to return casted array
			[
				VtlParser.DATASET,
				[VtlParser.INTEGER, VtlParser.NUMBER, VtlParser.STRING],
				(op) => getDatasetCast(castOutputType)(op),
			],
			[VtlParser.INTEGER, VtlParser.INTEGER, (op) => op],
			[VtlParser.INTEGER, VtlParser.NUMBER, (op) => op],
			[VtlParser.INTEGER, VtlParser.BOOLEAN, (op) => op !== 0],
			[VtlParser.INTEGER, VtlParser.TIME, 'ERROR'],
			[VtlParser.INTEGER, VtlParser.DATE, 'ERROR'],
			[VtlParser.INTEGER, VtlParser.TIME_PERIOD, 'ERROR'],
			[VtlParser.INTEGER, VtlParser.STRING, (op) => `${op}`],
			[VtlParser.INTEGER, VtlParser.DURATION, 'ERROR'],
			[
				VtlParser.NUMBER,
				VtlParser.INTEGER,
				(op) => {
					if (!Number.isInteger(op))
						throw new CastTypeError(ctx, op, VtlParser.NUMBER);
					return parseInt(op, 10);
				},
			],
			[VtlParser.NUMBER, VtlParser.NUMBER, (op) => op],
			[VtlParser.NUMBER, VtlParser.BOOLEAN, (op) => op !== 0],
			[VtlParser.NUMBER, VtlParser.TIME, 'ERROR'],
			[VtlParser.NUMBER, VtlParser.DATE, 'ERROR'],
			[VtlParser.NUMBER, VtlParser.TIME_PERIOD, 'ERROR'],
			[VtlParser.NUMBER, VtlParser.STRING, (op) => `${op}`],
			[VtlParser.NUMBER, VtlParser.DURATION, 'ERROR'],
			[VtlParser.BOOLEAN, VtlParser.INTEGER, (op) => (op ? 1 : 0)],
			[VtlParser.BOOLEAN, VtlParser.NUMBER, (op) => (op ? 1 : 0)],
			[VtlParser.BOOLEAN, VtlParser.BOOLEAN, (op) => op],
			[VtlParser.BOOLEAN, VtlParser.TIME, 'ERROR'],
			[VtlParser.BOOLEAN, VtlParser.DATE, 'ERROR'],
			[VtlParser.BOOLEAN, VtlParser.TIME_PERIOD, 'ERROR'],
			[VtlParser.BOOLEAN, VtlParser.STRING, (op) => `${op}`],
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
			[VtlParser.DATE, VtlParser.DATE, (op, m) => getDate(`${op}`, m)],
			[VtlParser.DATE, VtlParser.TIME_PERIOD, () => 'TODO'],
			[VtlParser.DATE, VtlParser.STRING, (op, m) => getStringFromDate(op, m)],
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
				(op) => {
					if (!Number.isInteger(Number(op)))
						throw new CastTypeError(ctx, op, VtlParser.INTEGER);
					return parseInt(op, 10);
				},
			],
			[
				VtlParser.STRING,
				VtlParser.NUMBER,
				(op) => {
					if (!Number.isInteger(parseInt(op, 10)))
						throw new CastTypeError(ctx, op, VtlParser.NUMBER);
					return parseFloat(op);
				},
			],
			[VtlParser.STRING, VtlParser.BOOLEAN, 'ERROR'],
			[VtlParser.STRING, VtlParser.TIME, () => 'TODO'],
			[VtlParser.STRING, VtlParser.DATE, (op, m) => getDate(op, m)],
			[VtlParser.STRING, VtlParser.TIME_PERIOD, () => 'TODO'],
			[VtlParser.STRING, VtlParser.STRING, (op) => op],
			[VtlParser.STRING, VtlParser.DURATION, () => 'TODO'],
			[VtlParser.DURATION, VtlParser.INTEGER, 'ERROR'],
			[VtlParser.DURATION, VtlParser.NUMBER, 'ERROR'],
			[VtlParser.DURATION, VtlParser.BOOLEAN, 'ERROR'],
			[VtlParser.DURATION, VtlParser.TIME, 'ERROR'],
			[VtlParser.DURATION, VtlParser.DATE, 'ERROR'],
			[VtlParser.DURATION, VtlParser.TIME_PERIOD, 'ERROR'],
			[VtlParser.DURATION, VtlParser.STRING, (op) => `${op}`],
			[VtlParser.DURATION, VtlParser.DURATION, (op) => op],
		];

		const combination = combinations.filter(([opType, scalarTypes]) => {
			if (Array.isArray(scalarTypes))
				return opType === expr.type && scalarTypes.includes(castOutputType);
			return opType === expr.type && scalarTypes === castOutputType;
		});

		let operatorFunction = [];

		if (expr.type !== VtlParser.NULL_CONSTANT) {
			if (combination.length !== 1)
				throw new OperatorTypeError(ctx, 'Cast', expr.type, castOutputType);

			// eslint-disable-next-line prefer-destructuring
			operatorFunction = combination[0][2];

			if (typeof operatorFunction !== 'function')
				throw new CastTypeError(ctx, expr.type, castOutputType);
		}

		return {
			resolve: (bindings) => {
				const opValue = expr.resolve(bindings);

				if (hasNullArgs(opValue)) return null;

				return operatorFunction(opValue, mask);
			},
			type:
				combination[0] && combination[0][0] === VtlParser.DATASET
					? VtlParser.DATASET
					: castOutputType,
		};
	};
}

export default CastVisitor;
