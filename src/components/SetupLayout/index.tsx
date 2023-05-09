import { medium, small } from '@/constants';
import setPlaceholderStyle from '@/utils/setPlaceholderStyle';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, useTheme } from '@mui/material';
import React from 'react';
import AccountPageContainer from '../AccountPageContainer';
import Description from '../Description';
import SetupIcon from '../Icons/SetupIcon';
import { CustomInput } from '../Input';
import LoadingLayout from '../LoadingLayout';
import SetupNavBar from '../SetupNavBar';
import Title from '../Title';

interface SetupLayoutProps {
  children: React.ReactNode;
};

const SetupLayout: React.FC<SetupLayoutProps> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <AccountPageContainer>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          [theme.breakpoints.down(small)]: {
            flexDirection: 'column',
            alignItems: 'start',
            marginBottom: '10px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down(small)]: {
              marginBottom: '20px',
            },
          }}
        >
          <Box
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'white',
              display: 'flex',
              marginRight: '20px',
            }}
          >
            <Box
              sx={{
                margin: 'auto',
              }}
            >
              <SetupIcon color="#4B516A" />
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                marginBottom: '7px',
              }}
            >
              <Title size={20} smSize={16}>
                Discover Web3
              </Title>
            </Box>
            <Description size={12}>
              Web3/Entrepreneur Toolkit
            </Description>
          </Box>
        </Box>
        <Box
          sx={{
            [theme.breakpoints.down(small)]: {
              width: '100%',
            },
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <CustomInput
              sx={{
                width: '100%',
                '& > div': {
                  borderColor: theme.palette.secondary.light,
                  ' input': {
                    paddingLeft: 0,
                    ...setPlaceholderStyle({
                      color: theme.palette.primary.dark,
                    }),
                  },
                },
              }}
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Box
                      sx={{
                        color: theme.palette.primary.dark,
                        opacity: 0.4,
                        display: 'flex',
                      }}
                    >
                      <SearchIcon color='inherit' />
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Box>
      </Box>
      <Box
        sx={{
          marginBottom: '60px',
          [theme.breakpoints.down(1100)]: {
            marginBottom: '40px',
          },
          [theme.breakpoints.down(medium)]: {
            marginBottom: '30px',
          },
          [theme.breakpoints.down(small)]: {
            marginBottom: '20px',
          },
        }}
      >
        <SetupNavBar />
      </Box>
      <Box>
        <LoadingLayout
          disableForChildrenRoutes={[{
            parentRoute: '/setup/enterpreneur',
            includeParent: false,
          }]}
        >
          {children}
        </LoadingLayout>
      </Box>
    </AccountPageContainer>
  );
};

export default SetupLayout;
