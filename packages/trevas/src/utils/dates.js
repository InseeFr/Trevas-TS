import { format } from 'date-fns';

export const getCurrentDate = () => new Date();

const buildDateFnsMask = (mask) =>
	mask.replace(/YYYY/g, 'yyyy').replace(/YYYY/g, 'yyyy').replace(/DD/g, 'dd');

export const getDate = (dateStr, mask) =>
	mask ? format(new Date(dateStr), buildDateFnsMask(mask)) : new Date(dateStr);

export const getStringFromDate = (date, mask) =>
	mask
		? format(new Date(`${date}`), buildDateFnsMask(mask))
		: new Date(`${date}`);
