import styled from '@emotion/styled';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { memo, useEffect } from 'react';
import HeaderNavigation from '../components/Header';
import { Article } from '../components/styled/Article';
import { Section } from '../components/styled/Section';
import { Space } from '../components/styled/Space';
import { getLocalizeCharProfileById } from '../lib/excel/localizeCharProfile';
import { LocalizeCharProfileType } from '../lib/excel/types';
import { useAppDispatch } from '../lib/hooks';
import { updateLocalizeCharProfile } from '../lib/store/localizeCharProfileSlice';

interface IHomeProps {
  localizeCharProfile: LocalizeCharProfileType;
}

const PortraitImageBox = styled.div`
  position: relative;
  display: flex;
  min-width: 304px;
  padding: 15px;
  background-image: linear-gradient(-48.4deg, #91050f 49.75%, #236e9b 50.25%);
  border: 2px solid #d8dbdf;
  border-radius: 70px 8px;
  box-shadow: 0px 2px 3px #000;
  overflow: visible;
  margin: 0 2rem;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -8px;
    display: block;
    width: 90px;
    height: 90px;
    background: url('/images/id/portrait-clip.png') no-repeat left top;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: -8px;
    display: block;
    width: 90px;
    height: 90px;
    background: url('/images/id/portrait-clip.png') no-repeat right bottom;
    z-index: 0;
  }

  & > span {
    z-index: 1;
  }
`;

const CharacterProfileHeader = styled.header`
  display: flex;
  width: 100%;
`;

const ProfileInfoContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
`;

const ProfileInfoNameBox = styled.div`
  width: 100%;
  height: 3.5rem;
  padding: 0.75rem;
  background-color: rgba(45, 76, 128, 0.75);
  border-radius: 4px;
  color: #fff;
  /* text-align: center; */
  transform: skew(-10deg);

  h1 {
    font-weight: 500;
    transform: skew(10deg);
  }
`;

const Home: NextPage<IHomeProps> = ({ localizeCharProfile }): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateLocalizeCharProfile(localizeCharProfile));
  }, [dispatch, localizeCharProfile]);

  return (
    <>
      <Head>
        <title>BlueArchive.is</title>
      </Head>
      <HeaderNavigation />
      <Space height="4rem" />
      <Section alignItems="center">
        <Article flexDirection="column">
          <CharacterProfileHeader>
            <PortraitImageBox>
              <Image
                width={(404 * 2) / 3}
                height={(456 * 2) / 3}
                src={`/images/portrait/Student_Portrait_${localizeCharProfile.PersonalNameEn}_Collection.png`}
                alt={`${localizeCharProfile.PersonalNameKr} 초상화`}
              />
            </PortraitImageBox>
            <ProfileInfoContainer>
              <ProfileInfoNameBox>
                <h1>{`${localizeCharProfile.FamilyNameKr} ${localizeCharProfile.PersonalNameKr}`}</h1>
              </ProfileInfoNameBox>
            </ProfileInfoContainer>
          </CharacterProfileHeader>
        </Article>
      </Section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const host: string = context.req.headers.host as string;

  const localizeCharProfile = await getLocalizeCharProfileById(
    parseInt(context.query.id as string, 10),
    host
  );

  return {
    props: { localizeCharProfile },
  };
};

export default memo(Home);
