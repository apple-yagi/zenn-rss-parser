import { test, expect } from "vitest";
import { parse } from ".";

test("parser unit test", async () => {
  const channel = await parse("apple_yagi");
  expect(channel.items).not.toHaveLength(0);
});
