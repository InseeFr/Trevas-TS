import { VtlParser, VtlVisitor } from '../../antlr-tools';

// TODO: Support integers here.
const types = {
	string: VtlParser.STRING,
	number: VtlParser.NUMBER,
	boolean: VtlParser.BOOLEAN,
};

const typeResolver = (variable, bindings) => {
	const bindingVar = bindings[variable];
	const jsType = typeof bindingVar;
	if(jsType === "object") {
		return(VtlParser.DATASET)
	} else {
		return(types[jsType])
	}
}

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
				type: typeResolver(variable, this.bindings)
			};
		}
	};
}

export default VariableVisitor;
