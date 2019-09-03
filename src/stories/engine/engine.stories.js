import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Engine from 'components/engine';
import readme from './README.md';

const stories = storiesOf('Engine', module);

const styleDecorator = storyFn => (
	<div style={{ marginTop: '5%' }}>{storyFn()}</div>
);
stories.addDecorator(styleDecorator).addDecorator(withReadme(readme));

stories.add('Default', () => <Engine />);

stories.add('Plus', () => (
	<Engine
		value="a + b"
		variables={[{ key: 'a', value: '2' }, { key: 'b', value: '18' }]}
	/>
));

stories.add('Minus', () => (
	<Engine
		value="a - b"
		variables={[{ key: 'a', value: '2' }, { key: 'b', value: '18' }]}
	/>
));

stories.add('Concat', () => (
	<Engine
		value='a || " " || b'
		variables={[{ key: 'a', value: 'Hi' }, { key: 'b', value: 'Ney' }]}
	/>
));
