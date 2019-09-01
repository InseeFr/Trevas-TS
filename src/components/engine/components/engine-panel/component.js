import React, { useState } from 'react';
import antlr4 from 'antlr4';
import Input from './input';
import {
	VtlLexer,
	VtlParser,
	EngineVtlVisitor,
} from '../../../../antlr-tools/vtl-2.0/parser-vtl';
import { buildExecObject } from '../../utils';

const EnginePanel = () => {
	const [value, setValue] = useState('a + b');
	const [show, setShow] = useState(false);
	const [ctx, setCtx] = useState();
	const [variables, setVariables] = useState([
		{ key: 'a', value: '2' },
		{ key: 'b', value: '18' },
	]);
	const handleChange = v => {
		setValue(v);
		setShow(false);
	};
	const onClick = () => {
		getTree(value)(setCtx);
		setShow(true);
	};
	console.log(buildExecObject(variables));
	return (
		<>
			<h2 className="centered">VTL Exec</h2>
			<h3>Expressions</h3>
			<input
				type="text"
				id="input"
				name="input"
				value={value}
				onChange={e => handleChange(e.target.value)}
			/>
			<h3>Key / Values</h3>
			<Input variables={variables} save={setVariables} />
			<div className="btn-res">
				<button type="button" onClick={onClick}>
					Get Result!
				</button>
			</div>
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
	const visitor = new EngineVtlVisitor(getContext);
	return visitor.visitStart(ctx);
};

export default EnginePanel;
