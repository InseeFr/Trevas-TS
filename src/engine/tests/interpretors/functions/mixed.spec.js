import interpret from 'engine/interpretor';
import moment from 'moment';

describe('interpretor', () => {
	describe('tests on mixed functions', () => {
		it('double cast on dates', () => {
			const expression = `cast(cast(current_date(), string, "YYYY-MM-DD"), date) = cast("${moment().format(
				'YYYY-MM-DD'
			)}", date)`;
			expect(interpret(expression, {})).toBeTruthy();
		});
	});
});
