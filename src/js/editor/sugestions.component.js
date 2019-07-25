import React, { useMemo, useState, useContext } from 'react';
import { EditorContext } from './editor.component';

const Suggestions = ({ suggest }) => {
	const { cursorRect, prefix } = useContext(EditorContext);

	const suggestions = useMemo(() => (prefix ? suggest(prefix) : {}), [ suggest, prefix ]);

	return getState(suggestions) ? (
		<div
			className="suggestions"
			style={{
				left: `${Math.round(cursorRect.right)}px`,
				top: `${Math.round(cursorRect.bottom)}px`
			}}
		>
			{suggestions.variables.map((value, i) => <Item key={value} value={value} type="var" />)}
		</div>
	) : null;
};

/* */
const getState = (suggestions = {}) =>
	Object.values(suggestions).reduce((a, t) => (t && Array.isArray(t) && t.length > 0) || a, false);

/* */
const Item = ({ value, type }) => {
	return (
		<div
			className="suggestion"
			onMouseDown={(e) => {
				e.stopPropagation();
				console.log(value);
			}}
		>
			<span className="type">{type}</span>
			<span className="valeur">{value}</span>
		</div>
	);
};

export default Suggestions;
