import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Griddle from 'griddle-react';
import Bindings from './bindings';
import TreeView from '../tree';
import { interpretVar } from '../../../../engine/interpretor';
import { getTokenName } from '../../../../engine/utils/parser';
import { VtlParser } from '../../../../antlr-tools/vtl-3.0-Istat/parser-vtl';

const Interpretor = ({ expression, bindings: initialBindings }) => {
	const [input, setInput] = useState(expression || '');
	const [bindings, setBindings] = useState(initialBindings);
	const [res, setRes] = useState(null);
	const [type, setType] = useState('');
	const [error, setError] = useState('');
	const handleChange = v => {
		setInput(v);
	};
	const onClick = () => {
		try {
			const result = interpretVar(input, bindings);
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
			<h3>Bindings</h3>
			<Bindings bindings={bindings} onChange={setBindings} />
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

Interpretor.propTypes = {
	expression: PropTypes.string,
	bindings: PropTypes.shape({}),
};

Interpretor.defaultProps = {
	expression: '',
	bindings: {},
};

export default Interpretor;
