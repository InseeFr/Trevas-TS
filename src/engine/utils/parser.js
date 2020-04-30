import { VtlParser } from '../../antlr-tools/vtl-3.0-Istat/parser-vtl';

export const getTokenName = (type) => {
	const name = Object.entries(VtlParser).find((t) => t[1] === type);
	return name ? name[0] : '[unknown]';
};
