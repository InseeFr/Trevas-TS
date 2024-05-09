import { format } from 'date-fns';
import { fr, enUS } from "date-fns/locale";

export const fromNavLangToLocale = () => {
	switch (navigator.language) {
		case "fr":
			return fr
		default:
			return enUS
	}
};

export const getCurrentDate = () => new Date();

const buildDateFnsMask = (mask) =>
	mask.replace(/YYYY/g, 'yyyy').replace(/YYYY/g, 'yyyy').replace(/DD/g, 'dd');

export const getDate = (dateStr, mask) =>
	mask ? format(new Date(dateStr), buildDateFnsMask(mask)) : new Date(dateStr);

export const getStringFromDate = (date, mask) =>
	mask
		? format(new Date(`${date}`), buildDateFnsMask(mask), { locale: fromNavLangToLocale() })
		: new Date(`${date}`);
