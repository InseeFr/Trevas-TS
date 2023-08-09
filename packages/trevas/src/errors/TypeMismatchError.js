import { RecognitionException } from 'antlr4';
import { getTokenName } from '../utils';

class TypeMismatchError extends RecognitionException {
	constructor(ctx, expected, got) {
		let expectedStr;
		if (Array.isArray(expected))
			expectedStr = expected.map((t) => getTokenName(t)).join(' or ');
		else expectedStr = getTokenName(expected);
		const gotStr = getTokenName(got);
		super({
			message: `type mismatch, expected ${expectedStr}, got ${gotStr}`,
			input: ctx.parser.getInputStream(),
			recognizer: ctx.parser,
			ctx,
		});
	}
}

export default TypeMismatchError;
