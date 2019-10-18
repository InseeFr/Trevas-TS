import { RecognitionException } from 'antlr4/error';
import { getTokenName } from '../utils/parser';

class OperatorTypeError extends RecognitionException {
	constructor(ctx, operator, left, right) {
		const leftStr = getTokenName(left);
		const rightStr = getTokenName(right);
		super({
			message: `operator '${operator}' cannot be applied to '${leftStr}', '${rightStr}'`,
			input: ctx.parser.getInputStream(),
			recognizer: ctx.parser,
			ctx,
		});
	}
}

export default OperatorTypeError;
