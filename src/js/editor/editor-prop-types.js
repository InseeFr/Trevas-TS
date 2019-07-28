import propTypes from 'prop-types';

const token = {
	name: propTypes.string,
	value: propTypes.string.isRequired,
	start: propTypes.number.isRequired,
	stop: propTypes.number.isRequired,
	className: propTypes.string.isRequired,
	typeName: propTypes.string
};

export const tokenProps = {
	// value: propTypes.string.isRequired,
	// name: propTypes.string,
	// className: propTypes.string.isRequired,
	// start: propTypes.number.isRequired,
	// stop: propTypes.number.isRequired,

	token: propTypes.shape({ ...token }),

	focused: propTypes.bool,
	numberToken: propTypes.number.isRequired,
	numberRow: propTypes.number.isRequired
};

export const lineProps = {
	length: propTypes.number.isRequired,
	tokens: propTypes.arrayOf(
		propTypes.shape({
			...token
		})
	),
	number: propTypes.number.isRequired,
	index: propTypes.number,
	focused: propTypes.bool.isRequired
};

export const EditorProps = {};
EditorProps.tokenProps = tokenProps;
EditorProps.lineProps = lineProps;

export default EditorProps;
