import { Box, Button, SxProps, Theme, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IconProps } from '../Icons/propTypes';

export interface AccountNavLinkProps {
  Icon: React.FC<IconProps>
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const AccountNavLink: React.FC<AccountNavLinkProps> = ({
  Icon,
  href,
  children,
  onClick,
}) => {
  const { pathname } = useRouter();
  const [isActive, setIsActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsActive(pathname.startsWith(href));
  }, [href, pathname]);

  const theme = useTheme();
  const color = isActive ? 'white' : '#151F4EB8';

  const hoverStyle: SxProps<Theme> = isActive ? {
    backgroundColor: theme.palette.primary.main,
  } : {};

  return (
    <Button
      sx={{
        padding: '15px',
        borderRadius: '6px',
        backgroundColor: isActive ? theme.palette.primary.main : 'transparent',
        width: '100%',
        height: '48px',
        '&:hover': {
          ...hoverStyle,
        },
      }}
      LinkComponent={Link}
      href={href}
      onClick={onClick}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        <Box
          sx={{
            marginRight: '20px',
            display: 'flex',
          }}
        >
          <Icon
            color={color}
          />
        </Box>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '500px',
            color,
            textTransform: 'none',
          }}
        >
          {children}
        </Typography>
      </Box>
    </Button>
  );
};

export default AccountNavLink;
