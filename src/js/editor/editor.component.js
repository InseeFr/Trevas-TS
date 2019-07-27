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
	const tokensEl = [];

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
		<EditorContext.Provider value={{ ...state, dispatch, tokensEl }}>
			<div
				className="editor"
				onKeyDown={suggesterKeyDownProxy(keyDownCallback)(dispatch, state, tokensEl)}
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
			</div>
			<Suggestions suggest={suggester} />
		</EditorContext.Provider>
	);
};

/* */
const onBlurCallback = (dispatch) => (e) => {
	e.stopPropagation();
	e.preventDefault();
	dispatch(actions.exitEditor());
};

/* */
const onMouseDownCallback = (dispatch, state) => (e) => {
	const { prefix } = state;
	if (prefix) dispatch(actions.resetPrefix());
};

/* */
const suggesterKeyDownProxy = (callback) => (dispatch, state, tokensEl) => {
	const callee = callback(dispatch, state, tokensEl);

	return (e) => {
		const { open, index } = state.suggesterState;
		if (open) {
			switch (e.key) {
				case KEY.ARROW_UP:
					dispatch(actions.previousSuggestion());
					return false;
				case KEY.ARROW_DOWN:
					dispatch(actions.nextSuggestion());
					return false;
				case KEY.ENTER:
					// TODO valider la sélection
					if (index > -1) return false;
				default:
					return callee(e);
			}
		}
		return callee(e);
	};
};

/* */
const keyDownCallback = (dispatch, state, tokensEl) => (e) => {
	if (KEY.isUnbindedKey(e.key)) return;
	e.stopPropagation();
	e.preventDefault();
	const { key } = e;
	switch (key) {
		case KEY.ARROW_UP:
		case KEY.ARROW_DOWN:
			dispatch({ type: key });
			dispatch(actions.checkIndex());
			dispatch(actions.resetPrefix());
			break;
		case KEY.DELETE:
		case KEY.ENTER:
		case KEY.BACK_SPACE:
			if (isSelection()) {
				checkForDeleteSelection(dispatch, tokensEl);
				break;
			}
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
const isSelection = () => {
	const { anchorOffset, focusOffset, anchorNode, focusNode } = window.getSelection();
	return !focusNode.isEqualNode(anchorNode) || anchorOffset !== focusOffset;
};

const checkForDeleteSelection = (dispatch, tokensEl) => {
	// const range = window.getSelection().getRangeAt(0);
	// const documentRange = range.extractContents();
	// const lines = document.querySelectorAll('.editor-line');
	// const contents = [ ...lines.entries() ].reduce(
	// 	(a, [ index, el ]) => [ ...a, el.querySelectorAll('.content .token') ],
	// 	[]
	// );
	//
	// window.getSelection().deleteFromDocument();
	//
	// const selection = tokensEl.reduce((a, { spanEl, numberToken, numberRow, start, stop }) => {
	// 	return window.getSelection().containsNode(spanEl.current.firstChild || spanEl.current)
	// 		? numberRow in a
	// 			? {
	// 					...a,
	// 					[numberRow]: [
	// 						...a[numberRow],
	// 						getNodeInformation({
	// 							node: spanEl.current.firstChild,
	// 							numberToken,
	// 							start,
	// 							stop
	// 						})
	// 					]
	// 				}
	// 			: {
	// 					...a,
	// 					[numberRow]: [
	// 						getNodeInformation({
	// 							node: spanEl.current.firstChild,
	// 							numberToken,
	// 							start,
	// 							stop
	// 						})
	// 					]
	// 				}
	// 		: a;
	// }, {});
	// const sel = window.getSelection();
	// dispatch(actions.deleteSelction(selection));
	// sel.extend(sel.anchorNode, 0);
};

const getNodeInformation = ({ node, numberToken, start, stop }) => {
	const { anchorOffset, focusOffset, anchorNode, focusNode } = window.getSelection();

	if (anchorNode.isEqualNode(node)) return { numberToken, start: start + anchorOffset, stop };
	else if (focusNode.isEqualNode(node)) return { numberToken, start, stop: start + focusOffset - 1 };
	return { numberToken, start, stop };
};

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
