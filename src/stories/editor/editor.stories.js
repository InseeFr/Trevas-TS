import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Editor from 'editor/components/editor';
import { select, boolean } from '@storybook/addon-knobs/react';
import readme from './README.md';

const grammars = {
	'VTL 2.0 Insee': 'vtl-2.0-Insee',
	'VTL 2.0': 'vtl-2.0',
};

const dictionnary = {
	keywords: ['if', 'then', 'else'],
	operator: ['=', '>', '<', '+', '-', '*', '/'],
};

const content = [
	'// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	'if toto /* un commentaire',
	'\t sur plusieurs ',
	'\t lignes. */ then else ',
	'if toto = "toto"',
	'\tthen true',
	'\t else false;',
	'if toto >=30 then 50 else 60;',
	'// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	'if toto /* un commentaire',
	'\t sur plusieurs ',
	'\t lignes. */ then else ',
	'if toto = "toto"',
	'\tthen true',
	'\t else false;',
	'if toto >=30 then 50 else 60;',
	'// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	'if toto /* un commentaire',
	'\t sur plusieurs ',
	'\t lignes. */ then else ',
	'if toto = "toto"',
	'\tthen true',
	'\t else false;',
	'if toto >=30 then 50 else 60;',
	'// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	'if toto /* un commentaire',
	'\t sur plusieurs ',
	'\t lignes. */ then else ',
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
		grammar={select('Grammar', grammars, 'vtl-2.0-Insee')}
	/>
));
