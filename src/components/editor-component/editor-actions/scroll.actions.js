/* SCROLL UP */
export const SCROLL_UP = 'editor/scroll-up';
export const scrollUp = () => ({
	type: SCROLL_UP,
});

/* SCROLL DOWN */
export const SCROLL_DOWN = 'editor/scroll-down';
export const scrollDown = () => ({
	type: SCROLL_DOWN,
});

export const SET_SCROLLRANGE = 'editor/set-scrollrange';
export const setScrollrange = scrollRange => ({
	type: SET_SCROLLRANGE,
	payload: { scrollRange },
});

/* INIT CHAR SIZE */
export const INIT_CHAR_SIZE = 'editor/init-char-size';
export const initCharSize = (chasse, rowHeight = 22) => ({
	type: INIT_CHAR_SIZE,
	payload: { chasse, rowHeight },
});

/* SET_HORIZONTAL_RANGE */
export const SET_HORIZONTAL_RANGE = 'editor/set-horizontal-range';
export const setHorizontalRange = horizontalRange => ({
	type: SET_HORIZONTAL_RANGE,
	payload: { horizontalRange },
});

/* SET_EDITOR_RECT */
export const SET_EDITOR_RECT = 'scroll/set-editor-rect';
export const setEditorRect = rect => ({
	type: SET_EDITOR_RECT,
	payload: { rect },
});
