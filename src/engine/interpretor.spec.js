import interpret from './interpretor';

describe('interpretor', () => {
	describe('interpret', () => {
		it('should return true', () => {
			expect(interpret('11', {})).toBeTruthy();
		});
	});
});
