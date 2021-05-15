import { VtlParser } from '@inseefr/vtl-2.0-antlr-tools';
import { getCurrentDate } from '../../utils';

class DateVisitor {
	constructor() {}

	visitCurrentDateAtom(ctx) {
		return {
			resolve: () => getCurrentDate(),
			type: VtlParser.DATE,
		};
	}
}

export default DateVisitor;
