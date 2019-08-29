import VTL2 from './vtl-2.0';
import JS from './js';

const getTools = grammar => {
	switch (grammar) {
		case 'js':
			return JS;
		default:
			return VTL2;
	}
};

export default getTools;
