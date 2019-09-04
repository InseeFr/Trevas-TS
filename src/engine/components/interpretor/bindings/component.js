import React, { useState } from 'react';

const Input = ({ variables, save }) => {
	const [values, setValues] = useState(variables);
	const handleChange = (str, i, type) => {
		const newValues = values.reduce(
			(_, v, j) => (j === i ? [..._, { ...v, [type]: str }] : [..._, v]),
			[]
		);
		save(newValues);
		setValues(newValues);
	};
	const add = () => setValues([...values, { key: '', value: '' }]);
	const remove = () => setValues(values.slice(0, -1));
	return (
		<>
			{values.map((v, i) => (
				<div key={`input-${i}`}>
					<input
						type="text"
						id={`input-key-${i}`}
						name={`input-key-${i}`}
						value={v.key}
						onChange={e => handleChange(e.target.value, i, 'key')}
					/>
					{`  :  `}
					<input
						type="text"
						id={`input-value-${i}`}
						name={`input-value-${i}`}
						value={v.value}
						onChange={e => handleChange(e.target.value, i, 'value')}
					/>
				</div>
			))}
			<button type="button" onClick={remove} disabled={values.length === 1}>
				-
			</button>
			<button type="button" onClick={add}>
				+
			</button>
		</>
	);
};

export default Input;
