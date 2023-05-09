import { Box, CircularProgress, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

interface LoadingLayoutProps {
  SpecificTemplate?: React.FC<{ [key: string]: any }>;
  disableForChildrenRoutes?: {
    parentRoute: string;
    includeParent: boolean;
  }[];
  children: React.ReactNode;
}

const LoadingLayout: React.FC<LoadingLayoutProps> = ({
  SpecificTemplate = ({ children }) => {
    const theme = useTheme();
    return (
      <Box
        sx={{
          padding: '20px',
          color: theme.palette.text.primary,
        }}
      >
        {children}
      </Box>
    );
  },
  disableForChildrenRoutes = [],
  children,
}) => {
  const router = useRouter();

  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
      const handleStart = (url: string) => {
        if (url !== router.asPath) {
          let loadingState = true;
          disableForChildrenRoutes.forEach(({
            parentRoute,
            includeParent,
          }) => {
            if (
              url.startsWith(parentRoute) &&
              router.asPath.startsWith(parentRoute)
            ) {
              if (
                !includeParent &&
                (
                  url === parentRoute ||
                  router.asPath === parentRoute
                )
              ) {
                loadingState = true;
                return;
              }
              loadingState = false;
            }
          });
          setLoading(loadingState)
        }
      };
      const handleComplete = (url: string) => (url === router.asPath) && setLoading(false);

      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);

      return () => {
          router.events.off('routeChangeStart', handleStart);
          router.events.off('routeChangeComplete', handleComplete);
          router.events.off('routeChangeError', handleComplete);
      };
  });

  return (
    <>
      {loading ? (
        <SpecificTemplate>
            <CircularProgress color='inherit' size={60} />
        </SpecificTemplate>
      ) : children}
    </>
  );
};

export default LoadingLayout;
