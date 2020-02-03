import React, { useState } from 'react';
import Griddle from 'griddle-react';
import Bindings from './bindings';
import TreeView from '../tree';
import { buildExecObject } from '../utils';
import { interpretVar } from '../../../../engine/interpretor';
import { getTokenName } from '../../../../engine/utils/parser';
import { VtlParser } from '../../../../antlr-tools/vtl-3.0-Istat/parser-vtl';

const Interpretor = ({ value, variables }) => {
	const [input, setInput] = useState(value || '');
	const [vars, setVars] = useState(variables || [{ key: '', value: '' }]);
	const [res, setRes] = useState(null);
	const [type, setType] = useState('');
	const [error, setError] = useState('');
	const handleChange = v => {
		setInput(v);
	};
	const onClick = () => {
		try {
			const result = interpretVar(input, buildExecObject(vars));
			setRes(result);
			setType(result.type);
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
			{res && res.type === VtlParser.DATASET && (
				<div className="res">
					<h2>Result:</h2>
					<Griddle data={res.resolve().toArray()} />
				</div>
			)}
			{res && res.type !== VtlParser.DATASET && (
				<div className="res">
					<h2>Result:</h2>
					<h1 className="res-text">{res.resolve()}</h1>
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
					<h1 className="res-text">{getTokenName(type)}</h1>
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
