import { DataFrame } from 'data-forge';

export const fromDatasetToDataframe = (dataset) => {
	const columnNames = Object.keys(dataset.dataStructure);
	const dpColumns = Object.keys(dataset.dataPoints);
	// Check dataPoints keys exist, if not return an empty Dataframe
	if (dpColumns && dpColumns.length) {
		const firstKey = dpColumns[0];
		const l = dataset.dataPoints[firstKey].length;
		let rows = [];
		// for every row
		for (let i = 0; i < l; i++) {
			let row = [];
			// and every column
			for (const col of dpColumns) {
				row.push(dataset.dataPoints[col][i]);
			}
			rows.push(row);
		}
		return new DataFrame({
			rows: rows,
			columnNames: columnNames,
		});
	} else {
		return new DataFrame();
	}
};
