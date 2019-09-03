import interpret from '../interpretor';

describe('interpretor', () => {
	describe('interpret', () => {
		it('should concat strings', () => {
			expect(interpret('"con" || "cat"', {})).toEqual("concat");
		});
	});
	describe('substr', () => {
		it('should substr string', () => {
			expect(interpret('substr("123456789", 4, 2)', {})).toEqual("56");
		});
	});
});
