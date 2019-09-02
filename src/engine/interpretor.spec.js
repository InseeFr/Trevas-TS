import interpret from './interpretor';

describe('interpretor', () => {
	describe('interpret', () => {
		it('should return true', () => {
			expect(interpret('1 + 1', {})).toBeTruthy();
		});
	});
});
