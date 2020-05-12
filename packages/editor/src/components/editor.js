import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Editor as EditorComponent } from './editor-component/components';
import Console from './console';
import { getTools } from '../utils';
import { composeShortcuts } from './editor-component';
import '../app.scss';
import '../vtl-tokens.scss';

const shortcuts = composeShortcuts({
	'ctrl|s': () => {
		console.log('save');
		return true;
	},
	'shift|ctrl|R': () => {
		console.log('Renaud est super balaise !');
		return true;
	},
});

const Editor = (props) => {
	const [errors, setErrors] = useState([]);
	const { antlrTools, startRule } = props;
	const { parse, getTokens } = useCallback(getTools(antlrTools), [antlrTools]);
	const cally = useCallback(parse(startRule), [startRule]);
	return (
		<>
			<div className="workbench-display">
				<EditorComponent
					shortcuts={shortcuts}
					handleChange={(err) => {
						setErrors(err);
					}}
					parse={cally}
					getTokens={getTokens}
					{...props}
				/>
			</div>
			<div className="workbench-console">
				<Console errors={errors} />
			</div>
		</>
	);
};

Editor.defaultProps = {
	startRule: 'expr',
};

Editor.propTypes = {
	antlrTools: PropTypes.shape({}).isRequired,
	startRule: PropTypes.string,
};

export default Editor;
