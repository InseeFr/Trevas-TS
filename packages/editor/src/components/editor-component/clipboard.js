const CLIPBOARD = {};

/* white-space: pre; */
const copyWithDocumentExecCommand = text => {
	const buffer = document.createElement('span');
	buffer.innerText = text;
	buffer.style.whiteSpace = 'pre';
	document.body.appendChild(buffer);
	const sel = document.getSelection();
	if (sel) {
		const range = document.createRange();
		range.selectNodeContents(buffer);
		sel.removeAllRanges();
		sel.addRange(range);
	}
	document.execCommand('copy');

	document.body.removeChild(buffer);
};

/* */
const getWithDocumentExecCommand = () => {
	const buffer = document.createElement('span');
	buffer.style.whiteSpace = 'pre';
	document.body.appendChild(buffer);
	buffer.focus();
	document.execCommand('paste');
	const content = buffer.innerText;
	console.log(buffer);
	// document.body.removeChild(buffer);

	return content;
};

/* copy text to clipboard */
const copy = text => {
	if (navigator && navigator.clipboard) {
		navigator.clipboard.writeText(text);
	} else if (document.execCommand) {
		copyWithDocumentExecCommand(text);
	} else {
		console.debug('warn%c', 'color: red;', 'implements clipboard copy.');
	}
};

const getClipboardContent = () => {
	if (navigator && navigator.clipboard) {
		return navigator.clipboard.readText();
	}
	return Promise.resolve(getWithDocumentExecCommand());
};

CLIPBOARD.getClipboardContent = getClipboardContent;
CLIPBOARD.copy = copy;

export default CLIPBOARD;
