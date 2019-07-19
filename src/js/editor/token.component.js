import React, { useContext, useEffect } from "react";
import classnames from "classnames";
import Cursor from "./cursor.component";
import { TokenContext } from "./editor.component";
import PropTypes from "prop-types";

const Token = ({
  value,
  select,
  focused,
  index,
  start,
  className,
  sub = false
}) => {
  const { setToken } = useContext(TokenContext);
  useEffect(() => {
    if (!sub) setToken(value);
  }, [value, setToken, sub]);
  return focused ? (
    <span className="word">
      <Token
        value={value.substr(0, index - start)}
        start={start}
        index={index}
        className={className}
        focused={false}
        sub={true}
        select={() => select(window.getSelection().anchorOffset + start)}
      />
      <span style={{ position: "relative" }}>
        <Token
          value={value.substr(index - start)}
          start={start}
          index={index}
          className={className}
          focused={false}
          sub={true}
          select={() => select(window.getSelection().anchorOffset + index)}
        />
        <Cursor />
      </span>
    </span>
  ) : (
    <span
      className={classnames("word", className)}
      onClick={() => {
        select(window.getSelection().anchorOffset + start);
      }}
    >
      {value.replace(/\s/g, " ")}
    </span>
  );
};

Token.propTypes = {
  value: PropTypes.string,
  select: PropTypes.func.isRequired,
  focused: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default Token;

export const createCheckTokens = (select, getTokens) => (
  content,
  ligneIndex,
  focused
) => {
  const tokens = getTokens(content);
  const transfo = tokens.reduce(
    ({ result, index }, { start, stop, value, kind }, idx) => {
      const tmp = [...result];
      if (index !== start) {
        tmp.push(
          <WhiteSpace
            key={`space-${idx}`}
            length={start - index}
            start={index}
            value={content.substr(index, start - index)}
            select={select}
            focused={focused && ligneIndex >= index && ligneIndex < start}
            index={ligneIndex}
            className="whitespace"
          />
        );
      }
      tmp.push(
        <Token
          key={`token-${idx}`}
          start={start}
          value={value}
          select={select}
          focused={focused && ligneIndex >= start && ligneIndex <= stop}
          index={ligneIndex}
          className={kind}
        />
      );
      return { result: tmp, index: stop + 1 };
    },
    { result: [], index: 0 }
  );
  // console.log(transfo, content.length);
  if (transfo.index < content.length) {
    transfo.result.push(
      <WhiteSpace
        key={`space-${transfo.result.length}`}
        length={content.length - transfo.index}
        start={transfo.index}
        value={content.substr(transfo.index, content.length - transfo.index)}
        select={select}
        focused={
          focused && ligneIndex >= transfo.index && ligneIndex < content.length
        }
        index={ligneIndex}
        className="whitespace"
      />
    );
  }
  return transfo.result;
};

export const WhiteSpace = ({ length, value, ...props }) => {
  return <Token {...props} value={value.replace(/\s/g, " ")} />;
};
