import { VtlParser, VtlVisitor } from '../../../antlr-tools';
import { getCurrentDate } from '../../utils/dates';

class DateVisitor extends VtlVisitor {
	constructor() {
		super();
	}

	visitCurrentDateAtom = ctx => ({
		resolve: () => getCurrentDate(),
		type: VtlParser.DATE,
	});
}

export default DateVisitor;
