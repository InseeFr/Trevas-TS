import { RecognitionException } from "@making-sense/antlr4ng";
import { getTokenName } from "../utils";

class OperatorTypeError extends RecognitionException {
    constructor(ctx: any, operator: number, left: number | undefined, right: number | undefined) {
        const leftStr = getTokenName(left);
        const rightStr = getTokenName(right);
        super({
            message: `operator '${operator}' cannot be applied to '${leftStr}', '${rightStr}'`,
            input: ctx.parser.getInputStream(),
            recognizer: ctx.parser,
            ctx
        });
    }
}

export default OperatorTypeError;
