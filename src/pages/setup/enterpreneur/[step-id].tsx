import AccountLayout from '@/components/AccountLayout';
import MetaDataLayout from '@/components/MetaDataLayout';
import QuestionCard from '@/components/QuestionCard';
import SetupLayout from '@/components/SetupLayout';
import { Answer, Question } from '@/data/questions';
import submitFormRequest from '@/utils/submitFormRequest';
import { Box } from '@mui/material';
import axios from 'axios';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import React, { BaseSyntheticEvent } from 'react';

const baseURL = 'http://localhost:3000';

const SetupQuestion: NextPage<QuestionsResponse> = ({
  question: serverQuestion,
  loadingRequired,
}) => {
  const router = useRouter();

  const [answers, setAnswers] = React.useState<Answer[] | null>(serverQuestion?.answers || null);
  const [question, setQuestion] = React.useState<string | null>(serverQuestion?.name || null);
  const [questionNumber, setQuestionNumber] = React.useState<number | null>(serverQuestion?.number || null);
  const [totalQuestions, setTotalQuestions] = React.useState<number | null>(serverQuestion?.total || null);
  const [loading, setLoading] = React.useState<boolean>(loadingRequired);
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [serverError, setServerError] = React.useState<boolean>(false);

  const setQuestionData = (questionData: Question | null) => {
    setQuestion(questionData?.name || null);
    setAnswers(questionData?.answers || null);
    setQuestionNumber(questionData?.number || null);
    setTotalQuestions(questionData?.total || null);
  }

  const stepId = router.query[`step-id`];

  React.useEffect(() => {
    const load = async () => {
      try {
        const { data } = await axios.get<Question>(`${baseURL}/api/steps/${stepId}`);
        
        if (data && data.name && data.answers && data.answers.length) {
          setQuestionData(data);
          return;
        }
        setQuestionData(null);
      } catch {
        setQuestionData(null);
      } finally {
        setLoading(false);
      }
    };

    if (loadingRequired) {
      if (!loading) {
        setLoading(true);
      }
      load();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingRequired, router]);

  React.useEffect(() => {
    if (submitting) {
      setSubmitting(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepId])

  const navigateNext = (
    data: { [key: string] : string },
    e: BaseSyntheticEvent<object, any, any> | undefined,
  ) => {
    if (questionNumber && totalQuestions) {
      const nextPageUrl = questionNumber >= totalQuestions ?
        '/setup/success/' : `/setup/enterpreneur/${questionNumber + 1}`;

      submitFormRequest({
        serverError,
        setServerError,
        setIsLoading: setSubmitting,
        data,
        fetchUrl: `/api/steps/${questionNumber}`,
        nextPageUrl,
        push: router.push,
      });
    }
  };
  const navigatePrev = () => {
    if (questionNumber && totalQuestions) {
      if (questionNumber === 1) {
        router.push(`/setup/enterpreneur/`);
        return;
      }
      router.push(`/setup/enterpreneur/${questionNumber - 1}`);
    }
  };

  return (
    <MetaDataLayout
      title={
        loading ? 'Loading' :
        (!question) ? 'Error' :
        question
      }
      description="Set up your account"
    >
      <AccountLayout>
        <SetupLayout>
          <Box>
            <QuestionCard
              question={question}
              answers={answers}
              questionNumber={questionNumber}
              totalQuestions={totalQuestions}
              navigateNext={navigateNext}
              navigatePrev={navigatePrev}
              loading={loading}
              submitting={submitting}
              serverError={serverError}
            />
          </Box>
        </SetupLayout>
      </AccountLayout>
    </MetaDataLayout>
  );
};

interface QuestionsResponse {
  question: Question | null
  loadingRequired: boolean;
};

SetupQuestion.getInitialProps = async (context: NextPageContext): Promise<QuestionsResponse> => {
  if (!context.req) {
    return {
      question: null,
      loadingRequired: true,
    };
  }

  try {
    const { data } = await axios.get<Question>(`${baseURL}/api/steps/${context.query['step-id']}`);
    if (data && data.name && data.answers && data.answers.length) {
      return {
        question: data,
        loadingRequired: false,
      };
    }
    return {
      question: null,
      loadingRequired: false,
    };
  } catch(e) {
    return {
      question: null,
      loadingRequired: false,
    };
  }
};

export default SetupQuestion;
