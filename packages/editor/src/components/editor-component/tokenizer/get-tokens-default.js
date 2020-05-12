import { mergeLines } from './tokenizer-tools';

/* */
const getTokensDefault = text => [
	{ start: 0, stop: text.length, value: text, className: 'unmapped' },
];

export default (lines, hash) => {
	const content = mergeLines(lines);
	return Promise.resolve({ tokens: getTokensDefault(content), hash });
};
