const getLocalizeCharProfile = async (host?: string) => {
  host = host ? 'http://' + host : '';
  const characterSearch = await fetch(
    `${host}/api/dim/Excel/LocalizeCharProfileExcelTable.json`
  );
  return characterSearch.json();
};

export const getLocalizeCharProfileByName = async (
  host?: string,
  name: string
) => {
  const characterList = await getLocalizeCharProfile(host);
  return characterList.filter((a) =>
    !!a.FullNameKr ? a.FullNameKr.includes(name) : false
  )[0];
};

export const getLocalizeCharProfileById = async (host: string, id: number) => {
  const characterList = await getLocalizeCharProfile(host);
  return characterList.filter((a) => a.CharacterId === id)[0];
};
