import { DataFrame } from 'data-forge';

export const fromDatasetToDataframe = dataset => {
	const columnNames = Object.keys(dataset.dataStructure);
	const dpColumns = Object.keys(dataset.dataPoints);
	const l = dpColumns.length;
	let rows = [];
	for (let i = 0; i < l; i++) {
		let a = [];
		for (const col of dpColumns) {
			a.push(dataset.dataPoints[col][i]);
		}
		rows.push(a);
	}

	const df = new DataFrame({
		rows: rows,
		columnNames: columnNames,
	});
	return df;
};
