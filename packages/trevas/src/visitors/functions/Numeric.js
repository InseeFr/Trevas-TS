import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.0-antlr-tools';
import { TypeMismatchError } from '../../errors';
import { hasNullArgs } from '../../utils';

class NumericVisitor extends VtlVisitor {
	constructor(exprVisitor) {
		super();
		this.exprVisitor = exprVisitor;
	}

	visitOptionalNumeric = (ctx) => {
		const { op: opCtx } = ctx;

		const optionalExpr = ctx.optionalExpr()
			? this.exprVisitor.visit(ctx.optionalExpr())
			: { resolve: () => 0, type: VtlParser.INTEGER };

		const expectedTypes = [
			VtlParser.INTEGER,
			VtlParser.NUMBER,
			VtlParser.NULL_CONSTANT,
		];

		if (ctx.optionalExpr() && !expectedTypes.includes(optionalExpr.type)) {
			throw new TypeMismatchError(
				ctx.optionalExpr(),
				expectedTypes,
				opCtx.type
			);
		}

		let operatorFunction;
		let type;

		switch (opCtx.type) {
			// handle better when input param is not null
			case VtlParser.RANDOM:
				operatorFunction = () => Math.random();
				type = optionalExpr.type;
				break;
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}

		return {
			resolve: (bindings) => {
				const exprValue = optionalExpr.resolve(bindings);
				if (hasNullArgs(exprValue)) return null;
				return operatorFunction(exprValue);
			},
			type,
		};
	};

	visitUnaryNumeric = (ctx) => {
		const { op: opCtx } = ctx;

		const expr = this.exprVisitor.visit(ctx.expr());

		const expectedTypes = [
			VtlParser.INTEGER,
			VtlParser.NUMBER,
			VtlParser.NULL_CONSTANT,
		];

		if (!expectedTypes.includes(expr.type)) {
			throw new TypeMismatchError(ctx.expr(), expectedTypes, opCtx.type);
		}

		let operatorFunction;
		let type;

		switch (opCtx.type) {
			case VtlParser.ABS:
				operatorFunction = (e) => Math.abs(e);
				type = expr.type;
				break;
			case VtlParser.CEIL:
				operatorFunction = (e) => Math.ceil(e);
				type = VtlParser.INTEGER;
				break;
			case VtlParser.EXP:
				operatorFunction = (e) => Math.exp(e);
				type = VtlParser.NUMBER;
				break;
			case VtlParser.FLOOR:
				operatorFunction = (e) => Math.floor(e);
				type = VtlParser.INTEGER;
				break;
			case VtlParser.LN:
				operatorFunction = (e) => Math.log(e);
				type = VtlParser.NUMBER;
				break;
			case VtlParser.SQRT:
				operatorFunction = (e) => Math.sqrt(e);
				type = VtlParser.NUMBER;
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

	visitUnaryWithOptionalNumeric = (ctx) => {
		const { op: opCtx } = ctx;

		const expr = this.exprVisitor.visit(ctx.expr());

		const optionalExpr =
			ctx.optionalExpr() && ctx.optionalExpr().expr()
				? this.exprVisitor.visit(ctx.optionalExpr().expr())
				: undefined;

		const expectedTypes = [
			VtlParser.INTEGER,
			VtlParser.NUMBER,
			VtlParser.NULL_CONSTANT,
		];

		if (!expectedTypes.includes(expr.type)) {
			throw new TypeMismatchError(ctx.expr(), expectedTypes, opCtx.type);
		}

		if (optionalExpr && optionalExpr.type !== VtlParser.INTEGER)
			throw new Error('The second operand should be an integer');

		let operatorFunction;
		let type;

		switch (opCtx.type) {
			case VtlParser.ROUND:
				operatorFunction = (e, oE) => {
					if (!oE || oE === VtlParser.OPTIONAL) return Math.round(e);
					return Math.round(e * 10 ** oE) / 10 ** oE;
				};
				type = VtlParser.NUMBER;
				break;
			case VtlParser.TRUNC:
				operatorFunction = (e, oE) => {
					if (!oE || oE === VtlParser.OPTIONAL) return Math.trunc(e);
					return Math.trunc(e * 10 ** oE) / 10 ** oE;
				};
				type = VtlParser.NUMBER;
				break;
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}

		return {
			resolve: (bindings) => {
				const exprValue = expr.resolve(bindings);
				const optionalValue = optionalExpr
					? optionalExpr.resolve(bindings)
					: undefined;

				if (hasNullArgs(exprValue, optionalValue)) return null;

				return operatorFunction(exprValue, optionalValue);
			},
			type,
		};
	};

	visitBinaryNumeric = (ctx) => {
		const { left: leftCtx, right: rightCtx, op: opCtx } = ctx;
		const leftExpr = this.exprVisitor.visit(leftCtx);
		const rightExpr = this.exprVisitor.visit(rightCtx);

		const expectedTypes = [
			VtlParser.INTEGER,
			VtlParser.NUMBER,
			VtlParser.NULL_CONSTANT,
		];

		if (!expectedTypes.includes(leftExpr.type))
			throw new TypeMismatchError(leftCtx, expectedTypes, leftExpr.type);
		if (!expectedTypes.includes(rightExpr.type))
			throw new TypeMismatchError(rightCtx, expectedTypes, rightExpr.type);

		let operatorFunction;
		let type = VtlParser.NUMBER;

		switch (opCtx.type) {
			case VtlParser.LOG:
				operatorFunction = (lE, rE) => Math.log(lE) / Math.log(rE);
				type = VtlParser.NUMBER;
				break;
			case VtlParser.MOD:
				operatorFunction = (lE, rE) => {
					if (rE === 0) return lE;
					return lE % rE;
				};
				type =
					leftExpr.type === VtlParser.INTEGER &&
					rightExpr.type === VtlParser.INTEGER
						? VtlParser.INTEGER
						: VtlParser.NUMBER;
				break;
			case VtlParser.POWER:
				operatorFunction = (lE, rE) => lE ** rE;
				type =
					leftExpr.type === VtlParser.INTEGER &&
					rightExpr.type === VtlParser.INTEGER
						? VtlParser.INTEGER
						: VtlParser.NUMBER;
				break;
			default:
				throw new Error(`unknown operator ${opCtx.getText()}`);
		}

		return {
			resolve: (bindings) => {
				const leftValue = leftExpr.resolve(bindings);
				const rightValue = rightExpr.resolve(bindings);

				if (hasNullArgs(leftValue, rightValue)) return null;

				return operatorFunction(leftValue, rightValue);
			},
			type,
		};
	};
}

export default NumericVisitor;
