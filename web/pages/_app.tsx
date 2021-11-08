import { ThemeProvider } from '@emotion/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Favicon from '../components/Favicon';
import Background from '../components/styled/Background';
import globalStyle from '../styles/global';
import MainFont from '../styles/MainFont';
import Miu from '../styles/Miu';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        {/* <meta name="description" content="Description" /> */}
        {/* <meta name="keywords" content="Keywords" /> */}
        <link rel="manifest" href="/manifest.json" />
        <Favicon />
        <meta
          key="theme-color-dark"
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#273869"
        />
        <meta
          key="theme-color-light"
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#3F88F2"
        />
        <title>BlueArchive.is</title>
      </Head>
      <ThemeProvider theme={theme}>
        {globalStyle}
        {Miu}
        {MainFont}
        <Background />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
