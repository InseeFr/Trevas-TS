import React, { useState } from 'react';
import antlr4 from 'antlr4';
import Tree from './tree';
import {
	VtlLexer,
	VtlParser,
	TreeVtlVisitor,
} from '../../../../antlr-tools/vtl-2.0/parser-vtl';
import './tree-panel.scss';

const TreePanel = () => {
	const [value, setValue] = useState('a + b');
	const [show, setShow] = useState(false);
	const [ctx, getCtx] = useState();
	const handleChange = v => {
		setValue(v);
		setShow(false);
	};
	const onClick = () => {
		getTree(value)(getCtx);
		setShow(true);
	};
	return (
		<>
			<h2 className="centered">VTL Tree</h2>
			<input
				type="text"
				id="input"
				name="input"
				value={value}
				onChange={e => handleChange(e.target.value)}
			/>
			<button type="button" onClick={onClick}>
				Get Tree!
			</button>
			{show && <Tree ctx={ctx} />}
		</>
	);
};

const getTree = text => getContext => {
	const chars = new antlr4.InputStream(text);
	const lexer = new VtlLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new VtlParser(tokens);
	parser.buildParseTrees = true;
	const ctx = parser.start();
	const visitor = new TreeVtlVisitor(getContext);
	return visitor.visitStart(ctx);
};

export default TreePanel;
