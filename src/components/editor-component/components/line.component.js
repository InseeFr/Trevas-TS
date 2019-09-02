import React from "react";
import Token from "./token.component";
import { lineProps } from "../editor-prop-types";

const Line = ({ tokens = [], row }) => {
  return (
    <div className="row" onBlur={e => e.stopPropagation()}>
      {tokens.map((token, i) => (
        <Token
          key={`${i}-${token.value}`}
          token={token}
          numberRow={row}
          numberToken={i}
        />
      ))}
    </div>
  );
};

Line.propTypes = lineProps;

export default Line;
