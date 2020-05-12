import getTokens from './get-tokens';
import parse from './parse';

const getTools = (antlrTools) => ({
	getTokens: getTokens(antlrTools),
	parse: parse(antlrTools),
});

export default getTools;
