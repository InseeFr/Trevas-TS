import { RecognitionException } from "@making-sense/antlr4ng";
import { getTokenName } from "../utils";

class IncompatibleTypeError extends RecognitionException {
    constructor(ctx: any, expected: number | undefined, found: number | undefined) {
        const expectedStr = getTokenName(expected);
        const foundStr = getTokenName(found);
        super({
            message: `incompatible type, required '${expectedStr}' but found '${foundStr}' for then operand`,
            input: ctx.parser.getInputStream(),
            recognizer: ctx.parser,
            ctx
        });
    }
}

export default IncompatibleTypeError;
