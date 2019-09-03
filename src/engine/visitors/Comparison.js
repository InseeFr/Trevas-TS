import {VtlParser, VtlVisitor,} from '../../antlr-tools/vtl-2.0-Insee/parser-vtl';

class ComparisonVisitor extends VtlVisitor {
    constructor(exprVisitor) {
        super();
        this.exprVisitor = exprVisitor;
    }

    visitComparisonExpr = ctx => {
        const {left, right, op} = ctx;
        const leftOperand = this.exprVisitor.visit(left);
        const rightOperand = this.exprVisitor.visit(right);

        if (leftOperand.type !== rightOperand.type) {
            throw new Error(`cannot compare ${leftOperand.type} with ${rightOperand.type}`);
        }

        let operatorFunction;
        switch (op.children[0].symbol.type) {
            case VtlParser.MT:
                operatorFunction = (left, right) => left > right;
                break;
            case VtlParser.LT:
                operatorFunction = (left, right) => left < right;
                break;
            case VtlParser.ME:
                operatorFunction = (left, right) => left >= right;
                break;
            case VtlParser.LE:
                operatorFunction = (left, right) => left <= right;
                break;
            case VtlParser.EQ:
                operatorFunction = (left, right) => left === right;
                break;
            case VtlParser.NEQ:
                operatorFunction = (left, right) => left !== right;
                break;
            default:
                throw new Error('Unsupported operator ' + op.getText())
        }

        return {
            resolve: bindings =>
                operatorFunction(
                    leftOperand.resolve(bindings),
                    rightOperand.resolve(bindings)
                ),
            type: VtlParser.BOOLEAN_CONSTANT,
        };
    };
}

export default ComparisonVisitor;
