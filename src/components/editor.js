import React from 'react';
import { Editor } from './editor-component/components';
import getTools from '../antlr-tools';
import '../editor-for-js.scss';

export default props => {
	const { parse, getTokens } = getTools(props.grammar);
	return <Editor {...props} parse={parse} getTokens={getTokens} />;
};
