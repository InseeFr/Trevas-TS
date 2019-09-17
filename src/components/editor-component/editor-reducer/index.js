import reducer from './editor.reducer';
import scrollReducer from './scroll.reducer';
import suggestionsReducer from './suggestions.reducer';
import tokenizeReducer from './tokenize.reducer';
import selectionReducer from './selection.reducer';
import keyReducer from './key.reducer';
import cursorReducer from './cursor.reducer';

export { default as initialState, getTokensDefault } from './initial-state';
export { mergeLines } from './tokenize.reducer';

/* */
const compose = (...callbacks) =>
	callbacks.reduce(
		(a, call) => {
			return (state, action) => a(call(state, action), action);
		},
		state => state
	);

export default () => {
	const composed = compose(
		reducer,
		scrollReducer,
		suggestionsReducer,
		tokenizeReducer,
		selectionReducer,
		keyReducer,
		cursorReducer
	);
	return (state, action) => {
		const newState = composed(state, action);
		console.debug('%cDebug', 'color: purple;', { action, state, newState });
		return newState;
	};
};
