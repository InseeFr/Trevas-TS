import React, { useState } from 'react';
// import propTypes from 'prop-types';
import classnames from 'classnames';

import './console.scss';

const Console = ({ errors }) => {
	return <div className="console">{errors.map((trace, i) => <Error key={i} trace={trace} />)}</div>;
};

const Error = ({ trace }) => {
	const { msg, line, column, stack } = trace;
	const [ showTrace, setShowTrace ] = useState(false);
	return (
		<div className="erreur">
			{stack ? (
				<span
					onClick={() => setShowTrace(!showTrace)}
					className={classnames('button-trace', {
						'hide-trace': showTrace,
						'show-trace': !showTrace
					})}
				/>
			) : null}
			<span className="message">{`"${msg}"`}</span>
			<span className="line">
				row <span className="count">{line}</span>
			</span>
			<span className="column">
				col <span className="count">{column}</span>
			</span>
			{showTrace && stack ? <div className="stack-trace">{stack.stack}</div> : null}
		</div>
	);
};

// Error.propTypes = {
// 	errors: propTypes.array(
// 		propTypes.shape({
// 			trace: propTypes.shape(
// 				{
// 					// TODO
// 				}
// 			)
// 		})
// 	).isRequired
// };

export default Console;
