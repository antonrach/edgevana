import { Question, questionsFirstStep } from './../../../data/questions/index';
import type { NextApiRequest, NextApiResponse } from 'next';
import questionHandler from '@/utils/questionsAPI';

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Question | { [key: string]: string | boolean }>
) => {
  questionHandler({
    req,
    res,
    question: questionsFirstStep,
  });
};

export default handler;
