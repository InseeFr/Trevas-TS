import { ParserRuleContext, RecognitionException } from "@making-sense/antlr4ng";
import { getTokenName } from "utilities";

class IncompatibleTypeError extends RecognitionException {
    constructor(ctx: ParserRuleContext, expected: number | undefined, found: number | undefined) {
        const expectedStr = getTokenName(expected);
        const foundStr = getTokenName(found);
        // TODO: refine access to input & recognizer
        super({
            message: `incompatible type, required '${expectedStr}' but found '${foundStr}' for then operand`,
            input: null,
            recognizer: null,
            ctx
        });
    }
}

export default IncompatibleTypeError;
