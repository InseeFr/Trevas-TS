import { RecognitionException } from 'antlr4/error';
import { getTokenName } from '../utils/parser';

class IncompatibleTypeError extends RecognitionException {
	constructor(ctx, expected, found) {
		const expectedStr = getTokenName(expected);
		const foundStr = getTokenName(found);
		super({
			message: `incompatible type, required '${expectedStr}' but found '${foundStr}' for then operand`,
			input: ctx.parser.getInputStream(),
			recognizer: ctx.parser,
			ctx,
		});
	}
}

export default IncompatibleTypeError;
