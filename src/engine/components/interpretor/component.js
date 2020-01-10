import React, { useState } from 'react';
import Bindings from './bindings';
import TreeView from '../tree';
import { buildExecObject } from '../utils';
import interpret, { getType } from '../../interpretor';

const Interpretor = ({ value, variables }) => {
	const [input, setInput] = useState(value || '');
	const [vars, setVars] = useState(variables || [{ key: '', value: '' }]);
	const [res, setRes] = useState('');
	const [type, setType] = useState('');
	const [error, setError] = useState('');
	const handleChange = v => {
		setInput(v);
	};
	const onClick = () => {
		try {
			setRes(interpret(input, buildExecObject(vars)));
			setType(getType(input, buildExecObject(vars)));
			setError('');
		} catch (e) {
			setRes('');
			setType('');
			setError(e.message);
		}
	};

	return (
		<>
			<h2 className="centered">VTL Exec</h2>
			<h3>Expressions</h3>
			<input
				type="text"
				id="input"
				name="input"
				value={input}
				onChange={e => handleChange(e.target.value)}
				style={{ width: '40em' }}
			/>
			<h3>Key / Values</h3>
			<Bindings variables={vars} save={setVars} />
			<div className="btn-res">
				<button type="button" onClick={onClick}>
					Get Result!
				</button>
			</div>
			{(res || res === false || res === 0) && (
				<div className="res">
					<h2>Result:</h2>
					<h1 className="res-text">{res.toString()}</h1>
				</div>
			)}
			{error && (
				<div className="res">
					<h2>Error:</h2>
					<h1 className="res-text">{error}</h1>
				</div>
			)}
			{type && (
				<div className="res">
					<h2>Returned type</h2>
					<h1 className="res-text">{type}</h1>
				</div>
			)}
			{(res || error) && (
				<div className="res">
					<h2>Tree</h2>
					<TreeView value={input} />
				</div>
			)}
		</>
	);
};

export default Interpretor;
