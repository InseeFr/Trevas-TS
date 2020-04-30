import {
	VtlParser,
	VtlVisitor,
} from '../../../antlr-tools/vtl-3.0-Istat/parser-vtl';
import { getCurrentDate } from '../../utils/dates';

class DateVisitor extends VtlVisitor {
	constructor() {
		super();
	}

	visitCurrentDateAtom = (ctx) => ({
		resolve: () => getCurrentDate(),
		type: VtlParser.DATE,
	});
}

export default DateVisitor;
