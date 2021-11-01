import styled from '@emotion/styled';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Section from '../components/styled/Section';

const Background = styled.div`
  position: fixed;
  inset: 0;
  background: url('/images/index/bg.jpg') no-repeat center center/cover;
  filter: blur(10px) brightness(80%);
  transform: scale(1.05);
`;

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Background />
      <Head>
        <title>BlueArchive.is</title>
      </Head>
      <Header />
      <Main>
        <Section></Section>
        <Image
          src="/images/logo_global.png"
          alt="BlueArchive.is"
          width={708}
          height={188}
        />
      </Main>
    </>
  );
};

export default Home;
