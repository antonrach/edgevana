import { accNavLinks, medium, small } from '@/constants';
import { Box, Grid, IconButton, useTheme } from '@mui/material';
import React from 'react';
import AccountNavLink from '../AccountNavLink';
import Header from '../Header';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from "@mui/icons-material/Close";
import CircleAvatar from '../CircleAvatar';
import Title from '../Title';
import Description from '../Description';

import Avatar from '../../../public/pics/Avatar.png';
import { useRouter } from 'next/router';
import ThemeButton from '../ThemeButton';

const userData = {
  firstName: 'Ryan',
  lastName: 'Fay',
  email: 'ryanfay@edgevana.com',
  avatarSrc: Avatar.src,
};

interface AccountNavigationProps {
  close?: () => void;
}

const AccountNavigation: React.FC<AccountNavigationProps> = ({
  close,
}) => {
  const theme = useTheme();

  const { push, pathname } = useRouter();
  const logOut = () => {
    push('/sign-up/account-type');
  };
  const darkMode = () => {
    push('/dark-mode');
  };
  const lightMode = () => {
    if (pathname === '/dark-mode') {
      push('/setup/news');
    }
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Box
          sx={{
            marginBottom: '50px',
            [theme.breakpoints.down(medium)]: {
              display: 'none',
            },
          }}
        >
          <Header />
        </Box>
        <Box
          sx={{
            padding: '18px',
            paddingBottom: '10px',
            [theme.breakpoints.up(medium)]: {
              display: 'none',
            },
            [theme.breakpoints.down(small)]: {
              padding: '7px',
            },
          }}
        >
          <IconButton
            onClick={close}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            padding: '0 15px',
            [theme.breakpoints.down(small)]: {
              padding: '0 5px',
            },
          }}
        >
          {accNavLinks.map((linkProps) => (
            // eslint-disable-next-line react/jsx-key
            <AccountNavLink
              onClick={close}
              {...linkProps}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          padding: '30px 15px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            marginBottom: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  marginRight: '7px',
                }}
              >
                <CircleAvatar
                  src={userData.avatarSrc}
                  alt={'Avatar'}
                />
              </Box>
              <Box>
                <Box
                  sx={{
                    marginBottom: '2px',
                  }}
                >
                  <Title
                    size={14}
                  >
                    {userData.firstName}
                    &nbsp;
                    {userData.lastName}
                  </Title>
                </Box>
                <Description
                  size={12}
                >
                  {userData.email}
                </Description>
              </Box>
            </Box>
            <IconButton
              onClick={logOut}
            >
              <LogoutIcon />
            </IconButton>
          </Box>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <ThemeButton
              active
              onClick={lightMode}
            />
          </Grid>
          <Grid item xs={6}>
            <ThemeButton
              mode="dark"
              onClick={darkMode}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AccountNavigation;
