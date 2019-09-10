import React, { useContext, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import ScrollUpDown from './scrollbar-up.component';
import Line from './line.component';
import Overlay from './overlay.component';
import * as actions from '../editor.actions';
import EditorContext from './editor-context';

const getKey = (value, i) => `${i}-${value}`;

const computeScrollRange = (parentEl, rowHeight) => {
	const { height } = parentEl.getBoundingClientRect();
	const offset = Math.trunc(height / rowHeight);
	return { start: 0, stop: offset - 1, offset };
};

const Editor = ({ parse }) => {
	const editorEl = useRef();
	const state = useContext(EditorContext);
	const { lines, dispatch, scrollRange, rowHeight } = state;

	useEffect(() => {
		const code = lines.reduce(
			(a, { value }) => (value.length > 0 ? `${a}${value}\n` : a),
			''
		);
		const { errors } = parse(code);

		dispatch(actions.updateErrors(errors));
	}, [lines, parse, dispatch]);

	const visiblesLines = lines.reduce(
		(a, line, i) =>
			i >= scrollRange.start && i <= scrollRange.stop ? [...a, line] : a,
		[]
	);

	useEffect(() => {
		if (editorEl.current) {
			dispatch(
				actions.setScrollrange(computeScrollRange(editorEl.current, rowHeight))
			);
		}
	}, [editorEl, rowHeight, dispatch]);

	return (
		<div className="editor-container">
			<div ref={editorEl} className="editor">
				{visiblesLines.map(({ tokens, value }, i) => (
					<Line key={getKey(value, i)} tokens={tokens} row={i} />
				))}
			</div>
			<ScrollUpDown parentEl={editorEl.current} />
			<Overlay lines={lines} el={editorEl} />
		</div>
	);
};

Editor.propTypes = {
	parse: PropTypes.func.isRequired,
};

export default Editor;
