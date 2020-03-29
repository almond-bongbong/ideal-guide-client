import { NextApiRequest, NextApiResponse } from 'next';
import { getParties } from '../../../../api/external/gov';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await getParties();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
