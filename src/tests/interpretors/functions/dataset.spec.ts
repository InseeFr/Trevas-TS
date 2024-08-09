import { VtlParser } from "@making-sense/vtl-2-0-antlr-tools-ts";
import interpret from "../../../interpretor";

describe("dataset-functions", () => {
    const dsWithNull = {
        dataStructure: [{ name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
        dataPoints: [[1], [2], [null]]
    };
    const dsResWithNull = {
        dataStructure: [{ name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
        dataPoints: [null]
    };

    it.skip("should count observations in a dataset", () => {
        const ds = {
            dataStructure: [{ name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
            dataPoints: [[1], [2], [3]]
        };
        const dsRes = {
            dataStructure: [{ name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
            dataPoints: [[3]]
        };
        expect(interpret("count(dsWithNull)", { dsWithNull })).toEqual(dsRes);
        expect(interpret("count(ds)", { ds })).toEqual(dsRes);
    });
    it("should return first value of a dataset", () => {
        const ds = {
            dataStructure: [{ name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
            dataPoints: [[1], [2], [3]]
        };
        const dsRes = {
            dataStructure: [{ name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
            dataPoints: [[1]]
        };
        expect(interpret("first_value(dsWithNull over())", { dsWithNull })).toEqual(dsRes);
        expect(interpret("first_value(ds over())", { ds })).toEqual(dsRes);
    });
    it("should return last value of a dataset", () => {
        const dsRes0 = {
            dataStructure: [{ name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
            dataPoints: [[null]]
        };
        const ds = {
            dataStructure: [
                { name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE },
                { name: "col2", type: VtlParser.STRING, role: VtlParser.MEASURE }
            ],
            dataPoints: [
                [1, "ko"],
                [null, "ok"]
            ]
        };
        const dsRes = {
            dataStructure: [
                { name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE },
                { name: "col2", type: VtlParser.STRING, role: VtlParser.MEASURE }
            ],
            dataPoints: [[null, "ok"]]
        };
        expect(interpret("last_value(dsWithNull over())", { dsWithNull })).toEqual(dsRes0);
        expect(interpret("last_value(ds over())", { ds })).toEqual(dsRes);
    });
    it.skip("should return simple sum over dataset", () => {
        const ds = {
            dataStructure: [
                { name: "id1", type: VtlParser.INTEGER, role: VtlParser.IDENTIFIER },
                { name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }
            ],
            dataPoints: [
                [1, 10],
                [1, 20],
                [2, 30]
            ]
        };
        const dsRes = {
            dataStructure: [
                { name: "id1", type: VtlParser.INTEGER, role: VtlParser.IDENTIFIER },
                { name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }
            ],
            dataPoints: [
                [1, 30],
                [2, 30]
            ]
        };
        expect(interpret("sum(dsWithNull)", { dsWithNull })).toEqual(dsResWithNull);
        //expect(interpret("sum(ds)", { ds })).toEqual(dsRes);
    });
    it.skip("should return simple median over dataset", () => {
        const ds = {
            dataStructure: { col1: {} },
            dataPoints: { col1: [3, 10, 7] }
        };
        const dsRes = {
            dataStructure: { col1: {} },
            dataPoints: { col1: 7 }
        };
        const ds3 = {
            dataStructure: { col2: {} },
            dataPoints: { col2: [2, 4] }
        };
        const ds3Res = {
            dataStructure: { col2: {} },
            dataPoints: { col2: 3 }
        };
        expect(interpret("median(dsWithNull)", { dsWithNull })).toEqual(dsResWithNull);
        expect(interpret("median(ds)", { ds })).toEqual(dsRes);
        expect(interpret("median(ds3)", { ds3 })).toEqual(ds3Res);
    });
    it.skip("should return simple average over dataset", () => {
        const ds = {
            dataStructure: { col1: {}, col2: {} },
            dataPoints: { col1: [3, 5, 7], col2: [2, 4, 15] }
        };
        const dsRes = {
            dataStructure: { col1: {}, col2: {} },
            dataPoints: { col1: 5, col2: 7 }
        };
        expect(interpret("avg(dsWithNull)", { dsWithNull })).toEqual(dsResWithNull);
        expect(interpret("avg(ds)", { ds })).toEqual(dsRes);
    });
    it.skip("should return simple standard deviation over dataset", () => {
        const ds = {
            dataStructure: { col2: {} },
            dataPoints: { col2: [2, 4] }
        };
        const dsRes = {
            dataStructure: { col2: {} },
            dataPoints: { col2: 1 }
        };
        expect(interpret("stddev_pop(dsWithNull)", { dsWithNull })).toEqual(dsResWithNull);
        expect(interpret("stddev_pop(ds)", { ds })).toEqual(dsRes);
    });
    it.skip("should return simple sample deviation over dataset", () => {
        const ds = {
            dataStructure: { col1: {} },
            dataPoints: { col1: [3, 5, 7] }
        };
        const dsRes = {
            dataStructure: { col1: {} },
            dataPoints: { col1: 2 }
        };
        expect(interpret("stddev_samp(dsWithNull)", { dsWithNull })).toEqual(dsResWithNull);
        expect(interpret("stddev_samp(ds)", { ds })).toEqual(dsRes);
    });
    it.skip("should return simple variance over dataset", () => {
        const ds = {
            dataStructure: { col2: {} },
            dataPoints: { col2: [2, 4] }
        };
        const dsRes = {
            dataStructure: { col2: {} },
            dataPoints: { col2: 1 }
        };
        expect(interpret("var_pop(dsWithNull)", { dsWithNull })).toEqual(dsResWithNull);
        expect(interpret("var_pop(ds)", { ds })).toEqual(dsRes);
    });
    it.skip("should return simple sample variance over dataset", () => {
        const ds = {
            dataStructure: { col1: {} },
            dataPoints: { col1: [3, 5, 7] }
        };
        const dsRes = {
            dataStructure: { col1: {} },
            dataPoints: { col1: 4 }
        };
        expect(interpret("var_samp(dsWithNull)", { dsWithNull })).toEqual(dsResWithNull);
        expect(interpret("var_samp(ds)", { ds })).toEqual(dsRes);
    });
    it.skip("should return simple min over dataset", () => {
        const ds = {
            dataStructure: { col1: {}, col2: {} },
            dataPoints: { col1: [1, 2, 3], col2: [10, 20, 30] }
        };
        const dsRes = {
            dataStructure: { col1: {}, col2: {} },
            dataPoints: { col1: 1, col2: 10 }
        };
        expect(interpret("min(dsWithNull)", { dsWithNull })).toEqual(dsResWithNull);
        expect(interpret("min(ds)", { ds })).toEqual(dsRes);
    });
    it.skip("should return simple max over dataset", () => {
        const ds = {
            dataStructure: { col1: {}, col2: {} },
            dataPoints: { col1: [1, 2, 3], col2: [10, 20, 30] }
        };
        const dsRes = {
            dataStructure: { col1: {}, col2: {} },
            dataPoints: { col1: 3, col2: 30 }
        };
        expect(interpret("max(dsWithNull)", { dsWithNull })).toEqual(dsResWithNull);
        expect(interpret("max(ds)", { ds })).toEqual(dsRes);
    });
});
