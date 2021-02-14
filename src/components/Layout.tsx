import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Footer } from './Footer';

type Props = {
  children?: ReactNode;
  title?: string;
}

const siteName = "Luke Bennett";

const Layout = ({ children, title = 'Home' }: Props) => (
  <div className="site">
    <Head>
      <title>{`${title} | ${siteName}`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="icons/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png"/>
      <link rel="manifest" href="icons/manifest.json"/>
      <meta name="msapplication-TileColor" content="#EDEDED"/>
      <meta name="msapplication-TileImage" content="icons/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#EDEDED"/>

    </Head>
    <div className="site-content">
      {children}
    </div>
    <Footer siteName={siteName} />
  </div>
)

export default Layout
