import { getType } from "../../interpretor";

describe("type", () => {
    describe("string", () => {
        it("test basic string type", () => {
            expect(getType('"I am a string"', {})).toEqual("STRING");
        });
    });
});
