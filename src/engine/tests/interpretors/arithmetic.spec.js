import { DataFrame } from 'dataframe-js';
import interpret from '../../interpretor';
import TypeMismatchError from '../../errors/TypeMismatchError';
import { VtlParser } from '../../../antlr-tools';

describe('arithmetic', () => {
	describe('dataset', () => {
		it('supports datasets', () => {
			const columns = {
				Id_1: { type: VtlParser.STRING, role: VtlParser.DIMENSION },
				Id_2: { type: VtlParser.STRING, role: VtlParser.DIMENSION },
				Me_1: { type: VtlParser.STRING, role: VtlParser.MEASURE },
				Me_2: { type: VtlParser.STRING, role: VtlParser.MEASURE },
			};
			const ds1 = {
				type: VtlParser.DATASET,
				columns,
				resolve: () => {
					return new DataFrame(
						{
							Id_1: [10, 10, 11, 11],
							Id_2: ['A', 'B', 'A', 'B'],
							Me_1: [5, 2, 3, 4],
							Me_2: [5.0, 10.5, 12.2, 20.3],
						},
						Object.keys(columns)
					);
				},
			};
			const ds2 = {
				type: VtlParser.DATASET,
				columns,
				resolve: () => {
					return new DataFrame(
						{
							Id_1: [10, 10, 11, 11],
							Id_2: ['A', 'C', 'B'],
							Me_1: [10, 11, 6],
							Me_2: [3.0, 6.2, 7.0],
						},
						Object.keys(columns)
					);
				},
			};
			expect(interpret('result = ds1 + ds2', { ds1, ds2 })).toEqual({});
		});
	});
	describe('scalars', () => {
		it('supports unary operations', () => {
			expect(interpret('-(0 - 1)', {})).toEqual(1);
			expect(interpret('+(0 - 1)', {})).toEqual(-1);
			expect(interpret('-(0 - 1.5)', {})).toEqual(1.5);
			expect(interpret('+(0 - 1.5)', {})).toEqual(-1.5);

			expect(interpret('-(0 + 1)', {})).toEqual(-1);
			expect(interpret('+(0 + 1)', {})).toEqual(+1);
			expect(interpret('-(0 + 1.5)', {})).toEqual(-1.5);
			expect(interpret('+(0 + 1.5)', {})).toEqual(+1.5);

			expect(() => interpret('-("not" || "number")')).toThrow(
				TypeMismatchError
			);
			expect(() => interpret('+("not" || "number")')).toThrow(
				TypeMismatchError
			);
		});
		it('test basic arithmetic operations', () => {
			expect(interpret('1 + 2', {})).toEqual(3);
			expect(interpret('1 - 2', {})).toEqual(-1);
			expect(interpret('3 / 2', {})).toEqual(1.5);
			expect(interpret('5 * 2', {})).toEqual(10);
			expect(interpret('3 + 2.1', {})).toEqual(5.1);
			expect(interpret('1.5 / 2.4', {})).toEqual(0.625);
			expect(interpret('1 + 2 + 3', {})).toEqual(6);
			expect(interpret('1 + 3 - 2', {})).toEqual(2);
			expect(interpret('2 * 3 / 4', {})).toEqual(1.5);

			expect(() => interpret('1 + "number"')).toThrow(TypeMismatchError);
			expect(() => interpret('"number" + 1')).toThrow(TypeMismatchError);
			expect(() => interpret('1 - "number"')).toThrow(TypeMismatchError);
			expect(() => interpret('"number" - 1')).toThrow(TypeMismatchError);
			expect(() => interpret('1 * "number"')).toThrow(TypeMismatchError);
			expect(() => interpret('"number" * 1')).toThrow(TypeMismatchError);
			expect(() => interpret('1 / "number"')).toThrow(TypeMismatchError);
			expect(() => interpret('"number" / 1')).toThrow(TypeMismatchError);
		});
		it('test basic arithmetic operations with parentheses', () => {
			expect(interpret('(1 + 2) * 5', {})).toEqual(15);
			expect(interpret('(1 - 2) + 1', {})).toEqual(0);
		});
		it('precedence problem: 1 - 2 + 1 should be 0, but instead returns -2', () => {
			expect(interpret('1 - 2 + 1', {})).toEqual(0);
		});
		it('precedence: 10 / 2 * 5', () => {
			expect(interpret('10 / 2 * 5', {})).toEqual(25);
		});
		it('dividing by 0 should return infinity', () => {
			expect(interpret('3/0', {})).toEqual(Infinity);
		});
	});
});
