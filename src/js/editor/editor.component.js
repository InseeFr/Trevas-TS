import React, { useMemo, createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import Line from './line.component';
import editorReducer, { initializer } from './editor.reducer';
import * as actions from './editor.actions';
import KEY from './key-bind';
import Suggestions from './sugestions.component';
import createSuggester from './suggestions-manager';

import './editor.scss';

const Editor = ({ content = [], getTokens, dictionnary = {} }) => {
	const [ state, dispatch ] = useReducer(editorReducer, getTokens, initializer);
	const { lines, index, focusedRow } = state;

	useEffect(
		() => {
			dispatch({
				type: 'change-editor-content',
				lines: content
			});
		},
		[ content, getTokens ]
	);

	const suggester = useMemo(() => createSuggester(dictionnary), [ dictionnary ]);
	return (
		<EditorContext.Provider value={{ ...state, dispatch }}>
			<div
				className="editor"
				onKeyDown={keyDownCallback(dispatch)}
				onMouseDown={onMouseDownCallback(dispatch, state)}
				onBlur={onBlurCallback(dispatch, state)}
			>
				{lines.map(({ tokens, value }, i) => (
					<Line
						key={`${i}-line`}
						tokens={tokens}
						length={value.length}
						number={i}
						index={index}
						focused={focusedRow === i}
					/>
				))}
				<Suggestions suggest={suggester} />
			</div>
		</EditorContext.Provider>
	);
};

/* */
const onBlurCallback = (dispatch) => (e) => {
	e.stopPropagation();
	e.preventDefault();
	// console.log("Blur !!!");
	// dispatch(actions.exitEditor());
};

/* */
const onMouseDownCallback = (dispatch, state) => (e) => {
	const { prefix } = state;
	if (prefix) dispatch(actions.resetPrefix());
};

/* */
const keyDownCallback = (dispatch) => (e) => {
	if (KEY.isUnbindedKey(e.key)) return;
	e.stopPropagation();
	e.preventDefault();
	const { key } = e;
	switch (key) {
		case KEY.ARROW_UP:
		case KEY.ARROW_DOWN:
			dispatch({ type: key });
			dispatch(actions.checkIndex());
			break;
		case KEY.DELETE:
		case KEY.ENTER:
		case KEY.BACK_SPACE:
			dispatch({ type: key });
			dispatch(actions.checkPrefix());
			break;
		case KEY.PAGE_UP:
		case KEY.PAGE_DOWN:
		case KEY.TAB:
		case KEY.HOME:
		case KEY.END:
		case KEY.CONTEXT_MENU:
		case KEY.ARROW_LEFT:
		case KEY.ARROW_RIGHT:
			dispatch({ type: key });
			dispatch(actions.resetPrefix());
			break;
		default:
			if (isCharCode(key)) {
				dispatch(actions.insertCharacter(key));
				dispatch(actions.checkPrefix());
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
