import Head from "next/head";
import Script from "next/script";

import { RECAPTCHA_SITE_KEY } from 'lib/constants';

interface HeadProps {
  title?: string;
}

const Meta = ({ title }: HeadProps) => {
  return (
    <Head>
      <title>{title ? title : "Life On The Brink - A Wildlife Conservation Podcast"}</title>
      <meta name="description" content="Telling the stories of species on the brink of extinction." />
      <meta name="keywords" content="Wildlife, Conservation, Podcast"></meta>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;1,200;1,400&display=swap" rel="stylesheet" />
      <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}></Script>
    </Head>
  );
};

export default Meta;
