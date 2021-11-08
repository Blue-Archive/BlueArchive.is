import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const Search: NextApiHandler = async (
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  res.redirect('/');
};

export default Search;
