import type { LocalizeCharProfileType } from './types';

const getLocalizeCharProfile = async (host?: string) => {
  host = host ? 'http://' + host : '';
  const characterSearch = await fetch(`${host}/api/dim/Excel/LocalizeCharProfileExcelTable.json`);
  return characterSearch.json();
};

export const getLocalizeCharProfileByName = async (name: string, host?: string) => {
  const characterList = await getLocalizeCharProfile(host);
  return characterList.filter((a: LocalizeCharProfileType) =>
    !!a.FullNameKr ? a.FullNameKr.includes(name) : false
  )[0];
};

export const getLocalizeCharProfileById = async (id: number, host?: string) => {
  const characterList = await getLocalizeCharProfile(host);
  return characterList.filter((a: LocalizeCharProfileType) => a.CharacterId === id)[0];
};
