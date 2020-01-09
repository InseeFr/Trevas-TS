import { VtlParser, VtlVisitor } from '../../../antlr-tools';
import { getCurrentDate } from '../../utils/dates';

class DateFunctionVisitor extends VtlVisitor {
	constructor() {
		super();
	}

	visitCurrentDateAtom = ctx => ({
		resolve: () => getCurrentDate(),
		type: VtlParser.DATE,
	});
}

export default DateFunctionVisitor;
