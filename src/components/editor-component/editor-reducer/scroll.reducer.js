import * as actions from '../editor.actions';

/* */
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

/* */
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

/* */
const reduceInitCharSize = (state, { payload: { chasse, rowHeight } }) => ({
	...state,
	chasse,
	rowHeight,
});

/* */
const reduceSetScrollRange = (state, { payload: { scrollRange } }) => ({
	...state,
	scrollRange,
});

/* */
const reduceSetHorizontalRange = (state, { payload: { horizontalRange } }) => ({
	...state,
	horizontalRange, //: { start: 5, stop: 19, offset: 14 },
});

/* */
const reducer = (state, action) => {
	switch (action.type) {
		/* SCROLL */
		case actions.SCROLL_DOWN:
			return reduceScrollDown(state);
		case actions.SCROLL_UP:
			return reduceScrollUp(state);
		case actions.INIT_CHAR_SIZE:
			return reduceInitCharSize(state, action);
		case actions.SET_SCROLLRANGE:
			return reduceSetScrollRange(state, action);
		case actions.SET_HORIZONTAL_RANGE:
			return reduceSetHorizontalRange(state, action);

		default:
			return state;
	}
};

export default reducer;
