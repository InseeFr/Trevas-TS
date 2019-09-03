import React, { useState } from 'react';
import antlr4 from 'antlr4';
import Input from './input';
import { buildExecObject } from '../../utils';
import interpret from '../../../../engine/interpretor';

const EnginePanel = () => {
	const [value, setValue] = useState('if 10>2 then "positive" else "negative"');
	const [variables, setVariables] = useState([
		{ key: 'a', value: '2' },
		{ key: 'b', value: '18' },
	]);
	const handleChange = v => {
		setValue(v);
	};
	const onClick = () => {
		console.log(interpret(value, buildExecObject(variables)));
	};

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
				style={{ width: '26em' }}
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

export default EnginePanel;
