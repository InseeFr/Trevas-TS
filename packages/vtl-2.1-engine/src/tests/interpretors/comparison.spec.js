import interpret from '../../interpretor';
import { OperatorTypeError } from '../../errors';

describe('interpretor', () => {
	describe('interpret', () => {
		it('should fail to compare wrong types', () => {
			expect(() => interpret('"string" < 1')).toThrow(OperatorTypeError);
			expect(() => interpret('"string" > 1')).toThrow(OperatorTypeError);
			expect(() => interpret('"string" <= 1')).toThrow(OperatorTypeError);
			expect(() => interpret('"string" >= 1')).toThrow(OperatorTypeError);
			expect(() => interpret('"string" = 1')).toThrow(OperatorTypeError);
			expect(() => interpret('"string" <> 1')).toThrow(OperatorTypeError);
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
	});
});
