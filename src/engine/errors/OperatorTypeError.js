import { RecognitionException } from 'antlr4/error';

class OperatorTypeError extends RecognitionException {
	constructor(ctx, operator, left, right) {
		super({
			message: `operator '${operator}' cannot be applied to '${left}', '${right}'`,
			input: ctx.parser.getInputStream(),
			recognizer: ctx.parser,
			ctx,
		});
	}
}

export default OperatorTypeError;
