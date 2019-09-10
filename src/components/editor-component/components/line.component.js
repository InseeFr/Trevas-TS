import React from 'react';
import Token from './token.component';
import { lineProps } from '../editor-prop-types';

const getKey = ({ value }, i) => `${i}-${value || ''}`;

const Line = ({ tokens = [], row }) => {
	return (
		<div className="row" onBlur={e => e.stopPropagation()}>
			{tokens.map((token, i) => (
				<Token
					key={getKey(token, i)}
					token={token}
					numberRow={row}
					numberToken={i}
					start={token.start}
					stop={token.stop}
				/>
			))}
		</div>
	);
};

Line.propTypes = lineProps;

export default Line;
