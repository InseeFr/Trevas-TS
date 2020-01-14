import { VtlParser, VtlVisitor } from '../../../antlr-tools';
import { TypeMismatchError } from '../../errors';

class StringVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitUnaryStringFunction = ctx => {
		const { op: opCtx } = ctx;

		const expr = this.exprVisitor.visit(ctx.expr());

		if (expr.type !== VtlParser.STRING) {
			throw new TypeMismatchError(ctx.expr(), VtlParser.STRING, opCtx.type);
		}

		let operatorFunction;
		let type = VtlParser.STRING;

		switch (opCtx.type) {
			case VtlParser.TRIM:
				operatorFunction = expr => expr.trim();
				break;
			case VtlParser.LTRIM:
				operatorFunction = expr => expr.trimLeft();
				break;
			case VtlParser.RTRIM:
				operatorFunction = expr => expr.trimRight();
				break;
			case VtlParser.UCASE:
				operatorFunction = expr => expr.toUpperCase();
				break;
			case VtlParser.LCASE:
				operatorFunction = expr => expr.toLowerCase();
				break;
			case VtlParser.LEN:
				operatorFunction = expr => expr.length;
				type = VtlParser.INTEGER;
				break;
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}
		return {
			resolve: bindings => {
				return operatorFunction(expr.resolve(bindings));
			},
			type,
		};
	};

	checkType = (exprCtx, expectedType) => {
		const operand = this.exprVisitor.visit(exprCtx);
		if (operand.type !== expectedType) {
			throw new TypeMismatchError(exprCtx, expectedType, operand.type);
		}
		return operand;
	};

	visitReplaceAtom = ctx => {
		const [strCtx, oldCtx] = ctx.expr();
		const operand = this.checkType(strCtx, VtlParser.STRING);
		const oldStr = this.checkType(oldCtx, VtlParser.STRING);
		const newCtx = ctx.optionalExpr()
			? ctx.optionalExpr()
			: { resolve: () => '', type: VtlParser.STRING };
		const newStr = this.checkType(newCtx, VtlParser.STRING);
		return {
			resolve: bindings => {
				const regexp = new RegExp(oldStr.resolve(bindings), 'g');
				return operand.resolve(bindings).replace(regexp, newStr.resolve());
			},
			type: VtlParser.STRING,
		};
	};

	visitInstrAtom = ctx => {
		const [operandCtx, patternCtx] = ctx.expr();
		const [startCtx, occurrenceCtx] = ctx.optionalExpr();

		const operand = this.checkType(operandCtx, VtlParser.STRING);
		const pattern = this.checkType(patternCtx, VtlParser.STRING);

		// TODO: Change when we handle missing values.
		const start =
			startCtx && startCtx.expr()
				? this.checkType(startCtx, VtlParser.INTEGER)
				: { resolve: () => 0, type: VtlParser.INTEGER };
		const occurrence =
			occurrenceCtx && occurrenceCtx.expr()
				? this.checkType(occurrenceCtx, VtlParser.INTEGER)
				: { resolve: () => 1, type: VtlParser.INTEGER };

		return {
			resolve: bindings => {
				const resolvedOperand = operand.resolve(bindings);
				const resolvedPattern = pattern.resolve(bindings);
				let resolvedStart = start.resolve(bindings);

				// Not in the spec.
				if (resolvedStart < 0) {
					throw new Error('start cannot be negative');
				}
				let resolvedOccurrence = occurrence.resolve(bindings);

				// Not in the spec.
				if (resolvedOccurrence < 0) {
					throw new Error('occurrence cannot be negative');
				}

				let result = 0;
				while (--resolvedOccurrence >= 0) {
					result = resolvedOperand.indexOf(resolvedPattern, resolvedStart);
					if (result === -1) {
						return 0;
					} else {
						resolvedStart = result + 1;
					}
				}
				return result;
			},
			type: VtlParser.INTEGER,
		};
	};

	visitSubstrAtom = ctx => {
		const { children } = ctx;

		if (children.length === 4)
			throw new Error('Invalid number of operands for function substr');

		// TODO Grammar defines this as an unbounded array of expressions. Should be changed IMO
		const [startIndexCtx, lengthCtx] = ctx.optionalExpr();

		const operand = this.checkType(ctx.expr(), VtlParser.STRING);
		const startIndex = this.checkType(startIndexCtx, VtlParser.INTEGER);
		const length = this.checkType(lengthCtx, VtlParser.INTEGER);

		return {
			resolve: bindings => {
				return operand
					.resolve(bindings)
					.substr(startIndex.resolve(bindings), length.resolve(bindings));
			},
			type: VtlParser.STRING,
		};
	};
}

export default StringVisitor;
