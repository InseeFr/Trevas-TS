import { default as VTL2 } from './vtl-2.0';
import { default as JS } from './js';

const getTools = grammar => {
	switch (grammar) {
		case 'js':
			return JS;
		default:
			return VTL2;
	}
};

export default getTools;
