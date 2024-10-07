import { Parser as VtlParser, Visitor as VtlVisitor } from "@making-sense/vtl-2-1-antlr-tools-ts";
import { getCurrentDate } from "utilities";
import { VisitorResult } from "model";

class DateVisitor extends VtlVisitor<VisitorResult> {
    visitCurrentDateAtom = () => ({
        resolve: () => getCurrentDate(),
        type: VtlParser.DATE
    });
}

export default DateVisitor;
