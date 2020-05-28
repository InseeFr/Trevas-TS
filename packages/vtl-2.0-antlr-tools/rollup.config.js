import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import 'core-js';

const { dependencies: rootDependencies } = require('../../package.json');

export default {
	input: 'src/index.js',
	output: {
		name: 'vtl-2.0-antlr-tools',
		file: 'lib/index.js',
		format: 'cjs',
		strict: false,
		sourcemap: true,
	},
	plugins: [
		builtins(),
		resolve(),
		babel({
			exclude: '../../node_modules/**',
		}),
		commonjs({
			ignore: ['antlr4', 'antlr4/index'],
		}),
		replace({
			exclude: '../../node_modules/**',
			ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
		}),
		terser(),
	],
	external: [...Object.keys(rootDependencies)],
};
