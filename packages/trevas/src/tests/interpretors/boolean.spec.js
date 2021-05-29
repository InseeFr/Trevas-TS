import interpret from '../../interpretor';
import { transpose } from '../../utils';

describe('boolean', () => {
	describe('supports basic boolean logic with null', () => {
		const A = [false, false, false, true, true, true, null, null, null];
		const B = [false, true, null, false, true, null, false, true, null];
		const AND = [false, false, false, false, true, null, false, null, null];
		const OR = [false, true, null, true, true, true, null, true, null];
		const XOR = [false, true, null, true, false, null, null, null, null];
		test.each(transpose([A, B, AND, OR, XOR]))('', (a, b, and, or, xor) => {
			expect(interpret(`${a} and ${b}`, {})).toEqual(and);
			expect(interpret(`${a} or ${b}`, {})).toEqual(or);
			expect(interpret(`${a} xor ${b}`, {})).toEqual(xor);
		});
		expect(interpret('not null', {})).toBeNull();
		expect(interpret('not (null)', {})).toBeNull();
	});
	it('should respect basic boolean logic', () => {
		expect(interpret('true and true', {})).toEqual(true);
		expect(interpret('true and false', {})).toEqual(false);
		expect(interpret('false and true', {})).toEqual(false);
		expect(interpret('false and false', {})).toEqual(false);
		expect(interpret('true or true', {})).toEqual(true);
		expect(interpret('true or false', {})).toEqual(true);
		expect(interpret('false or true', {})).toEqual(true);
		expect(interpret('false or false', {})).toEqual(false);
		expect(interpret('true xor true', {})).toEqual(false);
		expect(interpret('true xor false', {})).toEqual(true);
		expect(interpret('false xor true', {})).toEqual(true);
		expect(interpret('false xor false', {})).toEqual(false);
		expect(interpret('not true', {})).toEqual(false);
		expect(interpret('not false', {})).toEqual(true);
	});
	it('not (true) with parenthesis should be false', () => {
		expect(interpret('not (true)', {})).toEqual(false);
	});
	it('not 1 should throw an error', () => {
		expect(() => {
			interpret('not 1', {});
		}).toThrow();
	});
	it('true and 1 should throw an error', () => {
		expect(() => {
			interpret('true and 1', {});
		}).toThrow();
	});
	it('3 or false should throw an error', () => {
		expect(() => {
			interpret('3 or false', {});
		}).toThrow();
	});
});
