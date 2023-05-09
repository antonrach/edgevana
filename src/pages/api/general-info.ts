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
    
      const requiredFields = [
        'firstname',
        'lastname',
        'username',
        'email',
        'password',
        'terms',
        'account-type',
      ];
      let invalidFields: { field: string; rule: string }[] = [];
  
      requiredFields.forEach((field) => {
        if (!body[field]) {
          invalidFields.push({
            field,
            rule: 'required',
          });
        }
        if (field === 'password' && body[field] && body[field].length < 2) {
          invalidFields.push({
            field,
            rule: 'min-length',
          });
        }
        const validAccountTypes = ['business', 'individual'];
        if (field === 'account-type' && !validAccountTypes.includes(body['account-type'])) {
          invalidFields.push({
            field,
            rule: 'specific values',
          });
        }
        if (field === 'email' && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(body[field])) {
          invalidFields.push({
            field,
            rule: 'reg-ex',
          });
        }
      })
      if (invalidFields.length) {
        res.status(422).json({ message: 'Invalid data', invalidFields });
        return;
      }
      res.json({ success: true });
    } catch(e) {
      res.status(501).json({ message: 'Something went wrong' });
    }
  }, 500);
};

export default handler;
