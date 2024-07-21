const handleNull =
    (array: (number | null)[]) =>
    (fn: (a: number[]) => number): number | null => {
        if (!Array.isArray(array) || array.includes(null)) return null;
        return fn(array as number[]);
    };

export const getArraySum = (array: number[]) => {
    const fn = (arr: number[]) => arr.reduce((acc, a) => acc + a, 0);
    return handleNull(array)(fn);
};

export const getArrayMin = (array: number[]) => {
    const fn = (arr: number[]) => arr.reduce((acc, a) => (acc < a ? acc : a), array[0]);
    return handleNull(array)(fn);
};

export const getArrayMax = (array: number[]) => {
    const fn = (arr: number[]) => arr.reduce((acc, a) => (acc > a ? acc : a), array[0]);
    return handleNull(array)(fn);
};

export const getArrayMedian = (array: number[]) => {
    const fn = (arr: number[]) => {
        const mid = Math.floor(arr.length / 2);
        const sortedArray = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0 ? sortedArray[mid] : (sortedArray[mid - 1] + sortedArray[mid]) / 2;
    };
    return handleNull(array)(fn);
};

export const getArrayAvg = (array: number[]) => {
    const fn = (arr: number[]) => arr.reduce((acc, a) => acc + a, 0) / array.length;
    return handleNull(array)(fn);
};

// usePopulation = true: population deviation
// usePopulation = false: sample deviation
export const getDeviation = (array: number[], usePopulation = true) => {
    const fn = (arr: number[]) => {
        if (arr.length <= 1) return 0;
        const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
        return Math.sqrt(
            arr.reduce((acc, val) => acc + (val - mean) ** 2, 0) / (arr.length - (usePopulation ? 0 : 1))
        );
    };
    return handleNull(array)(fn);
};

export const getVariance = (array: number[], usePopulation = true) => {
    const deviation = getDeviation(array, usePopulation);
    if (deviation === null) return null;
    return deviation ** 2;
};
