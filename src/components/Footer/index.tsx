import { small } from '@/constants';
import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: '32px',
        marginTop: 'auto',
        [theme.breakpoints.down(small)]: {
          padding: '10px',
        },
      }}
    >
      <Typography
        sx={{
          fontSize: '12px',
          lineHeight: '14.5px',
          textAlign: 'center',
          color: theme.palette.text.secondary,
        }}
      >
        © Edegvana 2022
      </Typography>
    </Box>
  );
};

export default Footer;
