import { VtlParser } from "@making-sense/vtl-2-1-antlr-tools-ts";
import interpret from "../../../interpretor";

const ELEMENTS = {
    dataStructure: [{ name: "col_1", type: VtlParser.STRING, role: VtlParser.MEASURE }],
    dataPoints: [["B", "C", "D"]]
};

describe("conditional", () => {
    it("supports in with null", () => {
        expect(() => interpret('"A" in null', {})).toThrow(Error);
        expect(interpret("null in ELEMENTS", { ELEMENTS })).toBeNull();
    });
    it("supports in", () => {
        expect(interpret('"A" in ELEMENTS', { ELEMENTS })).toBeFalsy();
    });
    it("supports not_in", () => {
        expect(interpret('"A" not_in ELEMENTS', { ELEMENTS })).toBeTruthy();
    });
});
