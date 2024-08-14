import { Dataset } from "model/vtl";
import interpret, { interpretVar } from "../../../../interpretor";
import { CastTypeError } from "errors";

describe("cast", () => {
    describe("null", () => {
        it("cast null into integer", () => {
            expect(interpret("cast(null, integer)", {})).toBeNull();
        });
        it("cast null into number", () => {
            expect(interpret("cast(null, number)", {})).toBeNull();
        });
        it("cast null into string", () => {
            expect(interpret("cast(null, string)", {})).toBeNull();
        });
        it("cast null into boolean", () => {
            expect(interpret("cast(null, boolean)", {})).toBeNull();
        });
        it("cast null into date", () => {
            expect(interpret("cast(null, date)", {})).toBeNull();
        });
        it("cast null into time_period", () => {
            expect(interpret("cast(null, time_period)", {})).toBeNull();
        });
        it("cast null into duration", () => {
            expect(interpret("cast(null, duration)", {})).toBeNull();
        });
    });
    describe("integer", () => {
        it("cast integer into integer", () => {
            expect(interpret("cast(10, integer)", {})).toEqual(10);
        });
        it("cast integer into number", () => {
            expect(interpret("cast(-10, number)", {})).toEqual(-10);
        });
        it("cast integer into boolean", () => {
            expect(interpret("cast(0, boolean)", {})).toBeFalsy();
            expect(interpret("cast(10, boolean)", {})).toBeTruthy();
        });
        // it('cast integer into time', () => {
        // 	expect(() => interpret('cast(10, time)', {})).toThrow(CastTypeError);
        // });
        it("cast integer into date", () => {
            expect(() => interpret("cast(10, date)", {})).toThrow(CastTypeError);
        });
        it("cast integer into time_period", () => {
            expect(() => interpret("cast(10, time_period)", {})).toThrow(CastTypeError);
        });
        it("cast integer into string", () => {
            expect(interpret("cast(-10, string)", {})).toEqual("-10");
        });
        it("cast integer into duration", () => {
            expect(() => interpret("cast(10, duration)", {})).toThrow(CastTypeError);
        });
    });
    describe("number", () => {
        it("cast number into integer", () => {
            expect(interpret("cast(-10, integer)", {})).toEqual(-10);
            expect(() => interpret("cast(10.5, integer)", {})).toThrow(CastTypeError);
        });
        it("cast number into number", () => {
            expect(interpret("cast(10.5, number)", {})).toEqual(10.5);
            // expect(interpret('cast(-10.5, number)', {})).toEqual(-10.5);
        });
        it("cast number into boolean", () => {
            expect(interpret("cast(0, boolean)", {})).toBeFalsy();
            expect(interpret("cast(10.5, boolean)", {})).toBeTruthy();
        });
        // it('cast number into time', () => {
        // 	expect(() => interpret('cast(10.5, time)', {})).toThrow(CastTypeError);
        // });
        it("cast number into date", () => {
            expect(() => interpret("cast(10.5, date)", {})).toThrow(CastTypeError);
        });
        it("cast number into time_period", () => {
            expect(() => interpret("cast(10.5, time_period)", {})).toThrow(CastTypeError);
        });
        it("cast number into string", () => {
            expect(interpret("cast(10.5, string)", {})).toEqual("10.5");
            // expect(interpret('cast(-10.5, string)', {})).toEqual('-10.5');
        });
        it("cast number into duration", () => {
            expect(() => interpret("cast(10.5, duration)", {})).toThrow(CastTypeError);
        });
    });
    describe("boolean", () => {
        it("cast boolean into integer", () => {
            expect(interpret("cast(false, integer)", {})).toEqual(0);
            expect(interpret("cast(true, integer)", {})).toEqual(1);
        });
        it("cast boolean into number", () => {
            expect(interpret("cast(false, number)", {})).toEqual(0);
            expect(interpret("cast(true, number)", {})).toEqual(1);
        });
        it("cast boolean into boolean", () => {
            expect(interpret("cast(false, boolean)", {})).toBeFalsy();
            expect(interpret("cast(true, boolean)", {})).toBeTruthy();
        });
        // it('cast boolean into time', () => {
        // 	expect(() => interpret('cast(true, time)', {})).toThrow(CastTypeError);
        // });
        it("cast boolean into date", () => {
            expect(() => interpret("cast(true, date)", {})).toThrow(CastTypeError);
        });
        it("cast boolean into time_period", () => {
            expect(() => interpret("cast(true, time_period)", {})).toThrow(CastTypeError);
        });
        it("cast boolean into string", () => {
            expect(interpret("cast(false, string)", {})).toEqual("false");
            expect(interpret("cast(true, string)", {})).toEqual("true");
        });
        it("cast boolean into duration", () => {
            expect(() => interpret("cast(true, duration)", {})).toThrow(CastTypeError);
        });
    });
    describe("time", () => {
        it("cast time into integer", () => {});
        it("cast time into number", () => {});
        it("cast time into boolean", () => {});
        it("cast time into time", () => {});
        it("cast time into date", () => {});
        it("cast time into time_period", () => {});
        it("cast time into string", () => {});
        it("cast time into duration", () => {});
    });
    describe("date", () => {
        // There's no date literal. We use a first cast to define the date.
        const aDate = interpretVar('cast("1998-07-12", date, "YYYY-MM-DD")', {}).resolve({});
        it("cast date into integer", () => {});
        it("cast date into number", () => {});
        it("cast date into boolean", () => {});
        it("cast date into time", () => {});
        it("cast date into date", () => {
            expect(interpret('cast(aDate, date, "YYYY-MM")', { aDate })).toEqual("1998-07");
        });
        it("cast date into time_period", () => {});
        it("cast date into string", () => {
            expect(interpret('cast(aDate, string, "YYYY-MM-DD")', { aDate })).toEqual("1998-07-12");
        });
        it("cast date into string", () => {
            // TO FIX into Literal Visitor
            // expect(interpret('cast(1998-12-31, string, "YYYY-MM-DD")', {})).toEqual(
            // 	'1998-12-31'
            // );
        });
        it("cast date into duration", () => {});
    });
    describe("time_period", () => {
        it("cast time_period into integer", () => {});
        it("cast time_period into number", () => {});
        it("cast time_period into boolean", () => {});
        it("cast time_period into time", () => {});
        it("cast time_period into date", () => {});
        it("cast time_period into time_period", () => {});
        it("cast time_period into string", () => {});
        it("cast time_period into duration", () => {});
    });
    describe("string", () => {
        it("cast string into integer", () => {
            expect(interpret('cast("-10", integer)', {})).toEqual(-10);
            expect(() => interpret('cast("test", integer)', {})).toThrow(CastTypeError);
        });
        it("cast string into number", () => {
            expect(interpret('cast("10.999", number)', {})).toEqual(10.999);
            expect(() => interpret('cast("test", number)', {})).toThrow(CastTypeError);
        });
        it("cast string into boolean", () => {
            expect(() => interpret('cast("test", boolean)', {})).toThrow(CastTypeError);
        });
        it("cast string into time", () => {});
        it("should cast string into date", () => {
            expect(interpret('cast("1998-07-12", date, "YYYY-MM-DD")', {})).toEqual("1998-07-12");
            expect(interpret('cast("1998-12-07", date, "YYYY-DD-MM")', {})).toEqual("1998-07-12");
        });
        it("cast string into time_period", () => {});
        it("cast string into string", () => {
            expect(interpret('cast("aaa", string)', {})).toEqual("aaa");
        });
        it("cast string into duration", () => {});
        const dsI = {
            dataStructure: { col_1: {}, col_2: {} },
            dataPoints: { col_1: ["1", "2", "3"], col_2: ["-1", null, null] }
        };
        const dsResI = {
            dataStructure: { col_1: {}, col_2: {} },
            dataPoints: { col_1: [1, 2, 3], col_2: [-1, null, null] }
        };
        it("cast string dataset into integer dataset", () => {
            expect(interpret("cast(dsI, integer)", { dsI })).toEqual(dsResI);
        });
        const dsN: Dataset = {
            dataStructure: { "col_1": {} },
            dataPoints: { col_1: ["1", null, "3.3"] }
        };
        const dsResN = {
            dataStructure: { col_1: {} },
            dataPoints: { col_1: [1, null, 3.3] }
        };
        it("cast string dataset into number dataset", () => {
            expect(interpret("cast(dsN, number)", { dsN })).toEqual(dsResN);
        });
    });
    describe("duration", () => {
        it("cast duration into integer", () => {});
        it("cast duration into number", () => {});
        it("cast duration into boolean", () => {});
        it("cast duration into time", () => {});
        it("cast duration into date", () => {});
        it("cast duration into time_period", () => {});
        it("cast duration into string", () => {});
        it("cast duration into duration", () => {});
    });
});
