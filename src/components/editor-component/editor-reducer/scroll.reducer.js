import * as actions from '../editor.actions';

const reducer = (state, action) => {
	switch (action.type) {
		/* SCROLL */
		case actions.SCROLL_DOWN:
			return reduceScrollDown(state);
		case actions.SCROLL_UP:
			return reduceScrollUp(state);
		case actions.SET_SCROLLRANGE:
			return {
				...state,
				scrollRange: action.payload.scrollRange,
			};

		default:
			return state;
	}
};

/* SCROLL */
const reduceScrollDown = state => {
	const {
		scrollRange: { start, stop, offset },
		lines,
	} = state;

	return lines.length < offset
		? state
		: {
				...state,
				scrollRange: {
					offset,
					start: Math.min(start + 2, lines.length - offset),
					stop: Math.min(stop + 2, lines.length - 1),
				},
		  };
};

const reduceScrollUp = state => {
	const {
		scrollRange: { start, stop, offset },
	} = state;

	return {
		...state,
		scrollRange: {
			offset,
			start: Math.max(start - 2, 0),
			stop: Math.max(stop - 2, offset - 1),
		},
	};
};

export default reducer;
