import type { CharacterStatType } from './types';

const getCharacterStat = async (host: string = ''): Promise<CharacterStatType[]> => {
  host = (host.match(/https?\:\/\//) ?? { index: -1 }).index == 0 ? host : 'http://' + host;
  const characterStatSearch = await fetch(`${host}/api/dim/CharacterStatExcelTable`);
  return characterStatSearch.json() as Promise<CharacterStatType[]>;
};

export const getCharacterStatById = async (id: number, host?: string) => {
  const characterStatList = await getCharacterStat(host);
  return characterStatList.filter((a: CharacterStatType) => a.CharacterId === id)[0];
};
