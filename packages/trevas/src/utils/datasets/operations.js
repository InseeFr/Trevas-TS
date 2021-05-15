export const getDatasetFirstValue = (expr) =>
	(expr &&
		expr.content &&
		expr.content.values &&
		expr.content.values.rows &&
		expr.content.values.rows[0]) ||
	null;

export const getDatasetLastValue = (expr) => {
	const rows =
		expr &&
		expr.content &&
		expr.content.values &&
		expr.content.values.rows &&
		expr.content.values.rows;
	if (!rows) return null;
	return rows[rows.length - 1];
};
