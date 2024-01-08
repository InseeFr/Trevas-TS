import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.0-antlr-tools';
import { TypeMismatchError } from '../../errors';
import { hasNullArgs } from '../../utils';

class StringVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitUnaryStringFunction = (ctx) => {
		const { op: opCtx } = ctx;

		const expr = this.exprVisitor.visit(ctx.expr());

		if (![VtlParser.STRING, VtlParser.NULL_CONSTANT].includes(expr.type)) {
			throw new TypeMismatchError(ctx.expr(), VtlParser.STRING, opCtx.type);
		}

		let operatorFunction;
		let type = VtlParser.STRING;

		switch (opCtx.type) {
			case VtlParser.TRIM:
				operatorFunction = (e) => e.trim();
				break;
			case VtlParser.LTRIM:
				operatorFunction = (e) => e.trimLeft();
				break;
			case VtlParser.RTRIM:
				operatorFunction = (e) => e.trimRight();
				break;
			case VtlParser.UCASE:
				operatorFunction = (e) => e.toUpperCase();
				break;
			case VtlParser.LCASE:
				operatorFunction = (e) => e.toLowerCase();
				break;
			case VtlParser.LEN:
				operatorFunction = (e) => e.length;
				type = VtlParser.INTEGER;
				break;
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}
		return {
			resolve: (bindings) => {
				const exprValue = expr.resolve(bindings);
				if (hasNullArgs(exprValue)) return null;
				return operatorFunction(exprValue);
			},
			type,
		};
	};

	checkTypes = (exprCtx, expectedTypes) => {
		const operand = this.exprVisitor.visit(exprCtx);
		if (!expectedTypes.includes(operand.type)) {
			throw new TypeMismatchError(exprCtx, expectedTypes, operand.type);
		}
		return operand;
	};

	visitReplaceAtom = (ctx) => {
		const [strCtx, oldCtx] = ctx.expr();
		const operand = this.checkTypes(strCtx, [
			VtlParser.STRING,
			VtlParser.NULL_CONSTANT,
		]);
		const oldStr = this.checkTypes(oldCtx, [
			VtlParser.STRING,
			VtlParser.NULL_CONSTANT,
		]);
		const newCtx = ctx.optionalExpr()
			? ctx.optionalExpr()
			: { resolve: () => '', type: VtlParser.STRING };
		const newStr = this.checkTypes(newCtx, [
			VtlParser.STRING,
			VtlParser.NULL_CONSTANT,
		]);
		return {
			resolve: (bindings) => {
				const operandValue = operand.resolve(bindings);
				const oldStrValue = oldStr.resolve(bindings);
				const newStrValue = newStr.resolve();
				if (hasNullArgs(operandValue, oldStrValue, newStrValue)) return null;
				const regexp = new RegExp(oldStrValue, 'g');
				return operandValue.replace(regexp, newStrValue);
			},
			type: VtlParser.STRING,
		};
	};

	visitInstrAtom = (ctx) => {
		const [operandCtx, patternCtx] = ctx.expr();
		const [startCtx, occurrenceCtx] = ctx.optionalExpr();

		const operand = this.checkTypes(operandCtx, [
			VtlParser.STRING,
			VtlParser.NULL_CONSTANT,
		]);
		const pattern = this.checkTypes(patternCtx, [
			VtlParser.STRING,
			VtlParser.NULL_CONSTANT,
		]);

		const start =
			startCtx && startCtx.expr()
				? this.checkTypes(startCtx, [
						VtlParser.INTEGER,
						VtlParser.NULL_CONSTANT,
				  ])
				: { resolve: () => 0, type: VtlParser.INTEGER };
		const occurrence =
			occurrenceCtx && occurrenceCtx.expr()
				? this.checkTypes(occurrenceCtx, [
						VtlParser.INTEGER,
						VtlParser.NULL_CONSTANT,
				  ])
				: { resolve: () => 1, type: VtlParser.INTEGER };

		return {
			resolve: (bindings) => {
				const operandValue = operand.resolve(bindings);
				const patternValue = pattern.resolve(bindings);
				let startValue = start.resolve(bindings);

				// Not in the spec.
				if (startValue < 0) {
					throw new Error('start cannot be negative');
				}
				let occurenceValue = occurrence.resolve(bindings);

				// Not in the spec.
				if (occurenceValue < 0) {
					throw new Error('occurrence cannot be negative');
				}

				if (hasNullArgs(operandValue, patternValue, startValue, occurenceValue))
					return null;

				let result = 0;
				while (occurenceValue > 0) {
					occurenceValue -= 1;
					result = operandValue.indexOf(patternValue, startValue);
					if (result === -1) {
						return 0;
					}
					startValue = result + 1;
				}
				return result + 1;
			},
			type: VtlParser.INTEGER,
		};
	};

	visitSubstrAtom = (ctx) => {
		const { children } = ctx;

		if (children.length === 4)
			throw new Error('Invalid number of operands for function substr');

		// TODO Grammar defines this as an unbounded array of expressions. Should be changed IMO
		const [startIndexCtx, lengthCtx] = ctx.optionalExpr();

		const operand = this.checkTypes(ctx.expr(), [
			VtlParser.STRING,
			VtlParser.NULL_CONSTANT,
		]);
		const startIndex = this.checkTypes(startIndexCtx, [
			VtlParser.INTEGER,
			VtlParser.NULL_CONSTANT,
		]);
		const length = this.checkTypes(lengthCtx, [
			VtlParser.INTEGER,
			VtlParser.NULL_CONSTANT,
		]);

		return {
			resolve: (bindings) => {
				const operandValue = operand.resolve(bindings);
				const startValue = startIndex.resolve(bindings);
				const lengthValue = length.resolve(bindings);

				if (hasNullArgs(operandValue, startValue, lengthValue)) return null;

				return operandValue.substring(
					startValue - 1,
					startValue - 1 + lengthValue
				);
			},
			type: VtlParser.STRING,
		};
	};
}

export default StringVisitor;
