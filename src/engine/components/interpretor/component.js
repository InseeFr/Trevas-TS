import React, { useState } from 'react';
import Bindings from './bindings';
import { buildExecObject } from '../utils';
import interpret from '../../interpretor';

const Interpretor = ({ value, variables }) => {
	const [input, setInput] = useState(value || '');
	const [vars, setVars] = useState(variables || [{ key: '', value: '' }]);
	const [res, setRes] = useState('');
	const handleChange = v => {
		setInput(v);
	};
	const onClick = () => {
		setRes(interpret(input, buildExecObject(vars)));
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
			{(res || res === false) && (
				<div className="res">
					<h2>Result:</h2>
					<h1 className="res-text">{res.toString()}</h1>
				</div>
			)}
		</>
	);
};

export default Interpretor;
