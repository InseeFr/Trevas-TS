import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

const globalContainer = { margin: '5%' };

addDecorator((story) => <div style={globalContainer}>{story()}</div>);
addDecorator(withKnobs);

addParameters({
	options: {
		name: 'Trevas JS',
		addonPanelInRight: true,
	},
});

const requireAll = (requireContext) =>
	requireContext.keys().map(requireContext);
const loadStories = () =>
	requireAll(require.context('../packages', true, /stories\.js?$/));

configure(loadStories, module);
