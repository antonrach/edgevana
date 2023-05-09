import AccountLayout from '@/components/AccountLayout';
import MetaDataLayout from '@/components/MetaDataLayout';
import UnderConstructionMessage from '@/components/UnderConstructionMessage';
import { NextPage } from 'next';
import React from 'react';

const Ecosystem: NextPage = () => {
  return (
    <MetaDataLayout
      title="Analytics"
      description="Your account analytics"
    >
        <AccountLayout>
          <UnderConstructionMessage>
            You&apos;ll see the analytics very soon
          </UnderConstructionMessage>
        </AccountLayout>
    </MetaDataLayout>
  );
};

export default Ecosystem;
