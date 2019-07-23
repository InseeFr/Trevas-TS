import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/* */
const Cursor = ({ endLine = false }) => (
	<span
		className={classnames({ 'cursor-end-line': endLine, cursor: !endLine })}
		onClick={(e) => e.stopPropagation()}
		onDoubleClick={(e) => e.stopPropagation()}
	/>
);

Cursor.propTypes = { endLine: PropTypes.bool };

export default Cursor;
