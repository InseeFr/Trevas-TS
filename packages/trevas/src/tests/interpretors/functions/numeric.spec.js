import interpret from '../../../interpretor';

describe('numeric-functions', () => {
	describe('unary operators', () => {
		// All the examples of the reference manual are included
		describe('tests on the abs function', () => {
			it('should throw an error for string argument', () => {
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
				expect(interpret('abs(-5.49)', {})).toEqual(5.49);
				expect(interpret('abs(-5.49)', {})).toEqual(5.49);
			});
		});
		describe('tests on the ceil function', () => {
			it('should throw an error for string argument', () => {
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
		describe('tests on the exp function', () => {
			it('should throw an error for string argument', () => {
				expect(() => {
					interpret('exp("test")', {});
				}).toThrow();
			});
			it('should return exp on integers', () => {
				expect(interpret('exp(1)', {})).toEqual(Math.E);
				expect(interpret('exp(0)', {})).toEqual(1.0);
				expect(interpret('exp(5)', {})).toBeCloseTo(148.41315);
				expect(interpret('exp(-1)', {})).toEqual(1 / Math.E);
			});
			it('should return expr on floats', () => {
				expect(interpret('exp(1.0)', {})).toEqual(Math.E);
			});
		});
		describe('tests on the floor function', () => {
			it('should throw an error for string argument', () => {
				expect(() => {
					interpret('floor("test")', {});
				}).toThrow();
			});
			it('should return floor on integers', () => {
				expect(interpret('floor(15)', {})).toEqual(15);
			});
			it('should return floor on floats', () => {
				expect(interpret('floor(3.1415)', {})).toEqual(3);
				expect(interpret('floor(-3.1415)', {})).toEqual(-4);
				expect(interpret('floor(-0.1415)', {})).toEqual(-1);
			});
		});
		describe('tests on the ln function', () => {
			it('should throw an error for string argument', () => {
				expect(() => {
					interpret('ln("test")', {});
				}).toThrow();
			});
			it('should return ln on integers', () => {
				expect(interpret('ln(1)', {})).toEqual(0.0);
				expect(interpret('ln(148)', {})).toBeCloseTo(4.997);
			});
			it('should return expr on floats', () => {
				// The specification uses 'e' in the following example, which is not recognized
				expect(interpret('ln(2.71828)', {})).toBeCloseTo(1.0);
				expect(interpret('ln(0.5)', {})).toBeCloseTo(-0.693);
			});
		});
		describe('tests on the sqrt function', () => {
			it('should throw an error for string argument', () => {
				expect(() => {
					interpret('sqrt("test")', {});
				}).toThrow();
			});
			it('should return expr on integers', () => {
				expect(interpret('sqrt(25)', {})).toEqual(5);
			});
			it('should return expr on floats', () => {
				expect(interpret('sqrt(25.0)', {})).toEqual(5.0);
				expect(interpret('sqrt(2)', {})).toBeCloseTo(1.414);
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
				expect(interpret('round(3.14159, 2)', {})).toEqual(3.14);
				expect(interpret('round(3.14159, 4)', {})).toEqual(3.1416);
				expect(interpret('round(12345.6, 0)', {})).toEqual(12346.0);
				expect(interpret('round(12345.6)', {})).toEqual(12346);
				expect(interpret('round(12345.6, _)', {})).toEqual(12346);
				expect(interpret('round(12345.6, -1)', {})).toEqual(12350.0);
			});
		});
		describe('tests on the trunc function', () => {
			it('should throw an error for string operands', () => {
				expect(() => {
					interpret('trunc("test")', {});
				}).toThrow();
				expect(() => {
					interpret('trunc(15.5, "test")', {});
				}).toThrow();
			});
			it('should throw an error for second operand not integer', () => {
				expect(() => {
					interpret('trunc(15.5, 0.5)', {});
				}).toThrow();
			});
			it('should return trunc on integers', () => {
				expect(interpret('trunc(1)', {})).toEqual(1);
			});
			it('should return trunc on numbers', () => {
				expect(interpret('trunc(3.14159, 2)', {})).toEqual(3.14);
				expect(interpret('trunc(3.14159, 4)', {})).toEqual(3.1415);
				expect(interpret('trunc(12345.6, 0)', {})).toEqual(12345.0);
				expect(interpret('trunc(12345.6)', {})).toEqual(12345);
				expect(interpret('trunc(12345.6, _)', {})).toEqual(12345);
				expect(interpret('trunc(12345.6, -1)', {})).toEqual(12340.0);
			});
		});
	});
	describe('binary operators', () => {
		describe('tests on the round function', () => {
			describe('tests on the log function', () => {
				it('should throw an error for missing operand', () => {
					expect(() => {
						interpret('log(1)', {});
					}).toThrow();
				});
				it('should throw an error for string operands', () => {
					expect(() => {
						interpret('log("test", 1)', {});
					}).toThrow();
					expect(() => {
						interpret('log(15.5, "test")', {});
					}).toThrow();
				});
				it('should return log on integers', () => {
					expect(interpret('log(1024, 2)', {})).toEqual(10);
					expect(interpret('log(1024, 10)', {})).toBeCloseTo(3.01);
				});
				it('should return log on numbers', () => {
					expect(interpret('log(1024.0, 2)', {})).toEqual(10.0);
					expect(interpret('log(1024, 2.0)', {})).toBeCloseTo(10.0);
				});
			});
			describe('tests on the mod function', () => {
				it('should throw an error for missing operand', () => {
					expect(() => {
						interpret('mod(1)', {});
					}).toThrow();
				});
				it('should throw an error for string operands', () => {
					expect(() => {
						interpret('mod("test", 1)', {});
					}).toThrow();
					expect(() => {
						interpret('mod(15.5, "test")', {});
					}).toThrow();
				});
				it('should return mod on integers', () => {
					expect(interpret('mod(5, 2)', {})).toEqual(1);
					expect(interpret('mod(5, 2)', {})).toEqual(1);
					expect(interpret('mod(8, 2)', {})).toEqual(0);
					expect(interpret('mod(9, 0)', {})).toEqual(9);
				});
				it('should return mod on numbers', () => {
					expect(interpret('mod(5.0, 2)', {})).toEqual(1.0);
					expect(interpret('mod(5, 2.0)', {})).toEqual(1.0);
				});
				it.skip('the following example is mentioned in the reference manual, but it is strange', () => {
					expect(interpret('mod(5, -2)', {})).toEqual(-1);
				});
			});
			describe('tests on the power function', () => {
				it('should throw an error for missing operand', () => {
					expect(() => {
						interpret('power(1)', {});
					}).toThrow();
				});
				it('should throw an error for string operands', () => {
					expect(() => {
						interpret('power("test", 1)', {});
					}).toThrow();
					expect(() => {
						interpret('power(15.5, "test")', {});
					}).toThrow();
				});
				it('should return power on integers', () => {
					expect(interpret('power(5, 2)', {})).toEqual(25);
					expect(interpret('power(5, 1)', {})).toEqual(5);
					expect(interpret('power(5, 0)', {})).toEqual(1);
					expect(interpret('power( 5, -1)', {})).toEqual(0.2);
					expect(interpret('power( -5, 3)', {})).toEqual(-125);
				});
				it('should return power on numbers', () => {
					expect(interpret('power(5.0, 2)', {})).toEqual(25.0);
					expect(interpret('power( 5, -1.0)', {})).toEqual(0.2);
				});
			});
		});
	});
});
