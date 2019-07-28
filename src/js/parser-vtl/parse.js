import { VtlParser } from '.';
import { VtlLexer } from '.';
import antlr4 from 'antlr4';
// const old = console.error;
// console.error = function() {
// 	console.log('hoooo !');
// 	return old(...arguments);
// };
const parse = (code) => {
	console.log(code);
	try {
		const chars = new antlr4.InputStream(code);
		const lexer = new VtlLexer(chars);
		const tokens = new antlr4.CommonTokenStream(lexer);
		const parser = new VtlParser(tokens);
		parser.buildParseTrees = true;
		const tree = parser.start();

		console.log(tree);
	} catch (e) {
		// console.log(e);
	}
};

export default parse;
