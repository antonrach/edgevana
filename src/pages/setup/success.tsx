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

const Success: NextPage = () => {
  const theme = useTheme();


  const { push } = useRouter();

  const navigate = () => {
    push('/setup/news/');
  };

  return (
    <MetaDataLayout
      title="Congratulations!"
      description="Your account is set up"
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
              Congratulations! Your account was successfully set up
            </Title>
          </Box>
          <Box
            sx={{
              width: '200px',
            }}
          >
            <SimpleButton
              fullWidth
              onClick={navigate}
            >
              Got it
            </SimpleButton>
          </Box>
        </SetupLayout>
      </AccountLayout>
    </MetaDataLayout>
  );
};

export default Success;
