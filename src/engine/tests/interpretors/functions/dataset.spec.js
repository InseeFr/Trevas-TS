import interpret from 'engine/interpretor';

describe('interpretor', () => {
	describe('dataset functions', () => {
		it('should count observations in a dataset', () => {
			const ds = { dataStructure: {}, dataPoints: {} };
			const ds2 = {
				dataStructure: { col_1: 'truc' },
				dataPoints: { col_1: [1, 2, 3] },
			};
			expect(interpret('count(ds)', { ds })).toEqual(0);
			expect(interpret('count(ds2)', { ds2 })).toEqual(3);
		});
	});
});
