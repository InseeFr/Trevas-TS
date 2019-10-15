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
			throw new TypeMismatchError(exprCtx,expectedType, operand.type);
		}
		return operand;
	};

	visitTrimAtom = ctx => {
		const operand = this.checkType(ctx.expr(), VtlParser.STRING_CONSTANT);
		return {
			resolve: bindings => {
				return operand.resolve(bindings).trim();
			},
			type: VtlParser.STRING_CONSTANT,
		};
	};

	visitLtrimAtom = ctx => {
		const operand = this.checkType(ctx.expr(), VtlParser.STRING_CONSTANT);
		return {
			resolve: bindings => {
				return operand.resolve(bindings).trimLeft();
			},
			type: VtlParser.STRING_CONSTANT,
		};
	};

	visitRtrimAtom = ctx => {
		const operand = this.checkType(ctx.expr(), VtlParser.STRING_CONSTANT);
		return {
			resolve: bindings => {
				return operand.resolve(bindings).trimRight();
			},
			type: VtlParser.STRING_CONSTANT,
		};
	};

	visitUcaseAtom = ctx => {
		const operand = this.checkType(ctx.expr(), VtlParser.STRING_CONSTANT);
		return {
			resolve: bindings => {
				return operand.resolve(bindings).toUpperCase();
			},
			type: VtlParser.STRING_CONSTANT,
		};
	};

	visitLcaseAtom = ctx => {
		const operand = this.checkType(ctx.expr(), VtlParser.STRING_CONSTANT);
		return {
			resolve: bindings => {
				return operand.resolve(bindings).toLowerCase();
			},
			type: VtlParser.STRING_CONSTANT,
		};
	};

	visitReplaceAtom = ctx => {
		const [strCtx, oldCtx] = ctx.expr();
		const operand = this.checkType(strCtx, VtlParser.STRING_CONSTANT);
		const oldStr = this.checkType(oldCtx, VtlParser.STRING_CONSTANT);
		const newCtx = ctx.optionalExpr() ? ctx.optionalExpr() : { resolve: () => '', type: VtlParser.STRING_CONSTANT};
		const newStr = this.checkType(newCtx, VtlParser.STRING_CONSTANT);
		return {
			resolve: bindings => {
				const regexp = new RegExp(oldStr.resolve(bindings),'g');
				return operand.resolve(bindings).replace(regexp, newStr.resolve());
			},
			type: VtlParser.STRING_CONSTANT,
		};
	};

	visitLenAtom = ctx => {
		const operand = this.checkType(ctx.expr(), VtlParser.STRING_CONSTANT);
		return {
			resolve: bindings => operand ? operand.resolve(bindings).length : null,
			type: VtlParser.INTEGER_CONSTANT
		}
	};

	visitInstrAtom = ctx => {
		const [operandCtx, patternCtx] = ctx.expr();
		const [ startCtx , occurrenceCtx ] = ctx.optionalExpr();

		const operand = this.checkType(operandCtx, VtlParser.STRING_CONSTANT);
		const pattern = this.checkType(patternCtx, VtlParser.STRING_CONSTANT);

		// TODO: Change when we handle missing values.
		const start = startCtx && startCtx.expr()
			? this.checkType(startCtx, VtlParser.INTEGER_CONSTANT)
			: { resolve: () => 0, type: VtlParser.INTEGER_CONSTANT};
		const occurrence = occurrenceCtx && occurrenceCtx.expr()
			? this.checkType(occurrenceCtx, VtlParser.INTEGER_CONSTANT)
			: { resolve: () => 1, type: VtlParser.INTEGER_CONSTANT};

		return {
			resolve: bindings => {
				const resolvedOperand = operand.resolve(bindings);
				const resolvedPattern = pattern.resolve(bindings);
				let resolvedStart = start.resolve(bindings);

				// Not in the spec.
				if (resolvedStart < 0) {
					throw new Error("start cannot be negative")
				}
				let resolvedOccurrence = occurrence.resolve(bindings);

				// Not in the spec.
				if (resolvedOccurrence < 0) {
					throw new Error("occurrence cannot be negative")
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
			type: VtlParser.INTEGER_CONSTANT,
		};
	};

	visitSubstrAtom = ctx => {
		const { children } = ctx;

		if (children.length === 4)
			throw new Error('Invalid number of operands for function substr');

		// TODO Grammar defines this as an unbounded array of expressions. Should be changed IMO
		const [startIndexCtx, lengthCtx] = ctx.optionalExpr();

		const operand = this.checkType(ctx.expr(), VtlParser.STRING_CONSTANT);
		const startIndex = this.checkType(startIndexCtx, VtlParser.INTEGER_CONSTANT);
		const length = this.checkType(lengthCtx, VtlParser.INTEGER_CONSTANT);

		return {
			resolve: bindings => {
				return operand
					.resolve(bindings)
					.substr(startIndex.resolve(bindings), length.resolve(bindings));
			},
			type: VtlParser.STRING_CONSTANT,
		};
	};
}

export default StringFunctionsVisitor;
