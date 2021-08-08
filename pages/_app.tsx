import { useEffect } from "react";
import TagManager from "react-gtm-module";

import type { AppProps } from 'next/app';

import { GTM_MANAGER } from 'lib/constants';

import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: GTM_MANAGER,
    });
  }, []);
  return <Component {...pageProps} />
}
export default MyApp
