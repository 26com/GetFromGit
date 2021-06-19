import { inputDebounceDelay } from '../constants';

function inputDebounce(data, callback) {
  if (localStorage.inputDebounceTimer) {
    clearTimeout(localStorage.inputDebounceTimer);
  }
  localStorage.inputDebounceTimer = setTimeout(() => { callback(data); }, inputDebounceDelay);
}

export default inputDebounce;
