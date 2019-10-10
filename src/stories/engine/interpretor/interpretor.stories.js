import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { Interpretor } from 'engine/components';
import readme from './README.md';

const stories = storiesOf('Interpretor', module);

const styleDecorator = storyFn => (
	<div style={{ marginTop: '5%' }}>{storyFn()}</div>
);
stories.addDecorator(styleDecorator).addDecorator(withReadme(readme));

stories.add('Default', () => <Interpretor />);

stories.add('Bindings', () => (
	<Interpretor
		value='"Welcome " || NAME || ", you are " || (if AGE >= 18 then "major" else "minor") || "."'
		variables={[{ key: 'NAME', value: 'Mauro' }, { key: 'AGE', value: 26 }]}
	/>
));

stories.add('Parenthesis', () => <Interpretor value="(10 + 2) * 123456" />);

// Arithmetic

storiesOf('Interpretor/Arithmetic').add('Div', () => (
	<Interpretor value="3 / 2" />
));
storiesOf('Interpretor/Arithmetic').add('Mul', () => (
	<Interpretor value="11 * 27" />
));
storiesOf('Interpretor/Arithmetic').add('Minus', () => (
	<Interpretor value="1 - 2" />
));
storiesOf('Interpretor/Arithmetic').add('Plus', () => (
	<Interpretor value="10 + 2" />
));

// Comparison
storiesOf('Interpretor/Comparison').add('Equal to', () => (
	<Interpretor value="100 = 1" />
));
storiesOf('Interpretor/Comparison').add('Less than', () => (
	<Interpretor value="100 < 1" />
));
storiesOf('Interpretor/Comparison').add('Less than or equal to', () => (
	<Interpretor value="100 <= 100" />
));
storiesOf('Interpretor/Comparison').add('More than', () => (
	<Interpretor value="100 > 1" />
));
storiesOf('Interpretor/Comparison').add('More than or equal to', () => (
	<Interpretor value="100 >= 100" />
));
storiesOf('Interpretor/Comparison').add('Not equal to', () => (
	<Interpretor value="100 <> 1" />
));

// ternary

storiesOf('Interpretor/Ternary').add('IfThenElse', () => (
	<Interpretor value='if 100 > 0 then "positive" else "negative"' />
));

// BooleanAlgebra

storiesOf('Interpretor/Boolean algebra').add('And', () => (
	<Interpretor value="false and true" />
));
storiesOf('Interpretor/Boolean algebra').add('Not', () => (
	<Interpretor value="not true" />
));
storiesOf('Interpretor/Boolean algebra').add('Or', () => (
	<Interpretor value="false or true" />
));

// Functions

storiesOf('Interpretor/Function').add('Cast', () => (
	<Interpretor value='cast("10", number)' />
));
storiesOf('Interpretor/Function').add('Concatenation', () => (
	<Interpretor value='"Hello" || " " || "World"' />
));
storiesOf('Interpretor/Function').add('Substring', () => (
	<Interpretor value='substr("Hello", 1, 2)' />
));
