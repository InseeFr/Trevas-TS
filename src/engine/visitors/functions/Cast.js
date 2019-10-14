import moment from 'moment';
import {
	VtlParser,
	VtlVisitor,
} from '../../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import OperatorTypeError from '../../errors/OperatorTypeError';
import CastTypeError from '../../errors/CastTypeError';

class CastVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitCastExpr = ctx => {
		const { children } = ctx;

		let opCtx = ctx.expr();
		let scalarTypeCtx = ctx.basicScalarType() || ctx.valueDomainName();
		let maskCtx = ctx.STRING_CONSTANT();

		const op = this.exprVisitor.visit(opCtx);
		const mask = maskCtx ? maskCtx.getText() : undefined;

		const combinations = [
			[VtlParser.INTEGER_CONSTANT, VtlParser.INTEGER, op => op],
			[VtlParser.INTEGER_CONSTANT, VtlParser.NUMBER, op => op],
			[VtlParser.INTEGER_CONSTANT, VtlParser.BOOLEAN, op => op !== 0],
			[VtlParser.INTEGER_CONSTANT, VtlParser.TIME, 'ERROR'],
			[VtlParser.INTEGER_CONSTANT, VtlParser.DATE, 'ERROR'],
			[VtlParser.INTEGER_CONSTANT, VtlParser.TIME_PERIOD, 'ERROR'],
			[VtlParser.INTEGER_CONSTANT, VtlParser.STRING, op => `${op}`],
			[VtlParser.INTEGER_CONSTANT, VtlParser.DURATION, 'ERROR'],
			[
				VtlParser.FLOAT_CONSTANT,
				VtlParser.INTEGER,
				op => {
					if (!Number.isInteger(op))
						throw new CastTypeError(ctx, op, VtlParser.FLOAT_CONSTANT);
					return parseInt(op, 10);
				},
			],
			[VtlParser.FLOAT_CONSTANT, VtlParser.NUMBER, op => op],
			[VtlParser.FLOAT_CONSTANT, VtlParser.BOOLEAN, op => op !== 0],
			[VtlParser.FLOAT_CONSTANT, VtlParser.TIME, 'ERROR'],
			[VtlParser.FLOAT_CONSTANT, VtlParser.DATE, 'ERROR'],
			[VtlParser.FLOAT_CONSTANT, VtlParser.TIME_PERIOD, 'ERROR'],
			[VtlParser.FLOAT_CONSTANT, VtlParser.STRING, op => `${op}`],
			[VtlParser.FLOAT_CONSTANT, VtlParser.DURATION, 'ERROR'],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.INTEGER, op => (op ? 1 : 0)],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.NUMBER, op => (op ? 1 : 0)],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.BOOLEAN, op => op],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.TIME, 'ERROR'],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.DATE, 'ERROR'],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.TIME_PERIOD, 'ERROR'],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.STRING, op => `${op}`],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.DURATION, 'ERROR'],
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
			[VtlParser.DATE, VtlParser.STRING, () => 'TODO'],
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
				VtlParser.STRING_CONSTANT,
				VtlParser.INTEGER,
				op => {
					if (!Number.isInteger(Number(op)))
						throw new CastTypeError(ctx, op, VtlParser.INTEGER);
					return parseInt(op, 10);
				},
			],
			[
				VtlParser.STRING_CONSTANT,
				VtlParser.NUMBER,
				op => {
					if (!Number.isInteger(parseInt(op, 10)))
						throw new CastTypeError(ctx, op, VtlParser.NUMBER);
					return parseFloat(op);
				},
			],
			[VtlParser.STRING_CONSTANT, VtlParser.BOOLEAN, 'ERROR'],
			[VtlParser.STRING_CONSTANT, VtlParser.TIME, () => 'TODO'],
			[
				VtlParser.STRING_CONSTANT,
				VtlParser.DATE,
				(op, mask) => new Date(moment.parseZone(op, mask)),
			],
			[VtlParser.STRING_CONSTANT, VtlParser.TIME_PERIOD, () => 'TODO'],
			[VtlParser.STRING_CONSTANT, VtlParser.STRING, op => op],
			[VtlParser.STRING_CONSTANT, VtlParser.DURATION, () => 'TODO'],
			[VtlParser.DURATION, VtlParser.INTEGER, 'ERROR'],
			[VtlParser.DURATION, VtlParser.NUMBER, 'ERROR'],
			[VtlParser.DURATION, VtlParser.BOOLEAN, 'ERROR'],
			[VtlParser.DURATION, VtlParser.TIME, 'ERROR'],
			[VtlParser.DURATION, VtlParser.DATE, 'ERROR'],
			[VtlParser.DURATION, VtlParser.TIME_PERIOD, 'ERROR'],
			[VtlParser.DURATION, VtlParser.STRING, op => `${op}`],
			[VtlParser.DURATION, VtlParser.DURATION, op => op],
		];

		const castOutputType = scalarTypeCtx.children[0].symbol.type;
		const combination = combinations.filter(
			([opType, scalarType]) =>
				opType === op.type && scalarType === castOutputType
		);

		if (combination.length !== 1)
			throw OperatorTypeError(ctx, op, op.type, castOutputType);

		const operatorFunction = combination[0][2];

		if (typeof operatorFunction !== 'function')
			throw new CastTypeError(ctx, op.type, castOutputType);

		return {
			resolve: bindings => operatorFunction(op.resolve(bindings), mask),
			type: castOutputType,
		};
	};
}

export default CastVisitor;
