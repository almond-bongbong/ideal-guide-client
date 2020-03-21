import { NextApiRequest, NextApiResponse } from 'next';
import { getSubCandidates } from '../../../api/gov/election';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { city, district } = req.query;

    if (!district || !city) {
      res.status(400);
    }

    const response = await getSubCandidates(city as string, district as string);
    res.status(200).json(response);
  } catch (err) {
    res.status(500);
  }
};
