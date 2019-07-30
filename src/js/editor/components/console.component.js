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
  return <div className="erreur">one</div>;
};

export default Console;
