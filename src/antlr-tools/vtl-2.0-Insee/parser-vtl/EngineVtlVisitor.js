import { default as VtlVisitor } from './VtlVisitor';

function EngineVisitor() {
	VtlVisitor.call(this);
	return this;
}

EngineVisitor.prototype = Object.create(VtlVisitor.prototype);
EngineVisitor.prototype.constructor = EngineVisitor;

EngineVisitor.prototype.visitStart = function(ctx) {
	return this.visitAggrFunctionClause(ctx);
};

export default EngineVisitor;
