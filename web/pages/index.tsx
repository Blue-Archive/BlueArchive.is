import styled from '@emotion/styled';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #273869;
  align-items: center;
  justify-content: center;
`;

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>BlueArchive.is</title>
      </Head>
      <Header />
      <Main>
        <Image
          src="/images/bluearchiveis_global.png"
          alt="BlueArchive.is"
          width={708}
          height={188}
        />
      </Main>
    </>
  );
};

export default Home;
