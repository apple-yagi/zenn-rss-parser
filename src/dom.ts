import { JSDOM } from "jsdom";

if (!global.DOMParser) {
  const jsdom = new JSDOM();
  global.DOMParser = jsdom.window.DOMParser;
}
