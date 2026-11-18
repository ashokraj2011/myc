import '@testing-library/jest-dom/vitest';

// Newer Node releases expose their own global localStorage that is unusable
// without a backing file; replace it with an in-memory Storage stand-in.
if (typeof globalThis.localStorage?.getItem !== 'function') {
  const store = new Map();
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    value: {
      getItem: (key) => (store.has(String(key)) ? store.get(String(key)) : null),
      setItem: (key, value) => void store.set(String(key), String(value)),
      removeItem: (key) => void store.delete(String(key)),
      clear: () => store.clear(),
      key: (index) => [...store.keys()][index] ?? null,
      get length() {
        return store.size;
      },
    },
  });
}

// jsdom does not implement matchMedia; components/tests that read
// responsive breakpoints via CSS need a stub so render() doesn't throw.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

// jsdom does not implement canvas; FunctionGrapher only needs a 2D context
// stub so it can render without throwing during tests that switch modes.
if (!HTMLCanvasElement.prototype.getContext || !HTMLCanvasElement.prototype.__mockedGetContext) {
  HTMLCanvasElement.prototype.__mockedGetContext = true;
  HTMLCanvasElement.prototype.getContext = () => ({
    scale: () => {},
    clearRect: () => {},
    fillRect: () => {},
    beginPath: () => {},
    moveTo: () => {},
    lineTo: () => {},
    stroke: () => {},
    fill: () => {},
    arc: () => {},
    setLineDash: () => {},
    save: () => {},
    restore: () => {},
    translate: () => {},
    measureText: () => ({ width: 0 }),
    fillText: () => {},
    strokeText: () => {},
    set strokeStyle(_v) {},
    set fillStyle(_v) {},
    set lineWidth(_v) {},
    set font(_v) {},
    set textAlign(_v) {},
    set textBaseline(_v) {},
  });
}

if (!window.AudioContext) {
  window.AudioContext = class {
    createOscillator() {
      return { connect: () => {}, start: () => {}, stop: () => {}, frequency: { value: 0 } };
    }
    createGain() {
      return {
        connect: () => {},
        gain: { value: 0, setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
      };
    }
    get destination() {
      return {};
    }
    get currentTime() {
      return 0;
    }
    close() {}
  };
}
