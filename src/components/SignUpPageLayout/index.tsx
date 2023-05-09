import { medium, small } from '@/constants';
import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface SignUpPageLayoutProps {
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
  specialPaddingLeft?: boolean;
};

const SignUpPageLayout: React.FC<SignUpPageLayoutProps> = ({
  leftChildren,
  rightChildren,
  specialPaddingLeft = true,
}) => {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={0}
      sx={{
        minHeight: '100vh',
        [theme.breakpoints.down(medium)]: {
          flexDirection: 'column',
        }
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          [theme.breakpoints.down(medium)]: {
            paddingBottom: '30px',
            minHeight: '100vh',
          },
          [theme.breakpoints.down(small)]: {
            paddingBottom: '15px',
          }
        }}
      >
        <Box>
          <Header />
        </Box>
        <Box
          sx={{
              maxWidth: '400px',
              marginLeft: 'auto',
              marginRight: 'auto',
              flexGrow: 1,
              display: 'flex',
              [theme.breakpoints.down(medium)]: {
                maxWidth: '90%',
                paddingTop: '60px',
              },
              [theme.breakpoints.down(small)]: {
                paddingTop: '10px',
                maxWidth: '100%',
                padding: '20px',
              },
            }}
          >
            <Box
              sx={{
                margin: 'auto',
              }}
            >
              {leftChildren}
            </Box>
          </Box>
        <Box
          sx={{
            [theme.breakpoints.down(medium)]: {
              display: 'none',
            },
          }}
        >
          <Footer />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: theme.palette.background.paper,
          display: 'flex',
          flexDirection: 'column',
          padding: '50px',
          paddingLeft: specialPaddingLeft ? '100px' : '50px',
          paddingRight: specialPaddingLeft ? '0' : '50px',
          [theme.breakpoints.down(medium)]: {
            paddingBottom: 0,
            paddingLeft: '50px',
            paddingRight: specialPaddingLeft ? '0' : '30px',
          },
          [theme.breakpoints.down(small)]: {
            padding: '30px',
            paddingLeft: '30px',
            paddingRight: specialPaddingLeft ? '0' : '30px',
            paddingBottom: '10px',
          },
        }}
      >
        {rightChildren}
        <Box
          sx={{
            [theme.breakpoints.up(medium)]: {
              display: 'none',
            },
          }}
        >
          <Footer />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUpPageLayout;
