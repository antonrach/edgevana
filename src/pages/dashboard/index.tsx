import AccountLayout from '@/components/AccountLayout';
import MetaDataLayout from '@/components/MetaDataLayout';
import UnderConstructionMessage from '@/components/UnderConstructionMessage';
import { NextPage } from 'next';
import React from 'react';

const Dashboard: NextPage = () => {
  return (
    <MetaDataLayout
      title='Dashboard'
      description="Your dashboard"
    >
      <AccountLayout>
        <UnderConstructionMessage />
      </AccountLayout>
    </MetaDataLayout>
  );
};

export default Dashboard;
