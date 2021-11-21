import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const RequestDataList: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let [category, fileName] = req.query.filePath;

  if (!fileName.includes('.json')) {
    fileName += '.json';
  }

  const jsonUrl = `https://raw.githubusercontent.com/Sn-Kinos/BlueArchiveData/master/${process.env.LOCALE}/${category}/${fileName}`;

  const jsonFileFetch: Response = await fetch(jsonUrl);

  const parsedResponseText = await jsonFileFetch.text();

  if (parsedResponseText === '404: Not Found') {
    res.status(404).json({ message: 'File Not Found', from: jsonUrl });
    return;
  }

  const parsedResponseJson = JSON.parse(parsedResponseText);

  res.status(200).json(parsedResponseJson.DataList);
};

export default RequestDataList;
