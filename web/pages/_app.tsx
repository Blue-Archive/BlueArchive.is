import GlobalStyle from '../styles/global'
import Miu from '../styles/Miu'
import MainFont from '../styles/MainFont'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>BlueArchive.is</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Miu />
        <MainFont />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
