import { VtlParser, VtlVisitor } from '../../antlr-tools';

// TODO: Support integers here.
const types = {
	string: VtlParser.STRING,
	number: VtlParser.NUMBER,
	boolean: VtlParser.BOOLEAN,
};

const typeResolver = (variable, bindings) => {
	const boundVar = bindings[variable];
	const jsType = typeof boundVar;

	if (['string', 'number', 'boolean'].includes(jsType)) {
		return types[jsType];
	} else if (jsType === 'object') {
		const dsKeys = Object.keys(boundVar);
		console.log(dsKeys)
		if (dsKeys.includes("dataStructure", "dataPoints")) {
			return VtlParser.DATASET;
		} else {
			throw Error('The dataset shape is not good.');
		}
	} else {
		throw Error('Unrecognized variable type.');
	}
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
				type: typeResolver(variable, this.bindings),
			};
		}
	};
}

export default VariableVisitor;
