import {
    BaseErrorListener,
    CharStream,
    CommonTokenStream,
    DFA,
    Parser,
    RecognitionException
} from "@making-sense/antlr4ng";
import { Lexer as VtlLexer, Parser as VtlParser } from "@making-sense/vtl-2-1-antlr-tools-ts";
import ExpressionVisitor from "./visitors/Expression";
import { getTokenName } from "./utilities";
import { VisitorResult } from "model";
import { Bindings } from "model/bindings";

class ErrorCollector extends BaseErrorListener {
    errors: Error[];
    constructor() {
        super();
        this.errors = [];
    }

    syntaxError(_: any, __: any, ___: any, ____: any, msg: string, e: RecognitionException | null) {
        if (e === null) {
            this.errors.push(new Error(msg));
        } else {
            this.errors.push(e);
        }
    }

    reportAmbiguity(_: Parser, __: DFA, startIndex: number, stopIndex: number) {
        console.warn(`ambiguity ${startIndex}:${stopIndex}`);
    }

    reportAttemptingFullContext(_: Parser, __: DFA, startIndex: number, stopIndex: number) {
        console.warn(`full context ${startIndex}:${stopIndex}`);
    }

    reportContextSensitivity(_: Parser, ___: DFA, startIndex: number, stopIndex: number) {
        console.debug(`context sensitivity ${startIndex}:${stopIndex}`);
    }
}

const errorCheck = (stream: CharStream, collector: ErrorCollector) => {
    const lexer = new VtlLexer(stream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(collector);

    const tokens = new CommonTokenStream(lexer);
    const parser = new VtlParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(collector);

    parser.buildParseTrees = true;
    return parser;
};

/**
 * Interpret but do not resolve.
 */
export const interpretVar = (expr: string, vtlBindings: Bindings): VisitorResult => {
    const inputStream = CharStream.fromString(expr);

    const typeErrors = new ErrorCollector();
    const parser = errorCheck(inputStream, typeErrors);

    const visitor = new ExpressionVisitor(vtlBindings);
    const expression = visitor.visit(parser.expr());

    if (expression === null) throw new Error("Null expression");

    if (typeErrors.errors.length > 0) {
        throw new Error(`Type errors:\n\t ${typeErrors.errors}`);
    }

    return {
        type: expression.type,
        resolve: () => {
            const res = expression.resolve(vtlBindings);
            return res;
        }
    };
};

/**
 * Interpret and resolve the value.
 */
const interpret = (expr: string, vtlBindings: Bindings): Bindings =>
    interpretVar(expr, vtlBindings).resolve({});

export const getType = (expr: string, bindings: Bindings): string =>
    getTokenName(interpretVar(expr, bindings).type);

export default interpret;
