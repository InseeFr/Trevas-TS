import { VtlParser } from '@inseefr/vtl-2.0-antlr-tools';
import * as dataForge from 'data-forge';
import interpret from '../../interpretor';
import TypeMismatchError from '../../errors/TypeMismatchError';

describe('arithmetic', () => {
	describe('dataset', () => {
		const columns = {
			Id_1: { type: VtlParser.STRING, role: VtlParser.DIMENSION },
			Id_2: { type: VtlParser.STRING, role: VtlParser.DIMENSION },
			Me_1: { type: VtlParser.STRING, role: VtlParser.MEASURE },
			Me_2: { type: VtlParser.STRING, role: VtlParser.MEASURE },
		};
		const ds1 = {
			type: VtlParser.DATASET,
			columns,
			resolve: () =>
				new dataForge.DataFrame({
					rows: [
						[10, 'A', 5, 5.0],
						[10, 'B', 2, 10.5],
						[11, 'A', 3, 12.2],
						[11, 'B', 4, 20.3],
					],
					columnNames: Object.keys(columns),
				}),
		};
		const ds2 = {
			type: VtlParser.DATASET,
			columns,
			resolve: () =>
				new dataForge.DataFrame({
					rows: [
						[10, 'A', 10, 3.0],
						[10, 'C', 11, 6.2],
						[11, 'B', 6, 7.0],
					],
					columnNames: Object.keys(columns),
				}),
		};
		it('addition with datasets', () => {
			expect(interpret('ds1 + ds2', { ds1, ds2 }).toArray()).toEqual([
				{
					Id_1: 10,
					Id_2: 'A',
					Me_1: 15,
					Me_2: 8,
				},
				{
					Id_1: 11,
					Id_2: 'B',
					Me_1: 10,
					Me_2: 27.3,
				},
			]);
		});
		it.skip('addition with dataset and scalar', () => {
			expect(interpret('ds1 + 3', { ds1 }).toArray()).toEqual([
				{
					Id_1: 10,
					Id_2: 'A',
					Me_1: 8,
					Me_2: 8.0,
				},
				{
					Id_1: 10,
					Id_2: 'B',
					Me_1: 5,
					Me_2: 13.5,
				},
				{
					Id_1: 11,
					Id_2: 'A',
					Me_1: 6,
					Me_2: 15.2,
				},
				{
					Id_1: 11,
					Id_2: 'B',
					Me_1: 7,
					Me_2: 23.5,
				},
			]);
		});
		it('substraction with datasets', () => {
			expect(interpret('ds1 - ds2', { ds1, ds2 }).toArray()).toEqual([
				{
					Id_1: 10,
					Id_2: 'A',
					Me_1: -5,
					Me_2: 2.0,
				},
				{
					Id_1: 11,
					Id_2: 'B',
					Me_1: -2,
					Me_2: 13.3,
				},
			]);
		});
		it.skip('substraction with dataset and scalar', () => {
			expect(interpret('ds1 - 3', { ds1 }).toArray()).toEqual([
				{
					Id_1: 10,
					Id_2: 'A',
					Me_1: 2,
					Me_2: 2.0,
				},
				{
					Id_1: 10,
					Id_2: 'B',
					Me_1: -1,
					Me_2: 7.5,
				},
				{
					Id_1: 11,
					Id_2: 'A',
					Me_1: 0,
					Me_2: 9.2,
				},
				{
					Id_1: 11,
					Id_2: 'B',
					Me_1: 1,
					Me_2: 17.3,
				},
			]);
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
