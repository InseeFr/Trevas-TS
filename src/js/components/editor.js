import React from 'react';
import { Editor } from 'js/editor/components';
import getTools from 'js/antlr-tools';
import 'editor-for-js.scss';

export default props => {
	const { parse, getTokens } = getTools(props.grammar);
	return <Editor {...props} parse={parse} getTokens={getTokens} />;
};
