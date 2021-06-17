import interpret from '../../interpretor';
import { TypeMismatchError } from '../../errors';

describe('comparison', () => {
	it('supports comparisons with null', () => {
		expect(interpret('null < 2', {})).toBeNull();
		expect(interpret('2 < null', {})).toBeNull();
		expect(interpret('null > 2', {})).toBeNull();
		expect(interpret('2 > null', {})).toBeNull();
		expect(interpret('null <= 2', {})).toBeNull();
		expect(interpret('2 <= null', {})).toBeNull();
		expect(interpret('null >= 2', {})).toBeNull();
		expect(interpret('2 >= null', {})).toBeNull();
		expect(interpret('null = 2', {})).toBeNull();
		expect(interpret('2 = null', {})).toBeNull();
		expect(interpret('null <> 2', {})).toBeNull();
		expect(interpret('2 <> null', {})).toBeNull();
		expect(interpret('null <> "2"', {})).toBeNull();
		expect(interpret('"2" <> null', {})).toBeNull();
		expect(interpret('null = "2"', {})).toBeNull();
		expect(interpret('"2" = null', {})).toBeNull();
		expect(interpret('true = null', {})).toBeNull();
		expect(interpret('null = false', {})).toBeNull();
	});
	it('should fail to compare wrong types', () => {
		expect(() => interpret('"string" < 1')).toThrow(TypeMismatchError);
		expect(() => interpret('"string" > 1')).toThrow(TypeMismatchError);
		expect(() => interpret('"string" <= 1')).toThrow(TypeMismatchError);
		expect(() => interpret('"string" >= 1')).toThrow(TypeMismatchError);
		expect(() => interpret('"string" = 1')).toThrow(TypeMismatchError);
		expect(() => interpret('"string" <> 1')).toThrow(TypeMismatchError);
	});
	it('should compare integers', () => {
		expect(interpret('1 < 2', {})).toEqual(true);
		expect(interpret('1 <= 1', {})).toEqual(true);
		expect(interpret('2 <= 1', {})).toEqual(false);
		expect(interpret('2 < 1', {})).toEqual(false);

		expect(interpret('1 > 2', {})).toEqual(false);
		expect(interpret('1 >= 1', {})).toEqual(true);
		expect(interpret('2 >= 1', {})).toEqual(true);
		expect(interpret('2 > 1', {})).toEqual(true);

		expect(interpret('1 = 1', {})).toEqual(true);
		expect(interpret('1 <> 1', {})).toEqual(false);

		expect(interpret('1 = 2', {})).toEqual(false);
		expect(interpret('2 <> 1', {})).toEqual(true);
	});
	it('should compare floats', () => {
		expect(interpret('1.1 < 1.11', {})).toEqual(true);
		expect(interpret('1.1 <= 1.1', {})).toEqual(true);
		expect(interpret('1.11 <= 1.1', {})).toEqual(false);
		expect(interpret('1.11 < 1.1', {})).toEqual(false);

		expect(interpret('1.1 > 1.11', {})).toEqual(false);
		expect(interpret('1.1 >= 1.1', {})).toEqual(true);
		expect(interpret('1.11 >= 1.1', {})).toEqual(true);
		expect(interpret('1.11 > 1.1', {})).toEqual(true);

		expect(interpret('1.1 = 1.1', {})).toEqual(true);
		expect(interpret('1.1 <> 1.1', {})).toEqual(false);

		expect(interpret('1.1 = 1.2', {})).toEqual(false);
		expect(interpret('1.1 <> 1.2', {})).toEqual(true);
	});
	it('should compare string', () => {
		expect(interpret('"" = ""', {})).toBeTruthy();
		expect(interpret('"1.1" <> "1.1"', {})).toBeFalsy();
		expect(interpret('"" = "5"', {})).toBeFalsy();
		expect(interpret('"1.11" <> "1.1"', {})).toBeTruthy();
	});
	it('should compare boolean', () => {
		expect(interpret('true = false', {})).toBeFalsy();
		expect(interpret('true = true', {})).toBeTruthy();
		expect(interpret('true <> true', {})).toBeFalsy();
		expect(interpret('false <> true', {})).toBeTruthy();
	});
});
