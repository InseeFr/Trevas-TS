import interpret from "../../../interpretor";

describe("concatenation", () => {
    it("supports concat with null", () => {
        expect(interpret('null || " " || "Bar"', {})).toEqual("null Bar");
        expect(interpret('"Foo" || " " || null', {})).toEqual("Foo null");
    });
    it("should concat strings", () => {
        expect(interpret('"con" || "cat"', {})).toEqual("concat");
        expect(interpret('"Ad astra" || " " || "per aspera"', {})).toEqual("Ad astra per aspera");
    });
});
