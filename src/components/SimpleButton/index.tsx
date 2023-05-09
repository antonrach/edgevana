import { small } from '@/constants';
import { Button, ButtonTypeMap, CircularProgress, Typography, useTheme } from '@mui/material';
import React from 'react';

interface SimpleButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean;
  onClick?: () => void;
  color?: 'primary' | 'info';
  loading?: boolean;
};

const SimpleButton: React.FC<SimpleButtonProps> = ({
  children,
  fullWidth = false,
  type = 'submit',
  disabled = false,
  onClick,
  color = 'primary',
  loading = false,
}) => {
  const theme = useTheme();
  return (
    <Button
      sx={{
        width: fullWidth ? '100%' : 'auto',
        backgroundColor: color === 'primary' ? theme.palette.primary.main : theme.palette.info.main,
        padding: '18px 20px',
        borderRadius: '8px',
        textTransform: 'none',
        color: color === 'primary' ? 'white' : theme.palette.text.secondary,
        '&:hover': {
          backgroundColor: color === 'primary' ? theme.palette.primary.main : theme.palette.info.main,
        },
        '&[disabled]': {
          backgroundColor: theme.palette.action.disabledBackground,
          '&:hover': {
            cursor: 'default',
          }
        },
        [theme.breakpoints.down(small)]: {
          padding: '9px',
        },
      }}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? (
        <CircularProgress size={21} color='inherit' />
      ) : (
        <Typography
        sx={{
            color: color === 'primary' ? 'white' : theme.palette.text.secondary,
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          {children}
        </Typography>
      )}
    </Button>
  );
};

export default SimpleButton;
