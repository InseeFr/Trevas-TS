import * as VTL2 from './vtl-2.0';
import * as VTL2Insee from './vtl-2.0-Insee';
import * as VTL3Istat from './vtl-3.0-Istat';
import getTokens from './get-tokens';
import parse from './parse';

const getTools = (grammar) => {
	switch (grammar) {
		case 'vtl-3.0':
			return { getTokens: getTokens(VTL3Istat), parse: parse(VTL3Istat) };
		case 'vtl-2.0':
			return { getTokens: getTokens(VTL2), parse: parse(VTL2) };
		default:
			return { getTokens: getTokens(VTL2Insee), parse: parse(VTL2Insee) };
	}
};

const { VtlVisitor, VtlParser, VtlLexer } = VTL3Istat;

export { VtlVisitor, VtlParser, VtlLexer };
export default getTools;
