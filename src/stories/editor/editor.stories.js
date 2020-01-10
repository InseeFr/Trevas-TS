import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Editor from 'editor/components/editor';
import { select, boolean } from '@storybook/addon-knobs/react';
import readme from './README.md';

const grammars = {
	'VTL 3.0 Istat': 'vtl-3.0-Istat',
	'VTL 2.0 Insee': 'vtl-2.0-Insee',
	'VTL 2.0': 'vtl-2.0',
};

const startRules = {
	Start: 'start',
	Expression: 'expr',
};

const dictionnary = {
	keywords: ['if', 'then', 'else'],
	operator: ['=', '>', '<', '+', '-', '*', '/'],
};

const content = [
	'// One line comment',
	'toto := true',
	'if toto /* Multi',
	'\t line',
	'\t comment */ then "ok" else "ko"',
	'if toto = "toto"',
	'\tthen true',
	'\t else false;',
	'// One line comment',
	'if toto /* Multi',
	'\t line',
	'\t comment */ then "ok" else "ko"',
	'if toto = "toto"',
	'\tthen true',
	'\t else false;',
	'// One line comment',
	'if toto /* Multi',
	'\t line',
	'\t comment */ then "ok" else "ko"',
	'if toto = "toto"',
	'\tthen true',
	'\t else false;',
	'// One line comment',
	'if toto /* Multi',
	'\t line',
	'\t comment */ then "ok" else "ko"',
	'if toto = "toto"',
	'\tthen true',
	'\t else false;',
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
		grammar={select('Grammar', grammars, 'vtl-3.0-Istat')}
		startRule={select('Start rule', startRules, 'expr')}
	/>
));
