import reducer from './editor.reducer';
import scrollReducer from './scroll.reducer';
import suggestionsReducer from './suggestions.reducer';
import createTokenizeReducer from './tokenize.reducer';
import selectionReducer from './selection.reducer';
import keyReducer from './key.reducer';
import cursorReducer from './cursor.reducer';

export { initializer } from './tokenize.reducer';
export { default as initialState } from './initial-state';

/* */
const compose = (...callbacks) =>
	callbacks.reduce(
		(a, call) => {
			return (state, action) => a(call(state, action), action);
		},
		state => state
	);

export default getTokens => (state, action) => {
	const composed = compose(
		reducer,
		scrollReducer,
		suggestionsReducer,
		createTokenizeReducer(getTokens),
		selectionReducer,
		keyReducer,
		cursorReducer
	);

	const newState = composed(state, action);
	console.debug('%cDebug', 'color: purple;', { action, state, newState });
	return newState;
};
