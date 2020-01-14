import interpret from 'engine/interpretor';
import moment from 'moment';

describe('interpretor', () => {
	describe('date functions', () => {
		describe.skip('current date function', () => {
			it('should return current date', () => {
				expect(interpret('current_date()', {})).toEqual(moment.now());
			});
		});
	});
});
