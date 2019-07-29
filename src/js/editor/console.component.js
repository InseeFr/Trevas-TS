import React from "react";

const Console = ({ errors }) => {
  return (
    <div className="console">
      {errors.map(trace => (
        <Error trace={trace} />
      ))}
    </div>
  );
};

const Error = ({ trace }) => {
  return <div className="erreur">one</div>;
};

export default Console;
