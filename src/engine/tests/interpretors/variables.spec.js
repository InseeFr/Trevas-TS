import interpret from '../../interpretor';
import { VtlParser } from '../../../antlr-tools';

describe('interpretor', () => {
	describe('variable', () => {
		it('should support internal types', () => {
			expect(
				interpret('aVariable', {
					aVariable: { resolve: () => 'aValue', type: VtlParser.STRING },
				})
			).toEqual('aValue');
		});
		it('should recognize types', () => {
			const bindings = {
				aString: 'string!',
				anInt: 1234,
				aFloat: 12.34,
			};
			expect(interpret('aString', bindings)).toEqual('string!');
			expect(interpret('anInt', bindings)).toEqual(1234);
			expect(interpret('aFloat', bindings)).toEqual(12.34);
		});
	});
});
