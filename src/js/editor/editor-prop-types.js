import propTypes from "prop-types";

export const tokenProps = {
  value: propTypes.string.isRequired,
  name: propTypes.string,
  className: propTypes.string.isRequired,
  start: propTypes.number.isRequired,
  stop: propTypes.number.isRequired
};

export const lineProps = {
  tokens: propTypes.arrayOf(propTypes.shape(tokenProps)),
  number: propTypes.number.isRequired
};

export const EditorProps = {};
EditorProps.tokenProps = tokenProps;
EditorProps.lineProps = lineProps;

export default EditorProps;
