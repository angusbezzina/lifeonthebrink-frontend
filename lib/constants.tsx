const API_URL_DEV = process.env.WP_API_URL_DEV ?? "";
const API_URL_PROD = process.env.WP_API_URL_PROD ?? "";

export const API_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? API_URL_DEV
    : API_URL_PROD;

export const PODCAST_XML_FEED = "https://anchor.fm/s/61790d40/podcast/rss";

export const GTM_MANAGER = process.env.NEXT_PUBLIC_GTM_MANAGER ?? "";
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';

export const AIRTABLE = {
  API_KEY: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY ?? "",
  BASE_ID: process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID ?? "",
  BASE_NAME: process.env.NEXT_PUBLIC_AIRTABLE_BASE_NAME ?? "",
};

export const hosts = [
  {
    name: "Alex",
    bio: "I’m conservation scientist and communicator. I completed a master’s of conservation science at the University of Queensland alongside Gabe, and there we learnt how big an impact the current loss of biodiversity is having to the planet. We met so many incredible people dedicating their lives to threatened species protection and I realised that we needed to spread their stories to everyone that will listen. I have always had a love for storytelling, through writing and photography, but audio is a completely new medium for me which is why I reached out to Gabe to see if he wanted to partner up on a podcast and show me the ropes. I was stoked when he was just as keen as me.",
    image: "/alexander.png",
    social: {
      linkedin: "https://www.linkedin.com/in/alexander-bezzina-401852124/",
      email: "alex.h.bezzina@gmail.com",
      website: "https://alexanderbezzina.com",
    },
  },
  {
    name: "Gabe",
    bio: "I'm a conservation scientist and radio broadcaster. I graduated from the same conservation science master's in conservation science as Alex which is where we realised we share a passion for uncovering and telling environmental stories. My love for audio grew out of volunteering at the local community radio station 4ZZZ as a news intern which turned into producing and hosting a weekly science show. The radio show is always a blast, but it gave me an itch to tell real conservation stories that don't get the voice they deserve. So when Alex asked if I want to make a conservation podcast, I couldn't help but say yes.",
    image: "/gabe.png",
    social: {
      linkedin: "linkedin.com/in/gabeporritt",
      email: "ausgabegeorge@gmail.com",
    },
  },
];
