import React, { useContext } from 'react';
import classnames from 'classnames';
import EditorContext from './editor-context';
import { tokenProps } from '../editor-prop-types';

/* */
const notIsInRange = range => (start, stop) =>
	start > range.stop || stop < range.start;

/* */
const Token = ({ token: { className, value, start, stop } }) => {
	const { horizontalRange } = useContext(EditorContext);

	return notIsInRange(horizontalRange)(start, stop) ? null : (
		<span className={classnames('vtl-token', className, {})}>
			{value.substr(
				Math.max(0, horizontalRange.start - start),
				Math.min(value.length, horizontalRange.stop - start)
			)}
		</span>
	);
};

Token.propTypes = tokenProps;

export default React.forwardRef((props, ref) => (
	<Token refEl={ref} {...props} />
));
