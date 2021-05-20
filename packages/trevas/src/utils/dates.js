import moment from 'moment';

export const getCurrentDate = () => moment();

export const getDate = (dateStr, mask) => moment(dateStr).format(mask);

export const getStringFromDate = (date, mask) => moment(date).format(mask);
