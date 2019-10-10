import interpret from '../interpretor';
import TypeMismatchError from '../errors/TypeMismatchError';

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
		it('should fail with type validation', () => {
			expect(() => interpret('substr(1234, 4, 2)', {})).toThrow(TypeMismatchError);
			expect(() => interpret('substr("string", "string", 2)', {})).toThrow(TypeMismatchError);
			expect(() => interpret('substr("string", 4, "string")', {})).toThrow(TypeMismatchError);
		});
	});
});
