import React, { useMemo, createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import Line from './line.component';
import editorReducer from './editor.reducer';
import * as actions from './editor.actions';
import KEY from './key-bind';
// import Suggestions from './sugestions.component';
// import createSuggester from './suggestions-manager';

import './editor.scss';

const initialState = {
	lines: [ { value: '', tokens: [] } ],
	index: 0,
	focusedRow: undefined
};

const Editor = ({ content = [], getTokens, dictionnary = {} }) => {
	const [ { lines, index, focusedRow }, dispatch ] = useReducer(editorReducer, initialState);

	useEffect(
		() => {
			dispatch({
				type: 'change-editor-content',
				lines: content.map((row) => ({ tokens: [], value: row }))
			});
		},
		[ content, getTokens ]
	);

	const transformedLines = useMemo(() => lines.map((line) => ({ ...line, tokens: getTokens(line.value) })), [
		lines,
		getTokens
	]);

	return (
		<EditorContext.Provider value={{ index, dispatch }}>
			<div
				className="editor"
				onKeyDown={(e) => {
					if (KEY.isUnbindedKey(e.key)) return;
					e.stopPropagation();
					e.preventDefault();
					keyDownCallback(dispatch)(e.key);
				}}
			>
				{transformedLines.map(({ tokens, value }, i) => (
					<Line
						key={`${i}-line`}
						tokens={tokens}
						length={value.length}
						number={i}
						index={index}
						focused={focusedRow === i}
					/>
				))}
			</div>
		</EditorContext.Provider>
	);
};

/* */
const keyDownCallback = (dispatch) => (key) => {
	switch (key) {
		case KEY.ARROW_UP:
		case KEY.ARROW_DOWN:
			dispatch({ type: key });
			dispatch({ type: 'check-index' });
			break;
		case KEY.CONTEXT_MENU:
		case KEY.DELETE:
		case KEY.PAGE_UP:
		case KEY.PAGE_DOWN:
		case KEY.TAB:
		case KEY.ENTER:
		case KEY.HOME:
		case KEY.END:
		case KEY.BACK_SPACE:
		case KEY.ARROW_LEFT:
		case KEY.ARROW_RIGHT:
			dispatch({ type: key });
			break;
		default:
			if (isCharCode(key)) {
				dispatch({ type: 'pressed-char', key });
			}
			break;
	}
};

const isCharCode = (c) => true; //c && /[\w!@#$%^&*(),.?":{}|<>].{1}/g.test(c);

/* */
Editor.proTypes = {
	getTokens: PropTypes.func.isRequired,
	content: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string })),
	dictionnary: PropTypes.shape({
		variables: PropTypes.arrayOf(PropTypes.string)
	})
};

export const TokenContext = createContext({});
export const EditorContext = createContext({});
export default Editor;
