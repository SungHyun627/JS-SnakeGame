import { isDirectionKeycode } from './validation.js';

export const debounce = (callback, delay) => {
  let timerId;
  return (e) => {
    if (timerId && isDirectionKeycode(e.key)) clearTimeout(timerId);
    if (isDirectionKeycode(e.key)) timerId = setTimeout(callback, delay, e);
  };
};

export const throttle = (callback, delay) => {
  let lastTime = 0;
  return (e) => {
    const now = Date.now();
    if (isDirectionKeycode(e.key) && now - lastTime > delay) {
      lastTime = now;
      callback(e);
    }
  };
};
