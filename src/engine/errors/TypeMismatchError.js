import { RecognitionException } from 'antlr4/error';

class TypeMismatchError extends RecognitionException {
	constructor(ctx, expected, got) {
		super({
			message: `type mismatch, expected ${expected}, got ${got}`,
			input: ctx.parser.getInputStream(),
			recognizer: ctx.parser,
			ctx,
		});
	}
}

export default TypeMismatchError;
