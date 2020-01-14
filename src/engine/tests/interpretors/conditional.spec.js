import interpret from '../../interpretor';

describe('interpretor', () => {
	describe('conditional operators', () => {
		it('tests on the nvl function', () => {
			expect(interpret('nvl(5, 0)', {})).toEqual(5);
			expect(interpret('nvl(null, 0)', {})).toEqual(0);
		});
	});
});
