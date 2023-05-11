// @ts-check
import withPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache.js";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  }
};

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV !== "production",
  runtimeCaching
})(nextConfig);
