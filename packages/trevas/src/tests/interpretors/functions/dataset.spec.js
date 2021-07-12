import interpret from '../../../interpretor';

describe('dataset-functions', () => {
	it('should count observations in a dataset', () => {
		const ds = { dataStructure: {}, dataPoints: {} };
		const ds2 = {
			dataStructure: { col_1: 'truc' },
			dataPoints: { col_1: [1, 2, 3] },
		};
		expect(interpret('count(ds)', { ds })).toEqual(0);
		expect(interpret('count(ds2)', { ds2 })).toEqual(3);
	});
	it('should return first value of a dataset', () => {
		const ds = { dataStructure: {}, dataPoints: {} };
		const ds2 = {
			dataStructure: { col_1: 'truc' },
			dataPoints: { col_1: [1, 2, 3] },
		};
		expect(interpret('first_value(ds over())', { ds })).toBeNull();
		expect(interpret('first_value(ds2 over())', { ds2 })).toEqual([1]);
	});
	it('should return last value of a dataset', () => {
		const ds = { dataStructure: {}, dataPoints: {} };
		const ds2 = {
			dataStructure: { col_1: 'truc', col_2: 'troc' },
			dataPoints: { col_1: [1, 2, 3], col_2: [10, 20, 30] },
		};
		expect(interpret('last_value(ds over())', { ds })).toBeNull();
		expect(interpret('last_value(ds2 over())', { ds2 })).toEqual([3, 30]);
	});
	it('should return simple sum over dataset', () => {
		const ds = { dataStructure: {}, dataPoints: { col_1: [1, 2, null] } };
		const ds2 = {
			dataStructure: { col_1: 'truc', col_2: 'troc' },
			dataPoints: { col_1: [1, 2, 3], col_2: [10, 20, 30] },
		};
		expect(interpret('sum(ds)', { ds })[0]).toBeNull();
		expect(interpret('sum(ds2)', { ds2 })).toEqual([6, 60]);
	});
	it('should return simple median over dataset', () => {
		const ds = { dataStructure: {}, dataPoints: { col_1: [1, 2, null] } };
		const ds2 = {
			dataStructure: { col_1: 'truc' },
			dataPoints: { col_1: [3, 10, 7] },
		};
		const ds3 = {
			dataStructure: { col_2: 'troc' },
			dataPoints: { col_2: [2, 4] },
		};
		expect(interpret('median(ds)', { ds })[0]).toBeNull();
		expect(interpret('median(ds2)', { ds2 })).toEqual([7]);
		expect(interpret('median(ds3)', { ds3 })).toEqual([3]);
	});
	it('should return simple average over dataset', () => {
		const ds = { dataStructure: {}, dataPoints: { col_1: [1, 2, null] } };
		const ds2 = {
			dataStructure: { col_1: 'truc', col_2: 'troc' },
			dataPoints: { col_1: [3, 5, 7], col_2: [2, 4, 15] },
		};
		expect(interpret('avg(ds)', { ds })[0]).toBeNull();
		expect(interpret('avg(ds2)', { ds2 })).toEqual([5, 7]);
	});
	it('should return simple standard deviation over dataset', () => {
		const ds = { dataStructure: {}, dataPoints: { col_1: [1, 2, null] } };
		const ds2 = {
			dataStructure: { col_1: 'truc' },
			dataPoints: { col_1: [3, 5, 7] },
		};
		const ds3 = {
			dataStructure: { col_2: 'troc' },
			dataPoints: { col_2: [2, 4] },
		};
		expect(interpret('stddev_pop(ds)', { ds })[0]).toBeNull();
		expect(interpret('stddev_pop(ds2)', { ds2 })[0]).toBeCloseTo(1.63, 2);
		expect(interpret('stddev_pop(ds3)', { ds3 })).toEqual([1]);
	});
	it('should return simple sample deviation over dataset', () => {
		const ds = { dataStructure: {}, dataPoints: { col_1: [1, 2, null] } };
		const ds2 = {
			dataStructure: { col_1: 'truc' },
			dataPoints: { col_1: [3, 5, 7] },
		};
		const ds3 = {
			dataStructure: { col_2: 'troc' },
			dataPoints: { col_2: [2, 4] },
		};
		const ds4 = {
			dataStructure: { col_2: 'troc' },
			dataPoints: { col_2: [4] },
		};
		expect(interpret('stddev_samp(ds)', { ds })[0]).toBeNull();
		expect(interpret('stddev_samp(ds2)', { ds2 })).toEqual([2]);
		expect(interpret('stddev_samp(ds3)', { ds3 })[0]).toBeCloseTo(1.414, 3);
		expect(interpret('stddev_samp(ds4)', { ds4 })).toEqual([0]);
	});
	it('should return simple variance over dataset', () => {
		const ds = { dataStructure: {}, dataPoints: { col_1: [1, 2, null] } };
		const ds2 = {
			dataStructure: { col_1: 'truc' },
			dataPoints: { col_1: [3, 5, 7] },
		};
		const ds3 = {
			dataStructure: { col_2: 'troc' },
			dataPoints: { col_2: [2, 4] },
		};
		expect(interpret('var_pop(ds)', { ds })[0]).toBeNull();
		expect(interpret('var_pop(ds2)', { ds2 })[0]).toBeCloseTo(2.6667, 4);
		expect(interpret('var_pop(ds3)', { ds3 })).toEqual([1]);
	});
	it('should return simple sample variance over dataset', () => {
		const ds = { dataStructure: {}, dataPoints: { col_1: [1, 2, null] } };
		const ds2 = {
			dataStructure: { col_1: 'truc' },
			dataPoints: { col_1: [3, 5, 7] },
		};
		const ds3 = {
			dataStructure: { col_2: 'troc' },
			dataPoints: { col_2: [2, 4] },
		};
		const ds4 = {
			dataStructure: { col_2: 'troc' },
			dataPoints: { col_2: [4] },
		};
		expect(interpret('var_samp(ds)', { ds })[0]).toBeNull();
		expect(interpret('var_samp(ds2)', { ds2 })).toEqual([4]);
		expect(interpret('var_samp(ds3)', { ds3 })[0]).toBeCloseTo(2, 5);
		expect(interpret('var_samp(ds4)', { ds4 })).toEqual([0]);
	});
	it('should return simple min over dataset', () => {
		const ds = { dataStructure: {}, dataPoints: { col_1: [1, 2, null] } };
		const ds2 = {
			dataStructure: { col_1: 'truc', col_2: 'troc' },
			dataPoints: { col_1: [1, 2, 3], col_2: [10, 20, 30] },
		};
		expect(interpret('min(ds)', { ds })[0]).toBeNull();
		expect(interpret('min(ds2)', { ds2 })).toEqual([1, 10]);
	});
	it('should return simple max over dataset', () => {
		const ds = { dataStructure: {}, dataPoints: { col_1: [1, 2, null] } };
		const ds2 = {
			dataStructure: { col_1: 'truc', col_2: 'troc' },
			dataPoints: { col_1: [1, 2, 3], col_2: [10, 20, 30] },
		};
		expect(interpret('max(ds)', { ds })[0]).toBeNull();
		expect(interpret('max(ds2)', { ds2 })).toEqual([3, 30]);
	});
});
