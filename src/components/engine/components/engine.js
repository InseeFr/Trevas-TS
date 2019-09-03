import React from 'react';
import TreePanel from './tree-panel';
import EnginePanel from './engine-panel';
import './engine.scss';

const Engine = ({ value, variables }) => (
	<>
		<h1 className="centered">VTL tools</h1>
		<div className="container">
			<div className="tree">
				<TreePanel />
			</div>
			<div className="engine">
				<EnginePanel value={value} variables={variables} />
			</div>
		</div>
	</>
);

export default Engine;
