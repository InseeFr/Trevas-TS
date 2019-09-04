import interpret from '../interpretor';

describe('interpretor', () => {
	describe('interpret', () => {
		it('1 + 1 should be 2', () => {
			expect(interpret('1 + 1', {})).toEqual(2);
		});
		it('1 - 2 + 1 should be 0, but instead returns -2', () => {
			expect(interpret('1 - 2 + 1', {})).toEqual(-2);
		});
	});
});
