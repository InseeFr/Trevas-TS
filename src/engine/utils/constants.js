import { VtlParser } from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';

export const replaceConstantType = type => {
	switch (type) {
		case VtlParser.STRING_CONSTANT:
			return VtlParser.STRING;
		case VtlParser.INTEGER_CONSTANT:
			return VtlParser.INTEGER;
		case VtlParser.FLOAT_CONSTANT:
			return VtlParser.FLOAT;
		case VtlParser.BOOLEAN_CONSTANT:
			return VtlParser.BOOLEAN;
		case VtlParser.NULL_CONSTANT:
			return VtlParser.NULL_CONSTANT;
		default:
			return type;
	}
};
