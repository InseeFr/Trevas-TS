import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { Interpretor } from '../components';
import readme from './README.md';
import {VtlParser} from "../../../antlr-tools";
import * as dataForge from "data-forge";

const stories = storiesOf('Interpretor', module);

const styleDecorator = storyFn => (
	<div style={{ marginTop: '5%' }}>{storyFn()}</div>
);
stories.addDecorator(styleDecorator).addDecorator(withReadme(readme));

stories.add('Default', () => <Interpretor />);

stories.add('Bindings', () => (
	<Interpretor
		value='"Welcome " || NAME || ", you are " || (if cast(AGE, integer) >= 18 then "major" else "minor") || "."'
		variables={[
			{ key: 'NAME', value: 'Mauro' },
			{ key: 'AGE', value: 26 },
		]}
	/>
));

stories.add('Parenthesis', () => <Interpretor value="(10 + 2) * 123456" />);

// Arithmetic

storiesOf('Interpretor/Arithmetic', module).add('Div', () => (
	<Interpretor value="3 / 2" />
));
storiesOf('Interpretor/Arithmetic', module).add('Mul', () => (
	<Interpretor value="11 * 27" />
));
storiesOf('Interpretor/Arithmetic', module).add('Minus', () => (
	<Interpretor value="1 - 2" />
));
storiesOf('Interpretor/Arithmetic', module).add('Plus', () => (
	<Interpretor value="10 + 2" />
));

// Comparison
storiesOf('Interpretor/Comparison', module).add('Equal to', () => (
	<Interpretor value="100 = 1" />
));
storiesOf('Interpretor/Comparison', module).add('Less than', () => (
	<Interpretor value="100 < 1" />
));
storiesOf('Interpretor/Comparison', module).add('Less than or equal to', () => (
	<Interpretor value="100 <= 100" />
));
storiesOf('Interpretor/Comparison', module).add('More than', () => (
	<Interpretor value="100 > 1" />
));
storiesOf('Interpretor/Comparison', module).add('More than or equal to', () => (
	<Interpretor value="100 >= 100" />
));
storiesOf('Interpretor/Comparison', module).add('Not equal to', () => (
	<Interpretor value="100 <> 1" />
));

// ternary

storiesOf('Interpretor/Ternary', module).add('IfThenElse', () => (
	<Interpretor value='if 100 > 0 then "positive" else "negative"' />
));

// Boolean

storiesOf('Interpretor/Boolean algebra', module).add('And', () => (
	<Interpretor value="false and true" />
));
storiesOf('Interpretor/Boolean algebra', module).add('Not', () => (
	<Interpretor value="not true" />
));
storiesOf('Interpretor/Boolean algebra', module).add('Or', () => (
	<Interpretor value="false or true" />
));

/************** Functions  **************/

// Cast

storiesOf('Interpretor/Function/Cast', module).add('Into integer', () => (
	<Interpretor value='cast("10", integer)' />
));
storiesOf('Interpretor/Function/Cast', module).add('Into number', () => (
	<Interpretor value='cast("10.99", number)' />
));
storiesOf('Interpretor/Function/Cast', module).add('Into boolean', () => (
	<Interpretor value="cast(1, boolean)" />
));
storiesOf('Interpretor/Function/Cast', module).add('Into time', () => (
	<div>TODO</div>
));
storiesOf('Interpretor/Function/Cast', module).add('Into date', () => (
	<Interpretor value='cast("1998-07-12", date, "YYYY-MM-DD")' />
));
storiesOf('Interpretor/Function/Cast', module).add('Into time_period', () => (
	<div>TODO</div>
));
storiesOf('Interpretor/Function/Cast', module).add('Into string', () => (
	<Interpretor value='cast(1998-07-12, string, "YYYY-MM-DD")' />
));
storiesOf('Interpretor/Function/Cast', module).add('Into duration', () => (
	<div>TODO</div>
));

// Concatenation

storiesOf('Interpretor/Function', module).add('Concatenation', () => (
	<Interpretor value='"Hello" || " " || "World"' />
));

// Date

storiesOf('Interpretor/Function/Date', module).add('Current date', () => (
	<Interpretor value="current_date()" />
));

// Numeric

storiesOf('Interpretor/Function/Numeric', module).add('Abs', () => (
	<Interpretor value="abs(-10.5)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Ceil', () => (
	<Interpretor value="ceil(3.75)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Exp', () => (
	<Interpretor value="exp(-1.5)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Floor', () => (
	<Interpretor value="floor(-1.5)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Ln', () => (
	<Interpretor value="exp(-1.5)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Sqrt', () => (
	<Interpretor value="exp(-1.5)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Round', () => (
	<Interpretor value="round(2.618, 2)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Trunc', () => (
	<Interpretor value="trunc(2.618, 2)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Log', () => (
	<Interpretor value="log(2048, 2)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Mod', () => (
	<Interpretor value="mod(7, 3)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Power', () => (
	<Interpretor value="power(3, 2)" />
));

// String

storiesOf('Interpretor/Function/String', module).add('Length', () => (
	<Interpretor value='length("Hello")' />
));
storiesOf('Interpretor/Function/String', module).add('Replace', () => (
	<Interpretor value='replace("Hello Edi", "Edi", "Mauro")' />
));
storiesOf('Interpretor/Function/String', module).add('Upper', () => (
	<Interpretor value='upper("Hello")' />
));
storiesOf('Interpretor/Function/String', module).add('Lower', () => (
	<Interpretor value='lower("Hello")' />
));
storiesOf('Interpretor/Function/String', module).add('Substring', () => (
	<Interpretor value='substr("Hello", 1, 2)' />
));
storiesOf('Interpretor/Function/String', module).add('Trim', () => (
	<Interpretor value='trim("              before")' />
));
storiesOf('Interpretor/Function/String', module).add('L-Trim', () => (
	<Interpretor value='ltrim("              before")' />
));
storiesOf('Interpretor/Function/String', module).add('R-Trim', () => (
	<Interpretor value='rtrim("              before")' />
));
storiesOf('Interpretor/Function/String', module).add('Instr', () => (
	<Interpretor value='instr("Hello world", "world")' />
));

const columnsSurf = {
	Arrondissement: { type: VtlParser.STRING, role: VtlParser.DIMENSION },
	Value: { type: VtlParser.NUMBER, role: VtlParser.MEASURE },
};
const dsSurf = {
	type: VtlParser.DATASET,
	columns:columnsSurf,
	resolve: () => {
		return new dataForge.DataFrame({
			rows: [
				[75101, 183],
				[75102, 99],
				[75103, 117],
				[75104, 160],
				[75105, 254],
				[75106, 215],
				[75107, 409],
				[75108, 388],
				[75109, 218],
				[75110, 289],
				[75111, 367],
				[75112, 637],
				[75113, 715],
				[75114, 564],
				[75115, 848],
				[75116, 791],
				[75117, 567],
				[75118, 601],
				[75119, 679],
				[75120, 598],
			],
			columnNames: Object.keys(columnsSurf),
		});
	},
};
const columnsMun = {
	Arrondissement: { type: VtlParser.STRING, role: VtlParser.DIMENSION },
	Value: { type: VtlParser.NUMBER, role: VtlParser.MEASURE },
};
const dsMun = {
	type: VtlParser.DATASET,
	columns:columnsMun,
	resolve: () => {
		return new dataForge.DataFrame({
			rows: [
				[75104, 282],
				[75105, 781],
				[75106, 876],
				[75107, 826],
				[75108, 560],
				[75109, 516],
				[75110, 464],
				[75111, 827],
				[75112, 991],
				[75113, 1300],
				[75114, 977],
				[75115, 1786],
				[75116, 2193],
				[75117, 1449],
				[75118, 898],
				[75119, 1051],
				[75120, 925],
			],
			columnNames: Object.keys(columnsMun),
		});
	},
};
const columnsCap = {
	Arrondissement: { type: VtlParser.STRING, role: VtlParser.DIMENSION },
	Value: { type: VtlParser.NUMBER, role: VtlParser.MEASURE },
};
const dsCap = {
	type: VtlParser.DATASET,
	columns:columnsCap,
	resolve: () => {
		return new dataForge.DataFrame({
			rows: [
				[75101, 16266],
				[75102, 20900],
				[75103, 34115],
				[75104, 28088],
				[75105, 58850],
				[75106, 41100],
				[75107, 51367],
				[75108, 36808],
				[75109, 59555],
				[75110, 90372],
				[75111, 146643],
				[75112, 140296],
				[75113, 182099],
				[75114, 135964],
				[75115, 233392],
				[75116, 166361],
				[75117, 167288],
				[75118, 195233],
				[75119, 187015],
				[75120, 195814],
			],
			columnNames: Object.keys(columnsCap),
		});
	},
};


storiesOf('Interpretor/Dataset', module).add('Instr', () => (
	<Interpretor value='(dsMun + dsCap) / dsSurf' variables={
		[
			{ key: 'dsMun', value: dsMun },
			{ key: 'dsCap', value: dsCap },
			{ key: 'dsSurf', value: dsSurf }
		]
	} />
));
