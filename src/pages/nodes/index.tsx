import AccountLayout from '@/components/AccountLayout';
import MetaDataLayout from '@/components/MetaDataLayout';
import UnderConstructionMessage from '@/components/UnderConstructionMessage';
import { NextPage } from 'next';
import React from 'react';

const Nodes: NextPage = () => {
  return (
    <MetaDataLayout
      title="Nodes"
      description="Nodes"
    >
      <AccountLayout>
        <UnderConstructionMessage>
          The &apos;Nodes&apos; page will be available soon
        </UnderConstructionMessage>
      </AccountLayout>
    </MetaDataLayout>
  );
};

export default Nodes;
