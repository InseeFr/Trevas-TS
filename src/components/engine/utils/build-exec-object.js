export const buildExecObject = array =>
	Array.isArray(array)
		? array.reduce(
				(_, { key, value }) => (key ? { ..._, [key]: parseFloat(value) } : _),
				{}
		  )
		: {};
