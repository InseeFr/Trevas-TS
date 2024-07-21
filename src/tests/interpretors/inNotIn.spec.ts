import interpret from "../../interpretor";

const ELEMENTS = {
    dataStructure: { col_1: {} },
    dataPoints: { col_1: ["B", "C", "D"] }
};

describe("conditional", () => {
    it("supports in with null", () => {
        expect(() => interpret('"A" in null')).toThrow(Error);
        expect(interpret("null in ELEMENTS", { ELEMENTS })).toBeNull();
    });
    it("supports in", () => {
        expect(interpret('"A" in ELEMENTS', { ELEMENTS })).toBeFalsy();
    });
    it("supports not_in", () => {
        expect(interpret('"A" not_in ELEMENTS', { ELEMENTS })).toBeTruthy();
    });
});
