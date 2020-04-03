// @ts-nocheck

export function setupIntersectionObserverMock({
  observe = () => null,
  unobserve = () => null,
  disconnect = () => null,
  setCallback = entry => null,
  setOptions = () => null
} = {}) {
  class IntersectionObserver {
    constructor(callback, options) {
      setCallback(callback);
      setOptions(options);
    }

    observe = observe;

    unobserve = unobserve;

    disconnect = disconnect;
  }

  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: IntersectionObserver
  });

  Object.defineProperty(global, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: IntersectionObserver
  });
}
