import {
	VtlParser,
	VtlVisitor,
} from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import { getTokenType } from '../utils/context';

class LiteralVisitor extends VtlVisitor {
	visitConstantExpr = ctx => {
		let value;
		switch (getTokenType(ctx)) {
			case VtlParser.STRING_CONSTANT:
				const text = ctx.getText();
				value = text.substring(1, text.length - 1);
				break;
			case VtlParser.INTEGER_CONSTANT:
				value = parseInt(ctx.getText());
				break;
			case VtlParser.FLOAT_CONSTANT:
				value = parseFloat(ctx.getText());
				break;
			case VtlParser.BOOLEAN_CONSTANT:
				value = JSON.parse(ctx.getText());
				break;
			case VtlParser.NULL_CONSTANT:
				value = null;
				break;
			default:
				throw new Error('Bad type');
		}

		// Unused bindings param
		return { resolve: () => value, type: getTokenType(ctx) };
	};
}

export default LiteralVisitor;
