import AccountLayout from '@/components/AccountLayout';
import MetaDataLayout from '@/components/MetaDataLayout';
import SetupLayout from '@/components/SetupLayout';
import SimpleButton from '@/components/SimpleButton';
import Title from '@/components/Title';
import { small } from '@/constants';
import { Box, useTheme } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const Enterpreneur: NextPage = () => {
  const theme = useTheme();


  const { push } = useRouter();

  const start = () => {
    push('/setup/enterpreneur/1');
  };

  return (
    <MetaDataLayout
      title="Set up your account"
      description="Start answering the questions"
    >
      <AccountLayout>
        <SetupLayout>
          <Box
            sx={{
              marginBottom: '40px',
              [theme.breakpoints.down(small)]: {
                marginBottom: '20px',
              },
            }}
          >
            <Title smSize={20}>
              Set up your account
            </Title>
          </Box>
          <Box
            sx={{
              width: '200px',
            }}
          >
            <SimpleButton
              fullWidth
              onClick={start}
            >
              Start
            </SimpleButton>
          </Box>
        </SetupLayout>
      </AccountLayout>
    </MetaDataLayout>
  );
};

export default Enterpreneur;
