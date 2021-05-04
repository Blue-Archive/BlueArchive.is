import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const RequestDataList: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const [category, fileName] = req.query.filePath

  const jsonFileFetch: Response = await fetch(
    `https://raw.githubusercontent.com/Sn-Kinos/BlueArchiveData/master/ja-JP/${category}/${fileName}.json`
  )

  const parsedResponseText = await jsonFileFetch.text()

  if (parsedResponseText === '404: Not Found') {
    res.status(404).json({ message: 'File Not Found' })
    return
  }

  const parsedResponseJson = JSON.parse(parsedResponseText)

  res.status(200).json(parsedResponseJson.DataList)
}

export default RequestDataList
