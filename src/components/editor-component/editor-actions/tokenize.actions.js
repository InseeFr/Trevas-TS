/* TOKENIZE ALL */
export const TOKENIZE_ALL = 'tokenizer/tokenize-all';
export const tokenizeAll = () => ({
	type: TOKENIZE_ALL,
});

/* SET_GET_TOKENS */
export const SET_GET_TOKENS = 'tokenizer/set-get-tokens';
export const setGetTokens = getTokens => ({
	type: SET_GET_TOKENS,
	payload: { getTokens },
});

/* LAUNCH_TOKENIZATION */
export const LAUNCH_TOKENIZATION = 'tokenizer/launch-tokenization';
export const launchTokenization = tokens => ({
	type: LAUNCH_TOKENIZATION,
	payload: { tokens },
});
