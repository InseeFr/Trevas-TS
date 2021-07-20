export const getArraySum = (array) => {
	if (!Array.isArray(array) || array.includes(null)) return null;
	return array.reduce((acc, a) => acc + a, 0);
};

export const getArrayMin = (array) => {
	if (!Array.isArray(array) || array.includes(null)) return null;
	return array.reduce((acc, a) => (acc < a ? acc : a), array[0]);
};

//handle null
export const getArrayMax = (array) => {
	if (!Array.isArray(array) || array.includes(null)) return null;
	return array.reduce((acc, a) => (acc > a ? acc : a), array[0]);
};

export const getArrayMedian = (array) => {
	if (!Array.isArray(array) || array.includes(null)) return null;
	const mid = Math.floor(array.length / 2);
	const sortedArray = [...array].sort((a, b) => a - b);
	return array.length % 2 !== 0
		? sortedArray[mid]
		: (sortedArray[mid - 1] + sortedArray[mid]) / 2;
};

export const getArrayAvg = (array) => {
	if (!Array.isArray(array) || array.includes(null)) return null;
	return array.reduce((acc, a) => acc + a, 0) / array.length;
};

// usePopulation = true: population deviation
// usePopulation = false: sample deviation
export const getDeviation = (array, usePopulation = true) => {
	if (!Array.isArray(array) || array.includes(null)) return null;
	if (array.length <= 1) return 0;
	const mean = array.reduce((acc, val) => acc + val, 0) / array.length;
	return Math.sqrt(
		array
			.reduce((acc, val) => acc.concat((val - mean) ** 2), [])
			.reduce((acc, val) => acc + val, 0) /
			(array.length - (usePopulation ? 0 : 1))
	);
};

export const getVariance = (array, usePopulation) => {
	const deviation = getDeviation(array, usePopulation);
	if (deviation === 0) return 0;
	if (deviation === null) return null;
	return deviation ** 2;
};
