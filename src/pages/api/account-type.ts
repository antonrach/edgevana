import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  setTimeout(() => {
    try {
      if (req.method !== 'POST') {
        res.status(405).json({ messange: 'Only post requests are allowed' });
        return;
      }
  
      const { body } = req;
      const validTypes = ['business', 'individual'];
      if (!validTypes.includes(body['account-type'])) {
        res.status(422).json({ messange: 'Invalid data' });
        return;
      }
      res.json({ success: true });
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }, 500);
};

export default handler;
