import { setupLinks, small } from '@/constants';
import { Box, Button, useTheme } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/router';
import React from 'react';
import SetupNavLink from '../SetupNavLink';
import Link from 'next/link';

const SetupNavBar: React.FC = () => {
  const theme = useTheme();

  const { pathname } = useRouter();
  const [currentLinkName, setCurrentLinkName] = React.useState<string>('');

  React.useEffect(() => {
    if (setupLinks) {
      const link = setupLinks.find(({ href }) => pathname.startsWith(href));
      setCurrentLinkName(link?.children as string || '');
    }
  }, [pathname]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          borderRadius: '8px',
          backgroundColor: 'white',
          overflow: 'hidden',
          [theme.breakpoints.down(small)]: {
            display: 'none',
          }
        }}
      >
        {setupLinks.map((linkProps) => (
          // eslint-disable-next-line react/jsx-key
          <SetupNavLink {...linkProps} />
        ))}
      </Box>
      <Box
        sx={{
          [theme.breakpoints.up(small)]: {
            display: 'none',
          },
        }}
      >
        <Button
          sx={{
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '18px',
            color: theme.palette.text.primary,
            marginLeft: '-8px',
            [theme.breakpoints.down(small)]: {
              marginLeft: '-4px',
            },
          }}
          endIcon={<KeyboardArrowDownIcon />}
          onClick={handleClick}
        >
          {currentLinkName || 'Explore'}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{
            '& .MuiList-root': {
              padding: 0,
            }
          }}
        >
          {setupLinks.map((link) => (
            <MenuItem
              key={link.key}
              onClick={handleClose}
              sx={{
                padding: 0,
              }}
            >
              <Button
                href={link.href}
                LinkComponent={Link}
                sx={{
                  color: theme.palette.text.primary,
                  minWidth: '0 !important',
                  width: '100%',
                  textTransform: 'none',
                  justifyContent: 'flex-start',
                }}
              >
                {link.children}
              </Button>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default SetupNavBar;
