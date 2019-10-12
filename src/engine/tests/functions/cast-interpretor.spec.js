import interpret from 'engine/interpretor';
import CastTypeError from '../../errors/CastTypeError';

describe('interpretor', () => {
	describe('cast', () => {
		describe('incompatible-input-type', () => {});
		describe('integer', () => {
			it('cast integer into integer', () => {
				expect(interpret('cast(10, integer)', {})).toEqual(10);
			});
			it('cast integer into number', () => {
				expect(interpret('cast(-10, number)', {})).toEqual(-10);
			});
			it('cast integer into boolean', () => {
				expect(interpret('cast(0, boolean)', {})).toBeFalsy();
				expect(interpret('cast(10, boolean)', {})).toBeTruthy();
			});
			// it('cast integer into time', () => {
			// 	expect(() => interpret('cast(10, time)', {})).toThrow(CastTypeError);
			// });
			it('cast integer into date', () => {
				expect(() => interpret('cast(10, date)', {})).toThrow(CastTypeError);
			});
			it('cast integer into time_period', () => {
				expect(() => interpret('cast(10, time_period)', {})).toThrow(
					CastTypeError
				);
			});
			it('cast integer into string', () => {
				expect(interpret('cast(-10, string)', {})).toEqual('-10');
			});
			it('cast integer into duration', () => {
				expect(() => interpret('cast(10, duration)', {})).toThrow(
					CastTypeError
				);
			});
		});
		describe('number', () => {
			it('should cast number into string', () => {
				expect(interpret('cast(10.5, string)', {})).toEqual('10.5');
			});
		});
		describe('boolean', () => {
			it('should not cast boolean into duration', () => {
				expect(() => interpret('cast(true, duration)', {})).toThrow(
					CastTypeError
				);
			});
		});
		describe('time', () => {});
		describe('date', () => {});
		describe('time_period', () => {});
		describe('string', () => {
			it('should cast string into number', () => {
				expect(interpret('cast("10.999", number)', {})).toEqual(10.999);
			});
			it('should cast string into integer', () => {
				expect(interpret('cast("10", integer)', {})).toEqual(10);
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
		describe('duration', () => {});
	});
});
