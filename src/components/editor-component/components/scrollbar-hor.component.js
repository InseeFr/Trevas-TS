/* eslint-disable no-undef */
import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../editor.actions';
import EditorContext from './editor-context';

const computeMax = lines =>
	lines.reduce((a, { value }) => (value.length > a ? value.length : a), 0);

const Scrollbar = ({ parentEl }) => {
	if (!parentEl) return null;
	const state = useContext(EditorContext);
	const {
		lines,

		dispatch,
		horizontalRange: { offset, start },
	} = state;
	const { width } = parentEl.getBoundingClientRect();
	const [maxChar, setMaxChar] = useState(() => computeMax(lines));
	const [delta, setDelta] = useState(0);
	const [dragPos, setDragPos] = useState(0);

	const dragWidth = Math.trunc((width * offset) / maxChar);

	useEffect(() => {
		const max = computeMax(lines);
		setMaxChar(max);
		setDragPos(Math.trunc((width * start) / max));
	}, [lines, width, start]);

	useEffect(() => {
		const next = Math.max(Math.min(dragPos + delta, width - dragWidth), 0);
		setDragPos(next);
		const ns = Math.round((next / width) * maxChar);
		dispatch(
			actions.setHorizontalRange({ start: ns, stop: ns + offset - 1, offset })
		);
	}, [delta, width, dragWidth]);

	return (
		<span className="scrollbar-hor">
			{maxChar > offset ? (
				<Dragguer width={dragWidth} left={dragPos} onDrag={setDelta} />
			) : null}
		</span>
	);
};

Scrollbar.propTypes = {
	parentEl: PropTypes.shape({
		getBoundingClientRect: PropTypes.func.isRequired,
	}),
};
Scrollbar.defaultProps = { parentEl: undefined };

let DX; //
const createDragEvent = onDrag => e => {
	const delta = DX ? e.clientX - DX : 0;
	DX = e.clientX;
	onDrag(delta);
};

const createUpEvent = (dragEvent, setDrag) => () => {
	document.removeEventListener('mousemove', dragEvent);
	setDrag(false);
	DX = undefined;
};

/* */
const Dragguer = ({ width, left, onDrag }) => {
	const [drag, setDrag] = useState(false);

	useEffect(() => {
		if (drag) {
			const dragEvent = createDragEvent(onDrag);
			const upEvent = createUpEvent(dragEvent, setDrag);
			document.addEventListener('mousemove', dragEvent);
			document.addEventListener('mouseup', upEvent);
			return () => {
				document.removeEventListener('mousemove', dragEvent);
				document.removeEventListener('mouseup', upEvent);
				DX = undefined;
			};
		}
		return undefined;
	}, [drag]);
	return (
		<span
			className="dragguer"
			role="presentation"
			style={{ width: `${width}px`, left: `${left}px` }}
			onMouseDown={e => {
				e.stopPropagation();
				setDrag(true);
			}}
			onMouseUp={e => {
				e.stopPropagation();
				setDrag(false);
			}}
		/>
	);
};

Dragguer.propTypes = {
	width: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
	onDrag: PropTypes.func.isRequired,
};

export default Scrollbar;
