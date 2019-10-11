import interpret from '../interpretor';
import TypeMismatchError from '../errors/TypeMismatchError';

describe('interpretor', () => {
	describe('cast', () => {
		it('should cast string into number', () => {
			expect(interpret('cast("10.999", number)', {})).toEqual(10.999);
		});
		it('should cast string into integer', () => {
			expect(interpret('cast("10", integer)', {})).toEqual(10);
		});
		it('should cast number into string', () => {
			expect(interpret('cast(10.5, string)', {})).toEqual('10.5');
		});
		it('should cast string into date', () => {
			expect(interpret('cast("1998-07-12", date, "YYYY-MM-DD")', {})).toEqual(
				new Date('1998-07-12')
			);
			expect(interpret('cast("1998-12-07", date, "YYYY-DD-MM")', {})).toEqual(
				new Date('1998-07-12')
			);
		});
	});
	describe('concatenation', () => {
		it('should concat strings', () => {
			expect(interpret('"con" || "cat"', {})).toEqual('concat');
			expect(interpret('"Ad astra" || " " || "per aspera"', {})).toEqual(
				'Ad astra per aspera'
			);
		});
	});
	describe('substr', () => {
		it('should substr string', () => {
			expect(interpret('substr("123456789", 4, 2)', {})).toEqual('56');
			expect(interpret('substr("123456789", 0, 2)', {})).toEqual('12');
			expect(interpret('substr("123456789", 0, 25)', {})).toEqual('123456789');
		});
		it('should fail with type validation', () => {
			expect(() => interpret('substr(1234, 4, 2)', {})).toThrow(
				TypeMismatchError
			);
			expect(() => interpret('substr("string", "string", 2)', {})).toThrow(
				TypeMismatchError
			);
			expect(() => interpret('substr("string", 4, "string")', {})).toThrow(
				TypeMismatchError
			);
		});
	});
});
