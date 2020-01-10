import { VtlParser, VtlVisitor } from '../../antlr-tools';

const types = {
	string: VtlParser.STRING,
	number: VtlParser.NUMBER,
	boolean: VtlParser.BOOLEAN,
};

class VariableVisitor extends VtlVisitor {
	constructor(bindings) {
		super();
		this.bindings = bindings;
	}
	visitVarIdExpr = ctx => {
		const variable = ctx.getText();
		if (this.bindings[variable] && this.bindings[variable].type) {
			return this.bindings[variable];
		} else {
			return {
				resolve: bindings => bindings[variable],
				type: types[typeof this.bindings[variable]],
			};
		}
	};
}

export default VariableVisitor;
