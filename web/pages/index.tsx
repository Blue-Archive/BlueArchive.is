import styled from '@emotion/styled';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Header from '../components/Header';
import Article from '../components/styled/Article';
import Section from '../components/styled/Section';

interface ISearch {
  ppap: string;
}

const Background = styled.div`
  position: fixed;
  inset: 0;
  background: url('/images/index/bg.jpg') no-repeat center top/cover;
`;

const HomeHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Home: NextPage = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<ISearch> = (data) => console.log(data);

  console.log(watch('ppap'));

  return (
    <>
      <Background />
      <Head>
        <title>BlueArchive.is</title>
      </Head>
      <Header />
      <Section height="100vh" alignItems="center" justifyContent="center">
        <HomeHeader>
          <Image
            src="/images/logo_global.png"
            alt="BlueArchive.is"
            width={500}
            height={133}
          />
        </HomeHeader>
        <Article>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" defaultValue="ppap" {...register('ppap')} />
          </form>
        </Article>
      </Section>
    </>
  );
};

export default memo(Home);
