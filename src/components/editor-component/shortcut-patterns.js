import * as actions from './editor-actions';
import { getSelectionText } from './common-tools';
import clipboard from './clipboard';

const SHORT_CUTS = new Map();

/* */
const unmappedPattern = pattern => () => {
	console.debug(`unmapped pattern: ${pattern}`);
	return false;
};

/* copy to clipboard */
const copy = (dispatch, state) => {
	if (state.selection) {
		const content = getSelectionText(state);
		clipboard.copy(content);
	}
	return true;
};

/* cut to clipboard */
const cut = (dispatch, state) => {
	if (state.selection) {
		copy(dispatch, state);
		dispatch(actions.deleteSelection());
		dispatch(actions.tokenizeAll());
	}
	return true;
};

/* paste clipboard */
const paste = (dispatch, state) => {
	clipboard.getClipboardContent().then(text => {
		if (text && text.length > 0) {
			if (state.selection) dispatch(actions.deleteSelection());
			dispatch(actions.insertText(text));
			dispatch(actions.tokenizeAll());
		}
	});
	return true;
};

/* select all */
const selectAll = (dispatch, state) => {
	dispatch(
		actions.setSelection({
			anchor: { row: 0, index: 0 },
			extent: {
				row: state.lines.length - 1,
				index: state.lines[state.lines.length - 1].value.length,
			},
		})
	);
	return true;
};

/* ctrl + left */
const controlLeft = dispatch => {
	dispatch(actions.controlLeft());
	return true;
};

/* ctrl + right */
const controlRight = dispatch => {
	dispatch(actions.controlRight());
	return true;
};

/* shift + right */
const shiftRight = dispatch => {
	dispatch(actions.shiftRight());
	return true;
};

/* shifth + left */
const shiftLeft = dispatch => {
	dispatch(actions.shiftLeft());
	return true;
};

/* shifth + left */
const shiftUp = dispatch => {
	dispatch(actions.shiftUp());
	return true;
};

/* shifth + left */
const shiftDown = dispatch => {
	dispatch(actions.shiftDown());
	return true;
};

/* MAPPING */
SHORT_CUTS.set('ctrl|x', cut);
SHORT_CUTS.set('ctrl|c', copy);
SHORT_CUTS.set('ctrl|v', paste);
SHORT_CUTS.set('ctrl|a', selectAll);
SHORT_CUTS.set('ctrl|ArrowLeft', controlLeft);
SHORT_CUTS.set('ctrl|ArrowRight', controlRight);
SHORT_CUTS.set('shift|ArrowLeft', shiftLeft);
SHORT_CUTS.set('shift|ArrowRight', shiftRight);
SHORT_CUTS.set('shift|ArrowUp', shiftUp);
SHORT_CUTS.set('shift|ArrowDown', shiftDown);

const getPattern = ({ altKey, shiftKey, ctrlKey, key }) =>
	`${altKey ? 'alt|' : ''}${shiftKey ? 'shift|' : ''}${
		ctrlKey ? 'ctrl|' : ''
	}${key || ''}`;

const createShortcutsProvider = shortcutsMap => ({
	get: (model = {}) => {
		const pattern = getPattern(model);
		return {
			execute: shortcutsMap.has(pattern)
				? shortcutsMap.get(pattern)
				: unmappedPattern(pattern),
		};
	},
});

/* */
export const composeShortcuts = (patterns = {}, erase = false) => {
	const newMap = Object.entries(patterns).reduce((map, [pattern, action]) => {
		if ((erase || !map.has(pattern)) && typeof action === 'function') {
			map.set(pattern, action);
		}

		return map;
	}, new Map(SHORT_CUTS));

	return createShortcutsProvider(newMap);
};

/* */
export default composeShortcuts(SHORT_CUTS);
