import KEY from './key-bind';

describe('key-bind', () => {
	describe('isUnbindedKey', () => {
		it('should return false', () => {
			expect(KEY.isUnbindedKey('aaaaaaaaaaaaaaa')).toBeFalsy();
		});
		it('should return true', () => {
			expect(KEY.isUnbindedKey('F5')).toBeTruthy();
		});
	});
});
