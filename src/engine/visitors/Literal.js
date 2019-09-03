import {
	VtlParser,
	VtlVisitor,
} from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import { getTokenType } from '../utils/context';

class LiteralVisitor extends VtlVisitor {
	visitConstantExpr = ctx => {
		let value;
		switch (getTokenType(ctx)) {
			case VtlParser.INTEGER_CONSTANT:
				value = parseInt(ctx.getText());
				break;
			case VtlParser.FLOAT_CONSTANT:
				value = parseFloat(ctx.getText());
				break;
			case VtlParser.BOOLEAN_CONSTANT:
				value = Boolean(ctx.getText());
				break;
			default:
				throw new Error('Bad type');
		}

		// Unused bindings param
		return { resolve: () => value, type: getTokenType(ctx) };
	};
}

export default LiteralVisitor;
