import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { config } from "../config";
import "../internals/global.css";

/** If Nextjs App Directory ever becomes usable
import { Metadata } from "next";

const title = "Rachel Taylor";

export const metadata: Metadata = {
  title,
  description: "Where to find me",
  creator: title,
  authors: [
    { name: title, url: "https://rtaylor.design" },
    { name: "Drake Costa", url: "https://saeris.gg" }
  ],
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  openGraph: {
    title,
    description: "Where to find me",
    url: "https://meet.rtaylor.design",
    siteName: "Rachel Taylor | Social Links",
    locale: "en-US",
    type: "website"
  },
  twitter: {
    title,
    description: "Where to find me",
    creator: "@rtaylor_design",
    card: "summary_large_image"
  },
  appleWebApp: {
    title,
    statusBarStyle: "black-translucent"
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};
 */

const _app: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{config.name}</title>
      <link rel="shortcut icon" href="/icon.svg" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="description" content={config.title} />
      <meta name="image" content="/api/og" />
      {/* OpenGraph */}
      <meta property="og:site_name" content={config.name} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_VERCEL_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config.name} />
      <meta property="og:description" content={config.title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="/api/og" />
      <meta property="og:image:alt" content={config.title} />
      {/* Twitter */}
      <meta name="twitter:title" content={config.name} />
      <meta name="twitter:description" content={config.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/api/og" />
      <meta name="twitter:image:alt" content={config.name} />
      {/* iOS */}
      <meta
        name="apple-mobile-web-app-status-bar"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta
        name="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1"
      />
    </Head>
    {/* @ts-expect-error */}
    <Component {...pageProps} />
  </>
);

export default _app;
