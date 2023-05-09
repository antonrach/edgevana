import { medium, small } from '@/constants';
import { Box, useTheme } from '@mui/material';
import React from 'react';

interface AccountPageContainerProps {
  children: React.ReactNode;
  flex?: boolean;
}

const AccountPageContainer: React.FC<AccountPageContainerProps> = ({
  children,
  flex = false,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: flex ? 'flex' : 'block',
        backgroundColor: theme.palette.background.paper,
        padding: '30px',
        [theme.breakpoints.down(medium)]: {
          minHeight: 'unset',
          flexGrow: 1,
        },
        [theme.breakpoints.down(small)]: {
          padding: '10px',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default AccountPageContainer;
