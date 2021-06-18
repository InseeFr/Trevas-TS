export const transpose = (array) =>
	Array.isArray(array[0])
		? array[0].map((_, colIndex) => array.map((row) => row[colIndex]))
		: [];

export const getArraySum = (array) => {
	if (!Array.isArray(array) || array.includes(null)) return null;
	return array.reduce((acc, a) => acc + parseInt(a, 10), 0);
};

export const getArrayMin = (array) => {
	if (!Array.isArray(array) || array.includes(null)) return null;
	return array.reduce((acc, a) => {
		const current = parseInt(a, 10);
		return acc < current ? acc : current;
	}, array[0]);
};

export const getArrayMax = (array) => {
	if (!Array.isArray(array) || array.includes(null)) return null;
	return array.reduce((acc, a) => {
		const current = parseInt(a, 10);
		return acc > current ? acc : current;
	}, array[0]);
};
