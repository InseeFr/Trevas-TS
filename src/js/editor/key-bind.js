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
  "AcltGraph"
];

/* */
export const isEnter = key => key === "Enter" || key === "NumpadEnter";
export const isDelete = key => key === "Backspace";
export const isSpace = key => key === " ";
export const isEscape = key => key === "Escape";
export const isHome = key => key === "Home";
export const isEnd = key => key === "End";
export const isArrowUp = key => key === "ArrowUp";
export const isArrowDown = key => key === "ArrowDown";
export const isArrowLeft = key => key === "ArrowLeft";
export const isArrowRight = key => key === "ArrowRight";
export const getKeyValue = key => (key === "Tab" ? "\t" : key);
export const isUnbindedKey = key => UNBINDED_KEY.indexOf(key) !== -1;

const KEY = {
  isEnter,
  isDelete,
  isArrowUp,
  isArrowDown,
  isArrowLeft,
  isArrowRight,
  getKeyValue,
  isUnbindedKey
};

/* */
KEY.ENTER = "Enter";
KEY.ARROW_LEFT = "ArrowLeft";
KEY.ARROW_RIGHT = "ArrowRight";
KEY.ARROW_UP = "ArrowUp";
KEY.ARROW_DOWN = "ArrowDown";

export default KEY;
