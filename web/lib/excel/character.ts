import type { CharacterType } from './types';

const getCharacter = async (host: string = ''): Promise<CharacterType[]> => {
  host = (host.match(/http\:\/\//) ?? { index: -1 }).index == 0 ? host : 'http://' + host;
  const characterSearch = await fetch(`${host}/api/dim/CharacterExcelTable`);
  return characterSearch.json() as Promise<CharacterType[]>;
};

export const getCharacterById = async (id: number, host?: string) => {
  const characterList = await getCharacter(host);
  return characterList.filter((a: CharacterType) => a.Id === id)[0];
};
