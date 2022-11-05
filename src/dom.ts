import { JSDOM } from "jsdom";

if (!global.DOMParser) {
  const jsdom = new JSDOM();
  globalThis.DOMParser = jsdom.window.DOMParser;
}
