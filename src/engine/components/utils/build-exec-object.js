export const buildExecObject = array =>
	Array.isArray(array)
		? array.reduce(
				(_, { key, value }) => (key ? { ..._, [key]: cast(value) } : _),
				{}
		  )
		: {};

const cast = value => {
	if (parseFloat(value)) return parseFloat(value);
	else if (['true', 'false'].includes(value.trim())) return JSON.parse(value);
	return value;
};
