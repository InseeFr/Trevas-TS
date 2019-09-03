import interpret from '../interpretor';

describe('interpretor', () => {
	describe('interpret', () => {
		it('true and true should be true', () => {
			expect(interpret('true and true', {})).toEqual(true);
		});
		it('true and false should be false', () => {
			expect(interpret('true and false', {})).toEqual(false);
		});
		it('not (true) should be false', () => {
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
