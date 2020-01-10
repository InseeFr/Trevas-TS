import { VtlParser } from '../../antlr-tools';

export const getTokenName = type => {
	const name = Object.entries(VtlParser).find(t => t[1] === type);
	return name ? name[0] : '[unknown]';
};
