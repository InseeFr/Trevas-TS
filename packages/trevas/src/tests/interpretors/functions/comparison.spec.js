import interpret from '../../../interpretor';

describe('comparison-functions', () => {
	it('should check null', () => {
		expect(interpret('isnull(null)', {})).toBeTruthy();
		expect(interpret('isnull(false)', {})).toBeFalsy();
		expect(interpret('isnull(test)', { test: null })).toBeTruthy();
		expect(interpret('between(null, 1, 100)')).toBeNull();
		expect(interpret('between(10, null, 100)')).toBeNull();
		expect(interpret('between(null, 1, 100)')).toBeNull();
	});
	it('should check isnull', () => {
		expect(interpret('isnull("ko")', {})).toBeFalsy();
		expect(interpret('isnull(1 + 2)', {})).toBeFalsy();
	});
	it('should check between', () => {
		expect(interpret('between(10, 1, 100)', {})).toBeTruthy();
		expect(interpret('between(10, 20, 100)', {})).toBeFalsy();
		expect(interpret('between(10.5, 20, 100)', {})).toBeFalsy();
	});
	it('should throw an error for string argument into between function', () => {
		expect(() => {
			interpret('between(10, "ko", 100)', {});
		}).toThrow();
	});
});
