import VtlVisitor from '../../antlr-tools/vtl-2.0-Insee/parser-vtl/VtlVisitor';

class LiteralVisitor extends VtlVisitor {
	visitConstantExpr = ctx => {
		console.log(ctx);
	};
}

export default LiteralVisitor;
