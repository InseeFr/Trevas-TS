import { default as VTL2 } from './vtl-2.0';
import { default as VTL2Insee } from './vtl-2.0-Insee';

const getTools = grammar => {
	switch (grammar) {
		case 'vtl-2.0-Insee':
			return VTL2Insee;
		default:
			return VTL2;
	}
};

export default getTools;
