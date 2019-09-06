export default () => {
	console.log('coucou');
	importScripts('/main.12eea7c96b2f0ba8cb4d.bundle.js');
	self.addEventListener(
		'message',
		function(e) {
			self.postMessage(e.data);
		},
		false
	);
};
