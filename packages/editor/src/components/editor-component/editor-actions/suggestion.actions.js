/* SET_SUGGESTER_STATE */
export const SET_SUGGESTER_STATE = 'editor/set-suggester-state';
export const setSuggesterState = ({ open, size, value }) => ({
	type: SET_SUGGESTER_STATE,
	payload: { open, size, value },
});

/* SET_SUGGESTER_STATE */
export const RESET_SUGGESTER_INDEX = 'editor/reset-suggester-index';
export const resetSuggesterIndex = () => ({
	type: RESET_SUGGESTER_INDEX,
});

/* NEXT_SUGGESTION */
export const NEXT_SUGGESTION = 'editor/next-suggestion';
export const nextSuggestion = () => ({
	type: NEXT_SUGGESTION,
});

/* PREVIOUS_SUGGESTION */
export const PREVIOUS_SUGGESTION = 'editor/previous-suggestion';
export const previousSuggestion = () => ({
	type: PREVIOUS_SUGGESTION,
});

/* */
export const SUGGEST_TOKEN = 'editor/uggest-token';
export const suggestToken = suggestion => ({
	type: SUGGEST_TOKEN,
	payload: { suggestion },
});

/* CHECK_PREFIX */
export const CHECK_PREFIX = 'editor/check-prefix';
export const checkPrefix = () => ({
	type: CHECK_PREFIX,
});

/* RESET_PREFIX */
export const RESET_PREFIX = 'editor/reset-prefix';
export const resetPrefix = () => ({
	type: RESET_PREFIX,
});
