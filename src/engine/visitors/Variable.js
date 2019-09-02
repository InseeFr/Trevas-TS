import {
	VtlParser,
	VtlVisitor,
} from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';
import { getTokenType } from '../utils/context';

class VariableVisitor extends VtlVisitor {
	visitVarIdExpr = ctx => {
		const variable = ctx.getText();

		return {
			resolve: bindings => bindings[variable],
			type: getTokenType(ctx),
		};
	};
}

export default VariableVisitor;
