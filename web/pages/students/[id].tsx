import styled from '@emotion/styled';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { memo, useEffect } from 'react';
import HeaderNavigation from '../../components/Header';
import { Article } from '../../components/styled/Article';
import { Section } from '../../components/styled/Section';
import { Space } from '../../components/styled/Space';
import { NormalBox, ParallelBox } from '../../components/template/Parallel';
import { getCharacterById } from '../../lib/excel/character';
import { getCharacterStatById } from '../../lib/excel/characterStat';
import { getLocalizeCharProfileById } from '../../lib/excel/localizeCharProfile';
import {
  CharacterStatType,
  CharacterType,
  LocalizeCharProfileType,
  Rarity,
} from '../../lib/excel/types';
import { useAppDispatch } from '../../lib/hooks';
import { updateLocalizeCharProfile } from '../../lib/store/modules/localizeCharProfileSlice';
import IndoorIcon from '../../public/images/students/id/Indoor.webp';
import OutdoorIcon from '../../public/images/students/id/Outdoor.webp';
import SpecialIcon from '../../public/images/students/id/SPECIAL.webp';
import StarIcon from '../../public/images/students/id/star.webp';
import StreetIcon from '../../public/images/students/id/Street.webp';
import StrikerIcon from '../../public/images/students/id/STRIKER.webp';

interface IStudentProps {
  localizeCharProfile: LocalizeCharProfileType;
  character: CharacterType;
  characterStat: CharacterStatType;
}

const CharacterProfileHeader = styled.header`
  display: flex;
  width: 31%;
`;

const PortraitImageBox = styled.div`
  position: relative;
  display: flex;
  min-width: calc(100% - 94px);
  padding: 15px;
  background-color: white;
  border: 2px solid #d8dbdf;
  border-radius: 70px 8px;
  box-shadow: 0px 2px 3px #000;
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -8px;
    display: block;
    width: 90px;
    height: 90px;
    background: url('/images/students/id/portrait-clip.png') no-repeat left top;
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
    background: url('/images/students/id/portrait-clip.png') no-repeat right bottom;
    z-index: 0;
  }

  & > span {
    z-index: 1;
  }
`;

const CharacterProfileArticle = styled.article`
  display: flex;
  width: calc(69% - 2rem);
  flex-direction: column;
`;

//TODO: 배경 이미지 반영
const ProfileInfoNameParallel = styled(ParallelBox)`
  width: 100%;
  height: 3.5rem;
  padding: 0.75rem;
  background-color: rgba(45, 76, 128, 0.75);
  background-image: url('/images/common/bg-texture-type-1-parallel.webp');
  background-position: -22px 50%;
  background-blend-mode: color-burn;
  background-size: 200px;
  color: #fff;
  align-items: center;

  h1 {
    margin-right: auto;
    font-weight: 500;
  }
`;

const ProfileInfoStarBox = styled(NormalBox)`
  height: 25px;
  flex-direction: row-reverse;

  > * {
    margin-left: -8px !important;
  }
`;

const ProfileInfoSquadBox = styled(NormalBox)`
  min-width: 95px;
  max-width: 95px;
  height: 30px;
  padding: 6px;
  margin-left: 6px;
  background-color: #fff;
`;

const ProfileInfoDetailBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileInfoDetailParallel = styled(ParallelBox)`
  background-color: rgba(255, 255, 255, 0.75);
`;

const tacticRoleString = {
  DamageDealer: '딜러',
  Tanker: '탱커',
  Supporter: '서포터',
  Healer: '힐러',
  Vehicle: 'T.S',
};

//TODO: 학생 학교 소속별로 배경 이미지 바꾸기
const Student: NextPage<IStudentProps> = ({
  localizeCharProfile,
  character,
  characterStat,
}): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateLocalizeCharProfile(localizeCharProfile));
    console.log(character);
  }, []);

  return (
    <>
      <Head>
        <title>BlueArchive.is</title>
      </Head>
      <HeaderNavigation />
      <Space height="4rem" />
      <Section alignItems="center">
        <Article>
          <CharacterProfileHeader>
            <PortraitImageBox>
              <Image
                width={(404 * 2) / 3}
                height={(456 * 2) / 3}
                src={`/images/portrait/Student_Portrait_${localizeCharProfile.PersonalNameEn}_Collection.png`}
                alt={`${localizeCharProfile.PersonalNameKr} 초상화`}
              />
            </PortraitImageBox>
          </CharacterProfileHeader>
          <Space width="2rem" />
          <CharacterProfileArticle>
            <Space height="1rem" />
            <ProfileInfoNameParallel>
              <h1 className="straight">{`${localizeCharProfile.FamilyNameKr} ${localizeCharProfile.PersonalNameKr}`}</h1>
              <ProfileInfoStarBox className="straight">
                {[...Array(Rarity[character.Rarity])].map((_, i) => (
                  <Image width={25} height={25} src={StarIcon} alt="" key={`star-${i}`} />
                ))}
              </ProfileInfoStarBox>
              <ProfileInfoSquadBox>
                {character.SquadType === 'Main' ? (
                  <Image src={StrikerIcon} alt="Striker" className="straight" />
                ) : (
                  <Image src={SpecialIcon} alt="Special" className="straight" />
                )}
              </ProfileInfoSquadBox>
            </ProfileInfoNameParallel>
            <Space height="1rem" />
            <ProfileInfoDetailBox>
              <ProfileInfoDetailParallel>
                <div>
                  <div>{tacticRoleString[character.TacticRole]}</div>
                  <div>{character.TacticRange.toUpperCase()}</div>
                </div>
                <div>
                  <div>{character.BulletType}</div>
                  <div>{character.ArmorType}</div>
                </div>
                <div>
                  <div>
                    <Image src={StreetIcon} alt="StreetIcon" />
                    <Image
                      className="straight"
                      src={`/images/students/id/${characterStat.StreetBattleAdaptation}.webp`}
                      alt="StreetIcon"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <Image src={OutdoorIcon} alt="OutdoorIcon" />
                    <Image
                      className="straight"
                      src={`/images/students/id/${characterStat.OutdoorBattleAdaptation}.webp`}
                      alt="OutdoorIcon"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <Image src={IndoorIcon} alt="IndoorIcon" />
                    <Image
                      className="straight"
                      src={`/images/students/id/${characterStat.IndoorBattleAdaptation}.webp`}
                      alt="IndoorIcon"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              </ProfileInfoDetailParallel>
            </ProfileInfoDetailBox>
          </CharacterProfileArticle>
        </Article>
      </Section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const host: string = context.req.headers.host as string;
  const id: number = parseInt(context.query.id as string, 10);

  const localizeCharProfile = await getLocalizeCharProfileById(id, host);
  const character = await getCharacterById(id, host);
  const characterStat = await getCharacterStatById(id, host);

  return {
    props: { localizeCharProfile, character, characterStat },
  };
};

export default memo(Student);
