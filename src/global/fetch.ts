import fetch, { Response, Request, Headers } from "node-fetch";

if (!global.fetch) {
  global.fetch = fetch as typeof global.fetch;
  global.Response = Response as typeof global.Response;
  global.Headers = Headers as typeof global.Headers;
  global.Request = Request as unknown as typeof global.Request;
}
