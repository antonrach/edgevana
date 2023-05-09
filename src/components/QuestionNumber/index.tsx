import { small } from '@/constants';
import { Box, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

interface QuestionNumberProps {
  children: React.ReactNode;
};

const QuestionNumber: React.FC<QuestionNumberProps> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        [theme.breakpoints.down(small)]: {
          width: '24px',
          height: '24px',
        },
      }}
    >
      <Typography
        sx={{
          fontSize: '16px',
          color: 'white',
          margin: 'auto',
          [theme.breakpoints.down(small)]: {
            fontSize: '12px',
          },
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default QuestionNumber;
