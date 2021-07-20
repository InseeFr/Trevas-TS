const handleNull = (array) => (fn) => {
	if (!Array.isArray(array) || array.includes(null)) return null;
	return fn(array);
};

export const getArraySum = (array) => {
	const fn = (arr) => arr.reduce((acc, a) => acc + a, 0);
	return handleNull(array)(fn);
};

export const getArrayMin = (array) => {
	const fn = (arr) => arr.reduce((acc, a) => (acc < a ? acc : a), array[0]);
	return handleNull(array)(fn);
};

export const getArrayMax = (array) => {
	const fn = (arr) => arr.reduce((acc, a) => (acc > a ? acc : a), array[0]);
	return handleNull(array)(fn);
};

export const getArrayMedian = (array) => {
	const fn = (arr) => {
		const mid = Math.floor(arr.length / 2);
		const sortedArray = [...arr].sort((a, b) => a - b);
		return arr.length % 2 !== 0
			? sortedArray[mid]
			: (sortedArray[mid - 1] + sortedArray[mid]) / 2;
	};
	return handleNull(array)(fn);
};

export const getArrayAvg = (array) => {
	const fn = (arr) => arr.reduce((acc, a) => acc + a, 0) / array.length;
	return handleNull(array)(fn);
};

// usePopulation = true: population deviation
// usePopulation = false: sample deviation
export const getDeviation = (array, usePopulation = true) => {
	const fn = (arr) => {
		if (arr.length <= 1) return 0;
		const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
		return Math.sqrt(
			arr
				.reduce((acc, val) => acc.concat((val - mean) ** 2), [])
				.reduce((acc, val) => acc + val, 0) /
				(arr.length - (usePopulation ? 0 : 1))
		);
	};
	return handleNull(array)(fn);
};

export const getVariance = (array, usePopulation) => {
	const deviation = getDeviation(array, usePopulation);
	if (deviation === null) return null;
	return deviation ** 2;
};
