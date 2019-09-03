import interpret from '../interpretor';

describe('interpretor', () => {
	describe('interpret', () => {
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
				interpret('not 1', {})
			}).toThrow();
		});
		it('true and 1 should throw an error', () => {
			expect(() => {
				interpret('true and 1', {})
			}).toThrow();
		});
		it('3 or false should throw an error', () => {
			expect(() => {
				interpret('3 or false', {})
			}).toThrow();
		});
	});
});
