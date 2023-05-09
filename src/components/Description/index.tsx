import { small } from '@/constants';
import { Typography, useTheme } from '@mui/material';
import React from 'react';

interface DescriptionProps {
  size?: 12 | 14 | 15 | 16;
  smSize?: 12 | 14 | 15 | 16;
  children: React.ReactNode;
  center?: boolean;
  lineHeight?: number;
};

const Description: React.FC<DescriptionProps> = ({
  size = 14,
  smSize,
  children,
  center = false,
  lineHeight = 1.5,
}) => {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        color: theme.palette.text.secondary,
        fontSize: size,
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

export default Description;
