import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #000;
  align-items: center;
  justify-content: center;
`

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>Blue Archive.is</title>
      </Head>
      <Main>
        <Image
          src="/images/bluearchiveis.png"
          alt=""
          width={490}
          height={187}
        />
      </Main>
    </>
  )
}

export default Home
