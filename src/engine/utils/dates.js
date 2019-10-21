import moment from 'moment';

export const getDate = (dateStr, mask) =>
	new Date(moment.parseZone(dateStr, mask));
