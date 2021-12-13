import { format } from 'date-fns';

export const getCurrentDate = () => new Date();

export const getDate = (dateStr, mask) => format(dateStr, mask);

export const getStringFromDate = (date, mask) => format(date, mask);
