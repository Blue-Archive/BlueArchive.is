import styled from '@emotion/styled';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import HeaderNavigation from '../components/Header';
import { Article } from '../components/styled/Article';
import { Section } from '../components/styled/Section';
import { getLocalizeCharProfileByName } from '../lib/excel/localizeCharProfile';
import Logo from '../public/images/logo_global.png';

interface IMainSearch {
  query: string;
}

const HomeHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  .home-logo {
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5));
  }
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
  const { register, handleSubmit } = useForm<IMainSearch>();
  const router = useRouter();

  //TODO: API 호출 관련 드러나지 않게 해야함
  const onSubmit: SubmitHandler<IMainSearch> = async ({ query }) => {
    query = query.trim();

    if (query) {
      const character = await getLocalizeCharProfileByName(query, location.origin);

      if (character) {
        router.push(`/students/${character.CharacterId}`);
      }
    }
  };

  return (
    <>
      <Head>
        <title>BlueArchive.is</title>
      </Head>
      <HeaderNavigation />
      <Section height="100vh" alignItems="center" justifyContent="center" flexDirection="column">
        <HomeHeader>
          <Image src={Logo} alt="BlueArchive.is" className="home-logo" />
        </HomeHeader>
        <Article height="55vh" flexDirection="column">
          <HomeForm onSubmit={handleSubmit(onSubmit)}>
            <HomeInput type="text" defaultValue="호시노" {...register('query')} />
          </HomeForm>
          <HomeReady>컨텐츠 준비중입니다...</HomeReady>
        </Article>
      </Section>
    </>
  );
};

export default memo(Home);
