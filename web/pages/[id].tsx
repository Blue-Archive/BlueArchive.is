import styled from '@emotion/styled';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { memo } from 'react';
import HeaderNavigation from '../components/Header';
import { Article } from '../components/styled/Article';
import { Section } from '../components/styled/Section';
import { Space } from '../components/styled/Space';
import { getLocalizeCharProfileById } from '../lib/excel/localizeCharProfile';
import { useAppDispatch } from '../lib/hooks';

interface IHomeProps {
  localizeCharProfile: any;
}

const PortraitBox = styled.div`
  position: relative;
  display: flex;
  padding: 11px;
  background-color: #e25934;
  border: 2px solid #d8dbdf;
  border-radius: 80px 8px;
  box-shadow: 0px 2px 3px #000;
  overflow: visible;
  margin: 2rem;
  transform: scale(calc(2 / 3));
  transform-origin: left top;

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

const Home: NextPage<IHomeProps> = ({ localizeCharProfile }): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Head>
        <title>BlueArchive.is</title>
      </Head>
      <HeaderNavigation />
      <Space height="3rem" />
      <Section alignItems="center">
        <Article flexDirection="column">
          <PortraitBox>
            <Image
              width="404"
              height="456"
              src={`/images/portrait/Student_Portrait_${localizeCharProfile.PersonalNameEn}_Collection.png`}
              alt={`${localizeCharProfile.PersonalNameKr} 초상화`}
            />
          </PortraitBox>
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
