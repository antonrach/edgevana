import AccountLayout from '@/components/AccountLayout';
import UnderConstructionMessage from '@/components/UnderConstructionMessage';
import { NextPage } from 'next';
import React from 'react';

const Teams: NextPage = () => {
  return (
    <AccountLayout>
      <UnderConstructionMessage>
        You&apos;re gonna see your teams there
      </UnderConstructionMessage>
    </AccountLayout>
  );
};

export default Teams;
