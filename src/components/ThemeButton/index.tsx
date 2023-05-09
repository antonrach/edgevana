import { DarkMode, LightMode } from '@mui/icons-material';
import { Box, Button, Typography, useTheme } from '@mui/material';
import React from 'react';

interface ThemeButtonProps {
  mode?: 'light' | 'dark';
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const ThemeButton: React.FC<ThemeButtonProps> = ({
  mode = 'light',
  active = false,
  onClick,
}) => {
  const theme = useTheme();

  const iconProps: React.ComponentProps<typeof LightMode | typeof DarkMode> = {
    sx: {
      marginRight: '8px',
    },
    fontSize: 'small',
  };

  return (
    <Button
      sx={{
        width: '100%',
        textTransform: 'none',
        height: '32px',
        borderRadius: '16px',
        backgroundColor: theme.palette.primary.light,
        color: active ?
          theme.palette.primary.main :
          theme.palette.action.disabled,
        fontWeight: 500,
        fontSize: '14px',

      }}
      onClick={onClick}
    >
      <Box
        sx={{
          width: 'fit-content',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {mode === 'light' ? (
          <LightMode {...iconProps} />
        ) : (
          <DarkMode {...iconProps} />
        )}
        <Typography
          sx={{
            fontSize: '14px',
          }}
        >
          {mode === 'light' ? 'Light' : 'Dark'}
        </Typography>
      </Box>
    </Button>
  );
};

export default ThemeButton;
