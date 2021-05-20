import { DataFrame } from 'data-forge';

export const fromDatasetToDataframe = (dataset) => {
	const { dataStructure, dataPoints } = dataset;
	const columnNames = Object.keys(dataStructure);
	const dpColumns = Object.keys(dataPoints);
	// Check dataPoints keys exist, if not return an empty Dataframe
	if (dpColumns && dpColumns.length) {
		const data = Object.values(dataPoints);
		const rows = data[0].map((_, colIndex) => data.map((row) => row[colIndex]));
		return new DataFrame({
			rows,
			columnNames,
		});
	}
	return new DataFrame();
};
