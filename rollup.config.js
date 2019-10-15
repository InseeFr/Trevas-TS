import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import autoExternal from 'rollup-plugin-auto-external';

export default {
	input: 'src/index.js',
	output: {
		name: 'vtl-tools',
		file: 'lib/index.js',
		format: 'cjs',
		strict: false,
		globals: {
			react: 'React',
		},
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
			namedExports: {
				'./VtlLexer': ['VtlLexer'],
				'./VtlParser': ['VtlParser'],
				'./VtlListener': ['VtlListener'],
				'./VtlVisitor': ['VtlVisitor'],
			},
		}),

		replace({
			exclude: 'node_modules/**',
			ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
		}),
		autoExternal(),
	],
};
