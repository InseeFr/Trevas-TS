import { transpose } from "utils";

describe("array utils functions", () => {
    it("transpose", () => {
        expect(transpose([])).toEqual([]);
        expect(
            transpose([
                [1, 2],
                [3, 4]
            ])
        ).toEqual([
            [1, 3],
            [2, 4]
        ]);
    });
});
