import { small } from '@/constants';
import { Typography, useTheme } from '@mui/material';
import React from 'react';

interface TitleProps {
  size?: 14 | 16 | 18 | 20 | 22 | 24 | 26 | 42;
  smSize?: 14 | 16 | 18 | 20 | 22 | 24 | 26 | 42;
  lineHeight?: number;
  center?: boolean,
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({
  size = 26,
  smSize,
  lineHeight = 1,
  center = false,
  children,
}) => {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        fontWeight: 600,
        fontSize: `${size}px`,
        color: theme.palette.text.primary,
        textAlign: center ? 'center' : 'left',
        lineHeight,
        [theme.breakpoints.down(small)]: {
          fontSize: `${smSize || size}px`,
        },
      }}
    >
      {children}
    </Typography>
  );
};

export default Title;
