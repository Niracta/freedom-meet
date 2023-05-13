import { SiGithub, SiVercel } from "react-icons/si";
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
      Icon: SiVercel,
      url: `https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsaeris%2Ffreedom-links`,
      label: `Deploy to Vercel`
    },
    {
      Icon: SiGithub,
      url: `https://github.com/saeris/freedom-links`,
      label: `Source Code`
    }
  ]
};
