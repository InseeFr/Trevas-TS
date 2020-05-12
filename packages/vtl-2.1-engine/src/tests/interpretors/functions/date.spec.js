import moment from 'moment';
import interpret from '../../../interpretor';

// Return a fixed timestamp when moment() is called
const mockMoment = moment();
jest.mock('moment', () => () => mockMoment);

describe('interpretor', () => {
	describe('date functions', () => {
		describe('current date function', () => {
			it('should return current date', () => {
				expect(interpret('current_date()', {})).toEqual(moment());
			});
		});
	});
});
