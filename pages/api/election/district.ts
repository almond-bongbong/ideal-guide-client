import { NextApiRequest, NextApiResponse } from 'next';
import { getElectionDistricts } from '../../../api/external/gov';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await getElectionDistricts();
    res.status(200).json(response);
  } catch (err) {
    res.status(500);
  }
};
