import propTypes from "prop-types";

export const selectionProps = {
  rowStart: propTypes.number,
  rowEnd: propTypes.number
};

export const tokenProps = {
  value: propTypes.string.isRequired,
  name: propTypes.string,
  className: propTypes.string.isRequired,
  focused: propTypes.bool,
  numberToken: propTypes.number.isRequired,
  numberRow: propTypes.number.isRequired,
  start: propTypes.number.isRequired,
  stop: propTypes.number.isRequired,
  selection: propTypes.shape(selectionProps)
};

export const lineProps = {
  length: propTypes.number.isRequired,
  tokens: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      value: propTypes.string.isRequired,
      start: propTypes.number.isRequired,
      stop: propTypes.number.isRequired,
      className: propTypes.string.isRequired
    })
  ),
  number: propTypes.number.isRequired,
  index: propTypes.number,
  focused: propTypes.bool.isRequired,
  selection: propTypes.shape(selectionProps)
};

export const EditorProps = {};
EditorProps.tokenProps = tokenProps;
EditorProps.lineProps = lineProps;

export default EditorProps;
