import { NextApiRequest, NextApiResponse } from 'next';
import { getSubCandidates } from '../../../api/gov/election';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await getSubCandidates();
    res.status(200).json(response);
  } catch (err) {
    res.status(500);
  }
};
