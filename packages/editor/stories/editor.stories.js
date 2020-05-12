import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { select, boolean } from '@storybook/addon-knobs/react';
import * as VTL20 from '@inseefr/vtl-2.0-antlr-tools';
import * as VTL21 from '@inseefr/vtl-2.1-antlr-tools';
import { Editor } from '../src';
import readme from './README.md';

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

const styleDecorator = (storyFn) => (
	<div style={{ marginTop: '5%' }}>{storyFn()}</div>
);
stories.addDecorator(styleDecorator).addDecorator(withReadme(readme));

stories.add('VTL 2.1', () => (
	<Editor
		content={content}
		dictionnary={dictionnary}
		edit={boolean('Edit', true)}
		antlrTools={VTL21}
		startRule={select('Start rule', startRules, 'expr')}
	/>
));

stories.add('VTL 2.0', () => (
	<Editor
		content={content}
		dictionnary={dictionnary}
		edit={boolean('Edit', true)}
		antlrTools={VTL20}
		startRule={select('Start rule', startRules, 'expr')}
	/>
));
