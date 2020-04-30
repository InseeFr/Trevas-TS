import { VtlParser } from '../../antlr-tools/vtl-3.0-Istat/parser-vtl';

export const replaceConstantType = (type) => {
	switch (type) {
		case VtlParser.STRING_CONSTANT:
			return VtlParser.STRING;
		case VtlParser.INTEGER_CONSTANT:
			return VtlParser.INTEGER;
		case VtlParser.NUMBER_CONSTANT:
			return VtlParser.NUMBER;
		case VtlParser.BOOLEAN_CONSTANT:
			return VtlParser.BOOLEAN;
		case VtlParser.DATE_FORMAT:
			return VtlParser.DATE;
		case VtlParser.NULL_CONSTANT:
			return VtlParser.NULL_CONSTANT;
		default:
			return type;
	}
};
