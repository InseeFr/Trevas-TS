import { getType } from '../../interpretor';

describe('type', () => {
	describe('arithmetic', () => {
		it('test basic arithmetic type', () => {
			// TODO The following returns FLOAT instead of INTEGER
			//expect(getType('(1 + 2) * 5', {})).toEqual('INTEGER');
			expect(getType('(1 - 2.5) + 1', {})).toEqual('FLOAT');
		});
	});
});
