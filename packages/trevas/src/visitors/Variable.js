import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.0-antlr-tools';
import { fromDatasetToDataframe } from '../utils';

// TODO: Support integers here.
const types = {
	string: VtlParser.STRING,
	number: VtlParser.NUMBER,
	boolean: VtlParser.BOOLEAN,
};

/** Variable duck typing and type checking */
const typeResolver = (variable, bindings) => {
	const boundVar = bindings[variable];

	if (boundVar === null) return VtlParser.NULL_CONSTANT;

	const jsType = typeof boundVar;

	if (['string', 'number', 'boolean'].includes(jsType)) {
		return types[jsType];
	}
	if (jsType === 'object') {
		const dsKeys = Object.keys(boundVar);
		if (dsKeys.includes('dataStructure', 'dataPoints')) {
			return VtlParser.DATASET;
		}
		throw new Error('The dataset shape is not good.');
	}
	throw new Error('Unrecognized variable type.');
};

/** Variable transformation */
const varTransformer = (variable, bindings) => {
	const type = typeResolver(variable, bindings);
	if (
		[
			VtlParser.NUMBER,
			VtlParser.STRING,
			VtlParser.BOOLEAN,
			VtlParser.NULL_CONSTANT,
		].includes(type)
	) {
		return bindings[variable];
	}
	if (type === VtlParser.DATASET) {
		return fromDatasetToDataframe(bindings[variable]);
	}
	throw new Error(`Cannot transform variable of type ${type}`);
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
		}
		return {
			resolve: (bindings) => varTransformer(variable, bindings),
			type: typeResolver(variable, this.bindings),
		};
	};
}

export default VariableVisitor;
