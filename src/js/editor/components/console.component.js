import React from "react";

const Console = ({ errors }) => {
  return (
    <div className="console">
      {errors.map((trace, i) => (
        <Error key={i} trace={trace} />
      ))}
    </div>
  );
};

const Error = ({ trace }) => {
  const { msg, line, column } = trace;
  return (
    <div className="erreur">
      <span className="message">{`"${msg}"`}</span>
      <span className="line">
        row <span className="count">{line}</span>
      </span>
      <span className="column">
        col <span className="count">{column}</span>
      </span>
    </div>
  );
};

export default Console;
