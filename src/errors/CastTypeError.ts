import { RecognitionException } from "@making-sense/antlr4ng";

class CastTypeError extends RecognitionException {
    constructor(ctx: any, source: number | undefined, target: number) {
        super({
            message: `Can not cast '${source}' into '${target}'`,
            input: ctx.parser.getInputStream(),
            recognizer: ctx.parser,
            ctx
        });
    }
}

export default CastTypeError;
