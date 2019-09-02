import React, { useState } from 'react';
import { Editor } from './editor-component/components';
import Console from './console';
import getTools from '../antlr-tools';
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

export default props => {
	const [errors, setErrors] = useState([]);
	const { parse, getTokens } = getTools(props.grammar);
	return (
		<>
			<div className="workbench-display">
				<Editor
					shortcuts={shortcuts}
					handleChange={editor => {
						setErrors(editor.errors);
					}}
					parse={parse}
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
