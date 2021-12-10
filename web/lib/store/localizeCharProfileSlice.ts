import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '.';
import { LocalizeCharProfileType } from '../excel/types';

const initialState: LocalizeCharProfileType = {
  CharacterId: 0,
  StatusMessageKr: '셀라는 큐라레의 마스코트라구요!',
  StatusMessageJp: 'セラはキュラーレのマスコットですよ！',
  StatusMessageTh: 'เซล่าเป็นมาสคอตของคิวลาร์เร!',
  StatusMessageTw: 'FREE TIBET',
  StatusMessageEn: 'Sella is the mascot of Qurare!',
  StatusMessageDe: null,
  StatusMessageFr: null,
  FullNameKr: '셀라 에스트린제',
  FullNameJp: 'セラ エストリンゼ',
  FullNameTh: '셀라 에스트린제',
  FullNameTw: '셀라 에스트린제',
  FullNameEn: '셀라 에스트린제',
  FullNameDe: '셀라 에스트린제',
  FullNameFr: '셀라 에스트린제',
  FamilyNameKr: '셀라',
  FamilyNameRubyKr: null,
  PersonalNameKr: '에스트린제',
  PersonalNameRubyKr: null,
  FamilyNameJp: 'エストリンゼ',
  FamilyNameRubyJp: null,
  PersonalNameJp: 'セラ',
  PersonalNameRubyJp: null,
  FamilyNameTh: 'エストリンゼ',
  FamilyNameRubyTh: null,
  PersonalNameTh: 'セラ',
  PersonalNameRubyTh: null,
  FamilyNameTw: 'エストリンゼ',
  FamilyNameRubyTw: null,
  PersonalNameTw: 'セラ',
  PersonalNameRubyTw: null,
  FamilyNameEn: 'エストリンゼ',
  FamilyNameRubyEn: null,
  PersonalNameEn: 'セラ',
  PersonalNameRubyEn: null,
  FamilyNameDe: null,
  FamilyNameRubyDe: null,
  PersonalNameDe: null,
  PersonalNameRubyDe: null,
  FamilyNameFr: null,
  FamilyNameRubyFr: null,
  PersonalNameFr: null,
  PersonalNameRubyFr: null,
  SchoolYearKr: '수습 사서',
  SchoolYearJp: '見習い司書',
  SchoolYearTh: 'Trainee',
  SchoolYearTw: 'Trainee',
  SchoolYearEn: 'Trainee',
  SchoolYearDe: null,
  SchoolYearFr: null,
  CharacterAgeKr: '14세',
  CharacterAgeJp: '14歳',
  CharacterAgeTh: '14 ปี',
  CharacterAgeTw: '14歲',
  CharacterAgeEn: '14 years old',
  CharacterAgeDe: null,
  CharacterAgeFr: null,
  BirthDay: '3/17',
  BirthdayKr: '3월 17일',
  BirthdayJp: '3月17日',
  BirthdayTh: '17 มี.ค.',
  BirthdayTw: '3月17日',
  BirthdayEn: 'March 17th',
  BirthdayDe: null,
  BirthdayFr: null,
  CharHeightKr: '141cm',
  CharHeightJp: '141cm',
  CharHeightTh: '141 ซม.',
  CharHeightTw: '141cm',
  CharHeightEn: '4\'62"',
  CharHeightDe: null,
  CharHeightFr: null,
  ArtistNameKr: 'Crab D',
  ArtistNameJp: 'Crab D',
  ArtistNameTh: 'Crab D',
  ArtistNameTw: 'Crab D',
  ArtistNameEn: 'Crab D',
  ArtistNameDe: null,
  ArtistNameFr: null,
  CharacterVoiceKr: '김현지',
  CharacterVoiceJp: '김현지',
  CharacterVoiceTh: '김현지',
  CharacterVoiceTw: '김현지',
  CharacterVoiceEn: '김현지',
  CharacterVoiceDe: null,
  CharacterVoiceFr: null,
  HobbyKr: '마도서 수집',
  HobbyJp: '魔導書収集',
  HobbyTh: 'เก็บเงิน, ทำงานพิเศษ',
  HobbyTw: '存錢、打工',
  HobbyEn: 'Collecting Kodice.',
  HobbyDe: null,
  HobbyFr: null,
  WeaponNameKr: 'testNameKr',
  WeaponDescKr: 'testDeskKr',
  WeaponNameJp: 'testNameJp',
  WeaponDescJp: 'testDeskJp',
  WeaponNameTh: 'testNameKr',
  WeaponDescTh: 'testDeskKr',
  WeaponNameTw: 'testNameJp',
  WeaponDescTw: 'testDeskJp',
  WeaponNameEn: 'testNameJp',
  WeaponDescEn: 'testDeskJp',
  WeaponNameDe: 'testNameKr',
  WeaponDescDe: 'testDeskKr',
  WeaponNameFr: 'testNameJp',
  WeaponDescFr: 'testDeskJp',
  ProfileIntroductionKr:
    '큐라레의 수습 사서.\n\n명문 가문 출신으로, 집안의 구속이 싫어서 큐라레에 몰래 지원했다. 사서에 대한 재능은 뛰어나지만 경험이 많지 않아 사고를 자주 저지른다.\n철없는 행동을 하고 건방진 모습을 보일 때도 있지만, 사실은 선배들을 잘 따르는 착실한 후배.',
  ProfileIntroductionJp:
    'キュラレの見習い司書。\n\n名門出身で、家の拘束が嫌でキュラーレに密かに応募した。 司書に対する才能は優れているが、経験が浅く、事故をよく起こす。\n思慮のない行動をして生意気な姿を見せる時もあるが、本当は先輩たちによく従う真面目な後輩。',
  ProfileIntroductionTh:
    'นักบัญชีจอมเข้มงวดแห่งคณะกรรมการแผนงาน ของโรงเรียนมัธยมอะบิดอส\n\nมีนิสัยขี้บ่น และไม่ลังเลที่จะเปิดเผยความรู้สึกของตัวเองออกมา\n ชอบบ่นว่า "โรงเรียนแบบนี้ ขอให้เจ๊งสักวัน!" จนเป็นนิสัย แต่ที่จริงแล้วเธอผูกพันกับโรงเรียนมาก จนไปแอบทำงานพิเศษ เพื่อหาเงินมาใช้หนี้ของโรงเรียน',
  ProfileIntroductionTw:
    '阿拜多斯對策委員會的難纏書記。\n\n很愛碎碎念，毫不猶豫地表露自己的感情。\n「這種學園最好快點完蛋！」就像她的口頭禪似的。雖然老是把這句話掛在嘴上，其實她為了償還學園的債務而暗中打工，對學園是很有愛的。',
  ProfileIntroductionEn:
    'Trainee librarian on Qurare.\n\nHe was from a prestigious family and secretly applied to Qurare because he hated the arrest of the family. He has excellent talent for librarians, but he often causes accidents because he does not have much experience.\n Sometimes he acts immature and shows cheeky, but in fact, he is a diligent junior who follows his seniors well.',
  ProfileIntroductionDe: null,
  ProfileIntroductionFr: null,
  CharacterSSRNewKr: null,
  CharacterSSRNewJp: null,
  CharacterSSRNewTh: null,
  CharacterSSRNewTw: null,
  CharacterSSRNewEn: null,
  CharacterSSRNewDe: null,
  CharacterSSRNewFr: null,
};

export const localizeCharProfileSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateLocalizeCharProfile: (state, action: PayloadAction<LocalizeCharProfileType>) => {
      state = { ...action.payload };
    },
  },
});

export const { updateLocalizeCharProfile } = localizeCharProfileSlice.actions;

export const selectFullNameKr = (state: RootState) =>
  state.localizeCharProfile.FullNameKr ??
  state.localizeCharProfile.FamilyNameKr! + ' ' + state.localizeCharProfile.PersonalNameKr!;

export default localizeCharProfileSlice.reducer;
