import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.0-antlr-tools';
import { TypeMismatchError } from '../../errors';
import { hasNullArgs } from '../../utils';
class ComparisonVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitIsNullAtom = (ctx) => {
		const expr = this.exprVisitor.visit(ctx.expr());

		return {
			resolve: (bindings) => expr.resolve(bindings) === null,
			type: VtlParser.BOOLEAN,
		};
	};

	visitBetweenAtom = (ctx) => {
		const { op, from_, to_ } = ctx;

		const opOperand = this.exprVisitor.visit(op);
		const fromOperand = this.exprVisitor.visit(from_);
		const toOperand = this.exprVisitor.visit(to_);

		[
			[opOperand, op],
			[fromOperand, from_],
			[toOperand, to_],
		].forEach(([o, c]) => {
			if (
				![
					VtlParser.INTEGER,
					VtlParser.NUMBER,
					VtlParser.NULL_CONSTANT,
				].includes(o.type)
			) {
				throw new TypeMismatchError(
					c,
					[VtlParser.INTEGER, VtlParser.NUMBER],
					o.type
				);
			}
		});

		return {
			resolve: (bindings) => {
				const fromValue = fromOperand.resolve(bindings);
				const toValue = toOperand.resolve(bindings);
				const opValue = opOperand.resolve(bindings);
				if (hasNullArgs(fromValue, toValue, opValue)) return null;
				return fromValue <= opValue && opValue <= toValue;
			},
			type: VtlParser.BOOLEAN,
		};
	};
}

export default ComparisonVisitor;
