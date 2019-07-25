import React, { useEffect, useState, useContext } from "react";
import { EditorContext } from "./editor.component";

const Suggestions = ({ suggest, token }) => {
  const { dispatch, cursorRect } = useContext(EditorContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);

  return open ? <div className=".suggestions" /> : null;
};

export default Suggestions;
