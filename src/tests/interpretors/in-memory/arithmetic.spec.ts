import { Parser as VtlParser } from "@making-sense/vtl-2-0-antlr-tools-ts";
import interpret from "../../../interpretor";
import TypeMismatchError from "errors/TypeMismatchError";

describe("arithmetic", () => {
    describe("dataset", () => {
        const ds1 = {
            dataStructure: [
                { name: "Id_1", type: VtlParser.INTEGER, role: VtlParser.IDENTIFIER },
                { name: "Id_2", type: VtlParser.STRING, role: VtlParser.IDENTIFIER },
                { name: "Me_1", type: VtlParser.INTEGER, role: VtlParser.MEASURE },
                { name: "Me_2", type: VtlParser.NUMBER, role: VtlParser.MEASURE }
            ],
            dataPoints: [
                [10, "A", 5, 5.0],
                [10, "B", 2, 10.5],
                [11, "A", 3, 12.2],
                [11, "B", 4, 20.3]
            ]
        };
        const ds2 = {
            dataStructure: [
                { name: "Id_1", type: VtlParser.INTEGER, role: VtlParser.IDENTIFIER },
                { name: "Id_2", type: VtlParser.STRING, role: VtlParser.IDENTIFIER },
                { name: "Me_1", type: VtlParser.INTEGER, role: VtlParser.MEASURE },
                { name: "Me_2", type: VtlParser.NUMBER, role: VtlParser.MEASURE }
            ],
            dataPoints: [
                [10, "A", 10, 3.0],
                [10, "C", 11, 6.2],
                [11, "B", 6, 7.0]
            ]
        };

        it("addition with datasets", () => {
            const ds = interpret("ds1 + ds2", { ds1, ds2 });
            expect(ds.dataPoints).toEqual([
                [10, "A", 15, 8],
                [11, "B", 10, 27.3]
            ]);
            expect(ds.dataStructure).toEqual([
                { name: "Id_1", type: VtlParser.INTEGER, role: VtlParser.IDENTIFIER },
                { name: "Id_2", type: VtlParser.STRING, role: VtlParser.IDENTIFIER },
                { name: "Me_1", type: VtlParser.INTEGER, role: VtlParser.MEASURE },
                { name: "Me_2", type: VtlParser.NUMBER, role: VtlParser.MEASURE }
            ]);
        });

        it("addition between dataset and scalar", () => {
            const ds = interpret("ds1 + 2.1", { ds1 });
            const mutedDataStructure = [
                { name: "Id_1", type: VtlParser.INTEGER, role: VtlParser.IDENTIFIER },
                { name: "Id_2", type: VtlParser.STRING, role: VtlParser.IDENTIFIER },
                { name: "Me_1", type: VtlParser.NUMBER, role: VtlParser.MEASURE },
                { name: "Me_2", type: VtlParser.NUMBER, role: VtlParser.MEASURE }
            ];
            expect(ds.dataStructure).toEqual(mutedDataStructure);
            const dsA = interpret("ds1 + 2", { ds1 });
            expect(dsA.dataStructure).toEqual(ds1.dataStructure);
            const dsB = interpret("1.0 + ds1", { ds1 });
            expect(dsB.dataStructure).toEqual(mutedDataStructure);
            const dsC = interpret("2 + ds1", { ds1 });
            expect(dsC.dataStructure).toEqual(ds1.dataStructure);
            const dsD = interpret("ds1 / 1", { ds1 });
            expect(dsD.dataStructure).toEqual(mutedDataStructure);
        });
        function getRandomInt(max: number) {
            return Math.floor(Math.random() * max);
        }
        it.skip("addition with datasets", () => {
            const n = 10000;
            Array.from(Array(10)).forEach((_, i) => {
                const base = Array.from(Array(n * (i + 1))).map(() => [
                    getRandomInt(10000),
                    getRandomInt(10000)
                ]);
                const aA = base.map(b => [...b, getRandomInt(10000)]);
                const bB = base.map(b => [...b, getRandomInt(10000)]);
                const dataStructure = [
                    { name: "Id_1", type: VtlParser.INTEGER, role: VtlParser.IDENTIFIER },
                    { name: "Id_2", type: VtlParser.INTEGER, role: VtlParser.IDENTIFIER },
                    { name: "Me_1", type: VtlParser.INTEGER, role: VtlParser.MEASURE }
                ];
                const a = { dataPoints: aA, dataStructure };
                const b = { dataPoints: bB, dataStructure };
                const markerNameA = "example-marker-a-" + n * (i + 1);
                const markerNameB = "example-marker-b-" + n * (i + 1);
                performance.mark(markerNameA);
                expect(interpret("a + b", { a, b }).dataPoints);
                performance.mark(markerNameB);
                console.log(performance.measure("add DS " + n * (i + 1), markerNameA, markerNameB));
            });
        });
        it("addition with dataset and scalar", () => {
            expect(interpret("ds1 + 3", { ds1 }).dataPoints).toEqual([
                [10, "A", 8, 8.0],
                [10, "B", 5, 13.5],
                [11, "A", 6, 15.2],
                [11, "B", 7, 23.3]
            ]);
        });
        it("addition with dataset and scalar reverted", () => {
            expect(interpret("3 + ds1", { ds1 }).dataPoints).toEqual([
                [10, "A", 8, 8.0],
                [10, "B", 5, 13.5],
                [11, "A", 6, 15.2],
                [11, "B", 7, 23.3]
            ]);
        });
        it("substraction with datasets", () => {
            expect(interpret("ds1 - ds2", { ds1, ds2 }).dataPoints).toEqual([
                [10, "A", -5, 2.0],
                [11, "B", -2, 13.3]
            ]);
        });
        it("substraction with dataset and scalar", () => {
            expect(interpret("ds1 - 3", { ds1 }).dataPoints).toEqual([
                [10, "A", 2, 2.0],
                [10, "B", -1, 7.5],
                [11, "A", 0, 9.2],
                [11, "B", 1, 17.3]
            ]);
        });
    });
    describe("handle null", () => {
        it("supports unary with null", () => {
            expect(interpret("- null", {})).toBeNull();
        });
        it("supports basic arithmetic with null", () => {
            expect(interpret("1 - null", {})).toBeNull();
            expect(interpret("null * 2", {})).toBeNull();
        });
    });
    describe("scalars", () => {
        it("supports unary operations", () => {
            expect(interpret("-(0 - 1)", {})).toEqual(1);
            expect(interpret("+(0 - 1)", {})).toEqual(-1);
            expect(interpret("-(0 - 1.5)", {})).toEqual(1.5);
            expect(interpret("+(0 - 1.5)", {})).toEqual(-1.5);

            expect(interpret("-(0 + 1)", {})).toEqual(-1);
            expect(interpret("+(0 + 1)", {})).toEqual(+1);
            expect(interpret("-(0 + 1.5)", {})).toEqual(-1.5);
            expect(interpret("+(0 + 1.5)", {})).toEqual(+1.5);

            expect(() => interpret('-("not" || "number")', {})).toThrow(TypeMismatchError);
            expect(() => interpret('+("not" || "number")', {})).toThrow(TypeMismatchError);
        });
        it("test basic arithmetic operations", () => {
            expect(interpret("1 + 2", {})).toEqual(3);
            expect(interpret("1 - 2", {})).toEqual(-1);
            expect(interpret("3 / 2", {})).toEqual(1.5);
            expect(interpret("5 * 2", {})).toEqual(10);
            expect(interpret("3 + 2.1", {})).toEqual(5.1);
            expect(interpret("1.5 / 2.4", {})).toEqual(0.625);
            expect(interpret("1 + 2 + 3", {})).toEqual(6);
            expect(interpret("1 + 3 - 2", {})).toEqual(2);
            expect(interpret("2 * 3 / 4", {})).toEqual(1.5);

            expect(() => interpret('1 + "number"', {})).toThrow(TypeMismatchError);
            expect(() => interpret('"number" + 1', {})).toThrow(TypeMismatchError);
            expect(() => interpret('1 - "number"', {})).toThrow(TypeMismatchError);
            expect(() => interpret('"number" - 1', {})).toThrow(TypeMismatchError);
            expect(() => interpret('1 * "number"', {})).toThrow(TypeMismatchError);
            expect(() => interpret('"number" * 1', {})).toThrow(TypeMismatchError);
            expect(() => interpret('1 / "number"', {})).toThrow(TypeMismatchError);
            expect(() => interpret('"number" / 1', {})).toThrow(TypeMismatchError);
        });
        it("test basic arithmetic operations with parentheses", () => {
            expect(interpret("(1 + 2) * 5", {})).toEqual(15);
            expect(interpret("(1 - 2) + 1", {})).toEqual(0);
        });
        it("precedence problem: 1 - 2 + 1 should be 0, but instead returns -2", () => {
            expect(interpret("1 - 2 + 1", {})).toEqual(0);
        });
        it("precedence: 10 / 2 * 5", () => {
            expect(interpret("10 / 2 * 5", {})).toEqual(25);
        });
        it("dividing by 0 should return infinity", () => {
            expect(interpret("3/0", {})).toEqual(Infinity);
        });
        it("handle minus with dates (default result ms)", () => {
            expect(
                interpret('cast(a, date, "YYYY-MM-DD") - cast(b, date, "YYYY-MM-DD")', {
                    a: "1988-03-01",
                    b: "1988-02-28"
                })
            ).toEqual(172800000);
            expect(
                interpret('cast(a, date, "YYYY-MM-DD") - cast(b, date, "YYYY-MM-DD")', {
                    a: "1989-03-01",
                    b: "1989-02-28"
                })
            ).toEqual(86400000);
        });
        it("handle minus with dates (result days)", () => {
            expect(
                interpret(
                    'round((cast(a, date, "YYYY-MM-DD") - cast(b, date, "YYYY-MM-DD")) / 1000 / 3600 /24)',
                    {
                        a: "1988-03-01",
                        b: "1988-02-28"
                    }
                )
            ).toEqual(2);
        });
    });
});
