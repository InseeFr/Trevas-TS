import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { VtlParser } from '@inseefr/vtl-2.0-antlr-tools';
import * as dataForge from 'data-forge';
import { Interpretor } from '../components';
import readme from './README.md';

const stories = storiesOf('Interpretor', module);

const styleDecorator = (storyFn) => (
	<div style={{ marginTop: '5%' }}>{storyFn()}</div>
);
stories.addDecorator(styleDecorator).addDecorator(withReadme(readme));

stories.add('Default', () => <Interpretor />);

stories.add('Bindings', () => (
	<Interpretor
		expression='"Welcome " || NAME || ", you are " || (if cast(AGE, integer) >= 18 then "major" else "minor") || "."'
		bindings={{ NAME: 'Mauro', AGE: 26 }}
	/>
));

stories.add('Parenthesis', () => (
	<Interpretor expression="(10 + 2) * 123456" />
));

// Arithmetic

storiesOf('Interpretor/Arithmetic', module).add('Div', () => (
	<Interpretor expression="3 / 2" />
));
storiesOf('Interpretor/Arithmetic', module).add('Mul', () => (
	<Interpretor expression="11 * 27" />
));
storiesOf('Interpretor/Arithmetic', module).add('Minus', () => (
	<Interpretor expression="1 - 2" />
));
storiesOf('Interpretor/Arithmetic', module).add('Plus', () => (
	<Interpretor expression="10 + 2" />
));

// Comparison
storiesOf('Interpretor/Comparison', module).add('Equal to', () => (
	<Interpretor expression="100 = 1" />
));
storiesOf('Interpretor/Comparison', module).add('Less than', () => (
	<Interpretor expression="100 < 1" />
));
storiesOf('Interpretor/Comparison', module).add('Less than or equal to', () => (
	<Interpretor expression="100 <= 100" />
));
storiesOf('Interpretor/Comparison', module).add('More than', () => (
	<Interpretor expression="100 > 1" />
));
storiesOf('Interpretor/Comparison', module).add('More than or equal to', () => (
	<Interpretor expression="100 >= 100" />
));
storiesOf('Interpretor/Comparison', module).add('Not equal to', () => (
	<Interpretor expression="100 <> 1" />
));

// Conditional

storiesOf('Interpretor/Conditional', module).add('IfThenElse', () => (
	<Interpretor expression='if 100 > 0 then "positive" else "negative"' />
));

storiesOf('Interpretor/Conditional', module).add('Nvl', () => (
	<Interpretor expression="nvl(null, 5)" />
));

// Boolean

storiesOf('Interpretor/Boolean algebra', module).add('And', () => (
	<Interpretor expression="false and true" />
));
storiesOf('Interpretor/Boolean algebra', module).add('Not', () => (
	<Interpretor expression="not true" />
));
storiesOf('Interpretor/Boolean algebra', module).add('Or', () => (
	<Interpretor expression="false or true" />
));

/** ************ Functions  ************* */

// Cast

storiesOf('Interpretor/Function/Cast', module).add('Into integer', () => (
	<Interpretor expression='cast("10", integer)' />
));
storiesOf('Interpretor/Function/Cast', module).add('Into number', () => (
	<Interpretor expression='cast("10.99", number)' />
));
storiesOf('Interpretor/Function/Cast', module).add('Into boolean', () => (
	<Interpretor expression="cast(1, boolean)" />
));
storiesOf('Interpretor/Function/Cast', module).add('Into time', () => (
	<div>TODO</div>
));
storiesOf('Interpretor/Function/Cast', module).add('Into date', () => (
	<Interpretor expression='cast("1998-07-12", date, "YYYY-MM-DD")' />
));
storiesOf('Interpretor/Function/Cast', module).add('Into time_period', () => (
	<div>TODO</div>
));
storiesOf('Interpretor/Function/Cast', module).add('Into string', () => (
	<Interpretor expression='cast("1998-07-12", string, "YYYY-MM-DD")' />
));
storiesOf('Interpretor/Function/Cast', module).add('Into duration', () => (
	<div>TODO</div>
));
const dsI = {
	dataStructure: { col_1: {}, col_2: {} },
	dataPoints: { col_1: ['1', '2', '3'], col_2: ['-1', null] },
};
storiesOf('Interpretor/Function/Cast/Dataset', module).add(
	'Into integer',
	() => <Interpretor expression="cast(dsI, integer)" bindings={{ dsI }} />
);
const dsN = {
	dataStructure: {
		col_1: {
			name: 'col_1',
			role: 'MEASURE',
		},
	},
	dataPoints: {
		col_1: ['1.1', null, '3'],
	},
};
storiesOf('Interpretor/Function/Cast/Dataset', module).add(
	'Into number',
	() => <Interpretor expression="cast(dsN, number)" bindings={{ dsN }} />
);

// Comparison

storiesOf('Interpretor/Function/Comparison', module).add('Null', () => (
	<Interpretor expression="isnull(test)" bindings={{ test: null }} />
));

// Concatenation

storiesOf('Interpretor/Function', module).add('Concatenation', () => (
	<Interpretor expression='"Hello" || " " || "World"' />
));

// Date

storiesOf('Interpretor/Function/Date', module).add('Current date', () => (
	<Interpretor expression="current_date()" />
));

// Numeric

storiesOf('Interpretor/Function/Numeric', module).add('Abs', () => (
	<Interpretor expression="abs(-10.5)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Ceil', () => (
	<Interpretor expression="ceil(3.75)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Exp', () => (
	<Interpretor expression="exp(-1.5)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Floor', () => (
	<Interpretor expression="floor(-1.5)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Ln', () => (
	<Interpretor expression="ln(5)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Sqrt', () => (
	<Interpretor expression="sqrt(5)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Round', () => (
	<Interpretor expression="round(2.618, 2)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Trunc', () => (
	<Interpretor expression="trunc(2.618, 2)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Log', () => (
	<Interpretor expression="log(2048, 2)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Mod', () => (
	<Interpretor expression="mod(7, 3)" />
));
storiesOf('Interpretor/Function/Numeric', module).add('Power', () => (
	<Interpretor expression="power(3, 2)" />
));

// String

storiesOf('Interpretor/Function/String', module).add('Length', () => (
	<Interpretor expression='length("Hello")' />
));
storiesOf('Interpretor/Function/String', module).add('Replace', () => (
	<Interpretor expression='replace("Hello Edi", "Edi", "Mauro")' />
));
storiesOf('Interpretor/Function/String', module).add('Upper', () => (
	<Interpretor expression='upper("Hello")' />
));
storiesOf('Interpretor/Function/String', module).add('Lower', () => (
	<Interpretor expression='lower("Hello")' />
));
storiesOf('Interpretor/Function/String', module).add('Substring', () => (
	<Interpretor expression='substr("Hello", 1, 2)' />
));
storiesOf('Interpretor/Function/String', module).add('Trim', () => (
	<Interpretor expression='trim("              before")' />
));
storiesOf('Interpretor/Function/String', module).add('L-Trim', () => (
	<Interpretor expression='ltrim("              before")' />
));
storiesOf('Interpretor/Function/String', module).add('R-Trim', () => (
	<Interpretor expression='rtrim("              before")' />
));
storiesOf('Interpretor/Function/String', module).add('Instr', () => (
	<Interpretor expression='instr("Hello world", "world")' />
));

// Dataset functions

storiesOf('Interpretor/Function/Dataset', module).add('Count', () => {
	const ds = {
		dataStructure: {
			col_1: {
				name: 'col_1',
				role: 'MEASURE',
			},
		},
		dataPoints: {
			col_1: [1, 2, 3],
		},
	};
	return <Interpretor expression="count(ds)" bindings={{ ds }} />;
});

/** Functions, dataset */
storiesOf('Interpretor/Function/Dataset', module).add('First value', () => {
	const ds = {
		dataStructure: {
			col_1: {
				name: 'id',
				role: 'IDENTIFIER',
			},
			col_2: {
				name: 'col_2',
				role: 'MEASURE',
			},
		},
		dataPoints: {
			col_1: [1, 2, 3],
			col_2: [10, 20, 30],
		},
	};
	return <Interpretor expression="first_value(ds over())" bindings={{ ds }} />;
});

storiesOf('Interpretor/Function/Dataset', module).add('Last value', () => {
	const ds = {
		dataStructure: {
			col_1: {
				name: 'col_1',
				role: 'MEASURE',
			},
		},
		dataPoints: {
			col_1: [1, 2, 3],
		},
	};
	return <Interpretor expression="last_value(ds over())" bindings={{ ds }} />;
});

storiesOf('Interpretor/Function/Dataset', module).add('Average', () => {
	const ds = {
		dataStructure: {
			col_1: {
				name: 'col_1',
				role: 'MEASURE',
			},
		},
		dataPoints: {
			col_1: [1, 2, -1],
		},
	};
	return <Interpretor expression="avg(ds)" bindings={{ ds }} />;
});

storiesOf('Interpretor/Function/Dataset', module).add(
	'Deviation - Sample',
	() => {
		const ds = {
			dataStructure: {
				col_1: {
					name: 'col_1',
					role: 'MEASURE',
				},
			},
			dataPoints: {
				col_1: [1, 2, 3],
			},
		};
		return <Interpretor expression="stddev_samp(ds)" bindings={{ ds }} />;
	}
);

storiesOf('Interpretor/Function/Dataset', module).add(
	'Deviation - Standard',
	() => {
		const ds = {
			dataStructure: {
				col_1: {
					name: 'col_1',
					role: 'MEASURE',
				},
			},
			dataPoints: {
				col_1: [1, 2, 3],
			},
		};
		return <Interpretor expression="stddev_pop(ds)" bindings={{ ds }} />;
	}
);

storiesOf('Interpretor/Function/Dataset', module).add('Max', () => {
	const ds = {
		dataStructure: {
			col_1: {
				name: 'col_1',
				role: 'MEASURE',
			},
		},
		dataPoints: {
			col_1: [1, 2, 3],
		},
	};
	return <Interpretor expression="max(ds)" bindings={{ ds }} />;
});

storiesOf('Interpretor/Function/Dataset', module).add('Median', () => {
	const ds = {
		dataStructure: {
			col_1: {
				name: 'col_1',
				role: 'MEASURE',
			},
		},
		dataPoints: {
			col_1: [1, 2, 5, 10000],
		},
	};
	return <Interpretor expression="median(ds)" bindings={{ ds }} />;
});

storiesOf('Interpretor/Function/Dataset', module).add('Min', () => {
	const ds = {
		dataStructure: {
			col_1: {
				name: 'col_1',
				role: 'MEASURE',
			},
		},
		dataPoints: {
			col_1: [1, 2, 3],
		},
	};
	return <Interpretor expression="min(ds)" bindings={{ ds }} />;
});

storiesOf('Interpretor/Function/Dataset', module).add('Sum', () => {
	const ds = {
		dataStructure: {
			col_1: {
				name: 'col_1',
				role: 'MEASURE',
			},
		},
		dataPoints: {
			col_1: ['1', '2', '3'],
		},
	};
	return <Interpretor expression="sum(cast(ds, integer))" bindings={{ ds }} />;
});

storiesOf('Interpretor/Function/Dataset', module).add(
	'Variance - Sample',
	() => {
		const ds = {
			dataStructure: {
				col_1: {
					name: 'col_1',
					role: 'MEASURE',
				},
			},
			dataPoints: {
				col_1: [1, 2, 3],
			},
		};
		return <Interpretor expression="var_samp(ds)" bindings={{ ds }} />;
	}
);

storiesOf('Interpretor/Function/Dataset', module).add(
	'Variance - Standard',
	() => {
		const ds = {
			dataStructure: {
				col_1: {
					name: 'col_1',
					role: 'MEASURE',
				},
			},
			dataPoints: {
				col_1: [1, 2, 3],
			},
		};
		return <Interpretor expression="var_pop(ds)" bindings={{ ds }} />;
	}
);

const columnsSurf = {
	Arrondissement: { type: VtlParser.STRING, role: VtlParser.DIMENSION },
	Value: { type: VtlParser.NUMBER, role: VtlParser.MEASURE },
};
const dsSurf = {
	type: VtlParser.DATASET,
	columns: columnsSurf,
	resolve: () =>
		new dataForge.DataFrame({
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
		}),
};

const columnsMun = {
	Arrondissement: { type: VtlParser.STRING, role: VtlParser.DIMENSION },
	Value: { type: VtlParser.NUMBER, role: VtlParser.MEASURE },
};
const dsMun = {
	type: VtlParser.DATASET,
	columns: columnsMun,
	resolve: () =>
		new dataForge.DataFrame({
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
		}),
};

const columnsCap = {
	Arrondissement: { type: VtlParser.STRING, role: VtlParser.DIMENSION },
	Value: { type: VtlParser.NUMBER, role: VtlParser.MEASURE },
};
const dsCap = {
	type: VtlParser.DATASET,
	columns: columnsCap,
	resolve: () =>
		new dataForge.DataFrame({
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
		}),
};

storiesOf('Interpretor/Dataset', module).add('Arithmetic', () => (
	<Interpretor
		expression="(dsMun + dsCap) / dsSurf"
		bindings={{
			dsMun,
			dsCap,
			dsSurf,
		}}
	/>
));
