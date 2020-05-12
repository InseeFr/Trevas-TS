import React, { useMemo, useEffect, useContext } from 'react';
import classnames from 'classnames';
import * as actions from '../editor-actions';
import EditorContext from './editor-context';

/* */
const getSuggestionsLength = (suggestions = {}) =>
	Object.values(suggestions).reduce(
		(a, t) => (t && Array.isArray(t) && t.length > 0 ? a + t.length : a),
		0
	);

const getSuggestionsValue = (suggestions, index) =>
	Object.values(suggestions).reduce((a, t) => [...a, ...t], [])[index];

/* */
const createItem = (dispatch, state) => ({ value, type, prefix, active }) => {
	return (
		<div
			className={classnames('vtl-suggestion', { active })}
			role="presentation"
			onMouseDown={e => {
				e.stopPropagation();
				e.preventDefault();
				dispatch(actions.suggestToken(value));
				dispatch(actions.tokenizeAll());
				document.querySelector('.overlay').focus();
			}}
		>
			<span className="vtl-type">{type}</span>
			<span className="vtl-valeur">
				<span className="vtl-prefix">{prefix}</span>
				{value.substr(prefix.length)}
			</span>
		</div>
	);
};

const Suggestions = ({ suggest }) => {
	const state = useContext(EditorContext);
	const {
		prefix,
		dispatch,
		cursorRect,
		suggesterState: { index },
	} = state;

	const Item = createItem(dispatch, state);
	const suggestions = useMemo(() => (prefix ? suggest(prefix) : {}), [
		suggest,
		prefix,
	]);
	const size = getSuggestionsLength(suggestions);
	const open = size > 0;
	useEffect(() => {
		dispatch(
			actions.setSuggesterState({
				open,
				size,
				value: index >= 0 ? getSuggestionsValue(suggestions, index) : undefined,
			})
		);
	}, [open, size, dispatch, suggestions, index]);
	//
	let i = 0;
	const sections = Object.entries(suggestions).reduce(
		(a, [section, valeurs]) => [
			...a,
			...valeurs.map(value => (
				<Item
					key={`${section}-${value}`}
					active={index === i++}
					value={value}
					type={section.substr(0, 3)}
					prefix={prefix}
				/>
			)),
		],
		[]
	);

	return open ? (
		<>
			<div
				className="vtl-editor-suggestions"
				style={{
					left: `${cursorRect.right}px`,
					top: `${cursorRect.bottom}px`,
				}}
				onMouseOver={() => {
					if (index !== -1) dispatch(actions.resetSuggesterIndex());
				}}
				onFocus={() => null}
			>
				{sections}
			</div>
		</>
	) : null;
};

export default Suggestions;
