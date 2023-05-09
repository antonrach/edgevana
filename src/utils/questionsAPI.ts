import { Question } from "@/data/questions";
import { NextApiRequest, NextApiResponse } from "next";

interface questionHandlerArgs {
  req: NextApiRequest;
  res: NextApiResponse<Question | { [key: string]: string | boolean }>;
  question: Question;
  timeout?: number;
};

const questionHandler = ({
  req,
  res,
  question,
  timeout = 500,
}: questionHandlerArgs) => {
  setTimeout(() => {
    try {
      if (req.method === 'GET') {
        res.status(200).json(question);
        return;
      }
  
      if (req.method === 'POST') {
        const { body } = req;
        const fieldName = `setup-question-${question.number}`;
        if (!body[fieldName]) {
          res.status(422).json({ message: 'Value is required' });
          return;
        }
        const values = question.answers.map((answer) => `answer-${answer.id}`);
        if (!values.includes(body[fieldName])) {
          res.status(422).json({ message: 'Invalid value' });
          return;
        }
        res.status(200).json({ success: true });
        return;
      }
  
      res.status(405).json({ message: 'Wrong reques type' });
    } catch(e) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }, timeout);
};

export default questionHandler;
