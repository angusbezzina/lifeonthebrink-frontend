import Parser from "rss-parser";

import { PODCAST_XML_FEED } from "lib/constants";

export async function getAllEpisodes() {
  const parser = new Parser();
  const feed = await parser.parseURL(PODCAST_XML_FEED);
  const { items } = feed;

  return items;
}

interface Enclosure {
    url: string;
    length: string;
    type: any;
};

export interface Episode {
  creator: string;
  title: string;
  link: string;
  pubDate: Date;
  enclosure: Enclosure;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: Date;
  itunes: {
    summary: string;
    explicit: string;
    duration: string;
    image: string;
    episode: string;
    season: string;
  };
}

export interface Podcast {
  items: [Episode],
  feedUrl: string,
  image: {
    link: string,
    url: string,
    title: string,
  },
  paginationLinks: {
    self: string,
  },
  creator: string,
  title: string,
  description: string,
  author: string,
  generator: string,
  link: string,
  language: string,
  copyright: string,
  lastBuildDate: string,
  itunes: {
    owner: {
      name: string,
      email: string,
    },
    image: string,
    categories: [string],
    categoriesWithSubs: [any],
    author: string,
    summary: string,
    explicit: string,
  }
}