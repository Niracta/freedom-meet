import type * as icons from "react-icons/si";

type Icons = keyof typeof icons;
type ExtractPlatform<S extends string> = S extends `Si${infer P}` ? P : never;
type Platforms = ExtractPlatform<Icons>;

export interface SiteConfig {
  /** Your name as you would like it to appear on your page. */
  name: string;
  /** A title or short bio to appear beneath your name. */
  title: string;
  /**
   * Add your social media links to any of the fields below.
   * You can change their order to adjust the order in which
   * they will appear on your page.
   *
   * Empty links will not appear on your profile.
   * Links must be a URL.
   */
  links: {
    /**
     * The name of the social media platform or online service
     * are linking out to. This is also used to determine what
     * icon to display on the link button.
     */
    platform: Platforms;
    /** Where you want to direct visitors when clicking the link. */
    url: string;
    /**
     * Optional: Some text to display on the link button insead
     * of the platform name which is used by default.
     */
    label?: string;
  }[];
}
