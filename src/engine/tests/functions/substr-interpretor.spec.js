import interpret from 'engine/interpretor';
import TypeMismatchError from 'engine/errors/TypeMismatchError';

describe('interpretor', () => {
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
	describe('trim', () => {
		it('should trim string', () => {
			expect(interpret('trim(" before")', {})).toEqual('before');
			expect(interpret('trim("after ")', {})).toEqual('after');
			expect(interpret('trim("none")', {})).toEqual('none');
		});
		it('should fail with type validation', () => {
			expect(() => interpret('trim(1234, 4, 2)', {})).toThrow(
				TypeMismatchError
			);
		});
	});
	describe('ltrim', () => {
		it('should trim string', () => {
			expect(interpret('ltrim(" before")', {})).toEqual('before');
			expect(interpret('ltrim("after ")', {})).toEqual('after ');
			expect(interpret('ltrim("none")', {})).toEqual('none');
		});
		it('should fail with type validation', () => {
			expect(() => interpret('ltrim(1234, 4, 2)', {})).toThrow(
				TypeMismatchError
			);
		});
	});
	describe('rtrim', () => {
		it('should trim string', () => {
			expect(interpret('rtrim(" before")', {})).toEqual(' before');
			expect(interpret('rtrim("after ")', {})).toEqual('after');
			expect(interpret('rtrim("none")', {})).toEqual('none');
		});
		it('should fail with type validation', () => {
			expect(() => interpret('rtrim(1234, 4, 2)', {})).toThrow(
				TypeMismatchError
			);
		});
	});
	describe('upper', () => {
		it('should upper string', () => {
			expect(interpret('upper("AaBbCc 123456789 __")', {})).toEqual(
				'AABBCC 123456789 __'
			);
		});
		it('should fail with type validation', () => {
			expect(() => interpret('upper(1234)', {})).toThrow(TypeMismatchError);
		});
	});
	describe('lower', () => {
		it('should lower string', () => {
			expect(interpret('lower("AaBbCc 123456789 __")', {})).toEqual(
				'aabbcc 123456789 __'
			);
		});
		it('should fail with type validation', () => {
			expect(() => interpret('lower(1234)', {})).toThrow(TypeMismatchError);
		});
	});
});
