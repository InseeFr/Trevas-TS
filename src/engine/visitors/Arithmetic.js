import { VtlParser, VtlVisitor } from '../../antlr-tools';
import { TypeMismatchError } from '../errors';

/**
 * Util function that creates a key extractor for the columns.
 * @param columns columns to extract.
 * @return a key extractor function.
 */
function keyExtractorFor(columns) {
	if (columns.length <= 1) {
		throw new Error("column list was empty")
	}
	return (row) => {
		return Object.entries(row)
			.filter(([key]) => columns.includes(key))
			.map(([_, value]) => value)
			.reduce((a, v) => a + v, "");
	};
}

/**
 * Creates a merger function that uses op on all measures.
 * @param identifiers the identifier columns
 * @param measures the measure columns
 * @param op the operator
 */
function rowMerger(identifiers, measures, op) {
	return(left, right) => {
		let result = {};
		for (const identifier of identifiers) {
			result[identifier] = left[identifier];
		}
		for (const measure of measures) {
			result[measure] = op(left[measure], right[measure]);
		}
		return  result;
	}
}

function intersectColumns(leftColumns, rightColumns) {
	return Object.fromEntries(Object.entries(leftColumns).filter(
		l => Object.entries(rightColumns).some(r => l.name === r.name
			&& l.role === r.role && l.type === r.type)));
}


class ArithmeticVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitUnaryExpr = ctx => {
		const { op, right: rightCtx } = ctx;
		const rightExpr = this.exprVisitor.visit(rightCtx);

		const expectedTypes = [VtlParser.INTEGER, VtlParser.NUMBER];

		if (!expectedTypes.includes(rightExpr.type))
			throw new TypeMismatchError(rightCtx, expectedTypes, rightExpr.type);

		return {
			resolve: bindings => {
				const value = rightExpr.resolve(bindings);
				return op.type === VtlParser.PLUS ? value : -value;
			},
			type: rightExpr.type,
		};
	};

	visitArithmeticExprOrConcat = ctx => {
		if (ctx.op.type === VtlParser.CONCAT) {
			throw new Error('Arithmetic visitor got CONCAT context');
		}
		return this.visitArithmeticExpr(ctx);
	};

	visitArithmeticExpr = ctx => {
		const { left: leftCtx, right: rightCtx, op: opCtx } = ctx;
		const leftExpr = this.exprVisitor.visit(leftCtx);
		const rightExpr = this.exprVisitor.visit(rightCtx);

		const expectedTypes = [VtlParser.INTEGER, VtlParser.NUMBER, VtlParser.DATASET];

		if (!expectedTypes.includes(leftExpr.type))
			throw new TypeMismatchError(leftCtx, expectedTypes, leftExpr.type);

		if (!expectedTypes.includes(rightExpr.type))
			throw new TypeMismatchError(rightCtx, expectedTypes, rightExpr.type);

		let operatorFunction;
		let type = [leftExpr.type, rightExpr.type].includes(VtlParser.NUMBER)
			? VtlParser.NUMBER
			: VtlParser.INTEGER;

		switch (opCtx.type) {
			case VtlParser.PLUS:
				operatorFunction = (left, right) => left + right;
				break;
			case VtlParser.MINUS:
				operatorFunction = (left, right) => left - right;
				break;
			case VtlParser.MUL:
				operatorFunction = (left, right) => left * right;
				break;
			case VtlParser.DIV:
				operatorFunction = (left, right) => left / right;
				type = VtlParser.NUMBER;
				break;
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}

		if (leftExpr.type === VtlParser.DATASET && rightExpr.type === VtlParser.DATASET) {

			const commonColumns = intersectColumns(leftExpr.columns, rightExpr.columns);

			const commonIdentifiers = Object.entries(commonColumns)
				.filter(([_, {role}]) => role === VtlParser.DIMENSION)
				.map(([name]) => name);
			const commonMeasures = Object.entries(commonColumns)
				.filter(([_, {role}]) => role === VtlParser.MEASURE)
				.map(([name]) => name);

			return {
				type: VtlParser.DATASET,
				columns: leftExpr.columns,
				resolve: bindings => {
					const leftDataset = leftExpr.resolve(bindings);
					const rightDataset = rightExpr.resolve(bindings);
					return leftDataset.join(
						rightDataset,
						keyExtractorFor(commonIdentifiers),
						keyExtractorFor(commonIdentifiers),
						rowMerger(commonIdentifiers, commonMeasures, operatorFunction)
					);
				}
			}
		} else {

			return {
				resolve: bindings =>
					operatorFunction(
						leftExpr.resolve(bindings),
						rightExpr.resolve(bindings)
					),
				type,
			};
		}

	};
}

export default ArithmeticVisitor;
