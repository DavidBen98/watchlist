export default function debounceFunction(value, delay) {
    // State and setters for debounced value
    let timer;
    return function () {
      const self = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {
        value.apply(self, args);
      }, delay)
    }
  }