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
