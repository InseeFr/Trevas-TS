// usePopulation = true: population deviation
// usePopulation = false: sample deviation
export const getDeviation = (array: number[], usePopulation = true) => {
    if (array.length <= 1) return 0;
    const mean = array.reduce((acc, val) => acc + val, 0) / array.length;
    return Math.sqrt(
        array.reduce((acc, val) => acc + (val - mean) ** 2, 0) / (array.length - (usePopulation ? 0 : 1))
    );
};

export const getVariance = (array: number[], usePopulation = true) => {
    const deviation = getDeviation(array, usePopulation);
    if (deviation === null) return null;
    return deviation ** 2;
};
