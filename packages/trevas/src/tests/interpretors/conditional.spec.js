import interpret from '../../interpretor';
import { IncompatibleTypeError } from '../../errors';

describe('interpretor', () => {
	describe('conditional operators', () => {
		it('supports if-then-else with null', () => {
			expect(interpret('if null then "true" else "false"')).toEqual('false');
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
			expect(interpret('nvl(null, 0)', {})).toEqual(0);
		});
	});
});
