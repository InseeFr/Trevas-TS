/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Griddle from 'griddle-react';
import { AntlrEditor } from 'antlr-editor';
import * as tools from 'vtl-2-0-antlr-tools-ts';
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
	const [error, setError] = useState('');

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

	const customTools = {
		...tools,
		getSuggestionsFromRange: getSuggestions,
		initialRule: 'expr',
	};

	return (
		<>
			<h2 className="centered">VTL Exec</h2>
			<h3>Expressions</h3>
			<AntlrEditor
				script={input}
				setScript={setInput}
				languageVersion="vtl-2-0"
				tools={customTools}
				setErrors={console.log}
				height="10em"
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
					{Array.isArray(res.resolve()) ? (
						<h1 className="res-text">{`[${res
							.resolve()
							.map((e) => {
								if (Array.isArray(e))
									return e.map((ee) => (ee === null ? 'null' : ee));
								if (e === null) return 'null';
								return e;
							})
							.join(',')}]`}</h1>
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
