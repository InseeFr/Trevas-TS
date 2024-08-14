import interpret from "../../../../interpretor";

describe("date-functions", () => {
    describe("current date function", () => {
        it("should return current date", () => {
            expect(interpret("current_date()", {}).toString().substring(0, 10)).toEqual(
                new Date().toString().substring(0, 10)
            );
        });
    });
});
