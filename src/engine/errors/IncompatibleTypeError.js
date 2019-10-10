import { RecognitionException } from 'antlr4/error';

class IncompatibleTypeError extends RecognitionException {
	constructor(ctx, expected, found) {
		super({
			message: `incompatible type, required '${expected}' but found '${found}'`,
			input: ctx.parser.getInputStream(),
			recognizer: ctx.parser,
			ctx,
		});
	}
}

export default IncompatibleTypeError;
