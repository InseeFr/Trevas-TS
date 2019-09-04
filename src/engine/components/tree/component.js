import React, { useState } from 'react';
import antlr4 from 'antlr4';
import Tree from './tree';
import {
	VtlLexer,
	VtlParser,
	TreeVtlVisitor,
} from '../../../antlr-tools/vtl-2.0-Insee/parser-vtl';

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

const TreeView = ({ value }) => {
	const [input, setInput] = useState(value || '');
	const [show, setShow] = useState(false);
	const [ctx, getCtx] = useState();
	const handleChange = v => {
		setInput(v);
		setShow(false);
	};
	const onClick = () => {
		getTree(`${input};`)(getCtx);
		setShow(true);
	};
	return (
		<>
			<h2 className="centered">VTL Tree</h2>
			<input
				type="text"
				id="input"
				name="input"
				value={input}
				onChange={e => handleChange(e.target.value)}
			/>
			<button type="button" onClick={onClick}>
				Get Tree!
			</button>
			{show && <Tree ctx={ctx} />}
		</>
	);
};

export default TreeView;
