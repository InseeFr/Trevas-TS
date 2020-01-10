import React, { useContext } from 'react';
import classnames from 'classnames';
import EditorContext from './editor-context';

const RowNumbers = () => {
	const { scrollRange, focusedRow, lines } = useContext(EditorContext);
	const offset = scrollRange.stop - scrollRange.start + 1;
	const numbers = new Array(Math.min(offset, lines.length))
		.fill(scrollRange.start + 1)
		.map((s, i) => s + i);

	return (
		<div className="vtl-row-numbers">
			<div className="vtl-row-numbers-container">
				{numbers.map(o => (
					<div className="vtl-row" key={o}>
						<span
							className={classnames('vtl-num', {
								focused: o - 1 === focusedRow,
							})}
						>
							{o}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default RowNumbers;
