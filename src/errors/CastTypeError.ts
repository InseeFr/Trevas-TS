import { ParserRuleContext, RecognitionException } from "@making-sense/antlr4ng";

class CastTypeError extends RecognitionException {
    constructor(ctx: ParserRuleContext, source: number | undefined, target: number) {
        // TODO: refine access to input & recognizer
        super({
            message: `Can not cast '${source}' into '${target}'`,
            input: null,
            recognizer: null,
            ctx
        });
    }
}

export default CastTypeError;
