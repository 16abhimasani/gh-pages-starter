import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import "../styles/styles.scss";

const GitHubWebsite: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>My GitHub Website</title>
      <meta name="description" content="My GitHub Website" key="description" />
      <meta
        name="twitter:image"
        content="/banners/logo.jpg"
        key="twitter-image"
      />
      <meta property="og:image" content="/banners/logo.jpg" key="og-image" />
      <meta name="author" content="Me, Myself, & I" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <div className="layout">
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  </>
);

export default GitHubWebsite;
