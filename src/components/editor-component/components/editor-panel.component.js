import React, { useMemo, createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import editorReducer, { initializer } from '../editor.reducer';
import Suggestions from './sugestions.component';
import Editor from './editor.component';
import createSuggester from '../suggestions-manager';
import createFulTokenizer from '../create-full-tokenizer';
import RowNumbers from './row-numbers.component';
import defaultPatterns from './../shortcut-patterns';
import * as actions from './../editor.actions';
import worker from './worker.js';
import './editor.scss';

class WebWorker {
	constructor(worker) {
		const code = worker.toString();
		const blob = new Blob([`(${code})()`]); //'(' + code + ')()']);
		return new Worker(URL.createObjectURL(blob));
	}
}

const EditorPanel = ({
	content = [],
	edit = true,
	getTokens,
	parse,
	dictionnary = {},
	handleChange = () => null,
	shortcuts,
}) => {
	const getFullTokens = createFulTokenizer(getTokens);
	const [state, dispatch] = useReducer(
		editorReducer,
		getFullTokens,
		initializer
	);
	useEffect(() => {
		dispatch({
			type: 'change-editor-content',
			lines: content,
		});
		dispatch(actions.tokenizeAll());

		// const task = new WebWorker(worker, getFullTokens);
		// task.postMessage('post lines to tokenize');
		// task.addEventListener('message', e => {
		// 	console.log('yop !', e.data);
		// });
	}, [content]);

	const suggester = useMemo(() => createSuggester(dictionnary), [dictionnary]);
	return (
		<EditorContext.Provider
			value={{
				...state,
				edit,
				handleChange,
				dispatch,
				shortcutPatterns: shortcuts || defaultPatterns,
			}}
		>
			<div className="panel-editor noselect">
				<RowNumbers />
				<Editor getTokens={getFullTokens} parse={parse} />
				<Suggestions suggest={suggester} />
			</div>
		</EditorContext.Provider>
	);
};

/* */
Editor.proTypes = {
	getTokens: PropTypes.func.isRequired,
	shortcuts: PropTypes.shape({ get: PropTypes.func.isRequired }),
	handleChange: PropTypes.func,
	content: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string })),
	dictionnary: PropTypes.shape({
		variables: PropTypes.arrayOf(PropTypes.string),
	}),
};

export const TokenContext = createContext({});
export const EditorContext = createContext({});
export default EditorPanel;
