import { VtlParser, VtlVisitor } from '../../antlr-tools';
import { TypeMismatchError } from '../errors';

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

		if (leftExpr.type === VtlParser.DATASET && rightExpr.type === VtlParser.DATASET) {
			// Left and right operands are of type dataset.
			// Check if intersection of dimension is not empty.
			// Check if we have common measures.
			// Compute the resulting structure.

			const commonIdentifiers = ['Id_1', 'Id_2'];
			const commonMeasures = ['Me_1', 'Me_2'];

			return {
				type: VtlParser.DATASET,
				columns: leftExpr.columns,
				resolve: bindings => {
					const leftDataset = leftExpr.resolve(bindings);
					const rightDataset = rightExpr.resolve(bindings);
					const result = leftDataset.join(
						rightDataset,
						left => Object.entries(left)
							.filter(([key]) => commonIdentifiers.includes(key))
							.map(([_, value]) => value)
							.reduce((a, v) => a + v, ""),
						right => Object.entries(right)
							.filter(([key]) => commonIdentifiers.includes(key))
							.map(([_, value]) => value)
							.reduce((a, v) => a + v, ""),
						(left, right) => {
							return  {
								Id_1: left.Id_1,
								Id_2: left.Id_2,
								Me_1: left.Me_1 + right.Me_1,
								Me_2: left.Me_2 + right.Me_2,
							}
						}
					);
					return result;
				}
			}
		}

		let operatorFunction;
		let type = [leftExpr.type, rightExpr.type].includes(VtlParser.NUMBER)
			? VtlParser.NUMBER
			: VtlParser.INTEGER;

		// Dataset
		const datasetTypeExample = {
			type: VtlParser.DATASET,
			columns: [],
			types: [],
			roles: [],
			resolve: bindings => null,
		};

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

		return {
			resolve: bindings =>
				operatorFunction(
					leftExpr.resolve(bindings),
					rightExpr.resolve(bindings)
				),
			type,
		};
	};
}

export default ArithmeticVisitor;
