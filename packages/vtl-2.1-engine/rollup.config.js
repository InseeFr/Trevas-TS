import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import 'core-js';

const { dependencies } = require('./package.json');
const { dependencies: rootDependencies } = require('../../package.json');

export default {
	input: 'src/index.js',
	output: {
		name: 'vtl-2.1-engine',
		file: 'lib/index.js',
		format: 'cjs',
		strict: false,
		sourcemap: true,
	},
	plugins: [
		builtins(),
		postcss(),
		resolve(),
		babel({
			exclude: 'node_modules/**',
		}),
		commonjs({
			ignore: ['antlr4', 'antlr4/index'],
		}),
		replace({
			exclude: 'node_modules/**',
			ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
		}),
		terser(),
	],
	external: [...Object.keys(rootDependencies), ...Object.keys(dependencies)],
};
