const CLIPBOARD = {};

/* copy text to clipboard */
const copy = text => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else if (document.execCommand) {
    const buffer = document.createElement("input");
    buffer.value = text;
    const body = document.querySelector("body");
    body.appendChild(buffer);
    buffer.select();
    document.execCommand("copy");

    body.removeChild(buffer);
  } else {
    console.debug("warn%c", "color: red;", "implements clipboard copy.");
  }
};

CLIPBOARD.copy = copy;

export default CLIPBOARD;
