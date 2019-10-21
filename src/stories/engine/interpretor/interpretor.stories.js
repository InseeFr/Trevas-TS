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
		value='"Welcome " || NAME || ", you are " || (if cast(AGE, integer) >= 18 then "major" else "minor") || "."'
		variables={[{ key: 'NAME', value: 'Mauro' }, { key: 'AGE', value: 26 }]}
	/>
));

stories.add('Parenthesis', () => <Interpretor value="(10 + 2) * 123456" />);

// Arithmetic

storiesOf('Interpretor/Arithmetic', module).add('Div', () => (
	<Interpretor value="3 / 2" />
));
storiesOf('Interpretor/Arithmetic', module).add('Mul', () => (
	<Interpretor value="11 * 27" />
));
storiesOf('Interpretor/Arithmetic', module).add('Minus', () => (
	<Interpretor value="1 - 2" />
));
storiesOf('Interpretor/Arithmetic', module).add('Plus', () => (
	<Interpretor value="10 + 2" />
));

// Comparison
storiesOf('Interpretor/Comparison', module).add('Equal to', () => (
	<Interpretor value="100 = 1" />
));
storiesOf('Interpretor/Comparison', module).add('Less than', () => (
	<Interpretor value="100 < 1" />
));
storiesOf('Interpretor/Comparison', module).add('Less than or equal to', () => (
	<Interpretor value="100 <= 100" />
));
storiesOf('Interpretor/Comparison', module).add('More than', () => (
	<Interpretor value="100 > 1" />
));
storiesOf('Interpretor/Comparison', module).add('More than or equal to', () => (
	<Interpretor value="100 >= 100" />
));
storiesOf('Interpretor/Comparison', module).add('Not equal to', () => (
	<Interpretor value="100 <> 1" />
));

// ternary

storiesOf('Interpretor/Ternary', module).add('IfThenElse', () => (
	<Interpretor value='if 100 > 0 then "positive" else "negative"' />
));

// BooleanAlgebra

storiesOf('Interpretor/Boolean algebra', module).add('And', () => (
	<Interpretor value="false and true" />
));
storiesOf('Interpretor/Boolean algebra', module).add('Not', () => (
	<Interpretor value="not true" />
));
storiesOf('Interpretor/Boolean algebra', module).add('Or', () => (
	<Interpretor value="false or true" />
));

/************** Functions  **************/

// Cast

storiesOf('Interpretor/Function/Cast', module).add('Into integer', () => (
	<Interpretor value='cast("10", integer)' />
));
storiesOf('Interpretor/Function/Cast', module).add('Into number', () => (
	<Interpretor value='cast("10.99", number)' />
));
storiesOf('Interpretor/Function/Cast', module).add('Into boolean', () => (
	<Interpretor value="cast(1, boolean)" />
));
storiesOf('Interpretor/Function/Cast', module).add('Into time', () => (
	<div>TODO</div>
));
storiesOf('Interpretor/Function/Cast', module).add('Into date', () => (
	<Interpretor value='cast("1998-07-12", date, "YYYY-MM-DD")' />
));
storiesOf('Interpretor/Function/Cast', module).add('Into time_period', () => (
	<div>TODO</div>
));
storiesOf('Interpretor/Function/Cast', module).add('Into string', () => (
	<Interpretor value="cast(true, string)" />
));
storiesOf('Interpretor/Function/Cast', module).add('Into duration', () => (
	<div>TODO</div>
));

// Concatenation

storiesOf('Interpretor/Function', module).add('Concatenation', () => (
	<Interpretor value='"Hello" || " " || "World"' />
));

// Substring

storiesOf('Interpretor/Function', module).add('Substring', () => (
	<Interpretor value='substr("Hello", 1, 2)' />
));
