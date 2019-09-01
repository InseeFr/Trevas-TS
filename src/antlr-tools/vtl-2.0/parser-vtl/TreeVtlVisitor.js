import { default as VtlVisitor } from './VtlVisitor';

function TreeVtlVisitor(getContext) {
	VtlVisitor.call(this);
	this.getContext = getContext;
	this.acc = null;
	return this;
}

TreeVtlVisitor.prototype = Object.create(VtlVisitor.prototype);
TreeVtlVisitor.prototype.constructor = TreeVtlVisitor;

TreeVtlVisitor.prototype.visitStart = function(ctx) {
	this.getContext(ctx);
};

export default TreeVtlVisitor;
