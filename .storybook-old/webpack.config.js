const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(s*)css$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader'],
				include: path.resolve(__dirname, '../'),
			},
			{ test: /\.svg$/, loader: 'file-loader' },
			{
				test: /\.ttf$/,
				use: ['file-loader'],
			},
		],
	},

	node: { fs: 'empty' },
};
