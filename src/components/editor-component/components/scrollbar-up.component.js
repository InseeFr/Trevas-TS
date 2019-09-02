import React, { useContext, useState, useEffect } from 'react';
import { EditorContext } from './editor-panel.component';
import * as actions from './../editor.actions';

const ScrollUpDown = ({ parentEl }) => {
	const state = useContext(EditorContext);
	const { lines, scrollRange, selection, index, focusedRow, dispatch } = state;

	window.addEventListener('scroll', (e) => {
		// TODO something
	});

	if (parentEl) {
		const dragger = parentEl && lines.length > scrollRange.offset;
		const { height, top } = parentEl.getBoundingClientRect();

		return (
			<div
				className="scroll-up-down"
				style={{ height }}
				onMouseDown={(e) => {
					e.stopPropagation();
					if (dragger) {
						const clickPosition = e.clientY - top;
						const percent = clickPosition / height;
						const sr = computeScrollrange(state)(percent);
						dispatch(actions.setScrollrange(sr));
					}
				}}
				onMouseUp={(e) => e.stopPropagation()}
			>
				{dragger ? <Dragguer height={height} parentEl={parentEl} /> : null}
				{selection ? <Selection {...selection} parentHeight={height} nbLines={lines.length} /> : null}
				{index >= 0 && focusedRow >= 0 ? (
					<Cursor focusedRow={focusedRow} nbLines={lines.length} parentHeight={height} />
				) : null}
			</div>
		);
	}

	return null;
};
/* */
const offsetY = { y: 0, pre: undefined };
const setOffsetY = function(y) {
	offsetY.y = y;
};
const Dragguer = ({ height }) => {
	const state = useContext(EditorContext);
	const { lines, scrollRange, dispatch } = state;

	const [ drag, setDrag ] = useState(false);
	const [ dgHeight, setDgHeight ] = useState(() => Math.max(scrollRange.offset / lines.length * height, 5));
	const [ dgTop, setDgTop ] = useState(() => scrollRange.start / lines.length * height);

	useEffect(
		() => {
			setDgHeight(Math.max(scrollRange.offset / lines.length * height, 5));
		},
		[ scrollRange.offset, lines.length, height, dgHeight ]
	);

	useEffect(
		() => {
			const next = Math.round(scrollRange.start / lines.length * height);
			if (scrollRange.start !== offsetY.pre) {
				setDgTop(next);
			}
		},
		[ scrollRange.start, lines.length, height ]
	);

	useEffect(
		() => {
			if (drag) {
				const dragEvent = (e) => {
					const dist = e.clientY - offsetY.y;
					const newDgPos = Math.min(Math.max(0, dgTop + dist), height - dgHeight);

					if (newDgPos !== dgTop) {
						setDgTop(newDgPos);
						setOffsetY(e.clientY);
						const start = Math.round(Math.round(newDgPos / height * lines.length));
						if (start !== scrollRange.start) {
							offsetY.pre = start; // trick
							dispatch(
								actions.setScrollrange({ ...scrollRange, start, stop: start + scrollRange.offset - 1 })
							);
						}
					}
				};
				const upEvent = (e) => {
					setDrag(false);
					document.removeEventListener('mousemove', dragEvent);
				};
				document.addEventListener('mousemove', dragEvent);
				document.addEventListener('mouseup', upEvent);
				return () => {
					document.removeEventListener('mousemove', dragEvent);
					document.removeEventListener('mouseup', upEvent);
				};
			}
		},
		[ drag, scrollRange, dgTop, lines.length, height, dispatch, dgHeight ]
	);

	return (
		<span
			className="dragger"
			draggable="false"
			style={{ height: dgHeight, top: dgTop }}
			onMouseDown={(e) => {
				e.stopPropagation();
				setOffsetY(e.clientY);
				setDrag(true);
			}}
			onMouseUp={(e) => {
				e.stopPropagation();
				setOffsetY(0);
				setDrag(false);
			}}
		/>
	);
};

/* */
const Selection = ({ start, stop, parentHeight, nbLines }) => {
	const top = Math.round(start.row / nbLines * parentHeight);
	const height = Math.round((stop.row - start.row) / nbLines * parentHeight);
	return <span className="selection" style={{ top, height }} />;
};

/* */
const Cursor = ({ focusedRow, parentHeight, nbLines }) => {
	const top = Math.round(focusedRow / nbLines * parentHeight);
	return <span className="cursor-selection" style={{ top }} />;
};

/* */
const computeScrollrange = ({ scrollRange: sr, lines }) => (percent) => {
	const start = Math.min(Math.round(lines.length * percent), lines.length - sr.offset);
	return {
		...sr,
		start,
		stop: Math.min(start + sr.offset + 1, lines.length - 1)
	};
};

export default ScrollUpDown;
