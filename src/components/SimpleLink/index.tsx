import Link from 'next/link';
import { Button, Link as MUILink, useTheme } from '@mui/material';
import React from 'react';

interface SimpleLinkProps {
  href: string;
  children: React.ReactNode;
  lineHeight?: number,
};

const SimpleLink: React.FC<SimpleLinkProps> = ({
  href,
  children,
  lineHeight = 1.5
}) => {
  const theme = useTheme();

  return (
    <Button
      variant="text"
      LinkComponent={Link}
      href={href}
      sx={{
        color: theme.palette.primary.main,
        textTransform: 'none',
        padding: '0',
        display: 'inline',
        lineHeight,
        '&:hover': {
          backgroundColor: 'transparent',
        }
      }}
    >
      {children}
    </Button>
  );
};

export default SimpleLink;
