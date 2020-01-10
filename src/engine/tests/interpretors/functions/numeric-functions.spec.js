import interpret from 'engine/interpretor';

describe('interpretor', () => {
	describe('numeric-functions', () => {
		describe('unary operators', () => {
			describe('tests on the abs function', () => {
				it('should throw an error for abs string', () => {
					expect(() => {
						interpret('abs("test")', {});
					}).toThrow();
				});
				it('should return abs on integers', () => {
					expect(interpret('abs(0)', {})).toEqual(0);
					expect(interpret('abs(10)', {})).toEqual(10);
					expect(interpret('abs(-10)', {})).toEqual(10);
				});
				it('should return abs on floats', () => {
					expect(interpret('abs(0)', {})).toEqual(0);
					expect(interpret('abs(1.1)', {})).toEqual(1.1);
					expect(interpret('abs(-1.1)', {})).toEqual(1.1);
				});
			});
			describe('tests on the ceil function', () => {
				it('should throw an error for ceil string', () => {
					expect(() => {
						interpret('ceil("test")', {});
					}).toThrow();
				});
				it('should return ceil on integers', () => {
					expect(interpret('ceil(15)', {})).toEqual(15);
					expect(interpret('ceil(-10)', {})).toEqual(-10);
					expect(interpret('ceil(0)', {})).toEqual(0);
				});
				it('should return ceil on floats', () => {
					expect(interpret('ceil(3.14159)', {})).toEqual(4);
					expect(interpret('ceil(-3.1415)', {})).toEqual(-3);
					// TODO The following expression should return 0, not -0
					expect(interpret('ceil(-0.1415)', {})).toEqual(-0);
				});
			});
			describe('tests on the expr function', () => {
				it('should throw an error for ceil string', () => {
					expect(() => {
						interpret('expr("test")', {});
					}).toThrow();
				});
				it('should return expr on integers', () => {
					expect(interpret('exp(1)', {})).toEqual(Math.E);
					expect(interpret('exp(0)', {})).toEqual(1);
				});
				it('should return expr on floats', () => {
					expect(interpret('exp(1.0)', {})).toEqual(Math.E);
				});
			});
		});
		describe('binary with optional operand operators', () => {
			describe('tests on the round function', () => {
				it('should throw an error for string operands', () => {
					expect(() => {
						interpret('round("test")', {});
					}).toThrow();
					expect(() => {
						interpret('round(15.5, "test")', {});
					}).toThrow();
				});
				it('should throw an error for second operand not integer', () => {
					expect(() => {
						interpret('round(15.5, 0.5)', {});
					}).toThrow();
				});
				it('should return round on integers', () => {
					expect(interpret('round(1)', {})).toEqual(1);
				});
				it('should return round on numbers', () => {
					expect(interpret('round(12345.6)', {})).toEqual(12346);
					expect(interpret('round(3.14159, 2)', {})).toEqual(3.14);
					expect(interpret('round(3.14159, 4)', {})).toEqual(3.1416);
					expect(interpret('round(12345.6, 0)', {})).toEqual(12346.0);
					expect(interpret('round(12345.6, _)', {})).toEqual(12346);
					expect(interpret('round(12345.6, -1)', {})).toEqual(12350.0);
				});
			});
		});
	});
});
