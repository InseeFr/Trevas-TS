import interpret from '../../../interpretor';

describe('interpretor', () => {
	describe('comparison-functions', () => {
		it('should check null', () => {
			expect(interpret('isnull(null)', {})).toBeTruthy();
		});
		it('should check not null', () => {
			expect(interpret('isnull("ko")', {})).toBeFalsy();
			expect(interpret('isnull(1 + 2)', {})).toBeFalsy();
		});
	});
});
