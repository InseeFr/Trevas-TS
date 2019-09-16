import React, { createRef, useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import EditorContext from './editor-context';
import { setCursorRect } from '../editor-actions';

/* */
const Cursor = ({ top, left }) => {
	if (left < 0) return null;
	const spanEl = createRef();
	const { dispatch } = useContext(EditorContext);
	const [rect, setRect] = useState({ x: undefined, y: undefined });

	useEffect(() => {
		const next = spanEl.current.getBoundingClientRect();

		if (next.right !== rect.right || next.bottom !== rect.bottom) {
			setRect(next);
			dispatch(setCursorRect(next));
		}
	}, [spanEl, rect, dispatch]);

	return (
		<span
			ref={spanEl}
			className="cursor"
			role="presentation"
			onClick={e => e.stopPropagation()}
			onDoubleClick={e => e.stopPropagation()}
			style={{
				left: `${left}px`,
				top: `${top}px`,
			}}
		/>
	);
};

Cursor.propTypes = {
	left: PropTypes.number.isRequired,
	top: PropTypes.number.isRequired,
};

export default Cursor;
