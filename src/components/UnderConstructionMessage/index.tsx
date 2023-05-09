import { Box } from '@mui/material';
import React from 'react';
import AccountPageContainer from '../AccountPageContainer';
import Title from '../Title';

interface UnderConstructionMessageProps {
  children?: React.ReactNode;
};

const UnderConstructionMessage: React.FC<UnderConstructionMessageProps> = ({
  children,
}) => {
  return (
    <AccountPageContainer flex>
      <Box
        sx={{
          margin: 'auto',
          height: '100%',
        }}      
      >
        <Title center smSize={20}>
          {children ? children : 'This page is currently under construction'}
        </Title>
      </Box>
    </AccountPageContainer>
  );
};

export default UnderConstructionMessage;
