import React from 'react';
import { Box, useTheme } from '@mui/material';
import Logo from '../Icons/Logo';
import { small } from '@/constants';

const Header: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: '21px 30px',
        [theme.breakpoints.down(small)]: {
          padding: '10px 20px',
        }
      }}
    >
      <Logo />
    </Box>
  );
};

export default Header;
