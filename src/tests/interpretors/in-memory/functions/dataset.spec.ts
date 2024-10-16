import { VtlParser } from "@making-sense/vtl-2-1-antlr-tools-ts";
import interpret from "../../../../interpretor";

describe("dataset-functions", () => {
    const dsWithNull = {
        dataStructure: [{ name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
        dataPoints: [[1], [2], [null]]
    };
    const dsResWithNull = {
        dataStructure: [{ name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
        dataPoints: [[null]]
    };
    const dsResWithNullNumber = {
        dataStructure: [{ name: "col1", type: VtlParser.NUMBER, role: VtlParser.MEASURE }],
        dataPoints: [[null]]
    };

    it("should count observations in a dataset", () => {
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
        const DS_1 = {
            dataStructure: [
                { name: "Id_1", type: VtlParser.STRING, role: VtlParser.IDENTIFIER },
                { name: "Id_2", type: VtlParser.STRING, role: VtlParser.IDENTIFIER },
                { name: "Id_3", type: VtlParser.STRING, role: VtlParser.IDENTIFIER },
                { name: "Me_2", type: VtlParser.STRING, role: VtlParser.MEASURE }
            ],
            dataPoints: [
                ["2011", "A", "XX", "iii"],
                ["2011", "A", "YY", "jjj"],
                ["2011", "B", "YY", "iii"],
                ["2012", "A", "XX", "kkk"],
                ["2012", "B", "YY", "iii"]
            ]
        };
        const DS_1_res = {
            dataStructure: [
                { name: "Id_1", type: VtlParser.STRING, role: VtlParser.IDENTIFIER },
                { name: "Me_2", type: VtlParser.INTEGER, role: VtlParser.MEASURE }
            ],
            dataPoints: [
                ["2011", 3],
                ["2012", 2]
            ]
        };
        expect(interpret("count(DS_1 group by Id_1)", { DS_1 })).toEqual(DS_1_res);
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
    it("should return simple sum over dataset", () => {
        const ds = {
            dataStructure: [
                { name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE },
                { name: "id1", type: VtlParser.INTEGER, role: VtlParser.IDENTIFIER }
            ],
            dataPoints: [
                [10, 1],
                [20, 1],
                [30, 2]
            ]
        };
        const dsRes = {
            dataStructure: [{ name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
            dataPoints: [[60]]
        };
        const dsResGroupBy = {
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
        expect(interpret("sum(ds)", { ds })).toEqual(dsRes);
        expect(interpret("sum(ds group by id1)", { ds })).toEqual(dsResGroupBy);
    });
    it("should return sum over dataset", () => {
        const ds = {
            dataStructure: [
                { name: "Id_1", type: VtlParser.STRING, role: VtlParser.IDENTIFIER },
                { name: "Id_2", type: VtlParser.STRING, role: VtlParser.IDENTIFIER },
                { name: "Me_1", type: VtlParser.INTEGER, role: VtlParser.MEASURE },
                { name: "Id_3", type: VtlParser.STRING, role: VtlParser.IDENTIFIER }
            ],
            dataPoints: [
                ["2011", "A", 3, "XX"],
                ["2011", "A", 5, "YY"],
                ["2011", "B", 7, "YY"],
                ["2012", "A", 2, "XX"],
                ["2012", "B", 4, "YY"]
            ]
        };
        const dsRes = {
            dataStructure: [
                { name: "Id_1", type: VtlParser.STRING, role: VtlParser.IDENTIFIER },
                { name: "Me_1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }
            ],
            dataPoints: [
                ["2011", 15],
                ["2012", 6]
            ]
        };
        expect(interpret("sum(ds group by Id_1)", { ds })).toEqual(dsRes);
    });
    it("should return simple median over dataset", () => {
        const ds = {
            dataStructure: [{ name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
            dataPoints: [[3], [10], [7]]
        };
        const dsRes = {
            dataStructure: [{ name: "col1", type: VtlParser.NUMBER, role: VtlParser.MEASURE }],
            dataPoints: [[7]]
        };
        const ds3 = {
            dataStructure: [{ name: "col2", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
            dataPoints: [[2], [4]]
        };
        const ds3Res = {
            dataStructure: [{ name: "col2", type: VtlParser.NUMBER, role: VtlParser.MEASURE }],
            dataPoints: [[3]]
        };
        expect(interpret("median(dsWithNull)", { dsWithNull })).toEqual(dsResWithNullNumber);
        expect(interpret("median(ds)", { ds })).toEqual(dsRes);
        expect(interpret("median(ds3)", { ds3 })).toEqual(ds3Res);
    });
    it("should return simple average over dataset", () => {
        const ds = {
            dataStructure: [
                { name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE },
                { name: "col2", type: VtlParser.INTEGER, role: VtlParser.MEASURE }
            ],
            dataPoints: [
                [3, 2],
                [5, 4],
                [7, 15]
            ]
        };
        const dsRes = {
            dataStructure: [
                { name: "col1", type: VtlParser.NUMBER, role: VtlParser.MEASURE },
                { name: "col2", type: VtlParser.NUMBER, role: VtlParser.MEASURE }
            ],
            dataPoints: [[5, 7]]
        };
        expect(interpret("avg(dsWithNull)", { dsWithNull })).toEqual(dsResWithNullNumber);
        expect(interpret("avg(ds)", { ds })).toEqual(dsRes);
    });
    it("should return simple standard deviation over dataset", () => {
        const ds = {
            dataStructure: [{ name: "col2", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
            dataPoints: [[2], [4]]
        };
        const dsRes = {
            dataStructure: [{ name: "col2", type: VtlParser.NUMBER, role: VtlParser.MEASURE }],
            dataPoints: [[1]]
        };
        expect(interpret("stddev_pop(dsWithNull)", { dsWithNull })).toEqual(dsResWithNullNumber);
        expect(interpret("stddev_pop(ds)", { ds })).toEqual(dsRes);
    });
    it("should return simple sample deviation over dataset", () => {
        const ds = {
            dataStructure: [{ name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
            dataPoints: [[3], [5], [7]]
        };
        const dsRes = {
            dataStructure: [{ name: "col1", type: VtlParser.NUMBER, role: VtlParser.MEASURE }],
            dataPoints: [[2]]
        };
        expect(interpret("stddev_samp(dsWithNull)", { dsWithNull })).toEqual(dsResWithNullNumber);
        expect(interpret("stddev_samp(ds)", { ds })).toEqual(dsRes);
    });
    it("should return simple variance over dataset", () => {
        const ds = {
            dataStructure: [
                { name: "id", type: VtlParser.STRING, role: VtlParser.IDENTIFIER },
                { name: "col2", type: VtlParser.INTEGER, role: VtlParser.MEASURE }
            ],
            dataPoints: [
                ["A", 2],
                ["A", 4],
                ["B", null],
                ["C", 4]
            ]
        };
        const dsRes = {
            dataStructure: [
                { name: "id", type: VtlParser.STRING, role: VtlParser.IDENTIFIER },
                { name: "col2", type: VtlParser.NUMBER, role: VtlParser.MEASURE }
            ],
            dataPoints: [
                ["A", 1],
                ["B", null],
                ["C", 0]
            ]
        };
        expect(interpret("var_pop(dsWithNull)", { dsWithNull })).toEqual(dsResWithNullNumber);
        expect(interpret("var_pop(ds group by id)", { ds })).toEqual(dsRes);
    });
    it("should return simple sample variance over dataset", () => {
        const ds = {
            dataStructure: [{ name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }],
            dataPoints: [[3], [5], [7]]
        };
        const dsRes = {
            dataStructure: [{ name: "col1", type: VtlParser.NUMBER, role: VtlParser.MEASURE }],
            dataPoints: [[4]]
        };
        expect(interpret("var_samp(dsWithNull)", { dsWithNull })).toEqual(dsResWithNullNumber);
        expect(interpret("var_samp(ds)", { ds })).toEqual(dsRes);
    });
    it("should return simple min over dataset", () => {
        const ds = {
            dataStructure: [
                { name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE },
                { name: "col2", type: VtlParser.INTEGER, role: VtlParser.MEASURE }
            ],
            dataPoints: [
                [1, 10],
                [2, 20],
                [3, 30]
            ]
        };
        const dsRes = {
            dataStructure: [
                { name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE },
                { name: "col2", type: VtlParser.INTEGER, role: VtlParser.MEASURE }
            ],
            dataPoints: [[1, 10]]
        };
        expect(interpret("min(dsWithNull)", { dsWithNull })).toEqual(dsResWithNull);
        expect(interpret("min(ds)", { ds })).toEqual(dsRes);
    });
    it("should return simple max over dataset", () => {
        const ds = {
            dataStructure: [
                { name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE },
                { name: "col2", type: VtlParser.INTEGER, role: VtlParser.MEASURE }
            ],
            dataPoints: [
                [1, 10],
                [2, 20],
                [3, 30]
            ]
        };
        const dsRes = {
            dataStructure: [
                { name: "col1", type: VtlParser.INTEGER, role: VtlParser.MEASURE },
                { name: "col2", type: VtlParser.INTEGER, role: VtlParser.MEASURE }
            ],
            dataPoints: [[3, 30]]
        };
        expect(interpret("max(dsWithNull)", { dsWithNull })).toEqual(dsResWithNull);
        expect(interpret("max(ds)", { ds })).toEqual(dsRes);
    });
});
