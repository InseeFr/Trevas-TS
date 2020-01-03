import { getType } from '../../interpretor';

describe('type', () => {
	describe('cast', () => {
		describe('integer', () => {
			it('test basic integer cast', () => {
				expect(getType('cast(1 - 2.5, string)', {})).toEqual('STRING');
			});
		});
	});
});
