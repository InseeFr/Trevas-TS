import { Parser as VtlParser } from "@making-sense/vtl-2-0-antlr-tools-ts";
import interpret from "../../../interpretor";

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
            expect(() => {
                interpret("ds1 + ds2", { ds1, ds2, "$vtl.engine.processing_engine_names": "wasm" });
            }).toThrow();
        });
    });
});
