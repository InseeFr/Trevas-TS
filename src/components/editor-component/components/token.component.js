import React from 'react';
import classnames from 'classnames';
import { tokenProps } from '../editor-prop-types';

/* */
const Token = ({ token: { className, value } }) => {
	return <span className={classnames('token', className, {})}>{value}</span>;
};

Token.propTypes = tokenProps;

export default React.forwardRef((props, ref) => <Token refEl={ref} {...props} />);
