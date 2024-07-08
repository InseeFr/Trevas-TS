import interpret from "../../../interpretor";

describe("dataset-functions", () => {
    const dsWithNull = {
        dataStructure: { col1: {} },
        dataPoints: { col1: [1, 2, null] }
    };
    const dsResWithNull = {
        dataStructure: { col1: {} },
        dataPoints: { col1: null }
    };
    const dsEmpty = {
        dataStructure: { col1: {} },
        dataPoints: { col1: [] }
    };
    const dsEmptyWith2Cols = {
        dataStructure: { col1: {}, col2: {} },
        dataPoints: { col1: [], col2: [] }
    };
    const dsResEmpty = {
        dataStructure: { col1: {} },
        dataPoints: { col1: 0 }
    };
    const dsResEmptyWith2Cols = {
        dataStructure: { col1: {}, col2: {} },
        dataPoints: { col1: 0, col2: 0 }
    };
    it("should count observations in a dataset", () => {
        const ds = {
            dataStructure: { col1: {} },
            dataPoints: { col1: [1, 2, 3] }
        };
        const dsRes = {
            dataStructure: { col1: {} },
            dataPoints: { col1: 3 }
        };
        expect(interpret("count(dsWithNull)", { dsWithNull })).toEqual(dsRes);
        expect(interpret("count(ds)", { ds })).toEqual(dsRes);
        expect(interpret("count(dsEmpty)", { dsEmpty })).toEqual(dsResEmpty);
        expect(interpret("count(dsEmptyWith2Cols)", { dsEmptyWith2Cols })).toEqual(dsResEmptyWith2Cols);
    });
    it("should return first value of a dataset", () => {
        const ds = {
            dataStructure: { col1: {} },
            dataPoints: { col1: [1, 2, 3] }
        };
        const dsRes = {
            dataStructure: { col1: {} },
            dataPoints: { col1: 1 }
        };
        expect(interpret("first_value(dsWithNull over())", { dsWithNull })).toEqual(dsRes);
        expect(interpret("first_value(ds over())", { ds })).toEqual(dsRes);
    });
    it("should return last value of a dataset", () => {
        const dsRes0 = {
            dataStructure: { col1: {} },
            dataPoints: { col1: null }
        };
        const ds = {
            dataStructure: { col1: {}, col2: {} },
            dataPoints: { col1: [1, 2, 3], col2: [10, 20, 30] }
        };
        const dsRes = {
            dataStructure: { col1: {}, col2: {} },
            dataPoints: { col1: 3, col2: 30 }
        };
        expect(interpret("last_value(dsWithNull over())", { dsWithNull })).toEqual(dsRes0);
        expect(interpret("last_value(ds over())", { ds })).toEqual(dsRes);
    });
    it("should return simple sum over dataset", () => {
        const ds = {
            dataStructure: { col1: {}, col2: {} },
            dataPoints: { col1: [1, 2, 3], col2: [10, 20, 30] }
        };
        const dsRes = {
            dataStructure: { col1: {}, col2: {} },
            dataPoints: { col1: 6, col2: 60 }
        };
        expect(interpret("sum(dsWithNull)", { dsWithNull })).toEqual(dsResWithNull);
        expect(interpret("sum(ds)", { ds })).toEqual(dsRes);
    });
    it("should return simple median over dataset", () => {
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
    it("should return simple average over dataset", () => {
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
    it("should return simple standard deviation over dataset", () => {
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
    it("should return simple sample deviation over dataset", () => {
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
    it("should return simple variance over dataset", () => {
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
    it("should return simple sample variance over dataset", () => {
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
    it("should return simple min over dataset", () => {
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
    it("should return simple max over dataset", () => {
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
