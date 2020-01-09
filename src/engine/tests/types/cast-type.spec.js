import { getType } from '../../interpretor';

describe('type', () => {
	describe('cast', () => {
		describe('cast of cast', () => {
			it('should be able to cast casted values', () => {
				expect(getType('cast(cast("123", number), string)', {})).toEqual(
					'STRING'
				);
			});
		})
		describe('integer', () => {
			it('cast integer to integer', () => {
				expect(getType('cast(10, integer)', {})).toEqual('INTEGER');
			});
			it('cast integer to number', () => {
				expect(getType('cast(42, number)', {})).toEqual('NUMBER');
			});
			it('cast integer to boolean', () => {
				expect(getType('cast(0, boolean)', {})).toEqual('BOOLEAN');
				expect(getType('cast(20, boolean)', {})).toEqual('BOOLEAN');
			});
			it('cast integer to integer', () => {
				expect(getType('cast(10, integer)', {})).toEqual('INTEGER');
			});
			it('cast integer to time', () => {
				// TODO
			});
			it('test cast integer to string', () => {
				expect(getType('cast(4 - 1, string)', {})).toEqual('STRING');
			});
		});
		describe('number', () => {
			it('cast number to integer', () => {
				// TODO
			});
			it('cast number to number', () => {
				expect(getType('cast(10.5, number)', {})).toEqual('NUMBER');
			});
			it('cast number to boolean', () => {
				expect(getType('cast(0, boolean)', {})).toEqual('BOOLEAN');
				expect(getType('cast(10.5, boolean)', {})).toEqual('BOOLEAN');
			});
			it('cast number to time', () => {
				// TODO
			});
			it('cast number to date', () => {
				// TODO
			});
			it('cast number to time_period', () => {
				// TODO/*  */
			});
			it('cast number to string', () => {
				expect(getType('cast(10.5, string)', {})).toEqual('STRING');
			});
			it('cast number to duration', () => {
				// TODO
			});
		});
		describe('boolean', () => {
			it('cast boolean to integer', () => {
				expect(getType('cast(false, integer)', {})).toEqual('INTEGER');
				expect(getType('cast(true, integer)', {})).toEqual('INTEGER');
			});
			it('cast boolean to number', () => {
				expect(getType('cast(false, number)', {})).toEqual('NUMBER');
				expect(getType('cast(true, number)', {})).toEqual('NUMBER');
			});
			it('cast boolean into boolean', () => {
				expect(getType('cast(false, boolean)', {})).toEqual('BOOLEAN');
				expect(getType('cast(true, boolean)', {})).toEqual('BOOLEAN');
			});
			it('cast boolean into time', () => {
				// TODO
			});
			it('cast boolean into date', () => {
				// TODO
			});
			it('cast boolean into time_period', () => {
				// TODO
			});
			it('cast boolean into string', () => {
				expect(getType('cast(false, string)', {})).toEqual('STRING');
				expect(getType('cast(true, string)', {})).toEqual('STRING');
			});
			it('cast boolean into duration', () => {
				// TODO
			});
		});
		describe('time', () => {
			// TODO
			it('cast time into integer', () => {});
			it('cast time into number', () => {});
			it('cast time into boolean', () => {});
			it('cast time into time', () => {});
			it('cast time into date', () => {});
			it('cast time into time_period', () => {});
			it('cast time into string', () => {});
			it('cast time into duration', () => {});
		});
		describe('date', () => {
			// TODO Complete tests
			it('cast date into integer', () => {});
			it('cast date into number', () => {});
			it('cast date into boolean', () => {});
			it('cast date into time', () => {});
			it('cast date into date', () => {});
			it('cast date into time_period', () => {});
			it('cast date into string', () => {
				expect(getType('cast(1998-07-12, string, "YYYY-DD-MM")', {})).toEqual(
					'STRING'
				);
			});
			it('cast date into duration', () => {});
		});
		describe('time_period', () => {
			// TODO Complete tests
			it('cast time_period into integer', () => {});
			it('cast time_period into number', () => {});
			it('cast time_period into boolean', () => {});
			it('cast time_period into time', () => {});
			it('cast time_period into date', () => {});
			it('cast time_period into time_period', () => {});
			it('cast time_period into string', () => {});
			it('cast time_period into duration', () => {});
		});
	});
});
