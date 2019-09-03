import interpret from '../interpretor';

describe('interpretor', () => {
	describe('interpret', () => {
		it('should preserve numeric literal', () => {
			expect(interpret('11', {})).toEqual(11);
		});
		it('should preserve boolean literal', () => {
			expect(interpret('true', {})).toEqual(true);
		});
		it('should preserve string literal', () => {
			// String between double quotes otherwise interpreted as variable
			expect(interpret('"marvin"', {})).toEqual('marvin');
		});
		it('should preserve empty string literal', () => {
			// String between double quotes otherwise interpreted as variable
			expect(interpret('""', {})).toEqual('');
		});
	});
});
