import React, { useMemo, useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import createReducer, { initialState } from '../editor-reducer';
import Suggestions from './sugestions.component';
import Editor from './editor.component';
import createSuggester from '../suggestions-manager';
import { createFulTokenizer } from '../tokenizer';
import RowNumbers from './row-numbers.component';
import defaultPatterns from '../shortcut-patterns';
import * as actions from '../editor-actions';
import EditorContext from './editor-context';
import './editor.scss';

const EditorPanel = ({
	content = [],
	edit = true,
	getTokens,
	parse,
	dictionnary = {},
	handleChange = () => null,
	shortcuts,
}) => {
	const [state, dispatch] = useReducer(createReducer(), initialState);
	useEffect(() => {
		dispatch(actions.changeEditorContent(content));
		dispatch(actions.setGetTokens(createFulTokenizer(getTokens)));
		dispatch(actions.tokenizeAll());
	}, [getTokens, content]);

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
				<Editor parse={parse} />
				<Suggestions suggest={suggester} />
			</div>
		</EditorContext.Provider>
	);
};

/* */
EditorPanel.propTypes = {
	edit: PropTypes.bool,
	parse: PropTypes.func.isRequired,
	getTokens: PropTypes.func.isRequired,
	shortcuts: PropTypes.shape({ get: PropTypes.func.isRequired }),
	handleChange: PropTypes.func,
	content: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string })),
	dictionnary: PropTypes.shape({
		variables: PropTypes.arrayOf(PropTypes.string),
	}),
};

/* */
EditorPanel.defaultProps = {
	edit: true,
	shortcuts: {},
	handleChange: () => null,
	content: [],
	dictionnary: {},
};

export default EditorPanel;
