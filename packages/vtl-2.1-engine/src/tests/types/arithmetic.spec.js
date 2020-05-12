import { getType } from '../../interpretor';

describe('type', () => {
	describe('arithmetic', () => {
		it('test basic arithmetic type', () => {
			expect(getType('(1 + 2) * 5', {})).toEqual('INTEGER');
			expect(getType('(1 - 2.5) + 1', {})).toEqual('NUMBER');
		});
	});
});
