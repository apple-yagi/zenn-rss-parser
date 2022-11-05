require("isomorphic-fetch");

import { Channel } from "src/types";
import { parseStringPromise } from "xml2js";

const ORIGIN = "https://zenn.dev/";
const FEED_PATH = "/feed";

export type FeedItem = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  ogImage: string;
};

export const parse = async (zennId: string): Promise<Channel> => {
  const url = ORIGIN + zennId + FEED_PATH;

  const xml = await (await fetch(url)).text();
  let {
    rss: { channel },
  } = await parseStringPromise(xml);

  channel = channel[0];

  return {
    title: channel.title[0],
    description: channel.description[0],
    link: channel.link[0],
    authorImage: channel.image[0].url[0],
    lastBuildDate: channel.lastBuildDate[0],
    items: Array.from(channel.item).map((item: any) => ({
      title: item.title[0],
      description: item.description[0],
      link: item.link[0],
      pubDate: item.pubDate[0],
      ogImage: item.enclosure[0]["$"]["url"],
    })),
  };
};
