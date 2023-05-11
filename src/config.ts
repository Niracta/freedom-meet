import type { SiteConfig } from "./internals/types";

export const config: SiteConfig = {
  name: `freedom links`,
  title: `a self-hostable microsite for sharing your social links`,
  // You can change the order of the links array below to set
  // the sort order for the links on your page
  links: [
    // You'll want to delete these entries, unless you
    // want a deploy link on your site! They are here to
    // demonstrate how the config works.
    {
      platform: `Vercel`,
      url: `https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsaeris%2Ffreedom-links`,
      label: `Deploy to Vercel`
    },
    {
      platform: `Github`,
      url: `https://github.com/saeris/freedom-links`,
      label: `Source Code`
    },
    // Some examples of common platforms to link to
    { platform: `Twitter`, url: `` },
    { platform: `Facebook`, url: `` },
    { platform: `Instagram`, url: `` },
    { platform: `Twitch`, url: `` },
    { platform: `Youtube`, url: `` },
    { platform: `Tiktok`, url: `` },
    { platform: `Snapchat`, url: `` },
    { platform: `Mastodon`, url: `` },
    { platform: `Linkedin`, url: `` },
    { platform: `Patreon`, url: `` },
    { platform: `Discord`, url: `` },
    { platform: `Bandcamp`, url: `` },
    { platform: `Spotify`, url: `` },
    { platform: `Soundcloud`, url: `` },
    { platform: `Tumblr`, url: `` },
    { platform: `Artstation`, url: `` },
    { platform: `Flickr`, url: `` }
  ]
};
