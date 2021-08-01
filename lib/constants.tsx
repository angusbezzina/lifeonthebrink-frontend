const API_URL_DEV = process.env.WP_API_URL_DEV ?? "";
const API_URL_PROD = process.env.WP_API_URL_PROD ?? "";

export const API_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? API_URL_DEV
    : API_URL_PROD;

export const PODCAST_XML_FEED = "https://anchor.fm/s/61790d40/podcast/rss";

