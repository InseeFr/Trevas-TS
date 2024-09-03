module.exports = {
	docs: [
		{
			type: 'link',
			label: 'Home',
			href: '/',
		},
		{
			type: 'category',
			label: 'Introduction',
			items: ['introduction/index-introduction'],
		},
		{
			type: 'category',
			label: 'Coverage',
			items: [
				'coverage/index-coverage',
				'coverage/general-operators',
				'coverage/join-operators',
				'coverage/string-operators',
				'coverage/numeric-operators',
				'coverage/comparison-operators',
				'coverage/boolean-operators',
				'coverage/time-operators',
				'coverage/set-operators',
				'coverage/hierarchical-aggregation',
				'coverage/aggregate-operators',
				'coverage/analytic-operators',
				'coverage/data-validation-operators',
				'coverage/conditional-operators',
				'coverage/clause-operators',
			],
		},
		{
			type: 'category',
			label: 'Developer guide',
			items: [
				'developer-guide/index-developer-guide',
				'developer-guide/webassembly-mode/index-webassembly-mode',
			],
		},
	],
};
