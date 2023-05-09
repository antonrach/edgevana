import React, { BaseSyntheticEvent } from 'react';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { Box, FormControl, useTheme } from '@mui/material';
import Title from '@/components/Title';
import Description from '@/components/Description';
import AccountPicker, { AccountOptionProps } from '@/components/AccountPicker';
import IndividualAccountIcon from '@/components/Icons/IndividualAccount';
import BusinessAccountIcon from '@/components/Icons/BusinessAccount';
import SimpleButton from '@/components/SimpleButton';
import SimpleLink from '@/components/SimpleLink';
import Carousel from '@/components/Carousel';
import { medium, small } from '@/constants';
import SignUpPageLayout from '@/components/SignUpPageLayout';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import MetaDataLayout from '@/components/MetaDataLayout';
import { ErrorTypography } from '@/components/CustomErrorMessage';
import submitFormRequest from '@/utils/submitFormRequest';

const accountOptions: (Omit<AccountOptionProps, 'selected'> & { key: string; value: string })[] = [
  {
    icon: <IndividualAccountIcon />,
    title: 'Individual',
    description: 'For individuals who want to participate, develop or build with a click of a button. ',
    value: 'individual',
    key: '1',
  },
  {
    icon: <BusinessAccountIcon />,
    title: 'Business',
    description: 'For companies and institutions who need access to our suite of tools and real-time insights to manage and run their operations.',
    value: 'business',
    key: '2',
  }
];

const AccountType: NextPage = () => {
  const { push } = useRouter();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [serverError, setServerError] = React.useState<boolean>(false);

  const theme = useTheme();
  const { handleSubmit, control, getValues, formState: { isValid } } = useForm({
    defaultValues: {
      'account-type': '',
    },
    mode: 'onChange',
  });

  const onSubmit = (
    data: { [key: string] : string },
    e: BaseSyntheticEvent<object, any, any> | undefined,
  ) => {
    submitFormRequest({
      setIsLoading,
      setServerError,
      serverError,
      data,
      fetchUrl: '/api/account-type/',
      nextPageUrl: `/sign-up/general-info?account-type=${data['account-type']}`,
      push,
    });
  };
  
  return (
    <MetaDataLayout
      title="Choose your account type"
      description="Individual or business account"
    >
      <SignUpPageLayout
        leftChildren={
          <>
            <Box
              sx={{
                marginBottom: '11px',
              }}
            >
              <Title>Welcome to Edgevana</Title>
            </Box>
            <Box
              sx={{
                marginBottom: '40px',
                [theme.breakpoints.down(small)]: {
                  marginBottom: '20px',
                },
              }}
            >
              <Description
                size={15}
              >
                Choose your account type to get started
              </Description>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl component="fieldset">
                <Box
                  sx={{
                    marginBottom: '20px',
                    [theme.breakpoints.down(small)]: {
                      marginBottom: '10px',
                    },
                  }}
                >
                  <AccountPicker
                    options={accountOptions}
                    controllerOptions={{
                      rules: {
                        required: true,
                      },
                      control: control as unknown as Control<FieldValues, any>,
                      name: 'account-type',
                    }}
                    defaultOption={getValues()['account-type'] || ''}
                  />
                  <Box
                    sx={{
                      zIndex: -1,
                      opacity: +serverError,
                      position: 'relative',
                    }}
                  >
                    <ErrorTypography>
                      Something went wrong. Try again
                    </ErrorTypography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    marginBottom: '30px',
                  }}
                >
                  <SimpleButton
                    type='submit'
                    fullWidth
                    disabled={!isValid || isLoading}
                    loading={isLoading}
                  >
                    Get started
                  </SimpleButton>
                </Box>
              </FormControl>
            </form>
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Description center>
                Already have an account?&nbsp;
                <SimpleLink href='/'>Sign in</SimpleLink>
              </Description>
            </Box>
          </>
        }
        rightChildren={
          <Box
            sx={{
              margin: 'auto',
              width: '100%',
              [theme.breakpoints.down(medium)]: {
                marginBottom: '40px',
              },
              [theme.breakpoints.down(small)]: {
                marginBottom: '20px',
              },
            }}
          >
            <Carousel />
          </Box>
        }
      />
    </MetaDataLayout>
  )
};

export default AccountType;
