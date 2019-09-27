import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { hashLines } from '../common-tools';
import ScrollUpDown from './scrollbar-up.component';
import ScrollHor from './scrollbar-hor.component';
import Line from './line.component';
import Overlay from './overlay.component';
import * as actions from '../editor-actions';
import EditorContext from './editor-context';

const getKey = (value, i) => `${i}-${value}`;

const computeScrollRange = (parentEl, rowHeight) => {
	const { height } = parentEl.getBoundingClientRect();
	const offset = Math.round(height / rowHeight);
	return { start: 0, stop: offset - 1, offset };
};

const computeHorizontalRange = (parentEl, chasse) => {
	const { width } = parentEl.getBoundingClientRect();
	const offset = Math.round(width / chasse);
	return { start: 0, stop: offset - 1, offset };
};

const Editor = ({ parse }) => {
	const editorEl = useRef();
	const state = useContext(EditorContext);
	const {
		lines,
		dispatch,
		scrollRange,
		rowHeight,
		chasse,
		tokenize,
		getTokens,
	} = state;

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
		if (tokenize) {
			/*
			 calcul d'une signature sur les lignes, à vérifier au moment de la tokenization.
			*/
			const hash = hashLines(lines);
			getTokens(lines, hash).then(({ tokens, hash: hashInitial }) => {
				dispatch(actions.launchTokenization(tokens, hashInitial));
				dispatch(actions.checkPrefix()); // TODO un peu trop brutal ici
			});
		}
	}, [tokenize, lines]);

	useEffect(() => {
		if (editorEl.current) {
			dispatch(
				actions.setScrollrange(computeScrollRange(editorEl.current, rowHeight))
			);
			if (chasse) {
				dispatch(
					actions.setHorizontalRange(
						computeHorizontalRange(editorEl.current, chasse)
					)
				);
			}
		}
	}, [editorEl, rowHeight, chasse, dispatch]);

	return (
		<div className="editor-container">
			<div ref={editorEl} className="editor">
				{visiblesLines.map(({ tokens, value }, i) => (
					<Line key={getKey(value, i)} tokens={tokens} row={i} />
				))}
			</div>
			<ScrollUpDown parentEl={editorEl.current} />
			<ScrollHor parentEl={editorEl.current} />
			<Overlay lines={lines} el={editorEl} />
		</div>
	);
};

Editor.propTypes = {
	parse: PropTypes.func.isRequired,
};

export default Editor;
