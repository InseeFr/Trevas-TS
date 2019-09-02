import { default as VTL2 } from './vtl-2.0';
import { default as VTL2Insee } from './vtl-2.0-Insee';
import { default as JS } from './js';

const getTools = grammar => {
	switch (grammar) {
		case 'js':
			return JS;
		case 'vtl-2.0-Insee':
			return VTL2Insee;
		default:
			return VTL2;
	}
};

export default getTools;
