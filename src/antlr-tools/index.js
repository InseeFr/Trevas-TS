import { default as VTL2 } from './vtl-2.0';
import { default as VTL2Insee } from './vtl-2.0-Insee';

const getTools = grammar => {
	switch (grammar) {
		case 'vtl-2.0':
			return VTL2;
		default:
			return VTL2Insee;
	}
};

export default getTools;
