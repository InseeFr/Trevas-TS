import React from 'react';
import Proptypes from 'prop-types';
import { JsonEditor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

const Bindings = ({ bindings, onChange }) => (
	<JsonEditor
		value={bindings}
		onChange={onChange}
		mode="code"
		allowedModes={['code', 'tree']}
	/>
);

Bindings.propTypes = {
	bindings: Proptypes.shape({}).isRequired,
	onChange: Proptypes.func.isRequired,
};

export default Bindings;
