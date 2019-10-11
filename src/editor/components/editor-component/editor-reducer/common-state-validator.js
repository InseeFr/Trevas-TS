/* utilitaires de transformation de l'état */
/* pour les combiner */
const compose = (...validator) =>
	validator.reduce((a, b) => (...args) => a(b(...args)), args => args);

/* */
export const validateHorRange = state => {
	const { index, horizontalRange: hr } = state;
	if (index > hr.stop) {
		return {
			...state,
			horizontalRange: { ...hr, start: index - hr.offset + 1, stop: index },
		};
	}
	if (index < hr.start) {
		return {
			...state,
			horizontalRange: { ...hr, start: index, stop: index + hr.offset - 1 },
		};
	}

	return state;
};

/* */
export const validateVertRange = state => {
	const { focusedRow, scrollRange: sr } = state;
	if (focusedRow > sr.stop) {
		return {
			...state,
			scrollRange: {
				...sr,
				start: focusedRow - sr.offset + 1,
				stop: focusedRow,
			},
		};
	}
	if (focusedRow < sr.start) {
		return {
			...state,
			scrollRange: {
				...sr,
				start: focusedRow,
				stop: focusedRow + sr.offset - 1,
			},
		};
	}
	return state;
};

/* */
export const resetSelection = state => ({
	...state,
	selection: undefined,
	prefix: undefined,
});

/* */
export const validateRange = compose(
	validateHorRange,
	validateVertRange
);

/* */
export const validateRangeResetSelection = compose(
	validateRange,
	resetSelection
);
