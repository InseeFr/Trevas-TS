import interpret from '../../../interpretor';
import TypeMismatchError from '../../../errors/TypeMismatchError';

describe('string-functions', () => {
	describe('supports string functions with null', () => {
		it('supports substr with null', () => {
			expect(interpret('substr(null, 5, 10)', {})).toBeNull();
			expect(
				interpret('substr("abcdefghijklmnopqrstuvwxyz", null, 10)', {})
			).toBeNull();
			expect(
				interpret('substr("abcdefghijklmnopqrstuvwxyz", 5, null)', {})
			).toBeNull();
		});
		it('supports trim with null', () => {
			expect(interpret('trim(null)', {})).toBeNull();
		});
		it('supports rtrim with null', () => {
			expect(interpret('rtrim(null)', {})).toBeNull();
		});
		it('supports ltrim with null', () => {
			expect(interpret('ltrim(null)', {})).toBeNull();
		});
		it('supports upper with null', () => {
			expect(interpret('upper(null)', {})).toBeNull();
		});
		it('supports lower with null', () => {
			expect(interpret('lower(null)', {})).toBeNull();
		});
		it('supports replace with null', () => {
			expect(interpret('replace(null, "Hello", "Hi")', {})).toBeNull();
			expect(interpret('replace("Hello world", null, "Hi")', {})).toBeNull();
			expect(interpret('replace("Hello world", "Hello", null)', {})).toBeNull();
		});
		it('supports inst with null', () => {
			expect(interpret('instr(null, "world")', {})).toBeNull();
			expect(interpret('instr("Hello world", null)', {})).toBeNull();
			expect(interpret('instr("Hello world", "world", null)', {})).toBeNull();
			expect(
				interpret('instr("Hello world", "world", _, null)', {})
			).toBeNull();
		});
		it('supports length with null', () => {
			expect(interpret('length(null)', {})).toBeNull();
		});
	});
	it('should substr string', () => {
		expect(
			interpret('substr("abcdefghijklmnopqrstuvwxyz", 5, 10)', {})
		).toEqual('efghijklmn');
		expect(
			interpret('substr("abcdefghijklmnopqrstuvwxyz", 25 , 10) ', {})
		).toEqual('yz');
		expect(
			interpret('substr("abcdefghijklmnopqrstuvwxyz", 30, 10) ', {})
		).toEqual('');
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
		expect(() => interpret('trim(1234, 4, 2)', {})).toThrow(TypeMismatchError);
	});
});
describe('ltrim', () => {
	it('should ltrim string', () => {
		expect(interpret('ltrim(" before")', {})).toEqual('before');
		expect(interpret('ltrim("after ")', {})).toEqual('after ');
		expect(interpret('ltrim("none")', {})).toEqual('none');
	});
	it('should fail with type validation', () => {
		expect(() => interpret('ltrim(1234, 4, 2)', {})).toThrow(TypeMismatchError);
	});
});
describe('rtrim', () => {
	it('should rtrim string', () => {
		expect(interpret('rtrim(" before")', {})).toEqual(' before');
		expect(interpret('rtrim("after ")', {})).toEqual('after');
		expect(interpret('rtrim("none")', {})).toEqual('none');
	});
	it('should fail with type validation', () => {
		expect(() => interpret('rtrim(1234, 4, 2)', {})).toThrow(TypeMismatchError);
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
describe('replace', () => {
	it('should replace string', () => {
		expect(interpret('replace("Hello world", "Hello", "Hi")', {})).toEqual(
			'Hi world'
		);
	});
	it('should replace all occurrences string', () => {
		expect(
			interpret('replace("Hello Hello world", "Hello", "Hi")', {})
		).toEqual('Hi Hi world');
	});
	it('should fail with type validation', () => {
		expect(() => interpret('replace(123, "Hello", "Hi")', {})).toThrow(
			TypeMismatchError
		);
		expect(() => interpret('replace("Hello world", 123, "Hi")', {})).toThrow(
			TypeMismatchError
		);
		expect(() => interpret('replace("Hello world", "Hello", 123)', {})).toThrow(
			TypeMismatchError
		);
	});
});
describe('instr', () => {
	it('issue 124', () => {
		expect(interpret('instr("124", "3")', {})).toEqual(0);
		expect(interpret('instr("124", "1")', {})).toEqual(1);
	});

	it('should find string', () => {
		expect(interpret('instr("Hello world", "world")', {})).toEqual(7);
	});

	it('should find string after start', () => {
		expect(interpret('instr("Hello world world", "world", 11)', {})).toEqual(
			13
		);
	});

	it('should find string occurrence', () => {
		expect(
			interpret('instr("Hello world world world", "world", _, 2)', {})
		).toEqual(13);
	});

	it('should find string occurrence with start', () => {
		expect(
			interpret('instr("Hello world world world", "world", 11, 2)', {})
		).toEqual(19);
	});

	it('should fail with type validation', () => {
		expect(() => interpret('instr(123, "Hello")', {})).toThrow(
			TypeMismatchError
		);
		expect(() => interpret('instr("Hello", 123)', {})).toThrow(
			TypeMismatchError
		);
	});
});

describe('length', () => {
	it('should find string occurrence', () => {
		expect(interpret('length("123456789")', {})).toEqual(9);
	});
	it('should fail with type validation', () => {
		expect(() => interpret('length(123)', {})).toThrow(TypeMismatchError);
	});
});
