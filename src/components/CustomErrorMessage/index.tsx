import { ErrorMessage } from '@hookform/error-message';
import { Box, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { FieldErrors } from 'react-hook-form';

interface ErrorTypographyProps {
  children: React.ReactNode;
}

export const ErrorTypography: React.FC<ErrorTypographyProps> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <Typography
      sx={{ color: theme.palette.error.main, fontSize: '12px' }}
    >
      {children}
    </Typography>
  );
}

interface CustomErrorMessageProps {
  errors: FieldErrors,
  name: string,
};

const CustomErrorMessage: React.FC<CustomErrorMessageProps> = ({
  errors,
  name,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: '18px',
      }}
    >
      <ErrorMessage
        errors={errors}
        name={name}
        render={(message) => (
          <ErrorTypography>
            {message.message || 'This is required.'}
          </ErrorTypography>
        )}
      />
    </Box>
  );
};

export default CustomErrorMessage;
