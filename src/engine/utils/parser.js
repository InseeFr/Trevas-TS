import { VtlParser } from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';

export const getTokenName = type =>
	Object.entries(VtlParser).find(t => t[1] === type)[0];
