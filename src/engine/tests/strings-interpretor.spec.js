import interpret from '../interpretor';

describe('interpretor', () => {
	describe('interpret', () => {
		it('should concat strings', () => {
			expect(interpret('"con" || "cat"', {})).toEqual("concat");
			expect(interpret('"Ad astra" || " " || "per aspera"', {})).toEqual("Ad astra per aspera");
		});
	});
	describe('substr', () => {
		it('should substr string', () => {
			expect(interpret('substr("123456789", 4, 2)', {})).toEqual("56");
			expect(interpret('substr("123456789", 0, 2)', {})).toEqual("12");
			expect(interpret('substr("123456789", 0, 25)', {})).toEqual("123456789");
		});
	});
});
