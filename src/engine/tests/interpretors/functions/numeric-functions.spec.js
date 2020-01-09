import interpret from 'engine/interpretor';

describe('interpretor', () => {
	describe('numeric-functions', () => {
		it('should throw an error for abs string', () => {
			expect(() => {
				interpret('abs("test")', {});
			}).toThrow();
		});
		it('should return abs', () => {
			expect(interpret('abs(0)', {})).toEqual(0);
			expect(interpret('abs(10)', {})).toEqual(10);
			expect(interpret('abs(-10)', {})).toEqual(10);
		});
		it('should return abs on floats', () => {
			expect(interpret('abs(0)', {})).toEqual(0);
			expect(interpret('abs(1.1)', {})).toEqual(1.1);
			expect(interpret('abs(-1.1)', {})).toEqual(1.1);
		});
	});
});
