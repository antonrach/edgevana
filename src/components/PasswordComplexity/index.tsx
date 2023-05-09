import { small } from '@/constants';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

interface PasswordComplexityItemProps {
  completed: boolean;
};

const PasswordComplexityItem: React.FC<PasswordComplexityItemProps> = ({
  completed,
}) => {
  const theme = useTheme();

  return (
    <Grid
      item
      xs={4}
      sx={{
        paddingTop: '0 !important',
      }}
    >
      <Box
        sx={{
          background:
            completed ?
            'linear-gradient(90deg, rgba(43,62,155,1) 0%, rgba(174,174,241,1) 50%, rgba(43,62,155,1) 100%)' :
            theme.palette.primary.light,
          height: '6px',
          borderRadius: '3px',
        }}
      />
    </Grid>
  );
}

interface PasswordComplexityProps {
  level: 0 | 1 | 2 | 3;
};

const PasswordComplexity: React.FC<PasswordComplexityProps> = ({
  level
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down(small));
  return (
    <Grid
      container
      spacing={isSmall ? 1 : 2}
      sx={{
        marginTop: '0 !important',
      }}
    >
      <PasswordComplexityItem completed={level > 0} />
      <PasswordComplexityItem completed={level > 1} />
      <PasswordComplexityItem completed={level > 2} />
    </Grid>
  );
};

export default PasswordComplexity;
