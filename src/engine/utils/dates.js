import moment from 'moment';

export const getCurrentDate = () => moment();

// TODO: check
export const getDate = (dateStr, mask) =>
	new Date(moment.parseZone(dateStr, mask));

export const getStringFromDate = (date, mask) => moment(date).format(mask);
