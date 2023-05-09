import { medium, small } from '@/constants';
import { Box, Drawer, IconButton, useTheme } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import React from 'react';
import AccountNavigation from '../AccountNavigation';
import Header from '../Header';
import useWindowResize from '@/hooks/useWindowResize';
import LoadingLayout from '../LoadingLayout';
import AccountPageContainer from '../AccountPageContainer';

interface AccountLayoutProps {
  children: React.ReactNode;
};

const AccountLayout: React.FC<AccountLayoutProps> = ({
  children,
}) => {
  const theme = useTheme();

  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false);

  useWindowResize(() => {
    if (window.innerWidth > medium && isMenuOpened) {
      setIsMenuOpened(false);
    }
  });

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '288px',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          overflowY: 'auto',
          [theme.breakpoints.down(medium)]: {
            display: 'none',
          },
        }}
      >
        <AccountNavigation />
      </Box>
      <Box
        sx={{
          marginLeft: '288px',
          [theme.breakpoints.down(medium)]: {
            marginLeft: 0,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: '20px',
            [theme.breakpoints.down(small)]: {
              paddingRight: '10px',
            },
            [theme.breakpoints.up(medium)]: {
              display: 'none',
            }
          }}
        >
          <Box>
            <Header />
          </Box>
          <Box>
            <IconButton
              onClick={() => {
                setIsMenuOpened(true)
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Drawer
            anchor="right"
            open={isMenuOpened}
            onClose={() => {
              setIsMenuOpened(false);
            }}
            sx={{
              '& .MuiDrawer-paperAnchorRight': {
                backgroundColor: 'white',
              },
            }}
          >
            <Box
              sx={{
                maxWidth: '288px',
                height: '100%',
              }}
            >
              <AccountNavigation
                close={() => {
                  setIsMenuOpened(false);
                }}
              />
            </Box>
          </Drawer>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <LoadingLayout
            disableForChildrenRoutes={[
              {
                parentRoute: '/setup',
                includeParent: true,
              },
            ]}
            SpecificTemplate={({ children }) => (
              <AccountPageContainer flex>
                <Box
                  sx={{
                    margin: 'auto',
                    height: '100%',
                  }}      
                >
                  {children}
                </Box>
              </AccountPageContainer>
            )}
          >
            {children}
          </LoadingLayout>
        </Box>
      </Box>
    </Box>
  );
};

export default AccountLayout;
