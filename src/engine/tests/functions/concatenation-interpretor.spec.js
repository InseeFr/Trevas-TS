import interpret from 'engine/interpretor';

describe('interpretor', () => {
	describe('concatenation', () => {
		it('should concat strings', () => {
			expect(interpret('"con" || "cat"', {})).toEqual('concat');
			expect(interpret('"Ad astra" || " " || "per aspera"', {})).toEqual(
				'Ad astra per aspera'
			);
		});
	});
});
