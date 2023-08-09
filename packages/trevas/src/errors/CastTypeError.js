import { RecognitionException } from 'antlr4';

class CastTypeError extends RecognitionException {
	constructor(ctx, source, target) {
		super({
			message: `Can not cast '${source}' into '${target}'`,
			input: ctx.parser.getInputStream(),
			recognizer: ctx.parser,
			ctx,
		});
	}
}

export default CastTypeError;
