import interpret from '../interpretor';

describe('interpretor', () => {
	describe('interpret', () => {
		it('test basic arithmetic operations', () => {
			expect(interpret('1 + 2', {})).toEqual(3);
			expect(interpret('1 - 2', {})).toEqual(-1);
			expect(interpret('3 / 2', {})).toEqual(1.5);
			expect(interpret('5 * 2', {})).toEqual(10);
			expect(interpret('3 + 2.1', {})).toEqual(5.1);
			expect(interpret('1.5 / 2.4', {})).toEqual(0.625);
			expect(interpret('1 + 2 + 3', {})).toEqual(6);
			expect(interpret('1 + 3 - 2', {})).toEqual(2);
			expect(interpret('2 * 3 / 4', {})).toEqual(1.5);
		});
		it('test basic arithmetic operations with parentheses', () => {
			expect(interpret('(1 + 2) * 5', {})).toEqual(15);
			expect(interpret('(1 - 2) + 1', {})).toEqual(0);
		});
		it('precedence problem: 1 - 2 + 1 should be 0, but instead returns -2', () => {
			expect(interpret('1 - 2 + 1', {})).toEqual(0);
		});
		it('precedence: 10 / 2 * 5', () => {
			expect(interpret('10 / 2 * 5', {})).toEqual(25);
		});
		it('dividing by 0 should return infinity', () => {
			expect(interpret('3/0', {})).toEqual(Infinity);
		});
	});
});
