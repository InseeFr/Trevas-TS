import stringHash from 'string-hash';

export { default as SELECTION } from './selection';
export * from './selection';
export { default as CURSOR } from './cursor';
export * from './cursor';
export { default as getSelectionText } from './get-selection-text';

export const hashLines = lines =>
	stringHash(lines.reduce((a, { value }) => `${a}${value}`, ''));
