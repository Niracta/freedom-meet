import { HiGlobeAmericas } from "react-icons/hi2";
import { SiLinkedin, SiGmail, SiSpotify, SiInstagram, SiTwitter, SiGithub } from "react-icons/si";
import type { SiteConfig } from "./internals/types";

export const config: SiteConfig = {
  name: `Rachel Taylor`,
  title: `Design • Writing • Process`,
  // You can change the order of the links array below to set
  // the sort order for the links on your page
  links: [
    { Icon: HiGlobeAmericas, url: `https://www.linkedin.com/in/rtaylordesign/`, label:`Portfolio` },
    { Icon: SiLinkedin, url: `https://www.linkedin.com/in/rtaylordesign/`, label:`LinkedIn` },
    { Icon: SiGmail, url: `mailto:designer.racheltaylor@gmail.com`, label:`Email` },
    { Icon: SiSpotify, url: `https://open.spotify.com/user/8btjsb2b9tprvld11rp5x0pol?si=7b438d96f2704417`, label:`Spotify` },
    { Icon: SiInstagram, url: `https://www.instagram.com/the_crow_wizard/`, label:`Instagram` },
    { Icon: SiTwitter, url: `https://twitter.com/rtaylor_design`, label:`Twitter` },
    { Icon: SiGithub, url: `https://github.com/Niracta`, label:`Github` }
    // Some examples of common platforms to link to
    // Facebook, Twitch, Youtube, Tiktok, Snapchat, Mastodon, Patreon, Bandcamp
    // Soundcloud, Tumblr, Artstation, Dribbl, Flickr
  ]
};
