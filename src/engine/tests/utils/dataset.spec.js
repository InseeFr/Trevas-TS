import { fromDatasetToDataframe } from 'engine/utils/dataset';

describe('dataset utils functions', () => {
	describe('dataset transformation', () => {
		it('transform', () => {
			const ds = {
				dataStructure: { ville: 'Ville', pop: 'Population' },
				dataPoints: { ville: ['Paris', 'Oslo'], pop: [2187526, 690335] },
			};
			const df = fromDatasetToDataframe(ds);
			expect(df.count()).toEqual(2);
			expect(df.getSeries('ville').toArray()).toEqual(['Paris', 'Oslo']);
			expect(df.getSeries('pop').toArray()).toEqual([2187526, 690335]);
		});
	});
});
