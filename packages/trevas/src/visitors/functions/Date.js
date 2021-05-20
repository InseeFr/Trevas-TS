import { VtlParser, VtlVisitor } from '@inseefr/vtl-2.0-antlr-tools';
import { getCurrentDate } from '../../utils';

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
