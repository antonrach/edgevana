import AccountLayout from '@/components/AccountLayout';
import SetupLayout from '@/components/SetupLayout';
import { Box, useTheme } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const Setup: NextPage = () => {
  const theme = useTheme();
  const { push } = useRouter();

  React.useEffect(() => {
    push('/setup/overview');
  }, [push]);
  
  return (
    <AccountLayout>
      <SetupLayout>
        <Box
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          <CircularProgress color='inherit' size={60} />
        </Box>
      </SetupLayout>
  </AccountLayout>
  );
};

export default Setup;
