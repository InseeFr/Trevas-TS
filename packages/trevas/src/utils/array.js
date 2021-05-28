export const transpose = (array) =>
	Array.isArray(array[0])
		? array[0].map((_, colIndex) => array.map((row) => row[colIndex]))
		: [];
