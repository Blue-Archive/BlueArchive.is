import styled from '@emotion/styled';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Header from '../components/Header';
import Article from '../components/styled/Article';
import Section from '../components/styled/Section';
import { getLocalizeCharProfileByName } from '../lib/excel/localizeCharProfile';

interface IMainSearch {
  query: string;
}

const HomeHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const HomeForm = styled.form`
  width: 100%;
  height: 100px;
  border-radius: 20px;
  margin-top: 32px;
`;

const HomeInput = styled.input`
  width: 100%;
  padding: 14px;
  background: #fff;
  border: 2px solid #adbec8;
  border-radius: 3px;
  color: #324563;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const HomeReady = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const Home: NextPage = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<IMainSearch>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IMainSearch> = async ({ query }) => {
    const character = await getLocalizeCharProfileByName(null, query);
    console.log(character);

    router.push(`/${character.CharacterId}`);
  };

  return (
    <>
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
        <Article height="55vh" flexDirection="column">
          <HomeForm onSubmit={handleSubmit(onSubmit)}>
            <HomeInput
              type="text"
              defaultValue="호시노"
              {...register('query')}
            />
          </HomeForm>
          <HomeReady>컨텐츠 준비중입니다...</HomeReady>
        </Article>
      </Section>
    </>
  );
};

export default memo(Home);
