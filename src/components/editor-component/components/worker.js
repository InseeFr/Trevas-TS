export default () => {
	self.addEventListener('message', e => {
		// eslint-disable-line no-restricted-globals
		if (!e) return;

		console.log('TODO tokenize');

		postMessage('tokenize done');
	});
};
