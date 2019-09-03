import interpret from '../interpretor';

describe('interpretor', () => {
	describe('interpret', () => {
		it('should concat strings', () => {
			expect(interpret('"con" || "cat"', {})).toEqual("concat");
		});
	});
});
