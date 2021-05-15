import { fromDatasetToDataframe } from '../../utils';

describe('dataset utils functions', () => {
	describe('dataset transformation', () => {
		it('transform', () => {
			const ds = {
				dataStructure: { ville: 'Ville', pop: 'Population' },
				dataPoints: { ville: ['Paris', 'Oslo'], pop: [2187526, 690335] },
			};
			const emptyDS = {
				dataStructure: {},
				dataPoints: {},
			};

			const df = fromDatasetToDataframe(ds);
			const emptyDF = fromDatasetToDataframe(emptyDS);

			expect(df.count()).toEqual(2);
			expect(df.getSeries('ville').toArray()).toEqual(['Paris', 'Oslo']);
			expect(df.getSeries('pop').toArray()).toEqual([2187526, 690335]);
			expect(emptyDF.toArray()).toEqual([]);
		});
	});
});
