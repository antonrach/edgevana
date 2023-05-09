import { small } from '@/constants';
import { Answer } from '@/data/questions';
import { Box, CircularProgress, useTheme } from '@mui/material';
import React, { BaseSyntheticEvent } from 'react';
import Description from '../Description';
import QuestionNumber from '../QuestionNumber';
import SetupForm from '../SetupForm';
import Title from '../Title';

interface QuestionCardProps {
  question: string | null;
  answers: Answer[] | null;
  questionNumber: number | null;
  totalQuestions: number | null;
  loading: boolean;
  submitting: boolean;
  serverError: boolean;
  navigateNext: (data: { [key: string]: string; }, e: BaseSyntheticEvent<object, any, any> | undefined) => void;
  navigatePrev: () => void;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answers,
  questionNumber,
  totalQuestions,
  loading,
  submitting,
  serverError,
  navigateNext,
  navigatePrev,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        margin: 'auto',
        display: 'flex',
        maxWidth: '680px',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          margin: 'auto',
        }}
      >
        <Box
          sx={{
            padding: '35px',
            [theme.breakpoints.down(small)]: {
              padding: '15px',
            },
          }}
        >
          <Box
            sx={{
              marginBottom: '18px',
              [theme.breakpoints.down(small)]: {
                marginBottom: '10px',
              },
            }}
          >
            <Title
              size={20}
            >
              Setup Guide
            </Title>
          </Box>
          <Box
            sx={{
              marginBottom: '18px',
              [theme.breakpoints.down(small)]: {
                marginBottom: '10px',
              },
            }}
          >
            <Description>
              Unlock your highest potential with our personalized guide!
            </Description>
          </Box>
          <Description>
              {(loading) ? (
                <>Please, wait</>
              ) : (questionNumber && totalQuestions) ? (
                <>{questionNumber - 1}/{totalQuestions} Questions answered</>
              ) : (
                <>Question is not available</>
              )}
            </Description>
        </Box>
        <Box
          sx={{
            height: '3px',
            width: '100%',
            backgroundColor: theme.palette.primary.light,
          }}
        />
        <Box
          sx={{
            padding: '35px',
            [theme.breakpoints.down(small)]: {
              padding: '10px 15px 15px',
            },
          }}
        >
          {loading ? <CircularProgress size={30} color='primary' /> : (
            <>
              {answers && questionNumber !== null ? (
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '40px',
                      [theme.breakpoints.down(small)]: {
                        marginBottom: '20px',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        marginRight: '20px',
                        [theme.breakpoints.down(small)]: {
                          marginRight: '10px',
                        },
                      }}
                    >
                      <QuestionNumber>{questionNumber}</QuestionNumber>
                    </Box>
                    <Title
                      size={18}
                      smSize={16}
                    >
                      {question}
                    </Title>
                  </Box>
                  <Box>
                    <SetupForm
                      answers={answers}
                      questionNumber={questionNumber}
                      onSubmit={navigateNext}
                      onCancel={navigatePrev}
                      submitting={submitting}
                      serverError={serverError}
                    />
                  </Box>
                </Box>
              ) : (
                <Title size={20}>Sorry, something went wrong</Title>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionCard;
