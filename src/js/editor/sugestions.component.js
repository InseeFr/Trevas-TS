import React, { createRef, useEffect } from "react";

const Suggestions = ({ open, pos }) => {
  const spanEl = createRef();
  //   useEffect(() => {
  //     if (spanEl.current) {
  //       spanEl.current.style.left = `${Math.round(pos.x)}px`;
  //       spanEl.current.style.top = `${Math.round(pos.x)}px`;

  //       console.log(spanEl.current.style);
  //     }
  //   }, [pos, spanEl]);
  console.log(pos, `${Math.round(pos.x)}px`);
  return open ? (
    <span
      className="suggestions"
      style={{ left: `${Math.round(pos.x)}px`, top: `${Math.round(pos.y)}px` }}
    />
  ) : null;
};
export default Suggestions;
