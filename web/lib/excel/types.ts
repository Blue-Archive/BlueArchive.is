export enum Rarity {
  'N',
  'R',
  'SR',
  'SSR',
}

export enum BattleAdaptation {
  'D',
  'C',
  'B',
  'A',
  'S',
  'SS',
}

export type CharacterStatType = {
  CharacterId: number;
  StabilityRate: number;
  StabilityPoint: number;
  AttackPower1: number;
  AttackPower100: number;
  MaxHP1: number;
  MaxHP100: number;
  DefensePower1: number;
  DefensePower100: number;
  HealPower1: number;
  HealPower100: number;
  DodgePoint: number;
  AccuracyPoint: number;
  CriticalPoint: number;
  CriticalResistPoint: number;
  CriticalDamageRate: number;
  CriticalDamageResistRate: number;
  BlockRate: number;
  HealEffectivenessRate: number;
  OppressionPower: number;
  OppressionResist: number;
  DefensePenetration1: number;
  DefensePenetration100: number;
  AmmoCount: number;
  AmmoCost: number;
  IgnoreDelayCount: number;
  NormalAttackSpeed: number;
  Range: number;
  InitialRangeRate: number;
  MoveSpeed: number;
  SightPoint: number;
  ActiveGauge: number;
  GroggyGauge: number;
  GroggyTime: number;
  StrategyMobility: number;
  ActionCount: number;
  StrategySightRange: number;
  DamageRatio: number;
  DamagedRatio: number;
  StreetBattleAdaptation: 'SS' | 'S' | 'A' | 'B' | 'C' | 'D';
  OutdoorBattleAdaptation: 'SS' | 'S' | 'A' | 'B' | 'C' | 'D';
  IndoorBattleAdaptation: 'SS' | 'S' | 'A' | 'B' | 'C' | 'D';
  RegenCost: number;
};

export type CharacterType = {
  Id: number;
  DevName: string;
  ProductionStep: 'Release' | 'Complete' | 'ToDo' | 'Doing';
  CollectionVisible: boolean;
  IsPlayableCharacter: boolean;
  LocalizeEtcId: number;
  Rarity: 'N' | 'R' | 'SR' | 'SSR';
  TacticEntityType:
    | 'Student'
    | 'Summoned'
    | 'Vehicle'
    | 'None'
    | 'Minion'
    | 'Elite'
    | 'Champion'
    | 'Boss';
  CanSurvive: boolean;
  IsDummy: boolean;
  SubPartsCount: number;
  TacticRole: 'DamageDealer' | 'Tanker' | 'Supporter' | 'Healer' | 'Vehicle';
  WeaponType:
    | 'SR'
    | 'SG'
    | 'AR'
    | 'MG'
    | 'SMG'
    | 'RG'
    | 'HG'
    | 'GL'
    | 'RL'
    | 'MT'
    | 'Cannon'
    | 'None'
    | 'Vulcan'
    | 'Missile'
    | 'Taser'
    | 'Binah'
    | 'Relic';
  TacticRange: 'Back' | 'Front' | 'Middle';
  BulletType: 'Explosion' | 'Mystic' | 'Pierce' | 'Normal';
  ArmorType: 'LightArmor' | 'HeavyArmor' | 'Unarmed'; // Unarmed === Mystic
  AimIKType: 'TwoHandRight' | 'None' | 'Dual' | 'OneHandLeft' | 'OneHandRight';
  School:
    | 'Gehenna'
    | 'Millennium'
    | 'Trinity'
    | 'Abydos'
    | 'Shanhaijing'
    | 'Hyakkiyako'
    | 'RedWinter'
    | 'Valkyrie'
    | 'Arius'
    | 'None';
  Club:
    | 'Kohshinjo68'
    | 'SPTF'
    | 'GourmetClub'
    | 'RemedialClass'
    | 'Fuuki'
    | 'Countermeasure'
    | 'Veritas'
    | 'CleanNClearing'
    | 'Meihuayuan'
    | 'TrainingClub'
    | 'Justice'
    | 'NinpoKenkyubu'
    | 'GameDev'
    | 'RedwinterSecretary'
    | 'Onmyobu'
    | 'Shugyobu'
    | 'TheSeminar'
    | 'anzenkyoku'
    | 'Engineer'
    | 'TrinityVigilance'
    | 'MatsuriOffice'
    | 'AriusSqud'
    | 'SisterHood'
    | 'IndeGEHENNA'
    | 'None'
    | 'IndeHyakkiyako'
    | 'Endanbou'
    | 'HoukagoDessert'
    | 'FoodService'
    | 'KnightsHospitaller'
    | 'BookClub'
    | 'Class227'
    | 'IndeShanhaijing'
    | 'IndeMILLENNIUM';
  DefaultStarGrade: 3 | 2 | 1 | 0 | 5;
  MaxStarGrade: 5 | 1 | 0;
  StatLevelUpType: 'Standard';
  SquadType: 'Main' | 'Support' | 'TSS';
  Jumpable: boolean;
  PersonalityId: number;
  CharacterAIId: number;
  ScenarioCharacter: string | null;
  SpawnTemplateId: number;
  FavorLevelupType: 1 | 0;
  EquipmentSlot: string[];
  SpineResourceName: string | null;
  SpineResourceNameDiorama: string | null;
  EntityMaterialType: 'Flesh' | 'Metal' | 'Wood';
  ModelPrefabName: string;
  TextureDir: string | null;
  TextureEchelon: null;
  CollectionTexturePath: string | null;
  CollectionBGTexturePath: string | null;
  TextureBoss: string | null;
  TextureSkillCard: string[];
  WeaponImagePath: string | null;
  WeaponLocalizeId: number;
  DisplayEnemyInfo: boolean;
  BodyRadius: 25 | 110 | 150 | 75 | 50 | 20 | 100 | 40 | 35 | 0 | 500 | 350 | 80 | 60;
  RandomEffectRadius: 25 | 80 | 150 | 75 | 50 | 20 | 100 | 35 | 0 | 500 | 350;
  HpBarHeight: 0.6003 | 1.50014 | 1.0002999 | -0.1997 | 0.39997998 | 1.7203;
  HighlightFloaterHeight: 0.6003 | 1.0002999 | -0.1997 | 1.7203;
  MoveStartFrame: 0 | 160;
  MoveEndFrame: 0 | 140;
  JumpMotionFrame: 24 | 30 | 18 | 0;
  AppearFrame: 20 | 30 | 45 | 75 | 53 | 70 | 81 | 0 | 174 | 69 | 55 | 65 | 77 | 80 | 95 | 100;
  CanMove: boolean;
  CanFix: boolean;
  CanCrowdControl: boolean;
  CanBattleItemMove: boolean;
  IsAirUnit: boolean;
  AirUnitHeight: 0 | 120;
  Tags: [string[]];
  SecretStoneItemId: 23 | 0;
  SecretStoneItemAmount: 50 | 10 | 1 | 0;
  CharacterPieceItemId: number;
  CharacterPieceItemAmount: 30 | 0 | 5 | 1;
  CombineRecipeId: number;
  InformationPacel: string | null;
  AnimationSSR: string | null;
};

export type LocalizeCharProfileType = {
  CharacterId: number;
  StatusMessageKr: string | null;
  StatusMessageJp: string | null;
  StatusMessageTh: string | null;
  StatusMessageTw: string | null;
  StatusMessageEn: string | null;
  StatusMessageDe: string | null;
  StatusMessageFr: string | null;
  FullNameKr: string | null;
  FullNameJp: string | null;
  FullNameTh: string | null;
  FullNameTw: string | null;
  FullNameEn: string | null;
  FullNameDe: string | null;
  FullNameFr: string | null;
  FamilyNameKr: string | null;
  FamilyNameRubyKr: string | null;
  PersonalNameKr: string | null;
  PersonalNameRubyKr: string | null;
  FamilyNameJp: string | null;
  FamilyNameRubyJp: string | null;
  PersonalNameJp: string | null;
  PersonalNameRubyJp: string | null;
  FamilyNameTh: string | null;
  FamilyNameRubyTh: string | null;
  PersonalNameTh: string | null;
  PersonalNameRubyTh: string | null;
  FamilyNameTw: string | null;
  FamilyNameRubyTw: string | null;
  PersonalNameTw: string | null;
  PersonalNameRubyTw: string | null;
  FamilyNameEn: string | null;
  FamilyNameRubyEn: string | null;
  PersonalNameEn: string | null;
  PersonalNameRubyEn: string | null;
  FamilyNameDe: string | null;
  FamilyNameRubyDe: string | null;
  PersonalNameDe: string | null;
  PersonalNameRubyDe: string | null;
  FamilyNameFr: string | null;
  FamilyNameRubyFr: string | null;
  PersonalNameFr: string | null;
  PersonalNameRubyFr: string | null;
  SchoolYearKr: string | null;
  SchoolYearJp: string | null;
  SchoolYearTh: string | null;
  SchoolYearTw: string | null;
  SchoolYearEn: string | null;
  SchoolYearDe: string | null;
  SchoolYearFr: string | null;
  CharacterAgeKr: string | null;
  CharacterAgeJp: string | null;
  CharacterAgeTh: string | null;
  CharacterAgeTw: string | null;
  CharacterAgeEn: string | null;
  CharacterAgeDe: string | null;
  CharacterAgeFr: string | null;
  BirthDay: string | null;
  BirthdayKr: string | null;
  BirthdayJp: string | null;
  BirthdayTh: string | null;
  BirthdayTw: string | null;
  BirthdayEn: string | null;
  BirthdayDe: string | null;
  BirthdayFr: string | null;
  CharHeightKr: string | null;
  CharHeightJp: string | null;
  CharHeightTh: string | null;
  CharHeightTw: string | null;
  CharHeightEn: string | null;
  CharHeightDe: string | null;
  CharHeightFr: string | null;
  ArtistNameKr: string | null;
  ArtistNameJp: string | null;
  ArtistNameTh: string | null;
  ArtistNameTw: string | null;
  ArtistNameEn: string | null;
  ArtistNameDe: string | null;
  ArtistNameFr: string | null;
  CharacterVoiceKr: string | null;
  CharacterVoiceJp: string | null;
  CharacterVoiceTh: string | null;
  CharacterVoiceTw: string | null;
  CharacterVoiceEn: string | null;
  CharacterVoiceDe: string | null;
  CharacterVoiceFr: string | null;
  HobbyKr: string | null;
  HobbyJp: string | null;
  HobbyTh: string | null;
  HobbyTw: string | null;
  HobbyEn: string | null;
  HobbyDe: string | null;
  HobbyFr: string | null;
  WeaponNameKr: string | null;
  WeaponDescKr: string | null;
  WeaponNameJp: string | null;
  WeaponDescJp: string | null;
  WeaponNameTh: string | null;
  WeaponDescTh: string | null;
  WeaponNameTw: string | null;
  WeaponDescTw: string | null;
  WeaponNameEn: string | null;
  WeaponDescEn: string | null;
  WeaponNameDe: string | null;
  WeaponDescDe: string | null;
  WeaponNameFr: string | null;
  WeaponDescFr: string | null;
  ProfileIntroductionKr: string | null;
  ProfileIntroductionJp: string | null;
  ProfileIntroductionTh: string | null;
  ProfileIntroductionTw: string | null;
  ProfileIntroductionEn: string | null;
  ProfileIntroductionDe: string | null;
  ProfileIntroductionFr: string | null;
  CharacterSSRNewKr: string | null;
  CharacterSSRNewJp: string | null;
  CharacterSSRNewTh: string | null;
  CharacterSSRNewTw: string | null;
  CharacterSSRNewEn: string | null;
  CharacterSSRNewDe: string | null;
  CharacterSSRNewFr: string | null;
};
