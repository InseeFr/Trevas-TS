import interpret from "../../interpretor";

describe("variable", () => {
    it("should recognize types", () => {
        const bindings = {
            aString: "string!",
            anInt: 1234,
            aFloat: 12.34,
            aDataset: { dataStructure: {}, dataPoints: {} },
            aFlawedDataset: { dataStructure: {}, dataPoints: {} },
            nullValue: null
        };
        expect(interpret("aString", bindings)).toEqual("string!");
        expect(interpret("anInt", bindings)).toEqual(1234);
        expect(interpret("aFloat", bindings)).toEqual(12.34);
        expect(interpret("nullValue", bindings)).toBeNull();
        // FIXME how to bubble up the error thrown to the `interpret` function ?
        // expect(interpret('aFlawedDataset', bindings)).toThrow();
    });
});
