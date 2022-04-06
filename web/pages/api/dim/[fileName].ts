import { NextApiRequest, NextApiResponse } from 'next';

const localeOverride = {
  global: ['LocalizeCharProfileExcelTable'],
};

const RequestDataList = async (req: NextApiRequest, res: NextApiResponse) => {
  let fileName = req.query.fileName;

  if (!fileName.includes('.json')) {
    fileName += '.json';
  }

  let locale = process.env.LOCALE;

  if (localeOverride.global.includes('LocalizeCharProfileExcelTable')) {
    locale = 'global';
  }

  const jsonUrl = `https://raw.githubusercontent.com/HerDataSam/BlueArchiveDataDiff/master/${locale}/Excel/${fileName}`;

  const jsonFileFetch: Response = await fetch(jsonUrl, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  const parsedResponseText = await jsonFileFetch.text();

  if (jsonFileFetch.status !== 200) {
    res.status(404).json({ message: parsedResponseText, from: jsonUrl });
    return;
  }

  const parsedResponseJson = JSON.parse(parsedResponseText);

  res.status(200).json(parsedResponseJson.DataList);
};

export default RequestDataList;
