import interpret from '../../../interpretor';

describe('date-functions', () => {
	describe('current date function', () => {
		it('should return current date', () => {
			expect(interpret('current_date()', {})).toEqual(new Date());
		});
	});
});
