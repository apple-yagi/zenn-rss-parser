import { test, expect } from "vitest";
import { parse } from ".";

test("parser unit test", async () => {
  const feed = await parse("apple_yagi");
  expect(feed).not.toHaveLength(0);
});
