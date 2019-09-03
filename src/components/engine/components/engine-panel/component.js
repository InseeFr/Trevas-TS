import React, { useState } from 'react';
import Input from './input';
import { buildExecObject } from '../../utils';
import interpret from '../../../../engine/interpretor';

const EnginePanel = ({ value, variables }) => {
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
				style={{ width: '26em' }}
			/>
			<h3>Key / Values</h3>
			<Input variables={vars} save={setVars} />
			<div className="btn-res">
				<button type="button" onClick={onClick}>
					Get Result!
				</button>
			</div>
			{res && (
				<>
					<h2>Result:</h2>
					<h1 className="res">{res}</h1>
				</>
			)}
		</>
	);
};

export default EnginePanel;
