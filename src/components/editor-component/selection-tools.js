const SELECTION_TOOLS = {};

/* ({lines, selection}) =>  string  */
export const getSelection = ({ lines, selection: { stop, start } }) => {
  const copy = lines
    .map(({ value }, row) =>
      row === start.row
        ? `${value.substr(
            start.index,
            row === stop.row
              ? stop.index - start.index
              : value.length - start.index
          )}`
        : row === stop.row
        ? value.substr(0, stop.index)
        : row >= start.row && row <= stop.row
        ? value
        : null
    )
    .reduce(
      (a, value, row) =>
        row >= start.row && row <= stop.row ? [...a, value] : a,
      []
    )
    .join("\n");
  return copy;
};
/* */
SELECTION_TOOLS.getSelection = getSelection;

export default SELECTION_TOOLS;
