import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { memo } from 'react';
import Header from '../components/Header';
import Article from '../components/styled/Article';
import Section from '../components/styled/Section';
import Space from '../components/styled/Space';
import { getLocalizeCharProfileById } from '../lib/excel/localizeCharProfile';

const Home: NextPage = ({ localizeCharProfile }): JSX.Element => {
  // const [localizeCharProfile, setLocalizeCharProfile] = useState({ ppap: 1 });
  // const router = useRouter();

  // const getLocalizeCharProfile = async () => {
  //   setLocalizeCharProfile(localizeCharProfileRequest);
  // };

  // useEffect(() => {
  //   getLocalizeCharProfile();
  // }, []);

  // if (localizeCharProfile.ppap === 1) return <div></div>;

  return (
    <>
      <Head>
        <title>BlueArchive.is</title>
      </Head>
      <Header />
      <Space height="80px" />
      <Section alignItems="center">
        <Article flexDirection="column">
          <Image
            width="404"
            height="456"
            src={`/images/portrait/Student_Portrait_${localizeCharProfile.PersonalNameEn}_Collection.png`}
          />
        </Article>
      </Section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const host: string = context.req.headers.host as string;

  const localizeCharProfile = await getLocalizeCharProfileById(
    host,
    parseInt(context.query.id as string, 10)
  );

  return {
    props: { localizeCharProfile },
  };
};

export default memo(Home);
