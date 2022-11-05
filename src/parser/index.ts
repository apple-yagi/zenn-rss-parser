require("isomorphic-fetch");
import "../global/dom";

const ORIGIN = "https://zenn.dev/";
const FEED_PATH = "/feed";

export type FeedItem = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  ogImage: string;
};

export const parse = async (zennId: string): Promise<FeedItem[]> => {
  const url = ORIGIN + zennId + FEED_PATH;

  const text = await (await fetch(url)).text();
  const feed = new DOMParser().parseFromString(text, "text/xml");
  const arr = Array.from(feed.querySelectorAll("item"));

  const items: FeedItem[] = [];

  for (const item of arr) {
    const title = item.querySelector("title")?.textContent || "";
    const description = item.querySelector("description")?.textContent || "";
    const link = item.querySelector("link")?.textContent || "";
    const pubDate = item.querySelector("pubDate")?.textContent || "";
    const ogImage = item.querySelector("enclosure")?.getAttribute("url") || "";

    items.push({
      title,
      description,
      link,
      pubDate,
      ogImage,
    });
  }
  return items;
};
