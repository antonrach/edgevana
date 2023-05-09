export interface Answer {
  name: string;
  id: string;
};

export interface Question {
  name: string;
  number: number;
  total: number;
  answers: Answer[];
};

export const questionsFirstStep: Question = {
  name: 'How do you plan to use Edgevana? ',
  number: 1,
  total: 2,
  answers: [
    {
      name: 'High Performant Validator',
      id: '1',
    },
    {
      name: 'Public Full Node Producer',
      id: '2',
    },
    {
      name: 'RPC (full program IDs)r',
      id: '3',
    },
    {
      name: 'Web3 Developer',
      id: '4',
    },
    {
      name: 'Web2 Developer',
      id: '5',
    },
  ],
};

export const questionsSecondStep: Question = {
  name: 'Is this your first time trying to run a node? If not, where have you participated in the past? ',
  number: 2,
  total: 2,
  answers: [
    {
      name: 'QuickNode',
      id: '1',
    },
    {
      name: 'Amazon Managed Blockchain',
      id: '2',
    },
    {
      name: 'Azure Blockchain Workbench',
      id: '3',
    },
    {
      name: 'Alchemy',
      id: '4',
    },
    {
      name: 'Blockdaemon',
      id: '5',
    },
    {
      name: 'This will be my first deployment!',
      id: '6',
    },
  ],
};
