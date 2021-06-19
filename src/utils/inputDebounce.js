import { INPUT_DEBOUNCE_DELAY } from '../constants';

function inputDebounce(data, callback) {
  if (localStorage.inputDebounceTimer) {
    clearTimeout(localStorage.inputDebounceTimer);
  }
  localStorage.inputDebounceTimer = setTimeout(() => { callback(data); }, INPUT_DEBOUNCE_DELAY);
}

export default inputDebounce;
