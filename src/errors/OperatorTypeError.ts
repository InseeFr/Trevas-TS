import { ParserRuleContext, RecognitionException } from "@making-sense/antlr4ng";
import { getTokenName } from "../utils";

class OperatorTypeError extends RecognitionException {
    constructor(
        ctx: ParserRuleContext,
        operator: number,
        left: number | undefined,
        right: number | undefined
    ) {
        const leftStr = getTokenName(left);
        const rightStr = getTokenName(right);
        // TODO: refine access to input & recognizer
        super({
            message: `operator '${operator}' cannot be applied to '${leftStr}', '${rightStr}'`,
            input: null,
            recognizer: null,
            ctx
        });
    }
}

export default OperatorTypeError;
