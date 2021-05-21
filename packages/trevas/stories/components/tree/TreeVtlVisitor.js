import { VtlVisitor } from '@inseefr/vtl-2.0-antlr-tools';

function TreeVtlVisitor(getContext) {
	VtlVisitor.call(this);
	this.getContext = getContext;
	return this;
}

TreeVtlVisitor.prototype = Object.create(VtlVisitor.prototype);
TreeVtlVisitor.prototype.constructor = TreeVtlVisitor;

TreeVtlVisitor.prototype.visitExpr = function (ctx) {
	this.getContext(ctx);
};

export default TreeVtlVisitor;
