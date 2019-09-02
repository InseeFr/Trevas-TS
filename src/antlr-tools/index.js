import { default as VTL2 } from './vtl-2.0';
import { default as VTL2Istat } from './vtl-2.0-Istat';
import { default as VTLNorway } from './vtl-1.1-Norway';
import { default as JS } from './js';

const getTools = grammar => {
	switch (grammar) {
		case 'js':
			return JS;
		case 'vtl-2.0-Istat':
			return VTL2Istat;
		case 'vtl-1.1-Norway':
			return VTLNorway;
		default:
			return VTL2;
	}
};

export default getTools;
