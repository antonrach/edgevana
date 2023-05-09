import React from 'react';

interface WindowSize {
  width?: number;
  height?: number;
};

const useWindowResize = (
  callback?: () => void,
  dependencies: unknown[] = [],
): WindowSize => {
  const [windowSize, setWindowSize] = React.useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (callback) {
        callback();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return windowSize;
};

export default useWindowResize;
