import { DataFrame } from 'data-forge';

export const fromDatasetToDataframe = dataset => {
	const columnNames = Object.keys(dataset.dataStructure);
	const dpColumns = Object.keys(dataset.dataPoints);
	const l = dpColumns.length;
	let dfColumns = [];
	for (let i = 0; i < l; i++) {
		let a = [];
		for (const col of dpColumns) {
			a.push(dataset.dataPoints[col][i]);
		}
		dfColumns.push(a);
	}

	const df = new DataFrame({
		rows: dfColumns,
		columnNames: columnNames,
	});
	return df;
};
