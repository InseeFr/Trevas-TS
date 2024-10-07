const path = require('path');

module.exports = {
	title: 'Trevas TS',
	tagline: '',
	url: 'https://trevas-ts.info',
	baseUrl: '/Trevas-TS/docs',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'inseefr', // Usually your GitHub org/user name.
	projectName: 'trevas-ts', // Usually your repo name.
	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	customFields: {
		authors: {},
	},
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// ...
			googleTagManager: {
				trackingID: 'insee',
			},
			prism: {
				additionalLanguages: [
					'csharp',
					'php',
					'ruby',
					'java',
					'rust',
					'elixir',
					'groovy',
					'sql',
				],
			},
			navbar: {
				style: 'dark',
				title: null,
				logo: {
					alt: 'Trevas TS logo',
					src: 'img/logo_trevas_short_dark.png',
				},
				// hideOnScroll: trues,
				items: [
					{
						type: 'search',
						position: 'right',
					},
					{
						to: '/introduction',
						activeBasePath: 'docs',
						label: 'Documentation',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					},
					{
						href: 'https://github.com/InseeFr/Trevas-TS',
						position: 'right',
						className: 'header-github-link',
						'aria-label': 'GitHub repository',
					},
				],
			},
			footer: {
				style: 'dark',
				copyright: ` `,
			},
			colorMode: {
				disableSwitch: false,
				defaultMode: 'dark',
				respectPrefersColorScheme: false,
			},
		}),
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			{
				docs: {
					routeBasePath: '/',
					path: 'docs',
					sidebarPath: require.resolve('./sidebars.js'),
					showLastUpdateTime: true,
				},
				theme: {
					customCss: require.resolve('./src/css/custom.scss'),
				},
				pages: {
					path: 'src/pages',
					routeBasePath: '/',
					include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
					exclude: [
						'**/_*.{js,jsx,ts,tsx,md,mdx}',
						'**/_*/**',
						'**/*.test.{js,jsx,ts,tsx}',
						'**/__tests__/**',
					],
					mdxPageComponent: '@theme/MDXPage',
					remarkPlugins: [],
					rehypePlugins: [],
					beforeDefaultRemarkPlugins: [],
					beforeDefaultRehypePlugins: [],
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
					ignorePatterns: ['/lp/**'],
					filename: 'sitemap.xml',
				},
			},
		],
	],
	plugins: [
		'docusaurus-plugin-sass',
		path.resolve(__dirname, 'plugins', 'gtm'),
		[
			require.resolve('docusaurus-lunr-search'),
			{
				indexBaseUrl: true,
				languages: ['en', 'fr', 'no'],
			},
		],
		'docusaurus-node-polyfills',
	],
	// GHA
	projectName: 'inseefr.github.io',
	organizationName: 'InseeFr',
};
