import { default as VtlVisitor } from './VtlVisitor';

function EngineVisitor(getContext) {
	VtlVisitor.call(this);
	this.getContext = getContext;
	return this;
}

EngineVisitor.prototype = Object.create(VtlVisitor.prototype);
EngineVisitor.prototype.constructor = EngineVisitor;

EngineVisitor.prototype.visitStart = function(ctx) {
	this.getContext(ctx);
	return this.visitAggrFunctionClause(ctx);
};

export default EngineVisitor;
