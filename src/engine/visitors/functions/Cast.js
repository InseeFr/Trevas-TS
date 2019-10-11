import {
	VtlParser,
	VtlVisitor,
} from '../../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import TypeMismatchError from '../../errors/TypeMismatchError';

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

		let operatorFunction, type;
		switch (scalarTypeCtx.children[0].symbol.type) {
			case VtlParser.NUMBER:
				operatorFunction = op => parseFloat(op);
				type = VtlParser.NUMBER;
				break;
			case VtlParser.INTEGER:
				operatorFunction = op => parseInt(op, 10);
				type = VtlParser.INTEGER_CONSTANT;
				break;
			default:
				throw new Error('Unsupported scalar ' + op.getText());
		}

		return {
			resolve: bindings => operatorFunction(op.resolve(bindings)),
			type,
		};
	};
}

export default CastVisitor;
