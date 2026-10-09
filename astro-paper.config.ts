import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://alpkeser.github.io/",
    title: "Alp's blog",
    description: "Writing about software, photography, and the things I notice along the way.",
    author: "Alp Keser",
    profile: "https://github.com/alpkeser",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Amsterdam",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 5,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/alpkeser" },
    { name: "mail", url: "mailto:yalpkeser@gmail.com" },
    { name: "rss", url: "/rss.xml", linkTitle: "RSS feed" },
  ],
  shareLinks: [],
});
