import React, { useEffect, useState } from "react";

const Suggestions = ({ open, pos, prefix, suggest }) => {
  const [openReally, setOpenReally] = useState(false);
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    if (suggest && open) {
      const suggestions = suggest(prefix);
      const how = suggestions.variables.length;
      setOpenReally(open && how > 0);
      setVariables(suggestions.variables);
    } else {
      setOpenReally(false);
      setVariables([]);
    }
  }, [suggest, prefix, open]);

  return open ? (
    <span
      className="suggestions"
      style={{ left: `${Math.round(pos.x)}px`, top: `${Math.round(pos.y)}px` }}
    >
      <ul>
        {variables.length > 0
          ? variables.map(v => <Item key={v} token={v} prefix={prefix} />)
          : null}
      </ul>
    </span>
  ) : null;
};

const Item = ({ prefix, token }) => {
  return (
    <li key={`${token}`} className="suggestion-variable">
      <span className="prefix">{prefix}</span>
      <span className="token">{token.substr(prefix.length)}</span>
    </li>
  );
};

export default Suggestions;
