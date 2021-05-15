import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import 'core-js';

const { main, module, dependencies } = require('./package.json');
const { dependencies: rootDependencies } = require('../../package.json');

export default {
	input: 'src/index.js',
	output: [
		{
			file: main,
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: module,
			format: 'esm',
			sourcemap: true,
		},
	],
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
	external: [...Object.keys(rootDependencies), ...Object.keys(dependencies)],
};
