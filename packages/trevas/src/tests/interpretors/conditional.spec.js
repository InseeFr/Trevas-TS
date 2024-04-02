import interpret from '../../interpretor';
import { IncompatibleTypeError } from '../../errors';

describe('conditional', () => {
	it('supports if-then-else with null', () => {
		expect(interpret('if null then "not null" else "null"')).toEqual('null');
		expect(interpret('if true then null else "false"')).toBeNull();
		expect(interpret('if false then true else null')).toBeNull();
	});
	it('supports if-then-else', () => {
		expect(interpret('if (true) then "true" else "false"')).toEqual('true');
		expect(interpret('if (false) then "true" else "false"')).toEqual('false');
		expect(() => interpret('if (false) then "notnumber" else 42')).toThrow(
			IncompatibleTypeError
		);
	});
	it('tests on the nvl function', () => {
		expect(interpret('nvl(5, 0)', {})).toEqual(5);
		expect(interpret('nvl(5, null)', {})).toEqual(5);
		expect(interpret('nvl(null, 0)', {})).toEqual(0);
		expect(interpret('nvl(null, null)', {})).toBeNull();
		expect(interpret('nvl(0, 12)', {})).toEqual(0);
		expect(interpret('nvl("foo", "bar")', {})).toEqual("foo");
		expect(interpret('nvl(null, "bar")', {})).toEqual("bar");
	});
	it('supports if-then-else with integer & number', () => {
		expect(interpret('if true then 1.1 else 0')).toEqual(1.1);
	});
});
