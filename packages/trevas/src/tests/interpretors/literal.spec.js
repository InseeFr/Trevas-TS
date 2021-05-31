import interpret from '../../interpretor';

describe('literal', () => {
	it('supports literal with null', () => {
		expect(interpret('null', {})).toBeNull();
	});
	it('should preserve integer literal', () => {
		expect(interpret('12345', {})).toEqual(12345);
		expect(interpret('-12345', {})).toEqual(-12345);
	});
	it('should preserve number literals', () => {
		expect(interpret('1.', {})).toEqual(1.0);
		expect(interpret('1.1', {})).toEqual(1.1);
	});
	// TODO: https://github.com/InseeFr/VTL-Tools/issues/36
	it.skip('should preserve exp number literals', () => {
		expect(interpret('1.5e0', {})).toEqual(1.5);
		expect(interpret('1.5e+0', {})).toEqual(1.5);
		expect(interpret('1.5e-0', {})).toEqual(1.5);
		expect(interpret('1.e0', {})).toEqual(1.0);
		expect(interpret('1.5E1', {})).toEqual(15.0);
		expect(interpret('1.5E-1', {})).toEqual(0.15);
		expect(interpret('1.5E+1', {})).toEqual(15.0);
		expect(interpret('1.E+1', {})).toEqual(10);
	});
	it('should preserve boolean literals', () => {
		expect(interpret('true', {})).toEqual(true);
		expect(interpret('false', {})).toEqual(false);
	});
	it('should preserve string literal', () => {
		// String between double quotes otherwise interpreted as variable
		expect(interpret('"marvin"', {})).toEqual('marvin');
	});
	it.skip('should preserve date literal', () => {
		// TODO: This is not valid, there's no date literal.
		expect(interpret('1998-07-12', {})).toEqual('1998-07-12');
		// TO FIX
		//expect(interpret('1998-12-31', {})).toEqual('1998-12-31');
	});
	it('should preserve empty string literal', () => {
		// String between double quotes otherwise interpreted as variable
		expect(interpret('""', {})).toEqual('');
	});
});
