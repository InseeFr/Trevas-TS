import VTL2 from './vtl-2.0';
import VTL2Insee from './vtl-2.0-Insee';
import VTL3Istat from './vtl-3.0-Istat';

export * from './vtl-3.0-Istat/parser-vtl';

const getTools = grammar => {
	switch (grammar) {
		case 'vtl-3.0':
			return VTL3Istat;
		case 'vtl-2.0':
			return VTL2;
		default:
			return VTL2Insee;
	}
};

export default getTools;
