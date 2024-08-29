import {
    ArithmeticExprContext,
    ArithmeticExprOrConcatContext,
    ExprContext,
    UnaryExprContext,
    Parser as VtlParser,
    Visitor as VtlVisitor
} from "@making-sense/vtl-2-0-antlr-tools-ts";
import { TypeMismatchError } from "errors";
import {
    validateMeasuresTypes,
    ensureContextAreDefined,
    hasNullArgs,
    hasSameStructure,
    getRenameMeasuresConfig,
    revertObj,
    getComponentType
} from "utilities";
import { Dataset, Param, VisitorResult, Bindings } from "model";
import ExpressionVisitor from "./Expression";
import { DatasetImplementations } from "processing-engine";

const getType = (...args: (VisitorResult | null)[]) => {
    const types = args.map(a => a?.type);
    if (types.includes(VtlParser.NULL_CONSTANT)) return VtlParser.NUMBER;
    if (types.includes(VtlParser.DATE)) return VtlParser.INTEGER;
    return types.includes(VtlParser.NUMBER) ? VtlParser.NUMBER : VtlParser.INTEGER;
};

class ArithmeticVisitor extends VtlVisitor<VisitorResult> {
    exprVisitor: ExpressionVisitor;
    datasetImplementations: DatasetImplementations;
    constructor(exprVisitor: ExpressionVisitor, datasetImplementations: DatasetImplementations) {
        super();
        this.exprVisitor = exprVisitor;
        this.datasetImplementations = datasetImplementations;
    }

    visitUnaryExpr = (ctx: UnaryExprContext) => {
        const { _op: op, _right: right } = ctx;

        ensureContextAreDefined(right);

        const rightExpr = this.exprVisitor.visit(right as ExprContext) as VisitorResult;

        const expectedTypes = [VtlParser.INTEGER, VtlParser.NUMBER, VtlParser.NULL_CONSTANT];

        if (!expectedTypes.includes(rightExpr.type))
            throw new TypeMismatchError(right as ExprContext, expectedTypes, rightExpr.type);

        const type = getType(rightExpr);

        return {
            resolve: (bindings: Bindings) => {
                const value = rightExpr.resolve(bindings);
                if (value === null) return null;
                return op?.type === VtlParser.PLUS ? value : -value;
            },
            type
        };
    };

    visitArithmeticExprOrConcat = (ctx: ArithmeticExprOrConcatContext) => {
        if (ctx._op?.type === VtlParser.CONCAT) {
            throw new Error("Arithmetic visitor got CONCAT context");
        }
        return this.visitArithmeticExpr(ctx as any);
    };

    visitArithmeticExpr = (ctx: ArithmeticExprContext) => {
        const { _left: left, _right: right, _op: op } = ctx;

        ensureContextAreDefined(left, right);

        const leftExpr = this.exprVisitor.visit(left as ExprContext) as VisitorResult;
        const rightExpr = this.exprVisitor.visit(right as ExprContext) as VisitorResult;

        const expectedTypes = [
            VtlParser.INTEGER,
            VtlParser.NUMBER,
            VtlParser.DATASET,
            VtlParser.NULL_CONSTANT,
            VtlParser.DATE
        ];

        if (!expectedTypes.includes(leftExpr.type))
            throw new TypeMismatchError(left as ExprContext, expectedTypes, leftExpr.type);

        if (!expectedTypes.includes(rightExpr.type))
            throw new TypeMismatchError(right as ExprContext, expectedTypes, rightExpr.type);

        let type = getType(leftExpr);
        let forcedType: number | null = null;

        if ([leftExpr.type, rightExpr.type].includes(VtlParser.DATASET)) {
            let operatorFunction: ([left, right]: number[]) => number;
            switch (op?.type) {
                case VtlParser.PLUS:
                    operatorFunction = ([left, right]) => left + right;
                    break;
                case VtlParser.MINUS:
                    operatorFunction = ([left, right]) => left - right;
                    break;
                case VtlParser.MUL:
                    operatorFunction = ([left, right]) => left * right;
                    break;
                case VtlParser.DIV:
                    operatorFunction = ([left, right]) => left / right;
                    forcedType = VtlParser.NUMBER;
                    break;
                default:
                    throw new Error(`unknown operator ${op?.text}`);
            }
            // Improve 2 following blocs with refacto
            if ([VtlParser.INTEGER, VtlParser.NUMBER].includes(rightExpr.type)) {
                return {
                    type: VtlParser.DATASET,
                    resolve: (bindings: Bindings) => {
                        const leftDataset = leftExpr.resolve(bindings) as Dataset;
                        const rightValue = rightExpr.resolve(bindings) as number;
                        if (!validateMeasuresTypes(leftDataset, [VtlParser.INTEGER, VtlParser.NUMBER])) {
                            throw new Error("Measure types have to be INTEGER or NUMBER");
                        }
                        const leftMeasuresConfig = getRenameMeasuresConfig(leftDataset, "_res");
                        const calcConfig = Object.keys(leftMeasuresConfig).map(m => {
                            const params: Param[] = [
                                { type: "COLUMN", value: m },
                                { type: "VALUE", value: rightValue }
                            ];
                            const columnType = getComponentType(leftDataset, m);
                            const crossedType = [rightExpr.type, columnType].includes(VtlParser.NUMBER)
                                ? VtlParser.NUMBER
                                : VtlParser.INTEGER;
                            return {
                                name: leftMeasuresConfig[m],
                                params,
                                operatorFunction,
                                type: forcedType || crossedType
                            };
                        });
                        const calcDs = this.datasetImplementations.executeCalc(leftDataset, calcConfig);
                        // Drop useless measures
                        const measuresToDrop = [...Object.keys(leftMeasuresConfig)];
                        const dropedDs = this.datasetImplementations.executeDrop(calcDs, measuresToDrop);
                        const renamedLeftDs = this.datasetImplementations.executeRename(
                            dropedDs,
                            revertObj(leftMeasuresConfig)
                        );
                        return renamedLeftDs;
                    }
                };
            }
            if ([VtlParser.INTEGER, VtlParser.NUMBER].includes(leftExpr.type)) {
                return {
                    type: VtlParser.DATASET,
                    resolve: (bindings: Bindings) => {
                        const leftValue = leftExpr.resolve(bindings) as number;
                        const rightDataset = rightExpr.resolve(bindings) as Dataset;
                        if (
                            !validateMeasuresTypes(rightDataset, [VtlParser.INTEGER, VtlParser.NUMBER])
                        ) {
                            throw new Error("Measure types have to be INTEGER or NUMBER");
                        }
                        const rightMeasuresConfig = getRenameMeasuresConfig(rightDataset, "_res");
                        const calcConfig = Object.keys(rightMeasuresConfig).map(m => {
                            const params: Param[] = [
                                { type: "COLUMN", value: m },
                                { type: "VALUE", value: leftValue }
                            ];
                            const columnType = getComponentType(rightDataset, m);
                            const crossedType = [leftExpr.type, columnType].includes(VtlParser.NUMBER)
                                ? VtlParser.NUMBER
                                : VtlParser.INTEGER;
                            return {
                                name: rightMeasuresConfig[m],
                                params,
                                operatorFunction,
                                type: forcedType || crossedType
                            };
                        });
                        const calcDs = this.datasetImplementations.executeCalc(rightDataset, calcConfig);
                        // Drop useless measures
                        const measuresToDrop = [...Object.keys(rightMeasuresConfig)];
                        const dropedDs = this.datasetImplementations.executeDrop(calcDs, measuresToDrop);
                        const renamedLeftDs = this.datasetImplementations.executeRename(
                            dropedDs,
                            revertObj(rightMeasuresConfig)
                        );
                        return renamedLeftDs;
                    }
                };
            }
            return {
                type: VtlParser.DATASET,
                resolve: (bindings: Bindings) => {
                    const leftDataset = leftExpr.resolve(bindings) as Dataset;
                    const rightDataset = rightExpr.resolve(bindings) as Dataset;
                    if (!hasSameStructure(leftDataset, rightDataset)) {
                        throw new Error("visitArithmeticExpr requires datasets with same struture");
                    }
                    if (!validateMeasuresTypes(leftDataset, [VtlParser.INTEGER, VtlParser.NUMBER])) {
                        throw new Error("Measure types have to be INTEGER or NUMBER");
                    }
                    // rename input datasets
                    const leftMeasuresConfig = getRenameMeasuresConfig(leftDataset, "#left");
                    const rightMeasuresConfig = getRenameMeasuresConfig(rightDataset, "#right");
                    const renamedLeftDs = this.datasetImplementations.executeRename(
                        leftDataset,
                        leftMeasuresConfig
                    );
                    const renamedRightDs = this.datasetImplementations.executeRename(
                        rightDataset,
                        rightMeasuresConfig
                    );
                    // inner join ds
                    const joinedDs = this.datasetImplementations.executeInnerJoin(
                        renamedLeftDs,
                        renamedRightDs
                    );
                    // apply operatorFunction
                    const calcConfig = Object.keys(leftMeasuresConfig).map(m => {
                        const params: Param[] = [
                            { type: "COLUMN", value: leftMeasuresConfig[m] },
                            { type: "COLUMN", value: rightMeasuresConfig[m] }
                        ];
                        const columnType = getComponentType(leftDataset, m);
                        return { name: m, params, operatorFunction, type: forcedType || columnType };
                    });
                    const calcDs = this.datasetImplementations.executeCalc(joinedDs, calcConfig);
                    // Drop useless measures
                    const measuresToDrop = [
                        ...Object.values(leftMeasuresConfig),
                        ...Object.values(rightMeasuresConfig)
                    ];
                    const res = this.datasetImplementations.executeDrop(calcDs, measuresToDrop);
                    return res;
                }
            };
        }
        let operatorFunction: (left: any, right: any) => any;
        switch (op?.type) {
            case VtlParser.PLUS:
                operatorFunction = (left: any, right: any) => left + right;
                break;
            case VtlParser.MINUS:
                operatorFunction = (left: any, right: any) => left - right;
                break;
            case VtlParser.MUL:
                operatorFunction = (left: any, right: any) => left * right;
                break;
            case VtlParser.DIV:
                operatorFunction = (left: any, right: any) => left / right;
                type = VtlParser.NUMBER;
                break;
            default:
                throw new Error(`unknown operator ${op?.text}`);
        }
        return {
            resolve: (bindings: Bindings) => {
                const leftValue = leftExpr.resolve(bindings);
                const rightValue = rightExpr.resolve(bindings);
                if (hasNullArgs(leftValue, rightValue)) return null;
                if (leftExpr.type === VtlParser.DATE && rightExpr.type === VtlParser.DATE)
                    return operatorFunction(new Date(leftValue), new Date(rightValue));
                return operatorFunction(leftValue, rightValue);
            },
            type
        };
    };
}

export default ArithmeticVisitor;
