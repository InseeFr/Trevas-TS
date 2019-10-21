import {
	VtlParser,
	VtlVisitor,
} from '../../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import TypeMismatchError from '../../errors/TypeMismatchError';

class StringFunctionsVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	checkType = (exprCtx, expectedType) => {
		const operand = this.exprVisitor.visit(exprCtx);
		if (operand.type !== expectedType) {
			throw new TypeMismatchError(exprCtx, expectedType, operand.type);
		}
		return operand;
	};

	visitTrimAtom = ctx => {
		const operand = this.checkType(ctx.expr(), VtlParser.STRING);
		return {
			resolve: bindings => {
				return operand.resolve(bindings).trim();
			},
			type: VtlParser.STRING,
		};
	};

	visitLtrimAtom = ctx => {
		const operand = this.checkType(ctx.expr(), VtlParser.STRING);
		return {
			resolve: bindings => {
				return operand.resolve(bindings).trimLeft();
			},
			type: VtlParser.STRING,
		};
	};

	visitRtrimAtom = ctx => {
		const operand = this.checkType(ctx.expr(), VtlParser.STRING);
		return {
			resolve: bindings => {
				return operand.resolve(bindings).trimRight();
			},
			type: VtlParser.STRING,
		};
	};

	visitUcaseAtom = ctx => {
		const operand = this.checkType(ctx.expr(), VtlParser.STRING);
		return {
			resolve: bindings => {
				return operand.resolve(bindings).toUpperCase();
			},
			type: VtlParser.STRING,
		};
	};

	visitLcaseAtom = ctx => {
		const operand = this.checkType(ctx.expr(), VtlParser.STRING);
		return {
			resolve: bindings => {
				return operand.resolve(bindings).toLowerCase();
			},
			type: VtlParser.STRING,
		};
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

	visitLenAtom = ctx => {
		const operand = this.checkType(ctx.expr(), VtlParser.STRING);
		return {
			resolve: bindings => (operand ? operand.resolve(bindings).length : null),
			type: VtlParser.INTEGER,
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

export default StringFunctionsVisitor;
