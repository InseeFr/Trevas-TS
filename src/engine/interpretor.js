import antlr4 from 'antlr4';
import {ErrorListener} from 'antlr4/error';
import {VtlLexer, VtlParser} from '../antlr-tools/vtl-3.0-Istat/parser-vtl';
import ExpressionVisitor from './visitors/Expression';
import {getTokenName} from '../engine/utils/parser';

class ErrorCollector extends ErrorListener {
	constructor() {
		super();
		this.errors = [];
	}

	syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
		if (e === null) {
			this.errors.push(new Error(msg));
		} else {
			this.errors.push(e);
		}
	}

	reportAmbiguity(
		recognizer,
		dfa,
		startIndex,
		stopIndex,
		exact,
		ambigAlts,
		configs
	) {
		console.debug(
			`ambiguity ${recognizer}, ${dfa}, ${startIndex}:${stopIndex}, ${exact}, ${ambigAlts}, ${configs}`
		);
	}

	reportAttemptingFullContext(
		recognizer,
		dfa,
		startIndex,
		stopIndex,
		conflictingAlts,
		configs
	) {
		console.debug(
			`full context ${recognizer}, ${dfa}, ${startIndex}:${stopIndex}, ${conflictingAlts}, ${configs}`
		);
	}

	reportContextSensitivity(
		recognizer,
		dfa,
		startIndex,
		stopIndex,
		prediction,
		configs
	) {
		console.debug(
			`context sensitivity ${recognizer}, ${dfa}, ${startIndex}:${stopIndex}, ${prediction}, ${configs}`
		);
	}
}

const errorCheck = (stream, collector) => {
	const lexer = new VtlLexer(stream);
	lexer.removeErrorListeners();
	lexer.addErrorListener(collector);

	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new VtlParser(tokens);
	parser.removeErrorListeners();
	parser.addErrorListener(collector);

	parser.buildParseTrees = true;
	return parser;
};

const interpret = (expr, bindings) => {
	// TODO: expr could be a file as well.
	let inputStream = new antlr4.InputStream(expr);

	let syntaxErrors = new ErrorCollector();
	errorCheck(inputStream, syntaxErrors);
	if (syntaxErrors.errors.length > 0) {
		throw new Error('Syntax errors:' + syntaxErrors.errors);
	}
	inputStream.reset();

	let typeErrors = new ErrorCollector();
	let parser = errorCheck(inputStream, typeErrors);

	const visitor = new ExpressionVisitor(bindings);
	let expression = visitor.visit(parser.expr());

	if (typeErrors.errors.length > 0) {
		throw new Error(
			`Type errors:\n\t ${typeErrors.errors.map(e => e.message).join('\n\t')}`
		);
	}

	return expression.resolve(bindings);
};

// TODO: refactor
export const getType = (expr, bindings) => {
	// TODO: expr could be a file as well.
	let inputStream = new antlr4.InputStream(expr);

	let syntaxErrors = new ErrorCollector();
	errorCheck(inputStream, syntaxErrors);
	if (syntaxErrors.length > 0) {
		throw new Error('Syntax errors:' + syntaxErrors.errors);
	}
	inputStream.reset();

	let typeErrors = new ErrorCollector();
	let parser = errorCheck(inputStream, typeErrors);

	const visitor = new ExpressionVisitor(bindings);
	let expression = visitor.visit(parser.expr());

	if (typeErrors.length > 0) {
		throw new Error('Type errors' + typeErrors.errors);
	}

	return getTokenName(expression.type);
};

export default interpret;
