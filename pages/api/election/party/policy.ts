import { NextApiRequest, NextApiResponse } from 'next';
import { getPartyPolicy } from '../../../../api/external/gov';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { partyName } = req.query;

    if (!partyName) {
      res.status(400);
    }

    const response = await getPartyPolicy(partyName as string);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
