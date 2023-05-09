import { Button, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export interface SetupNavLinkProps {
  href: string;
  children: React.ReactNode;
};

const SetupNavLink: React.FC<SetupNavLinkProps> = ({
  href,
  children,
}) => {
  const { pathname } = useRouter();
  const [isActive, setIsActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsActive(pathname.startsWith(href));
  }, [href, pathname]);

  const theme = useTheme();

  return (
    <Button
      sx={{
        padding: 0,
        display: 'inline-block',
        minWidth: '0 !important',
        '&::after': {
          content: '""',
          width: isActive ? '100%' : 0,
          height: '1px',
          background: 'linear-gradient(90deg, rgba(43,62,155,1) 0%, rgba(255,255,255,1) 100%)',
          transition: 'width .3s',
          display: 'block',
        },
        '&:hover::after': {
          width: '100%',
        },
      }}
      LinkComponent={Link}
      href={href}
    >
      <Typography
        sx={{
          padding: '20px 25px',
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '14px',
          color: isActive ?
            theme.palette.primary.main :
            theme.palette.text.secondary,
            [theme.breakpoints.down(1100)]: {
              padding: '10px 6.5px',
            },
        }}
      >
        {children}
      </Typography>
    </Button>
  );
};

export default SetupNavLink;
