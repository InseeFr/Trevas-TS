/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Griddle from 'griddle-react';
import { AntlrEditor as VTLEditor } from '@eurostat/vtl-editor';
import * as VTLTools from 'vtl-2-0-antlr-tools-ts';
import { JsonEditor } from 'jsoneditor-react';
import { VtlParser } from '@inseefr/vtl-2.0-antlr-tools';
import { getSuggestions } from './vtl-suggestions';
import Bindings from './bindings';
import TreeView from '../tree';
import { interpretVar } from '../../../src/interpretor';
import { getTokenName } from '../../../src/utils';

const Interpretor = ({ expression, bindings: initialBindings }) => {
	const [input, setInput] = useState(expression || '');
	const [bindings, setBindings] = useState(initialBindings);
	const [res, setRes] = useState(null);
	const [type, setType] = useState('');
	const [errors, setErrors] = useState([]);

	const onClick = () => {
		try {
			const result = interpretVar(input, bindings);
			setRes(result);
			setType(result.type);
			setErrors('');
		} catch (e) {
			setRes('');
			setType('');
			setErrors(e.message);
		}
	};

	const customTools = {
		...VTLTools,
		getSuggestionsFromRange: getSuggestions,
		initialRule: 'expr',
	};

	const updateBindings = (b) => {
		setRes('');
		setType('');
		setBindings(b);
	};

	return (
		<>
			<h2 className="centered">VTL Exec</h2>
			<h3>Expressions</h3>
			<VTLEditor
				script={input}
				setScript={setInput}
				languageVersion="vtl-2-0"
				tools={customTools}
				onListErrors={console.log}
				height="10em"
			/>
			<h3>Bindings</h3>
			<Bindings bindings={bindings} onChange={updateBindings} />
			<div className="btn-res">
				<button type="button" onClick={onClick}>
					Get Result!
				</button>
			</div>
			{res && res.type === VtlParser.DATASET && (
				<div className="res">
					<h2>Result:</h2>
					{typeof res.resolve() === 'object' && res.resolve().dataPoints ? (
						<JsonEditor
							value={res.resolve()}
							onChange={() => {}}
							mode="code"
							allowedModes={['tree']}
						/>
					) : (
						<Griddle data={res.resolve().toArray()} />
					)}
				</div>
			)}
			{res && res.type !== VtlParser.DATASET && (
				<div className="res">
					<h2>Result:</h2>
					<h1 className="res-text">
						{res.resolve() === null ? 'null' : res.resolve().toString()}
					</h1>
				</div>
			)}
			{errors.length > 0 && (
				<div className="res">
					<h2>Error:</h2>
					<h1 className="res-text">{errors}</h1>
				</div>
			)}
			{type && (
				<div className="res">
					<h2>Returned type</h2>
					<h1 className="res-text">{getTokenName(type)}</h1>
				</div>
			)}
			{(res || errors) && (
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
