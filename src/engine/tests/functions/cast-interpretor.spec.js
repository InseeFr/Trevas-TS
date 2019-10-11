import interpret from '../interpretor';

describe('interpretor', () => {
	describe('cast', () => {
		describe('integer', () => {
			it('should cast string into number', () => {
				expect(interpret('cast("10.999", number)', {})).toEqual(10.999);
			});
			it('should cast string into integer', () => {
				expect(interpret('cast("10", integer)', {})).toEqual(10);
			});
			it('should cast number into string', () => {
				expect(interpret('cast(10.5, string)', {})).toEqual('10.5');
			});
			it('should cast string into date', () => {
				expect(interpret('cast("1998-07-12", date, "YYYY-MM-DD")', {})).toEqual(
					new Date('1998-07-12')
				);
				expect(interpret('cast("1998-12-07", date, "YYYY-DD-MM")', {})).toEqual(
					new Date('1998-07-12')
				);
			});
		});
		describe('number', () => {});
		describe('boolean', () => {});
		describe('time', () => {});
		describe('date', () => {});
		describe('time_period', () => {});
		describe('string', () => {});
		describe('duration', () => {});
	});
});
