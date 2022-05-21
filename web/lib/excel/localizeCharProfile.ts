import fetch from 'node-fetch';
import type { LocalizeCharProfileType } from './types';

const getLocalizeCharProfile = async (host: string = ''): Promise<LocalizeCharProfileType[]> => {
  host = (host.match(/https?\:\/\//) ?? { index: -1 }).index == 0 ? host : 'http://' + host;
  const characterSearch = await fetch(`${host}/api/dim/LocalizeCharProfileExcelTable`);
  return characterSearch.json() as Promise<LocalizeCharProfileType[]>;
};

export const getLocalizeCharProfileByName = async (name: string, host?: string) => {
  const characterList = await getLocalizeCharProfile(host);

  return characterList.filter((a: LocalizeCharProfileType) =>
    !!a.PersonalNameKr ? a.PersonalNameKr.includes(name) : false
  )[0];
};

export const getLocalizeCharProfileById = async (id: number, host?: string) => {
  const characterList = await getLocalizeCharProfile(host);
  return characterList.filter((a: LocalizeCharProfileType) => a.CharacterId === id)[0];
};
