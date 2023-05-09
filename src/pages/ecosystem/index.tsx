import AccountLayout from '@/components/AccountLayout';
import MetaDataLayout from '@/components/MetaDataLayout';
import UnderConstructionMessage from '@/components/UnderConstructionMessage';
import { NextPage } from 'next';
import React from 'react';

const Ecosystem: NextPage = () => {
  return (
    <MetaDataLayout
      title="Ecosystem"
      description="The ecosystem"
    >
      <AccountLayout>
        <UnderConstructionMessage>
          We will finish the development of this page as soon as possible
        </UnderConstructionMessage>
      </AccountLayout>
    </MetaDataLayout>
  );
};

export default Ecosystem;
