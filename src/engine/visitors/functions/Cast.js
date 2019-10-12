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

		let opCtx = children[2];
		let scalarTypeCtx = children[4];
		let maskCtx = children[6];

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
			[VtlParser.FLOAT_CONSTANT, VtlParser.NUMBER, () => 'TODO'],
			[VtlParser.FLOAT_CONSTANT, VtlParser.NUMBER, () => 'TODO'],
			[VtlParser.FLOAT_CONSTANT, VtlParser.BOOLEAN, () => 'TODO'],
			[VtlParser.FLOAT_CONSTANT, VtlParser.TIME, () => 'TODO'],
			[VtlParser.FLOAT_CONSTANT, VtlParser.DATE, () => 'TODO'],
			[VtlParser.FLOAT_CONSTANT, VtlParser.TIME_PERIOD, () => 'TODO'],
			[VtlParser.FLOAT_CONSTANT, VtlParser.STRING, op => `${op}`],
			[VtlParser.FLOAT_CONSTANT, VtlParser.DURATION, () => 'TODO'],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.INTEGER, () => 'TODO'],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.NUMBER, () => 'TODO'],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.BOOLEAN, () => 'TODO'],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.TIME, () => 'TODO'],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.DATE, () => 'TODO'],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.TIME_PERIOD, () => 'TODO'],
			[VtlParser.BOOLEAN_CONSTANT, VtlParser.STRING, () => 'TODO'],
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
			[VtlParser.STRING_CONSTANT, VtlParser.INTEGER, op => parseInt(op, 10)],
			[VtlParser.STRING_CONSTANT, VtlParser.NUMBER, op => parseFloat(op)],
			[VtlParser.STRING_CONSTANT, VtlParser.BOOLEAN, () => 'TODO'],
			[VtlParser.STRING_CONSTANT, VtlParser.TIME, () => 'TODO'],
			[
				VtlParser.STRING_CONSTANT,
				VtlParser.DATE,
				(op, mask) => new Date(moment.parseZone(op, mask)),
			],
			[VtlParser.STRING_CONSTANT, VtlParser.TIME_PERIOD, () => 'TODO'],
			[VtlParser.STRING_CONSTANT, VtlParser.STRING, () => 'TODO'],
			[VtlParser.STRING_CONSTANT, VtlParser.DURATION, () => 'TODO'],
			[VtlParser.DURATION, VtlParser.INTEGER, () => 'TODO'],
			[VtlParser.DURATION, VtlParser.NUMBER, () => 'TODO'],
			[VtlParser.DURATION, VtlParser.BOOLEAN, () => 'TODO'],
			[VtlParser.DURATION, VtlParser.TIME, () => 'TODO'],
			[VtlParser.DURATION, VtlParser.DATE, () => 'TODO'],
			[VtlParser.DURATION, VtlParser.TIME_PERIOD, () => 'TODO'],
			[VtlParser.DURATION, VtlParser.STRING, () => 'TODO'],
			[VtlParser.DURATION, VtlParser.DURATION, () => 'TODO'],
		];

		const castOutputType = scalarTypeCtx.children[0].symbol.type;
		const combination = combinations.filter(
			([opType, scalarType]) =>
				opType === op.type && scalarType === castOutputType
		);
		if (combination.length === 0) console.log(castOutputType);
		if (combination.length !== 1)
			throw OperatorTypeError(ctx, op.getText(), op.type, castOutputType);

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
