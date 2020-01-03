import interpret from '../../interpretor';

describe('interpretor', () => {
	describe('interpret', () => {
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
	});
});
