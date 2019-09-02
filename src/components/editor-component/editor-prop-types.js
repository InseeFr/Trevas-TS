import propTypes from "prop-types";

const token = {
  name: propTypes.string,
  value: propTypes.string.isRequired,
  start: propTypes.number.isRequired,
  stop: propTypes.number.isRequired,
  className: propTypes.string.isRequired,
  typeName: propTypes.string
};

export const tokenProps = {
  token: propTypes.shape({ ...token }),

  focused: propTypes.bool,
  numberToken: propTypes.number.isRequired,
  numberRow: propTypes.number.isRequired
};

export const lineProps = {
  tokens: propTypes.arrayOf(
    propTypes.shape({
      ...token
    })
  ),
  row: propTypes.number.isRequired
};

export const EditorProps = {};
EditorProps.tokenProps = tokenProps;
EditorProps.lineProps = lineProps;

export default EditorProps;
