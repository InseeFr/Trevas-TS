import { VtlParser } from '../../antlr-tools';

export const getTokenName = type =>
	Object.entries(VtlParser).find(t => t[1] === type)[0];
