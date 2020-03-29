import { NextApiRequest, NextApiResponse } from 'next';
import { getCandidates } from '../../../api/external/gov';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { city, district } = req.query;

    if (!district || !city) {
      res.status(400);
    }

    const response = await getCandidates(city as string, district as string);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
