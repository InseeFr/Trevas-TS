import { ParserRuleContext, RecognitionException } from "@making-sense/antlr4ng";
import { getTokenName } from "utilities";

class TypeMismatchError extends RecognitionException {
    constructor(ctx: ParserRuleContext | null, expected: number | number[], got: number | undefined) {
        let expectedStr;
        if (Array.isArray(expected)) expectedStr = expected.map(t => getTokenName(t)).join(" or ");
        else expectedStr = getTokenName(expected);
        const gotStr = getTokenName(got);
        // TODO: refine access to input & recognizer
        super({
            message: `type mismatch, expected ${expectedStr}, got ${gotStr}`,
            input: null,
            recognizer: null,
            ctx
        });
    }
}

export default TypeMismatchError;
