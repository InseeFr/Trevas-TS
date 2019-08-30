import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import readme from './README.md';
import Editor from 'components/editor';
import { select, boolean } from '@storybook/addon-knobs/react';

const grammars = {
	'VTL 2.0': 'vtl-2.0',
	JavaScript: 'js',
};

const dictionnary = {
	keywords: ['if', 'then', 'else'],
	operator: ['=', '>', '<', '+', '-', '*', '/'],
};

const content = [
	'toto := "toto";',
	'if toto = "toto"',
	'\tthen true',
	'\t else false;',
	'if toto >=30 then 50 else 60;',
];

const stories = storiesOf('Editor', module);

const styleDecorator = storyFn => (
	<div style={{ marginTop: '5%' }}>{storyFn()}</div>
);
stories.addDecorator(styleDecorator).addDecorator(withReadme(readme));

stories.add('Editor', () => (
	<Editor
		content={content}
		dictionnary={dictionnary}
		edit={boolean('Edit', true)}
		grammar={select('Grammar', grammars, 'vtl-2.0')}
	/>
));
