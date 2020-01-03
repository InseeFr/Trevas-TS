import { getType } from '../../interpretor';

describe('type', () => {
	describe('cast', () => {
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
		describe('float', () => {
			it('test cast integer to float', () => {
				expect(getType('cast(1 - 2.5, string)', {})).toEqual('STRING');
			});
		});
	});
});
