import { isUnbindedKey } from './key-bind';

describe('key-bind', () => {
	describe('isUnbindedKey', () => {
		it('should return false', () => {
			expect(isUnbindedKey('aaaaaaaaaaaaaaa')).toBeFalsy();
		});
		it('should return true', () => {
			expect(isUnbindedKey('F5')).toBeTruthy();
		});
	});
});
