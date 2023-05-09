import { small } from '@/constants';
import { Answer } from '@/data/questions';
import { Box, FormControl, FormControlLabel, Grid, Radio, RadioGroup, useMediaQuery, useTheme } from '@mui/material';
import React, { BaseSyntheticEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ErrorTypography } from '../CustomErrorMessage';
import Description from '../Description';
import SimpleButton from '../SimpleButton';
import Title from '../Title';

interface SetupFormProps {
  answers: Answer[];
  questionNumber: number;
  submitting: boolean;
  serverError: boolean;
  onSubmit: (data: { [key: string]: string; }, e: BaseSyntheticEvent<object, any, any> | undefined) => void;
  onCancel: () => void;
};

const SetupForm: React.FC<SetupFormProps> = ({
  answers,
  questionNumber,
  submitting,
  serverError,
  onSubmit,
  onCancel,
}) => {
  const theme = useTheme();

  const fieldName = `setup-question-${questionNumber}`;
  const { handleSubmit, control, formState: { isValid } } = useForm({
    defaultValues: {
      [fieldName]: '',
    },
    mode: 'onChange',
  });

  const [selectedValue, setSelectedValue] = React.useState<string>('');

  const isSmall = useMediaQuery(theme.breakpoints.down(small));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl component="fieldset" sx={{ width: '100%' }}>
        <Box
          sx={{
            marginBottom: '10px',
            [theme.breakpoints.down(small)]: {
              marginBottom: '5px',
            },
          }}
        >
          <Controller
            rules={{
              required: true,
            }}
            control={control}
            name={fieldName}
            render={({ field }) => (
              <RadioGroup {...field}>
                {answers.map((answer) => {
                  const value = `answer-${answer.id}`;
                  return (
                    <FormControlLabel
                      key={answer.id}
                      control={<Radio />}
                      value={value}
                      label={(
                        <>
                          {selectedValue === value ? (
                            <Title smSize={14} size={16}>{answer.name}</Title>
                          ) : (
                            <Description smSize={14} size={16}>{answer.name}</Description>
                          )}
                        </>
                      )}
                      onChange={() => setSelectedValue(value)}
                      sx={{
                        [theme.breakpoints.down(small)]: {
                          '& .MuiRadio-root': {
                            padding: '6px',
                          },
                        },
                      }}
                    />
                  );
                })}
              </RadioGroup>
            )}
          />
        </Box>
        <Box
          sx={{
            marginBottom: '10px',
            opacity: +serverError,
            zIndex: 0,
            WebkitUserSelect: 'none',
            MsUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
            [theme.breakpoints.down(small)]: {
              marginBottom: '5px',
            },
          }}
        >
          <ErrorTypography>
            Sorry, unknown error. Please, try again
          </ErrorTypography>
        </Box>
        <Grid container spacing={isSmall ? 1 : 2}>
          <Grid item md={6} xs={12} order={{ xs: 2, md: 1 }}>
            <SimpleButton
              fullWidth
              color="info"
              onClick={onCancel}
              type="button"
            >
              Cancel
            </SimpleButton>
          </Grid>
          <Grid item md={6} xs={12} order={{ xs: 1, md: 2 }}>
            <SimpleButton
              type="submit"
              fullWidth
              disabled={!isValid || submitting}
              loading={submitting}
            >
              Next
            </SimpleButton>
          </Grid>
        </Grid>
      </FormControl>
    </form>
  );
};

export default SetupForm;
