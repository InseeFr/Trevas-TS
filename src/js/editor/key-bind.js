const UNBINDED_KEY = [
  "Control",
  "Alt",
  "Shift",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  "CapsLock",
  "Escape",
  "AltGraph",
  "Insert"
];

/* */
export const isUnbindedKey = key => UNBINDED_KEY.indexOf(key) !== -1;

const KEY = { isUnbindedKey };

/* */
KEY.ENTER = "Enter";
KEY.ARROW_LEFT = "ArrowLeft";
KEY.ARROW_RIGHT = "ArrowRight";
KEY.ARROW_UP = "ArrowUp";
KEY.ARROW_DOWN = "ArrowDown";
KEY.BACK_SPACE = "Backspace";
KEY.DELETE = "Delete";
KEY.ENTER = "Enter";
KEY.HOME = "Home";
KEY.END = "End";
KEY.TAB = "Tab";
KEY.PAGE_UP = "PageUp";
KEY.PAGE_DOWN = "PageDown";

export default KEY;
