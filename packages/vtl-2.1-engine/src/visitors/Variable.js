import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.1-antlr-tools';
import { fromDatasetToDataframe } from '../utils';

// TODO: Support integers here.
const types = {
	string: VtlParser.STRING,
	number: VtlParser.NUMBER,
	boolean: VtlParser.BOOLEAN,
};

/** Variable transformation */
const varTransformer = (variable, bindings) => {
	const type = typeResolver(variable, bindings);
	if ([VtlParser.NUMBER, VtlParser.STRING, VtlParser.BOOLEAN].includes(type)) {
		return bindings[variable];
	} else if (type === VtlParser.DATASET) {
		return fromDatasetToDataframe(bindings[variable]);
	} else {
		throw new Error(`Cannot transform variable of type ${type}`);
	}
};

/** Variable duck typing and type checking */
const typeResolver = (variable, bindings) => {
	const boundVar = bindings[variable];
	const jsType = typeof boundVar;

	if (['string', 'number', 'boolean'].includes(jsType)) {
		return types[jsType];
	} else if (jsType === 'object') {
		const dsKeys = Object.keys(boundVar);
		if (dsKeys.includes('dataStructure', 'dataPoints')) {
			return VtlParser.DATASET;
		} else {
			throw new Error('The dataset shape is not good.');
		}
	} else {
		throw new Error('Unrecognized variable type.');
	}
};

class VariableVisitor extends VtlVisitor {
	constructor(bindings) {
		super();
		this.bindings = bindings;
	}
	visitVarIdExpr = (ctx) => {
		const variable = ctx.getText();
		if (this.bindings[variable] && this.bindings[variable].type) {
			return this.bindings[variable];
		} else {
			return {
				resolve: (bindings) => varTransformer(variable, this.bindings),
				type: typeResolver(variable, this.bindings),
			};
		}
	};
}

export default VariableVisitor;
